import { ISearchFilter } from './../models/search-model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, filter } from 'rxjs/operators';

export const data: any[] =  [
  { customerId: 1, customerName: 'Anis' , isActive: true, issues : 2 },
  { customerId: 2, customerName: 'Arund' , isActive: false, issues : 3 },
  { customerId: 3, customerName: 'Paresh' , isActive: true, issues : 2 },
  { customerId: 4, customerName: 'Saadi' , isActive: true, issues : 4 }
 ];

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  getCustomers(filters: ISearchFilter): Observable<any[]> {
      return of(data.filter(c => filters.isActive === undefined || c.isActive === filters.isActive)).pipe(delay(1000));
  }
}
