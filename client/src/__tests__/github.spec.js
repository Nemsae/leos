/* eslint-env jest */
import request from '../__mocks__/request';

const getUser = user => request(`https://api.github.com/users/${user}`)

describe('#getUser() using Promises', () => {
  it('should load user data', () => (
    getUser('nemsae')
    .then((data) => {
      expect(data).toBeDefined();
      expect(data.entity.name).toEqual('Koen van Gilst');
    })
  ));
});
