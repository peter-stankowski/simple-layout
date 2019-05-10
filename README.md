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

### 10/05/2019

* remove double click functionality from nav-items - for non-dropdowns.
* create sidebar toggle functionality with icons showing e.g: https://wrapbootstrap.com/theme/nifty-light-dark-admin-template-WB0048JF7
* create switchable theme method (possibly injecting/ejecting script tags in index.html)
* create form generator (form to enable users to create forms) - can save them to local storage (mimic DB) for a component to pull them out and display them as real forms (CMS feature) (to be seperate module / pluggable)
* set up simple routes - to be used going forward (need to research best method of NG routing)
* tidy up component folders in the app folder

JC -- .Net practice

* To do list in .Net MVC
Learn folder structure, routing, standard design pattern

* Branch from master and extend API
Create new models and services 




