import { Button,Select, Card, Input, Modal } from 'antd';
import React,{useState,useEffect} from 'react';
import { MenuOutlined,CompassOutlined ,CopyOutlined, EyeOutlined , UserOutlined,CheckSquareOutlined,CalendarOutlined ,FileTextOutlined} from '@ant-design/icons';
import { useSelector, useDispatch,connect } from 'react-redux';
import TodoContainer from '../../../../store/container/TodoContainer';
import ListComponent from './ListComponent';
const { Option } = Select;
const menuItems = [
  {
    label: 'Members',
    icon: <UserOutlined />,
  },
  {
    label: 'Labels',
    icon: <CopyOutlined />,
  },
  {
    label: 'CheckList',
    icon: <CheckSquareOutlined />,
  },
  {
    label: 'Dates',
    icon: <CalendarOutlined />,
  },
  {
    label: 'Attachments',
    icon: <FileTextOutlined />,
  },
  {
    label: 'Cover',
    icon: <CopyOutlined />,
  },
  {
    label: 'Custom Field',
    icon: <CompassOutlined />,
  },
];

const CardMenu = () => (
  <div style={{ padding: 10, display: 'flex', justifyContent: 'center', gap: 20, flexDirection: 'column' }}>
    <p>Add to card</p>
    {menuItems.map(({ label, icon }) => (
      <p key={label} style={{ fontSize: 13, border: 'none', marginTop: -10, color: '#182a4f' }}>
        {icon} {label}
      </p>
    ))}
  </div>
);


function Pagecomponent(props:any) {

type selectedProps ={
  title:string,
  description:string,
  status:string
}

  const [todoAddButton, setTodoAddButton] = useState<boolean>(false);
  const [doingAddButton, setDoingAddButton] = useState<boolean>(false);
  const [doneAddButton, setDoneAddButton] = useState<boolean>(false);
  const [descButton, setDescButton] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<selectedProps>({title:'',description:'',status:''});
  const [visible, setVisible] = useState<boolean>(false);
  const [todoValue,setTodoValue] = useState<string>('');
  const [doingValue,setDoingValue] = useState<string>('');
  const [doneValue,setDoneValue] = useState<string>('');
  const [desc,setDesc] = useState<string>('');
  const [status,setStatus] = useState<string>('');

useEffect(() => {
  console.log(props,'todoDatatodoData')
}, [props]);

  const PassModal =(item:{title:string,description:string,status:string}) =>{ 
    setSelectedTodo(item)
    setDesc(item.description)
  }
  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <div className='Pagecontent'>
     <div style={{margin:10,padding:10,display:'flex',justifyContent:'space-between',gap:'50px',alignItems:'flex-start'}}>
   
         <ListComponent filterType='todo' textTitle={todoValue} setTextTitle={setTodoValue} todoAddButton={todoAddButton} title="To Do" todo={props} showModal={showModal} PassModal={PassModal} selectedTodo={selectedTodo}  />

          <ListComponent filterType='doing' textTitle={doingValue} setTextTitle={setDoingValue} todoAddButton={doingAddButton} title="Doing" todo={props} showModal={showModal} PassModal={PassModal} selectedTodo={selectedTodo}  />

          <ListComponent filterType='done' textTitle={doneValue} setTextTitle={setDoneValue} todoAddButton={doneAddButton} title="Done" todo={props} showModal={showModal} PassModal={PassModal} selectedTodo={selectedTodo}  />


          <div   style={{backgroundColor:'#f1f2f4'}}>
        <Modal
         footer={null}  
        width={700}
       style={{marginTop:30}}
        visible={visible}
        // onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
        <p style={{fontWeight:'900',fontSize:17,marginBottom:0}}> <span style={{marginRight:5}}> <MenuOutlined /> </span>{selectedTodo.title}</p>   
        </div>
        <div style={{display:'flex',justifyContent:'space-between',width:600}}><div>
        <div style={{marginLeft:25}}>
        <p>in List Todo</p>
        <p style={{fontSize:12,marginTop:0}}>Notifications</p>
        <Button onClick={()=> {
            props.deleteTodo(
              selectedTodo
            )
        }} style={{fontSize:12,border:'none',backgroundColor:'#e4e6ea',color:'#182a4f'}}><EyeOutlined />Watch</Button>
     </div>
     <div style={{display:'flex',marginTop:22,alignItems:'center'}}>
     <p style={{fontWeight:'900',fontSize:17,marginBottom:0}}> <span style={{marginRight:5}}> <MenuOutlined /> </span>{' '}  Description</p>
     
      <Button onClick={() => setDescButton(true)} style={{fontSize:12,border:'none',marginLeft:5,backgroundColor:'#e4e6ea',color:'#182a4f'}}>Edit</Button>
     </div>
      {descButton ? (
          <div style={{margin:10}}>
        <Input
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Enter ..."
        style={{
          height: '103px',
          borderRadius: '8px',
          backgroundColor: 'white'
        }}
      />
              <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10,marginTop:5}}>
              <Button onClick={()=> { props.updateTodo( {
        title:selectedTodo.title,
        description:desc });
        setVisible(false);
              }
        } style={{backgroundColor:'#0c66e4',color:'white'}}>Save</Button>
              <h2 onClick={()=> setDescButton(false)} style={{marginTop:10,fontSize:15,color:'#616f86'}}>Cancel</h2>
              <h2 style={{marginTop:-5,fontSize:12,color:'blue',letterSpacing:1, marginLeft:'auto'}}><MenuOutlined /> Share Feedback</h2>
              </div>
        </div>  ) : <p onClick={()=> setDescButton(true)} style={{marginLeft:29,marginTop:20}}>{selectedTodo.description}</p>
            }


     <div style={{display:'flex',width:400,marginTop:22,alignItems:'center'}}>
     <p style={{fontWeight:'900',fontSize:17,marginBottom:0}}> <span style={{marginRight:5}}> <MenuOutlined /> </span>{' '}  Activity</p>
     
      <Button onClick={() => {
        props.deleteTodo(
          selectedTodo
        )
        setVisible(false);
        }}  style={{fontSize:13,border:'none',marginLeft:'auto',backgroundColor:'#e4e6ea',color:'#182a4f'}}>Delete Todo</Button>

    
       </div>
       <div style={{display:'flex',width:400,marginTop:22,alignItems:'center'}}>
     <p style={{fontWeight:'900',fontSize:17,marginBottom:0}}> <span style={{marginRight:5}}> <MenuOutlined /> </span>{' '} Status</p>
     
    
            <Select
            onChange={(selectedOption) => {
              props.updateStatusTodo({
                title: selectedTodo.title,
                description: desc,
                status: selectedOption,
              });
              setVisible(false);
            }}
            value={selectedTodo.status}
             style={{ width: 120,marginLeft:20 }}>
         <Option value="todo">To do</Option>
      <Option value="doing">Inprogress</Option>
      <Option value="done">Completed</Option>
    </Select>
    
       </div>
       </div>
        <div>
       <div style={{padding:10,display:'flex',justifyContent:'center',gap:20,flexDirection:'column'}}>
     <CardMenu />
       </div>
       </div>
     </div>
      </Modal>
      </div>
          </div>
          </div>
        );
}


export default TodoContainer(Pagecomponent);

