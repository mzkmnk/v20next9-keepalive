import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'v20next9-keepalive';
  numberOfRequests: number = 10;
  keepaliveTime: number | null = null;
  noKeepaliveTime: number | null = null;
  keepaliveResults: string[] = [];
  noKeepaliveResults: string[] = [];
  loadingKeepalive: boolean = false;
  loadingNoKeepalive: boolean = false;

  constructor(private http: HttpClient) {}

  async sendRequests(type: 'keepalive' | 'no-keepalive') {
    if (type === 'keepalive') {
      this.loadingKeepalive = true;
      this.keepaliveResults = [];
      this.keepaliveTime = null;
    } else {
      this.loadingNoKeepalive = true;
      this.noKeepaliveResults = [];
      this.noKeepaliveTime = null;
    }

    const baseUrl = 'http://localhost:3000';
    const startTime = performance.now();

    for (let i = 0; i < this.numberOfRequests; i++) {
      try {
        const response = await firstValueFrom(this.http.get(`${baseUrl}/${type}`, { responseType: 'text' }));
        if (type === 'keepalive') {
          this.keepaliveResults.push(`Request ${i + 1}: ${response}`);
        } else {
          this.noKeepaliveResults.push(`Request ${i + 1}: ${response}`);
        }
      } catch (error: any) {
        const message = `Request ${i + 1}: Error - ${error.message || 'Unknown error'}`;
        if (type === 'keepalive') {
          this.keepaliveResults.push(message);
        } else {
          this.noKeepaliveResults.push(message);
        }
      }
    }

    const endTime = performance.now();
    const totalTime = endTime - startTime;

    if (type === 'keepalive') {
      this.keepaliveTime = totalTime;
      this.loadingKeepalive = false;
    } else {
      this.noKeepaliveTime = totalTime;
      this.loadingNoKeepalive = false;
    }
  }
}
