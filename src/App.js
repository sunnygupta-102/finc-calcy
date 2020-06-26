import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { localeformat } from "./utils";

function App() {
  const [bankAccount, setBankAccount] = useState(0);
  const [groww, setGroww] = useState(0);
  const [fd, setFd] = useState(0);
  const [pf, setPf] = useState(0);
  const [result, setResult] = useState(0);

  const calculate = (event) => {
    event.preventDefault();
    console.log({ bankAccount, groww, fd, pf });
    const formattedResult = localeformat(String(bankAccount + groww + fd + pf));
    setResult(formattedResult + " Rs");
  };

  return (
    <div className="container App">
      <h3>Your Financial Calculator</h3>
      <form>
        <div className="form-group">
          <label htmlFor="groww">GROWW</label>
          <input
            onChange={(event) => setGroww(+event.target.value)}
            type="text"
            className="form-control"
            id="groww"
            placeholder="Enter groww amount"
          />
        </div>
        <div className="form-group">
          <label htmlFor="saving_bank_account">SAVING BANK ACCOUNT</label>
          <input
            onChange={(event) => setBankAccount(+event.target.value)}
            type="text"
            className="form-control"
            id="saving_bank_account"
            placeholder="Enter Saving Bank Account"
          />
        </div>
        <div className="form-group">
          <label htmlFor="fd">FD</label>
          <input
            onChange={(event) => setFd(+event.target.value)}
            type="text"
            className="form-control"
            id="fd"
            placeholder="Enter FD"
          />
        </div>
        <div className="form-group">
          <label htmlFor="PF">PF</label>
          <input
            onChange={(event) => setPf(+event.target.value)}
            type="text"
            className="form-control"
            id="PF"
            placeholder="Enter PF"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(event) => calculate(event)}
        >
          Submit
        </button>
        <hr />
        <h3>{result}</h3>
      </form>
    </div>
  );
}

export default App;