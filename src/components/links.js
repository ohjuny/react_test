import React, {useState} from 'react';

import Link from './link';

const Links = (props) => {

    const [state, setState] = useState({
        count: 0,
        active: true
    })

    const toggleLinks = () => {
        setState({...state, active: !state.active})
    }

    const likeIncrement = () => {
        setState({...state, count: state.count + 1})
    }

    return (
        <>
            <div className="links">
                <div>here are some links</div>
                <button onClick={ toggleLinks }>Show/Hide</button>
                { state.active ? props.data.links.map((item) =>(
                    <Link item = { item } key={ item.id }/>
                ))
                : null }
                <br/>
                <button onClick={ likeIncrement }>+1</button> Likes: { state.count }
            </div>
        </>
    )
}

export default Links;