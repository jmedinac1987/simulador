import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/in_common/home/home.component';
import { NotFoundComponent } from './components/in_common/not-found/not-found.component';
import { SelecttransactionComponent } from './components/withdrawals/selecttransaction/selecttransaction.component';
import { ValuetowithdrawComponent } from './components/withdrawals/valuetowithdraw/valuetowithdraw.component';
import { DonationComponent } from './components/withdrawals/donation/donation.component';
import { DenominationComponent } from './components/in_common/denomination/denomination.component';
import { OthervalueComponent } from './components/withdrawals/othervalue/othervalue.component';
import { EndingComponent } from './components/in_common/ending/ending.component';
import { PrintreceiptComponent } from './components/withdrawals/printreceipt/printreceipt.component';
import { EnterpasswordComponent } from './components/withdrawals/enterpassword/enterpassword.component';
import { OperationcostComponent } from './components/withdrawals/operationcost/operationcost.component';
import { SpinnerComponent } from './components/in_common/spinner/spinner.component';
import { CountingmoneyComponent } from './components/withdrawals/countingmoney/countingmoney.component';
import { TransactioncostComponent } from './components/withdrawals/transactioncost/transactioncost.component';
import { SelecttransactiontwoComponent } from './components/balance_inquiry/selecttransactiontwo/selecttransactiontwo.component';
import { SelecttransactionthreeComponent } from './components/balance_inquiry/selecttransactionthree/selecttransactionthree.component';
import { SelecttypeaccountComponent } from './components/balance_inquiry/selecttypeaccount/selecttypeaccount.component';
import { PrintreceipttwoComponent } from './components/balance_inquiry/printreceipttwo/printreceipttwo.component';
import { EnterpasswordtwoComponent } from './components/balance_inquiry/enterpasswordtwo/enterpasswordtwo.component';
import { TransactioncosttwoComponent } from './components/balance_inquiry/transactioncosttwo/transactioncosttwo.component';
import { OperationcosttwoComponent } from './components/balance_inquiry/operationcosttwo/operationcosttwo.component';
import { ConsultingComponent } from './components/balance_inquiry/consulting/consulting.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    SelecttransactionComponent,
    ValuetowithdrawComponent,
    DonationComponent,
    DenominationComponent,
    OthervalueComponent,
    EndingComponent,
    PrintreceiptComponent,
    EnterpasswordComponent,
    OperationcostComponent,
    SpinnerComponent,
    CountingmoneyComponent,
    TransactioncostComponent,
    SelecttransactiontwoComponent,
    SelecttransactionthreeComponent,
    SelecttypeaccountComponent,
    PrintreceipttwoComponent,
    EnterpasswordtwoComponent,
    TransactioncosttwoComponent,
    OperationcosttwoComponent,
    ConsultingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
