import './profile.scss';
import profilePic from '/src/assets/profile-pic.jpg';
import InputField from '@common/components/input-field';

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='profile-avatar'>
        <div className='profile-avatar-image'>
          <img src={profilePic} alt='Profile Image' />
        </div>
        <div className='profile-avatar-upload'>
          <svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17 17'>
            <path
              d='M15 2a3 3 0 0 0-5 0l-8 8v1l-1 4a1 1 0 0 0 1 1l4-1h1l8-8a3 3 0 0 0 0-5ZM6 13l-2-2 6-7 3 3-7 6Zm-3-1 2 2H3v-2Zm11-6-3-3a2 2 0 0 1 3 3Z'
              fill='#3860AD'
            />
          </svg>
        </div>
      </div>
      <form className='profile-form'>
        <div className='row'>
          <div className='form-group col-md-6 col-sm-12'>
            <InputField name={'firstName'} label={'First Name'} onChange={() => null} value={'Peter'} />
          </div>
          <div className='form-group col-md-6 col-sm-12'>
            <InputField name={'lastName'} label={'Last Name'} onChange={() => null} value={'Parker'} />
          </div>
        </div>
        <div className='row'>
          <div className='form-group col-md-6 col-sm-12'>
            <InputField name={'email'} label={'Email'} onChange={() => null} value={'peter@parker.com'} />
          </div>
        </div>

        <button className='button button-primary' type={'button'}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
