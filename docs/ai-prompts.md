# AI Prompts

This file plans how AI prompts should behave before connecting an AI provider.

## Prompt Files

- `backend/app/prompts/riddle_generation_prompt.txt`
- `backend/app/prompts/answer_checking_prompt.txt`
- `backend/app/prompts/system_rules_prompt.txt`

## Teaching Note

Prompts should be clear, safe for students, and easy for the backend to use. The backend should call the AI provider, not the frontend.

## Avoid

- Do not include API keys in prompts.
- Do not write a final production prompt before testing the app flow.
- Do not ask the AI for more data than the backend needs.
