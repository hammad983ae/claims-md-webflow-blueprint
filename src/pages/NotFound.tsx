
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-claimsBlue">404</h1>
          <p className="text-2xl text-gray-700 mb-8">Oops! Page not found</p>
          <Button className="btn-primary" asChild>
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
