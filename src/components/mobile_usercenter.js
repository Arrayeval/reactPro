import React from "react"
import {Row,Col} from 'antd'
import {Link} from "react-router-dom"
import MobileHeader from "./mobile_header"
import MobileFooter from "./mobile_footer"
import { Menu, Icon ,Tabs,message,Form,Input,Button,CheckBox,Modal,Card,notification} from 'antd';
const FormItem =Form.Item;
const SubMenu =Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;
export default class MobileUserCenter extends React.Component{
  render(){
    return(
      <div>
      <MobileHeader/>
      <Row>
        <Col span={2}></Col>
        <Col span={20}>
        <Tabs>
         <TabPane tab="我的收藏列表" key="1">   </TabPane>
         <TabPane tab="我的评论列表" key="2">   </TabPane>
         <TabPane tab="头像设置" key="3">   </TabPane>
        </Tabs>
        </Col>
      </Row>
      <Col span={2}></Col>
      <MobileFooter/>
      </div>
    )
  }
}
