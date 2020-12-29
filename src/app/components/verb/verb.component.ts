import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { VerbsService } from '../../services/verbs.service';
import { IWord } from '../../models/verb.model';

@Component({
  selector: 'app-verb',
  templateUrl: './verb.component.html',
  styleUrls: ['./verb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerbComponent implements OnInit {

  constructor(public verbsService: VerbsService) {
  }

  ngOnInit(): void {
  }

  getKeys(obj: IWord): string[] {
    return Object.keys(obj);
  }

}
