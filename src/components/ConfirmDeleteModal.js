import './ConfirmDeleteModal.scss'

const ConfirmDeleteModal = () => {
 return (
  <div class="ConfirmDeleteModal active" id="modal-eliminar-listado-compra-confirm">

   <form >

    <p>Confirma Eliminacion?
    <span>Esta accion es irreversible</span>
    </p>

    <button class="btn-close" data-close-button id="eliminar-listado-compra-btn-close-confirm">
     <i class="fas fa-times"></i>
    </button>
 
    <button class="btn-ok" data-close-button id="eliminar-listado-compra-btn-ok-confirm">
     <i class="fas fa-check"></i>
    </button>

   </form>

  </div>
 )
}

export default ConfirmDeleteModal;