import {Component, Input, OnInit} from '@angular/core';
import {Column} from "../../../model/column/column";
import {ColumnService} from 'src/app/services/column.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {
  @Input() columns: Column[] = [];
  @Input() boardId: string = '';

  constructor(private columnService: ColumnService) {
  }

  ngOnInit() {
    console.log(this.columns)
  }
}
