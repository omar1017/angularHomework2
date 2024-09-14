import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-audio',
  standalone: true,
  imports: [],
  templateUrl: './audio.component.html',
  styleUrl: './audio.component.css'
})
export class AudioComponent {
  @Input()
  sources: string[] = []

  playSound(){
    let audio = new Audio();
    audio.src = this.sources.find(source => source !== "")!;
    audio.load();
    audio.play();
    console.log(this.sources);
  }
}
