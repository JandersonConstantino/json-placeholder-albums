import { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { Types as LoaderTypes } from 'store/ducks/loader'

const useAlbumsFetcher = () => {
  const [state, setState] = useState({ albums: [], error: null })
  const dispatch = useDispatch()

  const fetch = async () => {
    try {
      dispatch({ type: LoaderTypes.SET_LOADING, payload: true })

      const response = await axios('/albums')
      setState(prevState => ({ ...prevState, albums: response.data || [], error: null }))
    } catch (error) {
      setState(prevState => ({ ...prevState, error, albums: [] }))
    } finally {
      dispatch({ type: LoaderTypes.SET_LOADING, payload: false })
    }
  }

  const onLoad = () => {
    fetch();
  }

  useEffect(onLoad, [])

  return { ...state, refetch: fetch }
}

export default useAlbumsFetcher
