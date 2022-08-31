import './DeleteSingleItemModal.scss'

const DeleteSingleItemModal = () => {
 return (
  <div className="DeleteSingleItemModal" id="modal-eliminar-compra">
   <form >
    <p className="eliminar-compra">Eliminar compra?</p>
    <button className="btn-close" data-close-button id="eliminar-compra-btn-close">
     <i className="fas fa-times"></i>
    </button>
    <button className="btn-ok" data-close-button id="eliminar-compra-btn-ok">
     <i className="fas fa-check"></i>
    </button>
   </form>
  </div>
 )
}

export default DeleteSingleItemModal;