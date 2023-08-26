import styles from "./Form.module.css";

export const Form = ({ formData, onFormUpdate, onFormReset, onCalculate }) => {
  const onFormSubmit = (event) => {
    event.preventDefault();

    onCalculate();
  };

  return (
    <form className={styles["form"]} onSubmit={onFormSubmit}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            min="0"
            id="current-savings"
            value={formData.currentSavings}
            onChange={(event) =>
              onFormUpdate("currentSavings", event.target.value)
            }
          />
        </p>

        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            min="0"
            id="yearly-contribution"
            value={formData.yearlyContribution}
            onChange={(event) =>
              onFormUpdate("yearlyContribution", event.target.value)
            }
          />
        </p>
      </div>

      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            min="0"
            id="expected-return"
            value={formData.expectedReturn}
            onChange={(event) =>
              onFormUpdate("expectedReturn", event.target.value)
            }
          />
        </p>

        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            min="0"
            id="duration"
            value={formData.duration}
            onChange={(event) => onFormUpdate("duration", event.target.value)}
          />
        </p>
      </div>

      <p className={styles["actions"]}>
        <button
          type="reset"
          className={styles["buttonAlt"]}
          onClick={onFormReset}
        >
          Reset
        </button>

        <button type="submit" className={styles["button"]}>
          Calculate
        </button>
      </p>
    </form>
  );
};
