import React, { useState } from 'react';
import { EditOutlined, DeleteOutlined, MenuOutlined, PlusOutlined, BorderInnerOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';

function ListComponent(props: {filterType : any,textTitle:string,setTextTitle:any, todoAddButton:any, title: string ,todo :any,showModal :any,PassModal:any,selectedTodo:any}) {
    const [addButton, setAddButton] = useState<boolean>(props.todoAddButton);
    const [isDisabled,setIsDisabled] = useState<boolean>(true)
    return (
      <div style={{backgroundColor:'#f7f8f9',borderRadius:8,padding:10,width:260}}>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10}}>
       
        <h4 style={{fontWeight:'bold'}}>{props.title}</h4>
        <h2 style={{marginTop:-5,marginLeft:'auto',color:'#616f86'}}>...</h2>  
        </div>
        <div>
        {props.todo.todo.todos?.filter((item: any) => item.status === props.filterType).map((item:any,i:number)=>(
          <div className='Editable' key={i}  style={{height:57,borderRadius:8,marginBottom:5,margin:6,width:237,padding:6,marginLeft:-0.1,backgroundColor:'#ffffff'}}>
           <div style={{padding:4}}>
           <div  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>{item.title}</span>
          <span  className='edit'>
            <EditOutlined onClick={() =>{
            props.showModal();
            props.PassModal(item);
            
        }}
        /> 
         <DeleteOutlined style={{color:'red' }} onClick={ () =>{ 
          // props.PassModal(item);
          props.todo.deleteTodo(
                item
              )}} /> 
              
              </span>
            </div>
  
           <p> <MenuOutlined /> </p>
           </div>         
             </div>
                  ))}
  
                <div   style={{backgroundColor:'#f1f2f4'}}>
                  </div>
              </div>
              { addButton === true &&
            <div>
              <Input
              value={props.textTitle}
              onChange={(e) => props.setTextTitle(e.target.value)}
              placeholder="Enter a title ..."
              style={{
                height: '53px',
                borderRadius: '8px',
                backgroundColor: 'white'
              }}
            />
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10}}>
        <Button disabled={props.textTitle.length < 1 ? true : false} onClick={()=>{
          props.todo.addTodos(
              {
            title:props.textTitle,
            description:'',
            status:props.filterType
              }
            )
            props.setTextTitle('')
        }} style={{backgroundColor: props.textTitle.length > 0 ? '#0c66e4' : '#6bafee',color:'white'}}>Add card</Button>
        <h2 onClick={()=> setAddButton(false)} style={{marginTop:10,color:'#616f86'}}>X</h2>
        <h2 style={{marginTop:-5,marginLeft:'auto'}}>...</h2>
        </div>
        </div>
        
  
        }
  
        {!addButton ? (
              <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10}}>
              <h4 style={{marginTop:10}}><PlusOutlined /></h4>
            
              <h4 onClick={()=> setAddButton(true)} style={{marginTop:10,color:'#616f86'}}> Add a card</h4>
              <h2 style={{marginTop:5,marginLeft:'auto',fontSize:16}}><BorderInnerOutlined /></h2>
              </div>
        ) : null
              }
            </div>
    );
  }

  export default ListComponent;