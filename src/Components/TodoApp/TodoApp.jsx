import React, { useState } from 'react'
import './TodoApp.css'

export default function TodoApp() {
    let [list,setList]=useState([]);
    let [inputText,setInputtext]=useState('');
    let [editIndex, setEditIndex] = useState(null);
    let [counter,setCounter] = useState(0)
    let getInput =(e)=>{
        setInputtext(e.target.value)
        console.log(e.target.value)
    }
    let addTodo =()=>{
        setCounter(counter++)
        if(inputText===""){
            alert('enter value in the field')
        }else{
            if(editIndex !== null){
                setCounter(counter++)
               let copyList=[...list];
               copyList[editIndex] = inputText;
               setList(copyList);
               setEditIndex(null);
               
            }else{
                setList([...list, inputText])
            }
        }
    }
    let deleteTodoList=(e)=>{
        let copyList=[...list];
        copyList.splice(e,1);
        setList(copyList)
        console.log(e)
    }
    let editTodoList=(e)=>{
        setEditIndex(e)
        setInputtext(list[e])
        console.log(editIndex)
    }
    let deleteTodo=()=>{
        setList([])
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          addTodo();
        }
      };
  return (
    <div className='TodoApp'>
        <div className="container">
            <div className="row">
                <div className=" col-12 d-flex inputs">
                <input onKeyDown={handleKeyPress} onChange={getInput} placeholder='Enter Items' className='form-control' type="text" name="" id="" />
                <button onClick={addTodo} className='btn btn-light'>{editIndex !== null ? 'Edit Todo' : 'Add Item'}</button>
                <button onClick={deleteTodo} className='btn btn-danger'>Delete All</button>
                </div>
                <div className="list mt-0">                   
                    {
                        list.map((value,index)=>{
                            
                            
                            return   <div className="main d-flex" key={index} >
                    <div className='para'>
                        <p style={{fontSize:18, fontWeight:600}}>{value}</p>
                    </div>
                    <div className='button' style={{border:'none'}}>
                    <button  onClick={()=>{editTodoList(index)}} id='edit' style={{marginRight:10, border:'none',width:40, height:40, borderRadius:50, fontSize:18,color: 'lightgreen' }}><i class="fa-regular fa-pen-to-square"></i></button>
                        <button onClick={()=>{deleteTodoList(index)}} id='delete' style={{ border:'none',width:40, height:40, borderRadius:50, fontSize:18, color:'red' }}><i class="fa-solid fa-delete-left"></i></button>
                    </div>
                    </div>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}


