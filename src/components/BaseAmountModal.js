import './BaseAmountModal.scss'

const BaseAmountModal = () => {
 return (
  <div className="BaseAmountModal" id="modal-monto-base">

   <form className="form-container">

    <input type="text" className="modal-input" placeholder="Ingrese monto base" id="input-monto-base" maxlength="7" />

    <button className="btn-close" data-close-button id="base-btn-close">
     <i className="fas fa-times"></i>
    </button>

    <button className="btn-ok" data-close-button id="base-btn-ok">
     <i className="fas fa-check"></i>
    </button>

   </form>

  </div>
 )
}

export default BaseAmountModal;