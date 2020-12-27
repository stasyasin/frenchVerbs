import { Component, OnInit } from '@angular/core';
import { VerbsService } from '../../services/verbs.service';

@Component({
  selector: 'app-verb',
  templateUrl: './verb.component.html',
  styleUrls: ['./verb.component.scss']
})
export class VerbComponent implements OnInit {

  constructor(public verbsService: VerbsService) { }

  ngOnInit(): void {
  }

}
