import { Hero } from '../components/Hero';
import { JoinBox } from '../components/JoinBox';
import { PeopleBox } from '../components/PeopleBox';

import { heroData, joinBoxData, peopleData, peopleListData, logoListData } from '../mocks/people';

export const People = () => {
  return (
    <>
      <Hero {...heroData} />
      <PeopleBox
        peopleData={peopleData}
        peopleListData={peopleListData}
        logoListData={logoListData}
      />
      <JoinBox
        {...joinBoxData}
        align={'textCenter'}
        buttonColor={'btnWhite'}
      />
    </>
  );
};
