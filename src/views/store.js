import { setproductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { openModal } from "./modal";

/* ---- STORE ---- */
export const handleGetProductToStore = ()=>{
    const products =  handleGetProductLocalStorage();
    handleRenderList(products);
};

export const handleRenderList = (productsIn) =>{
    const burgers = productsIn.filter((el)=>el.categoria==='Hamburguesas')
    const papas = productsIn.filter((el)=>el.categoria==='Papas')
    const gaseosas = productsIn.filter((el)=>el.categoria==='Gaseosas')

    const renderProductGroup = (productos, title) =>{
        if(productos.length>0){
            const productosHTML = productos.map((producto, index)=>{
                return `
                <div class='containerTargetItem' id="producto-${producto.categoria}-${index}">
                    <div> 
                        <img src="${producto.img}"/>
                        <div >
                            <h2>${producto.nombre}</h2>
                        </div>
                        <div class='targetProps'>
                            <p><b>Precio:</b> $ ${producto.precio}</p>
                        </div>
                    </div>
                </div>`;
            });
            return `
                <section class='sectionStore' >
                    <div class='containerTitleSection'>
                        <h3>${title}</h3>
                    </div>
                    <div class='containerProductStore'>
                        ${productosHTML.join("")}
                    </div>
                </section>
            `;
        }else{
            return ""
        }
    };
    
    //Renderizar cada uno de los productos dentro de su categoría
    const appContainer=document.getElementById('storeContainer');
    appContainer.innerHTML=`
        ${renderProductGroup(burgers,'Hamburguesas')}
        ${renderProductGroup(papas,'Papas')}
        ${renderProductGroup(gaseosas,'Gaseosas')}
    `;

    const addEvents = (productsIn) =>{
        productsIn.forEach((element, index) => {
            const productContainer = document.getElementById(`producto-${element.categoria}-${index}`);
                productContainer.addEventListener('click',()=>{
                    setproductoActivo(element);
                    openModal();
                });
        });

    };
    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);
};