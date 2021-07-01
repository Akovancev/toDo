import React from 'react';
import { Link } from 'react-router-dom'
import { Consumer } from '../../Context';
import { divStyles, inputStyles, buttonStyles, pStyle, linkStyle } from './styleAuthorization';

export const Authorization = () => {
    return (
        <Consumer>
            {context => (
                <div className="App" style={divStyles}>
                    <p style={pStyle}>Authorization</p>
                    <input style={inputStyles} />
                    <input type="password" style={inputStyles} />
                    <Link style={linkStyle} to="/todo">
                        <button onClick={context.Auth} style={buttonStyles}>Sign in</button>
                    </Link>
                </div>
            )}
        </Consumer>
    )
}

