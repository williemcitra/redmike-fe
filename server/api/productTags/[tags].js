import { serverMedusaClient } from '#medusa/server'

export default defineEventHandler(async (event) => {
  const client = serverMedusaClient(event)
  const value = getRouterParam(event, 'tags')
  console.log(value)
  const { product_tags } = await client.productTags.list({ limit: 5, offset: 0, value })
  console.log(product_tags)
  return product_tags
})