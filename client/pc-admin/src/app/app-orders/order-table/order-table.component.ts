import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Column } from './models/column';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {
  @Output() onSelect = new EventEmitter<any>(); // 表头多选
  @Output() onSortChange = new EventEmitter<any>();　// 排序
  @Output() onEditRow = new EventEmitter<any>();　// 编辑
  @Output() onSaveRow = new EventEmitter<any>();　// 保存每一行
  @Input() columns:Array<Column> = [new Column('用户', 'phone')]
  @Input() dataSource:Array<any> = [{phone: 13626776229}]
  @Input() title:string = "订单"
  @Input() description:string = "订单说明"
  data = [];
  scrollHeight = screen.height - 220
  editRow = -1;

  constructor() { }

  ngOnInit() {

  }

  hanldeSelect (info) {
    this.onSelect.emit(info.filter(d => d.value))
  }

  // 排序
  hanldeSortChange (e) {
    this.onSortChange.emit(e);
  }

  // 重置
  hanldeReset (filterAddressArray) {

  }
  // 编辑每一行
  hanldeEditRow (data, row) {
    this.editRow = row;
    this.onEditRow.emit(data)
  }
  // 保存每一行
  hanldeSaveRow (data, row) {
    this.editRow = -1;
    this.onSaveRow.emit(data)
  }
  //　取消当前行
  hanldeCancelRow (data, row) {
    this.editRow = -1;
  }
}
