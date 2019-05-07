using System;
using System.Collections.Generic;
using System.Text;

namespace MyApp.Model.Layout
{

    public enum LayoutTemplates
    {
        Topbar,
        Sidebar
    }

    public enum LayoutThemes
    {
        Default
    }

    public class LayoutComponentModel
    {
        public int LayoutComponentID { get; set; }
    }

    public class LayoutComponentViewModel
    {
        public int LayoutComponentID { get; set; }

        public LayoutTemplates LayoutTemplate { get; set; }
        public LayoutThemes LayoutTheme { get; set; }
       
        public List<NavItemViewModel> NavItems { get; set; }
    }

}
