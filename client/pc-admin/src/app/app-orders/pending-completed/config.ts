// table 配置
import {Column} from '../order-table/models/column'

// 待付押金表格配置
export const tableConfig: Array<Column> = [
    new Column('用户', 'user'),
    new Column('订单号', 'orders'),
    new Column('开始时间', 'startTime'),
    new Column('驿站', 'yizhang'),
    new Column('支付方式', 'payMethod'),
    new Column('金额', 'amount'),
    new Column('操作', 'operation'),
]