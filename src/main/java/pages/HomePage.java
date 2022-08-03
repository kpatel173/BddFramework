package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import testBase.BaseClass;

public class HomePage extends BaseClass{
	
	
	@FindBy(xpath= "//span[@class='user-display']")
	public WebElement username;
	
	
	public HomePage() {
		
		PageFactory.initElements(driver, this);
		
	}
	public String getUser() {
		return username.getText();
	}
}
