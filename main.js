
import { renderCategories } from "./src/services/categories";
import { handleSearchProductByName } from "./src/services/searchBar";
import { openModal } from "./src/views/modal";
import { handleGetProductToStore } from "./src/views/store";

import './style.css';


/* ---- APLICACIÓN---- */
export let categoriaActiva = null;
export const setCateriaActiva = (categoriaIn)=>{
    categoriaActiva = categoriaIn;
};

export let productoActivo = null;
export const setproductoActivo = (productoInIn)=>{
    productoActivo = productoInIn;
};


handleGetProductToStore();
renderCategories();

/* ---- HEADER---- */
const buttonAdd=document.getElementById('buttonAddElement');
buttonAdd.addEventListener('click',()=>{
    openModal();
});

/* ---- BUSCADOR---- */
const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener('click',()=>{
    handleSearchProductByName();
});
