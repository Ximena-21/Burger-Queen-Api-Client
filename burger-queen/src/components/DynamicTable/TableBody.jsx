export const TableBody = (props) => {
  const { data, columns } = props;

//   const listTr = data.map((element) => {
//     return (
//       <tr className="table_rowBody">
//         {columns.map((objectColumn, i) => {
//           if (objectColumn.hasOwnProperty("componente")) {
//             return objectColumn.componente(element);
//           }

//           return (
//             <td key={i} className="table_columnBody">
//               {element[objectColumn.key]}{" "}
//             </td>
//           );
//         })}
//       </tr>
//     );
//   });

  return (
    <tbody className="table_body">
      {data.map((element) => {
        return (
          <tr className="table_rowBody">
            {columns.map((objectColumn, i) => {
              if (objectColumn.hasOwnProperty("componente")) {
                return objectColumn.componente(element);
              }

              return (
                <td key={i} className="table_columnBody">
                  {element[objectColumn.key]}{" "}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
