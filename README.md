## Overview

Petito implements, runs and provides test reports for oranum.com web site.



## Installation
### 1. Clone this repo from github
    git clone https://github.com/gustavogmail/oranumAutomatedSmokeTests.git
### 2. Install the dependencies:
    cd oranumAutomatedSmokeTests
    make install
    OR
    npm install



## How to run
### Run all BDD Scenarios
    make run run-features
    OR
    npx codeceptjs run --features

### Run all BDD Scenarios and Generate the Allure reports
    make run run
    OR
    npm run test

