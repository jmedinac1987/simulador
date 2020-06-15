import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/in_common/home/home.component';
import { NotFoundComponent } from '../app/components/in_common/not-found/not-found.component';
import { SelecttransactionComponent } from '../app/components/withdrawals/selecttransaction/selecttransaction.component';
import { ValuetowithdrawComponent } from '../app/components/withdrawals/valuetowithdraw/valuetowithdraw.component';
import { DonationComponent } from '../app/components/withdrawals/donation/donation.component';
import { DenominationComponent } from '../app/components/in_common/denomination/denomination.component';
import { OthervalueComponent } from '../app/components/withdrawals/othervalue/othervalue.component';
import { EndingComponent } from '../app/components/in_common/ending/ending.component';
import { PrintreceiptComponent } from '../app/components/withdrawals/printreceipt/printreceipt.component';
import { EnterpasswordComponent } from '../app/components/withdrawals/enterpassword/enterpassword.component';
import { OperationcostComponent } from '../app/components/withdrawals/operationcost/operationcost.component';
import { CountingmoneyComponent } from '../app/components/withdrawals/countingmoney/countingmoney.component';
import { TransactioncostComponent } from '../app/components/withdrawals/transactioncost/transactioncost.component';
import { SelecttransactiontwoComponent } from '../app/components/balance_inquiry/selecttransactiontwo/selecttransactiontwo.component';
import { SelecttransactionthreeComponent } from '../app/components/balance_inquiry/selecttransactionthree/selecttransactionthree.component';
import { SelecttypeaccountComponent } from '../app/components/balance_inquiry/selecttypeaccount/selecttypeaccount.component';
import { PrintreceipttwoComponent } from '../app/components/balance_inquiry/printreceipttwo/printreceipttwo.component';
import { EnterpasswordtwoComponent } from '../app/components/balance_inquiry/enterpasswordtwo/enterpasswordtwo.component';
import { OperationcosttwoComponent } from '../app/components/balance_inquiry/operationcosttwo/operationcosttwo.component';
import { TransactioncosttwoComponent } from '../app/components/balance_inquiry/transactioncosttwo/transactioncosttwo.component';
import { ConsultingComponent } from '../app/components/balance_inquiry/consulting/consulting.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'denomination', component: DenominationComponent },
  { path: 'selecttransaction', component: SelecttransactionComponent },
  { path: 'selecttransactiontwo', component: SelecttransactiontwoComponent },
  {
    path: 'selecttransactionthree',
    component: SelecttransactionthreeComponent,
  },
  { path: 'selecttypeaccount', component: SelecttypeaccountComponent },
  { path: 'valuetowithdraw', component: ValuetowithdrawComponent },
  { path: 'othervalue', component: OthervalueComponent },
  { path: 'donation', component: DonationComponent },
  { path: 'printreceipt', component: PrintreceiptComponent },
  { path: 'printreceipttwo', component: PrintreceipttwoComponent },
  { path: 'enterpassword', component: EnterpasswordComponent },
  { path: 'operationcost', component: OperationcostComponent },
  { path: 'transactioncost', component: TransactioncostComponent },
  { path: 'countingmoney', component: CountingmoneyComponent },
  { path: 'enterpasswordtwo', component: EnterpasswordtwoComponent },
  { path: 'operationcosttwo', component: OperationcosttwoComponent },
  { path: 'transactioncosttwo', component: TransactioncosttwoComponent },
  { path: 'consulting', component: ConsultingComponent },
  { path: 'ending', component: EndingComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
