import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  character: any;

  constructor(
    private route: ActivatedRoute,
    private characterservice: CharacterService
  ) { }

  ngOnInit() {
    this.getCharacter();
  }

  getCharacter(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.characterservice.getCharacter(+id)
        .subscribe(character => this.character = character);
    }
  }
}
