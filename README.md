# react-auto-binder [![Build Status](https://travis-ci.org/helton/react-auto-binder.svg?branch=master)](https://travis-ci.org/helton/react-auto-binder)

> :rocket: Auto bind the custom methods of your React components

**ReactAutoBinder** is a **higher order component** that bind *this* to all custom methods on your React component class (just use `ReactAutoBind(YourComponent)` when export it)

## Install

### NPM
```sh
$ npm install react-auto-binder --save
```

### Yarn
```sh
$ yarn add react-auto-binder
```

## Usage

```js
import React from 'react'
import ReactAutoBinder from 'react-auto-binder'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      text: 'default'
    }
  }

  handler() {
    this.setState({ text: this.refs.input.value })
  }

  render() {
    return (
      <div>
        <input type="text" ref="input" onChange={this.handler}/>
        <h1>{this.state.text}</h1>
      </div>
    )
  }
}

export default ReactAutoBinder(App)
```


## License

MIT © [Helton Carlos de Souza](http://helton.me)