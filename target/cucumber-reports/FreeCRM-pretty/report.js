$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("freecrm.feature");
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
  "duration": 5386232509,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 100\nCurrent browser version is 102.0.5005.115 with binary path /Applications/Google Chrome.app/Contents/MacOS/Google Chrome\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027krupals-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:40:aec7:e058:b083%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: 0   chromedriver                        0x00000001023f13d9 chromedriver + 5104601\n1   chromedriver                        0x0000000102381bf3 chromedriver + 4647923\n2   chromedriver                        0x0000000101f72b48 chromedriver + 392008\n3   chromedriver                        0x0000000101f98e1e chromedriver + 548382\n4   chromedriver                        0x0000000101f9490a chromedriver + 530698\n5   chromedriver                        0x0000000101f90f86 chromedriver + 515974\n6   chromedriver                        0x0000000101fcb3a0 chromedriver + 754592\n7   chromedriver                        0x0000000101fc55b3 chromedriver + 730547\n8   chromedriver                        0x0000000101f9b139 chromedriver + 557369\n9   chromedriver                        0x0000000101f9c165 chromedriver + 561509\n10  chromedriver                        0x00000001023b039d chromedriver + 4838301\n11  chromedriver                        0x00000001023c8cde chromedriver + 4938974\n12  chromedriver                        0x00000001023cdb5e chromedriver + 4959070\n13  chromedriver                        0x00000001023c994a chromedriver + 4942154\n14  chromedriver                        0x00000001023a533c chromedriver + 4793148\n15  chromedriver                        0x00000001023e33b8 chromedriver + 5047224\n16  chromedriver                        0x00000001023e353f chromedriver + 5047615\n17  chromedriver                        0x00000001023f8705 chromedriver + 5134085\n18  libsystem_pthread.dylib             0x00007fff66b85661 _pthread_body + 340\n19  libsystem_pthread.dylib             0x00007fff66b8550d _pthread_body + 0\n20  libsystem_pthread.dylib             0x00007fff66b84bf9 thread_start + 13\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat testBase.BaseClass.initialization(BaseClass.java:38)\n\tat stepDefinations.LoginSteps.user_is_on_login_page(LoginSteps.java:21)\n\tat ✽.Given User is on login page(freecrm.feature:10)\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.verify_user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_quit()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 1736256984,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 100\nCurrent browser version is 102.0.5005.115 with binary path /Applications/Google Chrome.app/Contents/MacOS/Google Chrome\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027krupals-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:40:aec7:e058:b083%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: 0   chromedriver                        0x0000000107e053d9 chromedriver + 5104601\n1   chromedriver                        0x0000000107d95bf3 chromedriver + 4647923\n2   chromedriver                        0x0000000107986b48 chromedriver + 392008\n3   chromedriver                        0x00000001079ace1e chromedriver + 548382\n4   chromedriver                        0x00000001079a890a chromedriver + 530698\n5   chromedriver                        0x00000001079a4f86 chromedriver + 515974\n6   chromedriver                        0x00000001079df3a0 chromedriver + 754592\n7   chromedriver                        0x00000001079d95b3 chromedriver + 730547\n8   chromedriver                        0x00000001079af139 chromedriver + 557369\n9   chromedriver                        0x00000001079b0165 chromedriver + 561509\n10  chromedriver                        0x0000000107dc439d chromedriver + 4838301\n11  chromedriver                        0x0000000107ddccde chromedriver + 4938974\n12  chromedriver                        0x0000000107de1b5e chromedriver + 4959070\n13  chromedriver                        0x0000000107ddd94a chromedriver + 4942154\n14  chromedriver                        0x0000000107db933c chromedriver + 4793148\n15  chromedriver                        0x0000000107df73b8 chromedriver + 5047224\n16  chromedriver                        0x0000000107df753f chromedriver + 5047615\n17  chromedriver                        0x0000000107e0c705 chromedriver + 5134085\n18  libsystem_pthread.dylib             0x00007fff66b85661 _pthread_body + 340\n19  libsystem_pthread.dylib             0x00007fff66b8550d _pthread_body + 0\n20  libsystem_pthread.dylib             0x00007fff66b84bf9 thread_start + 13\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat testBase.BaseClass.initialization(BaseClass.java:38)\n\tat stepDefinations.LoginSteps.user_is_on_login_page(LoginSteps.java:21)\n\tat ✽.Given User is on login page(freecrm.feature:20)\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.verify_Error_Message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_quit()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 2089262291,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 100\nCurrent browser version is 102.0.5005.115 with binary path /Applications/Google Chrome.app/Contents/MacOS/Google Chrome\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027krupals-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:40:aec7:e058:b083%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: 0   chromedriver                        0x000000010ee2c3d9 chromedriver + 5104601\n1   chromedriver                        0x000000010edbcbf3 chromedriver + 4647923\n2   chromedriver                        0x000000010e9adb48 chromedriver + 392008\n3   chromedriver                        0x000000010e9d3e1e chromedriver + 548382\n4   chromedriver                        0x000000010e9cf90a chromedriver + 530698\n5   chromedriver                        0x000000010e9cbf86 chromedriver + 515974\n6   chromedriver                        0x000000010ea063a0 chromedriver + 754592\n7   chromedriver                        0x000000010ea005b3 chromedriver + 730547\n8   chromedriver                        0x000000010e9d6139 chromedriver + 557369\n9   chromedriver                        0x000000010e9d7165 chromedriver + 561509\n10  chromedriver                        0x000000010edeb39d chromedriver + 4838301\n11  chromedriver                        0x000000010ee03cde chromedriver + 4938974\n12  chromedriver                        0x000000010ee08b5e chromedriver + 4959070\n13  chromedriver                        0x000000010ee0494a chromedriver + 4942154\n14  chromedriver                        0x000000010ede033c chromedriver + 4793148\n15  chromedriver                        0x000000010ee1e3b8 chromedriver + 5047224\n16  chromedriver                        0x000000010ee1e53f chromedriver + 5047615\n17  chromedriver                        0x000000010ee33705 chromedriver + 5134085\n18  libsystem_pthread.dylib             0x00007fff66b85661 _pthread_body + 340\n19  libsystem_pthread.dylib             0x00007fff66b8550d _pthread_body + 0\n20  libsystem_pthread.dylib             0x00007fff66b84bf9 thread_start + 13\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat testBase.BaseClass.initialization(BaseClass.java:38)\n\tat stepDefinations.LoginSteps.user_is_on_login_page(LoginSteps.java:21)\n\tat ✽.Given User is on login page(freecrm.feature:20)\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.verify_Error_Message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_quit()"
});
formatter.result({
  "status": "skipped"
});
});