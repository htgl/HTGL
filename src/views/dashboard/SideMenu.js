import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import menus from '../../router/menu'
import { withRouter } from 'react-router' 
const { Sider } = Layout;
const { SubMenu } = Menu;


 class SideMenu extends Component {
    state = {
        collapsed: false
    }
    render() {
        var pathname = this.props.location.pathname
        var OpenKeys  = ["/"+pathname.split("/")[1]]
        var SelectedKeys = [pathname]
        return (
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" 
                onClick={this.handleClick} defaultOpenKeys={OpenKeys}
                defaultSelectedKeys = {SelectedKeys}
                >
                    {this.renderItem(menus)}
                </Menu>
            </Sider>
        )
    }

    handleClick = (obj)=>{
        console.log("11111",obj.key)
        this.props.history.push(obj.key)
    }

    renderItem = (menus) => {
        return menus.map(item => {
            if (item.children) {
                return (
                    <SubMenu
                        key={item.path}
                        title={
                            <span>
                                <item.icon/>
                                <span>{item.title}</span>
                            </span>
                        }
                        
                    >
                        {
                            this.renderItem(item.children)
                        }
                    </SubMenu>
                )
            } else {
                return (
                    <Menu.Item key={item.path}>
                        <item.icon/>
                        <span>{item.title}</span>
                    </Menu.Item>
                )
            }
        }
        )
    }
}
export default withRouter(SideMenu)