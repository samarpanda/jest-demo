jest.mock('../src/request')
import request from '../src/request'
import * as user from '../src/user'

it('Verify user request by id', () => {
  expect.assertions(1);
  return user.getUserName(4).then(data => expect(data).toEqual('Samar'));
})

it("Mocking request implementation", () => {
  expect.assertions(1);
  return request("/users/4").then(data => expect(data.name).toEqual("Samar"));
})

it("Fetch Users By Id", () => {
  expect.assertions(1);
  expect(1).toEqual(1);
})

