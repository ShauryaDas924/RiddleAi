# =========================================================
# Purpose
# =========================================================
# This file will eventually read backend configuration from environment variables.
# Configuration includes app mode, Supabase settings, and AI provider settings.
#
# =========================================================
# What to build later
# =========================================================
# Step 1: Read APP_ENV, BACKEND_HOST, and BACKEND_PORT.
# Step 2: Read Supabase URL and keys from the backend environment.
# Step 3: Read AI_API_KEY and AI_MODEL_NAME from the backend environment.
# Step 4: Provide clear errors when required settings are missing.
#
# =========================================================
# Data in and data out
# =========================================================
# Data in: Values from backend/.env or the server environment.
# Data out: Safe configuration values used by backend files.
#
# =========================================================
# Connects to
# =========================================================
# - backend/.env.example
# - backend/app/main.py
# - backend/app/services/supabase_service.py
# - backend/app/services/ai_riddle_service.py
#
# =========================================================
# Avoid
# =========================================================
# Do not hard-code real API keys.
# Do not expose service role keys to frontend files.
# Do not commit a real .env file.
#
# =========================================================
# Beginner checklist
# =========================================================
# [ ] Are secrets read from environment variables?
# [ ] Are missing settings easy to debug?
# [ ] Are private keys backend-only?
