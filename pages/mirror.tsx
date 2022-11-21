import { NextPage } from 'next';
import { MirrorHeader } from '../src/components/mirror-header/mirror-header';
import { MirrorSection } from '../src/components/mirror-section/mirror-section';

const Mirror: NextPage = () => {
  return (
    <div className='main-layout main-layout-grid'>
      <MirrorHeader />
      <MirrorSection />
    </div>
  );
};

export default Mirror;
