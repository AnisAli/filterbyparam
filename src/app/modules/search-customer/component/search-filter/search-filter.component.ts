import { ISearchFilter } from './../../models/search-model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BindQueryParamsFactory } from '@ngneat/bind-query-params';
import { startWith } from 'rxjs/operators';

/***
 *  Properties in Params interface should have formControl in FormGroup
 */

interface Params {
  searchTerm: string;
  isActive: boolean;
  issues: string;
  nested: string;
}


@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {

  @Output()
  search = new EventEmitter<ISearchFilter>();

    filterFormGroup: FormGroup;
    items: string[] = [];
    manager: any = null;

  constructor(private fb: FormBuilder, private factory: BindQueryParamsFactory) {
    this.createForm();
  }

  createForm(): void {
    this.filterFormGroup = this.fb.group({
      searchTerm: ['', { updateOn: 'submit' }],
      isActive: ['', { updateOn: 'submit' }],
      issues: [ [], {updateOn: 'submit'} ],
      issuesss: [ [], {updateOn: 'submit'} ],
      nested: this.fb.group(
        {
          a: [''],
        },
        { updateOn: 'submit' }
      ),
    });
    this.setQueryParamConfiguration();
  }

  setQueryParamConfiguration(): void{
   this.manager = this.factory
    .create<Params>([
      { queryKey: 'searchTerm' },
      { queryKey: 'isActive', type: 'boolean' },
      { queryKey: 'issues', strategy: 'modelToUrl', type: 'array' },
      { queryKey: 'nested', path: 'nested.a' },
    ])
    .connect(this.filterFormGroup);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.items = ['1', '2', '3'];
      this.manager.syncDefs('issues');
    }, 1000);
  }

}
