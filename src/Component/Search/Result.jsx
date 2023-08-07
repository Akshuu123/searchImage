import React from 'react'

const Result = (props) => {
    let img = `https://source.unsplash.com/300x300/?${props.name}`
    return (
        <>
            <div className='img_result'>
                <img src={img} alt={props.name} />
            </div>
        </>
    )
}

export default Result;