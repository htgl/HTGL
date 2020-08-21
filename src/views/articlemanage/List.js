import React, { Component } from 'react'

export default class List extends Component {
    state = {
        datalist:["111","222","3333"]
    }
    render() {
        return (
            <div>
                {this.state.datalist.map(item=>
                    <li key={item} onClick={()=>this.handleClick(item)}>{item}</li>    
                )}
            </div>
        )
    }

    handleClick = (id)=>{
        this.props.history.push(`/article-manage/preview/${id}`)
    }
}
