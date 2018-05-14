import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingPaymentComponent } from './pending-payment/pending-payment.component';
import { PendingReturnDepositComponent } from './pending-return-deposit/pending-return-deposit.component';
import { CompletedComponent } from './completed/completed.component';
import { OrderTableComponent } from './order-table/order-table.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { PendingCompletedComponent } from './pending-completed/pending-completed.component';

@NgModule({
  imports: [ CommonModule, NgZorroAntdModule.forRoot() ],
  declarations: [PendingPaymentComponent, PendingReturnDepositComponent, CompletedComponent, OrderTableComponent, PendingCompletedComponent],
  exports: []
})
export class AppOrdersModule { }
