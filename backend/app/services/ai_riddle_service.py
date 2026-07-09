# =========================================================
# Purpose
# =========================================================
# This file will eventually handle AI-powered riddle generation.
# It should be the backend place that knows how to ask an AI provider for riddles.
#
# =========================================================
# What to build later
# =========================================================
# Step 1: Read prompt text from the prompts folder.
# Step 2: Accept difficulty, category, and user history as inputs.
# Step 3: Call the AI provider using backend-only credentials.
# Step 4: Return clean riddle data to the route or another service.
#
# =========================================================
# Data in and data out
# =========================================================
# Data in: Difficulty, category, previous riddles, and prompt rules.
# Data out: A generated riddle with answer, category, and difficulty metadata.
#
# =========================================================
# Connects to
# =========================================================
# - backend/app/prompts/riddle_generation_prompt.txt
# - backend/app/config.py
# - backend/app/routes/riddle_routes.py
# - backend/app/services/riddle_history_service.py
#
# =========================================================
# Avoid
# =========================================================
# Do not put AI API keys directly in this file.
# Do not return messy AI output directly to the frontend without cleaning it.
# Do not ignore riddle history when repetition prevention is ready.
#
# =========================================================
# Beginner checklist
# =========================================================
# [ ] Are AI credentials loaded from backend env?
# [ ] Does the service accept difficulty and category?
# [ ] Is generated data shaped clearly before returning?
