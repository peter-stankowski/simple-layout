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
        public string Path { get; set; }


        public List<NavItemViewModel> NavItems { get; set; }

        public void Seed()
        {
            NavItems = new List<NavItemViewModel>()
            {
                new NavItemViewModel(){ NavItemID = 1, DisplayName="Home", IconName = "home", Path=""},
                new NavItemViewModel(){ NavItemID = 2, DisplayName="About", IconName = "face", Path="about"},
                new NavItemViewModel(){ NavItemID = 3, DisplayName="Forms", IconName = "gavel", Path="forms"},
                new NavItemViewModel(){ NavItemID = 4, DisplayName="Settings", IconName = "settings_input_composite",
                 NavItems = new List<NavItemViewModel>(){
                    new NavItemViewModel(){ NavItemID = 41, DisplayName="Setting 1", IconName = "settings" },
                    new NavItemViewModel(){ NavItemID = 42, DisplayName="Setting 2", IconName = "settings_bluetooth",
                    NavItems  = new List<NavItemViewModel>(){
                        new NavItemViewModel(){ NavItemID = 421, DisplayName="Setting 21", IconName = "speaker_notes" },
                        new NavItemViewModel(){ NavItemID = 422, DisplayName="Setting 22", IconName = "speaker_notes_off",
                        NavItems = new List<NavItemViewModel>(){
                            new NavItemViewModel(){ NavItemID = 4221, DisplayName="Setting 233", IconName = "system_update_alt" }
                        } }
                    } }
                 } }

            };

        }
    }

}
