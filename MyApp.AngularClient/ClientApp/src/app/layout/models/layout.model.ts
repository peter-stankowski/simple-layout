
import { NavItem, NavItemGroup } from "./navbar.model";

export enum LayoutTemplates {
  Topbar = 0,
  Sidebar = 1
}
export enum LayoutThemes {
  Default = 0
}

export class PageLayout {
  constructor() {
    this.LayoutTemplate = LayoutTemplates.Topbar;
    this.LayoutTheme = LayoutThemes.Default;
  }
  PageLayoutID: number;

  LayoutTemplate: LayoutTemplates;
  LayoutTheme: LayoutThemes;

  NavItems: NavItem[];
  NavItemGroups: NavItemGroup[];

}
