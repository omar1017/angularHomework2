import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Definition } from '../../Models/Definition';

@Component({
  selector: 'app-definition',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './definition.component.html',
  styleUrl: './definition.component.css'
})
export class DefinitionComponent {
@Input() definitions!:Definition[];
}
