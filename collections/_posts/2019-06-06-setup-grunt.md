---
layout: post
title: Setup Grunt
author: Barry
permalink: setup-grunt
hero_image: browsersync.gif
hero_image_alt: Devices running Grunt
---

Grunt is a command line Javascript task runner utilizing Node.js platform. It runs custom defined repetitious tasks and manages process automation. The project’s homepage lists many big players in software development that use Grunt in their development as part of continuous integration workflow.
<!--more-->

### Key Feature

* Scroll on one browser; other browsers follow the scroll to the same point
* Click links; other browsers load the clicked URL
* Fill out & submit forms; other browsers submit
* Test responsive designs; see your site rendered on different devices at one time
* Change HTML, CSS & JS; automatically inject those new files without a page refresh
* Extra: BrowserSync is compatible with many task runners like GULP and Grunt. And they work across many operating systems.

First off, BrowserSync creates a small server, but if you already have a server setup, BrowserSync can hook into that server and act as a proxy. Next, it injects a javascript file on every page; This file makes use of WebSockets to communicate between the server and the client to watch changes to your code or browser action. As soon as BrowserSync detects an action it performs a page reload.

BrowserSync is an npm package, as such it needs Node.js installed. To install BrowserSync globally.

### BrowserSync and Gulp task-runner

First install globally gulp in your project then create a browser sync instance.like this flowing code

```javascript
var bs = require(‘browser-sync’).create(); //
gulp.task(‘browser-sync’, function() {
 bs.init({
 server: {
 baseDir: “./”
 }
 });
});
```
> And run this comment : gulp browser-sync

### How does BrowserSync Work?

First off, BrowserSync creates a small server, but if you already have a server setup, BrowserSync can hook into that server and act as a proxy. Next, it injects a javascript file on every page; This file makes use of WebSockets to communicate between the server and the client to watch changes to your code or browser action. As soon as BrowserSync detects an action it performs a page reload.





