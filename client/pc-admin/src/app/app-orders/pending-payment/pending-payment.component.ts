import { Component, OnInit } from '@angular/core';
import { Column } from '../order-table/models/column';
import {tableConfig} from './config'

@Component({
  selector: 'app-pending-payment',
  templateUrl: './pending-payment.component.html',
  styleUrls: ['./pending-payment.component.css']
})
export class PendingPaymentComponent implements OnInit {
  columns:Array<Column> = tableConfig
  constructor() { }

  ngOnInit() {
  }

}
