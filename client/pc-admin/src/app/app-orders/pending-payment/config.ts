// table 配置
import {Column} from '../order-table/models/column'

// 待付款表格配置
export const tableConfig: Array<Column> = [
  {title: '用户', dataIndex: 'user'},
  {title: '订单号', dataIndex: 'orders'},
  {title: '下单时间', dataIndex: 'startTime', isShowSort: true},
  {title: '驿站', dataIndex: 'yizhang', filter: [
    {name: '驿站A', value: false},
    {name: '驿站B', value: false},
    {name: '驿站C', value: false}
  ]},
  {title: '支付二维码', dataIndex: 'payMethod'},
  {title: '金额', dataIndex: 'amount'},
  {title: '操作', dataIndex: 'operation'},
]
