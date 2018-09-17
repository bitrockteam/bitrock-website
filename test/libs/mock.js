import test from 'ava';
import { post, domElement } from './../../src/libs/mock';

test('MOCK domElement.setAttribute', t => {
  const data = { foo: 'testing' };
  const mock = domElement.setAttribute(data)

  t.deepEqual(mock, data);
});

test('MOCK post data', t => {
  const mock = post();

  t.true(typeof mock.id === 'number');
  t.is(mock.title.rendered, 'sample title');
  t.true(typeof mock._embedded === 'object');
});