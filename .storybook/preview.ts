import type { Preview } from "@storybook/html";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'xelorabb-dark',
      values: [
        { name: 'xelorabb-dark', value: '#444'},
        { name: 'light', value: '#fff'}
      ]
    }
  },
};

export default preview;
