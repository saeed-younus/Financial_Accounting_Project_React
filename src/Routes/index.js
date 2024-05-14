import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../Features/Dashboard';
import GeneralEntries from '../Features/GeneralJournal';
import FinancialStatementMainComponent from '../Features/FinancialStatement';
import ClosingAccounts from '../Features/ClosingAccounts/closingaccounts';

function RouterSwitch() {
  return (
  
       <Routes>
         <Route path="/" element={<GeneralEntries />}/>
         <Route path="/financial-statement" element={<FinancialStatementMainComponent/>} />
         <Route path="/ClosingAccounts" element={<ClosingAccounts/>} />

       </Routes>
    

  );
}

export default RouterSwitch;
