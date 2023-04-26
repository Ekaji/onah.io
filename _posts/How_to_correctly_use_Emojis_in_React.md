---
date: '2022-07-15T11:50:54.000Z'
title: How to correctly use Emojis in React
tagline: React
preview: >-
  Emojis have become an important part of online communication, there are over
  3,633 emojis in the Unicode standard as of September 2021. However,
  integrating these emojis in React can be tricky, and doing so incorrectly can
  lead to errors and accessibility issues.
image: >-
  https://images.unsplash.com/photo-1656188505561-19f1a1b6cda8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80
---

Emojis have become an important part of online communication, there are over 3,633 emojis in the Unicode standard as of September 2021. However, integrating these emojis in React can be tricky, and doing so incorrectly can lead to errors and accessibility issues.  I would also be demonstrating how to create a reusable React component for emojis that can be used across your entire app. So, let's dive!

### The Wrong Way

Before diving into the correct way of using emojis in React, it is important to understand the common mistakes to avoid. Some methods to steer clear of when using emojis in React are:

1. **Inserting the emoji's Unicode character using curly braces:** Emojis are represented by Unicode characters, like the smiley face emoji (U+263A). To use this emoji in React, you can convert it into a string, convert the 'U' to lowercase, remove the plus sign, and then escape it within curly braces ({'u263A'}). This approach However, only works with certain emojis, so it is best to avoid it unless you are willing to deal with error messages and problems with accessibility.
2. **Copying and pasting the emoji directly into React:** While it may seem like the easiest option, copying and pasting an emoji directly into React would result in errors and accessibility problems. In fact, If you open up your terminal, you would find an error message stating that "emojis should be wrapped in <span> and have a role='img' with an accessible description using aria-label or aria-labeledby", so this method should be avoided because it results in accessibility issues.

### The Recommended method for using emojis in React
The recommended method for using emojis in React. It involves wrapping them in a <span> element, giving them a role='img' label, and including an aria-label. This technique guarantees that emojis in your app can be enjoyed by everyone, even those who require screen readers. Here is an example:

```jsx
<span role='img' aria-label='smiling Emoji'>😀</span>
```

In addition to the recommended method, you may also want to create a reusable emoji component if you frequently use emojis in your React app. Here is an example code snippet for creating an Emoji component:

```jsx
import React from 'react';

const Emoji = ({ label, hidden, symbol }) => {
  return (
    <span
      className='emoji'
      role='img'
      aria-label={label ? label : ''}
      aria-hidden={hidden ? hidden : ''}>
      {symbol}
    </span>
  );
};

export default Emoji;

```

Once you've defined the Emoji component, you can use it throughout your app by passing in the necessary props. Here is an example:

```jsx

import React from 'react';
import Emoji from './Emoji';

const App = () => {
  return (
    <div>
      <Emoji symbol='👋' label='waving hand' />
    </div>
  );
};

export default App;

```

### Conclusion

using emojis correctly is paramount to avoiding the problems highlighted above. by adhering to the best practices that I shared with you, and leveraging a reusable React component, you can guarantee that the emojis in your app are accessible and free of errors.
