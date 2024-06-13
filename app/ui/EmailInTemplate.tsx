import * as React from "react";

interface MyFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const EmailInTemplate = (formData: MyFormData): React.ReactNode => (
  <div
    style={{ fontFamily: "Arial, sans-serif", color: "#333", padding: "20px" }}>
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}>
      <div
        style={{
          padding: "20px",
          borderBottom: "2px solid #4CAF50",
          textAlign: "center",
        }}>
        <h1 style={{ color: "#4CAF50" }}>New Customer: {formData.name}!</h1>
      </div>
      <div style={{ padding: "20px" }}>
        <p>
          <strong>Hey Boss!</strong>
        </p>
        <p>
          We got a new customer, here is the information they provided us with:
        </p>
        <p>
          <strong>Customer Information:</strong>
        </p>
        <ul>
          <li>Email : {formData.email}</li>
          <li>Phone: {formData.phone}</li>
          <li>Service: {formData.service}</li>
          <li>Added Notes: {formData.message}</li>
        </ul>
      </div>
      <div
        style={{
          padding: "20px",
          backgroundColor: "#4CAF50",
          color: "#fff",
          textAlign: "center",
          borderRadius: "0 0 8px 8px",
        }}>
        <p>&copy; 2024 Ultimate Detailers. All rights reserved.</p>
      </div>
    </div>
  </div>
);
