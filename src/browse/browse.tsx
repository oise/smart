import './browse.scss';
import Header from '@common/components/header';
import Tag from '@common/components/tag';
import actorImg from '/src/assets/actors/saved-actor.jpg';
import { NavLink } from 'react-router-dom';

const Browse = () => {
  return (
    <>
      <Header heading={'Saved Videos'}>
        <NavLink className='button button-primary' to='/create'>
          Create New
        </NavLink>
      </Header>
      <div className='layout-page-content'>
        <div className='browse-item'>
          <div className='browse-item-thumbnail'>
            <img src={actorImg} alt='actor' />
          </div>
          <div className='browse-item-title'>Saying Hi to users!</div>
          <div className='browse-item-tags'>
            <Tag>Email</Tag>
            <Tag>Marketing</Tag>
            <Tag>Greeting</Tag>
          </div>
        </div>
      </div>
    </>
  );
};

export default Browse;
