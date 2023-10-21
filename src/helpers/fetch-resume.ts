const fetchResume = async ({ queryKey }): Promise<any> => {
  const [, token] = queryKey
  const res = await fetch(process.env.API_URL + '/portfolio/asset?fileName=resume.pdf', {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  const blob = await res.blob()

  return URL.createObjectURL(blob)
}

export default fetchResume
