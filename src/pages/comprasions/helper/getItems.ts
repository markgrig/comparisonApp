export default async function getItems (url:string):Promise<object[]> {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('It is bad Response!')
    }

    return await response.json()
  } catch {
    throw new Error(`Error in GET: ${url}`)
  }
}
