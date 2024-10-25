import { Component } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { AuthService } from '../../auth/auth.service';
import { iPokemon } from '../../interfaces/i-pokemon';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.scss',
})
export class PreferitiComponent {
  favoritePokemons$!: Observable<iPokemon[]>;
  constructor(
    private favoritesService: FavoritesService,
    private authSvc: AuthService
  ) {}

  ngOnInit() {
    this.favoritePokemons$ = this.favoritesService.favorites$;
    this.authSvc.user$.subscribe((user) => {
      if (user?.id) {
        this.favoritesService.setUserId(user.id.toString());
      }
    });
  }
  removeFromFavorites(pokemonNome: string) {
    this.favoritesService.removeFromFavorites(pokemonNome);
  }
}
