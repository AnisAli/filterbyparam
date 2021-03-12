
export interface PaginationOptions {
  page?: number;
  limit?: number;
  sort?: string;
}

export interface ISearchFilter extends PaginationOptions {
  searchTerm: string;
  isActive: boolean;
  issues: string[];
}


