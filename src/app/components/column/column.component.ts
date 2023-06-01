import {Component, Input, OnInit} from '@angular/core';
import {Column} from "../../../model/column/column";
import {ColumnService} from 'src/app/services/column.service';
import {MatDialog} from "@angular/material/dialog";
import {PageCreateCardComponent} from "../telas/page-create-card/page-create-card.component";

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {
  @Input() columns: Column[] = [];
  @Input() boardId: string = '';

  constructor(private columnService: ColumnService, public dialog: MatDialog) {
  }

  ngOnInit() {}

  openDialog(column: Column): void {
    const dialogRef = this.dialog.open(PageCreateCardComponent, {
      data: column._id,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
