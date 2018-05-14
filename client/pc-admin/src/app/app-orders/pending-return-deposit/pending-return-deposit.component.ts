import { Component, OnInit } from '@angular/core';
import { Column } from '../order-table/models/column';
import {tableConfig} from './config'

@Component({
  selector: 'app-pending-return-deposit',
  templateUrl: './pending-return-deposit.component.html',
  styleUrls: ['./pending-return-deposit.component.css']
})
export class PendingReturnDepositComponent implements OnInit {
  columns:Array<Column> = tableConfig
  constructor() { }

  ngOnInit() {
  }

}
