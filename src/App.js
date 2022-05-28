import React from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  // alternative script for jsx -- using react objects
    // return (
    //   React.createElement('div', {}, 
    //     React.createElement('h2', {}, "Expense Tracker!"),
    //     React.createElement(Expenses, {items: expenses})
    //   );
    // )

  return (
    <div>
      <NewExpense/>
      <Expenses/>
    </div>
  );

}

export default App;
 