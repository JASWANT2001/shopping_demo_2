import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Product from './Product';
import Cart from './Cart'
import { useState } from 'react';

function App() {

  let products = [
    {
      "id": "1",
      "image" :"https://images.unsplash.com/photo-1606341802409-aceb7ebbec1a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "Iphone15",
      "price": "150000"
    },
    {
      "id": "2",
      "image" :"https://images.unsplash.com/photo-1623682579934-58796c1b2822?q=150&w=1000auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "IWatch",
      "price": "40000"
    },
    {
      "id": "3",
      "image" :"https://images.unsplash.com/photo-1546868871-0f936769675e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "Ipad",
      "price": "70000"
    },
    {
      "id": "4",
      "image" :"https://images.unsplash.com/photo-1606885118474-c8baf907e998?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "ICloth",
      "price": "1000"
    },
    {
      "id": "5",
      "image" :"https://images.unsplash.com/photo-1602144124318-f448134df981?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBwZW58ZW58MHx8MHx8fDA%3D",
      "name": "IPen",
      "price": "8000"
    },
    {
      "id": "6",
      "image" :"https://images.unsplash.com/photo-1525825691042-e14d9042fc70?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "AirPods",
      "price": "20000"
    }
  ]

  let handleCart = (product) => {
    setCart([...cart, product])
    setTotal(parseInt(total) + parseInt(product.price))
  }

  let handleRemoveCart = (items) => {

    let itemindex = cart.findIndex(
    obj => obj.id === items.id)
    cart.splice(itemindex, 1)
    setCart([...cart])
    setTotal(parseInt(total) - parseInt(items.price))

  }

  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-8'>
          <h2>Products</h2>

          <div className='row'>
            {
              products.map((product, index) => {
                return <Product key={index} product={product} handleCart={handleCart}></Product>
              })
            }
          </div>
        </div>
        <div className='col-lg-4'>
          <h2>Cart</h2>
          {
            cart.length > 0 ?
              <ol class="list-group list-group-numbered">
                {
                  cart.map((items, index) => {
                    return <Cart items={items} key={index} handleRemoveCart={handleRemoveCart}></Cart>
                  })
                }
              </ol> : <h3>No Items Added In the Cart</h3>
          }


          <h2>Total: Rs.{total}</h2>
        </div>
      </div>

    </div>
  );
}

export default App;
