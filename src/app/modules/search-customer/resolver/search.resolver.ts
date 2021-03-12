import { CustomerService } from './../services/customer.service';
import { ISearchFilter } from './../models/search-model';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Params, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchResolver implements Resolve<any[]> {

  constructor(private customerService: CustomerService,
              private router: Router){
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const categorySlug = route.params.categorySlug || route.data.categorySlug || null;

    return this.customerService.getCustomers(parseProductsListParams(route.queryParams)).pipe(
        catchError(error => {
            if (error instanceof HttpErrorResponse && error.status === 404) {
                this.router.navigate(['error']).then();
            }
            return EMPTY;
        })
    );
  }

}


export function parseProductsListParams(params: Params): ISearchFilter {
  const options: Partial<ISearchFilter> = {};

  if (params.page) {
      options.page = parseFloat(params.page);
  }
  if (params.limit) {
      options.limit = parseFloat(params.limit);
  }
  if (params.sort) {
      options.sort = params.sort;
  }
  if (params.searchTerm) {
      options.searchTerm = params.category;
  }

  if (params.isActive) {
      options.isActive = params.isActive.toLowerCase() === 'true';
  }

  if (params.issues) {
      options.issues = params.issues;
  }

  return options as ISearchFilter;
}
