# BirdOffice
## Requirements
- npm installed
- sass installed

## Installation
You can install the project by doing a :

> npm install

Then after you installed all the dependencies you can start a server on your browser :
> npm start

If you want to compile SASS files you can launch the following command : 
> grunt dev

## Project structure

I'm using the Scalable and Modular Architecture for CSS with the Sass pre-processor. 
- You can get all the base files in the base folder (sass/base). => Bootstrap is ihere
- The layout is defined in the layout folder (sass/layout)
- Modules are defined in the modules folder (sass/modules)
- Theme and state aren't user for this project.

For theming Bootstrap I override every styles I'm using in Sass' files.

There are 2 HTML files : 
- index.html which is the homepage
- search.html which is the second search results page (you can access it by clicking on "Trouver un lieu")
