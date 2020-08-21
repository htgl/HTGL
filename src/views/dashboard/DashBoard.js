import React, { Component } from 'react'
import User from '../usermanage/User';
import Manage from '../rightmanage/Manage';
import Role from '../rightmanage/Role';
import Right from '../rightmanage/Right';
import NotFound from '../error/Error';
import Home from '../home/Home'
import {
    Route, 
    Redirect, 
    Switch, 
} from 'react-router-dom'
import './Dashboard.css'
import List from '../articlemanage/List';
import Preview from '../articlemanage/Preview';

import { Layout } from 'antd';
import TopHeader from './TopHeader'
import SideMenu from './SideMenu'
const { Content } = Layout;


export default class DashBoard extends Component {

    componentDidMount() {
        // console.log(this.props)
    }

    render() {
        return (
            <Layout style={ {height:"100%"} }>
                {/* <SideMenu kerwinhitory={this.props.history}></SideMenu> */}
                <SideMenu></SideMenu>
                <Layout className="site-layout">
                    <TopHeader></TopHeader>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Switch>
                            {/* 首页 */}
                            <Route path="/home" component={Home} />

                            {/* 用户管理-用户列表 */}
                            <Route path="/user-manage/users" component={User} />

                            {/* 文章管理 -列表 ,预览(动态路由组件) */}
                            <Route path="/article-manage/list" render={(props)=>
                                <List {...props}></List>
                            }/>
                            <Route path="/article-manage/preview/:myid" component={Preview} />

                            {/* <Route path="/right-manage" component = {Manage}/> */}

                            {/* 权限管理- 角色和权限 */}
                            <Route path="/right-manage" render={() =>
                                <Manage>
                                    <Switch>
                                        <Route path="/right-manage/roles" component={Role} />
                                        <Route path="/right-manage/rights" component={Right} />
                                        <Redirect from="/right-manage" to="/right-manage/roles" />
                                    </Switch>
                                </Manage>
                            } />
                            {/* 重定向 */}
                            <Redirect from="/" to="/home" exact />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
