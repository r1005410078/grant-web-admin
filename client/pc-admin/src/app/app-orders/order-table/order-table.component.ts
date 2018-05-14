import { Component, OnInit, Input } from '@angular/core';
import { Column } from './models/column';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {
  @Input() columns:Array<Column> = [new Column('用户', 'phone')]
  @Input() dataSource:Array<any> = [{phone: 13626776229}]
  data = [];
  scrollHeight = screen.height - 220
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.data.push({
        name   : `Edward King ${i}`,
        age    : 32,
        address: `London, Park Lane no. ${i}`,
      });
    }
  }
}
