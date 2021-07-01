import React from "react";
import { divStyles, inputStyles } from "./stylesForm";

export default class TodoForm extends React.Component {
    render() {
        return (
            <div style={divStyles} >
                <input style={inputStyles} value={this.props.newItem} onChange={this.props.onChange} onKeyDown={this.props.onKeyDown} />
            </div>
        );
    }
}