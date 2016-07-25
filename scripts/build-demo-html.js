'use strict';

const fs = require('fs');
const Handlebars = require('handlebars');
const marked = require('marked');

const pages = require('../demo-src/pages.json');

fs.readFile('./demo-src/index.hbs', 'utf-8', function(err, data) {
  if (err) {
    return console.log(err);
  }
  const fn = Handlebars.compile(data);
  pages.forEach((page) => {
    fs.readFile(`./demo-src/content/${page.slug}.md`, 'utf-8', (err, data) => {
      const pageData = Object.assign({}, page, {content: marked(data)});
      const html = fn(pageData);
      fs.writeFile(`./demo-build/${page.slug}.html`, html);
    });
  });
})
