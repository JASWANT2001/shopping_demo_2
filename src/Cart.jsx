import React from 'react'

function Cart({items,handleRemoveCart}) {
    return (
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">{items.name}</div>
                {items.price}
            </div>
            <button onClick = {() => handleRemoveCart(items)} class= "badge bg-danger rounded-pill">X</button>
        </li>
    )
}

export default Cart
