### Notes 
Notes.md contains some specific ideas or things that are useful or need to be known while developing a React-Native application.

## Folder and file structure in React-Native

At the top level keep all the essential configuration files and folders:
```
.
├── android/
├── ios/
├── src/
│   ├── assets/
│   ├── components/
│   ├── navigation/
│   ├── screens/
│   ├── services/
│   ├── styles/
│   ├── utils/
│   └── App.js
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── app.json
├── babel.config.js
├── index.js
├── metro.config.js
├── package.json
└── README.md
```

# ```src``` Folder 
All your application code should reside within the ```src``` folder to keep the root directory clean.

# ```assets/``` Folder
This filder must contain static resources likes images, fonts, and other media
```
src/
├── assets/
│   ├── images/
│   └── fonts/

```
# ```componenets/``` Folder
Reusable components should be stored here. Each component can have its own folder with related styles and test.
```
src/
├── components/
│   ├── Button/
│   │   ├── Button.js
│   │   └── Button.style.js
│   ├── Header/
│   │   ├── Header.js
│   │   └── Header.style.js
```

# ```navigaton``` Folder
Store your navigation configuration and related files.
```
src/
├── navigation/
│   ├── AppNavigator.js
│   ├── AuthNavigator.js
│   └── NavigationService.js
```

# ```screens``` Folder
Screens or pages of your application
```
src/
├── screens/
│   ├── Home/
│   │   ├── HomeScreen.js
│   │   └── Home.style.js
│   ├── Login/
│   │   ├── LoginScreen.js
│   │   └── Login.style.js
```

# ```services``` Folder
This folder can include API calls, authentication and other services.
```
src/
├── services/
│   ├── api/
│   │   └── api.js
│   ├── auth/
│   │   └── auth.js
```

# ```styles``` Folder
General styles that are used throughout the application
```
src/
├── styles/
│   ├── colors.js
│   ├── fonts.js
│   └── global.js
```

# ```utils``` Folder
Utility functions and helpers
```
src/
├── utils/
│   ├── helpers.js
│   └── constants.js
```
