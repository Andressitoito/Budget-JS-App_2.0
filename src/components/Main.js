import './Main.scss'
import ItemList from './ItemList';
import Menu from './Menu';
import OverlayModal from './OverlayModal';
import NewItemModal from './NewItemModal';
import CategoryEditModal from './CategoryEditModal';
import BaseAmountModal from './BaseAmountModal';
import DeleteSingleItemModal from './DeleteSingleItemModal.js';
import DeleteListItemModal from './DeleteListItemModal';
import ConfirmDeleteModal from './ConfirmDeleteModal';

const Main = () => {
 return (
  <div className='main-container'>

   <OverlayModal />

   <Menu />

   <CategoryEditModal />

   <BaseAmountModal />

   <ItemList />

   <NewItemModal />

   <DeleteSingleItemModal />

   <DeleteListItemModal/>

   <ConfirmDeleteModal/>

  </div>
 )
}

export default Main;