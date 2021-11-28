import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
 import IncomeExpences from './components/IncomeExpences';
 import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="contantainer">
        <Balance/>
      </div>
      <IncomeExpences/>
      <TransactionList/>
      <AddTransaction/>
    </GlobalProvider>
  );
}

export default App;
