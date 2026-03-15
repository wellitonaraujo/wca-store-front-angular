import { MatToolbar } from '@angular/material/toolbar';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [MatToolbar],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
