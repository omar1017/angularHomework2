import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-synonyms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './synonyms.component.html',
  styleUrl: './synonyms.component.css'
})
export class SynonymsComponent {
  @Input() synonyms!:string[];
}
