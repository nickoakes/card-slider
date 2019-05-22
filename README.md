# card-slider
A card slider that showcases my portfolio of projects. JSON data is fetched from a mock server on my-json-server.typicode.com which does not permit modification using post/ put requests. As a result, the "like" function (which works locally) does not work in this example version.

The slider functionality was implemented without the assistance of any additional libraries, by displaying all of the cards in a line and then translating by a distance equal to the width of three cards plus their margins and box-shadows.

In the fully-functional version, clicking a heart icon makes a put request to the server to update the "is_liked" property of the card, before a new get request is made and subsequently used to update the view so that the heart icon is filled.

Clicking a card will open a new browser tab with a live demo of the project in question.
