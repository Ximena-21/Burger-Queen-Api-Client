import edit from '../../assets/images/edit.png'
import delet from '../../assets/images/delete.png'
import { Modals } from '../../Modals/Modals'
import { BtnAbort } from '../Products/DeleteModalProduct/DeleteModalProduct'
import { useModal } from '../../Modals/useModal'
import { useEffect, useState } from 'react'
import { useProductsContext } from '../../context/ProductsContext'


export const TableColumnOption = ({ element, Add, Delete }) => {

    const {updateProduct} = useProductsContext

    const [isOpen, open, close] = useModal(false)
    const [isOpenDelete, openDelete, closeDelete] = useModal(false)

    const [width, setWidth] = useState(window.innerWidth)

    const handleWindowResize = () => {
        setWidth(window.innerWidth)
    }


    useEffect(() => {
        // const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);


    const editProduct = async (element) =>{
        console.log('width editar', width)
        console.log('elemento', element)

        // await updateProduct (element.id, element)
    }
    return (
        <tr className='table_rowBodyOpt'>
            <td className='table_columnBody'>
                {
                    width < 1024 ?

                        <Modals
                            isOpen={isOpen}
                            open={open}
                            close={close}
                            element={<img className={`table_columnBody--option  `}
                                src={edit} alt="Edit" value={'edit'} />}
                            content={<Add closeModal={close} element={element} />}
                        /> 
                        : <img className={`table_columnBody--option  `}
                        src={edit} alt="Edit" value={'edit'} onClick={()=>{
                            editProduct(element)
                        }} />

                }

              {/*   // <Modals
                //     isOpen={isOpen}
                //     open={open}
                //     close={close}
                //     element={<img className={`table_columnBody--option  `}
                //         src={edit} alt="Edit" value={'edit'} />}
                //     content={<Add closeModal={close} element={element} />}
                // /> */}
            </td>
            <td className='table_columnBody'>
                <Modals
                    isOpen={isOpenDelete}
                    open={openDelete}
                    close={closeDelete}
                    element={<img className='table_columnBody--option' src={delet} alt="Delete"
                    />}
                    content={<Delete element={element} closeModal={closeDelete} />}
                    elementClose={< BtnAbort close={closeDelete} />}
                />
            </td>
        </tr>
    )
}

//makeRequestDelete('products', element.id)