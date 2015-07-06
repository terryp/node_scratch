
## Overview

This is a horrible experiment that I'm inflicting on myself but in the name of science! We hand out an API exercise to prospective candidates so that we can gauge their technical acumen with a project that isn't - necessarily on StackOverflow or from a tutorial. 

Our "working theory," is that this shouldn't take the average bear a long time to do. We have reworked the language to better formalize what we're asking for. 

Since I don't code very much, I decided to time myself to see how I would do when it came to this exercise. Here is roughly 4 hours worth of work. The actual code time was probably about :45 with the other 3:15 going into Node, Node Unit, the async nature of http and figuring out how to write a proper package.json. 

## Installation

Users should be able to fork this repository and install it by issuing the following command:

        npm install

How do you need to run this ... 

        node api.js                / Runs toy api library this actually 
                                   / doens't do anything since it's a module. 

OK, but what can I run? Well, you can run the tests!                                   
        nodeunit _test_api.js      / Runs tests

It should give you output like this:

        _test_api.js
        ✔ testParams
        ✔ testParamsErr
        ✔ testUrlBuild
        ✔ testFetchData

        OK: 8 assertions (58ms)

## Contents

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

This was written against node v.0.10.32, I have no idea if this will work with the io.js fork of the Node project. 


