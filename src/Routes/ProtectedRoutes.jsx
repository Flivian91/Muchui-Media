import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabaseClient";

const ProtectedRoute = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user);

      if (!session?.user) {
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

  if (user === null) {
    // Optionally, you could render a loading spinner or similar UI here while waiting for auth status
    return null;
  }

  return <Outlet />;
};

export default ProtectedRoute;
