# =========================================================
# Purpose
# =========================================================
# This file will eventually manage riddle history.
# History helps prevent students from seeing the same riddle repeatedly.
#
# =========================================================
# What to build later
# =========================================================
# Step 1: Load which riddles a user has already seen.
# Step 2: Save shown, solved, failed, and skipped riddles.
# Step 3: Help AI generation avoid repeated riddles.
# Step 4: Provide progress data for the dashboard.
#
# =========================================================
# Data in and data out
# =========================================================
# Data in: User id, riddle id, result status, and answer attempts.
# Data out: History records, repeat checks, and progress summaries.
#
# =========================================================
# Connects to
# =========================================================
# - backend/app/services/supabase_service.py
# - backend/app/services/ai_riddle_service.py
# - backend/app/routes/riddle_routes.py
# - frontend/my-react-app/src/pages/DashboardPage.jsx
#
# =========================================================
# Avoid
# =========================================================
# Do not store history only in frontend state.
# Do not make repetition prevention random without checking stored history.
#
# =========================================================
# Beginner checklist
# =========================================================
# [ ] Can the backend tell if a user saw a riddle?
# [ ] Are solved, failed, and skipped statuses planned?
# [ ] Can progress be built from history later?
