import React from 'react';
import { Link } from 'react-router-dom';
import { linkStyle, buttonStyles } from '../Authentication/styleAuthentication';

const styles = {
    textAlign: 'center'
}

export const Message = () => {
    return (
        <div className="App">
            <h1 style={styles}>You must sign in to view Todo page</h1>
            <Link style={linkStyle} to="/">
                <button style={buttonStyles}>Sign in</button>
            </Link>
        </div>
    )
}