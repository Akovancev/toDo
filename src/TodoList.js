import React from "react";

export default class TodoList extends React.Component {

    render() {
        return (
            <div>
                {this.props.allItems.map((item, i) => {
                    return (
                        <div>
                            <input name={i} type="checkbox" checked={item.isChecked} onChange={this.props.onChange} />
                            <div>
                                {item.name}
                            </div>
                            <button name={i} onClick={this.props.onDelete}>Delete</button>
                        </div>
                    )
                })}
            </div>
        );
    }
}
