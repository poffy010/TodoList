import React, { Component } from 'react'
import {Input,Button,List} from 'antd'
import 'antd/dist/antd.css'
import store from './store/index'

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
                <Button type="primary">提交</Button>

                <List
                style={{margin:'10px 10px 10px 0px',width:'500px'}}
                bordered
                dataSource={this.state.list}
                renderItem={item => (
                    <List.Item>
                        {item}
                    </List.Item>
                )}
                />
            </div>
        )
    }

    handleInputChange(e){
        const action = {
            type : 'change_input_value',
            value : e.target.value
        }
        store.dispatch(action)

        // console.log(e.target.value)
    }

    handleStoreChange(){
        this.setState(store.getState())
    }
}

export default Todolist;