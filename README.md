This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Application Details: 

The application returns a list of articles that are fetched from local json file.
Each page has single article with below details
 #### Title
 #### Author Details
 #### Content rendered from body element as html

### Requisites:
Image src from the raw html content is replaced with the required url.

Header contains a search option, where the user can search for any text that are available under the TITLE, AUTHOR or the BODY
In the available json, most of the text are available on the body of the first article.

Footer includes a pagination with NEXT and PREV button to enable the user to navigate the pages.

NEXT button will be disabled for the last article rendered and PREV will be disabled for the first article.

#### Article list
![img1](https://user-images.githubusercontent.com/55212925/65559843-9c033b00-df3c-11e9-9be6-d39cd26766e9.png)

#### PREV and NEXT navigations
![img2](https://user-images.githubusercontent.com/55212925/65559852-a3c2df80-df3c-11e9-8cce-5c21d620566f.png)

![img2_1](https://user-images.githubusercontent.com/55212925/65559945-ff8d6880-df3c-11e9-8bf5-9fefa54d6c1a.png)

#### Search result returns the filtered list
![img3](https://user-images.githubusercontent.com/55212925/65559950-03b98600-df3d-11e9-8a6e-db493d73f06c.png)



 
 
