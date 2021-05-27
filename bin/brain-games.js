#!/usr/bin/env node

import { welcome, askName, assignName } from '../src/cli.js';
import brainEven from './brain-even.js';

welcome();
assignName();
askName();
brainEven();
