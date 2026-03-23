import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  routes = [
    { label: 'subject', route: 'subject'},
    { label: 'exam year', route: 'exam-year'},
    { label: 'admins', route: 'admin'},
    { label: 'exam', route: 'exam'},
    { label: 'center', route: 'center'},
    { label: 'participant', route: 'participant'},
  ]
}
