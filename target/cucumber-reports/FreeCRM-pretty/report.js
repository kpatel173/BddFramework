$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("deals.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Deals.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 7367963010,
  "status": "passed"
});
formatter.match({
  "location": "Deals.title_of_login_page_is_Cogmento_CRM()"
});
formatter.result({
  "duration": 12224980,
  "status": "passed"
});
formatter.match({
  "location": "Deals.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 20060204894,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: *[name\u003d\u0027username\u0027]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027krupals-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:40:aec7:e058:b083%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 103.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20220729222726, moz:geckodriverVersion: 0.30.0, moz:headless: false, moz:platformVersion: 17.7.0, moz:processID: 16357, moz:profile: /var/folders/p8/fwvt8hpx36d..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, moz:windowless: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f86b55c0-52c4-4323-b393-dd94b8e5a6d3\n*** Element info: {Using\u003dname, value\u003dusername}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat stepDefinations.Deals.user_enters_username_and_password(Deals.java:37)\n\tat ✽.Then user enters username and password(deals.feature:7)\n",
  "status": "failed"
});
formatter.match({
  "location": "Deals.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Deals.user_is_on_hopme_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Deals.user_moves_to_new_deal_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Deals.user_enters_deal_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Deals.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("freecrm.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: krupss2002@gmail.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary : FreeCRM Project"
    }
  ],
  "line": 5,
  "name": "FreeCRM Website Actions",
  "description": "",
  "id": "freecrm-website-actions",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 9,
  "name": "Login to the App",
  "description": "",
  "id": "freecrm-website-actions;login-to-the-app",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "page title is \"Cogmento CRM\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user enters valid \"krupss2002@gmail.com\" and \"Test@123\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "verify user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user quit",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 6902209490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cogmento CRM",
      "offset": 15
    }
  ],
  "location": "LoginSteps.page_title_is(String)"
});
formatter.result({
  "duration": 14113028,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "krupss2002@gmail.com",
      "offset": 19
    },
    {
      "val": "Test@123",
      "offset": 46
    }
  ],
  "location": "LoginSteps.user_enters_valid_and(String,String)"
});
formatter.result({
  "duration": 181517403,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 246924471,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verify_user_is_on_home_page()"
});
formatter.result({
  "duration": 775040862,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_quit()"
});
formatter.result({
  "duration": 971009268,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Try Login with invalid input",
  "description": "",
  "id": "freecrm-website-actions;try-login-with-invalid-input",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "page title is \"Cogmento CRM\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user enters invalid  \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "verify Error Message",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user quit",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "freecrm-website-actions;try-login-with-invalid-input;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 28,
      "id": "freecrm-website-actions;try-login-with-invalid-input;;1"
    },
    {
      "cells": [
        "jncjebdv",
        "3445df"
      ],
      "line": 29,
      "id": "freecrm-website-actions;try-login-with-invalid-input;;2"
    },
    {
      "cells": [
        "ncejkrn$",
        "cfevce"
      ],
      "line": 30,
      "id": "freecrm-website-actions;try-login-with-invalid-input;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "Try Login with invalid input",
  "description": "",
  "id": "freecrm-website-actions;try-login-with-invalid-input;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "page title is \"Cogmento CRM\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user enters invalid  \"jncjebdv\" and \"3445df\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "verify Error Message",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user quit",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 6725294994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cogmento CRM",
      "offset": 15
    }
  ],
  "location": "LoginSteps.page_title_is(String)"
});
formatter.result({
  "duration": 12931802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jncjebdv",
      "offset": 22
    },
    {
      "val": "3445df",
      "offset": 37
    }
  ],
  "location": "LoginSteps.user_enters_invalid_and(String,String)"
});
formatter.result({
  "duration": 165332119,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 239569308,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verify_Error_Message()"
});
formatter.result({
  "duration": 463417708,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_quit()"
});
formatter.result({
  "duration": 1248107597,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Try Login with invalid input",
  "description": "",
  "id": "freecrm-website-actions;try-login-with-invalid-input;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "page title is \"Cogmento CRM\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user enters invalid  \"ncejkrn$\" and \"cfevce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "verify Error Message",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user quit",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 6809509534,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cogmento CRM",
      "offset": 15
    }
  ],
  "location": "LoginSteps.page_title_is(String)"
});
formatter.result({
  "duration": 3769905,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ncejkrn$",
      "offset": 22
    },
    {
      "val": "cfevce",
      "offset": 37
    }
  ],
  "location": "LoginSteps.user_enters_invalid_and(String,String)"
});
formatter.result({
  "duration": 158937627,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 236121720,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verify_Error_Message()"
});
formatter.result({
  "duration": 239497571,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_quit()"
});
formatter.result({
  "duration": 930028443,
  "status": "passed"
});
formatter.uri("hooks.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM application test",
  "description": "",
  "id": "free-crm-application-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "free crm create deal test",
  "description": "",
  "id": "free-crm-application-test;free-crm-create-deal-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on deal page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user fills the deals form",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "deal is created",
  "keyword": "Then "
});
formatter.match({
  "location": "Hooks.user_is_on_deal_page()"
});
formatter.result({
  "duration": 3485391311,
  "status": "passed"
});
formatter.match({
  "location": "Hooks.user_fills_the_deals_form()"
});
formatter.result({
  "duration": 20488,
  "status": "passed"
});
formatter.match({
  "location": "Hooks.deal_is_created()"
});
formatter.result({
  "duration": 16086,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "free crm create contact test",
  "description": "",
  "id": "free-crm-application-test;free-crm-create-contact-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "user is on contact page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user fills the contact form",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "contact is created",
  "keyword": "Then "
});
formatter.match({
  "location": "Hooks.user_is_on_contact_page()"
});
formatter.result({
  "duration": 50334,
  "status": "passed"
});
formatter.match({
  "location": "Hooks.user_fills_the_contact_form()"
});
formatter.result({
  "duration": 32581,
  "status": "passed"
});
formatter.match({
  "location": "Hooks.contact_is_created()"
});
formatter.result({
  "duration": 44455,
  "status": "passed"
});
});