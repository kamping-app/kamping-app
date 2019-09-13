/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import GenericButton from './GenericButton'

storiesOf('GenericButton', module).add('Primary', () => ({
  components: { GenericButton },
  template: '<generic-button>Buy now</generic-button>'
}))
