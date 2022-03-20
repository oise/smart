import './create.scss';
import Header from '@common/components/header';
import Preview from './preview';
import ScriptBox from './script-box';
import ActorSelector from './actor-selector';
import { CreateSelectorProvider } from './create-selector-provider';

const Create = () => {
  return (
    <>
      <Header heading={'Saying Hi to my customer'}>
        <button className='button button-primary'>Save</button>
      </Header>
      <div className='layout-page-content'>
        <div className='create-content'>
          <Preview actorImage={''} alignment={'center'} background={{ type: 'video', value: '' }} />
          <ScriptBox />
        </div>
        <div className='create-nav'>
          <nav className='create-nav-items'>
            <div className='create-nav-item active'>Actor</div>
            <div className='create-nav-item'>Voice</div>
            <div className='create-nav-item'>Alignment</div>
            <div className='create-nav-item'>Background</div>
          </nav>
          <CreateSelectorProvider>
            <ActorSelector />
          </CreateSelectorProvider>
        </div>
      </div>
    </>
  );
};

export default Create;
