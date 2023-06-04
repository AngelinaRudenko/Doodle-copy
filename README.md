# Doodle Copy

The goal of this project was to create a simple version of Doodle.com using Angular and NgRx store.

The project includes a main page and pages with forms that use Angular validators for validation. NgRx is used to store the state of the application, and some changes made to the store are synchronized with the browser's local storage. When you open the app, the data is loaded from the local storage, which helps to save information.

To style the app, I used an scss processor. The design of the app is responsive and looks good on both desktop and mobile devices. I used media queries to achieve this.

For the logo in the header I created an SVG that can change its color using scss.

The forms are validated, and any invalid fields are marked with an asterisk (*) and their style is updated accordingly.

I added animations to the buttons using CSS transformations and transitions.
