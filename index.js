#!/usr/bin/env node

const opts = {
    compilerOptions: {
        "types": ["node"],
        "moduleResolution": "node"
    }
}

require('ts-node').register(opts);
require('./main.ts');
