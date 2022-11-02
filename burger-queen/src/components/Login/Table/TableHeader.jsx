const TableHeader = (props) => {
  const { listElements } = props;

  let listTh;
  if (listElements.length >= 1) {
    listTh = Object.keys(listElements[0]);
  } else {
    return <p>...cargando</p>;
  }

  return (
    <thead className="table_header">
      <tr className="table_headerRow">
        {listTh.map((column) => {
          console.log("column ", column);
          return <th className="table_headerColumn">{column}</th>;
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
