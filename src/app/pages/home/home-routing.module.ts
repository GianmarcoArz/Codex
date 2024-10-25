import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PreferitiComponent } from '../preferiti/preferiti.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'preferiti', component: PreferitiComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
