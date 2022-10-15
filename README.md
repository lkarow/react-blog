# React Blog

## Description

Simple blog created with React and Firebase. Users can login anonymously and create, edit and delete posts. The posts can be formatted with Markdown.

<image src="./public/react-blog-home.png" width="400px">

## Dependencies

- firebase
- react
- react-dom
- react-router-dom
- [react-markdown](https://github.com/remarkjs/react-markdown)

## Get the blog running

Clone the repository. Install all the dependencies using with `npm install`.

Create a firebase project for the blog with a firestore database and authentication. The collection for the posts is simply called `posts`. Set up anonymous authentication for the Firebase project.

Add the SDK provided by Firebase to the firebase-config.js file. Also import `getFirestore` and `getAuth` from Firebase and paste the two lines into `firebase-config.js`:

```
export const db = getFirestore(app);
export const auth = getAuth();
```

## Testing

Contains basic unit tests for the parts of the blog.
