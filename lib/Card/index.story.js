import React from 'react'
import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'

import {Card} from '.'

const cardSizeInfo = 'The following sizes are supported - `none`, container`, `center`.'
const cardColorInfo = 'The following colors are supported - `default`, `primary`, `secondary`.'
const cardVariantInfo = 'The following variants are supported - `contained`, `outline`.'

const cardSize = () => <ul>
  <li><Card size='none'>None</Card></li>
  <li><Card size='container'>Container</Card></li>
  <li><Card size='center' width='400px' height='400px'>Center</Card></li>
</ul>

const cardColor = ()  => <ul>
  <li><Card size='container' color='default'>Default</Card></li>
  <li><Card size='container' color='primary'>Primary</Card></li>
  <li><Card size='container' color='secondary'>Secondary</Card></li>
</ul>

const cardVariant = () => <ul>
  <li><Card variant='contained' color='primary'>Contained</Card></li>
  <li><Card variant='outline' color='primary'>Outline</Card></li>
</ul>

storiesOf('Card', module)
  .add('Sizes', withInfo(cardSizeInfo)(cardSize))
  .add('Colors', withInfo(cardColorInfo)(cardColor))
  .add('Variants', withInfo(cardVariantInfo)(cardVariant))