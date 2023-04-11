export default async function getItems (url:string, header?:object):Promise<object[]> {
  try {
    const response = await fetch(url, header)

    if (!response.ok) {
      throw new Error('It is bad Response!')
    }

    const res:Promise<object[]> = await response.json()
    return res
  } catch {
    throw new Error(`Error in GET: ${url}`)
  }
}
