# API Routes

This file plans backend routes before students write them.

## Planned Routes

- Health route: confirms the backend is running.
- Riddle route: returns a new riddle.
- Answer route: checks a student's answer.
- User route: loads and saves preferences.
- Progress route: returns dashboard stats later.
- Auth route: prepares login/signup later.

## Teaching Note

Routes should stay small. They should receive requests, validate data, call service files, and return responses.

## Avoid

- Do not put all AI logic in route files.
- Do not put database queries in every route file.
- Do not expose private keys in responses.
