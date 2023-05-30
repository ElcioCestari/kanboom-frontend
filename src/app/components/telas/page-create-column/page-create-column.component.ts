import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnService } from 'src/app/services/column.service';
import { Column } from 'src/model/column/column';
@Component({
  selector: 'app-page-create-column',
  templateUrl: './page-create-column.component.html',
  styleUrls: ['./page-create-column.component.css']
})
export class PageCreateColumnComponent {
  column: Column = {}
  constructor(private columnService: ColumnService, private router: Router, private route: ActivatedRoute,) { }
  save() {
    const id = this.route.snapshot.params['boardId'];
    this.column.boardId = id
    this.columnService.save(this.column).then(value => {
      this.router.navigate(['/page-home'])

    })
  }
}
