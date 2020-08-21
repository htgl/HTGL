import React, { Component } from 'react'
// import {Route} from 'react-router-dom'
// import Role from './Role'
// import Right from './Right'
export default class Manage extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>权限列表</li>
                    <li>角色列表</li>
                </ul>

                {this.props.children}
            </div>
        )
    }
}
