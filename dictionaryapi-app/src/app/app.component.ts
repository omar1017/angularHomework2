import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DictionaryComponent } from "./dictionary/dictionary.component";
import { MeaningComponent } from './meaning/meaning.component';
import { CommonModule } from '@angular/common';
import { SynonymsComponent } from './synonyms/synonyms.component';
import { DefinitionComponent } from './definition/definition.component';
import { AudioComponent } from './audio/audio.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabsModule, DictionaryComponent,MeaningComponent,SynonymsComponent,DefinitionComponent,AudioComponent,CommonModule],
  template: `<app-dictionary></app-dictionary>`,
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'dictionaryapi-app';
}
