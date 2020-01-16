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
