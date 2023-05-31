import React from "react";

import CardWidget from "../CardWidget/CardWidget";
import './App.css'
import './Navbar.css'

const Navbar = () => {
  return (
    
    <div className="menu-dashboard">
      
        <div className="top-menu">
            <div className="logo">
               
                <span>Shop</span>
                
            </div>
            <div className="toggle">
                <i className='bx bx-menu'></i>
            </div>
        </div>
        
        <div class="input-search">
            <i className='bx bx-search'></i>
            <input type="text" class="input" placeholder="Buscar"/>
        </div>
        
        <div className="menu">
            <div className="enlace">
                <i className="bx bx-grid-alt"></i>
                <span>Dashboard</span>
            </div>

            <div className="enlace">
                <i class="bx bx-user"></i>
                <span>Inicio</span> 
                
            </div>

            
            <div className="enlace">
                <i class="bx bx-message-square"></i>
                <span>Mensajes</span>
            </div>

            

            <div className="enlace">
                <i class="bx bx-cart"></i>
                <span>Pedidos</span>
            </div>

            <div className="enlace">
                <i class="bx bx-heart"></i>
                <span>Favoritos</span>
            </div>

           
        </div>
    
   
          
          </div>
      
  );
};


export default Navbar;