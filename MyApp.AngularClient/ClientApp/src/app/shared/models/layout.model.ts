
import { NavItem } from "./navbar.model";

enum LayoutTemplates {
  Topbar = 0,
  Sidebar = 1
}
enum LayoutThemes {
  Default = 0
}

export class LayoutComponent {
  LayoutComponentID: number;

  LayoutTemplate: LayoutTemplates;
  LayoutTheme: LayoutThemes;
  NavItems: NavItem;

  /*
        public LayoutTemplates LayoutTemplate { get; set; }
        public LayoutThemes LayoutTheme { get; set; }

        public List<NavItemViewModel> NavItems { get; set; }

*/

}
