
import { NavItem } from "./navbar.model";

enum LayoutTemplates {
  Topbar = 0,
  Sidebar = 1
}
enum LayoutThemes {
  Default = 0
}

export class PageLayout {
  PageLayoutID: number;

  LayoutTemplate: LayoutTemplates;
  LayoutTheme: LayoutThemes;
  NavItems: NavItem;

}
