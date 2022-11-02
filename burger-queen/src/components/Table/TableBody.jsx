const TableBody = (props) => {

    const { listElements } = props

    const listTr = listElements.map((element) => {
        return Object.values(element)
    })

    const td = listTr.map(elementTd => {
        return (
            <td>{elementTd}</td>
        )
    })

    // const tr = listElements.map(element => {
    //     return (
    //         <tr>

    //         </tr>
    //     )
    // })


    return (
        <tbody>

            <tr>
                {td}
            </tr>
            <tr>
                <td>chocolate</td>
                <td>kdjal;dladlajdljdal;</td>
                <td>2000</td>
            </tr>


        </tbody>
    )
}

export default TableBody