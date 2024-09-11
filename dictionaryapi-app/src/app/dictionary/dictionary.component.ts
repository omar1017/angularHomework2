import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-dictionary',
  standalone: true,
  imports: [RouterOutlet, TabsModule],
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.css'
})
export class DictionaryComponent {
  
}
