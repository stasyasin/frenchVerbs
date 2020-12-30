import { Component, OnInit } from '@angular/core';
import { VerbsService } from '../../services/verbs.service';

@Component({
  selector: 'app-verbs',
  templateUrl: './verbs.component.html',
  styleUrls: ['./verbs.component.scss']
})
export class VerbsComponent implements OnInit {

  constructor(public verbsService: VerbsService) { }

  ngOnInit(): void {
  }

  changeFilterKey(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.verbsService.setFilterKey(target.value);
  }

}
