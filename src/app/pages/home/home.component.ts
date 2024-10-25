import { Component } from '@angular/core';
import { iPokemon } from '../../interfaces/i-pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { UsersService } from '../../services/users.service';
import { iUser } from '../../interfaces/i-user';
import { FavoritesService } from '../../services/favorites.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  pokemonList: iPokemon[] = [];
  usersList: iUser[] = [];

  constructor(
    private pokemonSvc: PokemonService,
    private usersSvc: UsersService,
    private favoritesSvc: FavoritesService,
    private authSvc: AuthService
  ) {}
  ngOnInit() {
    this.pokemonSvc.getAllPokemon().subscribe((pokemon) => {
      this.pokemonList = pokemon;
      console.log(this.pokemonList);
    });
    this.usersSvc.getAllUsers().subscribe((users) => {
      this.usersList = users;
      console.log(this.usersList);
    });
    this.authSvc.user$.subscribe((user) => {
      if (user?.id) {
        this.favoritesSvc.setUserId(user.id.toString());
      }
    });
  }
  addToFavorites(pokemon: iPokemon) {
    this.favoritesSvc.addToFavorites(pokemon);
  }
}
