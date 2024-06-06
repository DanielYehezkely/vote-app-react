import React from "react";

import './FormPage.css'
import InputField from "../../components/Form/InputField";

const FormPage = () => {
  return (
    <div className="FormPage page">
    <div className="form-container">
        <h1> Anime Voter </h1>
        <span>有 権 者</span>
      <form action="" id="form" className="form">
        <InputField label={'Email'} name={'email'} type={'email'} error={''}/>
        <InputField label={'Password'} name={'password'} type={'password'} error={''}/>
        <input type="submit" value='Let me in !' />
      </form>
    </div>
    </div>
  );
};

export default FormPage;
