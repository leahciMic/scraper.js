#!/bin/bash
redis-cli FLUSHALL
cd ..
npm run prepublish
cd -
BROWSER=firefox DEBUG=scraper* node ../dist/run.js --concurrency 2 --queue scraper.js-queue-bull --data data.js ./reddit.js
