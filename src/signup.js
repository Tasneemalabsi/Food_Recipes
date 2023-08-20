import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function SignupPage() {
  const { loginWithRedirect } = useAuth0();

  const handleSignup = () => {
    // Redirect the user to Auth0's signup page
    loginWithRedirect({ screen_hint: 'signup' });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <button onClick={handleSignup}>Sign Up with Auth0</button>
    </div>
  );
}

export default SignupPage;