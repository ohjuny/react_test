import React from 'react';

const Link = (props) => {
    return (
        <>
            <div className="link">
                <a href={ props.item.link } target="_blank" rel="noreferrer">
                    <div className="title">{ props.item.title }</div>
                    <div>{ props.item.link }</div>
                </a>
            </div>
        </>
    )
}

export default Link;