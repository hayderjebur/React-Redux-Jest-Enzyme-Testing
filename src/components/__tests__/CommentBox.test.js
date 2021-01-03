import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

test('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

test('user able to type inside the text area', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' },
  });

  wrapped.update();

  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});
