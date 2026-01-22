import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1D4ED8" }}>
        User Management
      </h1>

      <div style={{ display: "flex", gap: "12px" }}>
        <Link
          to="/"
          style={{
            backgroundColor: "#2563EB",
            color: "#FFFFFF",
            padding: "8px 16px",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          Users
        </Link>

        <Link
          to="/create"
          style={{
            backgroundColor: "#2563EB",
            color: "#FFFFFF",
            padding: "8px 16px",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          + Create User
        </Link>
      </div>
    </nav>
  );
}
