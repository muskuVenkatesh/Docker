import { useEffect, useState } from "react";
import { fetchUsers } from "../api";
import { motion } from "framer-motion";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const filteredUsers = users.filter(
    (u) =>
      u.username.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "24px",
        maxWidth: "900px",
        margin: "0 auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Header + Search */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "600", color: "#1D4ED8" }}>
          Users
        </h2>
        <input
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px 16px",
            borderRadius: "8px",
            border: "1px solid #CBD5E1",
            width: "250px",
            outline: "none",
            fontSize: "14px",
          }}
        />
      </div>

      {/* Users List */}
      {filteredUsers.length === 0 ? (
        <p style={{ textAlign: "center", color: "#6B7280", marginTop: "40px" }}>
          No users found
        </p>
      ) : (
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "16px",
          }}
        >
          {filteredUsers.map((user) => (
            <motion.li
              key={user._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(0,0,0,0.12)" }}
              style={{
                backgroundColor: "#FFFFFF",
                padding: "20px",
                borderRadius: "16px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
              }}
            >
              <p style={{ fontWeight: "600", fontSize: "16px", color: "#1F2937" }}>
                {user.username}
              </p>
              <p style={{ fontSize: "14px", color: "#6B7280" }}>{user.email}</p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#9CA3AF",
                  marginTop: "8px",
                }}
              >
                Created: {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
}
