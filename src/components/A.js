import React, { Component } from 'react'
 class A extends Component {
  render() {
    return (
      <div>
        <p>我是A组件，我要展示从我的容器组件拿到的userid的值</p>
        <p>{this.props.userinfo.userid}</p>
      </div>
    )
  }
}
export default A;