import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { ReactNode } from "react";

const PageTitleSetter = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    let title = "BuildShare"; // Default title
    // Define page titles based on the path
    if (location.pathname === "/") {
      title = "Home - BuildShare";
    } else if (location.pathname.startsWith("/sign-in")) {
      title = "Sign In - BuildShare";
    } else if (location.pathname.startsWith("/sign-up")) {
      title = "Sign Up - BuildShare";
    } else if (location.pathname.startsWith("/explore")) {
      title = "Explore - BuildShare";
    } else if (location.pathname.startsWith("/saved")) {
      title = "Saved Posts - BuildShare";
    } else if (location.pathname.startsWith("/all-users")) {
      title = "All Users - BuildShare";
    } else if (location.pathname.startsWith("/create-post")) {
      title = "Create Post - BuildShare";
    } else if (location.pathname.startsWith("/update-post")) {
      title = "Update Post - BuildShare";
    } else if (location.pathname.startsWith("/posts")) {
      title = "Post Details - BuildShare";
    } else if (location.pathname.startsWith("/profile")) {
      title = "Profile - BuildShare";
    } else if (location.pathname.startsWith("/update-profile")) {
      title = "Update Profile - BuildShare";
    }
    document.title = title;
  }, [location]);

  return children;
};

export default PageTitleSetter;
