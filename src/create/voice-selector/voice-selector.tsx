import './voice-selector.scss';

import CreateService from '../create.service';
import { useEffect, useState } from 'react';
import { useSelector } from '../create-selector-provider';
import { Voice } from '@common/models/Voice';
import VoicePlayer from './voice-player';

const createService = new CreateService();

const VoiceSelector = () => {
  const [voices, setVoices] = useState<Voice[]>();
  const { addValues, selectedValues } = useSelector();

  useEffect(() => {
    const fetchVoices = async () => {
      const data = await createService.voices();
      setVoices(data);
    };

    fetchVoices();
  }, []);

  const selectVoice = (voice: Voice) => {
    addValues?.('voice', voice.name);
  };

  return (
    <div className='voice-items'>
      {voices?.map((voice) => (
        <div className={`voice-item ${voice.name === selectedValues?.voice ? 'active' : ''}`} key={voice.name} onClick={() => selectVoice(voice)}>
          <VoicePlayer name={voice.name} sample={voice.sample} />
        </div>
      ))}
    </div>
  );
};

export default VoiceSelector;
