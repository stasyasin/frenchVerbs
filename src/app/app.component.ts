import { Component } from '@angular/core';
import { VerbsService } from './services/verbs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FRasty';
  // searchKey: string;

  constructor(private verbsService: VerbsService) {
  }

  // changeFilterKey(event: Event): void {
  //   const target = event.target as HTMLInputElement;
  //   this.verbsService.setFilterKey(target.value);
  // }
}
