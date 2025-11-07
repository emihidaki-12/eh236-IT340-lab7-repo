
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ApiService } from './api'; // <-- your service file

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  greeting$!: Observable<{ message: string }>;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.greeting$ = this.api.getGreeting();
  }
}

