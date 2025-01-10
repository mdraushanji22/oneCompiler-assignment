import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ code = '// Start coding...', setCode, darkMode }) => {
  return (
    <Editor
      height="50vh" // Use responsive units
      defaultLanguage="javascript"
      theme={darkMode ? 'vs-dark' : 'light'}
      value={code}
      onChange={(value) => setCode(value || '// Default code')}
      options={{
        automaticLayout: true, // Ensures editor adjusts to parent container
        minimap: { enabled: false }, // Disable minimap for cleaner UI
      }}
    />
  );
};

export default CodeEditor;
