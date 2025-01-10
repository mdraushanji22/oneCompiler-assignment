import React from 'react';
import { Box, Button } from '@mui/material';

const ActionButtons = ({ onRun, onFormat }) => {
  return (
    <Box display="flex" justifyContent="flex-start" gap={2} mb={2}>
      <Button
        variant="contained"
        color="primary"
        onClick={onRun}
        aria-label="Run Code"
      >
        Run Code
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={onFormat}
        aria-label="Format Code"
      >
        Format Code
      </Button>
    </Box>
  );
};

export default ActionButtons;
