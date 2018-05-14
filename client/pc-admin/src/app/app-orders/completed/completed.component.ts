import { Component, OnInit } from '@angular/core';
import { Column } from '../order-table/models/column';
import {tableConfig} from './config'

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  columns:Array<Column> = tableConfig
  constructor() { }

  ngOnInit() {
  }

}
