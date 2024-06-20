# Slash Assessment 


This is simple blog application that allows users to create, read blog posts that come from a mock API.   
`https://jsonplaceholder.typicode.com/posts`


## To run the application


1. Clone the repository `git clone https://github.com/Walid-Kh/slash_assessment`
2. Change directory to the project directory `cd slash_assessment`
3. Install the dependencies `npm install`
4. Run the application `npm run dev` 
5. Open your browser and navigate to `http://localhost:3000/`
6. Enjoy the application


## Technologies used

- React: For building the UI
- Typescript: For type checking
- Next.js: For server side rendering
- Tailwind CSS: For styling the application

## Features

- Home page that displays all the blog posts with an excerpt of the content, the title. 
- Clicking on a blog post will take you to the blog post page where you can read the full content of the blog post.
- There is a create post page where you can create a new blog post.
  - the form has two fields: title and content
  - the form has a submit button that will create a new blog post. 
  - if the form is submitted successfully a success message will be displayed.
  - if the form is submitted with errors, an error message will be displayed.
  - the form has validation for the title and content fields.
- The application is responsive and works on all screen sizes.