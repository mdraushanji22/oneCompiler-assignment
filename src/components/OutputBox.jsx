import React from "react";
import { Box } from "@mui/material";

const OutputBox = ({ output }) => {
  return (
    <Box
      mt={3}
      p={2}
      border="1px solid gray"
      borderRadius={2}
      bgcolor="background.paper"
    >
      <strong>Output:</strong>
      <pre>{output || "No output yet!"}</pre>
    </Box>
  );
};

export default OutputBox;
