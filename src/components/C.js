import React, { Component } from 'react'

export default class B extends Component {

  changeValue = () => {
    console.log('要修改啦')
    const actions = this.props.actions
    actions.login({
      userid:456456,
      city:'西安'
    })
  }

  render() {
    return (
      <div>
        <p>我是C组件，我要改变redux中的值，嘿嘿~</p>
        <div onClick={this.changeValue}>点我修改~</div>
      </div>
    )
  }
}