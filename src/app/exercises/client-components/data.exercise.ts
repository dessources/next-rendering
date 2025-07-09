import 'server-only'
export async function getData() {
  const secretKey = '#######_this_is_a_secret_key_#######'
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    headers: {
      authorization: secretKey,
    },
  })

  return res.json()
}
