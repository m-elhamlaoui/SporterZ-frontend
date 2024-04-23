import { Component, OnInit } from '@angular/core';
import { Match } from './matches.interface';
import { MatchesService } from './matches.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
  providers: [MatchesService], 
})
export class MatchesComponent implements OnInit {
  matches: Match[] = [];
  loading: boolean = true; 

  constructor(private matchesService: MatchesService) {}

  ngOnInit(): void {
    this.fetchMatches();
  }

  fetchMatches(): void {
    this.matchesService.getMatches().subscribe(
      (matches) => {
        this.matches = matches;
        this.loading = false; // Set loading to false when matches are fetched
      },
      (error) => {
        console.error('Error fetching matches:', error);
        this.loading = false; 
      }
    );
  }
}
