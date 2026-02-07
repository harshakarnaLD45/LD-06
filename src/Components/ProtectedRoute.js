import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [isValid, setIsValid] = useState(null);
  const token = localStorage.getItem("authToken");
  const email = localStorage.getItem("authEmail");
  const { lang } = useParams();

  useEffect(() => {
    const checkMember = async () => {
      if (!token) {
        setIsValid(false);
        return;
      }

      try {
        const res = await axios.get("https://staging-api.naf-cloudsystem.de/api/membership-cards/details", {
          headers: { Authorization: `Bearer ${token}` },
          params: { email },
        });


        if (res.data) {
          setIsValid(true);
        } else {
          localStorage.removeItem("authToken");
          setIsValid(false);
        }
      } catch (error) {
        localStorage.removeItem("authToken");
        setIsValid(false);
      }
    };

    checkMember();
  }, [token]);

  if (isValid === null) {
    return <div>Loading...</div>; // Or a nice spinner
  }

  if (!isValid) {
    return <Navigate to={`/${lang}/membership`} replace />;
  }

  return children;
};

export default ProtectedRoute;
