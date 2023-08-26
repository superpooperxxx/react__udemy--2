import { useState } from "react";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header";
import { Table } from "./components/Table";

const calculateYearlyData = (userInput) => {
  const yearlyData = [];

  let currentSavings = +userInput["currentSavings"];
  const yearlyContribution = +userInput["yearlyContribution"];
  const expectedReturn = +userInput["expectedReturn"] / 100;
  const duration = +userInput["duration"];

  for (let i = 0; i < duration; i++) {
    const yearlyInterest = currentSavings * expectedReturn;
    currentSavings += yearlyInterest + yearlyContribution;
    yearlyData.push({
      year: i + 1,
      yearlyInterest: yearlyInterest,
      savingsEndOfYear: currentSavings,
      yearlyContribution: yearlyContribution,
    });
  }

  return yearlyData;
};

const initialFormData = {
  currentSavings: 10000,
  yearlyContribution: 1200,
  expectedReturn: 7,
  duration: 10,
};

const App = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [tableData, setTableData] = useState([]);

  const calculateHandler = () => {
    setTableData(calculateYearlyData(formData));
  };

  const onFormReset = () => {
    setFormData(initialFormData);
  };

  const onFormUpdate = (field, value) => {
    setFormData((current) => ({
      ...current,
      [field]: +value,
    }));
  };

  return (
    <div>
      <Header />

      <Form
        formData={formData}
        onFormUpdate={onFormUpdate}
        onFormReset={onFormReset}
        onCalculate={calculateHandler}
      />

      {tableData.length > 0 ? (
        <Table
          tableData={tableData}
          initialInvestment={formData.currentSavings}
        />
      ) : (
        <p style={{ textAlign: "center" }}>No investment calculated yet.</p>
      )}
    </div>
  );
};

export default App;
