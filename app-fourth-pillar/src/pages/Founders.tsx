import { useParams } from 'react-router-dom';

//import Founder from '../components/Founder/Founder';

import { IFounder } from '../components/Founder/Founder';
  
import { dataFounders } from '../mocks/founders';

interface FounderProps {
  userId: string;
  name: string;
  position: string;
  post: IFounder;
}

export interface FoundersProps {
  [propName: string]: FounderProps;
} 

const Founders = () => {

  console.log(dataFounders.key);
  console.log(dataFounders);
  
  //вытянуть через айди
  //let { id } = useParams();
  //console.log(id);

  
  //const params = useParams<{ tag: string; item: string }>()
  const params = useParams()
  console.log(params);
  
  
  return (
    <div>
      Founders
      {/* <Founder /> */}
    </div>
  )
}

export default Founders;