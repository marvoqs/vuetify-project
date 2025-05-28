import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './Button.vue';

/**
 * Button component stories for Storybook.
 * This file defines various button styles and configurations
 * variants to showcase in the Storybook UI.
 */
const meta = {
  title: 'DesignSystem/Button',
  component: Button,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/6J5vPERb73r8aGFS3fNlp9/Design-system----Vuetify-Amis-HD?node-id=61-1255"
    }
  },
  argTypes: {
    text: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: ['text', 'outlined', 'tonal', 'flat', 'plain'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    }
  }
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