import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React,{useEffect,useState} from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

function Sidemenu() {
    const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

    const navigate = useNavigate()
  return (
    <div className='Sidemenu'>
     
      <Menu mode="vertical" style={{ backgroundColor: '#425158', height:'100%', borderBottom:'none',opacity:0.7,width:200}}>
      <Menu.Item key="dashboard" icon={<AppstoreOutlined />}>
        Boards
      </Menu.Item>
      <Menu.Item key="members" icon={<ShopOutlined />}>
        Members
      </Menu.Item>
      <Menu.Item key="settings" icon={<UserOutlined />}>
        Workspace settings
      </Menu.Item>
      <Menu.Item key="views" icon={<UserOutlined />}>
        Workspace views
      </Menu.Item>
      <Menu.Item key="table" icon={<UserOutlined />}>
        Table
      </Menu.Item>
      <Menu.Item key="calender" icon={<UserOutlined />}>
        Calender
      </Menu.Item>
      <Menu.Item key="customers" icon={<UserOutlined />}>
        Your boards
      </Menu.Item>
    </Menu>
    </div>
  );
}

export default Sidemenu;
