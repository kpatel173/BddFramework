package testBase;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.safari.SafariDriver;


public class BaseClass {

	public static WebDriver driver;
	public static Properties prop;
	public BaseClass(){
		prop = new Properties();
	
		
		try {
			
			FileInputStream f = new FileInputStream("/Users/krupalpatel/Desktop/Workspace2/FreeCRMProject/src/main/java/testBase/Configuration.properties");
			prop.load(f);
		} catch (IOException e) {
			
			e.getMessage();
		}
	
	}
	public static void initialization() {

		String browser =prop.getProperty("browser");
		if (browser.equals("chrome")){
			System.setProperty("webdriver.chrome.driver", "/Users/krupalpatel/Desktop/SeleniumJars/chromedriver");
			driver = new ChromeDriver();
		}
		else if (browser.equals("firefox")){
			System.setProperty("webdriver.gecko.driver", "/Users/krupalpatel/Desktop/SeleniumJars/geckodriver");
			driver = new FirefoxDriver(); 
		}
		
		else {
			System.setProperty("webdriver.safari.driver", "/Users/krupalpatel/Desktop/SeleniumJars/safaridriver");
			driver = new SafariDriver(); 
		}
		
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		
	}

}
