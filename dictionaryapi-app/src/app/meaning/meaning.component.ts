import { Component, Input, input, OnInit } from '@angular/core';
import { DictionaryComponent } from '../dictionary/dictionary.component';
import { Meaning } from '../../Models/Meaning';
import { Definition } from '../../Models/Definition';
import { Word } from '../../Models/Word';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meaning',
  standalone: true,
  imports: [DictionaryComponent,CommonModule],
  templateUrl: './meaning.component.html',
  styleUrl: './meaning.component.css'
})
export class MeaningComponent implements OnInit {
  meanings!:Definition[];
  
  @Input() meaningData: Definition[] | null = null;
  
  ngOnInit(): void {

  }
 
}
