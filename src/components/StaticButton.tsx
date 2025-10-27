import { LinkButton } from './LinkButton';
import React from 'react';

export const StaticButton = ({ to, text, bottom, right }) => {
    return (
        <>
            <div className="staticButtonContainer" style={{ position: "fixed",
                 bottom: bottom, right: right, zIndex: 1000,
                 borderRadius: '1rem' }}>
                <LinkButton to={to} text={text} />
            </div>
        </>
    )
}