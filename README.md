# Next Tooltip

A simple and customizable tooltip component for React applications, built with TypeScript.

# Usage

Here's how to use the CustomTooltip component in your React application.

### Basic Example

```import React from 'react';
import CustomTooltip from 'next-tooltip';
import { FaLock } from 'react-icons/fa';
import Image from 'next/image';
import publicIcon from './path/to/publicIcon.svg'; // Replace with your public icon path

const App = () => {
  const isGroupPrivate = true; // Toggle this to test

  return (
    <div className="flex items-center">
      <CustomTooltip
        icon={
          !isGroupPrivate ? (
            <Image src={publicIcon} width={32} height={32} alt="Public Icon" />
          ) : (
            <FaLock size={32} className="text-primary-500 bg-secondary p-2 rounded-full" />
          )
        }
        content={
          <>
            <p className="font-medium text-neutral-900">Private and Public Groups</p>
            <ul className="mt-2 space-y-2 text-sm text-gray-700">
              <li className="text-xs text-neutral-700">
                <p className="font-bold">• Public:</p>
                <p>
                  All users can join these groups without <br />
                  requesting permission. Labeled with a globe icon.
                </p>
              </li>
              <li className="text-xs text-neutral-700">
                <p className="font-bold">• Private:</p>
                <p>
                  Must request access to join the group. Only <br /> verified users can request access. Labeled with a lock icon.
                </p>
              </li>
            </ul>
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
