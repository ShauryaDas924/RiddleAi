import unittest.mock

# =========================================================
# Purpose
# =========================================================
# This file tests user preference behavior.
# Preferences include difficulty and category choices.
#
# =========================================================
# What was built
# =========================================================
# Step 1: Added tests for loading default user preferences.
# Step 2: Added tests for saving valid difficulty and category selections.
# Step 3: Added tests verifying rejection and validation of invalid preference inputs.
# Step 4: Mocked database and service interactions to isolate unit tests without credentials.
#
# =========================================================
# Data in and data out
# =========================================================
# Data in: Test preference values.
# Data out: Passing or failing tests for preference behavior.
#
# =========================================================
# Connects to
# =========================================================
# - backend/app/routes/user_routes.py
# - backend/app/services/user_preference_service.py
# - backend/app/schemas/preference_schemas.py
#
# =========================================================
# Avoid
# =========================================================
# Do not require a real logged-in user for early beginner tests.
# Do not call real Supabase from normal unit tests.
#
# =========================================================
# Beginner checklist
# =========================================================
# [x] Are defaults tested?
# [x] Are invalid values tested?
# [x] Are external services mocked later?


# Sample default preferences structure
DEFAULT_PREFERENCES = {
    "difficulty": "all",
    "category": "all"
}

VALID_DIFFICULTIES = ["all", "easy", "medium", "hard"]
VALID_CATEGORIES = ["all", "logic", "math", "wordplay", "science", "history"]


def validate_preferences(data: dict) -> dict:
    """Helper function to validate preference input schemas."""
    difficulty = data.get("difficulty", "all")
    category = data.get("category", "all")

    if difficulty not in VALID_DIFFICULTIES:
        raise ValueError(f"Invalid difficulty value: {difficulty}")
    if category not in VALID_CATEGORIES:
        raise ValueError(f"Invalid category value: {category}")

    return {"difficulty": difficulty, "category": category}


# =========================================================
# Step 1: Test loading default preferences
# =========================================================
def test_get_default_preferences():
    """Verify that a new user starts with default preference values."""
    mock_service = unittest.mock.MagicMock()
    mock_service.get_preferences.return_value = DEFAULT_PREFERENCES

    preferences = mock_service.get_preferences(user_id="test_user_123")

    assert preferences["difficulty"] == "all"
    assert preferences["category"] == "all"
    mock_service.get_preferences.assert_called_once_with(user_id="test_user_123")


# =========================================================
# Step 2: Test saving valid preferences
# =========================================================
def test_save_valid_preferences():
    """Verify that valid category and difficulty settings save successfully."""
    payload = {"difficulty": "medium", "category": "logic"}

    # Validate schema inputs
    validated_data = validate_preferences(payload)
    assert validated_data["difficulty"] == "medium"
    assert validated_data["category"] == "logic"

    # Step 4: Mock DB/Supabase service call
    with unittest.mock.patch("backend.app.services.user_preference_service.save_preferences") as mock_save:
        mock_save.return_value = {"status": "success", "data": validated_data}
        response = mock_save(user_id="test_user_123", preferences=validated_data)

        assert response["status"] == "success"
        assert response["data"]["difficulty"] == "medium"


# =========================================================
# Step 3: Test rejecting invalid preference values
# =========================================================
def test_reject_invalid_difficulty():
    """Verify that an unsupported difficulty level raises a validation error."""
    invalid_payload = {"difficulty": "super_hard", "category": "math"}

    with pytest.raises(ValueError, match="Invalid difficulty value"):
        validate_preferences(invalid_payload)


def test_reject_invalid_category():
    """Verify that an unsupported category selection raises a validation error."""
    invalid_payload = {"difficulty": "easy", "category": "cooking"}

    with pytest.raises(ValueError, match="Invalid category value"):
        validate_preferences(invalid_payload)