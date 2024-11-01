import { Hero } from '../components/Hero';
import { CardList } from '../components/CardList';
import { ClientCards } from '../components/CardList/ClientCards';

import { EClientSliceStatus } from '../types/clientSliceType';

import { useClient } from '../hooks/useClient';
import { heroData } from '../mocks/clients';

export const Clients = () => {
  const { clientList, clientStatus } = useClient();

  return (
    <>
      <Hero {...heroData} />
      <CardList
        isLoading={clientStatus === EClientSliceStatus.Loading}
      >
        <ClientCards posts={clientList}></ClientCards>
      </CardList>
    </>
  );
};
