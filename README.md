# React Dashboard

Example Cordova iOS app running react and react-router built and ejected from [create-react-app](https://github.com/facebookincubator/create-react-app).

### Build and run

Compile production react bundle to Cordova's www folder then run on iOS simulator or connected device.

```javascript
git clone git@github.com:sean-kennedy/react-dashboard.git
cd react-dashboard/app
cordova prepare
npm install
npm run build
cordova run ios
```