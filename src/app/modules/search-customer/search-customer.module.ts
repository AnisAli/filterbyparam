import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchCustomerRoutingModule } from './search-customer-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchCustomerListComponent } from './pages/search-customer-list/search-customer-list.component';
import { SearchFilterComponent } from './component/search-filter/search-filter.component';



@NgModule({
  declarations: [ SearchCustomerListComponent, SearchFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SearchCustomerRoutingModule
  ],
  exports: [SearchFilterComponent]
})
export class SearchCustomerModule { }
