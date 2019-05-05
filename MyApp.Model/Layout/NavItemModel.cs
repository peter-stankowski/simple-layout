using System;
using System.Collections.Generic;
using System.Text;

namespace MyApp.Model.Layout
{
    public class NavItemModel
    {
        public int NavItemID { get; set; }
        public string DisplayName { get; set; }
        public string IconName { get; set; }

        public IEnumerable<NavItemModel> NavItems { get; set; }
    }

    public class NavItemViewModel
    {
        public int NavItemID { get; set; }
        public string DisplayName { get; set; }
        public string IconName { get; set; }

        public List<NavItemViewModel> NavItems { get; set; }

        public void Seed()
        {
            NavItems = new List<NavItemViewModel>()
            {
                new NavItemViewModel(){ NavItemID = 1, DisplayName="Home", IconName = "home"},
                new NavItemViewModel(){ NavItemID = 2, DisplayName="About", IconName = "home"},
                new NavItemViewModel(){ NavItemID = 3, DisplayName="Contact", IconName = "home"},
                new NavItemViewModel(){ NavItemID = 4, DisplayName="Settings", IconName = "home",
                 NavItems = new List<NavItemViewModel>(){
                    new NavItemViewModel(){ NavItemID = 41, DisplayName="Setting 1", IconName = "home"},
                    new NavItemViewModel(){ NavItemID = 42, DisplayName="Setting 2", IconName = "home" }
                 } }

            };

        }
    }

}
