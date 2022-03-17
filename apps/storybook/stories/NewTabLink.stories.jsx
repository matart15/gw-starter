import React from 'react';

import { NewTabLink } from 'ui/dist/index.js';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/NewTabLink',
  component: NewTabLink,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = ({children, ...args}: any) =>       <NewTabLink {...args}>
{children}
</NewTabLink>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  href: 'https://www.google.com',
  children: <div>aaaaaaa</div>
};
