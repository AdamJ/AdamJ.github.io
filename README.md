# Mindreeper2420.github.io https://travis-ci.org/mindreeper2420/mindreeper2420.github.io.svg?branch=master
This repo is my own personal site, hosted on GitHub.

If you wish to run this site locally, please follow the Installation steps below. Thanks!

## Installation
* Step 1:
  - Fork and Clone the repo
* Step 2:
  - run `npm Install`
  <blockquote>
    this install the npm modules, which are required for the project to run
  </blockquote>
* Step 3:
  - run `gulp`
  <blockquote>
    this will run through all of the initial setup script setups<br />
    <strong>If there are errors with these scripts, please verify that you have NodeJS installed correctly</strong>
  </blockquote>

## Development &amp; Usage
 By running the default `gulp` command, all of the required library and component pieces will be moved to their respective directories. If you wish to build your SASS separately, you can run `gulp minify-css`, which will compile the SASS and minify it to the /CSS directory.
 
 If you wish to run the project in a local environment, you can enter the command `gulp dev`. This will start up a synchronized browser, which will automatically refresh upon any HTML, SASS, or JS change.

----

This project was built using [Start Bootstrap](http://startbootstrap.com/)