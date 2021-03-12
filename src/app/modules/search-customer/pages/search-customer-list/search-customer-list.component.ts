import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './search-customer-list.component.html',
  styleUrls: ['./search-customer-list.component.scss']
})
export class SearchCustomerListComponent implements OnInit {
  searchFilter: any = null;
  searchFilterData: any;
  currentPage = 0;
  sortColumn = '';
  sort = 'asc';
  pageSize = 10;
  customerList: any[];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.activatedRoute.queryParams.subscribe(queryParams => {
    //     parseProductsListParams(queryParams), true);
    // });
      this.route.data.subscribe(data => {
        console.log('data', data);
        // If categorySlug is undefined then this is a root catalog page.
        if (data && data.searchData) {
            this.customerList = data.searchData;
            console.log(data.searchData);
        }
      });
  }

  onSearch = (searchParam: any) => this.searchFilter = searchParam;

  nextPage(){
    this.currentPage++;
    this.sort = 'desc';
    this.updateQueryParameters();
  }

  updateQueryParameters(): void {
    this.router.navigate(
        [],
        {
            queryParams: {
                page: this.currentPage,
                sort: this.sort,
                sortColumn: this.sortColumn,
                limit: this.pageSize,
            },
            queryParamsHandling: 'merge',
            relativeTo: this.activatedRoute,
	     			replaceUrl: true
        }
    );
 }

  // private applyFilterToRoute(): void {
	//  // tslint:disable:indent
	//  this.router.navigate(
	// 		[
	// 			{
	// 				page: this.currentPage
	// 			}
	// 		],
	// 		{
	// 			relativeTo: this.activatedRoute,
	// 			replaceUrl: true
	// 		}
	// 	);

	// 	// In order to more clearly illustrate how the "replaceUrl" is affecting the
	// 	// browser's history, let's all update the document title as well - this value
	// 	// will show up in the back-button drop-down menu.
	// }

  // private applyFilterToResults() : void {
	// 	var filter = this.form.filter.toLowerCase();

	// 	for ( var result of this.results ) {

	// 		result.isVisible = ( filter )
	// 			? result.content.includes( filter )
	// 			: true
	// 		;

	// 	}

	// }

}
