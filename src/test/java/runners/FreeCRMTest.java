package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"/Users/krupalpatel/Desktop/Workspace2/FreeCRM_BDD_Project/src/test/java/features"}, //path of feature file
		glue= {"stepDefinations"}, // the path of the stepdefination file
		//plugin = {"pretty"},
		format = {"pretty", "html:target/cucumber-reports/FreeCRM-pretty", "json:target/cucumber-reports/FreeCRMReport.json", "junit:target/cucumber-reports/FreeCRM.xml"},
		//tags = {"~@Regression"},
		monochrome = true, //display the console output in a proper readable format
		strict = true, // it will check if any step is not defined in step defination file
		dryRun = false// to check the maping is proper between feature file and step defination
		)


public class FreeCRMTest {

}
