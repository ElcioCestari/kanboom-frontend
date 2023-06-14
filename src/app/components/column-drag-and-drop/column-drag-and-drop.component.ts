import {Component, Input, OnChanges} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {Column} from "../../../model/column/column";
import {ColumnService} from "../../services/column.service";
import {MatDialog} from "@angular/material/dialog";
import {PageCreateCardComponent} from "../telas/page-create-card/page-create-card.component";
import {Card} from "../../../model/card/card";
import {PageCreateColumnComponent} from "../telas/page-create-column/page-create-column.component";
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-column-drag-and-drop',
  templateUrl: './column-drag-and-drop.component.html',
  styleUrls: ['./column-drag-and-drop.component.css']
})
export class ColumnDragAndDropComponent implements OnChanges {
  @Input() columns: Column[] = []
  @Input() boardId: string = ''

  constructor(private columnService: ColumnService, public dialog: MatDialog, private boardService: BoardService) {
  }

  ngOnChanges() {
  }

  openDialog(column: Column): void {
    const dialogRef = this.dialog.open(PageCreateCardComponent, {
      data: column._id,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.columnService.findAllByBoardId(this.boardId)
        .then(c => this.columns = c)
    });
  }

  drop(event: CdkDragDrop<Card[] | undefined, any>) {
    if (event.previousContainer === event.container) {
      if (event.container.data) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      }
    } else {
      if (event.container.data && event.previousContainer.data) {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
        this.update()
      }
    }
  }

  update() {
    this.boardService.update(this.columns)
  }

  openCreateColumnDialog(boardId: string) {
    const dialogRef = this.dialog.open(PageCreateColumnComponent, {
      data: boardId,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.columnService.findAllByBoardId(this.boardId)
        .then(c => this.columns = c)
    });
  }
}
