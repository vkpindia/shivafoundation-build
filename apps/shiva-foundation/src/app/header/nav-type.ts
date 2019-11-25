export interface NavItems {
  displayName: string;
  iconName?: string;
  routePath?: any;
  children?: Array<ChildrenNav>;
}

interface ChildrenNav {
  displayName?: string;
  iconName?: string;
  routePath?: any;
}
