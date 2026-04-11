import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  @Input() items: string[] = [];
}
