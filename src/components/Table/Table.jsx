import styles from "./Table.module.css";

const TABLE_COLUMNS = [
  "Year",
  "Total Savings",
  "Interest (Year)",
  "Total Interest",
  "Invested Capital",
];

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const Table = ({ tableData, initialInvestment }) => (
  <table className={styles["result"]}>
    <thead>
      <tr>
        {TABLE_COLUMNS.map((column) => (
          <th key={column}>{column}</th>
        ))}
      </tr>
    </thead>

    <tbody>
      {tableData.map((yearData) => (
        <tr key={yearData.year}>
          <td>{yearData.year}</td>
          <td>{formatter.format(yearData.savingsEndOfYear)}</td>
          <td>{formatter.format(yearData.yearlyInterest)}</td>
          <td>
            {formatter.format(
              yearData.savingsEndOfYear -
                initialInvestment -
                yearData.yearlyContribution * yearData.year
            )}
          </td>
          <td>
            {formatter.format(
              initialInvestment + yearData.yearlyContribution * yearData.year
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
