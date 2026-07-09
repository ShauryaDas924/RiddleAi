# Database Schema

This file is a short planning guide for Supabase tables.

## Planned Data

- Users
- User preferences
- Riddles shown to each user
- Answer attempts
- Solved, failed, and skipped riddles
- Saved progress and stats
- AI generation metadata

## Teaching Note

Start with the smallest tables that support the first working play flow. Add more only when the app needs them.

## Avoid

- Do not create real migrations too early.
- Do not store real secrets in database docs.
- Do not over-design analytics at the beginning.
