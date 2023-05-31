import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/model/card/card';

@Component({
  selector: 'app-page-create-card',
  templateUrl: './page-create-card.component.html',
  styleUrls: ['./page-create-card.component.css']
})
export class PageCreateCardComponent {
  card: Card = {}
  constructor(private cardService: CardService, private router: Router, private route: ActivatedRoute) { }
  save() {
    const id = this.route.snapshot.params['columnId'];
    this.card.column = id
    this.cardService.save(this.card).then(value => {
      this.router.navigate(['/page-home'])
    })
  }
}
