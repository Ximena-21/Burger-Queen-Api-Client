
export const HeaderTableOrder = () => {
  
    const columnKeys = ['Cant.', "Producto", "Subtotal"]

    return (
      <thead className="headerTableOrder">
        <tr className="headerTableOrder_headerRow">
          {
            columnKeys.map(column => {
              return <th className="headerTableOrder_headerColumn">{column}</th>
            })
          }
        </tr>
      </thead>
    );
  };
  