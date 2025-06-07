import 'reflect-metadata';

if (typeof Reflect.getMetadata !== 'function') {
  (globalThis as any).Reflect = require('reflect-metadata');
}
