import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { ItemsListComponent } from './views/home/items-list/items-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import { ProductsFormDialogComponent } from './views/home/products-form-dialog/products-form-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { ProductsUpdateFormDialogComponent } from './views/home/products-update-form-dialog/products-update-form-dialog.component';
import {MatListModule} from '@angular/material/list';
import { OrderFormDialogComponent } from './views/home/order-form-dialog/order-form-dialog.component';
import { OrdersUpdateFormDialogComponent } from './views/home/orders-update-form-dialog/orders-update-form-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemsListComponent,
    ProductsFormDialogComponent,
    ProductsUpdateFormDialogComponent,
    OrderFormDialogComponent,
    OrdersUpdateFormDialogComponent
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
