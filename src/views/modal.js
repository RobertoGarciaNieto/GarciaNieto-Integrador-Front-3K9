import { productoActivo, setproductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/product";

/* ---- POPUP---- */
const cancelButton = document.getElementById('cancelButton')
    cancelButton.addEventListener('click',()=>{
    closeModal();
});


//FUNCIONES DE ABRIR Y CERRAR EL MODAL
export const openModal = ()=>{
    const modal = document.getElementById('modalPopUp');
    modal.style.display = "flex";
    const buttonDelete = document.getElementById('deleteButton');
    if (productoActivo){
        buttonDelete.style.display = "block";
    }else{
        buttonDelete.style.display = "none";
    }

    if (productoActivo) {
        const nombre = document.getElementById('nombre'),
            img = document.getElementById('img'),
            precio = document.getElementById('precio'),
            categoria = document.getElementById('categoria');
        nombre.value = productoActivo.nombre;
        img.value = productoActivo.img;
        precio.value = productoActivo.precio;
        categoria.value = productoActivo.categoria;
    }
};

export const closeModal = ()=>{
    const modal = document.getElementById('modalPopUp');
    modal.style.display = 'none';
    setproductoActivo(null);
    resetModal();
};

const resetModal= ()=>{
    const nombre = document.getElementById('nombre'),
        img = document.getElementById('img'),
        precio = document.getElementById('precio'),
        categoria = document.getElementById('categoria');
        nombre.value = "";
        img.value = "";
        precio.value = 0;
        categoria.value = "Seleccione una categoría";
}

const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener('click',()=>{
    handleButtonDelete();
});

const handleButtonDelete= ()=>{
    handleDeleteProduct();

}
