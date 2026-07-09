# Backend Models

This folder is reserved for internal backend model notes or model classes later.

## Teaching Note

For this beginner project, start with `app/schemas` for request and response shapes. Add model files only when the backend needs a separate internal representation of database records or app objects.

## Avoid

- Do not create model files just to make the project look more advanced.
- Do not duplicate the exact same shape in both `models` and `schemas` without a reason.
- Do not put Supabase queries here unless the project intentionally changes structure later.

## Beginner Checklist

- [ ] Are schemas enough for the current feature?
- [ ] Is there a clear reason to add a model?
- [ ] Is database access still kept in services?
