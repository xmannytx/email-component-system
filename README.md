# Email component system

The goal is to build a library of well-designed and tested HTML components that will aid in assembling new email templates with ease.

## Prerequisites
To work with this repo locally, you'll need the following installed on your machine:

+ [Node JS](https://nodejs.org/en/)
+ [Gulp CLI Tools](https://gulpjs.com/)

### Local Installation

* Clone the repo
* From the root directory run: `npm install`
+ That's it!

## Local Development
+ Run `gulp`  
+ Navigate to `localhost:3000` in your browser
+ Be sure to work in the `src` directory. Edits made directly to `dist` will be overwritten. Template files uploaded to Campaign Monitor should come from `dist` directory (ex: dist/wsj/books/books-template.html)

### CSS Guidelines
+ DO NOT write inline styles. Gulp will concatenate and inline the styles on build
+ Styles should be written in stylesheet partials (such as `src/wsj/styles/modules/body.css`)
