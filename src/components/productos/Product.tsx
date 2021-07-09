interface ProductoProps {
    nombre: string;
    precio:number;
    cantidad:number; 
    unidad:string;
    imagen:string;
}

export const Product = ( { nombre, precio, cantidad, unidad, imagen }: ProductoProps) => {
    return (
        <div className="col">
              <div className="card h-100">
                <img className="card-img-top "src={ imagen } alt={ nombre }  />
                  <div className="card-body">                   
                  </div>
                  <h5 className="card-title text-dark text-center">{ nombre } ${ new Intl.NumberFormat("de-DE").format(  precio  ) } { unidad }</h5>
                  
                  <button type="button" className="btn btn-primary">
                Mayor informaciòn
              </button>              
              </div>              
          </div>
    )
}

export default Product; 