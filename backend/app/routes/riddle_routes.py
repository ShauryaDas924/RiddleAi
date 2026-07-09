# =========================================================
# Purpose
# =========================================================
# This file will eventually contain API routes related to riddles.
# Routes should receive requests from the frontend and call service files.
#
# =========================================================
# What to build later
# =========================================================
# Step 1: Create a router for riddle endpoints.
# Step 2: Add a route to request a new riddle.
# Step 3: Add a route to check a submitted answer.
# Step 4: Add routes for skip or history later if needed.
# Step 5: Call service files instead of putting all logic directly here.
#
# =========================================================
# Data in and data out
# =========================================================
# Data in: Difficulty, category, answer text, and riddle id.
# Data out: Riddle data, answer feedback, and status messages.
#
# =========================================================
# Connects to
# =========================================================
# - backend/app/services/ai_riddle_service.py
# - backend/app/services/answer_checking_service.py
# - backend/app/services/riddle_history_service.py
# - backend/app/schemas/riddle_schemas.py
# - frontend/my-react-app/src/api/riddleApi.js
#
# =========================================================
# Avoid
# =========================================================
# Do not call the AI provider directly from this route if a service file exists.
# Do not put database queries directly in route handlers.
#
# =========================================================
# Beginner checklist
# =========================================================
# [ ] Are routes small and easy to read?
# [ ] Is business logic moved into services?
# [ ] Are request and response shapes described in schemas later?
