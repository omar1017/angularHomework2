import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DictionaryComponent } from "./dictionary/dictionary.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabsModule, DictionaryComponent],
  template: `<app-dictionary></app-dictionary>`,
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'dictionaryapi-app';
}
