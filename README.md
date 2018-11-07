# [Material Dashboard React](https://demos.creative-tim.com/material-dashboard-react/#/dashboard) [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/intent/tweet?url=https%3A%2F%2Fcreativetimofficial.github.io%2Fmaterial-dashboard-react&text=Material%20Dashboard%20React%20-%20Free%20Bootstrap%20Admin%20Template&original_referer=https%3A%2F%2Fdemos.creative-tim.com%2Fmaterial-dashboard-react%2F%3F_ga%3D2.10428917.198078103.1532329372-1803433978.1528781151&via=creativetim&hashtags=react%2Cmaterial-ui)



![version](https://img.shields.io/badge/version-1.5.0-blue.svg) ![license](https://img.shields.io/badge/license-MIT-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/material-dashboard-react.svg?maxAge=2592000)]() [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/material-dashboard-react.svg?maxAge=2592000)]() [![Join the chat at https://gitter.im/NIT-dgp/General](https://badges.gitter.im/NIT-dgp/General.svg)](https://gitter.im/creative-tim/material-dashboard?utm_source=share-link&utm_medium=link&utm_campaign=share-link) [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)

![Product Gif](src/assets/github/md-react.gif)

Material Dashboard React is a free Material-UI Admin with a fresh, new design inspired by Google's Material Design. We are very excited to introduce our take on the material concepts through an easy to use and beautiful set of components. Material Dashboard React was built over the popular Material-UI framework.

Material Dashboard React makes use of light, surface and movement. The general layout resembles sheets of paper following multiple different layers, so that the depth and order is obvious. The navigation stays mainly on the left sidebar and the content is on the right inside the main panel.

Material Dashboard React comes with 5 color filter choices for both the sidebar and the card headers (blue, green, orange, red and purple) and an option to have a background image on the sidebar.

Material Dashboard React was created using [create-react-app](https://github.com/facebook/create-react-app) and it uses a framework built by our friend [Olivier - Material-UI v3.1.0](https://github.com/mui-org/material-ui), who did an amazing job creating the backbone for the material effects, animations, ripples and transitions. Big thanks to his team for the effort and forward thinking they put into it.

Special thanks go to:
+ [React-chartist](https://github.com/fraserxu/react-chartist) for the wonderful charts.

We are very excited to share this dashboard with you and we look forward to hearing your feedback!

You can find the Github Repo here.

## Table of Contents

* [Versions](#versions)
* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Technical Support or Questions](#technical-support-or-questions)
* [Licensing](#licensing)
* [Useful Links](#useful-links)


## Versions

[<img src="src/assets/github/html.png" width="60" height="60" />](https://www.creative-tim.com/product/material-dashboard)
[<img src="src/assets/github/react.svg" width="60" height="60" />](https://www.creative-tim.com/product/material-dashboard-react)
[<img src="src/assets/github/vuejs.png" width="60" height="60" />](https://www.creative-tim.com/product/vue-material-dashboard)
[<img src="src/assets/github/angular.png" width="60" height="60" />](https://www.creative-tim.com/product/material-dashboard-angular2)


| HTML | React | Vue | Angular |
| --- | --- | --- | --- |
| [![Material Dashboard HTML](src/assets/github/opt_md_thumbnail.jpg)](https://www.creative-tim.com/product/material-dashboard) | [![Material Dashboard React](src/assets/github/opt_mdr_thumbnail.jpg)](https://www.creative-tim.com/product/material-dashboard-react) | [![Vue Material Dashboard ](src/assets/github/opt_md_vue_thumbnail.jpg)](https://www.creative-tim.com/product/vue-material-dashboard) | [![Material Dashboard Angular](src/assets/github/opt_md_angular_thumbnail.jpg)](https://www.creative-tim.com/product/material-dashboard-angular2)

## Demo

| Dashboard | User Profile | Tables | Maps | Notification |
| --- | --- | --- | --- | --- |
| [![Start page](src/assets/github/dashboard.png)](https://demos.creative-tim.com/material-dashboard-react/#/dashboard) | [![User profile page](src/assets/github/user_profile.png)](https://demos.creative-tim.com/material-dashboard-react/#/user) | [![Tables page ](src/assets/github/tables.png)](https://demos.creative-tim.com/material-dashboard-react/#/table) | [![Maps Page](src/assets/github/maps.png)](https://demos.creative-tim.com/material-dashboard-react/#/maps) | [![Notification page](src/assets/github/notification.png)](https://demos.creative-tim.com/material-dashboard-react/#/notifications)

[View More](https://demos.creative-tim.com/material-dashboard-react/#/dashboard).


## Quick start

Quick start options:

- `npm i material-dashboard-react`
- Clone the repo: `git clone https://github.com/creativetimofficial/material-dashboard-react.git`.
- [Download from Github](https://github.com/creativetimofficial/material-dashboard-react/archive/master.zip).
- [Download from Creative Tim](https://www.creative-tim.com/product/material-dashboard-react).


## Documentation
The documentation for the Material Dashboard React is hosted at our [website](https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial).


## File Structure

Within the download you'll find the following directories and files:

```
material-dashboard-react
.
├───.idea
│   └───inspectionProfiles
└───MEVA
    ├───documentation
    │   └───assets
    │       ├───css
    │       ├───img
    │       │   └───faces
    │       └───js
    ├───node_modules
    │   ├───.bin
    │   ├───.cache
    │   │   └───babel-loader
    │   ├───@babel
    │   │   └───runtime
    │   │       ├───helpers
    │   │       │   └───esm
    │   │       └───regenerator
    │   ├───@material-ui
    │   │   ├───core
    │   │   │   ├───AppBar
    │   │   │   ├───Avatar
    │   │   │   ├───Backdrop
    │   │   │   ├───Badge
    │   │   │   ├───BottomNavigation
    │   │   │   ├───BottomNavigationAction
    │   │   │   ├───Button
    │   │   │   ├───ButtonBase
    │   │   │   ├───Card
    │   │   │   ├───CardActionArea
    │   │   │   ├───CardActions
    │   │   │   ├───CardContent
    │   │   │   ├───CardHeader
    │   │   │   ├───CardMedia
    │   │   │   ├───Checkbox
    │   │   │   ├───Chip
    │   │   │   ├───CircularProgress
    │   │   │   ├───ClickAwayListener
    │   │   │   ├───Collapse
    │   │   │   ├───colors
    │   │   │   ├───CssBaseline
    │   │   │   ├───Dialog
    │   │   │   ├───DialogActions
    │   │   │   ├───DialogContent
    │   │   │   ├───DialogContentText
    │   │   │   ├───DialogTitle
    │   │   │   ├───Divider
    │   │   │   ├───Drawer
    │   │   │   ├───es
    │   │   │   │   ├───AppBar
    │   │   │   │   ├───Avatar
    │   │   │   │   ├───Backdrop
    │   │   │   │   ├───Badge
    │   │   │   │   ├───BottomNavigation
    │   │   │   │   ├───BottomNavigationAction
    │   │   │   │   ├───Button
    │   │   │   │   ├───ButtonBase
    │   │   │   │   ├───Card
    │   │   │   │   ├───CardActionArea
    │   │   │   │   ├───CardActions
    │   │   │   │   ├───CardContent
    │   │   │   │   ├───CardHeader
    │   │   │   │   ├───CardMedia
    │   │   │   │   ├───Checkbox
    │   │   │   │   ├───Chip
    │   │   │   │   ├───CircularProgress
    │   │   │   │   ├───ClickAwayListener
    │   │   │   │   ├───Collapse
    │   │   │   │   ├───colors
    │   │   │   │   ├───CssBaseline
    │   │   │   │   ├───Dialog
    │   │   │   │   ├───DialogActions
    │   │   │   │   ├───DialogContent
    │   │   │   │   ├───DialogContentText
    │   │   │   │   ├───DialogTitle
    │   │   │   │   ├───Divider
    │   │   │   │   ├───Drawer
    │   │   │   │   ├───ExpansionPanel
    │   │   │   │   ├───ExpansionPanelActions
    │   │   │   │   ├───ExpansionPanelDetails
    │   │   │   │   ├───ExpansionPanelSummary
    │   │   │   │   ├───Fade
    │   │   │   │   ├───FilledInput
    │   │   │   │   ├───FormControl
    │   │   │   │   ├───FormControlLabel
    │   │   │   │   ├───FormGroup
    │   │   │   │   ├───FormHelperText
    │   │   │   │   ├───FormLabel
    │   │   │   │   ├───Grid
    │   │   │   │   ├───GridList
    │   │   │   │   ├───GridListTile
    │   │   │   │   ├───GridListTileBar
    │   │   │   │   ├───Grow
    │   │   │   │   ├───Hidden
    │   │   │   │   ├───Icon
    │   │   │   │   ├───IconButton
    │   │   │   │   ├───Input
    │   │   │   │   ├───InputAdornment
    │   │   │   │   ├───InputBase
    │   │   │   │   ├───InputLabel
    │   │   │   │   ├───internal
    │   │   │   │   │   └───svg-icons
    │   │   │   │   ├───LinearProgress
    │   │   │   │   ├───List
    │   │   │   │   ├───ListItem
    │   │   │   │   ├───ListItemAvatar
    │   │   │   │   ├───ListItemIcon
    │   │   │   │   ├───ListItemSecondaryAction
    │   │   │   │   ├───ListItemText
    │   │   │   │   ├───ListSubheader
    │   │   │   │   ├───Menu
    │   │   │   │   ├───MenuItem
    │   │   │   │   ├───MenuList
    │   │   │   │   ├───MobileStepper
    │   │   │   │   ├───Modal
    │   │   │   │   ├───NativeSelect
    │   │   │   │   ├───NoSsr
    │   │   │   │   ├───OutlinedInput
    │   │   │   │   ├───Paper
    │   │   │   │   ├───Popover
    │   │   │   │   ├───Popper
    │   │   │   │   ├───Portal
    │   │   │   │   ├───Radio
    │   │   │   │   ├───RadioGroup
    │   │   │   │   ├───RootRef
    │   │   │   │   ├───Select
    │   │   │   │   ├───Slide
    │   │   │   │   ├───Snackbar
    │   │   │   │   ├───SnackbarContent
    │   │   │   │   ├───Step
    │   │   │   │   ├───StepButton
    │   │   │   │   ├───StepConnector
    │   │   │   │   ├───StepContent
    │   │   │   │   ├───StepIcon
    │   │   │   │   ├───StepLabel
    │   │   │   │   ├───Stepper
    │   │   │   │   ├───styles
    │   │   │   │   ├───SvgIcon
    │   │   │   │   ├───SwipeableDrawer
    │   │   │   │   ├───Switch
    │   │   │   │   ├───Tab
    │   │   │   │   ├───Table
    │   │   │   │   ├───TableBody
    │   │   │   │   ├───TableCell
    │   │   │   │   ├───TableFooter
    │   │   │   │   ├───TableHead
    │   │   │   │   ├───TablePagination
    │   │   │   │   ├───TablePaginationActions
    │   │   │   │   ├───TableRow
    │   │   │   │   ├───TableSortLabel
    │   │   │   │   ├───Tabs
    │   │   │   │   ├───test-utils
    │   │   │   │   ├───TextField
    │   │   │   │   ├───Toolbar
    │   │   │   │   ├───Tooltip
    │   │   │   │   ├───transitions
    │   │   │   │   ├───Typography
    │   │   │   │   ├───utils
    │   │   │   │   ├───withMobileDialog
    │   │   │   │   ├───withWidth
    │   │   │   │   └───Zoom
    │   │   │   ├───ExpansionPanel
    │   │   │   ├───ExpansionPanelActions
    │   │   │   ├───ExpansionPanelDetails
    │   │   │   ├───ExpansionPanelSummary
    │   │   │   ├───Fade
    │   │   │   ├───FilledInput
    │   │   │   ├───FormControl
    │   │   │   ├───FormControlLabel
    │   │   │   ├───FormGroup
    │   │   │   ├───FormHelperText
    │   │   │   ├───FormLabel
    │   │   │   ├───Grid
    │   │   │   ├───GridList
    │   │   │   ├───GridListTile
    │   │   │   ├───GridListTileBar
    │   │   │   ├───Grow
    │   │   │   ├───Hidden
    │   │   │   ├───Icon
    │   │   │   ├───IconButton
    │   │   │   ├───Input
    │   │   │   ├───InputAdornment
    │   │   │   ├───InputBase
    │   │   │   ├───InputLabel
    │   │   │   ├───internal
    │   │   │   │   └───svg-icons
    │   │   │   ├───LinearProgress
    │   │   │   ├───List
    │   │   │   ├───ListItem
    │   │   │   ├───ListItemAvatar
    │   │   │   ├───ListItemIcon
    │   │   │   ├───ListItemSecondaryAction
    │   │   │   ├───ListItemText
    │   │   │   ├───ListSubheader
    │   │   │   ├───Menu
    │   │   │   ├───MenuItem
    │   │   │   ├───MenuList
    │   │   │   ├───MobileStepper
    │   │   │   ├───Modal
    │   │   │   ├───NativeSelect
    │   │   │   ├───NoSsr
    │   │   │   ├───OutlinedInput
    │   │   │   ├───Paper
    │   │   │   ├───Popover
    │   │   │   ├───Popper
    │   │   │   ├───Portal
    │   │   │   ├───Radio
    │   │   │   ├───RadioGroup
    │   │   │   ├───RootRef
    │   │   │   ├───Select
    │   │   │   ├───Slide
    │   │   │   ├───Snackbar
    │   │   │   ├───SnackbarContent
    │   │   │   ├───Step
    │   │   │   ├───StepButton
    │   │   │   ├───StepConnector
    │   │   │   ├───StepContent
    │   │   │   ├───StepIcon
    │   │   │   ├───StepLabel
    │   │   │   ├───Stepper
    │   │   │   ├───styles
    │   │   │   ├───SvgIcon
    │   │   │   ├───SwipeableDrawer
    │   │   │   ├───Switch
    │   │   │   ├───Tab
    │   │   │   ├───Table
    │   │   │   ├───TableBody
    │   │   │   ├───TableCell
    │   │   │   ├───TableFooter
    │   │   │   ├───TableHead
    │   │   │   ├───TablePagination
    │   │   │   ├───TablePaginationActions
    │   │   │   ├───TableRow
    │   │   │   ├───TableSortLabel
    │   │   │   ├───Tabs
    │   │   │   ├───test-utils
    │   │   │   ├───TextField
    │   │   │   ├───Toolbar
    │   │   │   ├───Tooltip
    │   │   │   ├───transitions
    │   │   │   ├───Typography
    │   │   │   ├───umd
    │   │   │   ├───utils
    │   │   │   ├───withMobileDialog
    │   │   │   ├───withWidth
    │   │   │   └───Zoom
    │   │   └───icons
    │   │       ├───node_modules
    │   │       │   └───recompose
    │   │       │       ├───dist
    │   │       │       └───utils
    │   │       └───utils
    │   ├───@types
    │   │   ├───google-maps
    │   │   ├───googlemaps
    │   │   ├───jss
    │   │   ├───markerclustererplus
    │   │   ├───prop-types
    │   │   ├───react
    │   │   └───react-transition-group
    │   ├───abab
    │   │   └───lib
    │   ├───accepts
    │   ├───acorn
    │   │   ├───bin
    │   │   └───dist
    │   ├───acorn-dynamic-import
    │   │   ├───lib
    │   │   ├───node_modules
    │   │   │   ├───.bin
    │   │   │   └───acorn
    │   │   │       ├───bin
    │   │   │       ├───dist
    │   │   │       └───src
    │   │   │           ├───bin
    │   │   │           ├───loose
    │   │   │           └───walk
    │   │   └───src
    │   ├───acorn-globals
    │   │   └───node_modules
    │   │       ├───.bin
    │   │       └───acorn
    │   │           ├───bin
    │   │           ├───dist
    │   │           └───src
    │   │               ├───bin
    │   │               ├───loose
    │   │               └───walk
    │   ├───acorn-jsx
    │   │   └───node_modules
    │   │       ├───.bin
    │   │       └───acorn
    │   │           ├───bin
    │   │           ├───dist
    │   │           ├───rollup
    │   │           └───src
    │   │               ├───bin
    │   │               ├───loose
    │   │               └───walk
    │   ├───address
    │   │   └───lib
    │   ├───ajv
    │   │   ├───dist
    │   │   ├───lib
    │   │   │   ├───compile
    │   │   │   ├───dot
    │   │   │   ├───dotjs
    │   │   │   └───refs
    │   │   └───scripts
    │   ├───ajv-keywords
    │   │   └───keywords
    │   │       ├───dot
    │   │       └───dotjs
    │   ├───align-text
    │   ├───alphanum-sort
    │   │   └───lib
    │   ├───ansi-align
    │   ├───ansi-escapes
    │   ├───ansi-html
    │   │   └───bin
    │   ├───ansi-regex
    │   ├───ansi-styles
    │   ├───anymatch
    │   ├───append-transform
    │   ├───argparse
    │   │   └───lib
    │   │       ├───action
    │   │       │   ├───append
    │   │       │   └───store
    │   │       ├───argument
    │   │       └───help
    │   ├───aria-query
    │   │   └───lib
    │   │       └───etc
    │   │           └───roles
    │   │               ├───abstract
    │   │               ├───dpub
    │   │               └───literal
    │   ├───arr-diff
    │   ├───arr-flatten
    │   ├───arr-union
    │   ├───array-equal
    │   ├───array-filter
    │   │   └───test
    │   ├───array-find-index
    │   ├───array-flatten
    │   ├───array-includes
    │   │   └───test
    │   ├───array-map
    │   │   ├───example
    │   │   └───test
    │   ├───array-reduce
    │   │   ├───example
    │   │   └───test
    │   ├───array-union
    │   ├───array-uniq
    │   ├───array-unique
    │   ├───arrify
    │   ├───asap
    │   ├───asn1
    │   │   └───lib
    │   │       └───ber
    │   ├───asn1.js
    │   │   └───lib
    │   │       └───asn1
    │   │           ├───base
    │   │           ├───constants
    │   │           ├───decoders
    │   │           └───encoders
    │   ├───assert
    │   │   └───node_modules
    │   │       ├───inherits
    │   │       └───util
    │   │           ├───support
    │   │           └───test
    │   │               ├───browser
    │   │               └───node
    │   ├───assert-plus
    │   ├───assign-symbols
    │   ├───ast-types-flow
    │   │   └───lib
    │   ├───async
    │   │   ├───dist
    │   │   └───internal
    │   ├───async-each
    │   ├───asynckit
    │   │   └───lib
    │   ├───atob
    │   │   └───bin
    │   ├───autoprefixer
    │   │   ├───data
    │   │   └───lib
    │   │       └───hacks
    │   ├───aws-sign2
    │   ├───aws4
    │   ├───axobject-query
    │   │   └───lib
    │   │       └───etc
    │   │           └───objects
    │   ├───babel-cli
    │   │   ├───bin
    │   │   ├───lib
    │   │   │   └───babel
    │   │   ├───node_modules
    │   │   │   ├───chokidar
    │   │   │   │   └───lib
    │   │   │   └───source-map
    │   │   │       ├───dist
    │   │   │       └───lib
    │   │   └───scripts
    │   ├───babel-code-frame
    │   │   ├───lib
    │   │   └───node_modules
    │   │       └───js-tokens
    │   ├───babel-core
    │   │   ├───lib
    │   │   │   ├───api
    │   │   │   ├───helpers
    │   │   │   ├───tools
    │   │   │   └───transformation
    │   │   │       ├───file
    │   │   │       │   └───options
    │   │   │       └───internal-plugins
    │   │   └───node_modules
    │   │       └───source-map
    │   │           ├───dist
    │   │           └───lib
    │   ├───babel-eslint
    │   │   └───babylon-to-espree
    │   ├───babel-generator
    │   │   ├───lib
    │   │   │   ├───generators
    │   │   │   └───node
    │   │   └───node_modules
    │   │       └───source-map
    │   │           ├───dist
    │   │           └───lib
    │   ├───babel-helper-builder-binary-assignment-operator-visitor
    │   │   └───lib
    │   ├───babel-helper-builder-react-jsx
    │   │   └───lib
    │   ├───babel-helper-call-delegate
    │   │   └───lib
    │   ├───babel-helper-define-map
    │   │   └───lib
    │   ├───babel-helper-explode-assignable-expression
    │   │   └───lib
    │   ├───babel-helper-function-name
    │   │   └───lib
    │   ├───babel-helper-get-function-arity
    │   │   └───lib
    │   ├───babel-helper-hoist-variables
    │   │   └───lib
    │   ├───babel-helper-optimise-call-expression
    │   │   └───lib
    │   ├───babel-helper-regex
    │   │   └───lib
    │   ├───babel-helper-remap-async-to-generator
    │   │   └───lib
    │   ├───babel-helper-replace-supers
    │   │   └───lib
    │   ├───babel-helpers
    │   │   └───lib
    │   ├───babel-jest
    │   │   └───build
    │   ├───babel-loader
    │   │   └───lib
    │   │       └───utils
    │   ├───babel-messages
    │   │   └───lib
    │   ├───babel-plugin-check-es2015-constants
    │   │   └───lib
    │   ├───babel-plugin-dynamic-import-node
    │   │   └───lib
    │   ├───babel-plugin-import-rename
    │   ├───babel-plugin-istanbul
    │   │   └───lib
    │   ├───babel-plugin-jest-hoist
    │   │   └───build
    │   ├───babel-plugin-module-resolver
    │   │   └───lib
    │   │       └───transformers
    │   ├───babel-plugin-syntax-async-functions
    │   │   └───lib
    │   ├───babel-plugin-syntax-class-properties
    │   │   └───lib
    │   ├───babel-plugin-syntax-dynamic-import
    │   │   └───lib
    │   ├───babel-plugin-syntax-exponentiation-operator
    │   │   └───lib
    │   ├───babel-plugin-syntax-flow
    │   │   └───lib
    │   ├───babel-plugin-syntax-jsx
    │   │   └───lib
    │   ├───babel-plugin-syntax-object-rest-spread
    │   │   └───lib
    │   ├───babel-plugin-syntax-trailing-function-commas
    │   │   └───lib
    │   ├───babel-plugin-transform-async-to-generator
    │   │   └───lib
    │   ├───babel-plugin-transform-class-properties
    │   │   └───lib
    │   ├───babel-plugin-transform-es2015-arrow-functions
    │   │   └───lib
    │   ├───babel-plugin-transform-es2015-block-scoped-functions
    │   │   └───lib
    │   ├───babel-plugin-transform-es2015-block-scoping
    │   │   └───lib
    │   ├───babel-plugin-transform-es2015-classes
    │   │   └───lib
    │   │       └───lib
    │   ├───babel-plugin-transform-es2015-computed-properties
    │   │   └───lib
    │   ├───babel-plugin-transform-es2015-destructuring
    │   │   └───lib
    │   ├───babel-plugin-transform-es2015-duplicate-keys
    │   │   └───lib
    │   ├───babel-plugin-transform-es2015-for-of
    │   │   └───lib
    │   ├───babel-plugin-transform-es2015-function-name
    │   │   └───lib
    │   ├───babel-plugin-transform-es2015-literals
    │   │   └───lib
    │   ├───babel-plugin-transform-es2015-modules-amd
    │   │   └───lib
    │   ├───babel-plugin-transform-es2015-modules-commonjs
    │   │   └───lib
    │   ├───babel-plugin-transform-es2015-modules-systemjs
    │   │   └───lib
    │   ├───babel-plugin-transform-es2015-modules-umd
    │   │   └───lib
    │   ├───babel-plugin-transform-es2015-object-super
    │   │   └───lib
    │   ├───babel-plugin-transform-es2015-parameters
    │   │   └───lib
    │   ├───babel-plugin-transform-es2015-shorthand-properties
    │   │   └───lib
    │   ├───babel-plugin-transform-es2015-spread
    │   │   └───lib
    │   ├───babel-plugin-transform-es2015-sticky-regex
    │   │   └───lib
    │   ├───babel-plugin-transform-es2015-template-literals
    │   │   └───lib
    │   ├───babel-plugin-transform-es2015-typeof-symbol
    │   │   └───lib
    │   ├───babel-plugin-transform-es2015-unicode-regex
    │   │   └───lib
    │   ├───babel-plugin-transform-exponentiation-operator
    │   │   └───lib
    │   ├───babel-plugin-transform-flow-strip-types
    │   │   └───lib
    │   ├───babel-plugin-transform-object-rest-spread
    │   │   └───lib
    │   ├───babel-plugin-transform-react-constant-elements
    │   │   └───lib
    │   ├───babel-plugin-transform-react-display-name
    │   │   └───lib
    │   ├───babel-plugin-transform-react-jsx
    │   │   └───lib
    │   ├───babel-plugin-transform-react-jsx-self
    │   │   └───lib
    │   ├───babel-plugin-transform-react-jsx-source
    │   │   └───lib
    │   ├───babel-plugin-transform-regenerator
    │   │   └───lib
    │   ├───babel-plugin-transform-runtime
    │   │   └───lib
    │   ├───babel-plugin-transform-strict-mode
    │   │   └───lib
    │   ├───babel-polyfill
    │   │   ├───dist
    │   │   ├───lib
    │   │   ├───node_modules
    │   │   │   ├───core-js
    │   │   │   │   ├───build
    │   │   │   │   ├───client
    │   │   │   │   ├───core
    │   │   │   │   ├───es5
    │   │   │   │   ├───es6
    │   │   │   │   ├───es7
    │   │   │   │   ├───fn
    │   │   │   │   │   ├───array
    │   │   │   │   │   │   └───virtual
    │   │   │   │   │   ├───date
    │   │   │   │   │   ├───dom-collections
    │   │   │   │   │   ├───error
    │   │   │   │   │   ├───function
    │   │   │   │   │   │   └───virtual
    │   │   │   │   │   ├───json
    │   │   │   │   │   ├───map
    │   │   │   │   │   ├───math
    │   │   │   │   │   ├───number
    │   │   │   │   │   │   └───virtual
    │   │   │   │   │   ├───object
    │   │   │   │   │   ├───promise
    │   │   │   │   │   ├───reflect
    │   │   │   │   │   ├───regexp
    │   │   │   │   │   ├───set
    │   │   │   │   │   ├───string
    │   │   │   │   │   │   └───virtual
    │   │   │   │   │   ├───symbol
    │   │   │   │   │   ├───system
    │   │   │   │   │   ├───typed
    │   │   │   │   │   ├───weak-map
    │   │   │   │   │   └───weak-set
    │   │   │   │   ├───library
    │   │   │   │   │   ├───core
    │   │   │   │   │   ├───es5
    │   │   │   │   │   ├───es6
    │   │   │   │   │   ├───es7
    │   │   │   │   │   ├───fn
    │   │   │   │   │   │   ├───array
    │   │   │   │   │   │   │   └───virtual
    │   │   │   │   │   │   ├───date
    │   │   │   │   │   │   ├───dom-collections
    │   │   │   │   │   │   ├───error
    │   │   │   │   │   │   ├───function
    │   │   │   │   │   │   │   └───virtual
    │   │   │   │   │   │   ├───json
    │   │   │   │   │   │   ├───map
    │   │   │   │   │   │   ├───math
    │   │   │   │   │   │   ├───number
    │   │   │   │   │   │   │   └───virtual
    │   │   │   │   │   │   ├───object
    │   │   │   │   │   │   ├───promise
    │   │   │   │   │   │   ├───reflect
    │   │   │   │   │   │   ├───regexp
    │   │   │   │   │   │   ├───set
    │   │   │   │   │   │   ├───string
    │   │   │   │   │   │   │   └───virtual
    │   │   │   │   │   │   ├───symbol
    │   │   │   │   │   │   ├───system
    │   │   │   │   │   │   ├───typed
    │   │   │   │   │   │   ├───weak-map
    │   │   │   │   │   │   └───weak-set
    │   │   │   │   │   ├───modules
    │   │   │   │   │   ├───stage
    │   │   │   │   │   └───web
    │   │   │   │   ├───modules
    │   │   │   │   │   └───library
    │   │   │   │   ├───stage
    │   │   │   │   └───web
    │   │   │   └───regenerator-runtime
    │   │   └───scripts
    │   ├───babel-preset-env
    │   │   ├───.github
    │   │   ├───.idea
    │   │   │   └───inspectionProfiles
    │   │   ├───data
    │   │   └───lib
    │   ├───babel-preset-es2015
    │   │   └───lib
    │   ├───babel-preset-flow
    │   │   └───lib
    │   ├───babel-preset-jest
    │   ├───babel-preset-react
    │   │   └───lib
    │   ├───babel-preset-react-app
    │   ├───babel-register
    │   │   ├───lib
    │   │   └───node_modules
    │   │       └───core-js
    │   │           ├───build
    │   │           ├───client
    │   │           ├───core
    │   │           ├───es5
    │   │           ├───es6
    │   │           ├───es7
    │   │           ├───fn
    │   │           │   ├───array
    │   │           │   │   └───virtual
    │   │           │   ├───date
    │   │           │   ├───dom-collections
    │   │           │   ├───error
    │   │           │   ├───function
    │   │           │   │   └───virtual
    │   │           │   ├───json
    │   │           │   ├───map
    │   │           │   ├───math
    │   │           │   ├───number
    │   │           │   │   └───virtual
    │   │           │   ├───object
    │   │           │   ├───promise
    │   │           │   ├───reflect
    │   │           │   ├───regexp
    │   │           │   ├───set
    │   │           │   ├───string
    │   │           │   │   └───virtual
    │   │           │   ├───symbol
    │   │           │   ├───system
    │   │           │   ├───typed
    │   │           │   ├───weak-map
    │   │           │   └───weak-set
    │   │           ├───library
    │   │           │   ├───core
    │   │           │   ├───es5
    │   │           │   ├───es6
    │   │           │   ├───es7
    │   │           │   ├───fn
    │   │           │   │   ├───array
    │   │           │   │   │   └───virtual
    │   │           │   │   ├───date
    │   │           │   │   ├───dom-collections
    │   │           │   │   ├───error
    │   │           │   │   ├───function
    │   │           │   │   │   └───virtual
    │   │           │   │   ├───json
    │   │           │   │   ├───map
    │   │           │   │   ├───math
    │   │           │   │   ├───number
    │   │           │   │   │   └───virtual
    │   │           │   │   ├───object
    │   │           │   │   ├───promise
    │   │           │   │   ├───reflect
    │   │           │   │   ├───regexp
    │   │           │   │   ├───set
    │   │           │   │   ├───string
    │   │           │   │   │   └───virtual
    │   │           │   │   ├───symbol
    │   │           │   │   ├───system
    │   │           │   │   ├───typed
    │   │           │   │   ├───weak-map
    │   │           │   │   └───weak-set
    │   │           │   ├───modules
    │   │           │   ├───stage
    │   │           │   └───web
    │   │           ├───modules
    │   │           │   └───library
    │   │           ├───stage
    │   │           └───web
    │   ├───babel-runtime
    │   │   ├───core-js
    │   │   │   ├───array
    │   │   │   ├───error
    │   │   │   ├───json
    │   │   │   ├───math
    │   │   │   ├───number
    │   │   │   ├───object
    │   │   │   ├───reflect
    │   │   │   ├───regexp
    │   │   │   ├───string
    │   │   │   ├───symbol
    │   │   │   └───system
    │   │   ├───helpers
    │   │   ├───node_modules
    │   │   │   ├───core-js
    │   │   │   │   ├───build
    │   │   │   │   ├───client
    │   │   │   │   ├───core
    │   │   │   │   ├───es5
    │   │   │   │   ├───es6
    │   │   │   │   ├───es7
    │   │   │   │   ├───fn
    │   │   │   │   │   ├───array
    │   │   │   │   │   │   └───virtual
    │   │   │   │   │   ├───date
    │   │   │   │   │   ├───dom-collections
    │   │   │   │   │   ├───error
    │   │   │   │   │   ├───function
    │   │   │   │   │   │   └───virtual
    │   │   │   │   │   ├───json
    │   │   │   │   │   ├───map
    │   │   │   │   │   ├───math
    │   │   │   │   │   ├───number
    │   │   │   │   │   │   └───virtual
    │   │   │   │   │   ├───object
    │   │   │   │   │   ├───promise
    │   │   │   │   │   ├───reflect
    │   │   │   │   │   ├───regexp
    │   │   │   │   │   ├───set
    │   │   │   │   │   ├───string
    │   │   │   │   │   │   └───virtual
    │   │   │   │   │   ├───symbol
    │   │   │   │   │   ├───system
    │   │   │   │   │   ├───typed
    │   │   │   │   │   ├───weak-map
    │   │   │   │   │   └───weak-set
    │   │   │   │   ├───library
    │   │   │   │   │   ├───core
    │   │   │   │   │   ├───es5
    │   │   │   │   │   ├───es6
    │   │   │   │   │   ├───es7
    │   │   │   │   │   ├───fn
    │   │   │   │   │   │   ├───array
    │   │   │   │   │   │   │   └───virtual
    │   │   │   │   │   │   ├───date
    │   │   │   │   │   │   ├───dom-collections
    │   │   │   │   │   │   ├───error
    │   │   │   │   │   │   ├───function
    │   │   │   │   │   │   │   └───virtual
    │   │   │   │   │   │   ├───json
    │   │   │   │   │   │   ├───map
    │   │   │   │   │   │   ├───math
    │   │   │   │   │   │   ├───number
    │   │   │   │   │   │   │   └───virtual
    │   │   │   │   │   │   ├───object
    │   │   │   │   │   │   ├───promise
    │   │   │   │   │   │   ├───reflect
    │   │   │   │   │   │   ├───regexp
    │   │   │   │   │   │   ├───set
    │   │   │   │   │   │   ├───string
    │   │   │   │   │   │   │   └───virtual
    │   │   │   │   │   │   ├───symbol
    │   │   │   │   │   │   ├───system
    │   │   │   │   │   │   ├───typed
    │   │   │   │   │   │   ├───weak-map
    │   │   │   │   │   │   └───weak-set
    │   │   │   │   │   ├───modules
    │   │   │   │   │   ├───stage
    │   │   │   │   │   └───web
    │   │   │   │   ├───modules
    │   │   │   │   │   └───library
    │   │   │   │   ├───stage
    │   │   │   │   └───web
    │   │   │   └───regenerator-runtime
    │   │   └───regenerator
    │   ├───babel-template
    │   │   └───lib
    │   ├───babel-traverse
    │   │   └───lib
    │   │       ├───path
    │   │       │   ├───inference
    │   │       │   └───lib
    │   │       └───scope
    │   │           └───lib
    │   ├───babel-types
    │   │   └───lib
    │   │       └───definitions
    │   ├───babylon
    │   │   ├───bin
    │   │   └───lib
    │   ├───balanced-match
    │   ├───base
    │   │   └───node_modules
    │   │       ├───define-property
    │   │       ├───is-accessor-descriptor
    │   │       ├───is-data-descriptor
    │   │       ├───is-descriptor
    │   │       └───kind-of
    │   ├───base64-js
    │   │   └───test
    │   ├───batch
    │   ├───bcrypt-pbkdf
    │   ├───big.js
    │   ├───binary-extensions
    │   ├───bluebird
    │   │   └───js
    │   │       ├───browser
    │   │       └───release
    │   ├───bn.js
    │   │   ├───lib
    │   │   └───util
    │   ├───body-parser
    │   │   ├───lib
    │   │   │   └───types
    │   │   └───node_modules
    │   │       ├───iconv-lite
    │   │       │   ├───encodings
    │   │       │   │   └───tables
    │   │       │   └───lib
    │   │       └───qs
    │   │           ├───dist
    │   │           ├───lib
    │   │           └───test
    │   ├───bonjour
    │   │   ├───lib
    │   │   └───test
    │   ├───boolbase
    │   ├───boxen
    │   │   └───node_modules
    │   │       ├───ansi-styles
    │   │       ├───camelcase
    │   │       ├───chalk
    │   │       │   └───types
    │   │       └───supports-color
    │   ├───brace-expansion
    │   ├───braces
    │   ├───brcast
    │   │   └───dist
    │   ├───brorand
    │   │   └───test
    │   ├───browser-resolve
    │   │   └───node_modules
    │   │       └───resolve
    │   │           ├───example
    │   │           ├───lib
    │   │           └───test
    │   │               ├───dotdot
    │   │               │   └───abc
    │   │               ├───module_dir
    │   │               │   ├───xmodules
    │   │               │   │   └───aaa
    │   │               │   ├───ymodules
    │   │               │   │   └───aaa
    │   │               │   └───zmodules
    │   │               │       └───bbb
    │   │               ├───node_path
    │   │               │   ├───x
    │   │               │   │   ├───aaa
    │   │               │   │   └───ccc
    │   │               │   └───y
    │   │               │       ├───bbb
    │   │               │       └───ccc
    │   │               ├───pathfilter
    │   │               │   └───deep_ref
    │   │               │       └───node_modules
    │   │               │           └───deep
    │   │               │               └───deeper
    │   │               ├───precedence
    │   │               │   ├───aaa
    │   │               │   └───bbb
    │   │               ├───resolver
    │   │               │   ├───bar
    │   │               │   │   └───node_modules
    │   │               │   │       └───foo
    │   │               │   ├───baz
    │   │               │   ├───biz
    │   │               │   │   └───node_modules
    │   │               │   │       ├───garply
    │   │               │   │       │   └───lib
    │   │               │   │       ├───grux
    │   │               │   │       └───tiv
    │   │               │   ├───incorrect_main
    │   │               │   ├───other_path
    │   │               │   │   └───lib
    │   │               │   ├───punycode
    │   │               │   │   └───node_modules
    │   │               │   │       └───punycode
    │   │               │   ├───quux
    │   │               │   │   └───foo
    │   │               │   └───without_basedir
    │   │               │       └───node_modules
    │   │               └───subdirs
    │   │                   └───node_modules
    │   │                       └───a
    │   │                           └───b
    │   │                               └───c
    │   ├───browserify-aes
    │   │   └───modes
    │   ├───browserify-cipher
    │   ├───browserify-des
    │   ├───browserify-rsa
    │   ├───browserify-sign
    │   │   └───browser
    │   ├───browserify-zlib
    │   │   ├───lib
    │   │   └───src
    │   ├───browserslist
    │   ├───bser
    │   ├───buffer
    │   │   ├───bin
    │   │   └───test
    │   │       └───node
    │   ├───buffer-from
    │   ├───buffer-indexof
    │   │   └───test
    │   ├───buffer-xor
    │   │   └───test
    │   ├───builtin-modules
    │   ├───builtin-status-codes
    │   ├───bytes
    │   ├───cache-base
    │   ├───caller-path
    │   ├───callsites
    │   ├───camel-case
    │   ├───camelcase
    │   ├───camelcase-keys
    │   │   └───node_modules
    │   │       └───camelcase
    │   ├───can-use-dom
    │   ├───caniuse-api
    │   │   ├───dist
    │   │   └───node_modules
    │   │       ├───.bin
    │   │       └───browserslist
    │   ├───caniuse-db
    │   │   ├───features-json
    │   │   ├───fulldata-json
    │   │   └───region-usage-json
    │   ├───caniuse-lite
    │   │   ├───data
    │   │   │   ├───features
    │   │   │   └───regions
    │   │   └───dist
    │   │       ├───lib
    │   │       └───unpacker
    │   ├───capture-stack-trace
    │   ├───case-sensitive-paths-webpack-plugin
    │   ├───caseless
    │   ├───center-align
    │   ├───chalk
    │   ├───change-emitter
    │   │   └───lib
    │   │       └───__tests__
    │   ├───chardet
    │   │   └───encoding
    │   ├───chartist
    │   │   └───dist
    │   │       └───scss
    │   │           └───settings
    │   ├───chokidar
    │   │   ├───lib
    │   │   └───node_modules
    │   │       ├───anymatch
    │   │       ├───arr-diff
    │   │       ├───array-unique
    │   │       ├───braces
    │   │       │   ├───lib
    │   │       │   └───node_modules
    │   │       │       └───extend-shallow
    │   │       ├───expand-brackets
    │   │       │   ├───lib
    │   │       │   └───node_modules
    │   │       │       ├───define-property
    │   │       │       ├───extend-shallow
    │   │       │       ├───is-accessor-descriptor
    │   │       │       │   └───node_modules
    │   │       │       │       └───kind-of
    │   │       │       ├───is-data-descriptor
    │   │       │       │   └───node_modules
    │   │       │       │       └───kind-of
    │   │       │       ├───is-descriptor
    │   │       │       └───kind-of
    │   │       ├───extglob
    │   │       │   ├───lib
    │   │       │   └───node_modules
    │   │       │       ├───define-property
    │   │       │       └───extend-shallow
    │   │       ├───fill-range
    │   │       │   └───node_modules
    │   │       │       └───extend-shallow
    │   │       ├───glob-parent
    │   │       │   └───node_modules
    │   │       │       └───is-glob
    │   │       ├───is-accessor-descriptor
    │   │       ├───is-data-descriptor
    │   │       ├───is-descriptor
    │   │       ├───is-extglob
    │   │       ├───is-glob
    │   │       ├───is-number
    │   │       │   └───node_modules
    │   │       │       └───kind-of
    │   │       ├───kind-of
    │   │       └───micromatch
    │   │           └───lib
    │   ├───ci-info
    │   ├───cipher-base
    │   ├───circular-json
    │   │   ├───build
    │   │   └───template
    │   ├───clap
    │   ├───class-utils
    │   │   └───node_modules
    │   │       └───define-property
    │   ├───classnames
    │   ├───clean-css
    │   │   └───lib
    │   │       ├───optimizer
    │   │       │   ├───level-0
    │   │       │   ├───level-1
    │   │       │   └───level-2
    │   │       │       └───properties
    │   │       ├───options
    │   │       ├───reader
    │   │       ├───tokenizer
    │   │       ├───utils
    │   │       └───writer
    │   ├───cli-boxes
    │   ├───cli-cursor
    │   ├───cli-width
    │   ├───cliui
    │   │   └───node_modules
    │   │       ├───is-fullwidth-code-point
    │   │       └───string-width
    │   ├───clone
    │   ├───co
    │   ├───coa
    │   │   ├───.nyc_output
    │   │   ├───coverage
    │   │   │   └───coa
    │   │   │       └───lib
    │   │   ├───lib
    │   │   ├───src
    │   │   ├───test
    │   │   └───tests
    │   ├───code-point-at
    │   ├───collection-visit
    │   ├───color
    │   ├───color-convert
    │   ├───color-name
    │   ├───color-string
    │   │   └───test
    │   ├───colormin
    │   │   └───dist
    │   │       └───lib
    │   ├───colors
    │   │   ├───examples
    │   │   ├───lib
    │   │   │   ├───custom
    │   │   │   ├───maps
    │   │   │   └───system
    │   │   └───themes
    │   ├───combined-stream
    │   │   └───lib
    │   ├───commander
    │   │   └───typings
    │   ├───commondir
    │   │   ├───example
    │   │   └───test
    │   ├───component-emitter
    │   ├───compressible
    │   ├───compression
    │   ├───concat-map
    │   │   ├───example
    │   │   └───test
    │   ├───concat-stream
    │   ├───configstore
    │   ├───connect-history-api-fallback
    │   │   └───lib
    │   ├───console-browserify
    │   │   └───test
    │   │       └───static
    │   ├───constants-browserify
    │   ├───contains-path
    │   ├───content-disposition
    │   ├───content-type
    │   ├───content-type-parser
    │   │   └───lib
    │   ├───convert-source-map
    │   ├───cookie
    │   ├───cookie-signature
    │   ├───copy-descriptor
    │   ├───core-js
    │   │   ├───build
    │   │   ├───client
    │   │   ├───core
    │   │   ├───es5
    │   │   ├───es6
    │   │   ├───es7
    │   │   ├───fn
    │   │   │   ├───array
    │   │   │   ├───function
    │   │   │   ├───html-collection
    │   │   │   ├───json
    │   │   │   ├───math
    │   │   │   ├───node-list
    │   │   │   ├───number
    │   │   │   ├───object
    │   │   │   ├───reflect
    │   │   │   ├───regexp
    │   │   │   ├───string
    │   │   │   └───symbol
    │   │   ├───js
    │   │   ├───library
    │   │   │   ├───core
    │   │   │   ├───es5
    │   │   │   ├───es6
    │   │   │   ├───es7
    │   │   │   ├───fn
    │   │   │   │   ├───array
    │   │   │   │   ├───function
    │   │   │   │   ├───html-collection
    │   │   │   │   ├───json
    │   │   │   │   ├───math
    │   │   │   │   ├───node-list
    │   │   │   │   ├───number
    │   │   │   │   ├───object
    │   │   │   │   ├───reflect
    │   │   │   │   ├───regexp
    │   │   │   │   ├───string
    │   │   │   │   └───symbol
    │   │   │   ├───js
    │   │   │   ├───modules
    │   │   │   └───web
    │   │   ├───modules
    │   │   │   └───library
    │   │   └───web
    │   ├───core-util-is
    │   │   └───lib
    │   ├───cosmiconfig
    │   │   ├───lib
    │   │   └───node_modules
    │   │       ├───minimist
    │   │       │   ├───example
    │   │       │   └───test
    │   │       └───parse-json
    │   │           └───vendor
    │   ├───create-ecdh
    │   ├───create-error-class
    │   ├───create-hash
    │   ├───create-hmac
    │   ├───cross-spawn
    │   │   └───lib
    │   │       └───util
    │   ├───crypto-browserify
    │   │   ├───example
    │   │   └───test
    │   │       └───node
    │   ├───crypto-random-string
    │   ├───css-color-names
    │   ├───css-loader
    │   │   ├───lib
    │   │   └───node_modules
    │   │       ├───has-flag
    │   │       ├───postcss
    │   │       │   ├───docs
    │   │       │   │   └───guidelines
    │   │       │   └───lib
    │   │       ├───source-map
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       └───supports-color
    │   ├───css-select
    │   │   └───lib
    │   ├───css-selector-tokenizer
    │   │   ├───lib
    │   │   └───node_modules
    │   │       └───regexpu-core
    │   │           └───data
    │   ├───css-vendor
    │   │   ├───dist
    │   │   ├───lib
    │   │   └───tests
    │   ├───css-what
    │   ├───cssesc
    │   │   ├───bin
    │   │   └───man
    │   ├───cssnano
    │   │   ├───dist
    │   │   │   └───lib
    │   │   └───node_modules
    │   │       ├───.bin
    │   │       ├───autoprefixer
    │   │       │   ├───data
    │   │       │   └───lib
    │   │       │       └───hacks
    │   │       ├───browserslist
    │   │       ├───has-flag
    │   │       ├───postcss
    │   │       │   ├───docs
    │   │       │   │   └───guidelines
    │   │       │   └───lib
    │   │       ├───source-map
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       └───supports-color
    │   ├───csso
    │   │   ├───bin
    │   │   ├───dist
    │   │   ├───lib
    │   │   │   ├───compressor
    │   │   │   │   ├───clean
    │   │   │   │   ├───compress
    │   │   │   │   │   ├───atrule
    │   │   │   │   │   └───property
    │   │   │   │   └───restructure
    │   │   │   │       └───prepare
    │   │   │   ├───parser
    │   │   │   └───utils
    │   │   └───node_modules
    │   │       └───source-map
    │   │           ├───dist
    │   │           └───lib
    │   ├───cssom
    │   │   └───lib
    │   ├───cssstyle
    │   │   ├───lib
    │   │   │   └───properties
    │   │   ├───scripts
    │   │   └───tests
    │   ├───csstype
    │   ├───currently-unhandled
    │   ├───d
    │   │   └───test
    │   ├───damerau-levenshtein
    │   │   └───test
    │   ├───dashdash
    │   │   ├───etc
    │   │   └───lib
    │   ├───date-now
    │   │   └───test
    │   │       └───static
    │   ├───debounce
    │   ├───debug
    │   │   └───src
    │   ├───decamelize
    │   ├───decode-uri-component
    │   ├───deep-equal
    │   │   ├───example
    │   │   ├───lib
    │   │   └───test
    │   ├───deep-extend
    │   │   └───lib
    │   ├───deep-is
    │   │   ├───example
    │   │   └───test
    │   ├───deepmerge
    │   │   └───dist
    │   ├───default-require-extensions
    │   │   └───node_modules
    │   │       └───strip-bom
    │   ├───define-properties
    │   │   └───test
    │   ├───define-property
    │   │   └───node_modules
    │   │       ├───is-accessor-descriptor
    │   │       ├───is-data-descriptor
    │   │       ├───is-descriptor
    │   │       └───kind-of
    │   ├───defined
    │   │   ├───example
    │   │   └───test
    │   ├───del
    │   ├───delayed-stream
    │   │   └───lib
    │   ├───depd
    │   │   └───lib
    │   │       ├───browser
    │   │       └───compat
    │   ├───des.js
    │   │   ├───lib
    │   │   │   └───des
    │   │   └───test
    │   ├───destroy
    │   ├───detect-indent
    │   ├───detect-node
    │   ├───detect-port-alt
    │   │   ├───.vscode
    │   │   ├───bin
    │   │   └───lib
    │   ├───diff
    │   │   ├───dist
    │   │   └───lib
    │   │       ├───convert
    │   │       ├───diff
    │   │       ├───patch
    │   │       └───util
    │   ├───diffie-hellman
    │   │   └───lib
    │   ├───dns-equal
    │   ├───dns-packet
    │   ├───dns-txt
    │   ├───doctrine
    │   │   └───lib
    │   ├───dom-converter
    │   │   └───lib
    │   ├───dom-helpers
    │   │   ├───class
    │   │   ├───events
    │   │   ├───query
    │   │   ├───style
    │   │   ├───transition
    │   │   └───util
    │   ├───dom-serializer
    │   │   └───node_modules
    │   │       └───domelementtype
    │   ├───dom-urls
    │   ├───domain-browser
    │   │   └───source
    │   ├───domelementtype
    │   ├───domhandler
    │   │   └───test
    │   │       └───cases
    │   ├───domutils
    │   │   ├───lib
    │   │   └───test
    │   │       └───tests
    │   ├───dot-prop
    │   ├───dotenv
    │   │   └───lib
    │   ├───dotenv-expand
    │   │   └───lib
    │   ├───duplexer
    │   │   └───test
    │   ├───duplexer3
    │   ├───ecc-jsbn
    │   │   └───lib
    │   ├───ee-first
    │   ├───electron-to-chromium
    │   ├───elliptic
    │   │   └───lib
    │   │       └───elliptic
    │   │           ├───curve
    │   │           ├───ec
    │   │           ├───eddsa
    │   │           └───precomputed
    │   ├───emoji-regex
    │   │   └───es2015
    │   ├───emojis-list
    │   ├───encodeurl
    │   ├───encoding
    │   │   ├───lib
    │   │   └───test
    │   ├───enhanced-resolve
    │   │   └───lib
    │   ├───entities
    │   │   ├───lib
    │   │   ├───maps
    │   │   └───test
    │   ├───errno
    │   ├───error-ex
    │   ├───es-abstract
    │   │   ├───helpers
    │   │   ├───operations
    │   │   └───test
    │   │       └───helpers
    │   ├───es-to-primitive
    │   │   ├───helpers
    │   │   └───test
    │   ├───es5-ext
    │   │   ├───array
    │   │   │   ├───#
    │   │   │   │   ├───@@iterator
    │   │   │   │   ├───concat
    │   │   │   │   ├───copy-within
    │   │   │   │   ├───entries
    │   │   │   │   ├───fill
    │   │   │   │   ├───filter
    │   │   │   │   ├───find
    │   │   │   │   ├───find-index
    │   │   │   │   ├───keys
    │   │   │   │   ├───map
    │   │   │   │   ├───slice
    │   │   │   │   ├───splice
    │   │   │   │   └───values
    │   │   │   ├───from
    │   │   │   └───of
    │   │   ├───boolean
    │   │   ├───date
    │   │   │   └───#
    │   │   ├───error
    │   │   │   └───#
    │   │   ├───function
    │   │   │   └───#
    │   │   ├───iterable
    │   │   ├───json
    │   │   ├───math
    │   │   │   ├───acosh
    │   │   │   ├───asinh
    │   │   │   ├───atanh
    │   │   │   ├───cbrt
    │   │   │   ├───clz32
    │   │   │   ├───cosh
    │   │   │   ├───expm1
    │   │   │   ├───fround
    │   │   │   ├───hypot
    │   │   │   ├───imul
    │   │   │   ├───log10
    │   │   │   ├───log1p
    │   │   │   ├───log2
    │   │   │   ├───sign
    │   │   │   ├───sinh
    │   │   │   ├───tanh
    │   │   │   └───trunc
    │   │   ├───number
    │   │   │   ├───#
    │   │   │   ├───epsilon
    │   │   │   ├───is-finite
    │   │   │   ├───is-integer
    │   │   │   ├───is-nan
    │   │   │   ├───is-safe-integer
    │   │   │   ├───max-safe-integer
    │   │   │   └───min-safe-integer
    │   │   ├───object
    │   │   │   ├───assign
    │   │   │   ├───entries
    │   │   │   ├───keys
    │   │   │   └───set-prototype-of
    │   │   ├───promise
    │   │   │   └───#
    │   │   ├───reg-exp
    │   │   │   └───#
    │   │   │       ├───match
    │   │   │       ├───replace
    │   │   │       ├───search
    │   │   │       ├───split
    │   │   │       ├───sticky
    │   │   │       └───unicode
    │   │   ├───string
    │   │   │   ├───#
    │   │   │   │   ├───@@iterator
    │   │   │   │   ├───code-point-at
    │   │   │   │   ├───contains
    │   │   │   │   ├───ends-with
    │   │   │   │   ├───normalize
    │   │   │   │   ├───repeat
    │   │   │   │   └───starts-with
    │   │   │   ├───from-code-point
    │   │   │   └───raw
    │   │   └───test
    │   │       ├───array
    │   │       │   ├───#
    │   │       │   │   ├───@@iterator
    │   │       │   │   ├───concat
    │   │       │   │   ├───copy-within
    │   │       │   │   ├───entries
    │   │       │   │   ├───fill
    │   │       │   │   ├───filter
    │   │       │   │   ├───find
    │   │       │   │   ├───find-index
    │   │       │   │   ├───keys
    │   │       │   │   ├───map
    │   │       │   │   ├───slice
    │   │       │   │   ├───splice
    │   │       │   │   └───values
    │   │       │   ├───from
    │   │       │   └───of
    │   │       ├───boolean
    │   │       ├───date
    │   │       │   └───#
    │   │       ├───error
    │   │       │   └───#
    │   │       ├───function
    │   │       │   └───#
    │   │       ├───iterable
    │   │       ├───json
    │   │       ├───math
    │   │       │   ├───acosh
    │   │       │   ├───asinh
    │   │       │   ├───atanh
    │   │       │   ├───cbrt
    │   │       │   ├───clz32
    │   │       │   ├───cosh
    │   │       │   ├───expm1
    │   │       │   ├───fround
    │   │       │   ├───hypot
    │   │       │   ├───imul
    │   │       │   ├───log10
    │   │       │   ├───log1p
    │   │       │   ├───log2
    │   │       │   ├───sign
    │   │       │   ├───sinh
    │   │       │   ├───tanh
    │   │       │   └───trunc
    │   │       ├───number
    │   │       │   ├───#
    │   │       │   ├───epsilon
    │   │       │   ├───is-finite
    │   │       │   ├───is-integer
    │   │       │   ├───is-nan
    │   │       │   ├───is-safe-integer
    │   │       │   ├───max-safe-integer
    │   │       │   └───min-safe-integer
    │   │       ├───object
    │   │       │   ├───assign
    │   │       │   ├───entries
    │   │       │   ├───keys
    │   │       │   └───set-prototype-of
    │   │       ├───promise
    │   │       │   └───#
    │   │       ├───reg-exp
    │   │       │   └───#
    │   │       │       ├───match
    │   │       │       ├───replace
    │   │       │       ├───search
    │   │       │       ├───split
    │   │       │       ├───sticky
    │   │       │       └───unicode
    │   │       └───string
    │   │           ├───#
    │   │           │   ├───@@iterator
    │   │           │   ├───code-point-at
    │   │           │   ├───contains
    │   │           │   ├───ends-with
    │   │           │   ├───normalize
    │   │           │   ├───repeat
    │   │           │   └───starts-with
    │   │           ├───from-code-point
    │   │           └───raw
    │   ├───es6-iterator
    │   │   ├───#
    │   │   └───test
    │   │       └───#
    │   ├───es6-map
    │   │   ├───lib
    │   │   ├───primitive
    │   │   └───test
    │   │       ├───lib
    │   │       └───primitive
    │   ├───es6-promise
    │   │   ├───dist
    │   │   └───lib
    │   │       └───es6-promise
    │   │           └───promise
    │   ├───es6-set
    │   │   ├───ext
    │   │   ├───lib
    │   │   ├───primitive
    │   │   └───test
    │   │       ├───ext
    │   │       ├───lib
    │   │       └───primitive
    │   ├───es6-symbol
    │   │   └───test
    │   ├───es6-weak-map
    │   │   └───test
    │   ├───escape-html
    │   ├───escape-string-regexp
    │   ├───escodegen
    │   │   ├───bin
    │   │   └───node_modules
    │   │       ├───.bin
    │   │       └───esprima
    │   │           ├───bin
    │   │           └───dist
    │   ├───escope
    │   │   ├───lib
    │   │   ├───powered-test
    │   │   ├───src
    │   │   └───third_party
    │   ├───eslint
    │   │   ├───bin
    │   │   ├───conf
    │   │   ├───lib
    │   │   │   ├───code-path-analysis
    │   │   │   ├───config
    │   │   │   ├───formatters
    │   │   │   ├───rules
    │   │   │   ├───testers
    │   │   │   ├───token-store
    │   │   │   └───util
    │   │   │       └───patterns
    │   │   ├───messages
    │   │   └───node_modules
    │   │       ├───ansi-regex
    │   │       ├───ansi-styles
    │   │       ├───chalk
    │   │       │   └───types
    │   │       ├───debug
    │   │       │   ├───dist
    │   │       │   └───src
    │   │       ├───globals
    │   │       ├───ms
    │   │       ├───strip-ansi
    │   │       └───supports-color
    │   ├───eslint-config-prettier
    │   │   └───bin
    │   ├───eslint-config-react-app
    │   ├───eslint-import-resolver-node
    │   ├───eslint-loader
    │   ├───eslint-module-utils
    │   │   └───node_modules
    │   │       ├───find-up
    │   │       ├───path-exists
    │   │       └───pkg-dir
    │   ├───eslint-plugin-flowtype
    │   │   ├───bin
    │   │   └───dist
    │   │       ├───configs
    │   │       ├───rules
    │   │       │   └───typeColonSpacing
    │   │       └───utilities
    │   ├───eslint-plugin-import
    │   │   ├───config
    │   │   ├───lib
    │   │   │   ├───core
    │   │   │   └───rules
    │   │   ├───memo-parser
    │   │   └───node_modules
    │   │       ├───doctrine
    │   │       │   └───lib
    │   │       ├───load-json-file
    │   │       ├───parse-json
    │   │       │   └───vendor
    │   │       ├───path-type
    │   │       ├───read-pkg
    │   │       └───read-pkg-up
    │   ├───eslint-plugin-jsx-a11y
    │   │   ├───docs
    │   │   │   └───rules
    │   │   ├───flow
    │   │   ├───lib
    │   │   │   ├───rules
    │   │   │   └───util
    │   │   │       ├───attributes
    │   │   │       └───implicitRoles
    │   │   ├───node_modules
    │   │   │   └───jsx-ast-utils
    │   │   │       ├───lib
    │   │   │       │   └───values
    │   │   │       │       └───expressions
    │   │   │       ├───src
    │   │   │       │   └───values
    │   │   │       │       └───expressions
    │   │   │       └───__tests__
    │   │   │           └───src
    │   │   ├───scripts
    │   │   │   └───boilerplate
    │   │   ├───src
    │   │   │   ├───rules
    │   │   │   └───util
    │   │   │       ├───attributes
    │   │   │       └───implicitRoles
    │   │   ├───__mocks__
    │   │   └───__tests__
    │   │       ├───src
    │   │       │   ├───rules
    │   │       │   └───util
    │   │       └───__util__
    │   ├───eslint-plugin-prettier
    │   ├───eslint-plugin-react
    │   │   └───lib
    │   │       ├───rules
    │   │       └───util
    │   ├───eslint-scope
    │   │   └───lib
    │   ├───eslint-visitor-keys
    │   │   └───lib
    │   ├───espree
    │   │   └───lib
    │   ├───esprima
    │   │   ├───bin
    │   │   └───dist
    │   ├───esquery
    │   ├───esrecurse
    │   ├───estraverse
    │   ├───esutils
    │   │   └───lib
    │   ├───etag
    │   ├───event-emitter
    │   │   ├───benchmark
    │   │   └───test
    │   ├───event-stream
    │   │   ├───examples
    │   │   └───test
    │   │       └───helper
    │   ├───eventemitter3
    │   │   └───umd
    │   ├───events
    │   │   └───tests
    │   ├───eventsource
    │   │   ├───lib
    │   │   └───test
    │   ├───evp_bytestokey
    │   ├───exec-sh
    │   │   ├───example
    │   │   ├───lib
    │   │   └───test
    │   ├───execa
    │   │   └───lib
    │   ├───expand-brackets
    │   ├───expand-range
    │   ├───expand-tilde
    │   ├───express
    │   │   ├───lib
    │   │   │   ├───middleware
    │   │   │   └───router
    │   │   └───node_modules
    │   │       ├───array-flatten
    │   │       ├───path-to-regexp
    │   │       ├───qs
    │   │       │   ├───dist
    │   │       │   ├───lib
    │   │       │   └───test
    │   │       └───safe-buffer
    │   ├───extend
    │   ├───extend-shallow
    │   │   └───node_modules
    │   │       └───is-extendable
    │   ├───external-editor
    │   │   └───main
    │   │       └───errors
    │   ├───extglob
    │   ├───extract-text-webpack-plugin
    │   │   ├───dist
    │   │   │   └───lib
    │   │   └───schema
    │   ├───extsprintf
    │   │   └───lib
    │   ├───fast-deep-equal
    │   ├───fast-diff
    │   ├───fast-json-stable-stringify
    │   │   ├───benchmark
    │   │   ├───example
    │   │   └───test
    │   ├───fast-levenshtein
    │   ├───fastparse
    │   │   ├───lib
    │   │   └───test
    │   ├───faye-websocket
    │   │   ├───examples
    │   │   └───lib
    │   │       └───faye
    │   │           └───websocket
    │   │               └───api
    │   ├───fb-watchman
    │   ├───fbjs
    │   │   ├───flow
    │   │   │   └───lib
    │   │   └───lib
    │   │       └───__mocks__
    │   ├───figures
    │   ├───file-entry-cache
    │   ├───file-loader
    │   │   └───dist
    │   ├───filename-regex
    │   ├───fileset
    │   │   ├───lib
    │   │   └───test
    │   │       └───fixtures
    │   ├───filesize
    │   │   └───lib
    │   ├───fill-range
    │   │   └───node_modules
    │   │       └───isobject
    │   ├───finalhandler
    │   ├───find-babel-config
    │   │   └───lib
    │   ├───find-cache-dir
    │   ├───find-up
    │   ├───flat-cache
    │   ├───flatmap-stream
    │   │   └───test
    │   ├───flatten
    │   ├───follow-redirects
    │   │   └───node_modules
    │   │       └───debug
    │   │           └───src
    │   ├───for-in
    │   ├───for-own
    │   ├───forever-agent
    │   ├───form-data
    │   │   ├───lib
    │   │   └───node_modules
    │   │       └───combined-stream
    │   │           └───lib
    │   ├───forwarded
    │   ├───fragment-cache
    │   ├───fresh
    │   ├───from
    │   │   └───test
    │   ├───fs-extra
    │   │   ├───docs
    │   │   └───lib
    │   │       ├───copy
    │   │       ├───copy-sync
    │   │       ├───empty
    │   │       ├───ensure
    │   │       ├───fs
    │   │       ├───json
    │   │       ├───mkdirs
    │   │       ├───move
    │   │       ├───move-sync
    │   │       ├───output
    │   │       ├───path-exists
    │   │       ├───remove
    │   │       └───util
    │   ├───fs-readdir-recursive
    │   ├───fs.realpath
    │   ├───function-bind
    │   │   └───test
    │   ├───functional-red-black-tree
    │   │   ├───bench
    │   │   └───test
    │   ├───get-caller-file
    │   ├───get-stdin
    │   ├───get-stream
    │   ├───get-value
    │   ├───getpass
    │   │   └───lib
    │   ├───glob
    │   ├───glob-base
    │   ├───glob-parent
    │   ├───global-dirs
    │   ├───global-modules
    │   ├───global-prefix
    │   ├───globals
    │   ├───globby
    │   ├───google-maps-infobox
    │   │   └───types
    │   ├───got
    │   ├───graceful-fs
    │   ├───growly
    │   │   ├───example
    │   │   └───lib
    │   ├───gzip-size
    │   ├───handle-thing
    │   │   ├───lib
    │   │   └───test
    │   ├───handlebars
    │   │   ├───bin
    │   │   ├───dist
    │   │   │   ├───amd
    │   │   │   │   └───handlebars
    │   │   │   │       ├───compiler
    │   │   │   │       ├───decorators
    │   │   │   │       └───helpers
    │   │   │   └───cjs
    │   │   │       └───handlebars
    │   │   │           ├───compiler
    │   │   │           ├───decorators
    │   │   │           └───helpers
    │   │   └───lib
    │   │       └───handlebars
    │   │           ├───compiler
    │   │           ├───decorators
    │   │           └───helpers
    │   ├───har-schema
    │   │   └───lib
    │   ├───har-validator
    │   │   └───lib
    │   ├───has
    │   │   ├───src
    │   │   └───test
    │   ├───has-ansi
    │   ├───has-flag
    │   ├───has-symbols
    │   │   └───test
    │   │       └───shams
    │   ├───has-value
    │   ├───has-values
    │   │   └───node_modules
    │   │       ├───is-number
    │   │       │   └───node_modules
    │   │       │       └───kind-of
    │   │       └───kind-of
    │   ├───hash-base
    │   ├───hash.js
    │   │   ├───lib
    │   │   │   └───hash
    │   │   │       └───sha
    │   │   └───test
    │   ├───he
    │   │   ├───bin
    │   │   └───man
    │   ├───history
    │   │   ├───es
    │   │   ├───node_modules
    │   │   │   └───warning
    │   │   └───umd
    │   ├───hmac-drbg
    │   │   ├───lib
    │   │   └───test
    │   │       └───fixtures
    │   ├───hoist-non-react-statics
    │   │   ├───dist
    │   │   └───src
    │   ├───home-or-tmp
    │   ├───homedir-polyfill
    │   ├───hosted-git-info
    │   ├───hpack.js
    │   │   ├───bin
    │   │   ├───lib
    │   │   │   └───hpack
    │   │   ├───test
    │   │   └───tools
    │   ├───html-comment-regex
    │   ├───html-encoding-sniffer
    │   │   └───lib
    │   ├───html-entities
    │   │   └───lib
    │   ├───html-minifier
    │   │   ├───node_modules
    │   │   │   └───commander
    │   │   │       └───typings
    │   │   └───src
    │   ├───html-webpack-plugin
    │   │   ├───lib
    │   │   └───node_modules
    │   │       └───loader-utils
    │   ├───htmlparser2
    │   │   ├───lib
    │   │   │   └───entities
    │   │   ├───node_modules
    │   │   │   ├───domutils
    │   │   │   │   └───tests
    │   │   │   │       └───DomUtils
    │   │   │   ├───isarray
    │   │   │   │   └───build
    │   │   │   ├───readable-stream
    │   │   │   │   └───lib
    │   │   │   └───string_decoder
    │   │   └───test
    │   │       ├───Documents
    │   │       ├───Events
    │   │       ├───Feeds
    │   │       └───Stream
    │   ├───http-deceiver
    │   │   ├───lib
    │   │   └───test
    │   ├───http-errors
    │   ├───http-parser-js
    │   ├───http-proxy
    │   │   ├───.nyc_output
    │   │   ├───coverage
    │   │   │   └───lcov-report
    │   │   │       ├───http-proxy
    │   │   │       │   └───passes
    │   │   │       └───lib
    │   │   │           └───http-proxy
    │   │   │               └───passes
    │   │   └───lib
    │   │       └───http-proxy
    │   │           └───passes
    │   ├───http-proxy-middleware
    │   │   ├───lib
    │   │   └───node_modules
    │   │       ├───is-extglob
    │   │       └───is-glob
    │   ├───http-signature
    │   │   └───lib
    │   ├───https-browserify
    │   ├───hyphenate-style-name
    │   │   └───.nyc_output
    │   ├───iconv-lite
    │   │   ├───encodings
    │   │   │   └───tables
    │   │   └───lib
    │   ├───icss-replace-symbols
    │   │   └───lib
    │   ├───icss-utils
    │   │   └───lib
    │   ├───ieee754
    │   ├───ignore
    │   ├───import-lazy
    │   ├───import-local
    │   │   └───fixtures
    │   ├───imurmurhash
    │   ├───indefinite-observable
    │   │   ├───.nyc_output
    │   │   ├───coverage
    │   │   ├───dist
    │   │   ├───examples
    │   │   │   ├───as-module
    │   │   │   │   └───site
    │   │   │   └───as-script-tag
    │   │   ├───src
    │   │   └───third_party
    │   │       └───symbol-observable
    │   ├───indent-string
    │   ├───indexes-of
    │   ├───indexof
    │   ├───inflight
    │   ├───inherits
    │   ├───ini
    │   ├───inquirer
    │   │   ├───lib
    │   │   │   ├───objects
    │   │   │   ├───prompts
    │   │   │   ├───ui
    │   │   │   └───utils
    │   │   └───node_modules
    │   │       ├───ansi-regex
    │   │       ├───ansi-styles
    │   │       ├───chalk
    │   │       │   └───types
    │   │       ├───strip-ansi
    │   │       └───supports-color
    │   ├───internal-ip
    │   ├───interpret
    │   ├───invariant
    │   ├───invert-kv
    │   ├───ip
    │   │   ├───lib
    │   │   └───test
    │   ├───ipaddr.js
    │   │   └───lib
    │   ├───is-absolute-url
    │   ├───is-accessor-descriptor
    │   ├───is-arrayish
    │   ├───is-binary-path
    │   ├───is-buffer
    │   │   └───test
    │   ├───is-builtin-module
    │   ├───is-callable
    │   ├───is-ci
    │   ├───is-data-descriptor
    │   ├───is-date-object
    │   ├───is-descriptor
    │   │   └───node_modules
    │   │       └───kind-of
    │   ├───is-directory
    │   ├───is-dotfile
    │   ├───is-equal-shallow
    │   ├───is-extendable
    │   ├───is-extglob
    │   ├───is-finite
    │   ├───is-fullwidth-code-point
    │   ├───is-function
    │   ├───is-glob
    │   ├───is-in-browser
    │   │   ├───dist
    │   │   ├───src
    │   │   └───test
    │   ├───is-installed-globally
    │   ├───is-npm
    │   ├───is-number
    │   ├───is-obj
    │   ├───is-path-cwd
    │   ├───is-path-in-cwd
    │   ├───is-path-inside
    │   ├───is-plain-obj
    │   ├───is-plain-object
    │   ├───is-posix-bracket
    │   ├───is-primitive
    │   ├───is-promise
    │   ├───is-redirect
    │   ├───is-regex
    │   ├───is-resolvable
    │   ├───is-retry-allowed
    │   ├───is-root
    │   ├───is-stream
    │   ├───is-svg
    │   ├───is-symbol
    │   │   └───test
    │   ├───is-typedarray
    │   ├───is-utf8
    │   ├───is-windows
    │   ├───is-wsl
    │   ├───isarray
    │   ├───isexe
    │   │   └───test
    │   ├───isobject
    │   ├───isomorphic-fetch
    │   │   └───test
    │   ├───isstream
    │   ├───istanbul-api
    │   │   └───lib
    │   ├───istanbul-lib-coverage
    │   │   └───lib
    │   ├───istanbul-lib-hook
    │   │   └───lib
    │   ├───istanbul-lib-instrument
    │   │   └───dist
    │   ├───istanbul-lib-report
    │   │   ├───lib
    │   │   └───node_modules
    │   │       ├───has-flag
    │   │       └───supports-color
    │   ├───istanbul-lib-source-maps
    │   │   ├───lib
    │   │   └───node_modules
    │   │       ├───debug
    │   │       │   ├───dist
    │   │       │   └───src
    │   │       ├───ms
    │   │       └───source-map
    │   │           ├───dist
    │   │           └───lib
    │   ├───istanbul-reports
    │   │   └───lib
    │   │       ├───clover
    │   │       ├───cobertura
    │   │       ├───html
    │   │       │   ├───assets
    │   │       │   │   └───vendor
    │   │       │   └───templates
    │   │       ├───json
    │   │       ├───json-summary
    │   │       ├───lcov
    │   │       ├───lcovonly
    │   │       ├───none
    │   │       ├───teamcity
    │   │       ├───text
    │   │       ├───text-lcov
    │   │       └───text-summary
    │   ├───jest
    │   │   ├───bin
    │   │   ├───build
    │   │   └───node_modules
    │   │       ├───.bin
    │   │       ├───ansi-escapes
    │   │       ├───callsites
    │   │       ├───jest-cli
    │   │       │   ├───bin
    │   │       │   └───build
    │   │       │       ├───assets
    │   │       │       ├───cli
    │   │       │       ├───lib
    │   │       │       └───reporters
    │   │       └───jest-docblock
    │   │           └───build
    │   ├───jest-changed-files
    │   │   └───build
    │   ├───jest-config
    │   │   └───build
    │   │       └───vendor
    │   ├───jest-diff
    │   │   ├───build
    │   │   └───build-es5
    │   ├───jest-docblock
    │   │   └───build
    │   ├───jest-environment-jsdom
    │   │   └───build
    │   ├───jest-environment-node
    │   │   └───build
    │   ├───jest-haste-map
    │   │   ├───build
    │   │   │   ├───crawlers
    │   │   │   └───lib
    │   │   └───node_modules
    │   │       └───jest-docblock
    │   │           └───build
    │   ├───jest-jasmine2
    │   │   └───build
    │   │       └───jasmine
    │   ├───jest-matcher-utils
    │   │   ├───build
    │   │   └───build-es5
    │   ├───jest-matchers
    │   │   ├───build
    │   │   └───build-es5
    │   ├───jest-message-util
    │   │   ├───build
    │   │   └───build-es5
    │   ├───jest-mock
    │   │   ├───build
    │   │   └───build-es5
    │   ├───jest-regex-util
    │   │   ├───build
    │   │   └───build-es5
    │   ├───jest-resolve
    │   │   └───build
    │   ├───jest-resolve-dependencies
    │   │   └───build
    │   ├───jest-runtime
    │   │   ├───bin
    │   │   └───build
    │   │       └───cli
    │   ├───jest-snapshot
    │   │   └───build
    │   ├───jest-util
    │   │   ├───build
    │   │   └───build-es5
    │   ├───jest-validate
    │   │   ├───build
    │   │   └───build-es5
    │   ├───js-base64
    │   │   ├───.attic
    │   │   │   └───test-moment
    │   │   └───test
    │   ├───js-tokens
    │   ├───js-yaml
    │   │   ├───bin
    │   │   ├───dist
    │   │   └───lib
    │   │       └───js-yaml
    │   │           ├───schema
    │   │           └───type
    │   │               └───js
    │   ├───jsbn
    │   ├───jsdom
    │   │   ├───lib
    │   │   │   └───jsdom
    │   │   │       ├───browser
    │   │   │       ├───level2
    │   │   │       ├───level3
    │   │   │       ├───living
    │   │   │       │   ├───attributes
    │   │   │       │   ├───domparsing
    │   │   │       │   ├───events
    │   │   │       │   ├───file-api
    │   │   │       │   ├───generated
    │   │   │       │   ├───helpers
    │   │   │       │   ├───navigator
    │   │   │       │   ├───nodes
    │   │   │       │   ├───traversal
    │   │   │       │   ├───window
    │   │   │       │   └───xhr
    │   │   │       └───web-idl
    │   │   └───node_modules
    │   │       ├───.bin
    │   │       └───acorn
    │   │           ├───bin
    │   │           ├───dist
    │   │           └───src
    │   │               ├───bin
    │   │               ├───loose
    │   │               └───walk
    │   ├───jsesc
    │   │   ├───bin
    │   │   └───man
    │   ├───json-loader
    │   ├───json-parse-better-errors
    │   ├───json-schema
    │   │   ├───draft-00
    │   │   ├───draft-01
    │   │   ├───draft-02
    │   │   ├───draft-03
    │   │   │   └───examples
    │   │   ├───draft-04
    │   │   ├───lib
    │   │   └───test
    │   ├───json-schema-traverse
    │   │   └───spec
    │   │       └───fixtures
    │   ├───json-stable-stringify
    │   │   ├───example
    │   │   └───test
    │   ├───json-stable-stringify-without-jsonify
    │   │   ├───example
    │   │   └───test
    │   ├───json-stringify-safe
    │   │   └───test
    │   ├───json3
    │   │   └───lib
    │   ├───json5
    │   │   └───lib
    │   ├───jsonfile
    │   ├───jsonify
    │   │   ├───lib
    │   │   └───test
    │   ├───jsprim
    │   │   └───lib
    │   ├───jss
    │   │   ├───dist
    │   │   ├───lib
    │   │   │   ├───plugins
    │   │   │   ├───renderers
    │   │   │   ├───rules
    │   │   │   ├───types
    │   │   │   └───utils
    │   │   ├───node_modules
    │   │   │   ├───symbol-observable
    │   │   │   │   ├───es
    │   │   │   │   └───lib
    │   │   │   └───warning
    │   │   └───src
    │   │       ├───plugins
    │   │       ├───renderers
    │   │       ├───rules
    │   │       ├───types
    │   │       └───utils
    │   ├───jss-camel-case
    │   │   ├───dist
    │   │   ├───lib
    │   │   └───tests
    │   ├───jss-compose
    │   │   ├───dist
    │   │   ├───lib
    │   │   └───node_modules
    │   │       └───warning
    │   ├───jss-default-unit
    │   │   ├───dist
    │   │   └───lib
    │   ├───jss-expand
    │   │   ├───benchmark
    │   │   │   ├───fixtures
    │   │   │   └───integration
    │   │   ├───dist
    │   │   ├───docs
    │   │   ├───lib
    │   │   └───tests
    │   ├───jss-extend
    │   │   ├───dist
    │   │   ├───lib
    │   │   ├───node_modules
    │   │   │   └───warning
    │   │   └───tests
    │   ├───jss-global
    │   │   ├───dist
    │   │   └───lib
    │   ├───jss-nested
    │   │   ├───benchmark
    │   │   │   ├───fixtures
    │   │   │   └───tests
    │   │   ├───dist
    │   │   ├───lib
    │   │   └───node_modules
    │   │       └───warning
    │   ├───jss-preset-default
    │   │   ├───dist
    │   │   └───lib
    │   ├───jss-props-sort
    │   │   ├───dist
    │   │   └───lib
    │   ├───jss-template
    │   │   ├───dist
    │   │   ├───lib
    │   │   └───node_modules
    │   │       └───warning
    │   ├───jss-vendor-prefixer
    │   │   ├───dist
    │   │   └───lib
    │   ├───jsx-ast-utils
    │   │   ├───lib
    │   │   │   └───values
    │   │   │       └───expressions
    │   │   ├───src
    │   │   │   └───values
    │   │   │       └───expressions
    │   │   └───__tests__
    │   │       └───src
    │   ├───keycode
    │   │   ├───examples
    │   │   └───test
    │   ├───killable
    │   ├───kind-of
    │   ├───klaw
    │   │   └───src
    │   ├───latest-version
    │   ├───lazy-cache
    │   ├───lcid
    │   ├───leven
    │   ├───levn
    │   │   └───lib
    │   ├───load-json-file
    │   │   └───node_modules
    │   │       └───pify
    │   ├───loader-fs-cache
    │   │   └───node_modules
    │   │       ├───find-cache-dir
    │   │       ├───find-up
    │   │       ├───path-exists
    │   │       └───pkg-dir
    │   ├───loader-runner
    │   │   └───lib
    │   ├───loader-utils
    │   │   └───lib
    │   ├───locate-path
    │   ├───lodash
    │   │   └───fp
    │   ├───lodash.camelcase
    │   ├───lodash.cond
    │   ├───lodash.debounce
    │   ├───lodash.defaults
    │   ├───lodash.memoize
    │   ├───lodash.template
    │   ├───lodash.templatesettings
    │   ├───lodash.uniq
    │   ├───lodash._reinterpolate
    │   ├───loglevel
    │   │   ├───dist
    │   │   ├───lib
    │   │   └───test
    │   │       └───vendor
    │   ├───longest
    │   ├───loose-envify
    │   ├───loud-rejection
    │   ├───lower-case
    │   ├───lowercase-keys
    │   ├───lru-cache
    │   ├───make-dir
    │   │   └───node_modules
    │   │       └───pify
    │   ├───makeerror
    │   │   └───lib
    │   ├───map-cache
    │   ├───map-obj
    │   ├───map-stream
    │   │   ├───examples
    │   │   └───test
    │   ├───map-visit
    │   ├───marker-clusterer-plus
    │   │   ├───images
    │   │   └───src
    │   ├───markerwithlabel
    │   │   └───example
    │   ├───math-expression-evaluator
    │   │   ├───dist
    │   │   │   └───browser
    │   │   ├───src
    │   │   └───test
    │   ├───math-random
    │   ├───md5.js
    │   ├───media-typer
    │   ├───mem
    │   ├───memory-fs
    │   │   └───lib
    │   ├───memorystream
    │   │   └───test
    │   ├───meow
    │   │   └───node_modules
    │   │       └───minimist
    │   │           ├───example
    │   │           └───test
    │   ├───merge
    │   ├───merge-descriptors
    │   ├───methods
    │   ├───micromatch
    │   │   └───lib
    │   ├───miller-rabin
    │   │   ├───bin
    │   │   ├───lib
    │   │   └───test
    │   ├───mime
    │   │   └───src
    │   ├───mime-db
    │   ├───mime-types
    │   ├───mimic-fn
    │   ├───minimalistic-assert
    │   ├───minimalistic-crypto-utils
    │   │   ├───lib
    │   │   └───test
    │   ├───minimatch
    │   ├───minimist
    │   │   ├───example
    │   │   └───test
    │   ├───mixin-deep
    │   │   └───node_modules
    │   │       └───is-extendable
    │   ├───mkdirp
    │   │   ├───bin
    │   │   ├───examples
    │   │   └───test
    │   ├───ms
    │   ├───multicast-dns
    │   ├───multicast-dns-service-types
    │   ├───mute-stream
    │   │   ├───.nyc_output
    │   │   ├───coverage
    │   │   │   └───lcov-report
    │   │   │       └───__root__
    │   │   └───test
    │   ├───nanomatch
    │   │   ├───lib
    │   │   └───node_modules
    │   │       ├───arr-diff
    │   │       ├───array-unique
    │   │       └───kind-of
    │   ├───natural-compare
    │   ├───negotiator
    │   │   └───lib
    │   ├───neo-async
    │   ├───next-tick
    │   │   └───test
    │   ├───nice-try
    │   │   └───src
    │   ├───no-case
    │   │   └───vendor
    │   ├───node-fetch
    │   │   ├───lib
    │   │   └───test
    │   ├───node-forge
    │   │   ├───dist
    │   │   ├───flash
    │   │   │   └───swf
    │   │   └───lib
    │   ├───node-int64
    │   ├───node-libs-browser
    │   │   └───mock
    │   ├───node-notifier
    │   │   ├───lib
    │   │   ├───notifiers
    │   │   └───vendor
    │   │       ├───notifu
    │   │       ├───snoreToast
    │   │       └───terminal-notifier.app
    │   │           └───Contents
    │   │               ├───MacOS
    │   │               └───Resources
    │   │                   └───en.lproj
    │   ├───normalize-package-data
    │   │   └───lib
    │   ├───normalize-path
    │   ├───normalize-range
    │   ├───normalize-scroll-left
    │   │   └───lib
    │   ├───normalize-url
    │   ├───npm-run-all
    │   │   ├───bin
    │   │   │   ├───common
    │   │   │   ├───npm-run-all
    │   │   │   ├───run-p
    │   │   │   └───run-s
    │   │   ├───docs
    │   │   ├───lib
    │   │   └───node_modules
    │   │       ├───ansi-styles
    │   │       ├───chalk
    │   │       │   └───types
    │   │       ├───cross-spawn
    │   │       │   └───lib
    │   │       │       └───util
    │   │       └───supports-color
    │   ├───npm-run-path
    │   ├───nth-check
    │   ├───num2fraction
    │   ├───number-is-nan
    │   ├───nwmatcher
    │   │   └───src
    │   │       └───modules
    │   ├───oauth-sign
    │   ├───object-assign
    │   ├───object-copy
    │   │   └───node_modules
    │   │       └───define-property
    │   ├───object-hash
    │   │   ├───dist
    │   │   └───test
    │   ├───object-keys
    │   │   └───test
    │   ├───object-visit
    │   ├───object.omit
    │   ├───object.pick
    │   ├───obuf
    │   │   └───test
    │   ├───on-finished
    │   ├───on-headers
    │   ├───once
    │   ├───onetime
    │   ├───opn
    │   ├───optimist
    │   │   ├───example
    │   │   ├───node_modules
    │   │   │   └───wordwrap
    │   │   │       ├───example
    │   │   │       └───test
    │   │   └───test
    │   │       └───_
    │   ├───optionator
    │   │   └───lib
    │   ├───original
    │   ├───os-browserify
    │   ├───os-homedir
    │   ├───os-locale
    │   ├───os-tmpdir
    │   ├───output-file-sync
    │   ├───p-finally
    │   ├───p-limit
    │   ├───p-locate
    │   ├───p-map
    │   ├───p-try
    │   ├───package-json
    │   ├───pako
    │   │   ├───dist
    │   │   └───lib
    │   │       ├───utils
    │   │       └───zlib
    │   ├───param-case
    │   ├───parse-asn1
    │   │   └───test
    │   ├───parse-glob
    │   ├───parse-json
    │   ├───parse-passwd
    │   ├───parse5
    │   │   ├───docs
    │   │   │   └───build
    │   │   └───lib
    │   │       ├───common
    │   │       ├───jsdom
    │   │       ├───serialization
    │   │       ├───simple_api
    │   │       ├───tokenization
    │   │       ├───tree_adapters
    │   │       └───tree_construction
    │   ├───parseurl
    │   ├───pascalcase
    │   ├───path-browserify
    │   ├───path-dirname
    │   ├───path-exists
    │   ├───path-is-absolute
    │   ├───path-is-inside
    │   │   └───lib
    │   ├───path-key
    │   ├───path-parse
    │   ├───path-to-regexp
    │   │   └───node_modules
    │   │       └───isarray
    │   │           └───build
    │   ├───path-type
    │   │   └───node_modules
    │   │       └───pify
    │   ├───pause-stream
    │   │   └───test
    │   ├───pbkdf2
    │   │   └───lib
    │   ├───perfect-scrollbar
    │   │   ├───css
    │   │   ├───dist
    │   │   ├───src
    │   │   │   ├───handlers
    │   │   │   └───lib
    │   │   └───types
    │   ├───performance-now
    │   │   ├───lib
    │   │   ├───src
    │   │   └───test
    │   │       └───scripts
    │   ├───pify
    │   ├───pinkie
    │   ├───pinkie-promise
    │   ├───pkg-dir
    │   ├───pkg-up
    │   ├───pluralize
    │   ├───popper.js
    │   │   └───dist
    │   │       ├───esm
    │   │       └───umd
    │   ├───portfinder
    │   │   ├───lib
    │   │   └───node_modules
    │   │       └───async
    │   │           ├───dist
    │   │           └───lib
    │   ├───posix-character-classes
    │   ├───postcss
    │   │   ├───docs
    │   │   │   └───guidelines
    │   │   ├───lib
    │   │   └───node_modules
    │   │       ├───ansi-styles
    │   │       ├───chalk
    │   │       │   └───types
    │   │       └───supports-color
    │   ├───postcss-calc
    │   │   └───node_modules
    │   │       ├───has-flag
    │   │       ├───postcss
    │   │       │   ├───docs
    │   │       │   │   └───guidelines
    │   │       │   └───lib
    │   │       ├───source-map
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       └───supports-color
    │   ├───postcss-colormin
    │   │   ├───dist
    │   │   └───node_modules
    │   │       ├───has-flag
    │   │       ├───postcss
    │   │       │   ├───docs
    │   │       │   │   └───guidelines
    │   │       │   └───lib
    │   │       ├───source-map
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       └───supports-color
    │   ├───postcss-convert-values
    │   │   ├───dist
    │   │   │   └───lib
    │   │   └───node_modules
    │   │       ├───has-flag
    │   │       ├───postcss
    │   │       │   ├───docs
    │   │       │   │   └───guidelines
    │   │       │   └───lib
    │   │       ├───source-map
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       └───supports-color
    │   ├───postcss-discard-comments
    │   │   ├───dist
    │   │   │   └───lib
    │   │   └───node_modules
    │   │       ├───has-flag
    │   │       ├───postcss
    │   │       │   ├───docs
    │   │       │   │   └───guidelines
    │   │       │   └───lib
    │   │       ├───source-map
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       └───supports-color
    │   ├───postcss-discard-duplicates
    │   │   ├───dist
    │   │   └───node_modules
    │   │       ├───has-flag
    │   │       ├───postcss
    │   │       │   ├───docs
    │   │       │   │   └───guidelines
    │   │       │   └───lib
    │   │       ├───source-map
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       └───supports-color
    │   ├───postcss-discard-empty
    │   │   ├───dist
    │   │   └───node_modules
    │   │       ├───has-flag
    │   │       ├───postcss
    │   │       │   ├───docs
    │   │       │   │   └───guidelines
    │   │       │   └───lib
    │   │       ├───source-map
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       └───supports-color
    │   ├───postcss-discard-overridden
    │   │   ├───dist
    │   │   ├───node_modules
    │   │   │   ├───has-flag
    │   │   │   ├───postcss
    │   │   │   │   ├───docs
    │   │   │   │   │   └───guidelines
    │   │   │   │   └───lib
    │   │   │   ├───source-map
    │   │   │   │   ├───dist
    │   │   │   │   └───lib
    │   │   │   └───supports-color
    │   │   └───test
    │   ├───postcss-discard-unused
    │   │   ├───dist
    │   │   └───node_modules
    │   │       ├───has-flag
    │   │       ├───postcss
    │   │       │   ├───docs
    │   │       │   │   └───guidelines
    │   │       │   └───lib
    │   │       ├───source-map
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       └───supports-color
    │   ├───postcss-filter-plugins
    │   │   ├───dist
    │   │   └───node_modules
    │   │       ├───has-flag
    │   │       ├───postcss
    │   │       │   ├───docs
    │   │       │   │   └───guidelines
    │   │       │   └───lib
    │   │       ├───source-map
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       └───supports-color
    │   ├───postcss-flexbugs-fixes
    │   │   └───bugs
    │   ├───postcss-load-config
    │   ├───postcss-load-options
    │   │   └───lib
    │   ├───postcss-load-plugins
    │   │   └───lib
    │   ├───postcss-loader
    │   │   └───lib
    │   ├───postcss-merge-idents
    │   │   ├───dist
    │   │   └───node_modules
    │   │       ├───has-flag
    │   │       ├───postcss
    │   │       │   ├───docs
    │   │       │   │   └───guidelines
    │   │       │   └───lib
    │   │       ├───source-map
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       └───supports-color
    │   ├───postcss-merge-longhand
    │   │   ├───dist
    │   │   │   └───lib
    │   │   │       └───decl
    │   │   └───node_modules
    │   │       ├───has-flag
    │   │       ├───postcss
    │   │       │   ├───docs
    │   │       │   │   └───guidelines
    │   │       │   └───lib
    │   │       ├───source-map
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       └───supports-color
    │   ├───postcss-merge-rules
    │   │   ├───dist
    │   │   │   └───lib
    │   │   └───node_modules
    │   │       ├───.bin
    │   │       ├───browserslist
    │   │       ├───has-flag
    │   │       ├───postcss
    │   │       │   ├───docs
    │   │       │   │   └───guidelines
    │   │       │   └───lib
    │   │       ├───source-map
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       └───supports-color
    │   ├───postcss-message-helpers
    │   ├───postcss-minify-font-values
    │   │   ├───lib
    │   │   └───node_modules
    │   │       ├───has-flag
    │   │       ├───postcss
    │   │       │   ├───docs
    │   │       │   │   └───guidelines
    │   │       │   └───lib
    │   │       ├───source-map
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       └───supports-color
    │   ├───postcss-minify-gradients
    │   │   ├───dist
    │   │   └───node_modules
    │   │       ├───has-flag
    │   │       ├───postcss
    │   │       │   ├───docs
    │   │       │   │   └───guidelines
    │   │       │   └───lib
    │   │       ├───source-map
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       └───supports-color
    │   ├───postcss-minify-params
    │   │   ├───dist
    │   │   └───node_modules
    │   │       ├───has-flag
    │   │       ├───postcss
    │   │       │   ├───docs
    │   │       │   │   └───guidelines
    │   │       │   └───lib
    │   │       ├───source-map
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       └───supports-color
    │   ├───postcss-minify-selectors
    │   │   ├───dist
    │   │   │   └───lib
    │   │   └───node_modules
    │   │       ├───has-flag
    │   │       ├───postcss
    │   │       │   ├───docs
    │   │       │   │   └───guidelines
    │   │       │   └───lib
    │   │       ├───source-map
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       └───supports-color
    │   ├───postcss-modules-extract-imports
    │   │   └───lib
    │   ├───postcss-modules-local-by-default
    │   ├───postcss-modules-scope
    │   │   └───lib
    │   ├───postcss-modules-values
    │   │   ├───lib
    │   │   ├───src
    │   │   └───test
    │   ├───postcss-normalize-charset
    │   │   └───node_modules
    │   │       ├───has-flag
    │   │       ├───postcss
    │   │       │   ├───docs
    │   │       │   │   └───guidelines
    │   │       │   └───lib
    │   │       ├───source-map
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       └───supports-color
    │   ├───postcss-normalize-url
    │   │   ├───dist
    │   │   └───node_modules
    │   │       ├───has-flag
    │   │       ├───postcss
    │   │       │   ├───docs
    │   │       │   │   └───guidelines
    │   │       │   └───lib
    │   │       ├───source-map
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       └───supports-color
    │   ├───postcss-ordered-values
    │   │   ├───dist
    │   │   │   ├───lib
    │   │   │   └───rules
    │   │   └───node_modules
    │   │       ├───has-flag
    │   │       ├───postcss
    │   │       │   ├───docs
    │   │       │   │   └───guidelines
    │   │       │   └───lib
    │   │       ├───source-map
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       └───supports-color
    │   ├───postcss-reduce-idents
    │   │   ├───dist
    │   │   │   └───lib
    │   │   └───node_modules
    │   │       ├───has-flag
    │   │       ├───postcss
    │   │       │   ├───docs
    │   │       │   │   └───guidelines
    │   │       │   └───lib
    │   │       ├───source-map
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       └───supports-color
    │   ├───postcss-reduce-initial
    │   │   ├───data
    │   │   ├───dist
    │   │   └───node_modules
    │   │       ├───has-flag
    │   │       ├───postcss
    │   │       │   ├───docs
    │   │       │   │   └───guidelines
    │   │       │   └───lib
    │   │       ├───source-map
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       └───supports-color
    │   ├───postcss-reduce-transforms
    │   │   ├───dist
    │   │   └───node_modules
    │   │       ├───has-flag
    │   │       ├───postcss
    │   │       │   ├───docs
    │   │       │   │   └───guidelines
    │   │       │   └───lib
    │   │       ├───source-map
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       └───supports-color
    │   ├───postcss-selector-parser
    │   │   └───dist
    │   │       └───selectors
    │   ├───postcss-svgo
    │   │   ├───dist
    │   │   │   └───lib
    │   │   └───node_modules
    │   │       ├───has-flag
    │   │       ├───postcss
    │   │       │   ├───docs
    │   │       │   │   └───guidelines
    │   │       │   └───lib
    │   │       ├───source-map
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       └───supports-color
    │   ├───postcss-unique-selectors
    │   │   ├───dist
    │   │   └───node_modules
    │   │       ├───has-flag
    │   │       ├───postcss
    │   │       │   ├───docs
    │   │       │   │   └───guidelines
    │   │       │   └───lib
    │   │       ├───source-map
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       └───supports-color
    │   ├───postcss-value-parser
    │   │   └───lib
    │   ├───postcss-zindex
    │   │   ├───lib
    │   │   └───node_modules
    │   │       ├───has-flag
    │   │       ├───postcss
    │   │       │   ├───docs
    │   │       │   │   └───guidelines
    │   │       │   └───lib
    │   │       ├───source-map
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       └───supports-color
    │   ├───prelude-ls
    │   │   └───lib
    │   ├───prepend-http
    │   ├───preserve
    │   ├───prettier
    │   ├───pretty-bytes
    │   ├───pretty-error
    │   │   ├───lib
    │   │   ├───src
    │   │   └───test
    │   ├───pretty-format
    │   │   ├───build
    │   │   │   └───plugins
    │   │   │       └───lib
    │   │   ├───build-es5
    │   │   │   └───plugins
    │   │   │       └───lib
    │   │   ├───node_modules
    │   │   │   └───ansi-styles
    │   │   └───perf
    │   ├───private
    │   ├───process
    │   ├───process-nextick-args
    │   ├───progress
    │   │   └───lib
    │   ├───promise
    │   │   ├───domains
    │   │   ├───lib
    │   │   ├───setimmediate
    │   │   └───src
    │   ├───prop-types
    │   │   └───lib
    │   ├───proxy-addr
    │   ├───prr
    │   ├───ps-tree
    │   │   ├───bin
    │   │   └───test
    │   │       └───exec
    │   ├───pseudomap
    │   │   └───test
    │   ├───psl
    │   │   ├───data
    │   │   └───dist
    │   ├───public-encrypt
    │   │   └───test
    │   ├───punycode
    │   ├───q
    │   ├───qs
    │   │   ├───dist
    │   │   ├───lib
    │   │   └───test
    │   ├───query-string
    │   ├───querystring
    │   │   └───test
    │   ├───querystring-es3
    │   │   └───test
    │   ├───querystringify
    │   ├───raf
    │   ├───randomatic
    │   │   └───node_modules
    │   │       ├───is-number
    │   │       └───kind-of
    │   ├───randombytes
    │   ├───randomfill
    │   ├───range-parser
    │   ├───raw-body
    │   │   └───node_modules
    │   │       ├───depd
    │   │       │   └───lib
    │   │       │       ├───browser
    │   │       │       └───compat
    │   │       ├───http-errors
    │   │       ├───iconv-lite
    │   │       │   ├───encodings
    │   │       │   │   └───tables
    │   │       │   └───lib
    │   │       └───setprototypeof
    │   ├───rc
    │   │   ├───lib
    │   │   ├───node_modules
    │   │   │   └───minimist
    │   │   │       ├───example
    │   │   │       └───test
    │   │   └───test
    │   ├───react
    │   │   ├───cjs
    │   │   └───umd
    │   ├───react-chartist
    │   │   └───dist
    │   ├───react-dev-utils
    │   ├───react-dom
    │   │   ├───cjs
    │   │   └───umd
    │   ├───react-error-overlay
    │   │   └───lib
    │   ├───react-event-listener
    │   │   ├───dist
    │   │   └───src
    │   ├───react-google-maps
    │   │   ├───lib
    │   │   │   ├───components
    │   │   │   │   ├───addons
    │   │   │   │   ├───drawing
    │   │   │   │   ├───places
    │   │   │   │   └───visualization
    │   │   │   └───utils
    │   │   ├───node_modules
    │   │   │   ├───recompose
    │   │   │   │   ├───build
    │   │   │   │   ├───cjs
    │   │   │   │   ├───es
    │   │   │   │   └───utils
    │   │   │   └───warning
    │   │   ├───src
    │   │   │   ├───components
    │   │   │   │   ├───addons
    │   │   │   │   │   └───__tests__
    │   │   │   │   ├───drawing
    │   │   │   │   │   └───__tests__
    │   │   │   │   ├───places
    │   │   │   │   │   └───__tests__
    │   │   │   │   └───visualization
    │   │   │   │       └───__tests__
    │   │   │   ├───docs
    │   │   │   ├───macros
    │   │   │   │   ├───addons
    │   │   │   │   ├───drawing
    │   │   │   │   ├───places
    │   │   │   │   └───visualization
    │   │   │   ├───tx
    │   │   │   ├───utils
    │   │   │   └───__tests__
    │   │   └───types
    │   ├───react-jss
    │   │   ├───dist
    │   │   └───lib
    │   ├───react-lifecycles-compat
    │   ├───react-router
    │   │   ├───es
    │   │   └───umd
    │   ├───react-router-dom
    │   │   ├───es
    │   │   └───umd
    │   ├───react-scripts
    │   │   ├───bin
    │   │   ├───config
    │   │   │   └───jest
    │   │   ├───node_modules
    │   │   │   ├───.bin
    │   │   │   ├───ansi-regex
    │   │   │   ├───ansi-styles
    │   │   │   ├───debug
    │   │   │   │   ├───dist
    │   │   │   │   └───src
    │   │   │   ├───eslint
    │   │   │   │   ├───bin
    │   │   │   │   ├───conf
    │   │   │   │   ├───lib
    │   │   │   │   │   ├───code-path-analysis
    │   │   │   │   │   ├───config
    │   │   │   │   │   ├───formatters
    │   │   │   │   │   ├───rules
    │   │   │   │   │   ├───testers
    │   │   │   │   │   ├───token-store
    │   │   │   │   │   └───util
    │   │   │   │   │       └───patterns
    │   │   │   │   ├───messages
    │   │   │   │   └───node_modules
    │   │   │   │       └───chalk
    │   │   │   │           └───types
    │   │   │   ├───eslint-plugin-react
    │   │   │   │   └───lib
    │   │   │   │       ├───rules
    │   │   │   │       └───util
    │   │   │   ├───ms
    │   │   │   ├───promise
    │   │   │   │   ├───domains
    │   │   │   │   ├───lib
    │   │   │   │   ├───setimmediate
    │   │   │   │   └───src
    │   │   │   ├───strip-ansi
    │   │   │   ├───supports-color
    │   │   │   └───whatwg-fetch
    │   │   ├───scripts
    │   │   │   └───utils
    │   │   └───template
    │   │       ├───public
    │   │       └───src
    │   ├───react-swipeable-views
    │   │   ├───lib
    │   │   └───src
    │   ├───react-swipeable-views-core
    │   │   ├───lib
    │   │   └───src
    │   ├───react-swipeable-views-utils
    │   │   ├───lib
    │   │   └───src
    │   ├───react-transition-group
    │   │   ├───dist
    │   │   └───utils
    │   ├───read-pkg
    │   ├───read-pkg-up
    │   │   └───node_modules
    │   │       ├───find-up
    │   │       ├───load-json-file
    │   │       ├───parse-json
    │   │       │   └───vendor
    │   │       ├───path-exists
    │   │       ├───path-type
    │   │       ├───read-pkg
    │   │       └───strip-bom
    │   ├───readable-stream
    │   │   ├───doc
    │   │   │   └───wg-meetings
    │   │   └───lib
    │   │       └───internal
    │   │           └───streams
    │   ├───readdirp
    │   │   └───node_modules
    │   │       ├───arr-diff
    │   │       ├───array-unique
    │   │       ├───braces
    │   │       │   ├───lib
    │   │       │   └───node_modules
    │   │       │       └───extend-shallow
    │   │       ├───expand-brackets
    │   │       │   ├───lib
    │   │       │   └───node_modules
    │   │       │       ├───define-property
    │   │       │       ├───extend-shallow
    │   │       │       ├───is-accessor-descriptor
    │   │       │       │   └───node_modules
    │   │       │       │       └───kind-of
    │   │       │       ├───is-data-descriptor
    │   │       │       │   └───node_modules
    │   │       │       │       └───kind-of
    │   │       │       ├───is-descriptor
    │   │       │       └───kind-of
    │   │       ├───extglob
    │   │       │   ├───lib
    │   │       │   └───node_modules
    │   │       │       ├───define-property
    │   │       │       └───extend-shallow
    │   │       ├───fill-range
    │   │       │   └───node_modules
    │   │       │       └───extend-shallow
    │   │       ├───is-accessor-descriptor
    │   │       ├───is-data-descriptor
    │   │       ├───is-descriptor
    │   │       ├───is-number
    │   │       │   └───node_modules
    │   │       │       └───kind-of
    │   │       ├───kind-of
    │   │       └───micromatch
    │   │           └───lib
    │   ├───recompose
    │   │   ├───dist
    │   │   └───utils
    │   ├───recursive-readdir
    │   │   ├───node_modules
    │   │   │   └───minimatch
    │   │   └───test
    │   │       ├───testdir
    │   │       │   ├───a
    │   │       │   └───b
    │   │       │       └───b
    │   │       ├───testdirBeta
    │   │       └───testsymlinks
    │   │           └───linkeddir
    │   ├───redent
    │   ├───reduce-css-calc
    │   │   └───node_modules
    │   │       └───balanced-match
    │   ├───reduce-function-call
    │   │   └───node_modules
    │   │       └───balanced-match
    │   ├───regenerate
    │   ├───regenerator-runtime
    │   ├───regenerator-transform
    │   │   ├───lib
    │   │   └───src
    │   ├───regex-cache
    │   ├───regex-not
    │   ├───regexpp
    │   ├───regexpu-core
    │   │   └───data
    │   ├───registry-auth-token
    │   │   └───test
    │   ├───registry-url
    │   ├───regjsgen
    │   ├───regjsparser
    │   │   ├───bin
    │   │   └───node_modules
    │   │       ├───.bin
    │   │       └───jsesc
    │   │           ├───bin
    │   │           └───man
    │   ├───relateurl
    │   │   └───lib
    │   │       ├───parse
    │   │       ├───relate
    │   │       └───util
    │   ├───remove-trailing-separator
    │   ├───renderkid
    │   │   ├───docs
    │   │   │   └───images
    │   │   ├───lib
    │   │   │   ├───ansiPainter
    │   │   │   ├───layout
    │   │   │   │   └───block
    │   │   │   │       ├───blockAppendor
    │   │   │   │       ├───blockPrependor
    │   │   │   │       ├───lineAppendor
    │   │   │   │       ├───linePrependor
    │   │   │   │       └───lineWrapper
    │   │   │   └───renderKid
    │   │   │       ├───styleApplier
    │   │   │       └───styles
    │   │   │           └───rule
    │   │   │               └───declarationBlock
    │   │   └───test
    │   │       ├───layout
    │   │       └───renderKid
    │   │           └───styles
    │   ├───repeat-element
    │   ├───repeat-string
    │   ├───repeating
    │   ├───request
    │   │   └───lib
    │   ├───require-directory
    │   ├───require-from-string
    │   ├───require-main-filename
    │   ├───require-uncached
    │   ├───requires-port
    │   ├───reselect
    │   │   ├───dist
    │   │   ├───es
    │   │   ├───lib
    │   │   └───src
    │   ├───resolve
    │   │   ├───example
    │   │   ├───lib
    │   │   └───test
    │   │       ├───dotdot
    │   │       │   └───abc
    │   │       ├───module_dir
    │   │       │   ├───xmodules
    │   │       │   │   └───aaa
    │   │       │   ├───ymodules
    │   │       │   │   └───aaa
    │   │       │   └───zmodules
    │   │       │       └───bbb
    │   │       ├───node_path
    │   │       │   ├───x
    │   │       │   │   ├───aaa
    │   │       │   │   └───ccc
    │   │       │   └───y
    │   │       │       ├───bbb
    │   │       │       └───ccc
    │   │       ├───pathfilter
    │   │       │   └───deep_ref
    │   │       ├───precedence
    │   │       │   ├───aaa
    │   │       │   └───bbb
    │   │       └───resolver
    │   │           ├───baz
    │   │           ├───dot_main
    │   │           ├───dot_slash_main
    │   │           ├───incorrect_main
    │   │           ├───other_path
    │   │           │   └───lib
    │   │           ├───quux
    │   │           │   └───foo
    │   │           ├───same_names
    │   │           │   └───foo
    │   │           ├───symlinked
    │   │           │   └───_
    │   │           │       ├───node_modules
    │   │           │       └───symlink_target
    │   │           └───without_basedir
    │   ├───resolve-cwd
    │   │   └───node_modules
    │   │       └───resolve-from
    │   ├───resolve-dir
    │   ├───resolve-from
    │   ├───resolve-pathname
    │   │   ├───cjs
    │   │   └───umd
    │   ├───resolve-url
    │   │   └───test
    │   ├───restore-cursor
    │   ├───ret
    │   │   └───lib
    │   ├───right-align
    │   ├───rimraf
    │   ├───ripemd160
    │   ├───run-async
    │   ├───rx-lite
    │   ├───rx-lite-aggregates
    │   ├───safe-buffer
    │   ├───safe-regex
    │   │   ├───example
    │   │   └───test
    │   ├───safer-buffer
    │   ├───sane
    │   │   ├───node_modules
    │   │   │   ├───bser
    │   │   │   │   └───test
    │   │   │   ├───fb-watchman
    │   │   │   └───minimist
    │   │   │       ├───example
    │   │   │       └───test
    │   │   └───src
    │   │       └───utils
    │   ├───sax
    │   │   └───lib
    │   ├───schedule
    │   │   ├───cjs
    │   │   └───umd
    │   ├───schema-utils
    │   │   └───dist
    │   ├───scriptjs
    │   │   ├───benchmarks
    │   │   ├───demos
    │   │   │   ├───css
    │   │   │   └───js
    │   │   ├───dist
    │   │   ├───src
    │   │   ├───tests
    │   │   └───vendor
    │   ├───select-hose
    │   │   ├───lib
    │   │   └───test
    │   ├───selfsigned
    │   │   └───test
    │   ├───semver
    │   │   └───bin
    │   ├───semver-diff
    │   ├───send
    │   │   └───node_modules
    │   │       ├───.bin
    │   │       └───mime
    │   │           └───build
    │   ├───serve-index
    │   │   └───public
    │   │       └───icons
    │   ├───serve-static
    │   ├───serviceworker-cache-polyfill
    │   ├───set-blocking
    │   ├───set-value
    │   │   └───node_modules
    │   │       └───extend-shallow
    │   ├───setimmediate
    │   ├───setprototypeof
    │   ├───sha.js
    │   │   └───test
    │   ├───shebang-command
    │   ├───shebang-regex
    │   ├───shell-quote
    │   │   ├───example
    │   │   └───test
    │   ├───shellwords
    │   │   └───lib
    │   ├───signal-exit
    │   ├───slash
    │   ├───slice-ansi
    │   ├───snapdragon
    │   │   ├───lib
    │   │   └───node_modules
    │   │       ├───define-property
    │   │       ├───extend-shallow
    │   │       └───source-map
    │   │           ├───dist
    │   │           └───lib
    │   ├───snapdragon-node
    │   │   └───node_modules
    │   │       ├───define-property
    │   │       ├───is-accessor-descriptor
    │   │       ├───is-data-descriptor
    │   │       ├───is-descriptor
    │   │       └───kind-of
    │   ├───snapdragon-util
    │   ├───sockjs
    │   │   ├───examples
    │   │   │   ├───echo
    │   │   │   ├───express
    │   │   │   ├───express-3.x
    │   │   │   ├───hapi
    │   │   │   │   └───html
    │   │   │   ├───koa
    │   │   │   └───multiplex
    │   │   ├───lib
    │   │   └───node_modules
    │   │       └───faye-websocket
    │   │           ├───examples
    │   │           └───lib
    │   │               └───faye
    │   │                   └───websocket
    │   │                       └───api
    │   ├───sockjs-client
    │   │   ├───dist
    │   │   └───lib
    │   │       ├───event
    │   │       ├───transport
    │   │       │   ├───browser
    │   │       │   ├───driver
    │   │       │   ├───lib
    │   │       │   ├───receiver
    │   │       │   └───sender
    │   │       └───utils
    │   ├───sort-keys
    │   ├───source-list-map
    │   │   └───lib
    │   ├───source-map
    │   │   ├───dist
    │   │   └───lib
    │   ├───source-map-resolve
    │   │   ├───lib
    │   │   └───test
    │   ├───source-map-support
    │   │   └───node_modules
    │   │       └───source-map
    │   │           ├───dist
    │   │           └───lib
    │   ├───source-map-url
    │   │   └───test
    │   ├───spdx-correct
    │   ├───spdx-exceptions
    │   ├───spdx-expression-parse
    │   ├───spdx-license-ids
    │   ├───spdy
    │   │   ├───lib
    │   │   │   └───spdy
    │   │   └───test
    │   ├───spdy-transport
    │   │   └───lib
    │   │       └───spdy-transport
    │   │           └───protocol
    │   │               ├───base
    │   │               ├───http2
    │   │               └───spdy
    │   ├───split
    │   │   ├───examples
    │   │   └───test
    │   ├───split-string
    │   ├───sprintf-js
    │   │   ├───demo
    │   │   ├───dist
    │   │   ├───src
    │   │   └───test
    │   ├───sshpk
    │   │   ├───bin
    │   │   ├───lib
    │   │   │   └───formats
    │   │   └───man
    │   │       └───man1
    │   ├───static-extend
    │   │   └───node_modules
    │   │       └───define-property
    │   ├───statuses
    │   ├───stream-browserify
    │   │   └───test
    │   ├───stream-combiner
    │   │   └───test
    │   ├───stream-http
    │   │   ├───lib
    │   │   └───test
    │   │       ├───browser
    │   │       │   └───lib
    │   │       ├───node
    │   │       └───server
    │   │           └───static
    │   ├───strict-uri-encode
    │   ├───string-length
    │   ├───string-width
    │   │   └───node_modules
    │   │       ├───ansi-regex
    │   │       └───strip-ansi
    │   ├───string.prototype.padend
    │   │   └───test
    │   ├───string_decoder
    │   │   └───lib
    │   ├───strip-ansi
    │   ├───strip-bom
    │   ├───strip-eof
    │   ├───strip-indent
    │   │   └───node_modules
    │   │       └───get-stdin
    │   ├───strip-json-comments
    │   ├───style-loader
    │   │   └───lib
    │   ├───supports-color
    │   ├───svgo
    │   │   ├───bin
    │   │   ├───lib
    │   │   │   └───svgo
    │   │   ├───node_modules
    │   │   │   ├───.bin
    │   │   │   ├───esprima
    │   │   │   │   └───bin
    │   │   │   └───js-yaml
    │   │   │       ├───bin
    │   │   │       ├───dist
    │   │   │       └───lib
    │   │   │           └───js-yaml
    │   │   │               ├───schema
    │   │   │               └───type
    │   │   │                   └───js
    │   │   └───plugins
    │   ├───sw-precache
    │   │   └───lib
    │   ├───sw-precache-webpack-plugin
    │   │   └───lib
    │   ├───sw-toolbox
    │   │   └───lib
    │   │       └───strategies
    │   ├───symbol-observable
    │   │   ├───es
    │   │   └───lib
    │   ├───symbol-tree
    │   │   └───lib
    │   ├───table
    │   │   ├───dist
    │   │   │   └───schemas
    │   │   └───node_modules
    │   │       ├───ansi-styles
    │   │       ├───chalk
    │   │       │   └───types
    │   │       └───supports-color
    │   ├───tapable
    │   │   └───lib
    │   ├───term-size
    │   │   └───vendor
    │   │       ├───macos
    │   │       └───windows
    │   ├───test-exclude
    │   ├───text-table
    │   │   ├───example
    │   │   └───test
    │   ├───theming
    │   │   ├───dist
    │   │   │   ├───cjs
    │   │   │   └───esm
    │   │   └───src
    │   ├───throat
    │   ├───through
    │   │   └───test
    │   ├───thunky
    │   ├───time-stamp
    │   ├───timed-out
    │   ├───timers-browserify
    │   ├───tmp
    │   │   └───lib
    │   ├───tmpl
    │   │   └───lib
    │   ├───to-arraybuffer
    │   ├───to-fast-properties
    │   ├───to-object-path
    │   ├───to-regex
    │   ├───to-regex-range
    │   │   └───node_modules
    │   │       └───is-number
    │   ├───toposort
    │   ├───tough-cookie
    │   │   └───lib
    │   ├───tr46
    │   │   └───lib
    │   ├───trim-newlines
    │   ├───trim-right
    │   ├───tty-browserify
    │   ├───tunnel-agent
    │   ├───tweetnacl
    │   ├───type-check
    │   │   └───lib
    │   ├───type-is
    │   ├───typedarray
    │   │   ├───example
    │   │   └───test
    │   │       └───server
    │   ├───ua-parser-js
    │   │   ├───dist
    │   │   ├───src
    │   │   └───test
    │   ├───uglify-js
    │   │   ├───bin
    │   │   ├───lib
    │   │   ├───node_modules
    │   │   │   └───commander
    │   │   │       └───typings
    │   │   └───tools
    │   ├───uglify-to-browserify
    │   │   └───test
    │   ├───uglifyjs-webpack-plugin
    │   │   ├───dist
    │   │   ├───lib
    │   │   └───node_modules
    │   │       ├───.bin
    │   │       ├───camelcase
    │   │       ├───cliui
    │   │       │   └───test
    │   │       ├───source-map
    │   │       │   ├───dist
    │   │       │   └───lib
    │   │       ├───uglify-js
    │   │       │   ├───bin
    │   │       │   ├───lib
    │   │       │   └───tools
    │   │       ├───wordwrap
    │   │       │   ├───example
    │   │       │   └───test
    │   │       └───yargs
    │   │           └───lib
    │   ├───union-value
    │   │   └───node_modules
    │   │       ├───extend-shallow
    │   │       └───set-value
    │   ├───uniq
    │   │   └───test
    │   ├───uniqs
    │   ├───unique-string
    │   ├───universalify
    │   ├───unpipe
    │   ├───unset-value
    │   │   └───node_modules
    │   │       ├───has-value
    │   │       │   └───node_modules
    │   │       │       └───isobject
    │   │       └───has-values
    │   ├───unzip-response
    │   ├───upath
    │   │   └───build
    │   │       └───code
    │   ├───update-notifier
    │   │   └───node_modules
    │   │       ├───ansi-styles
    │   │       ├───chalk
    │   │       │   └───types
    │   │       └───supports-color
    │   ├───upper-case
    │   ├───urijs
    │   │   └───src
    │   ├───urix
    │   │   └───test
    │   ├───url
    │   │   └───node_modules
    │   │       └───punycode
    │   ├───url-loader
    │   │   └───.github
    │   ├───url-parse
    │   │   └───dist
    │   ├───url-parse-lax
    │   ├───use
    │   ├───user-home
    │   ├───util
    │   │   └───support
    │   ├───util-deprecate
    │   ├───utila
    │   │   ├───lib
    │   │   └───test
    │   ├───utils-merge
    │   ├───uuid
    │   │   ├───bin
    │   │   └───lib
    │   ├───v8flags
    │   ├───validate-npm-package-license
    │   ├───value-equal
    │   │   ├───cjs
    │   │   └───umd
    │   ├───vary
    │   ├───vendors
    │   ├───verror
    │   │   └───lib
    │   ├───vm-browserify
    │   │   ├───example
    │   │   │   └───run
    │   │   └───test
    │   ├───walker
    │   │   └───lib
    │   ├───warning
    │   ├───watch
    │   │   └───test
    │   │       └───d
    │   │           └───d
    │   ├───watchpack
    │   │   └───lib
    │   ├───wbuf
    │   │   └───test
    │   ├───webidl-conversions
    │   │   └───lib
    │   ├───webpack
    │   │   ├───bin
    │   │   ├───buildin
    │   │   ├───hot
    │   │   ├───lib
    │   │   │   ├───dependencies
    │   │   │   ├───node
    │   │   │   ├───optimize
    │   │   │   ├───performance
    │   │   │   ├───util
    │   │   │   ├───web
    │   │   │   └───webworker
    │   │   ├───node_modules
    │   │   │   ├───camelcase
    │   │   │   ├───has-flag
    │   │   │   ├───load-json-file
    │   │   │   ├───os-locale
    │   │   │   ├───parse-json
    │   │   │   │   └───vendor
    │   │   │   ├───path-type
    │   │   │   ├───read-pkg
    │   │   │   ├───read-pkg-up
    │   │   │   ├───source-map
    │   │   │   │   ├───dist
    │   │   │   │   └───lib
    │   │   │   ├───supports-color
    │   │   │   ├───which-module
    │   │   │   ├───yargs
    │   │   │   │   ├───lib
    │   │   │   │   └───locales
    │   │   │   └───yargs-parser
    │   │   │       └───lib
    │   │   ├───schemas
    │   │   └───web_modules
    │   ├───webpack-dev-middleware
    │   │   └───lib
    │   ├───webpack-dev-server
    │   │   ├───bin
    │   │   ├───client
    │   │   ├───lib
    │   │   │   └───util
    │   │   ├───node_modules
    │   │   │   ├───debug
    │   │   │   │   ├───dist
    │   │   │   │   └───src
    │   │   │   ├───del
    │   │   │   ├───globby
    │   │   │   │   └───node_modules
    │   │   │   │       └───pify
    │   │   │   ├───is-fullwidth-code-point
    │   │   │   ├───ms
    │   │   │   ├───pify
    │   │   │   ├───string-width
    │   │   │   ├───supports-color
    │   │   │   ├───yargs
    │   │   │   │   ├───lib
    │   │   │   │   └───locales
    │   │   │   └───yargs-parser
    │   │   │       └───lib
    │   │   └───ssl
    │   ├───webpack-manifest-plugin
    │   │   ├───lib
    │   │   └───node_modules
    │   │       ├───fs-extra
    │   │       │   └───lib
    │   │       │       ├───copy
    │   │       │       ├───copy-sync
    │   │       │       ├───empty
    │   │       │       ├───ensure
    │   │       │       ├───json
    │   │       │       ├───mkdirs
    │   │       │       ├───move
    │   │       │       ├───output
    │   │       │       ├───remove
    │   │       │       ├───util
    │   │       │       └───walk
    │   │       └───jsonfile
    │   ├───webpack-sources
    │   │   └───lib
    │   ├───websocket-driver
    │   │   └───lib
    │   │       └───websocket
    │   │           └───driver
    │   │               └───hybi
    │   ├───websocket-extensions
    │   │   └───lib
    │   │       └───pipeline
    │   ├───whatwg-encoding
    │   │   └───lib
    │   ├───whatwg-fetch
    │   │   └───dist
    │   ├───whatwg-url
    │   │   ├───lib
    │   │   └───node_modules
    │   │       └───webidl-conversions
    │   │           └───lib
    │   ├───whet.extend
    │   │   ├───lib
    │   │   ├───src
    │   │   └───test
    │   ├───which
    │   │   └───bin
    │   ├───which-module
    │   ├───widest-line
    │   ├───window-size
    │   ├───wordwrap
    │   │   ├───example
    │   │   └───test
    │   ├───worker-farm
    │   │   ├───examples
    │   │   │   ├───basic
    │   │   │   └───pi
    │   │   ├───lib
    │   │   │   └───child
    │   │   └───tests
    │   ├───wrap-ansi
    │   │   └───node_modules
    │   │       ├───is-fullwidth-code-point
    │   │       └───string-width
    │   ├───wrappy
    │   ├───write
    │   ├───write-file-atomic
    │   ├───xdg-basedir
    │   ├───xml-name-validator
    │   │   └───lib
    │   ├───xtend
    │   ├───y18n
    │   ├───yallist
    │   ├───yargs
    │   │   ├───lib
    │   │   ├───locales
    │   │   └───node_modules
    │   │       ├───is-fullwidth-code-point
    │   │       └───string-width
    │   └───yargs-parser
    │       └───lib
    ├───public
    └───src
        ├───assets
        │   ├───css
        │   ├───github
        │   ├───img
        │   │   └───faces
        │   └───jss
        │       └───material-dashboard-react
        │           ├───components
        │           ├───layouts
        │           └───views
        ├───components
        │   ├───Card
        │   ├───CustomButtons
        │   ├───CustomInput
        │   ├───CustomTabs
        │   ├───Footer
        │   ├───Grid
        │   ├───Header
        │   ├───Sidebar
        │   ├───Snackbar
        │   ├───Table
        │   ├───Tasks
        │   └───Typography
        ├───layouts
        │   └───Dashboard
        ├───routes
        ├───variables
        └───views
            ├───Dashboard
            ├───Hardware
            ├───Icons
            ├───Maps
            ├───Notifications
            ├───Hardware
            ├───Typography
            ├───UpgradeToPro
            └───UserProfile
´´´

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="src/assets/github/chrome.png" width="64" height="64"> <img src="src/assets/github/firefox.png" width="64" height="64"> <img src="src/assets/github/edge.png" width="64" height="64"> <img src="src/assets/github/safari.png" width="64" height="64"> <img src="src/assets/github/opera.png" width="64" height="64">


## Resources
- Demo: https://demos.creative-tim.com/material-dashboard-react
- Download Page: https://www.creative-tim.com/product/material-dashboard-react
- Documentation: https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial
- License Agreement: https://www.creative-tim.com/license
- Support: https://www.creative-tim.com/contact-us
- Issues: [Github Issues Page](https://github.com/creativetimofficial/material-dashboard-react/issues)
- [Material Kit React - For Front End Development](https://www.creative-tim.com/product/material-kit-react?ref=github-mdr-free)

## Reporting Issues
We use GitHub Issues as the official bug tracker for the Material Dashboard React. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Material Dashboard React. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Technical Support or Questions

If you have questions or need help integrating the product please [contact us](https://www.creative-tim.com/contact-us) instead of opening an issue.

## Licensing

- Copyright 2018 Creative Tim (https://www.creative-tim.com)
- Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

## Useful Links

More products from Creative Tim: <https://www.creative-tim.com/products>

Tutorials: <https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w>

Freebies: <https://www.creative-tim.com/products>

Affiliate Program (earn money): <https://www.creative-tim.com/affiliates/new>

Social Media:

Twitter: <https://twitter.com/CreativeTim>

Facebook: <https://www.facebook.com/CreativeTim>

Dribbble: <https://dribbble.com/creativetim>

Google+: <https://plus.google.com/+CreativetimPage>

Instagram: <https://instagram.com/creativetimofficial>
