$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Log in",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User can login on website",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@logIn"
    }
  ]
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.step({
  "name": "user goes to \u0027https://www.demoblaze.com/index.html\u0027",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on \u0027Log in\u0027 link",
  "keyword": "When "
});
formatter.step({
  "name": "user completes \u0027loginusername\u0027 field with \u0027\u003cuser\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "name": "user completes \u0027loginpassword\u0027 field with \u0027mypsw123\u0027",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on \u0027Log in\u0027 button",
  "keyword": "And "
});
formatter.step({
  "name": "a welcome for \u0027\u003cuser\u003e\u0027 is shown",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user"
      ]
    },
    {
      "cells": [
        "baufest"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User can login on website",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@logIn"
    }
  ]
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.Steps.openBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user goes to \u0027https://www.demoblaze.com/index.html\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "steps.Steps.goTo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \u0027Log in\u0027 link",
  "keyword": "When "
});
formatter.match({
  "location": "steps.Steps.clickLink(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user completes \u0027loginusername\u0027 field with \u0027baufest\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "steps.Steps.completeInput(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user completes \u0027loginpassword\u0027 field with \u0027mypsw123\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "steps.Steps.completeInput(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on \u0027Log in\u0027 button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.Steps.clickButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a welcome for \u0027baufest\u0027 is shown",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.Steps.validateUser(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User can login on website",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@logOut"
    }
  ]
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.Steps.openBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user goes to \u0027https://www.demoblaze.com/index.html\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "steps.Steps.goTo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \u0027Log in\u0027 link",
  "keyword": "And "
});
formatter.match({
  "location": "steps.Steps.clickLink(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //a[text()\u003d\u0027Log in\u0027] (tried for 5 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:138)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\r\n\tat steps.Steps.waitVisibilityByXpath(Steps.java:87)\r\n\tat steps.Steps.clickLink(Steps.java:36)\r\n\tat ✽.user clicks on \u0027Log in\u0027 link(file:///C:/Users/User/eclipse-workspace/frontend-automation/src/test/resources/features/login.feature:20)\r\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-8S0SSJE\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ad50c369726b9a48322f2e3a4b1a23ad, findElement {using\u003dxpath, value\u003d//a[text()\u003d\u0027Log in\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59163}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59163/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ad50c369726b9a48322f2e3a4b1a23ad\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:197)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:193)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat steps.Steps.waitVisibilityByXpath(Steps.java:87)\r\n\tat steps.Steps.clickLink(Steps.java:36)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user completes \u0027loginusername\u0027 field with \u0027baufest\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "steps.Steps.completeInput(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user completes \u0027loginpassword\u0027 field with \u0027mypsw123\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "steps.Steps.completeInput(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on \u0027Log in\u0027 button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.Steps.clickButton(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \u0027Log out\u0027 link",
  "keyword": "When "
});
formatter.match({
  "location": "steps.Steps.clickLink(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "\u0027Log in\u0027 link is shown",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.Steps.validateLink(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "\u0027Sign in\u0027 link is shown",
  "keyword": "And "
});
formatter.match({
  "location": "steps.Steps.validateLink(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: unable to connect to renderer\n  (failed to check if window was closed: disconnected: unable to connect to renderer)\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-8S0SSJE\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ad50c369726b9a48322f2e3a4b1a23ad, close {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59163}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59163/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ad50c369726b9a48322f2e3a4b1a23ad\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:613)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:617)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:443)\r\n\tat steps.Steps.close(Steps.java:77)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/features/shopping.feature");
formatter.feature({
  "name": "Shopping functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add a laptop to cart",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.Steps.openBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user goes to \u0027https://www.demoblaze.com/index.html\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "steps.Steps.goTo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \u0027Laptops\u0027 link",
  "keyword": "When "
});
formatter.match({
  "location": "steps.Steps.clickLink(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \u0027MacBook air\u0027 link",
  "keyword": "And "
});
formatter.match({
  "location": "steps.Steps.clickLink(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \u0027Add to cart\u0027 link",
  "keyword": "And "
});
formatter.match({
  "location": "steps.Steps.clickLink(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a successful alert is shown with a message \u0027Product added\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.Steps.validateAlert(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/signUp.feature");
formatter.feature({
  "name": "Creating a new user",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User can register a new user.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@signUp"
    }
  ]
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.Steps.openBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user goes to \u0027https://www.demoblaze.com/index.html\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "steps.Steps.goTo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \u0027Sign up\u0027 link",
  "keyword": "When "
});
formatter.match({
  "location": "steps.Steps.clickLink(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user completes \u0027sign-username\u0027 field with \u0027baufest_challenge\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "steps.Steps.completeInput(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user completes \u0027sign-password\u0027 field with \u0027mypsw123\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "steps.Steps.completeInput(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on \u0027Sign up\u0027 button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.Steps.clickButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a successful alert is shown with a message \u0027Sign up successful.\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.Steps.validateAlert(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});