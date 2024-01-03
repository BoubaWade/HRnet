import TableHeader from "./TableHeader";

export default function EmptyDataTable() {
  return (
    <table className="no-result-of-search">
      <TableHeader />
      <tbody>
        <tr>
          <td>No data available.</td>
        </tr>
      </tbody>
    </table>
  );
}
