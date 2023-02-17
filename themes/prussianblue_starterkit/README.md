# PrussianBlue Starterkit

This module provides a starting point for theming a PrussianBlue website.

It contains (or rather, will contain):

- Templates for page, layouts and all the components (paragraphs, menus, blocks, everything).
- Styles for all the components.
- Styles for typography, as well as font files.
- Fontawesome fonts and styles
- Developer documentation.

## How styles are distributed

There are several places in which you can find styles:

### Libraries, at scss/{name}.scss (that compile to css/{name}.css)

- They are compiled to css/{name}.scss with `make sass-libraries`
- They can also be compiled with the ddev command `ddev pb-dev-sass-libraries`. The flag `--watch` lets you watch for changes.
- They provide CSS variables on the :root element; these can be used by components
- They are added to the theme by *.libraries.yml.
- Their css output is sent directly to the browser.

### Single-directory components at templates/components/

- Each component has its own Scss file
- Components may have JS behaviors
- Component styles are compiled with `make sass-components`
- They can also be compiled with `ddev pb-dev-sass-components` and the `--watch` flag is also available.

### Utilities, at scss/utilities/

- They don't produce CSS output directly.
- They are meant to be imported by components scss files.

### Fontawesome, at ./fontawesome-subset

- Produced by the Fontawesome 6 Subsetter
- Open the fontawesome-subset.yml file with the app to see the icons available
- Creating a subset requires a Pro subscription
- Subsets are the easiest way to integrate FA without large files or complicated setups
- FA classes are used directly in markup
- Added to the theme by *.libraries.yml.

## Developer experience guidelines

While developing the base and starterkit themes for PrussianBlue my intention is to make the developer experience as enjoyable and effective as possible.

To achieve this, I will focus on:

- Keeping cognitive load low
- Maximizing clarity and readability
- Documenting complex relationships if they are unavoidable
- Documenting rules devs can follow to keep things predictable

All without sacrificing flexibility. So, wish me luck!