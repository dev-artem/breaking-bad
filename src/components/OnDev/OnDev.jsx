import React from 'react'
import Spinner from '../UI/Spinner'

import './ondev.scss'
const OnDev = () => {
    return (
        <div className="on-dev">
            <div className="on-dev__text">On development stage...</div>
            <div className="on-dev__spinner">
                <Spinner />
            </div>
        </div>
    )
}

export default OnDev
