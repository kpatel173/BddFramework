package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import testBase.BaseClass;

public class LoginPage extends BaseClass{
	
	@FindBy(name= "email")
	public WebElement emails;
	
	@FindBy(name= "password")
	public WebElement pass;
	
	@FindBy(xpath= "//div[text()=\"Login\"]")
	public WebElement loginButton;
	
	
	
	@FindBy(xpath= "//p[contains(text(),'Invalid login')]")
	public WebElement loginErr;
	
	public LoginPage() {
		 PageFactory.initElements(driver, this);
	}
	public void openPage() {
		 driver.get("https://ui.freecrm.com/home");
		
		
	}
	public String getTitle() {
		return driver.getTitle();
		
	}
	
	public void enterEmail_Pass(String email, String password) {
		 emails.sendKeys(email);
		 pass.sendKeys(password);
		
	}
	public void clicklogin_invalid() {
		loginButton.click();
		
	}
	public HomePage clicklogin_Valid() {
		loginButton.click();
		return new HomePage();
		
	}
	public String getLoginErr() {
		
		return loginErr.getText();
	}
	
	public void closeBrowser() {
	driver.quit();
		
	}
	
	
	

}
