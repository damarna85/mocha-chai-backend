import { TEST_ACCESS_TOKEN } from './jwt-token'
export const buildTestRequest = (request, uri) => {
  return request(server)
  .get('/api/users')
  .set('authorization', TEST_ACCESS_TOKEN)
}
