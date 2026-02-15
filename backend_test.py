#!/usr/bin/env python3
"""
VSI Backend API Testing Suite
Tests all endpoints for the VSI (Valoriser Son Identité Professionnelle) platform
"""

import requests
import json
import sys
from datetime import datetime
from typing import Dict, Any, Optional

class VSIAPITester:
    def __init__(self, base_url="https://logo-hero-deploy.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def log_test(self, name: str, success: bool, details: str = ""):
        """Log test result"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
            print(f"✅ {name}: PASSED")
        else:
            print(f"❌ {name}: FAILED - {details}")
        
        self.test_results.append({
            "name": name,
            "success": success,
            "details": details
        })

    def test_api_root(self) -> bool:
        """Test API root endpoint"""
        try:
            response = requests.get(f"{self.api_url}/", timeout=10)
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            if success:
                data = response.json()
                details += f", Message: {data.get('message', 'No message')}"
            self.log_test("API Root", success, details)
            return success
        except Exception as e:
            self.log_test("API Root", False, str(e))
            return False

    def test_get_questions(self) -> Optional[Dict]:
        """Test questions endpoint"""
        try:
            response = requests.get(f"{self.api_url}/questions", timeout=10)
            success = response.status_code == 200
            
            if success:
                data = response.json()
                questions = data.get('questions', [])
                success = len(questions) == 12  # Should have 12 questions
                details = f"Status: {response.status_code}, Questions count: {len(questions)}"
                
                # Validate question structure
                if success and questions:
                    first_q = questions[0]
                    required_fields = ['id', 'dimension', 'texte', 'options']
                    for field in required_fields:
                        if field not in first_q:
                            success = False
                            details += f", Missing field: {field}"
                            break
                    
                    if success and 'options' in first_q:
                        options = first_q['options']
                        if len(options) != 4:  # Should have 4 options per question
                            success = False
                            details += f", Wrong options count: {len(options)}"
                
                self.log_test("Get Questions", success, details)
                return data if success else None
            else:
                self.log_test("Get Questions", False, f"Status: {response.status_code}")
                return None
                
        except Exception as e:
            self.log_test("Get Questions", False, str(e))
            return None

    def test_get_vertus(self) -> bool:
        """Test vertus endpoint"""
        try:
            response = requests.get(f"{self.api_url}/vertus", timeout=10)
            success = response.status_code == 200
            
            if success:
                data = response.json()
                vertus = data.get('vertus', {})
                expected_vertus = ['sagesse', 'courage', 'humanite', 'justice', 'temperance', 'transcendance']
                success = all(v in vertus for v in expected_vertus)
                details = f"Status: {response.status_code}, Vertus count: {len(vertus)}"
            else:
                details = f"Status: {response.status_code}"
                
            self.log_test("Get Vertus", success, details)
            return success
            
        except Exception as e:
            self.log_test("Get Vertus", False, str(e))
            return False

    def test_get_filieres(self) -> bool:
        """Test filieres endpoint"""
        try:
            response = requests.get(f"{self.api_url}/filieres", timeout=10)
            success = response.status_code == 200
            
            if success:
                data = response.json()
                filieres = data.get('filieres', {})
                success = len(filieres) > 0
                details = f"Status: {response.status_code}, Filieres count: {len(filieres)}"
            else:
                details = f"Status: {response.status_code}"
                
            self.log_test("Get Filieres", success, details)
            return success
            
        except Exception as e:
            self.log_test("Get Filieres", False, str(e))
            return False

    def test_analyze_mon_job(self) -> Optional[Dict]:
        """Test analyze endpoint for 'mon_job' flow"""
        try:
            # Sample questionnaire answers (all A's for simplicity)
            test_data = {
                "birth_date": "1990-01-01",
                "answers": {str(i): "A" for i in range(1, 13)},  # Questions 1-12, all answer A
                "entry_type": "mon_job",
                "target_job": None
            }
            
            response = requests.post(
                f"{self.api_url}/analyze", 
                json=test_data,
                headers={'Content-Type': 'application/json'},
                timeout=30  # Longer timeout for AI processing
            )
            
            success = response.status_code == 200
            
            if success:
                data = response.json()
                required_fields = [
                    'id', 'timestamp', 'vertus_scores', 'vertus_dominantes',
                    'qualites_humaines', 'competences_psychosociales', 
                    'savoirs_etre', 'filieres_compatibles', 'entry_type'
                ]
                
                for field in required_fields:
                    if field not in data:
                        success = False
                        break
                
                # Check if AI recommendations are present
                has_ai_reco = 'recommandations_ia' in data and data['recommandations_ia']
                
                details = f"Status: {response.status_code}, AI recommendations: {'Yes' if has_ai_reco else 'No'}"
                details += f", Vertus dominantes: {len(data.get('vertus_dominantes', []))}"
                details += f", Filieres: {len(data.get('filieres_compatibles', []))}"
                
                self.log_test("Analyze Mon Job", success, details)
                return data if success else None
            else:
                self.log_test("Analyze Mon Job", False, f"Status: {response.status_code}")
                return None
                
        except Exception as e:
            self.log_test("Analyze Mon Job", False, str(e))
            return None

    def test_analyze_un_job(self) -> Optional[Dict]:
        """Test analyze endpoint for 'un_job' flow"""
        try:
            # Sample questionnaire answers with target job
            test_data = {
                "birth_date": "1985-05-15",
                "answers": {str(i): "B" for i in range(1, 13)},  # Questions 1-12, all answer B
                "entry_type": "un_job",
                "target_job": "Développeur web"
            }
            
            response = requests.post(
                f"{self.api_url}/analyze", 
                json=test_data,
                headers={'Content-Type': 'application/json'},
                timeout=30
            )
            
            success = response.status_code == 200
            
            if success:
                data = response.json()
                success = data.get('entry_type') == 'un_job' and data.get('target_job') == 'Développeur web'
                has_ai_reco = 'recommandations_ia' in data and data['recommandations_ia']
                
                details = f"Status: {response.status_code}, Target job: {data.get('target_job')}"
                details += f", AI recommendations: {'Yes' if has_ai_reco else 'No'}"
                
                self.log_test("Analyze Un Job", success, details)
                return data if success else None
            else:
                self.log_test("Analyze Un Job", False, f"Status: {response.status_code}")
                return None
                
        except Exception as e:
            self.log_test("Analyze Un Job", False, str(e))
            return None

    def test_get_metiers_by_filiere(self) -> bool:
        """Test metiers by filiere endpoint"""
        try:
            # Test with a known filiere
            filiere_id = "informatique_numerique"
            response = requests.get(f"{self.api_url}/metiers/{filiere_id}", timeout=10)
            success = response.status_code == 200
            
            if success:
                data = response.json()
                success = 'filiere' in data and 'metiers' in data and 'secteurs' in data
                details = f"Status: {response.status_code}, Filiere: {data.get('filiere')}"
                details += f", Metiers count: {len(data.get('metiers', []))}"
            else:
                details = f"Status: {response.status_code}"
                
            self.log_test("Get Metiers by Filiere", success, details)
            return success
            
        except Exception as e:
            self.log_test("Get Metiers by Filiere", False, str(e))
            return False

    def test_get_stats(self) -> bool:
        """Test stats endpoint"""
        try:
            response = requests.get(f"{self.api_url}/stats", timeout=10)
            success = response.status_code == 200
            
            if success:
                data = response.json()
                required_fields = ['total_profiles', 'mon_job', 'un_job']
                success = all(field in data for field in required_fields)
                details = f"Status: {response.status_code}, Total profiles: {data.get('total_profiles', 0)}"
            else:
                details = f"Status: {response.status_code}"
                
            self.log_test("Get Stats", success, details)
            return success
            
        except Exception as e:
            self.log_test("Get Stats", False, str(e))
            return False

    def test_reactif_impact_stats(self) -> bool:
        """Test RE'ACTIF PRO impact statistics endpoint"""
        try:
            response = requests.get(f"{self.api_url}/reactif/impact", timeout=10)
            success = response.status_code == 200
            
            if success:
                data = response.json()
                required_fields = [
                    'profiles_generes', 'plans_action_crees', 'demandes_contact',
                    'taux_clarification', 'taux_mise_en_action_30j', 
                    'progression_posture', 'satisfaction'
                ]
                success = all(field in data for field in required_fields)
                details = f"Status: {response.status_code}, Profiles: {data.get('profiles_generes', 0)}"
                details += f", Plans: {data.get('plans_action_crees', 0)}"
                details += f", Satisfaction: {data.get('satisfaction', 0)}%"
            else:
                details = f"Status: {response.status_code}"
                
            self.log_test("RE'ACTIF Impact Stats", success, details)
            return success
            
        except Exception as e:
            self.log_test("RE'ACTIF Impact Stats", False, str(e))
            return False

    def test_reactif_contact_submission(self) -> bool:
        """Test RE'ACTIF PRO contact form submission"""
        try:
            # Test RH contact
            test_data = {
                "type": "rh",
                "nom": "Test RH",
                "email": "test.rh@example.com",
                "telephone": "0123456789",
                "organisation": "Test Company",
                "message": "Test message for RH services"
            }
            
            response = requests.post(
                f"{self.api_url}/reactif/contact",
                json=test_data,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            
            success = response.status_code == 200
            
            if success:
                data = response.json()
                success = data.get('success') == True
                details = f"Status: {response.status_code}, Success: {data.get('success')}"
                details += f", Message: {data.get('message', '')}"
            else:
                details = f"Status: {response.status_code}"
                
            self.log_test("RE'ACTIF Contact RH", success, details)
            
            # Test Partenaire contact
            test_data["type"] = "partenaire"
            test_data["nom"] = "Test Partenaire"
            test_data["email"] = "test.partenaire@example.com"
            test_data["message"] = "Test message for partnership"
            
            response = requests.post(
                f"{self.api_url}/reactif/contact",
                json=test_data,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            
            success2 = response.status_code == 200
            if success2:
                data = response.json()
                success2 = data.get('success') == True
            
            self.log_test("RE'ACTIF Contact Partenaire", success2, f"Status: {response.status_code}")
            
            return success and success2
            
        except Exception as e:
            self.log_test("RE'ACTIF Contact Submission", False, str(e))
            return False

    def test_reactif_profile_and_plan(self, profile_id: str = None) -> bool:
        """Test RE'ACTIF PRO profile retrieval and action plan generation"""
        if not profile_id:
            # First create a profile via VSI analyze
            test_data = {
                "birth_date": "1990-01-01",
                "answers": {str(i): "A" for i in range(1, 13)},
                "entry_type": "mon_job",
                "target_job": None
            }
            
            try:
                response = requests.post(
                    f"{self.api_url}/analyze", 
                    json=test_data,
                    headers={'Content-Type': 'application/json'},
                    timeout=30
                )
                
                if response.status_code != 200:
                    self.log_test("RE'ACTIF Profile Setup", False, "Failed to create test profile")
                    return False
                
                profile_data = response.json()
                profile_id = profile_data.get('id')
                
                if not profile_id:
                    self.log_test("RE'ACTIF Profile Setup", False, "No profile ID returned")
                    return False
                    
            except Exception as e:
                self.log_test("RE'ACTIF Profile Setup", False, str(e))
                return False
        
        # Test profile retrieval
        try:
            response = requests.get(f"{self.api_url}/reactif/profile/{profile_id}", timeout=10)
            success = response.status_code == 200
            
            if success:
                profile_data = response.json()
                success = 'id' in profile_data and 'vertus_dominantes' in profile_data
                details = f"Status: {response.status_code}, Profile ID: {profile_data.get('id')}"
            else:
                details = f"Status: {response.status_code}"
                
            self.log_test("RE'ACTIF Profile Retrieval", success, details)
            
            if not success:
                return False
                
        except Exception as e:
            self.log_test("RE'ACTIF Profile Retrieval", False, str(e))
            return False
        
        # Test action plan generation
        try:
            response = requests.post(
                f"{self.api_url}/reactif/plan-action?profile_id={profile_id}",
                headers={'Content-Type': 'application/json'},
                timeout=30  # Longer timeout for AI processing
            )
            
            success = response.status_code == 200
            
            if success:
                plan_data = response.json()
                required_fields = ['id', 'profile_id', 'actions_30j', 'actions_60j', 'actions_90j']
                success = all(field in plan_data for field in required_fields)
                
                actions_30j = len(plan_data.get('actions_30j', []))
                actions_60j = len(plan_data.get('actions_60j', []))
                actions_90j = len(plan_data.get('actions_90j', []))
                
                details = f"Status: {response.status_code}, Actions: 30j={actions_30j}, 60j={actions_60j}, 90j={actions_90j}"
            else:
                details = f"Status: {response.status_code}"
                
            self.log_test("RE'ACTIF Action Plan Generation", success, details)
            
            if not success:
                return False
                
        except Exception as e:
            self.log_test("RE'ACTIF Action Plan Generation", False, str(e))
            return False
        
        # Test action plan retrieval
        try:
            response = requests.get(f"{self.api_url}/reactif/plan-action/{profile_id}", timeout=10)
            success = response.status_code == 200
            
            if success:
                plan_data = response.json()
                success = 'profile_id' in plan_data and plan_data['profile_id'] == profile_id
                details = f"Status: {response.status_code}, Plan ID: {plan_data.get('id')}"
            else:
                details = f"Status: {response.status_code}"
                
            self.log_test("RE'ACTIF Action Plan Retrieval", success, details)
            return success
            
        except Exception as e:
            self.log_test("RE'ACTIF Action Plan Retrieval", False, str(e))
            return False

    def test_invalid_endpoints(self) -> bool:
        """Test invalid endpoints return proper errors"""
        try:
            # Test non-existent endpoint
            response = requests.get(f"{self.api_url}/nonexistent", timeout=10)
            success = response.status_code == 404
            
            details = f"Status: {response.status_code} (expected 404)"
            self.log_test("Invalid Endpoint Handling", success, details)
            return success
            
        except Exception as e:
            self.log_test("Invalid Endpoint Handling", False, str(e))
            return False

    def run_all_tests(self) -> Dict[str, Any]:
        """Run all backend tests"""
        print("🚀 Starting VSI + RE'ACTIF PRO Backend API Tests...")
        print(f"🔗 Testing against: {self.base_url}")
        print("=" * 60)
        
        # Test basic connectivity
        if not self.test_api_root():
            print("❌ API root test failed - stopping tests")
            return self.get_summary()
        
        # Test VSI data endpoints
        questions_data = self.test_get_questions()
        self.test_get_vertus()
        self.test_get_filieres()
        
        # Test VSI analysis endpoints (core functionality)
        profile_id = None
        if questions_data:
            profile_mon_job = self.test_analyze_mon_job()
            profile_un_job = self.test_analyze_un_job()
            
            # Get profile ID for RE'ACTIF PRO tests
            if profile_mon_job:
                profile_id = profile_mon_job.get('id')
        
        # Test VSI additional endpoints
        self.test_get_metiers_by_filiere()
        self.test_get_stats()
        
        # Test RE'ACTIF PRO endpoints
        print("\n🔄 Testing RE'ACTIF PRO endpoints...")
        self.test_reactif_impact_stats()
        self.test_reactif_contact_submission()
        self.test_reactif_profile_and_plan(profile_id)
        
        # Test error handling
        self.test_invalid_endpoints()
        
        return self.get_summary()

    def get_summary(self) -> Dict[str, Any]:
        """Get test summary"""
        success_rate = (self.tests_passed / self.tests_run * 100) if self.tests_run > 0 else 0
        
        print("\n" + "=" * 60)
        print(f"📊 Test Summary: {self.tests_passed}/{self.tests_run} passed ({success_rate:.1f}%)")
        
        if self.tests_passed == self.tests_run:
            print("🎉 All tests passed!")
        else:
            print("⚠️  Some tests failed - check details above")
        
        return {
            "total_tests": self.tests_run,
            "passed_tests": self.tests_passed,
            "success_rate": success_rate,
            "test_results": self.test_results
        }

def main():
    """Main test execution"""
    tester = VSIAPITester()
    summary = tester.run_all_tests()
    
    # Return appropriate exit code
    return 0 if summary["success_rate"] == 100 else 1

if __name__ == "__main__":
    sys.exit(main())