$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/TekSchoolScenarios.feature");
formatter.feature({
  "line": 1,
  "name": "Tek School Scenarios",
  "description": "",
  "id": "tek-school-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11256422000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on TekSchool page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Click on Test Environment link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User should see Test Environment page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_TekSchool_page()"
});
formatter.result({
  "duration": 4655560800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_Click_on_Test_Environment_link()"
});
formatter.result({
  "duration": 1639685500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_see_Test_Environment_page()"
});
formatter.result({
  "duration": 9842200,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "SDET2019_SDET_Register_form_Test",
  "description": "",
  "id": "tek-school-scenarios;sdet2019-sdet-register-form-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 71,
      "name": "@SDET_RF_DBV"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "User click on myAccount menu on top of the page",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "User click on rigister on myAccount menu",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "User fill register form with below information",
  "rows": [
    {
      "comments": [
        {
          "line": 77,
          "value": "# firstname|lastname|email|phone|password"
        }
      ],
      "cells": [
        "Suhbat",
        "Khan",
        "john.farnsworth@sakilacustomer.org",
        "5712909548",
        "Test123"
      ],
      "line": 78
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "User click on \u0027yes\u0027 radio button for subscribe",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "User click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "User should see \u0027Your Account Has Been Created!\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "User connect to DataBase",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "User sends query\u0027select * from public.customer where email\u003d\u0027john.farnsworth@sakilacustomer.org\u0027\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_myAccount_menu_on_top_of_the_page()"
});
formatter.result({
  "duration": 1741167700,
  "status": "passed"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_register_on_myAccount_menu()"
});
formatter.result({
  "duration": 953425800,
  "status": "passed"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_fill_register_form_with_below_information(DataTable)"
});
formatter.result({
  "duration": 1067275300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yes",
      "offset": 15
    }
  ],
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_yes_radio_button_for_Subscribe(String)"
});
formatter.result({
  "duration": 439181700,
  "status": "passed"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_continue_button()"
});
formatter.result({
  "duration": 472418600,
  "status": "passed"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_should_see_Your_Account_Has_Been_Created()"
});
formatter.result({
  "duration": 30053160800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[text()\u003d\u0027Your Account Has Been Created!\u0027]\"}\n  (Session info: chrome\u003d78.0.3904.108)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027DESKTOP-5F4VFBN\u0027, ip: \u0027192.168.0.79\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.108, chrome: {chromedriverVersion: 78.0.3904.105 (60e2d8774a81..., userDataDir: C:\\Users\\Suhbat\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:59776}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 4f76cdb3ce1fadda96f29909d1cde709\n*** Element info: {Using\u003dxpath, value\u003d//h1[text()\u003d\u0027Your Account Has Been Created!\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\r\n\tat pageObjects.TekSchoolScenariosPageObject.confirmationMessage(TekSchoolScenariosPageObject.java:170)\r\n\tat stepDefinitions.TekSchoolScenariosStepDefinitions.user_should_see_Your_Account_Has_Been_Created(TekSchoolScenariosStepDefinitions.java:93)\r\n\tat ✽.Then User should see \u0027Your Account Has Been Created!\u0027(Features/TekSchoolScenarios.feature:81)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_connect_to_DataBase()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 790736100,
  "status": "passed"
});
});