export interface NavItem {
    href?: string;
    label: string;
    dropdown?: NavItem[];
  }