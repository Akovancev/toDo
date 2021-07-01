import React from 'react';
import { divStyles, inputStyles, buttonStyles, pStyle } from './styleAuthorization';

export class Authorization extends React.Component {
    render() {
        return (
            <div className="App" style={divStyles}>
                <p style={pStyle}>Authorization</p>
                <input style={inputStyles} />
                <input type="password" style={inputStyles} />
                <button style={buttonStyles}>Sign in</button>
            </div>
        )
    }
}