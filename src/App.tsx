import Modal from 'react-modal'
import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/global";

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
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTRansactionModal} />
      <Dashboard />

      <Modal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTRansactionModal}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}