import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import {Button} from '.'

const buttonColorInfo = 'The following colors are supported `default`, `primary`, `secondary`.'
const buttonVariantInfo = 'The following variants are supported `contained`, `outlined`.'
const buttonSizesInfo = 'The following sizes are supported `sm`, `lg`, `full`.'

const buttonColors = () => <ul>
  <li><Button color='default'>Default</Button></li>
  <li><Button color='primary'>Primary</Button></li>
  <li><Button color='secondary'>Secondary</Button></li>
  <li><Button color='primary' disabled>Disabled</Button></li>
</ul>;

const buttonVariant = () => <ul>
  <li><Button color='primary' variant='contained'>Contained</Button></li>
  <li><Button color='primary' variant='outlined'>Outlined</Button></li>
</ul>;

const buttonSizes = () => <ul>
  <li><Button color='primary' size='sm'>Small</Button></li>
  <li><Button color='primary' size='lg'>Large</Button></li>
  <li><Button color='primary' size='full'>Full</Button></li>
</ul>

storiesOf('Button', module)
  .add('Colors', withInfo(buttonColorInfo)(buttonColors))
  .add('Variant', withInfo(buttonVariantInfo)(buttonVariant))
  .add('Sizes', withInfo(buttonSizesInfo)(buttonSizes))