import edit from '../../assets/images/edit.png'
import delet from '../../assets/images/delete.png'
import { Modals } from '../../Modals/Modals'
import { useModal } from '../../Modals/useModal'

export const TableComlumnOption = () => {

    const [,openModalPortal,,] = useModal(false)

    return (
        <tr className='table_rowBodyOpt'>
            <td className='table_columnBody table_columnBody--option'>
                {/* <img src={edit} alt=""/> */}
                 <Modals btnEdit={ <img src={edit} alt="" /> }/>
            </td>
            <td className='table_columnBody table_columnBody--option'>
                <Modals btnDelet={ <img src={delet} alt="" /> }/>
            </td>
        </tr>
    )
}