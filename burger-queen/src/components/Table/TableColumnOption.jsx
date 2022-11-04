import edit from '../../assets/images/edit.png'
import delet from '../../assets/images/delete.png'
import { Modals } from '../../Modals/Modals'
import { useModal } from '../../Modals/useModal'

export const TableComlumnOption = () => {

    const [,openModalPortal,,] = useModal(false)

    return (
        <tr className='table_rowBodyOpt'>
            <td className='table_columnBody'>
                {/* <img src={edit} alt=""/> */}
                 <Modals btnEdit={ <img className='table_columnBody--option' src={edit} alt="" /> }/>
            </td>
            <td className='table_columnBody'>
                <Modals btnDelet={ <img className='table_columnBody--option' src={delet} alt="" /> }/>
            </td>
        </tr>
    )
}