import unfold from '../../../assets/images/menuPoints.png'
import { useEffect, useState } from 'react'
import { Modals } from '../../../Modals/Modals'
import { useModal } from '../../../Modals/useModal'
import './style.scss';

export const OpenOrder = ({ element, Add,  type }) => {

    const [isOpen, open, close] = useModal(false)
    const [width, setWidth] = useState(window.innerWidth)

    const handleWindowResize = () => {
        setWidth(window.innerWidth)
    }
    
    
    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <tr className='table_rowBodyOpt'>
            <td className='table_columnBody'>
                {
                    // width < 1024 ?

                        <Modals
                            isOpen={isOpen}
                            open={open}
                            close={close}
                            element={<img className={`table_columnBody--option  `}
                                src={unfold} alt="Edit" value={'unfold'} />}
                            content={<Add closeModal={close} element={element} />}
                        /> 
                        // : <img className={`table_columnBody--option  `}
                        // src={unfold} alt="Edit" value={'edit'} onClick={open} />
                }

            </td>
        </tr>
    )


}

