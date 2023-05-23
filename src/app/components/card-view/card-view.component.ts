import {Component, Input} from '@angular/core';
import {Card} from "../../../model/card/card";


@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent {
  @Input() card: Card = {name: ''};
}
