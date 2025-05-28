import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'DesignSystem/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    text: 'Button',
  },
};

export const Outlined: Story = {
  args: {
    ...Primary.args,
    variant: 'outlined',
  },
};

export const Tonal: Story = {
  args: {
    ...Primary.args,
    variant: 'tonal',
  },
};

export const Small: Story = {
  args: {
    ...Primary.args,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    ...Primary.args,
    size: 'large',
  },
};