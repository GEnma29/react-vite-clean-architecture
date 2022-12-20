import axios from "axios"

export const testingServices = () => {
    return axios.get('https://rickandmortyapi.com/api/character/2')
}