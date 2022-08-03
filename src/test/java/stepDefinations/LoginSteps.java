package stepDefinations;
import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.HomePage;
import pages.LoginPage;
import testBase.BaseClass;


public class LoginSteps extends BaseClass{

	
	LoginPage lp;
	HomePage hp;
	
		 
		@Given("^User is on login page$")
		public void user_is_on_login_page() throws Throwable {
			 BaseClass.initialization();
			 lp = new LoginPage();
			 lp.openPage();
		}

		@When("^page title is \"([^\"]*)\"$")
		public void page_title_is(String expectedTitle) throws Throwable {
			String actualTitle = lp.getTitle();
			Assert.assertEquals(expectedTitle, actualTitle);
			
			
			
		   
		}

		@Then("^user enters valid \"([^\"]*)\" and \"([^\"]*)\"$")
		public void user_enters_valid_and(String email, String pass) throws Throwable {
		    lp.enterEmail_Pass(email, pass);
			
			
		}

		@Then("^user clicks on login button$")
		public void user_clicks_on_login_button() throws Throwable {
			 hp = lp.clicklogin_Valid();
		}

		@Then("^verify user is on home page$")
		public void verify_user_is_on_home_page() throws Throwable {
		   String actualUser = hp.getUser();
		   Assert.assertEquals("Krupal Patel", actualUser);
		
			
		}

		@Then("^user enters invalid  \"([^\"]*)\" and \"([^\"]*)\"$")
		public void user_enters_invalid_and(String email, String pass) throws Throwable {
			lp.enterEmail_Pass(email, pass);
		    
		}
		
		@Then("^verify Error Message$")
		public void verify_Error_Message() throws Throwable {
			 String expectedErr = "Invalid login";
			String actualErr = lp.getLoginErr();
			Assert.assertEquals(expectedErr, actualErr);
		}
		@Then("^user quit$")
		public void user_quit() throws Throwable {
			 lp.closeBrowser();
		}
		



	}


