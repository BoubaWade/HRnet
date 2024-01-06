import { dataOfEachTableRow } from "../../utils/helperFunctions";

export default function TableRow({ rowData }) {
  const dataOfRow = dataOfEachTableRow(rowData);

  return (
    <tr>
      {dataOfRow.map((data, index) => (
        <td key={index}>{data}</td>
      ))}
    </tr>
  );
}
