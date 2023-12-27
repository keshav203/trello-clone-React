import { BellFilled, MailOutlined } from '@ant-design/icons';
import { Badge, Image, Space, Typography,Menu,Input } from 'antd';
import { OneToOneOutlined,QuestionCircleOutlined  , BorderVerticleOutlined ,DownOutlined , ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

import React from 'react';

function Appheader() {
  return (
    <div className='Appheader'>
    <div style={{ width: 700,backgroundColor:'#425158' }}> 
    <Menu mode="horizontal" style={{ backgroundColor: 'transparent' }}>
    <Menu.Item key="dasard"  style={{ fontSize: '19px',fontWeight:'bold' }}>
    <BorderVerticleOutlined style={{ fontSize: '18px' }} /> <OneToOneOutlined style={{ fontSize: '18px' }}/> TRELLO
     
      </Menu.Item>
      <Menu.Item key="dashboard" >
        Workspaces <DownOutlined />
      </Menu.Item>
      <Menu.Item key="inventory" >
      Recents <DownOutlined />
      </Menu.Item>
      <Menu.Item key="orders" >
          Starred <DownOutlined />
        </Menu.Item>
        <Menu.Item key="customers" >
          Templates <DownOutlined />
        </Menu.Item>
       
    </Menu>
    </div>
    <div style={{ width: 400,}}>
    <Space size={25}>
<input data-test-id="search-dialog-input" placeholder="Search"   className="css-stjhtl" value=""></input>
         <MailOutlined style={{fontSize:
        20,color:'white'}} />
        <QuestionCircleOutlined  style={{fontSize:20,color:'white'}}/>
        <BellFilled style={{fontSize:20,color:'white'}}/>
        <Image width={25} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Eo_circle_yellow_letter-k.svg/1200px-Eo_circle_yellow_letter-k.svg.png'></Image>  
   
    </Space>
      </div>
      </div>
  );
}

export default Appheader;
