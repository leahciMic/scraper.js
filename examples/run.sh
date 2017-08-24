#!/bin/bash
redis-cli FLUSHALL
DEBUG=scraper* BROWSER=chrome node ../src/run.js --concurrency 5 --queue scraper.js-queue-bull --data data.js ./reddit.js
