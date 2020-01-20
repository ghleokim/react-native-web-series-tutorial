# React Native Web Series Practice

from youtube https://www.youtube.com/watch?v=J0b11tvEkFQ&list=PLN3n1USn4xll9wq0rw0ECrO0j2PFzuXtn

this example uses

- react native 0.60.0
- typescript
- TBA

## 01 

**initializing project**

```bash
yarn create react-app [project-name] --typescript
```

then the file directory looks like this:

![img01](./assets/01.png)


```bash
# install react native 0.60.0 since react-native-web uses 0.60.0
yarn add react-native@0.60.0 react-native-web react-art

yarn add -D @types/react-native@0.60.0
```

delete files that we are not going to use

```
src/
logo.svg
index.css
App.test.tsx
App.css
```

index.tsx

```typescript
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppRegistry } from 'react-native';

// register the app
AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root')
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

App.tsx

```typescript
import * as React from 'react'

import { Text, View } from 'react-native';

const App: React.FC = () => {
  return (
    <View>
      <Text> Hello from react native web ! </Text>
    </View>
  )
}

export default App;
```

### Run

```bash
yarn start
```

---

## 02

**setup react native hooks**

code below is from [react-native-community repo](https://github.com/react-native-community/react-native-template-typescript) and [this issue from template].(https://github.com/react-native-community/react-native-template-typescript/issues/72#issuecomment-541288488)

```bash
# ! Not working
npm i -g react-native-cli

# ! Working : uninstall legacy CLI and install newer version
npm uninstall --global react-native-cli
npm install --global @react-native-community/cli

## initialize new project
react-native init MyAwesomeProject --template react-native-template-typescript
```

App.tsx

```typescript
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Step One</Text>
      <Text style={styles.sectionDescription}>
        Edit <Text style={styles.highlight}>App.tsx</Text> to change
        this screen and then come back to see your edits.
              </Text>
      <Text style={styles.sectionDescription}>{count}</Text>
      <Button title="increment" onPress={() => setCount(count + 1)}/>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
```

*ios file build (macOS)*

...faced glog issue: solved with [this issue](https://github.com/facebook/react-native/issues/25561#issuecomment-526793836).

```bash
cd ios
pod install
cd ..
```

from project root directory, open two bash terminals

```bash
npm start
```

```bash
npm run ios
```

*android file build (windows)*

add to PATH:

```
# tools
C:\Users\<사용자이름>\AppData\Local\Android\sdk\tools

# platform-tools
C:\Users\<사용자이름>\AppData\Local\Android\sdk\platform-tools
```

to check if path setting is done:

```bash
# input
adb

# output
Android Debug Bridge version 1.0.41
...
```

before running project, android studio and virtual device should be open first.

![img02](./assets/02.png)


run project

```bash
npm run android
```

---

03

**connect react-native-web with `common/`**

folder structure

```bash
root/
  packages/
    app/ # original: myApp (react-native)
    web/ # original: my-app (react-native-web)
```

in root directory, initialize yarn workspace

```bash
npm init -y
```

modify `/package.json` to make yarn work and find packages from defined directories

```json
{
  "private": true,
  "name": ...
  ...,
  "workspaces": [
    "packages/*
  ]
}
```

remove all preinstalled `node_modules` inside `packages/`

```bash
rm -rf packages/*/node_modules
```

make directory named `common/` in packages and init as yarn workspace.

```bash
cd packages
mkdir common && cd common
npm init -y # makes package.json inside common/
```

in `common/package.json` change repo name from `common` to `@[reponame]/common/`

```json
// package.json
{
  ...
  "name": "@leorep/common",
  ...
}
```

make `common/src/index.tsx` in `common` and copy from `app/App.tsx`

```
common/
  src/
    index.tsx # copied from app/App.tsx
```

install react-native and react in `common/`

```bash
yarn add react-native react
```

make `tsconfig.json` in `common/`, copy from `web/tsconfig.json` and make some changes

```json
// tsconfig.json
{
    "compilerOptions": {
      "target": "es5",
      "lib": [
        "dom",
        "dom.iterable",
        "esnext"
      ],
      "allowJs": true,
      "skipLibCheck": true,
      "esModuleInterop": true,
      "allowSyntheticDefaultImports": true,
      "strict": true,
      "forceConsistentCasingInFileNames": true,
      "module": "commonjs",     // change module to commonjs
      "outDir": "dist",         // add out directory
      "moduleResolution": "node",
      "resolveJsonModule": true,
      "declaration": true,      // make declaration true: d.ts
      "jsx": "react"
    },
    "include": [
      "src"
    ]
  }
```

modify `common/package.json`

```json
{
  ...
  "main": "dist/index.js",
  "scripts" : {
    "build": "tsc"
  }
}
```

transpile tsx file into js and output file to directory `common/dist`

```bash
yarn build
```

then, `dist/index.d.ts`, `dist/index.js` comes out.



go to `web/package.json` and add dependencies for repo `common`

```json
{
  ...
  "dependencies": {
    "@[username]/common": "1.0.0",
    ...
  }
  ...
}
```

install package inside `web/`

```bash
cd web
yarn
```

delete everything from `web/src/App.tsx`, and import app from `@[username]/common`



*(is this needed?)*

```bash
yarn add cross-env
```

modify `scripts` in `web/package.json`

```json
{
  ...
  "start": "cross-env SKIP_PREFLIGHT_CHECK=true react-scripts start"
  ...
}
```

*finish (is this needed?)*


then in web: `yarn start`

```bash
#rm -rf dist and tsc
rimraf dist && tsc
```

*important things to remeber*

- check module `@[reponame]/common` : `ls node_modules/@[reponame]` in project root directory
- main source in common: `"main": "dist/index.js"` in `common/package.json`
- `rimraf dist && tsc` : delete dist folder everytime we build tsx file from common
- `common/tsconfig.json` : check `"jsx": "react"`,  `"module": "commonjs"`, `"declaration": true`, `"include": ["src"]`

---

## 04

**connect react-native app with `common/`**

**nohoist** setting inside yarn workspace `app/package.json`. react-native dependency finds the module from itself, not the root.

and delete node_modules and reinstll.

```json
{
  ...
  "workspaces": {
    "nohoist": [
      "react-native",
      "react-native/**",
      
      ]
  }
  ...
}
```

handling symlinks. : important

wml is one of libraries that links dependent local library-using watchman.

[wml repo link](https://github.com/wix/wml)

```bash
# install wml and watchman
npm install -g wml
brew install watchman
```

in `app/`, make wml to track the changes in the library `common/`

```bash
# wml add [local directory] ./node_modules/[name of package]
wml add ../common ./node_modules/@leorep/common
```

*run*

0. in `common/`, build `.tsx` file into `.js`

```bash
yarn build    # rimraf dist && tsc
```

1. make wml to watch library `common/`

```bash
wml start
```

2. opne new terminal, and in `app/`, run ios with yarn

```bash
yarn run ios  # this opens ios simulator
```

* if the `yarn run ios` does not go well, delete `app/ios/build` folder to clear the cache and run again.

---

## 05

**Using Mobx with React Hooks**

By using Mobx, we can manage states without using props.(like redux)

inside `common/`, install `mobx-react-lite` and `mobx`

```bash  
# 2020-01-18: using mobx-react-lite@1.5.2, mobx@5.15.2
yarn add mobx-react-lite mobx
```

make directory `stores/` in `common/src/` and make a file `CounterStore.ts`

```
common/src/
  index.tsx
  stores/
    CounterStore.ts
```

make class CounterStore in `CounterStore.ts`

```typescript
import { observable } from 'mobx';

class CounterStore {
  @observable count = 0;
}
```

go to `tsconfig.json` and set `experimentalDecorators` to `true` inside the compiler options, and then the error in `CounterStore.ts` will be gone.

```json
...
"experimentalDecorators": true,
...
```

add export to `CounterStore.ts`

```typescript
...
import { createContext } from 'react';

...

export const CounterStoreContext = createContext(new CounterStore());
```

go to `index.tsx` and wrap `App` with an `observer` from `mobx-react-lite`

```typescript
...
import { observer } from 'mobx-react-lite';

/* before : 
*   export const App = () => {
*     ...
*   }
*/

export const App = observer(() => {
  ...
})
```

add `counterStoreContext` and replace `count` to `counterStore.count`

```typescript
...
import React, { useContext } from 'react'
import { CounterStoreContext } from './stores/CounterStore'

export const App = observer(() => {
  const counterStore = useContext(CounterStoreContext);

  return (
    ...
      <Text>{counterStore.count}</Text>
      <Button title="increment" onPress={() => counterStore.count++}/>
    ...
  )
})
```

add script `watch` to `package.json` to make constant compiling during development.

```json
// package.json
...
scripts: {
  ...
  "watch": "tsc --watch"
}
...
```

make a new store called `workoutStore.ts` in `store/`, and declare a class

```typescript
class WorkoutStore {  
  currentSquat: number;
  currentBenchPress: number;
  currentShoulderPress: number;
  currentDeadlift: number;
  currentSitup: number;
}
```

this would make an error because of initialization, and we can detour it by making `strict` option in `tsconfig.json`.

```json
// tsconfig.json
...
  "strict": false,
...
```

back to WorkoutStore.ts, define a type and an interface(dictionary), then export it.

```typescript
import { createContext } from 'react'

type workoutType = 'a' | 'b'

interface workoutHistory {
  [key: string] : Array<{
    exercise: string,
    value: number
  }>
}

/* an example for the history object
{
  '02-18-2019' : [
    {
      excercise: 'squat',
      value: 90
    },
    {
      excercise: 'benchpress',
      value: 100
    }
  ]  
}
*/

class WorkoutStore {
  ...

  // define a type 
  lastWorkoutType: WorkoutType;

  // make a dictionary where date is the key,
  history: WorkoutHistory;
}

export const WorkoutStoreContext = createContext(new WorkoutStore());
```

---
