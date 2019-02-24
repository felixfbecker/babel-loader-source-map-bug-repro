How to reproduce:

```
npm install
npx webpack
```

The logs will be full of entries like this:

```js
{ identifier: '../../../src/internal/util/toSubscriber.ts',
  shortIdentifier: '../../../src/internal/util/toSubscriber.ts',
  resource: '../../../src/internal/util/toSubscriber.ts',
  resourcePath: '../../../src/internal/util/toSubscriber.ts',
  absoluteResourcePath: '../../../src/internal/util/toSubscriber.ts',
  allLoaders: '',
  query: '',
  moduleId: '',
  hash: '5f60',
  namespace: '' }
```

Note how `absoluteResourcePath` is not absolute. The entry for `main.js` is absolute, but not for files inside rxjs.
