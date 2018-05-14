import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PendingPaymentComponent } from '../app-orders/pending-payment/pending-payment.component';
import { PendingReturnDepositComponent } from '../app-orders/pending-return-deposit/pending-return-deposit.component';
import { CompletedComponent } from '../app-orders/completed/completed.component';
import { PendingCompletedComponent } from '../app-orders/pending-completed/pending-completed.component';

const routers: Routes = [
  {path: 'pending-payment', component: PendingPaymentComponent},
  {path: 'pending-return-deposit', component: PendingReturnDepositComponent},
  {path: 'pending-completed', component: PendingCompletedComponent},
  {path: 'completed', component: CompletedComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
