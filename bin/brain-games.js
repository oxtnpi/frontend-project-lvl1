#!/usr/bin/env node

import { welcome, askName, name } from '../src/cli.js';
import brainEven from './brain-even.js';

welcome();
askName();
name();
brainEven();
