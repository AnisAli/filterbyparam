
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCustomerListComponent } from './pages/search-customer-list/search-customer-list.component';
import { SearchResolver } from './resolver/search.resolver';

const routes: Routes = [
  {
    path: '',
    component: SearchCustomerListComponent,
    resolve: {
      searchData: SearchResolver
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchCustomerRoutingModule { }
