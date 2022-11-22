export const TableHeader = (props) => {

  const { columnKeys } = props

  return (
    <thead className="table_header">
      <tr className="table_headerRow">
        {
          columnKeys.map(column => {
            return <th className="table_headerColumn">{column}</th>
          })
        }
      </tr>
    </thead>
  );
};
