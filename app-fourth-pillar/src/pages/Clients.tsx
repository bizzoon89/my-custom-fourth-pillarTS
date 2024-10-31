import Hero from '../components/Hero'
import CardList from '../components/CardList'

import { heroData } from '../mocks/clients'
import { AppDispatch } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import { selectClientList, selectClientsStatus } from '../store/selectors'
import { useEffect } from 'react'
import { EClientSliceStatus } from '../types/clientSliceType'
import { fetchClient } from '../store/slices/clientSlice'
import ClientCards from '../components/CardList/ClientCards'

const LIMIT = 12

const Clients = () => {
  const dispatch: AppDispatch = useDispatch<AppDispatch>()
  const clientStatus = useSelector(selectClientsStatus)
  const clientList = useSelector(selectClientList)

  useEffect(() => {
    if (clientStatus !== EClientSliceStatus.Success) {
      dispatch(fetchClient(LIMIT))
    }
  }, [clientStatus, dispatch])

  return (
    <>
      <Hero {...heroData} />
      <CardList isLoading={clientStatus === EClientSliceStatus.Loading}>
        <ClientCards posts={clientList} />
      </CardList>
    </>
  )
}

export default Clients
