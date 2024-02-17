export interface IFilter {
    search: string;
    sortBy?: string;
    orderType: "asc" | "desc";
    page: number;
    pageSize: number;
    totalRows: number;
}

export interface IFilter {
    search: string;
    sortBy?: string;
    orderType: "asc" | "desc";
    page: number;
    pageSize: number;
    totalRows: number;
  }
  

export interface IFields {
    key: string;
    label: string;
    sort?: boolean;
    isAmount?: boolean;
    tableList?: any[];
    type?: "input" | "selector" | "checkbox";
    itemNameValue?: string | "value";
    itemName?: string | "text";
  
    tdRowSpan?: number | string;
    tdColSpan?: number | string;
    thRowSpan?: number | string;
    thColSpan?: number | string;
  
    thClass?: number | string;
    tdClass?: number | string;
  
    children?: IFields[];
  }
  

  export interface ITableActions {
    isView?: boolean;
    isEdit?: boolean;
    isClone?: boolean;
    isDelete?: boolean;
    isHistory?: boolean;
    canAccept?: boolean;
    canCancel?: boolean;
    canDelete?: boolean;
    canApprove?: boolean;
    canSent?: boolean;
    canReject?: boolean;
    canRevoke?: boolean;
  }
  