# NumberFormat [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=You%20can%20easily%20format%20your%20numbers%20for%20an%20international%20audience%20with%20the%20IntlNumberFormat%20React%20component.&url=https://github.com/CharlesStover/react-intl-numberformat&via=CharlesStover&hashtags=react,reactjs,javascript,typescript,webdev,webdevelopment) [![version](https://img.shields.io/npm/v/react-intl-numberformat.svg)](https://www.npmjs.com/package/react-intl-numberformat) [![minzipped size](https://img.shields.io/bundlephobia/minzip/react-intl-numberformat.svg)](https://www.npmjs.com/package/react-intl-numberformat) [![downloads](https://img.shields.io/npm/dt/react-intl-numberformat.svg)](https://www.npmjs.com/package/react-intl-numberformat) [![build](https://api.travis-ci.com/CharlesStover/react-intl-numberformat.svg)](https://travis-ci.com/CharlesStover/react-intl-numberformat/)

`react-intl-numberformat` is a React component implementation of the
[`Intl.NumberFormat` global object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat).

## Install

- `npm install react-intl-numberformat` or
- `yarn add react-intl-numberformat`

## Use

```javascript
import NumberFormat from 'react-intl-numberformat';

function MyComponent() {
  return (
    <p>
      My favorite number is
      <NumberFormat>3141.58</NumberFormat>!
    </p>
  );
}
```

## Props

The `NumberFormat` component supports the entire `Intl.NumberFormat` API via
its props, with strong type-checking. For a full catalog of the
`Intl.NumberFormat` API, check out
[MDN's documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat).
