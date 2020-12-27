import { Component, OnInit } from '@angular/core';
import { VerbsService } from '../../services/verbs.service';

@Component({
  selector: 'app-verbs-list',
  templateUrl: './verbs-list.component.html',
  styleUrls: ['./verbs-list.component.scss']
})
export class VerbsListComponent implements OnInit {

  constructor(public verbsService: VerbsService) { }

  ngOnInit(): void {
  }

}
