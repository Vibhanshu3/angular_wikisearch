import { Component } from '@angular/core';
import { WikipediaResponse, WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages: any[] = [];

  constructor(private wikipediaService: WikipediaService) { }

  onTerm(term: string) {

    const result = this.wikipediaService.search(term)
      .subscribe({
        next: (page) => {
          console.log(page);
          this.pages = page;
        }
      });
    console.log(result);
  }

}
