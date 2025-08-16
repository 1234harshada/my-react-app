import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegistrationForm() {
  // Initialize step and formData from localStorage
  const [step, setStep] = useState(() => {
    const savedStep = localStorage.getItem("formStep");
    return savedStep ? Number(savedStep) : 1;
  });

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : {
          fullName: "",
          email: "",
          phone: "",
          username: "",
          password: "",
          confirmPassword: "",
        };
  });

  const [showPassword, setShowPassword] = useState(false);

  // Save data whenever it changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem("formStep", step);
  }, [formData, step]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateStep = () => {
    if (step === 1) {
      if (!formData.fullName || !formData.email || !formData.phone) {
        toast.error("Please fill all fields in Personal Info");
        return false;
      }
      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        toast.error("Enter a valid email");
        return false;
      }
    }
    if (step === 2) {
      if (!formData.username || !formData.password || !formData.confirmPassword) {
        toast.error("Please fill all fields in Account Info");
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match");
        return false;
      }
    }
    return true;
  };

  const nextStep = () => { if (validateStep()) setStep(prev => prev + 1); };
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = () => {
    if (window.confirm("Are you sure you want to submit?")) {
      toast.success("Registration Successful!");
      localStorage.clear(); // clear saved data
      setStep(1);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        username: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        textAlign: "center"
      }}
    >
      <h2>Step {step} of 3</h2>

      {/* Step 1: Personal Info */}
      {step === 1 && (
        <div>
          <h3>Personal Information</h3>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
          <button onClick={nextStep} style={{ padding: "10px 20px" }}>
            Next
          </button>
        </div>
      )}

      {/* Step 2: Account Info */}
      {step === 2 && (
        <div>
          <h3>Account Information</h3>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
          <label>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={togglePassword}
            />{" "}
            Show Password
          </label>
          <br /><br />
          <button onClick={prevStep} style={{ padding: "10px 20px", marginRight: "10px" }}>
            Back
          </button>
          <button onClick={nextStep} style={{ padding: "10px 20px" }}>
            Next
          </button>
        </div>
      )}

      {/* Step 3: Review & Submit */}
      {step === 3 && (
        <div>
          <h3>Review & Submit</h3>
          <p><b>Full Name:</b> {formData.fullName}</p>
          <p><b>Email:</b> {formData.email}</p>
          <p><b>Phone:</b> {formData.phone}</p>
          <p><b>Username:</b> {formData.username}</p>
          <button onClick={prevStep} style={{ padding: "10px 20px", marginRight: "10px" }}>
            Back
          </button>
          <button onClick={handleSubmit} style={{ padding: "10px 20px" }}>
            Submit
          </button>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default RegistrationForm;