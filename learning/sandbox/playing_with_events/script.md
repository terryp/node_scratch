
# Emitting Events

## Introduction

Yep, here's another talk on Node.js! Why? I have no idea. But I've been doing more programming in my spare time and I showed Manderson some of my code and he graciously cleaned it up and included a little tidbit that inspired this talk. 

## Cue Events

I was working on some automated scraping strategies using Node, and I shared the repository with Manderson. As one would expect, Manderson made some awesome comments. 

https://github.com/terryp/node_scratch/commit/3aa500ae413d44b3c123b226529ea11ed2476a3e

That one was funny, but it was this one that got me thinking. 

https://github.com/terryp/node_scratch/commit/7e8a958eeab194b4067d87e6f77cc22886aa1e33

## Event Emitter

Callback hell is a real thing and doing control flow in a language that is designed to be asynchronous is definitely weird. Events are a built-in element of Node that 
