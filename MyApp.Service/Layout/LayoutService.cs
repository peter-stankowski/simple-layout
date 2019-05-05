using System;
using System.Collections.Generic;
using System.Text;
using MyApp.Model.Layout;

namespace MyApp.Service.Layout
{
    public class LayoutService : ILayoutService
    {
        List<NavItemViewModel> ILayoutService.GetNavItems()
        {
            return SeedNavItems();
        }


        private List<NavItemViewModel> SeedNavItems()
        {
            var model = new NavItemViewModel();
            model.Seed();

            return model.NavItems;
        }
               
    }
}
