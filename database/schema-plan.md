# Schema Plan

This file explains the future Supabase data model in plain English.

## First Tables To Consider

- Users: student identity from Supabase auth.
- User preferences: difficulty and favorite categories.
- Riddle history: which riddles each user has seen.
- Answer attempts: what the student submitted and when.
- Progress stats: solved, failed, skipped, and streak-like summaries.
- AI generation logs: basic metadata about generated riddles.

## Suggested Build Steps

1. Start with user preferences and riddle history.
2. Add answer attempts once answer checking works.
3. Add progress stats after history data exists.
4. Add AI logs only when debugging generated riddles becomes useful.

## Avoid

- Do not design too many tables before building the first play flow.
- Do not put secret keys in database notes.
- Do not write production SQL in this planning file.

## Beginner Checklist

- [ ] Can each table be explained in one sentence?
- [ ] Does each table support a real app feature?
- [ ] Is the first database version small?
