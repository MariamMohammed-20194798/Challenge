// requireAuth.tsx
import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface AuthProps {
  isLoggedIn: boolean;
}

const requireAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P & AuthProps>
): React.FC<P> => {
  return (props) => {
    const navigate = useNavigate();

    // Replace this function with your actual authentication logic
    const checkAuthentication = (): boolean => {
      // Example: Check if the user is authenticated (replace with your logic)
      return true; // or false based on your authentication mechanism
    };

    const isLoggedIn = checkAuthentication();

    useEffect(() => {
      if (!isLoggedIn) {
        navigate("/");
      }
    }, [isLoggedIn, navigate]);

    return isLoggedIn ? (
      <WrappedComponent {...(props as P)} isLoggedIn={isLoggedIn} />
    ) : null;
  };
};

export default requireAuth;
