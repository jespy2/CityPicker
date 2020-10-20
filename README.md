![logo](src/logo.jpg)  
# City Picker App
### What
This app filters data to help the users find cities that might make a new home that fits their needs.  

Currently, the app filters cities based on population size, average annual temperature and political leaning (red to blue).

There are two main folders, one for the data processing and one for the React app itself.

### Why
I wanted a project that would let me stretch my skills a bit.  I used node.js to scrape and process the data, and React along with Material-UI and some Vanilla JS to render the data in a UI.

### Things To Improve
* **Additional Filter Parameters:**  
    1. More detailed climate data, such as precipitation.  
    2. Cost of living information
    3. Religious affiliation
    4. Education levels
* **Improved Data Processing:**  The election data was by county while everything else was city. I have yet to find a satisfactory solution for how to combine the data sets.  Several cities overlap more than one county and several counties have more than one city in them.  Currently the logic combines 1-to-1 pairing of cities/counties, so there are some notable cities missing from the final dataset (like Dallas, TX).
* **Sort By Column:**  The final result table will be more user friendly with sortable columns.
* **Improved Formatting For Mobile:** I'm not thrilled with the output on small screens, particularly the results table. Not sure how to make it better though.
* **Offer "Learn More Links":**  Connect the user with content related to their preferred cities.
* **Create Backend:**  It would be nice to be able to store users' history.  In the meantime, could set up the app to store data in browser.
