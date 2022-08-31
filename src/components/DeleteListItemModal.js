import './DeleteListItemModal.scss'

const DeleteListItemModal = () => {
 return (
  <div class="DeleteListItemModal" id="modal-eliminar-listado-compra-confirm">

   <form class="form-container">

    <p class="eliminar-compra-confirm">Desea eliminar el listado de compras?</p>

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

export default DeleteListItemModal;