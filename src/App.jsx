import { useState } from "react";
import Form from "./components/Form";
import { GlobalFormContext } from "./context/FormContext";
import Loading from "./components/Loading";
import Modal from "./components/Modal";

function App() {
  const { isModalOpen, loading } = GlobalFormContext();

  if (loading) {
    return <Loading />;
  }
  if (isModalOpen) {
    return <Modal />;
  }
  return (
    <main>
      <Form />
    </main>
  );
}

export default App;
