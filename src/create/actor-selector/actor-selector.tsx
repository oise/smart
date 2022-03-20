import './actor-selector.scss';
import { useEffect, useState } from 'react';
import CreateService from '../create.service';
import { Actor } from '@common/models/Actor';
import { useSelector } from '../create-selector-provider';
import classNames from 'classnames';

const createService = new CreateService();

const ActorSelector = () => {
  const [actors, setActors] = useState<Actor[]>();
  const [selectedUrl, setSelectedUrl] = useState<string>('');
  const { addValues, selectedValues } = useSelector();

  useEffect(() => {
    const fetchActors = async () => {
      const data = await createService.actors();
      setActors(data);
    };

    fetchActors();
  }, []);

  const selectActor = (actor: Actor) => {
    addValues?.('actorImage', actor.url);
    setSelectedUrl(actor.url);
  };

  const actorItemClasses = classNames('actor-item', { active: selectedValues?.actorImage === selectedUrl });

  return (
    <div className='actor-items'>
      {actors?.map((actor) => (
        <div className={actorItemClasses} key={actor.name} onClick={() => selectActor(actor)}>
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
