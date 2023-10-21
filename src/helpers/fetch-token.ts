const getAccessToken = async (): Promise<string> => {
  const res = await fetch(`${process.env.ACCESS_TOKEN_URL}/oauth/token`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      audience: process.env.API_URL,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      grant_type: 'client_credentials'
    })
  })

  const json = await res.json()

  return json.access_token
}

export default getAccessToken
