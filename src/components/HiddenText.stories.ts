import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './Button.vue';
import HiddenText from './HiddenText.vue';
import { ref } from 'vue';

/**
 * HiddenText component stories for Storybook.
 * This file defines various HiddenText styles and configurations
 * variants to showcase in the Storybook UI.
 */
const meta = {
  title: 'DesignSystem/HiddenText',
  component: HiddenText,
} satisfies Meta<typeof HiddenText>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {};

export const WithTrigger: Story = {
  render: () => ({
    components: { Button, HiddenText },
    setup () {
      const isLoading = ref(false);
      const isDisplayed = ref(false);

      const showText = () => {
        isLoading.value = true
        setTimeout(() => {
          isDisplayed.value = !isDisplayed.value;
          isLoading.value = false;
        }, 1000);
      };

      return { isDisplayed, showText };
    },
    template: `
      <div>
        <Button :isLoading="isLoading" text="Zobrazit" @click="showText" />
        <HiddenText :isDisplayed="isDisplayed" />
      </div>
    `,
  }),
}