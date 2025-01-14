import { QueryClient } from 'react-query/core'
import { writable } from 'svelte/store'

const clientStore = writable(new QueryClient(), () => {
  const client = new QueryClient()
  client.mount()

  return () => client.unmount()
})

/* mostly added for debugging/testing, but its nice to have an option to clearly reset the cache */
export const resetClientStore = (queryclient?: QueryClient) => {
  const client = queryclient || new QueryClient()

  clientStore.set(client)

  client.mount()
  client.clear()

  return client
}

export const queryClient = clientStore

export default clientStore
