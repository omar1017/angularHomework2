import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DictionaryService } from '../../services/dictionary.service';
import { Word } from '../../Models/Word';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dictionary',
  standalone: true,
  imports: [RouterOutlet, TabsModule,FormsModule],
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.css'
})
export class DictionaryComponent implements OnInit {

  wordSearch:string="";
  data:Word | null = null;
  constructor(private dictionaryService: DictionaryService) {

  }

  ngOnInit(): void {
    
  }

  getWordFromApi():void{
    this.dictionaryService.getWord(this.wordSearch).subscribe(
      (d)=>{
        this.data = d[0];
      }
    )
  }

}
