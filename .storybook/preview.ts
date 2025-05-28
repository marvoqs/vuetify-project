import type { Preview } from '@storybook/vue3'

import { setup } from '@storybook/vue3';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Stylování Vuetify
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

setup((app) => {
  app.use(vuetify);
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],

};

export default preview;