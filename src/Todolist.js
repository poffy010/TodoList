import React, { Component } from 'react'
import {Input,Button,List} from 'antd'
import 'antd/dist/antd.css'
import store from './store/index'
// import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DEL_TODO_ITEM} from './store/actionTypes'
import {getInputChangeAction,getAddTodoItemAction,getDelTodoItemAction} from './store/actionCreators'

// const data = [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing wedding girl.',
//     'Los Angeles battles huge wildfires.',
//   ];

class Todolist extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        //this.deleteItem = this.deleteItem.bind(this);
        store.subscribe(this.handleStoreChange);
        // console.log(this.state)
    }

    render (){
        return (
            <div style={{margin:'10px 10px 10px 10px'}}>
                <Input 
                    value={this.state.inputValue} 
                    placeholder="请输入" 
                    style={{width:'300px',marginRight:'10px'}}
                    onChange={this.handleInputChange}
                ></Input>
                <Button type="primary" onClick={this.handleButtonClick}>提交</Button>

                <List
                style={{margin:'10px 10px 10px 0px',width:'500px'}}
                bordered
                dataSource={this.state.list}
                renderItem={(item,index) => (
                    <List.Item onClick={this.deleteItem.bind(this,index)}>
                        {item}
                    </List.Item>
                )}
                />
            </div>
        )
    }

    handleInputChange(e){
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action)
    }

    handleButtonClick(e){
        const action = getAddTodoItemAction();
        store.dispatch(action)
    }

    deleteItem(index){
        const action = getDelTodoItemAction(index);
        store.dispatch(action)
    }

    handleStoreChange(){
        this.setState(store.getState())
    }
}

export default Todolist;