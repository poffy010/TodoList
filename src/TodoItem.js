import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    render(){
        const {content,test} = this.props;
        return <div 
                onClick={this.handleClick}>
                    {test} - {content}
                </div>
    }

    handleClick(){
        const {deleteItem,index} = this.props;
        deleteItem(index);
        //alert(this.props.index)
    }
}
TodoItem.proptype = {
    test : PropTypes.string.isRequired,
    content : PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    deleteItem : PropTypes.func,
    index : PropTypes.number,
}
TodoItem.defaultProps = {
    test : 'Hello World',
}

export default TodoItem