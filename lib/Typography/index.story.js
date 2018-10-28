import React from 'react'
import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'

import {Typography} from '.'

const variantInfo = 'The following variants are supported - `title`, `heading`, `subheading`, `body`, `caption`.'
const colorInfo = 'The following colors are supported - `default`, `bright`, `primary`, `secondary`.'
const alignInfo = 'The following align are supported - `left`, `center`, `right`.'

const variants = () => <ul>
  <li><Typography variant='title'>Title</Typography></li>
  <li><Typography variant='heading'>Heading</Typography></li>
  <li><Typography variant='subheading'>Subheading</Typography></li>
  <li><Typography variant='body'>body</Typography></li>
  <li><Typography variant='caption'>caption</Typography></li>
</ul>;

const color = () => <ul>
  <li><Typography color='default'>Default</Typography></li>
  <li><Typography color='bright'>Bright</Typography></li>
  <li><Typography color='primary'>Primary</Typography></li>
  <li><Typography color='secondary'>Secondary</Typography></li>
</ul>

const align = () => <ul>
  <li><Typography align='left'>Left</Typography></li>
  <li><Typography align='center'>Center</Typography></li>
  <li><Typography align='right'>Right</Typography></li>
</ul>

storiesOf('Typography', module)
  .add('Variant', withInfo(variantInfo)(variants))
  .add('Colors', withInfo(colorInfo)(color))
  .add('Align', withInfo(alignInfo)(align))