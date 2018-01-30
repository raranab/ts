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
  general.LogOut().click()

  });
  

 
    it('log in ',() =>{
      general.navigateToLogIn();
      goToPage.logIn(params.createAccount.email,params.createAccount.pass);
     
    })



});

