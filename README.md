# Development

### Link to Deployed Website
<!-- If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>` -->
https://squishypig007.github.io/development

### Goal and Value of the Application
Similar to the Bakery Shop example, Blockbuster Bros has a variety of films with varying prices, views and prices for the virtual copies of the movies. The aggregator here tallies the total cost of your favorites if you were to get them online. The goal is to be able to act as a complete guide of all these movies and how much the user's desired picks would cost online.
The value to the user is brought by the extensive (AND-based) filtering and sorting mechanisms. Blockbuster Bros has all the information a user would want before downloading a movie online, all in one place.

### Usability Principles Considered
The layout with the left sidebar menu with all the filters and all the corresponding movies that fit the selections on the right conform to the **conceptual model** of such store-like pages. 
This clear layout increases **learnability** as it aids a top-down, right-left intuitive scan of the page and requires one to recall how to use such pages rather than introducing a new deisgn.
Having radio buttons and other similar components repeatedly stacked further aids learnability and **memorability** as it allows users to form a mental image using patterns of visual appearance; these are easier to recall.
Having an "All" option for each filter allows users to more **efficiently** go back to the base state which also  increases usability. The high contrast background and consistent spacing/sizing of text also help **accessibilty**
of the page.


### Organization of Components
For the aggregator, Favorite button and set of radio buttons (Price, Rating, Favorites filters and Views sorting) I use a different component each. I also use a separate component for each Movie which is rendered based on the filters and sorting that is done according to button selection. 

### How Data is Passed Down Through Components
Every Radio button takes a corresponding set<Value> state vairable as prop so as to change the state of the <Value> based on which option is clicked. This <Value> is what the filter functions use to create a filter method and similarly for the sort functions
FOr each Movie, the corresponding item and favorite/setFavorite state varaibles are taken in to render the cards with the needful information about the movie. Each movie component sends setFavorite to Button (the add to/remove from favorites button) to render a corresponding button according to whther the movie is part of the list and mutate the list according to the action. 

### How the User Triggers State Changes
The user triggers change by clicking radio button options or the add to/remove from favorites button. This is done through an onChange() and handleClick() function that sets the required state variable to a new value as needed by the click of the user. This change is then seen in App.js, triggering different logic based on the new value of the button.
For example, if the user selects the Paid option in the radio button, the onChange() function uses the setCostValue to change costValue to "paid"; this leads to the matchesCostType, the filter function, to enter the logic for only letting paid movies be part of the resultant list. This happens for all filters and sorting and leads to a list which is rendered by the map function for display.
Similarly, add to/remove from favorites when clicked by the user, handles clicks differently, setting the favorites list to add or remove the corresponding movie. This is reflected in FavItem which re-calculates the total cost of favorites based on the change. This change of state is reflected in App.js