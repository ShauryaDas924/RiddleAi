# Tables

Use this file to plan table columns before writing migrations.

## Starter Table Ideas

`users`
- Purpose: connect app data to Supabase auth users.

`user_preferences`
- Purpose: store preferred difficulty and favorite categories.

`riddle_history`
- Purpose: remember shown, solved, failed, and skipped riddles.

`answer_attempts`
- Purpose: save submitted answers and feedback results.

`progress_stats`
- Purpose: make dashboard summaries easier later.

`ai_generation_logs`
- Purpose: help debug AI-generated riddles later.

## Avoid

- Do not add columns just because they might be useful someday.
- Do not store sensitive secrets in tables.
- Do not create migrations until these notes feel clear.

## Beginner Checklist

- [ ] Does every table have a purpose?
- [ ] Can the backend explain why it needs each table?
- [ ] Are migrations still saved for later?
