import './NewItemModal.scss'

const NewItemModal = () => {
 return (
  <div className='NewItemModal'>

   <form className="form-container">

    <input type="text" placeholder="Ingrese producto" id="input-compra-name" maxlength="20"/>

    <input type="text" placeholder="Ingrese precio" id="input-compra-monto" />

    <button className="btn-close" data-close-button id="compra-btn-close">
     <i className="fas fa-times"></i>
    </button>
    <button className="btn-ok" data-close-button id="compra-btn-ok">
     <i className="fas fa-check"></i>
    </button>

   </form>

  </div>
 )
}

export default NewItemModal;