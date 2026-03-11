"""
Test suite for ALT&ACT Contact and Adhesion form endpoints
Tests both successful submissions and validation errors
"""
import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL').rstrip('/')


class TestContactEndpoint:
    """Tests for POST /api/contact endpoint"""

    def test_contact_success_full_payload(self):
        """Test contact form with all fields populated"""
        payload = {
            "nom": "TEST_User Full",
            "email": "test@example.com",
            "sujet": "Test Subject",
            "message": "This is a test message"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        
        assert response.status_code == 200
        data = response.json()
        assert data["success"] is True
        assert "message" in data
        assert "envoyé" in data["message"].lower()

    def test_contact_success_minimal_payload(self):
        """Test contact form with only required fields"""
        payload = {
            "nom": "TEST_User Minimal",
            "email": "minimal@example.com",
            "message": "Minimal test message"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        
        assert response.status_code == 200
        data = response.json()
        assert data["success"] is True

    def test_contact_missing_nom(self):
        """Test contact form with missing nom field - should return 422"""
        payload = {
            "email": "test@example.com",
            "message": "Test message without nom"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        
        assert response.status_code == 422
        data = response.json()
        assert "detail" in data
        # Check that nom is reported as missing
        missing_fields = [d["loc"][-1] for d in data["detail"] if d["type"] == "missing"]
        assert "nom" in missing_fields

    def test_contact_missing_email(self):
        """Test contact form with missing email field - should return 422"""
        payload = {
            "nom": "Test User",
            "message": "Test message without email"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        
        assert response.status_code == 422
        data = response.json()
        assert "detail" in data
        missing_fields = [d["loc"][-1] for d in data["detail"] if d["type"] == "missing"]
        assert "email" in missing_fields

    def test_contact_missing_message(self):
        """Test contact form with missing message field - should return 422"""
        payload = {
            "nom": "Test User",
            "email": "test@example.com"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        
        assert response.status_code == 422
        data = response.json()
        assert "detail" in data
        missing_fields = [d["loc"][-1] for d in data["detail"] if d["type"] == "missing"]
        assert "message" in missing_fields

    def test_contact_empty_body(self):
        """Test contact form with empty body - should return 422"""
        response = requests.post(f"{BASE_URL}/api/contact", json={})
        
        assert response.status_code == 422


class TestAdhesionEndpoint:
    """Tests for POST /api/adhesion endpoint"""

    def test_adhesion_success_full_payload(self):
        """Test adhesion form with all fields populated"""
        payload = {
            "prenom": "TEST_Jean",
            "nom": "Dupont",
            "email": "jean.dupont@example.com",
            "telephone": "0612345678",
            "type_adhesion": "actif",
            "motivation": "Je souhaite rejoindre l'association pour contribuer à la mission"
        }
        response = requests.post(f"{BASE_URL}/api/adhesion", json=payload)
        
        assert response.status_code == 200
        data = response.json()
        assert data["success"] is True
        assert "message" in data
        assert "adhésion" in data["message"].lower()

    def test_adhesion_success_minimal_payload(self):
        """Test adhesion form with only required fields (no telephone)"""
        payload = {
            "prenom": "TEST_Marie",
            "nom": "Martin",
            "email": "marie.martin@example.com",
            "type_adhesion": "sympathisant",
            "motivation": "Je soutiens la cause"
        }
        response = requests.post(f"{BASE_URL}/api/adhesion", json=payload)
        
        assert response.status_code == 200
        data = response.json()
        assert data["success"] is True

    def test_adhesion_default_type(self):
        """Test adhesion form with default type_adhesion (actif)"""
        payload = {
            "prenom": "TEST_Pierre",
            "nom": "Bernard",
            "email": "pierre.bernard@example.com",
            "motivation": "Test motivation"
        }
        response = requests.post(f"{BASE_URL}/api/adhesion", json=payload)
        
        assert response.status_code == 200
        data = response.json()
        assert data["success"] is True

    def test_adhesion_missing_prenom(self):
        """Test adhesion form with missing prenom - should return 422"""
        payload = {
            "nom": "Dupont",
            "email": "test@example.com",
            "motivation": "Test motivation"
        }
        response = requests.post(f"{BASE_URL}/api/adhesion", json=payload)
        
        assert response.status_code == 422
        data = response.json()
        assert "detail" in data
        missing_fields = [d["loc"][-1] for d in data["detail"] if d["type"] == "missing"]
        assert "prenom" in missing_fields

    def test_adhesion_missing_nom(self):
        """Test adhesion form with missing nom - should return 422"""
        payload = {
            "prenom": "Jean",
            "email": "test@example.com",
            "motivation": "Test motivation"
        }
        response = requests.post(f"{BASE_URL}/api/adhesion", json=payload)
        
        assert response.status_code == 422
        data = response.json()
        assert "detail" in data
        missing_fields = [d["loc"][-1] for d in data["detail"] if d["type"] == "missing"]
        assert "nom" in missing_fields

    def test_adhesion_missing_email(self):
        """Test adhesion form with missing email - should return 422"""
        payload = {
            "prenom": "Jean",
            "nom": "Dupont",
            "motivation": "Test motivation"
        }
        response = requests.post(f"{BASE_URL}/api/adhesion", json=payload)
        
        assert response.status_code == 422
        data = response.json()
        assert "detail" in data
        missing_fields = [d["loc"][-1] for d in data["detail"] if d["type"] == "missing"]
        assert "email" in missing_fields

    def test_adhesion_missing_motivation(self):
        """Test adhesion form with missing motivation - should return 422"""
        payload = {
            "prenom": "Jean",
            "nom": "Dupont",
            "email": "test@example.com"
        }
        response = requests.post(f"{BASE_URL}/api/adhesion", json=payload)
        
        assert response.status_code == 422
        data = response.json()
        assert "detail" in data
        missing_fields = [d["loc"][-1] for d in data["detail"] if d["type"] == "missing"]
        assert "motivation" in missing_fields

    def test_adhesion_empty_body(self):
        """Test adhesion form with empty body - should return 422"""
        response = requests.post(f"{BASE_URL}/api/adhesion", json={})
        
        assert response.status_code == 422


class TestApiHealth:
    """Tests for API health check"""

    def test_api_root(self):
        """Test API root endpoint is accessible"""
        response = requests.get(f"{BASE_URL}/api/")
        
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
