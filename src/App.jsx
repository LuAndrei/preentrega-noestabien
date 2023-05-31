import { useState } from 'react'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
   
		
	
		<header>
			<h1>Art Attack</h1>

			<div class="container-icon">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="icon-cart"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
					/>
				</svg>
				<div class="count-products">
					<span id="contador-productos">0</span>
				</div>

				<div class="container-cart-products hidden-cart">
					<div class="cart-product">
						<div class="info-cart-product">
                            <span class="cantidad-producto-carrito">1</span>
                            <p class="titulo-producto-carrito"></p>
                            <span class="precio-producto-carrito">$</span>
                        </div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="icon-close"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</div>
                    <div class="cart-total">
                        <h3>Total:</h3>
                        <span class="total-pagar">$200</span>
                    </div>
				</div>
			</div>
		</header>
		<div className="container-items">
			<div className="item">
				<figure>
					<img
						src="https://m.media-amazon.com/images/I/51D2tdm+DUL._AC_UF894,1000_QL80_.jpg"
						alt="producto"
					/>
				</figure>
				<div className="info-product">
					<h2>Pintura ojos</h2>
					<p className="price">$800</p>
					<button>Añadir al carrito</button>
				</div>
			</div>
			<div className="item">
				<figure>
					<img
						src="https://biencomun.com/wp-content/uploads/2017/12/pintura.jpg"
						alt="producto"
					/>
				</figure>
				<div className="info-product">
					<h2>Paisaje</h2>
					<p className="price">$2000</p>
					<button>Añadir al carrito</button>
				</div>
			</div>
			<div className="item">
				<figure>
					<img
						src="https://st4.depositphotos.com/1208575/39148/i/450/depositphotos_391483686-stock-photo-oil-painting-landscape-colorful-abstract.jpg"
						alt="producto"
					/>
				</figure>
				<div className="info-product">
					<h2>Arbol colores</h2>
					<p className="price">$500</p>
					<button>Añadir al carrito</button>
				</div>
			</div>
			<div className="item">
				<figure>
					<img
						src="https://i.blogs.es/193e5c/pexels-brett-sayles-6424244/1366_2000.jpg"
						alt="producto"
					/>
				</figure>
				<div className="info-product">
					<h2>Frida</h2>
					<p className="price">$900</p>
					<button>Añadir al carrito</button>
				</div>
			</div>
			<div className="item">
				<figure>
					<img
						src="https://placerdelsaber.com/wp-content/uploads/2017/05/acuarela-ero%CC%81tica-tina-maria-elena-6-820x1024.jpeg"
						alt="producto"
					/>
				</figure>
				<div className="info-product">
					<h2>Erotico</h2>
					<p className="price">$500</p>
					<button>Añadir al carrito</button>
				</div>
			</div>
		</div>
    </>
  )
}

export default App
