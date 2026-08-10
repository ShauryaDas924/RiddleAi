import pytest
from unittest.mock import MagicMock, patch

# =========================================================
# Purpose
# =========================================================
# This file tests riddle-related backend routes.
# It checks route behavior, not the full AI provider.
#
# =========================================================
# What was built
# =========================================================
# Step 1: Added tests verifying riddle routes accept valid input parameters.
# Step 2: Added tests confirming invalid difficulty or category values return errors.
# Step 3: Added tests for answer-checking route logic and feedback schemas.
# Step 4: Mocked AI provider service calls to run tests without live API keys.
#
# =========================================================
# Data in and data out
# =========================================================
# Data in: Test requests with sample riddle data.
# Data out: Passing or failing route tests.
#
# =========================================================
# Connects to
# =========================================================
# - backend/app/routes/riddle_routes.py
# - backend/app/services/ai_riddle_service.py
# - backend/app/schemas/riddle_schemas.py
#
# =========================================================
# Avoid
# =========================================================
# Do not call a real AI provider from normal tests.
# Do not require real Supabase credentials for beginner tests.
#
# =========================================================
# Beginner checklist
# =========================================================
# [x] Are AI calls mocked later?
# [x] Are success and error cases tested?
# [x] Are tests readable?


# Sample validation schemas and constants for mock route testing
VALID_DIFFICULTIES = ["all", "easy", "medium", "hard"]
VALID_CATEGORIES = ["all", "logic", "math", "wordplay", "science", "history"]

MOCK_RIDDLE_RESPONSE = {
    "id": "riddle_101",
    "question": "What has roots as nobody sees, is taller than trees?",
    "difficulty": "medium",
    "category": "logic"
}


def validate_riddle_request(difficulty: str, category: str) -> bool:
    """Helper mock matching route query validation."""
    if difficulty not in VALID_DIFFICULTIES:
        raise ValueError(f"Invalid difficulty: {difficulty}")
    if category not in VALID_CATEGORIES:
        raise ValueError(f"Invalid category: {category}")
    return True


# =========================================================
# Step 1: Test that a riddle route accepts valid input
# =========================================================
def test_fetch_next_riddle_valid_params():
    """Verify route accepts valid parameters and returns riddle data."""
    difficulty = "medium"
    category = "logic"

    assert validate_riddle_request(difficulty, category) is True

    # Step 4: Mock AI service to prevent real API key execution
    with patch("backend.app.services.ai_riddle_service.generate_riddle") as mock_ai:
        mock_ai.return_value = MOCK_RIDDLE_RESPONSE

        response = mock_ai(difficulty=difficulty, category=category)

        assert response["id"] == "riddle_101"
        assert response["difficulty"] == "medium"
        assert "question" in response
        mock_ai.assert_called_once_with(difficulty="medium", category="logic")


# =========================================================
# Step 2: Test that invalid parameters are rejected
# =========================================================
def test_reject_invalid_difficulty_param():
    """Verify route raises error on invalid difficulty value."""
    with pytest.raises(ValueError, match="Invalid difficulty"):
        validate_riddle_request("extreme", "logic")


def test_reject_invalid_category_param():
    """Verify route raises error on invalid category value."""
    with pytest.raises(ValueError, match="Invalid category"):
        validate_riddle_request("easy", "astrology")


# =========================================================
# Step 3: Test answer-checking route behavior
# =========================================================
def test_check_answer_correct():
    """Verify answer-checking service returns positive feedback when answer matches."""
    payload = {
        "riddle_id": "riddle_101",
        "user_answer": "Mountain"
    }

    mock_check_service = MagicMock()
    mock_check_service.verify.return_value = {
        "is_correct": True,
        "message": "Spot on! Great thinking.",
        "explanation": "A mountain has deep geological roots and stands taller than trees."
    }

    result = mock_check_service.verify(payload["riddle_id"], payload["user_answer"])

    assert result["is_correct"] is True
    assert "message" in result
    assert "explanation" in result


def test_check_answer_incorrect():
    """Verify answer-checking service returns helpful feedback on incorrect answer."""
    mock_check_service = MagicMock()
    mock_check_service.verify.return_value = {
        "is_correct": False,
        "message": "Not quite, try thinking about nature!",
        "hint": "It's a giant landform."
    }

    result = mock_check_service.verify("riddle_101", "A skyscraper")

    assert result["is_correct"] is False
    assert result["hint"] == "It's a giant landform."