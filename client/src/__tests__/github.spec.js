/* eslint-env jest */
import expect from 'expect';
import request from '../__mocks__/request';

// jest.mock('../request');

const getUser = user => request(`https://api.github.com/users/${user}`);

describe('#getUser() using Promises', () => {
  it('should load user data', () => (
    getUser('nemsae')
    .then((data) => {
      expect(data.entity.name).toEqual('Koen van Gilst');
    })
  ));
});

// describe('#getUser() using Promises', () => {
//   it('should load user data', async () => {
//     // getUser('nemsae')
//     // .then((data) => {
//     //   // expect(data).to.be.defined;
//     //   // expect(data).to.exist;
//     //   expect(data.entity.name).toEqual('Koen van Gilst');
//     // })
//     const data = await getUser('nemsae');
//     const expected = 'Koen van Gilst';
//     expect(data.entity.name).toEqual(expected);
//   });
// });
