import React from 'react'

function Product({product,handleCart}) {
    return (
        <div className='col-lg-4 mt-2'>
            <div class="card" style={{ width: "18rem" }}>
                <img src={product.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{product.name}</h5>
                    <p class="card-text">{product.price}</p>
                    <button onClick = {() => handleCart(product)} class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product

