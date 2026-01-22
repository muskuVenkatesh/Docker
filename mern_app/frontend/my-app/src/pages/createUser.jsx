import { useState } from "react";
import { createUser } from "../api";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.username || !form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      await createUser(form);
      navigate("/");
    } catch {
      setError("User creation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        // backgroundColor: "#f3f4f6",
        padding: "20px",
      }}
    >
      <motion.form
        onSubmit={submit}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          backgroundColor: "#FFFFFF",
          padding: "32px",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.75rem",
            fontWeight: "600",
            color: "#1D4ED8",
            marginBottom: "24px",
          }}
        >
          Create User
        </h2>

        {/* Inputs */}
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          style={{
            padding: "12px 16px",
            borderRadius: "10px",
            border: "1px solid #CBD5E1",
            outline: "none",
            fontSize: "14px",
          }}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={{
            padding: "12px 16px",
            borderRadius: "10px",
            border: "1px solid #CBD5E1",
            outline: "none",
            fontSize: "14px",
          }}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={{
            padding: "12px 16px",
            borderRadius: "10px",
            border: "1px solid #CBD5E1",
            outline: "none",
            fontSize: "14px",
          }}
        />

        {error && (
          <p style={{ color: "#DC2626", fontSize: "13px", marginTop: "4px" }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            marginTop: "12px",
            padding: "12px",
            borderRadius: "10px",
            backgroundColor: "#2563EB",
            color: "#FFFFFF",
            fontWeight: "600",
            fontSize: "16px",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "all 0.2s ease-in-out",
            border: "none",
          }}
          onMouseOver={(e) => {
            if (!loading) e.currentTarget.style.backgroundColor = "#1E40AF";
          }}
          onMouseOut={(e) => {
            if (!loading) e.currentTarget.style.backgroundColor = "#2563EB";
          }}
        >
          {loading ? "Creating..." : "Create User"}
        </button>
      </motion.form>
    </div>
  );
}
