using System;
using System.Collections.Generic;
using System.Text;

using MyApp.Model.Layout;

namespace MyApp.Service.Layout
{
    public interface ILayoutService
    {
        List<NavItemViewModel> GetNavItems();
        List<LayoutComponentViewModel> GetLayouts();
        LayoutComponentViewModel GetLayout(LayoutTemplates layoutTemplate);
    }
}
