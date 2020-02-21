package step_definitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinitions {
	
	WebDriver driver;
	
		
		 @Given("^user is already on Login Page$")
		 public void user_already_on_login_page(){
		 System.setProperty("webdriver.chrome.driver","E:\\Softwares\\chromedriver_win32\\chromedriver.exe");
		 driver = new ChromeDriver();
		 driver.get("http://thedemosite.co.uk/login.php");
		 }
	
		 
		 @When("^title of login page is Free CRM$")
		 public void title_of_login_page_is_Free_CRM() throws Throwable {
			 
			 String title = driver.getTitle();
			 System.out.println(title);
			 Assert.assertEquals("Login example page to test the PHP MySQL online system", title);
		    
		 }

		 @Then("^user enters username and password$")
		 public void user_enters_username_and_password() throws Throwable {
			 
			 driver.findElement(By.name("username")).sendKeys("fdgghgfhgf");
			 driver.findElement(By.name("password")).sendKeys("dfgdfg");
		     
		 }

		 @Then("^user clicks on login button$")
		 public void user_clicks_on_login_button() throws Throwable {
			 
			 WebElement loginBtn =
					 driver.findElement(By.name("FormsButton2"));
					 JavascriptExecutor js = (JavascriptExecutor)driver;
					 js.executeScript("arguments[0].click();", loginBtn);
		     
		 }

		 @Then("^user checks for success message$")
		 public void user_checks_for_success_message() throws Throwable {
			 
		String str =	 driver.findElement(By.xpath("/html/body/table/tbody/tr/td[1]/big/blockquote/blockquote/font/center/b")).getText();
		
		//**Successful Login**  //**Failed Login**
		Assert.assertEquals("**Successful Login**", str);

		 }

		 @Then("^close the browser$")
		 public void close_the_browser() throws Throwable {
			 driver.quit();
		 }


}
