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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'denomination', component: DenominationComponent },
  { path: 'selecttransaction', component: SelecttransactionComponent },
  { path: 'valuetowithdraw', component: ValuetowithdrawComponent },
  { path: 'othervalue', component: OthervalueComponent },
  { path: 'donation', component: DonationComponent },
  { path: 'printreceipt', component: PrintreceiptComponent },
  { path: 'enterpassword', component: EnterpasswordComponent },
  { path: 'operationcost', component: OperationcostComponent },
  { path: 'countingmoney', component: CountingmoneyComponent },
  { path: 'ending', component: EndingComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
