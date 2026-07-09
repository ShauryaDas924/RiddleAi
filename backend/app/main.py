# =========================================================
# Purpose
# =========================================================
# This file will eventually start the FastAPI app.
# It is the backend entry point, similar to main.jsx in the frontend.
#
# =========================================================
# What to build later
# =========================================================
# Step 1: Create the FastAPI app object.
# Step 2: Add basic app settings such as title and description.
# Step 3: Connect route files from app/routes.
# Step 4: Add CORS settings only when the frontend needs to call the backend.
#
# =========================================================
# Data in and data out
# =========================================================
# Data in: HTTP requests from the frontend or browser.
# Data out: HTTP responses from route files.
#
# =========================================================
# Connects to
# =========================================================
# - backend/app/config.py
# - backend/app/routes/health_routes.py
# - backend/app/routes/riddle_routes.py
# - backend/app/routes/user_routes.py
# - backend/app/routes/auth_routes.py
#
# =========================================================
# Avoid
# =========================================================
# Do not put all route logic in this file.
# Do not call the AI provider directly from this file.
# Do not put secret key values in source code.
#
# =========================================================
# Beginner checklist
# =========================================================
# [ ] Does main.py only create and connect the app?
# [ ] Are route details kept in route files?
# [ ] Are secrets loaded from environment variables later?
