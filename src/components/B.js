import React, { Component } from 'react'

export default class B extends Component {
  render() {
    return (
      <div>
        <p>我是B组件，我要从我的容器组件拿到cityName的值</p>
        <p>{this.props.userinfo.city}</p>
      </div>
    )
  }
}