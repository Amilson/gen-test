export type PaginationActions = 'first' | 'next' | 'prev' | 'last';

export interface Pagination {
  action: PaginationActions;
}

export interface PaginationSortField {
  type?: string;
  format?: string;
  direction: 'desc' | 'asc';
}

export interface PaginationSortOptions {
  field: string;
  type: string;
  direction: 'desc' | 'asc';
}

export interface PaginationSortData {
  [key: string]: PaginationSortField;
}
