import { useState } from "react"
// import { useProductsContext } from "../../../context/ProductsContext"
// import { uploadImgWeb, onChangeImg } from "../../../lib/helpers"
import "./style.scss"
import { useUsersContext } from "../../../context/UsersContext"



export const FormUser = ({ element, closeModal }) => {

    console.log('usuario para editar', element.id);

    const { createUser , updateUser} = useUsersContext()


    const [user, setUser] = useState(element || {})


    const handleInputsChange = async (e) => {

        const key = e.target.name
        let newObjKey = {}
        newObjKey[key] = e.target.value

        console.log('name target', e.target.value)

        setUser({ ...user, ...newObjKey, id: new Date().getTime(), })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Usuario >>', user)

        if (element.id === undefined) {

            await createUser(user)

        } else {

            await updateUser(element.id, user)
            closeModal()
        }
        // const data = {
        //     id: element.id || new Date().getTime(),
        //     name: nameProduct,
        //     type: typeProduct,
        //     image: imgProduct,
        //     price: priceProduct
        // };

        // //Create
        // if (element.id === undefined) {
        //     await createProduct(data)
        //     //limpiar inputs 
        //     setNameProduct('');
        //     setTypeProduct('');
        //     setImgProduct('');
        //     setPriceProduct('');
        //     setFilePreview(null)

        // } else {
        //     await updateProduct(element.id, data)
        //     closeModal()
        // }
    }

    // const handleInputsChange = async (setFunction, e) => {
    //     setFunction(e.target.value)
    // }


    return (
        <div className="formUser">
            <form onSubmit={handleSubmit} className="formUser_form">

                <div className="formUser_title">

                    <p className="formUser_title--text">Usuario</p>

                </div>

                <div className="formUser_options">

                    <label htmlFor="userName">Nombre</label>
                    <input onChange={(event) => handleInputsChange(event)} type="text" name="name"
                        className="formUser_options--input" value={user.name} required />

                    <label htmlFor="userEmail">Correo</label>
                    <input onChange={(event) => handleInputsChange(event, "email")} type="text" name="email"
                        className="formUser_options--input" value={user.email} required />

                    <label htmlFor="userRole">Rol</label>
                    <select onChange={(event) => handleInputsChange(event, "role")} name="role"
                        className="formUser_options--input" value={user.role} required>
                        <option selected='selected' >Seleccionar</option>
                        <option >admin</option>
                        <option >Jefe Cocina</option>
                        <option >Meser@</option>
                    </select>


                    <label htmlFor="userPassword">Contraseña</label>
                    <input onChange={(event) => handleInputsChange(event, "password")} type="password" name="password"
                        className="formUser_options--input" value={user.password} required />

                </div>

                <button className="formUser_btn" >Guardar</button>

            </form>
        </div>
    )
}