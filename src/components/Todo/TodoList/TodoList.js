import React from "react";
import { divStyles, textStyles, inputStyles, deleteStyles } from "./stylesList";

export default class TodoList extends React.Component {
    render() {
        return (
            <div>
                {this.props.allItems.map((item, i) => {
                    let textStyle = Object.assign({}, textStyles)
                    if (item.isChecked) {
                        textStyle.textDecoration = 'line-through'
                    }
                    else {
                        textStyle.textDecoration = 'none'
                    }
                    return (
                        <div key={i} style={divStyles} className="listElement" >
                            <input style={inputStyles} name={i} type="checkbox" checked={item.isChecked} onChange={this.props.onChange} />
                            <div style={textStyle} >
                                {item.name}
                            </div>
                            <img style={deleteStyles} name={i} onClick={this.props.onDelete} src="https://www.eromatica.com/img/delete-button.svg" />
                        </div>
                    )
                })}
            </div>
        );
    }
}
