import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Confetti from 'react-confetti';
import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';

import CodeEditor from './components/CodeEditor';
import ActionButtons from './components/ActionButtons';
import ThemeToggle from './components/ThemeToggle';
import OutputBox from './components/OutputBox';

const App = () => {
  const [code, setCode] = useState(
    localStorage.getItem('code') || '// Write your code here',
  );
  const [darkMode, setDarkMode] = useState(false);
  const [output, setOutput] = useState('');
  const [confetti, setConfetti] = useState(false);

  // Save code to localStorage
  useEffect(() => {
    localStorage.setItem('code', code);
  }, [code]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const handleRunCode = () => {
    try {
      const capturedOutput = [];
      const customConsole = {
        log: (...args) => capturedOutput.push(args.join(' ')),
      };
      eval(`(function(console){ ${code} })(customConsole)`);
      setOutput(capturedOutput.join('\n'));
      setConfetti(true);
      setTimeout(() => setConfetti(false), 3000);
    } catch (err) {
      setOutput(`Error: ${err.message}`);
    }
  };

  const handleFormatCode = async () => {
    try {
      const formatted = await prettier.format(code, {
        parser: 'babel',
        plugins: [parserBabel],
      });

      setCode(formatted);
    } catch (err) {
      setOutput(`Error formatting code: ${err.message}`);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {confetti && <Confetti />}
      <Box sx={{ p: 3 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <ActionButtons onRun={handleRunCode} onFormat={handleFormatCode} />
          <ThemeToggle
            darkMode={darkMode}
            onToggle={() => setDarkMode(!darkMode)}
          />
        </Box>
        <CodeEditor code={code} setCode={setCode} darkMode={darkMode} />
        <OutputBox output={output} />
      </Box>
    </ThemeProvider>
  );
};

export default App;
