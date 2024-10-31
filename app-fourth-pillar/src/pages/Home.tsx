import Hero from '../components/Hero'
import InfoText from '../components/InfoText'
import AnimatedSquare from '../components/AnimatedSquare'
import ContactForm from '../components/ContactForm'
import CardList from '../components/CardList'

import { heroData, infoTextData } from '../mocks/home'
import { AppDispatch } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import { selectServiceList, selectServiceStatus } from '../store/selectors'
import { useEffect } from 'react'
import { EServiceSliceStatus } from '../types/serviceSliceType'
import { fetchServices } from '../store/slices/serviceSlice'
import ServiceCards from '../components/CardList/ServiceCards'

const Home = () => {
  const dispatch: AppDispatch = useDispatch<AppDispatch>()
  const serviceList = useSelector(selectServiceList)
  const serviceStatus = useSelector(selectServiceStatus)

  useEffect(() => {
    if (serviceStatus !== EServiceSliceStatus.Success) {
      dispatch(fetchServices(6))
    }
  }, [dispatch, serviceStatus])

  return (
    <>
      <Hero {...heroData} optionClass={'heroHome'} />
      <InfoText {...infoTextData}>
        <AnimatedSquare positionClass={'square01'} />
      </InfoText>
      <CardList
        titleSection={'Our services'}
        isLoading={serviceStatus === EServiceSliceStatus.Loading}
      >
        <ServiceCards posts={serviceList} />
      </CardList>
      <ContactForm />
    </>
  )
}

export default Home
