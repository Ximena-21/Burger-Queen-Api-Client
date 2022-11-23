import "./style.scss";

export const ModalViewOrder = () => {
  return (
    <table className="modalViewOrder">
      <thead className="modalViewOrder_header">
        <tr className="modalViewOrder_headerRow">
          <th className="modalViewOrder_headerColumn">Cantidad</th>
          <th className="modalViewOrder_headerColumn">Productos</th>
        </tr>
      </thead>
      <tbody className='modalViewOrder_body'>
        <tr className='modalViewOrder_rowBody'>
          <td className='modalViewOrder_columnBody'>2</td>
          <td className='modalViewOrder_columnBody'>Agua 500ml</td>
        </tr>
      </tbody>

      <tfoot className='modalViewOrder_foot'>
        <tr className='modalViewOrder_footRow'>
            <th>Total</th>
            <th>0000</th>
        </tr>
      </tfoot>
    </table>
  );
};
