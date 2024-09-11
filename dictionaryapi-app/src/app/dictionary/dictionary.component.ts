import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DictionaryService } from '../../services/dictionary.service';

@Component({
  selector: 'app-dictionary',
  standalone: true,
  imports: [RouterOutlet, TabsModule],
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.css'
})
export class DictionaryComponent implements OnInit {

  constructor(private dictionaryService: DictionaryService) {

  }

  ngOnInit(): void {
    
  }

}
