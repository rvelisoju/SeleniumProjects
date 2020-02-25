$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/rvelisoju/git/SeleniumProjects/SampleDemo2/FeatureFiles/Features/demo.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#without Examples Keyword heloo wvrb"
    }
  ],
  "line": 5,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user checks for success message",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_already_on_login_page()"
});
formatter.result({
  "duration": 7204576900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 23460000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_enters_username_and_password()"
});
formatter.result({
  "duration": 238735300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 139093601,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_checks_for_success_message()"
});
formatter.result({
  "duration": 37617399,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.close_the_browser()"
});
formatter.result({
  "duration": 892053600,
  "status": "passed"
});
});