export default async function getItems (url:string, header?:object):Promise<object[]> {
  try {
    const response = await fetch(url, header)

    if (!response.ok) {
      throw new Error('It is bad Response!')
    }

    type Response = { data: object[] }
    const res:Response = await response.json()
    console.log(res.data)

    return res.data
  } catch {
    throw new Error(`Error in GET: ${url}`)
  }
}
