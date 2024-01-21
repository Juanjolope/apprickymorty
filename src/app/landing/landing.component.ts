import { Component, OnInit } from '@angular/core';
import { Character } from '../models/Character';
import { Router } from '@angular/router';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  
  titulo:string = "APP RICK Y MORTY";
  data: Character[] = [];
  pageInfo: any; 
  page: number = 1;

  constructor(private characterService:CharacterService , private router: Router) {}

  ngOnInit(): void {
    this.llenarData();
  }
  

  llenarData(){
    this.characterService.getData().subscribe( data => {
      console.log(data);
      const { info, results } = data;
      this.data = results;
      this.pageInfo = info;
    });
  }
  
  SiguientePagina(): void {
    this.characterService.sigueintePagina();
    this.llenarData();
  }

  PaginaAnterior(): void {
    this.characterService.paginaAnterior();
    this.llenarData();
  }

  showCharacterDetails(characterId: number): void {
    this.router.navigate(['character', characterId]);
  }

 
}