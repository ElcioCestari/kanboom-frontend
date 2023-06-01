import {Component, Inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CardService} from 'src/app/services/card.service';
import {Card} from 'src/model/card/card';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-page-create-card',
  templateUrl: './page-create-card.component.html',
  styleUrls: ['./page-create-card.component.css']
})
export class PageCreateCardComponent {
  card: Card = {}

  constructor(
    public dialogRef: MatDialogRef<PageCreateCardComponent>,
    @Inject(MAT_DIALOG_DATA) public id: string,
    private cardService: CardService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  save() {
    this.card.column = this.id
    this.cardService.save(this.card).then(value => {
      this.router.navigate(['/page-home'])
    })
  }
}
