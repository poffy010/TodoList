import React ,{Component,Fragment} from 'react';
import './style.css'
import TodoItem from './TodoItem';
// import axios from 'axios';

class Todolist extends Component {
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.hanleButtonClick = this.hanleButtonClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            inputValue : '',
            list : [],
        }
    }

    render (){
        return (
            <Fragment>
            <div>
                请输入内容<input 
                    className='input'
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    ref={(input)=>{this.input = input}}
                />
                <button 
                onClick={this.hanleButtonClick}
                >提交</button>
            </div>
            <ul>
                {this.getTodoItem()}
            </ul>
            </Fragment>
        )
    }

    componentDidMount(){
        // axios.get('/api/todolist')
        // .then((res)=>{
        //     console.log(res.data)
        //     this.setState(()=>{
        //         return {list : res.data};
        //     });
        // }).catch(()=>{
        //     alert('error')
        // })
    }

    getTodoItem(){
        // console.log("this.state",this.state)
        return this.state.list.map((item,index)=>{                  
            return (
               <Fragment key={index}>
                    <TodoItem 
                    content={item} 
                    index={index}
                    deleteItem={this.handleDelete}
                    key={index}/>
                    {/*<li 
                    key={index} 
                    onClick={this.handleDelete.bind(this,index)}
                    dangerouslySetInnerHTML={{__html:item}}>
                    </li>*/}
               </Fragment>
            )
        })
    }

    handleInputChange(e){
        const value = this.input.value;
        this.setState(()=>({inputValue : value}));
    }

    hanleButtonClick(){
        // console.log("this",this)
        this.setState(()=>({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        }))
    }

    handleDelete(index){   
        this.setState((prevState)=>{
            const list = [...prevState.list]
            list.splice(index,1);
            return {list}
        })
    }
}

export default Todolist