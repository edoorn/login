# Accessible Login
This is a demo of an accessible login form. The form exists in the context of a larger web page. Forms like this rarely exist outside of the broader context of a web page, so I've included a few landmarks and a bit of navigation.

Get a closer look at the [source code](https://github.com/edoorn/login) on Github. Test the [live demo](https://edoorn.github.io/login/) hosted on Github Pages. 
## Features
- Inline error display on the input's 'blur' event
- Live screen reader announcements on the input's 'blur' event
- Form-level error display on the 'submit' event
- Popup dialog on successful submission
- Redirect to success page
## Dependencies
- Node
- NPM

## Local Setup
1. Download the project code.
2. In the project root, run `npm i` to install local modules.
3. Run `npm start` once installation is finished.
4. A browser window should be opened for you automatically at `http://localhost:3000/login`