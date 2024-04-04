import { serverMedusaClient } from '#medusa/server'

export default defineEventHandler(async (event) => {
  const client = serverMedusaClient(event)
  const id = getRouterParam(event, 'id')
  // console.log(id)
  const { product } = await client.products.retrieve(id)
  // console.log(product)
  return product
})