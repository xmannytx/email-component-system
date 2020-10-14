# WSJ Newsletters

This repo includes HTML email templates for customer-facing WSJ newsletters and internal-only Dow Jones communications. The goal is to build a library of well-designed and tested HTML / Campaign Monitor components that will help us design and assemble new newsletters with ease.

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

### Terminal Utility
This utility makes creating new templates faster, more consistent and less error prone. To create a new template, simply...
+ Run `node newsletter --new` from the root directory
+ Follow the prompts ('s' to skip of you're not sure)
+ Run `gulp build` once utility has finished
+ Don't forget to add new templates to index.html

### CSS Guidelines / BEM
+ DO NOT write inline styles. Gulp will concatenate and inline the styles on build
+ Styles should be written in stylesheet partials (such as `src/wsj/styles/modules/body.css`)
+ Please use [BEM syntax](http://getbem.com/introduction/) for CSS

## Image Hosting

Image URLs should point to resources hosted on our static file server. To deploy images to the static file server:

+ Clone the [static_img_newsletter_files](https://github.dowjones.net/Strongmail/static_img_newsletter_files) repo
+ Add your _optimized_ assets (I like to use tinypng.com)
+ `git add .`
+ `git commit -m "Asset description"`
+ `git push` (make sure vpn is connected)

After pushing to master, your assets will usually be immediately available, but sometimes within 10-15 minutes at the following URL:

`http://s.wsj.net/newsletter/asset-name.png`

## Design Files
Newsletters are designed in [Abstract / Sketch](https://share.goabstract.com/8f0a456e-5c76-4c68-b74a-1ed28094e4e5).
