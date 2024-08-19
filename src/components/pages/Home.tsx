import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedStars from "../AnimatedStars";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const isLoggedIn = true;
  const handleGetStarted = () => {
    if (isLoggedIn) {
      navigate("/chat");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center"
      >
        <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
          Welcome to Astrobot AI
        </h1>
        <p className="mb-8 text-xl text-white">
          Explore the universe with artificial intelligence
        </p>
        <div className="h-8"></div>
        <Button
          size="lg"
          className="font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 hover:opacity-80 transition-opacity"
          onClick={handleGetStarted}
        >
          Get Started
        </Button>
      </motion.div>
      <AnimatedStars />
    </div>
  );
};

export default Home;
