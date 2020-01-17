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
react-native init MyAwesomeProject --template typescript
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

