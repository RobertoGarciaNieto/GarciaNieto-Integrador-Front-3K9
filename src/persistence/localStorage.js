/* ---- LOCAL STORAGE---- */
export const handleGetProductLocalStorage = () =>{
    const products = JSON.parse(localStorage.getItem('products'));
    if(products){
        return products;
    }else{
        return[];
    }
};

/* ---- Guardar---- */

//Recibimos un producto
export const setInLocalStorage = (productIn) =>{
    //Traemos los elementos
    let productInLocal = handleGetProductLocalStorage();
    const existingIndex = productInLocal.findIndex((productsLocal)=>
        productsLocal.id === productIn.id
    )

    //Revisamos si el elemento existe
    if(existingIndex !== -1){
        //Si existe debe reemplazarse
        productInLocal[existingIndex] = productIn;
    }else{
        //Si no existe agregarlo
        productInLocal.push(productIn);
    }
    //Setear el nuevo array con el producto modificado o agregado
    localStorage.setItem('products', JSON.stringify(productInLocal));

};