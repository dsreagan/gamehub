import { useQuery } from "@tanstack/react-query"
import genres from "../data/genres"
import APIClient from "../sevices/api-client"

const apiClient = new APIClient<Genre>('/genres')

export interface Genre {
  id: number
  name: string
  image_background: string
}

const useGenres = () => {

  return useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genres
  })
}

export default useGenres