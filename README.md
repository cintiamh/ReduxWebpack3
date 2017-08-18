# Redux Webpack 3

Step by step tutorial to set up your own React/Redux project with webpack 3.

http://redux.js.org/docs/advanced/ExampleRedditAPI.html

```
$ touch .gitignore
```

.gitignore content:
```
node_modules/
.idea
*.iml
```

## Webpack, Babel, and React

Installing packages
```
$ npm init -y
$ npm i webpack webpack-dev-server --save-dev
$ npm i html-webpack-plugin clean-webpack-plugin --save-dev
$ npm i babel-core babel-cli babel-preset-es2015 babel-preset-react --save-dev
$ npm i babel-plugin-transform-es2015-destructuring babel-plugin-transform-es2015-parameters babel-plugin-transform-object-rest-spread --save-dev
$ npm i css-loader style-loader babel-loader --save-dev
$ npm i react react-dom --save
$ npm i react-router-dom redux react-redux isomorphic-fetch --save
```

Building the structure
```
$ mkdir src
$ mkdir src/components
$ mkdir src/containers
$ mkdir dist
$ mkdir test
$ touch .babelrc
$ touch webpack.config.js

$ touch src/routes.jsx
$ touch src/components/app.jsx
$ touch src/containers/Root.jsx
```

.babelrc:
```json
{
  "presets": ["es2015", "react"],
  "plugins": [
    "transform-es2015-destructuring",
    "transform-es2015-parameters",
    "transform-object-rest-spread"
  ]
}
```

webpack.config.js
```javascript

```

### Template

```
$ mkdir src/templates
$ touch src/templates/index.template.ejs
```

src/templates/index.template.ejs
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My App</title>
</head>
<body>
    <div id='root'></div>
</body>
</html>
```

### Entry point

```
$ touch src/index.jsx
```

src/index.jsx
```javascript
import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';

render(
  <Root/>,
  document.getElementById('root')
);
```

### Action Creators and Constants

```
$ touch src/actions.js
```