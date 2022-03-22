import './background-selector.scss';
import Accordion from '@common/components/accordion';
import { useEffect, useState } from 'react';
import { Background } from '@common/models/Background';
import { SelectedPreview, useSelector } from '../create-selector-provider';
import CreateService from '../create.service';
import Uploader from '@common/components/uploader';

const createService = new CreateService();

const BackgroundSelector = () => {
  const [backgrounds, setBackgrounds] = useState<Background>();
  const { addValues, selectedValues } = useSelector();

  useEffect(() => {
    const fetchBackgrounds = async () => {
      const data = await createService.backgrounds();
      setBackgrounds(data);
    };

    fetchBackgrounds();
  }, []);

  const selectBackground = (type: SelectedPreview['background']['type'], value: string) => {
    addValues?.('background', { type, value });
  };

  return (
    <Accordion>
      <Accordion.Item index={0}>
        <Accordion.Head>Images</Accordion.Head>
        <Accordion.Body>
          <div className='background-items'>
            <div className='background-item'>
              <Uploader className='background-item-uploader' />
            </div>
            {backgrounds?.images?.map((background) => (
              <div
                className={`background-item ${background?.url === selectedValues?.background?.value ? 'active' : ''}`}
                key={background.name}
                onClick={() => selectBackground('image', background.url)}
              >
                <figure className='background-item-image'>
                  <img src={background.url} width={'150px'} />
                </figure>
                <div className='background-item-title'>{background.name}</div>
              </div>
            ))}
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item index={1}>
        <Accordion.Head>Colours</Accordion.Head>
        <Accordion.Body>
          <div className='background-items'>
            {backgrounds?.colours?.map((background) => (
              <div
                className={`background-item ${background.code === selectedValues?.background?.value ? 'active' : ''}`}
                key={background.name}
                onClick={() => selectBackground('colour', background.code)}
              >
                <div className='background-item-image' style={{ background: background.code }} />
                <div className='background-item-title'>{background.name}</div>
              </div>
            ))}
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item index={2}>
        <Accordion.Head>Video</Accordion.Head>
        <Accordion.Body>
          <div className={'background-items'}>
            <div className='background-item'>
              <Uploader className='background-item-uploader' />
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default BackgroundSelector;
