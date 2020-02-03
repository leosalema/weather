# weather
This application is a demo of React Native consuming a weather forecast API


* This app is based in consume api https://advisor.climatempo.com.br/ using Axios, in the first moment your result are saved in AsyncStorage to be used if you don't have internet access. In your development I used Hook to supply the state variable and styled-component to adjust layout.

### Instalation

* After clone this repository, you need access the folder this project and run this command: `npm i`
* After finished instalation, you need acces the folder `ios` and run this command: `pod install`
* And for finish, you need run other command: `react-native run-ios` if you using Iphone or `react-native run-android` if you using Android.


### ENV

* It is necessary to create this file to configure the api url, user token and city id.

`.env`
`BASE_URL=http://apiadvisor.climatempo.com.br/api/v1/forecast/locale`
`TOKEN=your_token`
`LOCALE=your_localidade`