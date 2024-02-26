import React from 'react'
import '../../componentes/ItemListContainer/ItemListContainer.css'

function ItemListContainer(props) {
    return (
        <div>
            <h1 className='title'>{props.greeting}</h1>
        </div>
    )
}

export default ItemListContainer
