#!/bin/bash
redis-cli FLUSHALL
cd ..
npm run prepublish
cd -
BROWSER=chrome DEBUG=scraper* node ../dist/run.js --concurrency 5 --queue scraper.js-queue-bull --data data.js ./reddit.js
