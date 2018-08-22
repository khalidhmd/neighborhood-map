This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to start and use the the app 

## Table of Contents

- [How to start the app](#How-to-Start-the-App)
- [How to use the app](#How-to-use-the-app)
- [How to use caching ( service worker )](#How-to-use-caching)
- [License](#License)


## How to Start the App

If this is the first time, run the below comman:
npm install

this will install all dependencies required to run the app.

To start the app run this command:
npm start

the app will start and open in your default browser.



## How to use the app

When the app first loads defalt locations will be displayed on the map. you can click any marker to open  info window with this specific location related data.
If you click on a location in the side list, the associated marker will bounce and the associated data will display in info window.
If you typed a text in the input text in the side list, the list will be filtered to places with matching place names to the input text. and the markers on the map will be filttered accordingly, too.


## How to use chashing

The app contains functionality for caching via service workers. However, this is not enables in the develeoment mode. The caching can only be enables in production by setting environment varable on the production server as follows;
NODE_ENV = 'production' 

## License

This app is available under MIT license.
