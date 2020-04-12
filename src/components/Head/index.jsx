import React from 'react';

import { Menu, Row, Col } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import './index.less';
import MenuItem from 'antd/lib/menu/MenuItem';


const { SubMenu } = Menu;

function Logo() {
  return (
    <div className="logo">
      <h1>What</h1>
    </div>
  )
}

function HeadRight(props) {
  return (
    <div className='head-right'>
      <Menu mode="horizontal" theme={props.theme}>
        <MenuItem key="r1">
          <MailOutlined />
        </MenuItem>
        <MenuItem key="r2">
          <MailOutlined />
        </MenuItem>
        <MenuItem key="r3">
          <MailOutlined />
        </MenuItem>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <SettingOutlined />
              Submen
            </span>
          }
        >
          <Menu.ItemGroup title="Item3">
            <Menu.Item key="setting:11">Option 1</Menu.Item>
            <Menu.Item key="setting:22">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item4">
            <Menu.Item key="setting:33">Option 3</Menu.Item>
            <Menu.Item key="setting:44">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <SettingOutlined />
              Three
            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </div>
  )
}

class Head extends React.Component {
  state = {
    current: 'mail',
    theme: 'dark',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <div className='head-wrapper'>
        <div className="head-main">
          <Row>
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
              <Logo />
            </Col>
            <Col xs={14} sm={12} md={12} lg={12} xl={12}>
              <div className="navbar">
                <Menu onClick={this.handleClick} theme={this.state.theme} selectedKeys={[this.state.current]} mode="horizontal">
                  <Menu.Item key="mail">
                    <MailOutlined />
                One
              </Menu.Item>
                  <Menu.Item key="app" disabled>
                    <AppstoreOutlined />
                Two
              </Menu.Item>
                  <SubMenu
                    title={
                      <span className="submenu-title-wrapper">
                        <SettingOutlined />
                    Three-Submenu
                  </span>
                    }
                  >
                    <Menu.ItemGroup title="Item 1">
                      <Menu.Item key="setting:1">Option 1</Menu.Item>
                      <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                      <Menu.Item key="setting:3">Option 3</Menu.Item>
                      <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                  </SubMenu>
                  <Menu.Item key="alipay">
                    <MailOutlined />
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                      Four-Link
                </a>
                  </Menu.Item>
                </Menu>
              </div>
            </Col>
            <Col xs={6} sm={8} md={8} lg={8} xl={8}>
              <HeadRight theme={this.state.theme} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Head