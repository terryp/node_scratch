
## Overview

This is a horrible experiment that I'm inflicting on myself. Basically, I'm trying to do an exercise that we hand out to potential candidates. I actually had to do this a long time ago when I, myself, became an SE. It was so long ago that the code was PHP and the tough questions were SQL. 

I digress. 

## Usage

This mini project contains the following files:

        .
        ├── README.md               / Read me, or don't
        ├── _test_api.js            / Test files
        ├── api.js                  / Main file
        ├── package.json            / Packages needed to install
        └── scratch.js              / Scratch paper

The external libraries that this project depends on are the following:

        nock
        nodeunit

Users should be able to download the project and install it via Npm. 

        npm install

How do you need to run this ... 

        node api.js                / Runs toy api library
        nodeunit _test_api.js      / Runs tests
