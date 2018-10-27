import React from 'react'
import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'

import {Input} from '.'

const inputColorInfo = 'The following colors are supported `default`, `primary`, `secondary`.'
const inputVariantInfo = 'The following variants are supported `contained`, `outlined`.'
const inputSizesInfo = 'The following sizes are supported `sm`, `lg`, `full`.'

const inputColors = () => <ul>
  <li><Input color='default' /></li>
  <li><Input color='primary' /></li>
  <li><Input color='secondary' /></li>
  <li><Input color='primary' disabled /></li>
</ul>;

const inputVariant = () => <ul>
  <li><Input color='primary' variant='contained' /></li>
  <li><Input color='primary' variant='outlined' /></li>
</ul>;

const inputSizes = () => <ul>
  <li><Input color='primary' size='sm' /></li>
  <li><Input color='primary' size='lg' /></li>
  <li><Input color='primary' size='full' /></li>
</ul>

storiesOf('Input', module)
  .add('Colors', withInfo(inputColorInfo)(inputColors))
  .add('Variant', withInfo(inputVariantInfo)(inputVariant))
  .add('Sizes', withInfo(inputSizesInfo)(inputSizes))