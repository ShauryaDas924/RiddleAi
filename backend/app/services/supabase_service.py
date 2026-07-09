# =========================================================
# Purpose
# =========================================================
# This file will eventually be the backend's connection point to Supabase.
# It can help routes and services read or write database/auth data safely.
#
# =========================================================
# What to build later
# =========================================================
# Step 1: Load Supabase settings from config.py.
# Step 2: Create a backend Supabase client later.
# Step 3: Add helper functions for common database operations.
# Step 4: Keep database access behind clear service functions.
#
# =========================================================
# Data in and data out
# =========================================================
# Data in: Table names, records, filters, and user identifiers later.
# Data out: Database records or safe errors.
#
# =========================================================
# Connects to
# =========================================================
# - backend/app/config.py
# - backend/app/services/riddle_history_service.py
# - backend/app/services/user_preference_service.py
# - database/schema-plan.md
#
# =========================================================
# Avoid
# =========================================================
# Do not put the Supabase service role key in frontend files.
# Do not commit real keys.
# Do not scatter database queries across every route file.
#
# =========================================================
# Beginner checklist
# =========================================================
# [ ] Are private keys backend-only?
# [ ] Is database access centralized enough to understand?
# [ ] Are errors handled safely?
