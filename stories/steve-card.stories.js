import { html } from 'lit';
import '../src/steve-card.js';

export default {
  title: 'SteveCard',
  component: 'steve-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <steve-card
      style="--steve-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </steve-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
