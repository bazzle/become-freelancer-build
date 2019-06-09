---
title: What is web design
slug: what-is-web-design
style: style-2
menu_links:
 Setup Browsersync: "setup-browsersync"
 Setup Grunt: "setup-grunt"
---

### h3 heading

First off, BrowserSync creates a small server, but if you already have a server setup, BrowserSync can hook into that server and act as a proxy. Next, it injects a javascript file on every page; This file makes use of WebSockets to communicate between the server and the client to watch changes to your code or browser action. As soon as BrowserSync detects an action it performs a page reload.