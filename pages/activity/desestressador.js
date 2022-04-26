import Layout from "../../components/LayoutNoNavbar";
import { useState } from "react";
import Clicker from "../../components/ClickerInterface"

export default function Desestressador (){
    const [query, setQuery] = useState('')

    return(
        <Layout breadcrumbs={[
            { name: 'Activitats', href: '/activity/list', current: true },
            { name: 'Desestressador', href: '/activity/desestressador', current: false },
          ]} titol="Desestressador">
              <Clicker breadcrumbs={[
            { name: 'Activitats', href: '/activity/list', current: true },
            { name: 'Desestressador', href: '/activity/desestressador', current: false },
          ]}/>
        </Layout>   
    )
}