#!/bin/bash
DEBUG=scraper*,promise* babel-node ../src/run.js --concurrency 10 --queue scraper.js-queue-bull --data data.js ./reddit.js
