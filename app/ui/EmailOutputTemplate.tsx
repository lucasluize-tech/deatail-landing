import * as React from "react";

const handleHref = (service: string) => {
  if (service === "Premium Wash") {
    return "https://cal.com/lucasluize/premium-wash";
  }
  if (service === "Best Value Detail") {
    return "https://cal.com/lucasluize/best-value-detail";
  }
  if (service === "Full Detail") {
    return "https://cal.com/lucasluize/full-detail";
  }
};

interface MyFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const EmailOutTemplate = (formData: MyFormData): React.ReactNode => (
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
        <h1 style={{ color: "#4CAF50" }}>Welcome, {formData.name}!</h1>
      </div>
      <div style={{ padding: "20px" }}>
        <p>Dear {formData.name},</p>
        <p>
          Thank you for choosing my car detailing services. I&pos;m thrilled to
          have you on board and look forward to providing you with the highest
          quality service.
        </p>
        <p>Here’s the information you gave us:</p>
        <ul>
          <li>Email : {formData.email}</li>
          <li>Phone: {formData.phone}</li>
          <li>Service: {formData.service}</li>
          <li>Added Notes: {formData.message}</li>
        </ul>
        <button
          style={{
            backgroundColor: "#4CAF50",
            color: "#000",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}>
          <a
            style={{
              textDecoration: "None",
              color: "#fff",
            }}
            href={handleHref(formData.service)}>
            Schedule your service
          </a>
        </button>

        <p>
          If you have any questions or need further assistance, please do not
          hesitate to reach out, I&apos;m are here to help!
        </p>
        <p>
          <i>Monday to Friday 10:00 - 5:00 / 973-855-9977</i>
        </p>
        <p>Best regards,</p>
        <p>
          <strong>Your Car Detailer</strong>
        </p>
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
