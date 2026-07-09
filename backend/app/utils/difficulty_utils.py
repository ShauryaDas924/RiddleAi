# =========================================================
# Purpose
# =========================================================
# This file will eventually hold helper logic for riddle difficulty.
# It can help keep difficulty names consistent across the backend.
#
# =========================================================
# What to build later
# =========================================================
# Step 1: Decide which difficulties are allowed.
# Step 2: Add helper logic to validate difficulty values later.
# Step 3: Add descriptions for what easy, medium, and hard mean.
# Step 4: Reuse this helper in routes or services.
#
# =========================================================
# Data in and data out
# =========================================================
# Data in: Difficulty text from the frontend or database.
# Data out: Validated or normalized difficulty values.
#
# =========================================================
# Connects to
# =========================================================
# - backend/app/schemas/preference_schemas.py
# - backend/app/services/ai_riddle_service.py
# - frontend/my-react-app/src/components/riddles/DifficultySelector.jsx
#
# =========================================================
# Avoid
# =========================================================
# Do not let every file invent its own difficulty names.
# Do not make difficulty rules too complicated at first.
#
# =========================================================
# Beginner checklist
# =========================================================
# [ ] Are difficulty names consistent?
# [ ] Are invalid values handled later?
# [ ] Is this helper small?
