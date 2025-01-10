import React from "react";
import { Switch, Box } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";

const ThemeToggle = ({ darkMode, onToggle }) => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <LightMode />
      <Switch checked={darkMode} onChange={onToggle} />
      <DarkMode />
    </Box>
  );
};

export default ThemeToggle;
