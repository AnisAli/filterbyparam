import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BindQueryParamsFactory } from '@ngneat/bind-query-params';
import { Params, valueChanges } from './search-customer-list.component';


@Component({
  templateUrl: './search-customer-list.component.html',
  styleUrls: ['./search-customer-list.component.scss']
})
export class SearchCustomerListComponent implements OnInit {
  title = 'bindQueryParams';

  group = new FormGroup({
    searchTerm: new FormControl(),
    showErrors: new FormControl(false),
    issues: new FormControl([]),
    nested: new FormGroup(
      {
        a: new FormControl(),
      },
      { updateOn: 'submit' }
    ),
  });

  items: string[] = [];

  private manager = this.factory
    .create<Params>([
      { queryKey: 'searchTerm' },
      { queryKey: 'showErrors', type: 'boolean' },
      { queryKey: 'issues', strategy: 'modelToUrl', type: 'array' },
      { queryKey: 'nested', path: 'nested.a' },
    ])
    .connect(this.group);

  constructor(private factory: BindQueryParamsFactory) { }

  ngOnInit(): void {
    valueChanges(this.group).subscribe((v) => {
      console.log('initialvalue', v);
    });

    this.group.valueChanges.subscribe((v) => {
      console.log('group valueChanges', v);
    });

    setTimeout(() => {
      this.items = ['1', '2', '3'];
      this.manager.syncDefs('issues');
    }, 1000);
  }

  patch() {
    this.group.patchValue({
      searchTerm: null,
    });
  }

  reset() {
    this.group.reset();
  }
}
