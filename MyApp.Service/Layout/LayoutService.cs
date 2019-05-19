using System;
using System.Collections.Generic;
using System.Text;
using MyApp.Model.Layout;

namespace MyApp.Service.Layout
{
    public class LayoutService : ILayoutService
    {

        private List<LayoutComponentViewModel> getLayouts()
        {
            var model = new NavItemViewModel();
            model.Seed();

            var newnav = new NavItemGroupViewModel().Seed();


            var list = new List<LayoutComponentViewModel>()
            {
                new LayoutComponentViewModel() { LayoutComponentID = 1, LayoutTemplate = LayoutTemplates.Sidebar, LayoutTheme = LayoutThemes.Default, NavItems = model.NavItems, NavItemGroups = newnav },
                new LayoutComponentViewModel() { LayoutComponentID = 2, LayoutTemplate = LayoutTemplates.Topbar, LayoutTheme = LayoutThemes.Default, NavItems = model.NavItems, NavItemGroups = newnav }
            };

            return list;
        }

        List<NavItemViewModel> ILayoutService.GetNavItems()
        {
            return SeedNavItems();
        }

        public List<LayoutComponentViewModel> GetLayouts()
        {
            return this.getLayouts();
        }

        public LayoutComponentViewModel GetLayout(LayoutTemplates layoutTemplate)
        {
            return this.getLayouts().Find(x => x.LayoutTemplate == layoutTemplate);
        }

        private List<NavItemViewModel> SeedNavItems()
        {
            var model = new NavItemViewModel();
            model.Seed();

            return model.NavItems;
        }

        
    }
}
