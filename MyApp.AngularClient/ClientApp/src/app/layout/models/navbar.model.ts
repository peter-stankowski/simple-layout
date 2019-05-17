export class NavItem {
  NavItemID: string;
  DisplayName: string;
  IconName: string;
  NavItems: NavItem[];
  Path: string;
}

export class NavItemGroup {
  
  DisplayName: string;
  IconName: string;

  NavItems: NavItem[];
}

