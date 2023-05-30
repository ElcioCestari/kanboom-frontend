import { Component, Input, OnInit } from '@angular/core';
import { Column } from "../../../model/column/column";

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {
  @Input() columns: Column[] = [];
  @Input() boardId: string = '';

  ngOnInit(): void {
  }
}
