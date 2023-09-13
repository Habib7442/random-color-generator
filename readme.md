# Random Color Generator

Random Color Generator is a Node.js package that allows you to generate random hex color codes and display colored text in the terminal. This package is useful for adding a bit of fun and randomness to your command-line applications or scripts.

## Table of Contents

- [Random Color Generator](#random-color-generator)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Version](#version)
  - [Usage](#usage)
    - [Generating a Random Color](#generating-a-random-color)
    - [Example](#example)
    - [In React JS/Next.js](#in-react-jsnextjs)
    - [Example](#example-1)

## Installation

You can install the Random Color Generator package using npm:

```bash
npm install -g randomcolor95
```
## Version

```bash
randomcolor -V or randomcolor --version
```

## Usage

### Generating a Random Color

```bash
randomcolor -r
```

### Example
```bash
$ randomcolor -r
This is a colored text!
Hex Color Code: #3A7D86
```

### In React JS/Next.js

To use the Random Color Generator in a React/Next application, follow these steps:

```bash
npm install randomcolor95
# or
yarn add randomcolor95
```
  
  Then, import the package into your React/Next application:
  
  ```bash
  import { generateRandomHexColor, displayColoredText } from 'randomcolor95';
  ```
  ### Example
  ```bash
  import React, { useState } from 'react';
import { generateRandomHexColor, displayColoredText } from 'random-color-generator';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); // Initial background color

  const handleGenerateColor = () => {
    const randomColor = generateRandomHexColor();
    setBackgroundColor(randomColor);
  };

  const backgroundStyle = {
    backgroundColor: backgroundColor,
    minHeight: '100vh', // Ensure the background covers the entire viewport height
  };

  return (
    <div style={backgroundStyle}>
      <h1>Random Color Generator</h1>
      <button onClick={handleGenerateColor}>Generate Random Color</button>
      <div style={{ color: backgroundColor }}>
        {displayColoredText('This is a colored text!', backgroundColor)}
      </div>
    </div>
  );
}

export default App;
```


