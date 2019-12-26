import React from 'react';
import { storiesOf } from '@storybook/react';

import ButtonGreen from './ButtonGreen/_ButtonGreen';
import ButtonRed from './ButtonRed/_ButtonRed';

import './StoryTab.scss';

const stories = storiesOf('Button', module);

stories.add('Green', () => <ButtonGreen />).add('Red', () => <ButtonRed />);
