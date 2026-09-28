import { getAllNotificationsByUser } from './notifications';

test('returns normalized notifications for a user', () => {
  expect(getAllNotificationsByUser('5debd764a7c57c7839d722e9')).toEqual([
    {
      author: '5debd764a7c57c7839d722e9',
      context: '2d8e40be-1c78-4de0-afc9-fcc147afd4d2',
      id: '5debd76480edafc8af244228',
    },
    {
      author: '5debd764a7c57c7839d722e9',
      context: '280913fe-38dd-4abd-8ab6-acdb4105f922',
      id: '5debd76444dd4dafea89d53b',
    },
  ]);
});import { getAllNotificationsByUser } from './notifications';
});