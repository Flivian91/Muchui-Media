import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabaseClient";

const ProtectedRoute = (requiredRole) => {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();
  // const location = useLocation();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user);

      // If there is no user Session redirect to the login page
      if (!session?.user) {
        navigate("/signin");
      }
      // Fetch user Roles from the database
      const {
        data: { user },
      } = await supabase.auth.getUser();
      let metadata = user.user_metadata;
      console.log(metadata?.role);

      if (metadata?.role) {
        setUserRole(metadata.role);
      }
      // Check if the user has the correct role
      if (requiredRole && metadata.role !== requiredRole) {
        return <Outlet />;
        // No role found
      } else {
        navigate("/signin");
      }
    };

    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        switch (event) {
          case "SIGNED_IN":
            setUser(session?.user || null);
            break;
          case "SIGNED_OUT":
            setUser(null);
            navigate("/signin");
            break;
          default:
            break;
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);

  if (user === null || userRole === null) {
    // Optionally, you could render a loading spinner or similar UI here while waiting for auth status
    return null;
  }

  return <Outlet />;
};

export default ProtectedRoute;
