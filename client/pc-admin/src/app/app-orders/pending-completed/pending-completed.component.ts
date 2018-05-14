import { Component, OnInit } from '@angular/core';
import { Column } from '../order-table/models/column';
import {tableConfig} from './config'

@Component({
  selector: 'app-pending-completed',
  templateUrl: './pending-completed.component.html',
  styleUrls: ['./pending-completed.component.css']
})
export class PendingCompletedComponent implements OnInit {
  columns:Array<Column> = tableConfig
  constructor() { }

  ngOnInit() {
  }

}
