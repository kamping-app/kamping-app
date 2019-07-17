/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import GenericButton from '@/components/atoms/GenericButton'

storiesOf('Button', module).add('with text', () => ({
  components: { GenericButton },
  template: '<generic-button to="/home">Hello</generic-button>',
  methods: { action: action('clicked') }
}))