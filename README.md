# final-submission-movie-shoppies
This is the final submission for the Shopify front end developer challenge

https://diriks.github.io/final-submission-movie-shoppies/  link to hosted website
https://docs.google.com/document/d/1SdR9rQpocsH5rPTOcxr9noqHRld5NJlylKO9Hf94U8U/edit#. link to challenge requirements

Features
- The user may:

- Search movies (10 results max) by title
- Save their list of movies to local storage
- The application will automatically save the list on closing
- User cannot nominate more than 5 movies. A message is displayed when no more nominations can be done
- Saving list and persisiting on local storage even after closing the app
- Reset nomination list to empty


Design
This app was mostly built using React JSX, Node.js, Bootstrap, CSS, HTML. It was hosted using GitHub Pages
Special care and attention were paid to the scalability and maintaince aspect of the app during its development.
Proper object oriented practicecs and encapsulation were applied to ensure changes can easily be made to the files should the specifications change, which is very comon in real world applications.

Libraries used
Bootstrap, axios, local storage, react, Node.js, git

General notes
- All components were developed from scratch and implemented based on the design system that was made as part of this challenge.

Problems Ecountered and modifications made
- The API was not very efficient in returning search results. Search terms are supposed to progressively display results as user starts to type.
Unfortunately the API does not always display results for a sub-title, even if the full title existed. I could not modify the algorithm used by the API, however, I was able to merge several API calls using different query criteria to get a more fluid response as the user is searching for a movie title.
