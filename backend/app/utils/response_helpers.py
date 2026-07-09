# =========================================================
# Purpose
# =========================================================
# This file will eventually hold small helpers for consistent backend responses.
# Consistent responses make frontend code easier to write.
#
# =========================================================
# What to build later
# =========================================================
# Step 1: Decide what a success response should look like.
# Step 2: Decide what an error response should look like.
# Step 3: Keep helper functions small and predictable.
# Step 4: Use helpers from route files only when they make code clearer.
#
# =========================================================
# Data in and data out
# =========================================================
# Data in: Response message, payload, or error information.
# Data out: Consistent response shape for frontend API files.
#
# =========================================================
# Connects to
# =========================================================
# - backend/app/routes/*
# - frontend/my-react-app/src/api/*
#
# =========================================================
# Avoid
# =========================================================
# Do not hide important errors.
# Do not create a complicated response system too early.
#
# =========================================================
# Beginner checklist
# =========================================================
# [ ] Are responses consistent?
# [ ] Can the frontend read them easily?
# [ ] Are helpers actually reducing repetition?
