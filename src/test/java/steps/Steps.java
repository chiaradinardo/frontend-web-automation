package steps;

import io.cucumber.java.After;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Steps {
	
	WebDriver driver;
	WebDriverWait wait;
	
	@Given("browser is open")
	public void openBrowser() {
		System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@When("user goes to {string}")
	public void goTo(String url) {
		driver.get(url);
	}

	@When("user clicks on {string} link")
	public void clickLink(String button) {
		String locator = "//a[text()='" + button + "']";
		click(locator);
	}

	@When("clicks on {string} button")
	public void clickButton(String button) {
		String locator = "//button[text()='" + button +"']";
		click(locator);
	}

	@When("user completes {string} field with {string}")
	public void completeInput(String locator, String value) {
		waitVisibility(locator);
		driver.findElement(By.id(locator)).sendKeys(value);
	}
	@Then("a successful alert is shown with a message {string}")
	public void validateAlert(String text) {
		waitAlert();
		String message = driver.switchTo().alert().getText();
		driver.switchTo().alert().accept();
		Assert.assertEquals(message, text);
	}

	@Then("a welcome for {string} is shown")
	public void validateUser(String user) {
		waitVisibility("nameofuser");
		WebElement welcomeMsg = driver.findElement(By.id("nameofuser"));
		Assert.assertEquals("Welcome " + user, welcomeMsg.getText());
	}

	@Then("{string} link is shown")
	public void validateLink(String link) {
		String locator = "//a[text()='" + link + "']";
		waitVisibilityByXpath(locator);
		WebElement element = driver.findElement(By.xpath(locator));
		Assert.assertTrue(element.isDisplayed());
	}

	@After
	public void close() {
		driver.close();
	}

	public void waitVisibility(String locator) {
		wait = new WebDriverWait(driver, 5);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id(locator)));
	}

	public void waitVisibilityByXpath(String locator) {
		wait = new WebDriverWait(driver, 5);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(locator)));
	}

	public void waitAlert() {
		wait = new WebDriverWait(driver, 5);
		wait.until(ExpectedConditions.alertIsPresent());
	}

	public void click(String locator) {
		waitVisibilityByXpath(locator);
		driver.findElement(By.xpath(locator)).click();
	}
}
