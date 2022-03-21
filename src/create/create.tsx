import './create.scss';
import Header from '@common/components/header';
import Preview from './preview';
import ScriptBox from './script-box';
import ActorSelector from './actor-selector';
import { CreateSelectorProvider } from './create-selector-provider';
import { useState } from 'react';
import classNames from 'classnames';
import VoiceSelector from './voice-selector';
import AlignmentSelector from './alignment-selector';
import BackgroundSelector from './background-selector';

type Menu = 'actor' | 'voice' | 'alignment' | 'background';

const Create = () => {
  const [selectedMenu, setSelectedMenu] = useState<Menu>('actor');

  const navItemClasses = (value: Menu) => classNames('create-nav-item', { active: selectedMenu === value });

  return (
    <CreateSelectorProvider>
      <Header heading={'Saying Hi to my customer'}>
        <button className='button button-primary'>Save</button>
      </Header>
      <div className='layout-page-content'>
        <div className='create-content'>
          <Preview />
          <ScriptBox />
        </div>
        <div className='create-nav'>
          <nav className='create-nav-items'>
            <div className={navItemClasses('actor')} onClick={() => setSelectedMenu('actor')}>
              Actor
            </div>
            <div className={navItemClasses('voice')} onClick={() => setSelectedMenu('voice')}>
              Voice
            </div>
            <div className={navItemClasses('alignment')} onClick={() => setSelectedMenu('alignment')}>
              Alignment
            </div>
            <div className={navItemClasses('background')} onClick={() => setSelectedMenu('background')}>
              Background
            </div>
          </nav>
          {selectedMenu === 'actor' && <ActorSelector />}
          {selectedMenu === 'voice' && <VoiceSelector />}
          {selectedMenu === 'alignment' && <AlignmentSelector />}
          {selectedMenu === 'background' && <BackgroundSelector />}
        </div>
      </div>
    </CreateSelectorProvider>
  );
};

export default Create;
