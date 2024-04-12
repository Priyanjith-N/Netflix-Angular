import { Component, Input, SimpleChanges, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  @Input() bannerTittle = '';
  @Input() bannerOverview = '';
  @Input({required: true}) key = 'o9V7EkLDsuk';
  private sanitizer = inject(DomSanitizer);

  videoUrl = (this.sanitizer.bypassSecurityTrustResourceUrl(
    `https://www.youtube.com/embed/${this.key}?autoplay=1&mute=1&loop=1&controls=0`
  ));

  // ngOnChanges(changes: SimpleChanges): void {
  //   if(changes['key']){
  //     this.videoUrl = (this.sanitizer.bypassSecurityTrustResourceUrl(
  //       `https://www.youtube.com/embed/${this.key}?autoplay=1&mute=1&loop=1&controls=0`
  //     ));
  //   }
  // }
}
