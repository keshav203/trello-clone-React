
import Appheader from "./components/Appheader";
import Pagecomponent from "./components/Pagecomponent";
import Sidemenu from "./components/SideMenu";
import { LeftOutlined , RocketFilled, StarOutlined , DownOutlined  } from '@ant-design/icons';
import { Menu,Image } from 'antd';
import React,{useEffect,useState} from 'react';

import "./trello.css";
// import { connect } from "formik";
const Trello = (props: any) => {
    return (
        <div className="App">
           <Appheader />
           <div className="HeaderTwo">
            <div className="left-content">
            <div className="zVAitUtsAALET4">
              
                        <div className="eayqvyAiIIKIVF">
                            <span className="tMbs11ZaaA00Bs">
                                <a className="xCguOZ9cqq39GJ" href="/w/userworkspace94908048">
                                   
                                    <p className="pJn5CPuDugCNoN">Trello Workspace</p></a>
                                    </span>
                                    <p className="xA6qXDYKXT21gE">Free</p>
                                    </div>
                                        
                                        </div>
            </div>
            <p style={{color:'white',marginLeft:-10}}> <LeftOutlined /></p>
            <div className="between-content">
               <p> <span style={{fontSize:16,fontWeight:'bold'}}> Keshav board </span> <StarOutlined style={{marginLeft:20}}/> </p>
                <p><RocketFilled /> Workspace visible </p>
                <p style={{ backgroundColor: '#dfe1e5',color:'black', width: 65, height: 29, display: 'flex', alignItems: 'center' }}>
  <span style={{ padding: 2 }}> <RocketFilled /> Board </span>
</p>

               <p><DownOutlined /></p>
              
            </div>
            <div className="right-content">
            <p><RocketFilled />  Power-Ups</p>
               <p><RocketFilled />  Automation</p>
               <p> <RocketFilled /> Filter</p>
              <p> <Image width={25} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Eo_circle_yellow_letter-k.svg/1200px-Eo_circle_yellow_letter-k.svg.png'></Image>  </p>
   
              <p style={{ backgroundColor: '#dfe1e5',color:'black', width: 65, height: 29, display: 'flex', alignItems: 'center' }}>
  <span style={{ padding: 2 }}> <RocketFilled /> Share </span>
</p>
               <p>...</p>
            </div>
           </div>
      <div className='SideMenuAndPageContent'>
        
       <Sidemenu />
        <Pagecomponent></Pagecomponent>
      </div> 
    {/* <Footer/> */}
        </div>
    )
}



  
  export default Trello;
  
