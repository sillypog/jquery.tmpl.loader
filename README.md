# jQuery tmpl loader [![Build Status](https://travis-ci.org/sillypog/jquery.tmpl.loader.png?branch=master)](https://travis-ci.org/sillypog/jquery.tmpl.loader)

Simplifies loading templates for jQuery.tmpl.

This plugin simplifies the compilation of jQuery templates from markup. Templates can be defined as id-labelled script tags and included in the head of index.html. These will be removed from the DOM during compilation.

To use templateLoader, an array of template ids is passed into the loader for compilation, along with a namespace object to allow easy referencing of the compiled templates.

For example, to compile the template defined in a script with the id 'my_template' and store it in an object named templates:

var templates = {};
$('[type="text/x-jQuery-tmpl"]').compileTemplates(templates);
The template can then be referenced by its uppercase name.

$.tmpl(templates.MY_TEMPLATE).appendTo($('body'));
Although the templateLoader plugin has a define statement for use with require.js, it is dependent on the jquery.tmpl plugin which is not an AMD module.

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/sillypog/jquery-tmpl-loader/master/dist/jquery.tmpl.loader.min.js
[max]: https://raw.github.com/sillypog/jquery-tmpl-loader/master/dist/jquery.tmpl.loader.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/tmpl-loader.min.js"></script>
<script>
jQuery(function($) {
  $('[type="text/x-jQuery-tmpl"]').compileTemplates(this.templates);
});
</script>
```
