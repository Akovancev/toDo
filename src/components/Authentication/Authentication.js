import React from 'react';
import { Link } from 'react-router-dom'
import { Consumer } from '../../Context';
import { divStyles, inputStyles, buttonStyles, pStyle, linkStyle } from './styleAuthentication';

export const Authentication = () => {
    return (
        <Consumer>
            {context => (
                !context.isAuth ?
                    <div className="App" style={divStyles}>
                        <p style={pStyle}>Authorization</p>
                        <input style={inputStyles} />
                        <input type="password" style={inputStyles} />
                        <Link style={linkStyle} to="/todo">
                            <button onClick={context.Auth} style={buttonStyles}>Sign in</button>
                        </Link>
                    </div> : <button onClick={context.Auth} style={buttonStyles}>Sign out</button>
            )}
        </Consumer>
    )
}

