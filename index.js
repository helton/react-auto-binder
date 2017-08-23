const ReactAutoBinder = Component => class extends Component {
  constructor(...params) {
    super(...params)

    const methodsToIgnore = [
      'componentDidMount',
      'componentDidUpdate',    
      'componentWillMount',
      'componentWillReceiveProps',
      'componentWillUnmount',
      'componentWillUpdate',
      'constructor',
      'render',
      'shouldComponentUpdate'
    ]
    
    Object.getOwnPropertyNames(Component.prototype).forEach(propertyName => {
      const property = Component.prototype[propertyName];
      if ((typeof property === 'function') && !(methodsToIgnore.includes(propertyName))) {
        this[propertyName] = (...params) => {
          return super[propertyName].bind(this)(...params)
        }
      }
    })
  }
}

module.exports = ReactAutoBinder