# assignment-2
repository for assignment-2 of CSC372

<!--
  Name: Justice Tolentino
  Date: 09.17.2026
  CSC 372-01

  This is the README.md for my layouts assignment. Various notes on the composition of my layouts project.
-->


Project description:
This website was made to inform students of Glen Canyon University of the events organized by the GCU event staff.

Layout decisions:

Grid implementations:
1. I used grid to compose my cards for the upcoming and related events sections in index.html and event.html. I decided to use grid for this purpose because I thought it would be the best option for organizing each of my components for my cards onto the card itself.
2. I used grid to compose columns for the main content and sidebar on event.html. I chose to use grid in order to create the two columns and have them uniform within the main content container I made for them.

Flexbox implementations:
1. I used flexbox to manipulate my compact related events cards in order to not only organize them on the page, but to have them adjust to the size of the window in order to maintain readability.
2. I used flexbox in a media query to adjust the columns in the main content section of event.html in order to line them up vertically if the window is too narrow.
3. I used flexbox in another media query to adjust the event cards on the homepage to maintain the readability of the page depending on the width of the window.


Responsive design:

commit 1: initial commit

commit 2: Added index.html, event.html, styles.css, and images/ files. Began making a class for the headers called "top_bar".   I tested this by throwing generic code into the bodies of the html and css files, then using the integrated browser to see if the html code was populating content, and if the css code was causing changes to that content provided by the html code.

commit 3:Added main header for the campus page. Made the hero section without the button linking to the upcoming events.    I added the header with the navigation links to other sections of index.html and to event.html. I tested these links by clicking on them and making sure they took me to the desired destinations. I added the hero section with an upcoming events button, but I had not given it any function yet.

commit 4: Added about section, footer, and link to upcoming events in the main header.  I added the about section with a list describing what the page will do for students. I added the footer providing copyright and contact information, as well as navigation links that takes users back to the top of the page, or to upcoming events. I also enabled the link for the upcoming events in the main page header. I tested each of these changes by clicking on each of the links implemented for the footer and main page header.

commit 5: added upcoming event cards to the main page.  I added the upcoming events cards to the mainpage for students to see what other events are taking place throught the month. I tested this by refreshing the integrated browser to make sure the cards populated properly.

commit 6: added event introduction and related events to event.html.    Added initial information regarding the star gazing event and compact related event cards below it. I tested this by refreshing the integrated browser to make sure my additions populated properly.

commit 7: Added footer to index.html.   Mistyped, I actually added a footer to event.html and slightly adjusted the hrefs to make sure the links went to the same destinations that the footer links in the main page go to. I tested this by clicking the links after refreshing the integrated browser to make sure they went to the desired destinations.

commit 8: Added main content and sidebar.   Added the columns describing the star gazing event on event.html. I tested this by refreshing the integrated browser and making sure my additions populated properly.

commit 9: adjusted flex-container so that related event cards do not overlap with other elements on event.html. This corrected the related event cards so they wouldn't cover the footer or the elements above them. I tested this by refreshing, then repeatedly changing the size of the window and checking if they overlapped with the concerned elements.

commit 10: Added a media query for the upcoming events section that provides flex methods.  I added this media query so that the upcoming events section isn't just a vertical line of cards, and instead changes from a horizontal line to a vertical line depending on the width of the window. I tested this by changing the size of the window to see if the cards reacted to the size of the window.

commit 11: added images to the images file. Created a list of images that I used for this project in a separate file named images.


Semantic elements used:

<nav>: I used the nav tag for my headers for both index.html and events.html to organize my links to other sections and pages.
<ui>: I used the unordered list tag to create lists for my about section and to better compose my navigation sections.
<li>: I used the list item tag in order to give my unordered lists content.
<figure>: I used this tag in order to turn my photo of the GCU campus into a figure with informative subtext using the <figcaption> tag.


Sources:
camping.jpg was sourced from arizona.edu: URL: https://www.arizona.edu/sites/default/files/2026-07/homepage-hero.jpg?alternateWidths=/sites/default/files/styles/canvas_parametrized_width--%7Bwidth%7D/public/2026-07/homepage-hero.jpg.webp%3Fitok%3D_M__M_El

desert_stars.jpg was sourced from outboundhotels.com: URL: https://outboundhotels.com/wp-content/uploads/2025/08/Outbounder-Blog-Sedona-Stargazing.jpg

rock_climbing.jpg was sourced from 57hours.com: URL: https://57hours.com/wp-content/uploads/2022/05/Arizona-Rock-Climbing-Mountain.jpg

painting.jpg was sourced from city-academy.com: URL: https://www.city-academy.com/news/wp-content/uploads/2019/02/art-class-benefits.jpg

rafting.jpg was sourced from mild2wildrafting.com: URL: https://mild2wildrafting.com/wp-content/uploads/2016/03/saltsidefalls-3-1024x673.jpg

bowling2.jpg was sourced from cloudinary.com: URL: https://res.cloudinary.com/simpleview/image/upload/v1503606517/clients/neworleans/NOTMC_25826_44b360b1-080d-40b0-91a5-aafa648870c4.jpg