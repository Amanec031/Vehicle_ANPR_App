// import React from "react";
// import myAudio from "./warning.mp3";
// const NotRegistered = () => {
//   let audio = new Audio(myAudio);
//   audio.play();
//   return <h1>Vehicle Not Registered on Vahan Database</h1>;
// };

// export default NotRegistered;
import React, { useState, useEffect } from "react";
import warningSound from "./warning.mp3";
import "./NotRegistered.css"; // Import CSS file for styling

const NotRegistered = () => {
  const [formData, setFormData] = useState({
    registrationNumber: "",
    vehicleType: "",
    fuelType: "",
    make: "",
    model: "",
    manufacturer: "",
    address: "",
    ownerName: "",
    fitnessValidity: "",
    registrationValidity: "",
    puccValidity: "",
    insuranceCompany: "",
    insuranceValidity: "",
    policyNumber: "",
    pollutionNorms: "",
    registrationDate: "",
    mvTax: "",
    rcStatus: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    const audio = new Audio(warningSound);

    const handleCanPlayThrough = () => {
      audio.play();
    };

    audio.addEventListener("canplaythrough", handleCanPlayThrough);

    return () => {
      audio.removeEventListener("canplaythrough", handleCanPlayThrough);
      if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  // const audio = new Audio(warningSound);
  // audio.play();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data (you can handle this part as needed)
    console.log(formData);
    setSubmittedData(formData);
  };

  return (
    <div className="not-registered-container">

      <h1 className="not-registered-heading">Vehicle Not Registered on Vahan Database</h1>
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Fill the Form! </h2>
        <div className="form-group">
          <label htmlFor="registrationNumber">Registration Number:</label>
          <input type="text" id="registrationNumber" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="vehicleType">Vehicle Type:</label>
          <input type="text" id="vehicleType" name="vehicleType" value={formData.vehicleType} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="fuelType">Fuel Type:</label>
          <input type="text" id="fuelType" name="fuelType" value={formData.fuelType} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="make">Make:</label>
          <input type="text" id="make" name="make" value={formData.make} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="model">Model:</label>
          <input type="text" id="model" name="model" value={formData.model} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="manufacturer">Manufacturer:</label>
          <input type="text" id="manufacturer" name="manufacturer" value={formData.manufacturer} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="ownerName">Owner Name:</label>
          <input type="text" id="ownerName" name="ownerName" value={formData.ownerName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="fitnessValidity">Fitness Validity:</label>
          <input type="text" id="fitnessValidity" name="fitnessValidity" value={formData.fitnessValidity} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="registrationValidity">Registration Validity:</label>
          <input type="text" id="registrationValidity" name="registrationValidity" value={formData.registrationValidity} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="puccValidity">PUCC Validity:</label>
          <input type="text" id="puccValidity" name="puccValidity" value={formData.puccValidity} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="insuranceCompany">Insurance Company:</label>
          <input type="text" id="insuranceCompany" name="insuranceCompany" value={formData.insuranceCompany} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="insuranceValidity">Insurance Validity:</label>
          <input type="text" id="insuranceValidity" name="insuranceValidity" value={formData.insuranceValidity} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="policyNumber">Policy Number:</label>
          <input type="text" id="policyNumber" name="policyNumber" value={formData.policyNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="pollutionNorms">Pollution Norms:</label>
          <input type="text" id="pollutionNorms" name="pollutionNorms" value={formData.pollutionNorms} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="registrationDate">Registration Date:</label>
          <input type="text" id="registrationDate" name="registrationDate" value={formData.registrationDate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="mvTax">MV Tax:</label>
          <input type="text" id="mvTax" name="mvTax" value={formData.mvTax} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="rcStatus">RC Status:</label>
          <input type="text" id="rcStatus" name="rcStatus" value={formData.rcStatus} onChange={handleChange} />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      {submittedData && (
        <div className="form-data-display">
          <h2>Submitted Data:</h2>
          <div className="submitted-data">
            {Object.entries(submittedData).map(([key, value]) => (
              <div key={key} className="form-group">
                <label htmlFor={key}>{key}:</label>
                <span id={key}>{value}</span>
              </div>
            ))}
          </div>
        </div>

      )}
    </div>
  );
};

export default NotRegistered;
