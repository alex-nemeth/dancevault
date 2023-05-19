import { Component } from '@angular/core';

@Component({
  selector: 'app-tempotool',
  templateUrl: './tempotool.component.html',
  styleUrls: ['./tempotool.component.css'],
})
export class TempotoolComponent {
  prevTime = 0;
  countClicks = 0;
  currentTime = 0;
  bpm = 0;
  timeDifference = 0;
  bpmTotal = 0;
  bpmFinal = 0;
  genres: string[] = [];

  beatsPerMinute() {
    if (this.prevTime === 0) this.prevTime = Date.now();
    else if (Date.now() - this.prevTime > 2200) this.reset();
    else {
      this.currentTime = Date.now();
      this.timeDifference = this.currentTime - this.prevTime;
      this.prevTime = this.currentTime;
      this.bpm = 60 / this.timeDifference;
      this.bpmTotal = this.bpmTotal + this.bpm;
      this.countClicks++;
      this.bpmFinal = Number(
        ((this.bpmTotal / this.countClicks) * 1000).toFixed(1)
      );
      this.assignGenres(this.bpmFinal);
    }
  }

  assignGenres(bpm: number) {
    this.genres = [];
    if (bpm >= 100 && bpm <= 160) this.genres.push('Techno');
    if (bpm >= 160 && bpm <= 170) this.genres.push('Jungle');
    if (bpm >= 170 && bpm <= 176) this.genres.push('Drum & Bass');
    if (bpm >= 140 && bpm <= 150) this.genres.push('Dubstep');
    if (bpm >= 110 && bpm <= 128) this.genres.push('House');
    if (bpm >= 180) this.genres.push('psychopath alert!!!');
  }

  reset() {
    this.prevTime = 0;
    this.bpm = 0;
    this.bpmTotal = 0;
    this.bpmFinal = 0;
    this.countClicks = 0;
    this.genres = [];
  }
}
