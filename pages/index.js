import Layout from "../components/Layout"
import { useState } from "react"
import Card from "../components/Card"
import activites from "../data/activities"
import List from "../components/List"
import DiscreteSlider from "../components/Slider"
import Toggle from "../components/Toggle"

export default function Index() {
  const [query, setQuery] = useState('')

  return <Layout onQueryChange={newQuery => setQuery(newQuery)} query={query}>
    <List query={query} />
  </Layout>
}

