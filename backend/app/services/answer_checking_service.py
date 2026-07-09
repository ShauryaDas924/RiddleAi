# =========================================================
# Purpose
# =========================================================
# This file will eventually check whether a student's answer is correct.
# It may use simple comparison, AI evaluation, or both later.
#
# =========================================================
# What to build later
# =========================================================
# Step 1: Accept the riddle, correct answer, and student answer.
# Step 2: Normalize simple text differences if useful.
# Step 3: Use the AI answer-checking prompt only when needed.
# Step 4: Return friendly feedback for the frontend.
#
# =========================================================
# Data in and data out
# =========================================================
# Data in: Student answer, expected answer, and riddle context.
# Data out: Correctness status, feedback text, and optional hint.
#
# =========================================================
# Connects to
# =========================================================
# - backend/app/prompts/answer_checking_prompt.txt
# - backend/app/routes/riddle_routes.py
# - backend/app/services/riddle_history_service.py
# - backend/app/schemas/riddle_schemas.py
#
# =========================================================
# Avoid
# =========================================================
# Do not make the frontend decide trusted correctness.
# Do not reveal the answer too early unless the app flow says to.
# Do not make feedback discouraging.
#
# =========================================================
# Beginner checklist
# =========================================================
# [ ] Is the answer checked on the backend?
# [ ] Is feedback clear and student-friendly?
# [ ] Is progress saved after checking later?
