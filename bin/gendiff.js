#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

program
  .version('0.0.1', '-V, --version', 'output the version number')
  .argument('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .description('Compares two configuration files a difference.')

program.parse();