import normalized from './notifications';

test('normalizes notification ids', () => {
  expect(normalized.result).toHaveLength(14);
  expect(normalized.result[0]).toBe('5debd76480edafc8af244228');
  expect(normalized.result[7]).toBe('5debd7642e815cd350407777');
});

test('normalizes users, messages, and notifications', () => {
  expect(normalized.entities.users['5debd764a7c57c7839d722e9']).toEqual({
    age: 25,
    email: 'poole.sanders@holberton.nz',
    id: '5debd764a7c57c7839d722e9',
    name: { first: 'Poole', last: 'Sanders' },
    picture: 'http://placehold.it/32x32',
  });
  expect(normalized.entities.messages['efb6c485-00f7-4fdf-97cc-5e12d14d6c41']).toEqual({
    guid: 'efb6c485-00f7-4fdf-97cc-5e12d14d6c41',
    isRead: false,
    type: 'default',
    value: 'Cursus risus at ultrices mi.',
  });
  expect(normalized.entities.notifications['5debd7642e815cd350407777']).toEqual({
    author: '5debd764f8452ef92346c772',
    context: '3068c575-d619-40af-bf12-dece1ee18dd3',
    id: '5debd7642e815cd350407777',
  });
});import { getAllNotificationsByUser } from './notifications';
});