import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { ProductgroupComponent } from './productpage/productgroup/productgroup/productgroup.component';
import { ProductlistComponent } from './productpage/productlist/productlist/productlist.component';
import { DialogProductComponent } from './productpage/dialog-product/dialog-product';

@NgModule({
  declarations: [
    AppComponent,
    ProductpageComponent,
    ProductgroupComponent,
    ProductlistComponent,
    DialogProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  entryComponents: [DialogProductComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
