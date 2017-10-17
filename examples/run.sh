#!/bin/bash
redis-cli FLUSHALL
HEADLESS=false DEBUG=scraper* node ../src/run.js --concurrency 2 --queue scraper.js-queue-bull --data data.js ./reddit.js
