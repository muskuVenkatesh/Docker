# ---------- Stage 1: Build ----------
FROM python:3.11-slim AS builder

WORKDIR /app

COPY calcy.py .

# # Compile Python code (optional but recommended)
# RUN python -m compileall calcy.py


# # ---------- Stage 2: Runtime (Distroless) ----------
# FROM gcr.io/distroless/python3-debian12

# WORKDIR /app

# # Copy only the required files from the builder stage
# COPY --from=builder /app /app

# # Run as non-root user for security
# USER nonroot

# Start the application
CMD ["calcy.py"]
