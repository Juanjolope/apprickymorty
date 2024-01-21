import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CharacterComponent } from './character/character.component';

const routes: Routes = [
  {
    path: 'home',
    component: LandingComponent
  },
  {
    path: 'character/:id',
    component: CharacterComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
