import './Menu.scss';
import WheelButtons from './WheelButtons';


const Menu = () => {



 return (
  <section className='main-menu'>

   <form >
    <h3 className="budget-title">
     -- Click</h3>
    <button className="btn-edit-title" data-modal-target="#modal-title" id="ingreso-name"><i
     className="fas fa-pen"></i></button>

    <p className="budget-remaining" id="main-presupuesto-resto">0</p>
    <p className="budget-spend" id="main-gastado">0</p>
    <p className="budget-base" id="main-presupuesto-base">0</p>

    <button className="btn btn-edit-base" data-modal-target="#modal-monto-base" id="ingreso-base"><i
     className="fas fa-dollar-sign"></i></button>

    <button className="btn btn-shopping" data-modal-target="#modal-compra-nueva" id="nueva-compra">
     <i className="fas fa-shopping-cart"></i>
    </button>

    <button className="btn btn-delete-classlist" data-modal-target="#modal-eliminar-listado-compra"
     id="ingreso-base"><i className="fas fa-dumpster-fire"></i></button>

    {/*<!-- BOTONES DE SELECCION -->*/}

    <WheelButtons 
    className='WheelButtons'
    />

   </form>

  </section >
 )
}

export default Menu;