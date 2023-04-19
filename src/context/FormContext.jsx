import { createContext, useState, useContext } from "react";
import axios from "axios";

const initialFormState = {
  name: "",
  preparation_time: "",
  type: "",
};
const AppFormContext = createContext();

const AppFormProvider = ({ children }) => {
  const [formDetails, setFormDetails] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [postMessage, setPostMessage] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormDetails({ ...formDetails, [name]: value });
  };
  const handleChangeType = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSelectedType(value);
    delete formDetails.no_of_slices;
    delete formDetails.diameter;
    delete formDetails.spiciness_scale;
    delete formDetails.slices_of_bread;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post(
        "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/",
        formDetails
      )
      .then((response) => {
        console.log(response);
        setLoading(false);
        setPostMessage("Data sent successfully");
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
        setPostMessage(
          `Sorry not able to post data. Check the details: ${error.response.data.preparation_time[0]}`
        );
        throw new Error(
          `Sorry not able to post data. Check the details: ${error.response.data.preparation_time[0]}`
        );
      });

    setIsModalOpen(true);
    setFormDetails(initialFormState);
  };

  return (
    <AppFormContext.Provider
      value={{
        formDetails,
        selectedType,
        loading,
        isModalOpen,
        postMessage,
        openModal,
        closeModal,
        handleChange,
        handleChangeType,
        handleSubmit,
      }}
    >
      {children}
    </AppFormContext.Provider>
  );
};

export const GlobalFormContext = () => {
  return useContext(AppFormContext);
};

export default AppFormProvider;
