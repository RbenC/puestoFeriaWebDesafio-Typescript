import productosData from '../../json/data.json';
import Product from './Product'; 

type Producto = {
    nombre: string;
    precio:number;
    cantidad:number; 
    unidad:string;
    imagen:string;
}

const ProductList = () => {
    const productos: Producto[] = productosData; 

    return (
        <div className="row row-cols-1 row-cols-md-4 g-3">
            {
                productos.map((producto: Producto, index: number) => (                
                    <Product 
                        key={index} 
                        nombre={producto.nombre}
                        precio={producto.precio}
                        cantidad={producto.cantidad}
                        unidad={producto.unidad}
                        imagen={producto.imagen}                    
                    />            
                ))
            };
        </div>
        
    )
}

export default ProductList; 