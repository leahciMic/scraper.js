#!/bin/bash

# redis-cli FLUSHALL
HEADLESS=true DEBUG=scraper* node ../src/run.js --concurrency 1 --queue scraper.js-queue-bull --data data.js ./bash.js | npx bunyan
