import requests
import sys

class AdminToggleTester:
    def __init__(self, base_url="https://alt-act-dev.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    print(f"   Response: {response.json()}")
                except:
                    print(f"   Response: {response.text}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    print(f"   Response: {response.json()}")
                except:
                    print(f"   Response: {response.text}")

            return success, response

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, None

    def test_get_logo_state(self):
        """Test GET /api/admin/logo-toggle"""
        success, response = self.run_test(
            "GET logo toggle state",
            "GET",
            "api/admin/logo-toggle",
            200
        )
        if success:
            data = response.json()
            if 'active' in data:
                print(f"   Current state: {'Active' if data['active'] else 'Inactive'}")
                return data['active']
        return None

    def test_toggle_with_wrong_password(self):
        """Test POST with wrong password"""
        success, response = self.run_test(
            "POST logo toggle with WRONG password",
            "POST",
            "api/admin/logo-toggle",
            403,
            data={"password": "wrongpassword", "active": True}
        )
        return success

    def test_toggle_with_correct_password(self, new_state):
        """Test POST with correct password"""
        success, response = self.run_test(
            f"POST logo toggle with CORRECT password (set to {new_state})",
            "POST",
            "api/admin/logo-toggle",
            200,
            data={"password": "Choukette@777", "active": new_state}
        )
        if success:
            data = response.json()
            if data.get('success') and data.get('active') == new_state:
                print(f"   ✓ State successfully changed to: {new_state}")
                return True
            else:
                print(f"   ✗ Response doesn't match expected state")
                return False
        return False

    def test_state_persistence(self, expected_state):
        """Verify state persists after toggle"""
        success, response = self.run_test(
            f"Verify state persisted as {expected_state}",
            "GET",
            "api/admin/logo-toggle",
            200
        )
        if success:
            data = response.json()
            actual_state = data.get('active')
            if actual_state == expected_state:
                print(f"   ✓ State correctly persisted: {actual_state}")
                return True
            else:
                print(f"   ✗ State mismatch - Expected: {expected_state}, Got: {actual_state}")
                return False
        return False


def main():
    print("=" * 60)
    print("ADMIN LOGO TOGGLE API TESTING")
    print("=" * 60)
    
    tester = AdminToggleTester()
    
    # Test 1: Get initial state
    print("\n--- Test 1: Get Initial State ---")
    initial_state = tester.test_get_logo_state()
    
    # Test 2: Wrong password should return 403
    print("\n--- Test 2: Wrong Password (should fail with 403) ---")
    tester.test_toggle_with_wrong_password()
    
    # Test 3: Toggle to opposite state with correct password
    print("\n--- Test 3: Toggle with Correct Password ---")
    if initial_state is not None:
        new_state = not initial_state
        toggle_success = tester.test_toggle_with_correct_password(new_state)
        
        if toggle_success:
            # Test 4: Verify state persisted
            print("\n--- Test 4: Verify State Persistence ---")
            tester.test_state_persistence(new_state)
            
            # Test 5: Toggle back to original state
            print("\n--- Test 5: Toggle Back to Original State ---")
            tester.test_toggle_with_correct_password(initial_state)
            tester.test_state_persistence(initial_state)
    
    # Print results
    print("\n" + "=" * 60)
    print(f"📊 BACKEND TESTS SUMMARY")
    print("=" * 60)
    print(f"Tests passed: {tester.tests_passed}/{tester.tests_run}")
    print(f"Success rate: {(tester.tests_passed/tester.tests_run*100):.1f}%")
    print("=" * 60)
    
    return 0 if tester.tests_passed == tester.tests_run else 1


if __name__ == "__main__":
    sys.exit(main())
