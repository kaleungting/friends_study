What is "testing"?
code -> expected result -> test -> success/failure

TDD - RED, GREEN, REFACTOR
automated tests make it so others can modify source code without introducing factor

why testing?
we can see the error if something we changed have broken our code, 
saves time
think about possible bugs and issues
integrate into build workflow
breakup complex dependencies
improve code and refactor

different kind of tests

========================
UNIT TESTS

- smallest part of app being tested
- fully isolated
========================
  
========================
INTEGRATION TESTS

- multiple units are tested together to see if the app works perfectly in combination
- tests function that calls another function
- with dependencies
========================

========================
END TO END TESTS

- full flow
- entire application tested from start to finish, just like a regular user would, to see if it behaves as expected
========================

COMPLEXITY
easiest ========>  hardest
unit => integration => E2E

FREQUENCY
most ==============> least
unit => integration => E2E

=========================
JEST - javascript testing
=========================
test xyz,
    pass in the function with argument
    expect().toBe(output);

==============================
PUPPETEER - end to end testing
==============================
.click()
.scrol()