# RN_WeatherAPI
# Eatsy waiter app instruction

# Summary

Eatsy-waiter use react-native framework to build app, only build on Android platform.

# Installing dependencies

* After you clone project of Waiter, you need set up enviroment for React Native, you can follow [here](https://reactnative.dev/docs/0.61/getting-started) to set up the enviroment.
* You choose **Development OS** is macOS or Window
* Choose target OS is **Android** (Waiter app only on Android platform)

# Preparing the Android device

You can follow [Here](https://reactnative.dev/docs/0.61/running-on-device) to prepare the Android device
* You choose OS is **Android** and your DevelopmentOS is using.

> To run app please follow next step

# Running Waiter application dev debug

Waiter App use [`Yarn`](https://classic.yarnpkg.com/en/docs/install/#mac-stable) package:

### Install `yarn` by `Homebrew`
```
brew install yarn
```


 If this is first time you run project, You must run first in root project:
 ```
 yarn
```

Type the following in your command prompt to install and launch your app on the device:

```
yarn run-android
```
> Warning: If have issue  `Define location with an ANDROID_SDK_ROOT environment variable or by setting the sdk.dir path in your project's local properties file...` you can run command below and then launch app again:
```
source ~/.bash_profile
```


> If you run fail, you can check again your enviroment by [this command](https://reactnative.dev/blog/2019/11/18/react-native-doctor):

```
npx @react-native-community/cli doctor
```
# Tool Debug

To develop Waiter App we can use [React Native Debugger](https://github.com/jhen0409/react-native-debugger) to build app, we can see stores of redux on this tool.
## Installation

To install the app, you can download a prebuilt binary from the release page.

For macOS, you can use [Homebrew Cask](https://brew.sh/) to install:

```
$ brew update && brew cask install react-native-debugger
```

This puts `React Native Debugger.app` in your `/applications/` folder.

# Build Waiter 

Waiter app use `fastlane` to release application, `fastlane` is an open source platform aimed at simplifying Android and iOS deployment. First use need install `fastlane`:
### **Install  `fastlane`:**
Install the latest Xcode command line tools:
```
xcode-select --install
```

Install fastlane using

```
# Using RubyGems
sudo gem install fastlane -NV
```
```
# Alternatively using Homebrew
brew install fastlane
```

or you can follow [Homepage](https://docs.fastlane.tools/getting-started/android/setup/) of `fastlane` to install.

In root project: 
```
cd android 
bundle install
bundle update --bundler
cd ..
```

> To update `fastlane` for project, you can run `yarn update-ci`


### **Build Waiter**
 To create development install APK in Desktop, you run:

 ```
 yarn android-dev-apk
 ```

To publish a new development build to Firebase App Distribution, you need:
* First, your email need adds into `firebase project` to get permission.
 * Install or update to the latest version of the [Firebase CLI](https://firebase.google.com/docs/cli?authuser=0#install_the_firebase_cli) (we recommend downloading the standalone binary for the CLI specific to your OS). Make sure to [sign in](https://firebase.google.com/docs/cli?authuser=0#sign-in-test-cli) and test that you can access your projects.

After run command:

```
yarn android-dev-publish
```

To create production install APK in Desktop, you run:

```
yarn android-prod-apk
```

To create production build to Firebase App Distribution, you also implement same as publish a new development build to Firebase App Distribution above, then run:

```
yarn android-prod-publish
```

To generate the production build to upload to PlayStore in Desktop:

```
yarn android-prod-store
```

# Support
Send email to Viet Nguyen: `vietqb9779@gmail.com` or `pqkluan@gmail.com`
