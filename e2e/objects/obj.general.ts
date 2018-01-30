import { browser, element, by, By, $, $$, ExpectedConditions, protractor } from 'protractor';



export class General {
    LogOut() {
        return element(by.buttonText('Log Out'));
    }

    navigateToCreateAccount() {
        return browser.get('http://app-dev.truespace.com/create-account');
      }

    navigateToLogIn(){
        return browser.get('http://app-dev.truespace.com');
          }
    
  //        navigateTo(){
  //            return browser.get('');  ===> open the browser set in config
  //            return browser.get('/'); ===> open the browser set in config until a /
  //        }
    }