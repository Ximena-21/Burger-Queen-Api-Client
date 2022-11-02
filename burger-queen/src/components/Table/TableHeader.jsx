const TableHeader = (props) => {

    const {listElements, headerColumns} = props;
   
    const listTh = listElements.length > 0 ? Object.keys(listElements[0]) : headerColumns

return(
    <thead className="table_header">
        <tr className="table_headerRow">
            {
              listTh.map(column =>{
                return <th className="table_headerColumn">{column}</th>
              })
            }
        </tr>
    </thead>
)
}

export default TableHeader;