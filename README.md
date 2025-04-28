# Next Tooltip

A simple and customizable tooltip component for React applications, built with TypeScript.

# Usage

Here's how to use the CustomTooltip component in your React application.

### Basic Example

```
import React from 'react';
import Tooltip from 'next-tooltip-react';
import { FaLock } from 'react-icons/fa';

const App = () => {
  return (
    <div className="flex items-center">
      <Tooltip
        icon={<FaLock size={32} />}
        content={
          <>
            <p className="font-medium text-neutral-900">Private Group</p>
            <p className="text-sm text-gray-700">Only verified users can join this group.</p>
          </>
        }
        position="top"
      />
    </div>
  );
};

export default App;

```

## Features

- Lightweight and easy-to-use
- Supports custom icons and content
- Tooltip positioning (top, right, bottom, left)
- Built with TypeScript for type safety

## Installation

You can install the `next-tooltip` package via npm or yarn.

### Using npm:

`npm install next-tooltip`

### Using yarn:

`yarn add next-tooltip`
