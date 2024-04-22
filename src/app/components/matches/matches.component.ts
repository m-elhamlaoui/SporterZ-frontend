import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

interface Match {
  date: string;
  match_time: string;
  room_link: string;
  league: string;
  league_logo: string;
  status: string;

  club1: string;
  logo1: string;
  score1: string;
  votes1: string;

  club2: string;
  logo2: string;
  score2: string;
  votes2: string;
}

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.scss'
})
export class MatchesComponent {
  matches: Match[] = [{
    "date": "12 Aug",
    "match_time": "19:00",
    "room_link": "https://www.google.com",
    "league": "Champions League",
    "league_logo": "https://upload.wikimedia.org/wikipedia/fr/b/bf/UEFA_Champions_League_logo_2.svg",
    "status": "Live",
    "club1": "Real Madrid",
    "logo1": "https://upload.wikimedia.org/wikipedia/fr/c/c7/Logo_Real_Madrid.svg",
    "score1": "7",
    "votes1": "1.48",
    "club2": "Arsenal FC",
    "logo2": "https://upload.wikimedia.org/wikipedia/fr/5/53/Arsenal_FC.svg",
    "score2": "0",
    "votes2": "4.98"
  }, {
    "date": "12 Aug",
    "match_time": "19:00",
    "room_link": "https://www.google.com",
    "league": "Champions League",
    "league_logo": "https://upload.wikimedia.org/wikipedia/fr/b/bf/UEFA_Champions_League_logo_2.svg",
    "status": "Live",
    "club1": "Real Madrid",
    "logo1": "https://upload.wikimedia.org/wikipedia/fr/c/c7/Logo_Real_Madrid.svg",
    "score1": "7",
    "votes1": "1.48",
    "club2": "Arsenal FC",
    "logo2": "https://upload.wikimedia.org/wikipedia/fr/5/53/Arsenal_FC.svg",
    "score2": "0",
    "votes2": "4.98"
  }
  ]

  redirectToRoom(roomLink: string) {
    window.location.href = roomLink;
  }
}
