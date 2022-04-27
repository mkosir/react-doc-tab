import { storiesOf } from '@storybook/react';
import React from 'react';

import ButtonGreen from './ButtonGreen/_ButtonGreen';
import ButtonRed from './ButtonRed/_ButtonRed';
import Counter from './Counter/_Counter';
import Default from './Default/_Default';

import './DemoTab.scss';

const stories = storiesOf('Examples', module);

stories
  .add('Default', () => <Default />)
  .add('Button Green - .jsx/.css', () => <ButtonGreen />)
  .add('Button Red - .tsx/.scss', () => <ButtonRed />)
  .add('Counter', () => <Counter />);
