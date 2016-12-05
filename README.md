# Mindreeper2420.github.io
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
 By running the default `gulp` command, all of the required library and component pieces will be moved over the the /dist directory. If you wish to build your SASS or JS as well, you can run either `gulp sass` or `gulp js`.
 
 If you wish to run the project in a local environment, you can enter the command `gulp serve`. This will start up a synchronized browser, which will automatically refresh upon any HTML, SASS, or JS change (utilizing the `gulp sass` and `gulp js` commands).

----

This project was built using [Start Bootstrap](http://startbootstrap.com/)