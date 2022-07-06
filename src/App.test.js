import React from 'react';
import renderer from 'react-test-renderer';
import Home from './components/Home';
import Calculator from './components/calculator';
import Quotes from './components/Quotes';

it('Home renders correctly', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Calculator renders correctly', () => {
  const tree1 = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree1).toMatchSnapshot();
});

it('Quotes renders correctly', () => {
  const tree2 = renderer
    .create(<Quotes />)
    .toJSON();
  expect(tree2).toMatchSnapshot();
});
