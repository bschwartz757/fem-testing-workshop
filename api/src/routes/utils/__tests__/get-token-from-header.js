import getTokenFromHeader from '../get-token-from-header'

test('getTokenFromHeader returns null if there is no token', () => {
  const req = getReq()
  const result = getTokenFromHeader(req)
  expect(result).toBe(null)
})

test('getTokenFromHeader returns the token from the headers', () => {
  const token = 'hi.mom!'
  const authorization = `Token ${token}`
  const req = getReq(authorization)

  const result = getTokenFromHeader(req)
  expect(result).toBe(token)
})

function getReq(authorization) {
  return {
    headers: {
      authorization,
    },
  }
}

test('I submitted my elaboration and feedback', () => {
  const submitted = true
  expect(true).toBe(submitted)
})
