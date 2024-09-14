import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DictionaryService } from '../../services/dictionary.service';
import { Word } from '../../Models/Word';
import { FormsModule } from '@angular/forms';
import { MeaningComponent } from "../meaning/meaning.component";
import { Definition } from '../../Models/Definition';
import { SynonymsComponent } from "../synonyms/synonyms.component";
import { DefinitionComponent } from "../definition/definition.component";
import { AudioComponent } from "../audio/audio.component";

@Component({
  selector: 'app-dictionary',
  standalone: true,
  imports: [RouterOutlet, TabsModule, FormsModule, MeaningComponent, SynonymsComponent, DefinitionComponent, AudioComponent],
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.css'
})
export class DictionaryComponent implements OnInit {

   wordSearch:string="";
   data:Word | null = null;
  meaning!:Definition[];
  definition!:Definition[];
  synonyms!:string[];
  audio!:string[];
  constructor(private dictionaryService: DictionaryService) {

  }

  ngOnInit(): void {
    
  }

  getWordFromApi():void{
    
    this.dictionaryService.getWord(this.wordSearch).subscribe(
      (d)=>{
        this.data = d[0];
        this.meaning = this.data.meanings[0].definitions;
        this.definition = this.data.meanings[0].definitions;
        this.synonyms = this.data.meanings[0].synonyms;
        this.audio = this.data.phonetics.map(phonatic => phonatic.audio);
      }
    )
    
  }

}
