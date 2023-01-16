import { products } from "../utils/data.js";
import {containProducts} from "../js/nodes.js";
import { cargarEventos}  from "./pedido.js";

const templateCard = (product) =>{
    console.log(product);
    return`
        <div class="card">
            <figure class="containImg">
                <img src="public/imgProducts/${product.url}" alt="" class="imgCard">
            </figure>
                <h2 class="nameProduct">${product.name}</h2>
            <div class="button-card">
                <button class="AddCarrito" data-id=${product.id}>Add</button>
            </div>
        </div>
    `
}

const view = () =>{
    const view = products.map((product) => templateCard(product));
    containProducts.innerHTML = view.join(" ");
    cargarEventos();
}

export {view,};
