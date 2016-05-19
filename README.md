[![Build Status](https://travis-ci.org/mondora/react-native-storage-wrapper.svg?branch=master)](https://travis-ci.org/mondora/react-native-storage-wrapper)
[![codecov.io](https://codecov.io/github/mondora/react-native-storage-wrapper/coverage.svg?branch=master)](https://codecov.io/github/mondora/react-native-storage-wrapper?branch=master)
[![Dependency Status](https://david-dm.org/mondora/react-native-storage-wrapper.svg)](https://david-dm.org/mondora/react-native-storage-wrapper)
[![devDependency Status](https://david-dm.org/mondora/react-native-storage-wrapper/dev-status.svg)](https://david-dm.org/mondora/react-native-storage-wrapper#info=devDependencies)
[![peerDependency Status](https://david-dm.org/mondora/react-native-storage-wrapper/peer-status.svg)](https://david-dm.org/mondora/react-native-storage-wrapper#info=peerDependencies)

# react-native-storage-wrapper

A wrapper for React-Native's AsyncStorage.

## Install

```sh

npm i --save react-native-storage-wrapper

```

## Usage

```js

import storage from "react-native-storage-wrapper";

storage.get("key"); // --> returns a Promise

storage.set("key", "value"); // --> returns a Promise

storage.del("key"); // --> returns a Promise

```

## Usage with [asteroid](https://git.io/vr031)

```js

import {createClass} from "asteroid";
import storage from "react-native-storage-wrapper";

const Asteroid = createClass();
// Connect to a Meteor backend
const asteroid = new Asteroid({
    endpoint: "ws://localhost:3000/websocket",
    storage: storage
});

```

## API

### .get("key")

Fetches key from `AsyncStorage` with method `getItem`.

##### Arguments

* `key` **String** _required_: `key` to fetch in `AsyncStorage`

##### Returns

A `Promise` object. If there is any, throw an `Error`

---

### .set("key", "value")

Sets value for key from `AsyncStorage` with method `setItem`.

##### Arguments

* `key` **String** _required_: `key` saved in `AsyncStorage`

* `value` **String** _required_: `value` saved in `AsyncStorage`

---

### .del("key")

Remove item with selected `key` from `AsyncStorage` with method `removeItem`.

##### Arguments

* `key` **String** _required_: `key` to remove from `AsyncStorage`
