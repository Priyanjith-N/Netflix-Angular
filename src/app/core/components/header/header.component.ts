import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input({required: true}) userImg: string = '';
  @Input({required: true}) userName: string = '';
  navList: string[] = ["Home", "TV Shows", "News & Popular", "My List", "Browse by Language"];
  @Output() eventSignOut = new EventEmitter();

  constructor(){
    
  }

  signOut(){
    this.eventSignOut.emit();
  }
}
