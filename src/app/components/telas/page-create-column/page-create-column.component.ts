import {Component, Inject, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ColumnService} from 'src/app/services/column.service';
import {Column} from 'src/model/column/column';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-page-create-column',
  templateUrl: './page-create-column.component.html',
  styleUrls: ['./page-create-column.component.css']
})
export class PageCreateColumnComponent {
  column: Column = {}

  constructor(
    public dialogRef: MatDialogRef<PageCreateColumnComponent>,
    @Inject(MAT_DIALOG_DATA) public id: string,
    private columnService: ColumnService,
    private router: Router,
    private route: ActivatedRoute,) {
  }

  save() {
    this.column.boardId = this.id
    this.columnService.save(this.column).then(value => {
      this.dialogRef.close()
    })
  }
}
