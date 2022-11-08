import edit from '../../assets/images/edit.png'
import delet from '../../assets/images/delete.png'
import { Modals } from '../../Modals/Modals'
import { BtnDelet, DeletModal } from '../DeletModal/DeletModal'
import { ModalAddProduct } from '../FormModals/FormModalProduct'

export const TableComlumnOption = () => {

    return (
        <tr className='table_rowBodyOpt'>
            <td className='table_columnBody'>
                 <Modals element={ <img className='table_columnBody--option' src={edit} alt="" /> }
                 content={<ModalAddProduct />}
                 />
            </td>
            <td className='table_columnBody'>
                <Modals 
                element={ <img className='table_columnBody--option' src={delet} alt="" /> }
                content={<DeletModal />}
                elementClose={<BtnDelet />}
                />
            </td>
        </tr>
    )
}