import Layout from "../components/Layout"
import { useState } from "react"
import List from "../components/List"

export default function Index() {
  const [query, setQuery] = useState('')

  return <Layout onQueryChange={newQuery => setQuery(newQuery)} query={query}>
    <List query={query} setQuerySearch={() => setQuery("")}/>
  </Layout>
}

