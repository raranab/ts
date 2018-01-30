import { browser, element, by, By, $, $$, ExpectedConditions, protractor } from 'protractor';

var params = browser.params;

export class CreateAccount {
    
  //elements for create account

  companyName(){
    return element(by.css('[type="text"]'));
    }
  email(){
     return element(by.css('[type="email"]'));
  }
 
  pass(){
    return element(by.css('[ng-reflect-name="password"]'));
  }
  
  confirmPass(){
   return element(by.css('[ng-reflect-name="confirmPassword"]'));
 }
  
  createAccountButton(){
   return element(by.buttonText('Create Account'));
 }

// Log in element

  emailLogIn(){
   return element(by.css('[name="email"]'));
 }

  logInButton(){
   return element(by.buttonText('Log In'));
 }
 

 // alert messages
 successMessage(){
    return element(by.className('success'));
 }

 companyNameInUse(){
   return element.all(by.css('span'));
 }
}

