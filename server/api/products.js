import { serverMedusaClient } from '#medusa/server'

export default eventHandler(async (event) => {
  const client = serverMedusaClient(event)
  const query = getQuery(event)
  // const
  // console.log(query)
  // if (!query.limit || query.limit === 'undefined') delete query.limit
  // else {
  //   query.limit 
  // }
  if (!query.tags || query.tags === 'undefined') delete query.tags
  else query.tags = [query.tags]
  if (!query.title || query.title === 'undefined') delete query.title
  else {
    query.q = query.title
    delete query.title
  }
  if (!query.limit) query.limit = 10
  // const paramQuery = { limit: 5 }
  const { products } = await client.products.list({ ...query })
  console.log(products)
  return { products }
})
