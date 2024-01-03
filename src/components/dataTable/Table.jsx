import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export default function Table({ employeesListFiltered, currentListEmployees }) {
  return (
    <table>
      <TableHeader listToDisplay={employeesListFiltered} />
      <tbody>
        {currentListEmployees.map((rowData, index) => (
          <TableRow key={index} rowData={rowData} />
        ))}
      </tbody>
    </table>
  );
}
