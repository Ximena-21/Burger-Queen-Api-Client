const TableBody = (props) => {

    const {listProducts} = props
    console.log('table body ', listProducts );
    return(
        <tbody>
        <tr>
                {/* <td>{newListObject.dateEntry}</td>
                <td>{newListObject.id}</td> */}
                {/* <td> <img src={listElement.image} alt="product" /></td>
                <td>{listElement.name}</td>
                <td>{listElement.price}</td> */}
                {/* <td>{newListObject.type}</td> */}
        </tr>
        </tbody>
    )
}

export default TableBody