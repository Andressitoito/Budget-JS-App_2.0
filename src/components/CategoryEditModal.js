import './CategoryEditModal.scss'

const CategoryEditModal = () => {
 return (
  <div className="CategoryEditModal" id="modal-title">

   <form className="form-container">

    <input type="text" placeholder="Ingrese titulo" title="Titulo" id="input-title" maxlength="15" />

    <button className="btn-close" data-close-button id="title-btn-close">
     <i className="fas fa-times"></i>
    </button>

    <button className="btn-ok" data-close-button id="title-btn-ok">
     <i className="fas fa-check"></i>
    </button>

   </form>
  </div>
 )
}

export default CategoryEditModal;