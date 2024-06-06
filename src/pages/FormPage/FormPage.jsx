import React, { useState } from "react";
import './FormPage.css';
import InputField from "../../components/Form/InputField";
import { useCheckUser } from "../../context/CheckUserContext";

const FormPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { checkUserCredentials, isLoading, error } = useCheckUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await checkUserCredentials(email, password);
  };

  return (
    <div className="FormPage page">
      <div className="form-container">
        <h1>Anime Voter</h1>
        <span>有 権 者</span>
        <form id="form" className="form" onSubmit={handleSubmit}>
          <InputField
            label="Email"
            name="email"
            type="email"
            error={error}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            error={error}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Let me in!" disabled={isLoading} />
        </form>
      </div>
    </div>
  );
};

export default FormPage;