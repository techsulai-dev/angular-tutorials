import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-signaldemo',
  imports: [],
  templateUrl: './signaldemo.html',
  styleUrl: './signaldemo.scss',
})
export class Signaldemo {
  count = signal(0);

  doublecount = computed(() => this.count() * 2);

  constructor()
  {
    effect(() => {
      console.log('Count value changed:', this.count());
    });
  }

  increment = () => {
    // this.count.set(this.count() + 1);
    this.count.update((c) => c + 1);
  };

  decrement = () => {
    // this.count.set(this.count() - 1);
    this.count.update(c => c - 1);
  };


}
