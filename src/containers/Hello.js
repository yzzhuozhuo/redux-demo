import React, { Component } from 'react'
import { connect } from 'react-redux'
import A from '../components/A'
import B from '../components/B'
import C from '../components/C'
// import { login , updataCityName } from '../actions/index'
import { bindActionCreators } from 'redux'
import * as userinfoActions from '../actions/index'


class Hello extends Component {

  componentDidMount() {
    // 模拟登录
    this.props.userinfoActions.login({
      userid: 123123,
      city: '北京'
    })
  }

  render() {
    return (
      <div>
        <p>Hello World</p>
        <A userinfo={this.props.userinfo} />
        <B userinfo={this.props.userinfo} />
        <C actions={this.props.userinfoActions} />
      </div>
    )
  }
}

// function mapStateToProps(state){
//   return{
//     userinfo: state.userinfo
//   }
// }

// function mapDispathToProps(dispatch) {
//   return {
//     userinfoActions: bindActionCreators(userinfoActions, dispatch)
//   }
// }
// userinfo: state.userinfo  这里的userinfo 就是combinReducers 时定义的key值，也就是state的属性名
// 例如
{/*const rootReducer = combineReducers ({
  userinfo,
})*/}

export default connect(
  (state) => ({ userinfo: state.userinfo }),
  (dispatch) => ({ userinfoActions: bindActionCreators(userinfoActions, dispatch) })
)(Hello)
// export default connect(
//   state => ({ userid: state.userid, city: state.city}),
//   { login, updataCityName }
// )(Hello)

// export default connect(
//   // 这里的state，就是公共容器中的state，而不是当前组件的state。在这里定义了之后，在当前组件中，就可以通过this.props.music拿到该对象
//   state => ({ result: state.result, score: state.score }),
//   { sScore },
// )(DataAsset)