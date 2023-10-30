
![ScS-logo](https://www.scs.co.uk/on/demandware.static/Sites-SFRA_SCS-Site/-/default/dw06ab33f1/images/scs-logo--red.svg){width=50%}

# Welcome to light ScS A/B tests framework

This boilerplate has been created to make A/B test easier and quicker to build.

## Description

Webpack based boilerplate to quickstart the new complex CRO tests. \
Simply modify `test-config.js` file and start building the CRO test. \
It uses the JSX template engine and scss for styling.

## Structure

The main file is called `index.jsx` and can be found under the src directory. \
The index contains only the `render()` function and in most cases there is no need to edit this file. \
The main stylesheet can be found under `src/styles.scss`. Rest of the styles are located per component. \
The component directory is prepared to store all of the JSX components.
# Development / build 🚀

## Getting started

To be able to start development all required dependencies must be installed. \
To be able to install the dependencies the minimum required `node.js` version is \
**16.2^** and `npm` **8.19.4**. \
\
Start installation process:

```npm install```

## Development 🧑‍💻

The most comfortable way of development is web server with pre-prepared `index.html` page. \
This boilerplate contains the ScS homepage and can be replaced with any other page. \

### Dev server

To start the development server use the command `serve`

```npm run serve```

### Watch mode

Sometimes the CRO test needs to be developed on the live page. \
The most comfortable way to do it is copy and paste the code into the \
browser console. In this case compiling the code after every change could be \
found very annoying and slow. In this case the best possible solution for this problem is \
watching for changing in the code and automatically compile on change. \

```npm run dev```

This will create a new directory called dist.
Inside you will find `bundle.js` file.
Copy all of the content and paste in the browser console.

## Build 👷

For build the production bundle and achieve the smallest file size run command:

```npm run build```

This will cause creation of 2 new files in the `/dist` directory:

- bundle.js
- main.css

Both needs to be pasted into the right places in the `Dynamic Yeld`.
