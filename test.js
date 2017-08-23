import test from 'ava'
import React from 'react'
import ReactAutoBinder from './index'

class MyComponent extends React.Component {
  constructor() {
    super()
    this.value = 42
  }

  getValue() {
    return this.value
  }

  updateValue(newValue) {
    this.value = newValue
  }
}

const BoundedComponent = ReactAutoBinder(MyComponent)

test('should be able to access unbounded methods', async t => {
  const component = new BoundedComponent()
  t.deepEqual(component.getValue(), 42)
})

test('should be able to access multiples unbounded methods', async t => {
  const component = new BoundedComponent()
  component.updateValue(123)
  t.deepEqual(component.getValue(), 123)
})
