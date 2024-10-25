import { Injectable } from '@angular/core';
import { iPokemon } from '../interfaces/i-pokemon';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private userId: string | null = null;
  private favoritesMap = new Map<string, iPokemon[]>();
  private favoritesSubject = new BehaviorSubject<iPokemon[]>([]);
  favorites$ = this.favoritesSubject.asObservable();

  constructor() {
    // Recupera i preferiti dal localStorage all'avvio
    this.loadFavoritesFromStorage();
  }

  private loadFavoritesFromStorage() {
    const favoritesJson = localStorage.getItem('userFavorites');
    if (favoritesJson) {
      const favorites = JSON.parse(favoritesJson);
      Object.entries(favorites).forEach(([userId, pokemonList]) => {
        this.favoritesMap.set(userId, pokemonList as iPokemon[]);
      });
    }
  }

  private saveFavoritesToStorage() {
    const favorites: { [key: string]: iPokemon[] } = {};
    this.favoritesMap.forEach((value, key) => {
      favorites[key] = value;
    });
    localStorage.setItem('userFavorites', JSON.stringify(favorites));
  }

  setUserId(id: string) {
    this.userId = id;
    if (!this.favoritesMap.has(id)) {
      this.favoritesMap.set(id, []);
    }
    this.favoritesSubject.next(this.favoritesMap.get(id) || []);
  }

  addToFavorites(pokemon: iPokemon) {
    if (!this.userId) return;

    const userFavorites = this.favoritesMap.get(this.userId) || [];
    if (!userFavorites.some((p) => p.nome === pokemon.nome)) {
      userFavorites.push({ ...pokemon });
      this.favoritesMap.set(this.userId, userFavorites);
      this.favoritesSubject.next(userFavorites);
      this.saveFavoritesToStorage();
    }
  }

  removeFromFavorites(pokemonNome: string) {
    if (!this.userId) return;

    const userFavorites = this.favoritesMap.get(this.userId) || [];
    const updatedFavorites = userFavorites.filter(
      (p) => p.nome !== pokemonNome
    );
    this.favoritesMap.set(this.userId, updatedFavorites);
    this.favoritesSubject.next(updatedFavorites);
    this.saveFavoritesToStorage();
  }

  getFavorites(): iPokemon[] {
    return this.userId ? this.favoritesMap.get(this.userId) || [] : [];
  }
}
