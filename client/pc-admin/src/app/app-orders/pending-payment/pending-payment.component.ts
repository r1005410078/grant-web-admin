import { Component, OnInit } from '@angular/core';
import { Column } from '../order-table/models/column';
import {tableConfig} from './config'

@Component({
  selector: 'app-pending-payment',
  templateUrl: './pending-payment.component.html',
  styleUrls: ['./pending-payment.component.css']
})
export class PendingPaymentComponent implements OnInit {
  public columns:Array<Column> = tableConfig
  public dataSource = []
  constructor() { }

  ngOnInit() {
    this.dataSource =  [
      {user: '111', orders: 'ddxdasda', startTime: Date.now(), yizhang: '安庆', payMethod: '支付宝', amount: 'ddd', operation: ''},
      {user: '222', orders: 'ddxdasda', startTime: Date.now(), yizhang: 'liuan', payMethod: '支付宝', amount: 'ddd', operation: ''}
    ]
  }

  onSelect (d) {
    console.log(d)
  }

}
