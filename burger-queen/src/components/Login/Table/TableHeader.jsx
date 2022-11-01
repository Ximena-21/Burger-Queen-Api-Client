const TableHeader = (props) => {

    const {listElements} = props;
   
    const listTh = Object.keys(listElements[0]);

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