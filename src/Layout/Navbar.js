import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import "./NavBar.css";

const { Header } = Layout;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class NavBar extends Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div className="header-layout">
        <Header>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            theme="light"
          >
            <Menu.Item key="home">
              <Link to="">
                <Icon type="profile" />
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="publications">
              <Link to="">
                <Icon type="file-done" />
                Publications
              </Link>
            </Menu.Item>
            <Menu.Item key="teaching">
              <Link to="">
                <Icon type="read" />
                Teaching
              </Link>
            </Menu.Item>
            <Menu.Item key="software">
              <Link to="">
                <Icon type="branches" />
                Software
              </Link>
            </Menu.Item>
            <Menu.Item key="personal">
              <Link to="">
                <Icon type="user" />
                Personal
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
      </div>
    );
  }
}
export default NavBar;
