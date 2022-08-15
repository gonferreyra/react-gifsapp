import React from 'react'

// Recibimos las props con las images, y hacemos el destructuring directamente(trajimos las props con el spreed operator)
export const GifGridItem = ({ title, url }) => {

    // console.log(id, title, url)

    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
