import { Api } from "services/api"

export const fetcher = (url: string) => Api.get(url).then(res => res.data)