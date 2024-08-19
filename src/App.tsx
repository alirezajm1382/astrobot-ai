import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";

// logo and icons
import { AstrobotLogo } from "./assets/AstrobotLogo";
import { BiLogIn } from "react-icons/bi";

// page components
import Home from "./components/pages/Home";
import Chat from "./components/pages/Chat";
import Support from "./components/pages/Support";
import Login from "./components/pages/Login";

// components
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();

  // Assuming we have a way to check if the user is logged in
  const isLoggedIn = true; // This should be replaced with actual auth logic

  return (
    <>
      <Navbar
        position="static"
        className="bg-gradient-to-r from-gray-900 to-black text-white"
      >
        <NavbarBrand>
          <AstrobotLogo />
          <text className="text-xl font-bold text-white">Astrobot AI</text>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive={location.pathname === "/"}>
            <Link
              href="/"
              className={`text-white ${
                location.pathname === "/" ? "font-bold" : ""
              }`}
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive={location.pathname === "/chat"}>
            <Link
              href="/chat"
              className={`text-white ${
                location.pathname === "/chat" ? "font-bold" : ""
              }`}
            >
              Chat
            </Link>
          </NavbarItem>
          <NavbarItem isActive={location.pathname === "/support"}>
            <Link
              href="/support"
              className={`text-white ${
                location.pathname === "/support" ? "font-bold" : ""
              }`}
            >
              Support
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              color="primary"
              variant="shadow"
              endContent={<BiLogIn />}
              className="font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 hover:opacity-80 transition-opacity"
            >
              Login
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/chat"
          element={isLoggedIn ? <Chat /> : <Navigate to="/login" replace />}
        />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {location.pathname !== "/chat" && <Footer />}
    </>
  );
};

export default App;
