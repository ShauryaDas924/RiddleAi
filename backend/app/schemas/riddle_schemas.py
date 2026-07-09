# =========================================================
# Purpose
# =========================================================
# This file will eventually describe riddle-related request and response shapes.
# Schemas help the backend and frontend agree on data structure.
#
# =========================================================
# What to build later
# =========================================================
# Step 1: Define the shape for requesting a new riddle.
# Step 2: Define the shape for returning a riddle.
# Step 3: Define the shape for submitting an answer.
# Step 4: Define the shape for answer feedback.
#
# =========================================================
# Data in and data out
# =========================================================
# Data in: Category, difficulty, answer text, and riddle id.
# Data out: Riddle objects, feedback objects, and validation messages.
#
# =========================================================
# Connects to
# =========================================================
# - backend/app/routes/riddle_routes.py
# - backend/app/services/answer_checking_service.py
# - frontend/my-react-app/src/api/riddleApi.js
#
# =========================================================
# Avoid
# =========================================================
# Do not put database queries or AI calls in schema files.
# Do not make schemas more complicated than the current feature needs.
#
# =========================================================
# Beginner checklist
# =========================================================
# [ ] Are request shapes clear?
# [ ] Are response shapes clear?
# [ ] Are schemas used by routes later?
