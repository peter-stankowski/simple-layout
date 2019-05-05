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

