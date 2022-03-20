import './actor-selector.scss';
import { useEffect, useState } from 'react';
import CreateService from '../create.service';
import { Actor } from '@common/models/Actor';

const createService = new CreateService();

const ActorSelector = () => {
  const [actors, setActors] = useState<Actor[]>();

  useEffect(() => {
    const fetchActors = async () => {
      const data = await createService.actors();
      setActors(data);
    };

    fetchActors();
  }, []);
  console.log(actors);

  return (
    <div className='actor-items'>
      {actors?.map((actor) => (
        <div className='actor-item' key={'actor.name'}>
          <figure className='actor-item-image'>
            <img src={actor.thumbnailUrl} width={'150px'} />
          </figure>
          <div className='actor-item-title'>{actor.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ActorSelector;
