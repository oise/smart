import './browse.scss';
import Header from '@common/components/header';
import Tag from '@common/components/tag';

const Browse = () => {
  return (
    <>
      <Header heading={'Saved Videos'}>
        <button className='button button-primary'>Create New</button>
      </Header>
      <div className='layout-page-content'>
        <div className='browse-item'>
          <div className='browse-item-thumbnail'> </div>
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
