import Modal from 'react-modal'
import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root')

export default function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTRansactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTRansactionModal() {
    setIsNewTransactionModalOpen(false);    
  }
  
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTRansactionModal} />
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTRansactionModal} 
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}