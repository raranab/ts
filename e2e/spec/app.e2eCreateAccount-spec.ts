import{GoToPage} from '../app/app.CreateAccount'
import{General} from '../objects/obj.general'
import{browser} from 'protractor'
var params = browser.params;


describe('Truespace', () => {
  let goToPage:GoToPage;
  let general:General;

  
  beforeEach(() => {
    goToPage = new GoToPage;
    general = new General;
  //  general.navigateTo();
  });

  afterEach(() =>{
   
	//	general.LogOut().click();
  });
  
  it('create account', () => {
    general.navigateToCreateAccount();
    goToPage.creationAccount(params.createAccount.companyName, params.createAccount.email,params.createAccount.pass );
    browser.sleep(2000);
    goToPage.logIn(params.createAccount.email,params.createAccount.pass);
    browser.sleep(2000);
    general.LogOut().click();
    browser.sleep(2000);
});

  it('companyName in use',() =>{
    general.navigateToCreateAccount();
    goToPage.companyNameInUse(params.createAccount.companyName);
  });
 
  

});


 

  

