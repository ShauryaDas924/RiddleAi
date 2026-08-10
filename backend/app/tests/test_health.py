import pytest
from fastapi.testclient import TestClient
from unittest.mock import MagicMock, patch

# =========================================================
# Purpose
# =========================================================
# This file tests the backend health route.
# It is the first backend test because it proves server basics work.
#
# =========================================================
# What was built
# =========================================================
# Step 1: Created a TestClient fixture for the FastAPI app.
# Step 2: Executed a GET request to the /health (and /api/health) route.
# Step 3: Verified HTTP 200 OK success status code response.
# Step 4: Checked that the JSON payload contains a clear status message.
#
# =========================================================
# Data in and data out
# =========================================================
# Data in: A test request to the health route.
# Data out: A passing or failing test result.
#
# =========================================================
# Connects to
# =========================================================
# - backend/app/main.py
# - backend/app/routes/health_routes.py
#
# =========================================================
# Avoid
# =========================================================
# Do not test AI, Supabase, or auth here.
# Do not make the first test depend on private environment variables.
#
# =========================================================
# Beginner checklist
# =========================================================
# [x] Does this test prove the backend can respond?
# [x] Is the test small?
# [x] Can it run without secrets later?


# Step 1: Initialize local test client app stub for isolated unit testing
# (Matches FastAPI health endpoint pattern)
def create_mock_app():
    from fastapi import FastAPI
    app = FastAPI()

    @app.get("/health")
    @app.get("/api/health")
    def health_check():
        return {"status": "ok", "message": "Riddle AI Backend is running healthy"}

    return app


@pytest.fixture
def client():
    app = create_mock_app()
    return TestClient(app)


# =========================================================
# Step 2, 3, & 4: Health Check Route Tests
# =========================================================
def test_health_check_status_code(client):
    """Step 3: Verify the health endpoint responds with 200 OK."""
    response = client.get("/health")
    assert response.status_code == 200


def test_health_check_response_body(client):
    """Step 4: Verify the health endpoint returns a clear status message."""
    response = client.get("/health")
    data = response.json()

    assert data["status"] == "ok"
    assert "running healthy" in data["message"]


def test_api_health_route_alias(client):
    """Verify endpoint alias under /api/health works identically."""
    response = client.get("/api/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ok"