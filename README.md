# Oranum Automated Smoke Tests

<p align="center">
  <img src="./images/BannerAutomation.png" height="200" width="375" />
</p>

<div align="center">

[![npm](./images/NodeVersion.png)]()<space><space>
[![Coverage Status](./images/NpmVersion.png)]()

</div>

## Overview

Oranum Automated Smoke Tests is an automated tests project for <a>www.oranum.com</a>. 

The project is based on BDD scenarios and developed using CodeceptJs framework.

<br/>

## Installation
### 1. Clone this repo from github
    git clone https://github.com/gustavogmail/oranumAutomatedSmokeTests.git
### 2. (In the project's root folder) Install the dependencies:
    make install

<br/>

## How to run
### You can run this project in a Docker container:
#### In the project root folder:
    make build-image
    make run-container

## OR 

### Download the container from Docker Hub
    docker pull gustavosaudade/automation:4.0
### Run the container
    docker run -t -p 5000:5000 gustavosaudade/oranumautomation:4.0

#### After the tests conclusion, open a browser in to see the Allure reports
    http://localhost:5000/

<br/>

## How to run locally
### You can run this project locally:
#### Run all BDD Scenarios
    make run-features

### IMPORTANT !! :
#### To run Allure reports locally, make sure you have the JRE installed and the JAVA_HOME environment variable set
#### Also make sure you have allure installed globally:
    npm install -g allure-commandline --save-dev
#### So, you will be able to run
    make run-allure
#### Open a browser in to see the Allure reports
    http://localhost:5000/
