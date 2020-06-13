import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { NotFoundComponent } from '../app/components/not-found/not-found.component';
import { SelecttransactionComponent } from '../app/components/selecttransaction/selecttransaction.component';
import { ValuetowithdrawComponent } from '../app/components/valuetowithdraw/valuetowithdraw.component';
import { DonationComponent } from '../app/components/donation/donation.component';
import { DenominationComponent } from '../app/components/denomination/denomination.component';
import { OthervalueComponent } from '../app/components/othervalue/othervalue.component';
import { EndingComponent } from '../app/components/ending/ending.component';
import { PrintreceiptComponent } from '../app/components/printreceipt/printreceipt.component';
import { EnterpasswordComponent } from '../app/components/enterpassword/enterpassword.component';
import { OperationcostComponent } from '../app/components/operationcost/operationcost.component';
import { CountingmoneyComponent } from '../app/components/countingmoney/countingmoney.component';
import { TransactioncostComponent } from '../app/components/transactioncost/transactioncost.component';
import { SelecttransactiontwoComponent } from '../app/components/selecttransactiontwo/selecttransactiontwo.component';
import { SelecttransactionthreeComponent } from '../app/components/selecttransactionthree/selecttransactionthree.component';
import { SelecttypeaccountComponent } from '../app/components/selecttypeaccount/selecttypeaccount.component';
import { PrintreceipttwoComponent } from '../app/components/printreceipttwo/printreceipttwo.component';
import { EnterpasswordtwoComponent } from '../app/components/enterpasswordtwo/enterpasswordtwo.component';
import { OperationcosttwoComponent } from '../app/components/operationcosttwo/operationcosttwo.component';
import { TransactioncosttwoComponent } from '../app/components/transactioncosttwo/transactioncosttwo.component';
import { ConsultingComponent } from '../app/components/consulting/consulting.component';

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
