
import useSWR from 'swr'
import { fetcher } from "~/utilities/fecht.utility"

const HelloWorldComponent = () => {
  const {data: character} = useSWR('character/2', fetcher)
  return (
    <div>
        <h1>Hola Mundo</h1>
        <p>{character?.name}</p>
    </div>
  )
}

export default HelloWorldComponent