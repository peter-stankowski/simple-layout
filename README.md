# Project Structure

### Presentation
* MyApp.Client

### Data Access
* MyApp.Model
* MyApp.Repository

### Business
* MyApp.Service
* MyApp.Api


#### to do
* create navItem model in angular and c#
```
public class NavItemModel
{
  public int NavItemID {get;set;}
  
  public string DisplayName {get;set;}
  public string IconName {get;set;}
  
  public IEnumerable<NavItemModel> NavItems {get;set;}
}
```
* create LayoutService interface
```
interface ILayoutService{
  public List<NavItemModel> GetNavItems();
}
```
* create api
* hookup angular with web api
 - install swagger

### 07/05/2019
 * added PageLayout model in angular
 * added PageComponentModel in c# , need to rename c# to match angular
 * added generic apiService in angular
 
 http://wrapbootstrap.com/preview/WB0048JF7
