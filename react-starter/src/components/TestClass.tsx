import React, { Component } from 'react'

interface State {
  a: number
}

export class TestClass extends Component<{}, State> {
  state:State = {
    a: 1
  }

  test = () => {
    console.log(this.state.a)
    this.setState({a: this.state.a + 1})
    console.log(this.state.a)
    this.setState({a: this.state.a + 1})
    console.log(this.state.a)
  }

  test2 = () => {
    console.log(this.state.a)
    this.setState(state => ({a: state.a + 1}))
    console.log(this.state.a)
    this.setState(state => ({a: state.a + 1}))
    console.log(this.state.a)
  }

  render() {
    const {a} = this.state
    return (
      <div>
        <h2>test class component</h2>
        <p>{a}</p>
        <button onClick={this.test}>新增方式一</button>
        <button onClick={this.test2}>新增方式二</button>
      </div>
    )
  }
}

export default TestClass
