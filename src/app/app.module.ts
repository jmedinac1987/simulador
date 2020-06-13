import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SelecttransactionComponent } from './components/selecttransaction/selecttransaction.component';
import { ValuetowithdrawComponent } from './components/valuetowithdraw/valuetowithdraw.component';
import { DonationComponent } from './components/donation/donation.component';
import { DenominationComponent } from './components/denomination/denomination.component';
import { OthervalueComponent } from './components/othervalue/othervalue.component';
import { EndingComponent } from './components/ending/ending.component';
import { PrintreceiptComponent } from './components/printreceipt/printreceipt.component';
import { EnterpasswordComponent } from './components/enterpassword/enterpassword.component';
import { OperationcostComponent } from './components/operationcost/operationcost.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CountingmoneyComponent } from './components/countingmoney/countingmoney.component';
import { TransactioncostComponent } from './components/transactioncost/transactioncost.component';
import { SelecttransactiontwoComponent } from './components/selecttransactiontwo/selecttransactiontwo.component';
import { SelecttransactionthreeComponent } from './components/selecttransactionthree/selecttransactionthree.component';
import { SelecttypeaccountComponent } from './components/selecttypeaccount/selecttypeaccount.component';
import { PrintreceipttwoComponent } from './components/printreceipttwo/printreceipttwo.component';
import { EnterpasswordtwoComponent } from './components/enterpasswordtwo/enterpasswordtwo.component';
import { TransactioncosttwoComponent } from './components/transactioncosttwo/transactioncosttwo.component';
import { OperationcosttwoComponent } from './components/operationcosttwo/operationcosttwo.component';
import { ConsultingComponent } from './components/consulting/consulting.component';

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
