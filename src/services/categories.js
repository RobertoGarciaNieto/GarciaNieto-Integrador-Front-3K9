import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { handleRenderList } from "../views/store";

const handleFilterProductsByCategory = (categoryIn) =>{
    const products = handleGetProductLocalStorage();
    switch (categoryIn) {
        case categoriaActiva:
            handleRenderList(products);
            break;
        case "Todo":
            handleRenderList(products);
        break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result = products.filter((el) => el.categoria === categoryIn);
            console.log("Filtered products:", result);
            handleRenderList(result);
        default:
            break;
        case "MayorPrecio":
            const resultPrecioMayor = products.sort((a,b)=>b.precio - a.precio);
            handleRenderList(resultPrecioMayor);
            break;
        case "MenorPrecio":
            const resultPrecioMenor = products.sort((a,b)=>a.precio - b.precio);
            handleRenderList(resultPrecioMenor);
            break;
    }
}

//render de la vista categorias
export const renderCategories = () => {
    const ulList = document.getElementById("listFilter");

    ulList.innerHTML = `
        <li id="Todo">Todos los productos</li>
        <li id="Hamburguesas">Hamburguesas</li>
        <li id="Papas">Papas fritas</li>
        <li id="Gaseosas">Gaseosas</li>
        <li id="MayorPrecio">Mayor precio</li>
        <li id="MenorPrecio">Menor precio</li>
    `;
    const liElements = ulList.querySelectorAll("li");

    liElements.forEach((liElement)=>{
        liElement.addEventListener('click', ()=>{
            console.log("Clicked element:", liElement.id);
            handleClick(liElement);
            })
    })

    const handleClick = (elemento) =>{
        handleFilterProductsByCategory(elemento.id);
        liElements.forEach((el=>{
            if(el.classList.contains('liActive')){
                el.classList.remove('liActive');
            }else{
                if(elemento=== el ){
                    el.classList.add('liActive');
                }
            }
        }
        ));
    };
};