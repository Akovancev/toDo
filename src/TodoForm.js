import React from "react";

export default class TodoForm extends React.Component {
    render() {
        return (
            <input value={this.props.newItem} onChange={this.props.onChange} />
        );
    }
}