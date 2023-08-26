const TABLE_COLUMNS = [
  "Year",
  "Total Savings",
  "Interest (Year)",
  "Total Interest",
  "Invested Capital",
];

export const Table = () => (
  <table className="result">
    <thead>
      <tr>
        {TABLE_COLUMNS.map((column) => (
          <th key={column}>{column}</th>
        ))}
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>YEAR NUMBER</td>
        <td>TOTAL SAVINGS END OF YEAR</td>
        <td>INTEREST GAINED IN YEAR</td>
        <td>TOTAL INTEREST GAINED</td>
        <td>TOTAL INVESTED CAPITAL</td>
      </tr>
    </tbody>
  </table>
);
