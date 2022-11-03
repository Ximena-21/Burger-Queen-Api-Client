import edit from '../../assets/images/edit.png'
import delet from '../../assets/images/delete.png'

export const TableComlumnOption = () => {
    return (
        <tr className='table_rowBodyOpt'>
            <td className='table_columnBody table_columnBody--option'><img src={edit} alt="" /></td>
            <td className='table_columnBody table_columnBody--option'><img src={delet} alt="" /></td>
        </tr>
    )
}