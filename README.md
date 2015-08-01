# scraper.js

An extensible web scraping tool written in JavaScript utilizing WebDriver.

## About ES6

This codebase has been written with the assumption that it will be used with:
```node --harmony --harmony_arrow_functions```.

It has been tested with iojs 2.5.0, and I'd expect it to work in node as well
with the appropriate flags.

However the published version you'll find on npm has been converted to ES5 using
babel to maximize compatibility.

One day we'll live in a world where we can write, test, and distribute ES6 code,
but we're not quite there yet, and I have taken an approach to ensure a modern
code base whilst maintaining maximum compatibility.

iojs 2.5.0 runs on a version of v8 that does not contain full support for
lexically scoped fat arrow functions. Because of this, you'll see me from time
to time using .bind(this) in promise chains, or var self = this in methods for
this reason exactly. We will remove them as soon as iojs ships with working
support for lexically scoped functions.
