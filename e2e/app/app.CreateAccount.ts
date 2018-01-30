import {CreateAccount} from '../objects/obj.CreateAccount';
import {browser} from 'protractor';
import { create } from 'domain';


let createAccount:CreateAccount;
createAccount = new CreateAccount();



export class GoToPage {

creationAccount(companyName, email, pass)
{
  createAccount.companyName().sendKeys(companyName);
  createAccount.email().sendKeys(email);
  createAccount.pass().sendKeys(pass);
  createAccount.confirmPass().sendKeys(pass);
  createAccount.createAccountButton().click();
  expect(createAccount.successMessage().getText()).toEqual('The register was successfully.');
  
}

logIn(email,pass)
{
  createAccount.emailLogIn().sendKeys(email);
  createAccount.pass().sendKeys(pass);
  createAccount.logInButton().click();
}

companyNameInUse(companyName){
  createAccount.companyName().sendKeys(companyName);
  createAccount.email().click();
  expect(createAccount.companyNameInUse().getText()).toContain('The company is already in use.');
}
}
