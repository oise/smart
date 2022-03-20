import './voice-player.scss';
import play from '/src/assets/play.svg';
import pause from '/src/assets/pause.svg';
import { useEffect, useRef, useState } from 'react';
import { Voice } from '@common/models/Voice';
import classNames from 'classnames';

const VoicePlayer = ({ sample, name }: Voice) => {
  const [progress, setProgress] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const audio = useRef<HTMLMediaElement>(null);

  let timer: number;

  const voiceLoadHandler = async () => {
    timer = setInterval(() => {
      if (audio.current) {
        setProgress(Math.round((audio.current.currentTime * 100) / audio.current.duration));
      }
    }, 100);
  };

  const voiceEndedHandler = () => {
    setProgress(0);
    setIsPlaying(false);
  };

  const handlePause = async () => {
    setIsPlaying(false);
    audio?.current?.pause();
  };

  const handlePlay = async () => {
    setIsPlaying(true);
    await audio.current.play();
  };

  useEffect(() => {
    if (audio.current) {
      audio.current.addEventListener('loadeddata', voiceLoadHandler);
      audio.current.addEventListener('ended', voiceEndedHandler);
    }

    return () => {
      audio.current.removeEventListener('loadeddata', voiceLoadHandler);
      audio.current.removeEventListener('ended', voiceEndedHandler);
      clearInterval(timer);
    };
  }, []);

  const playPauseClasses = classNames('voice-player-play-pause', { playing: isPlaying });

  return (
    <div className='voice-player-container'>
      <div className={playPauseClasses}>
        <audio src={sample} ref={audio} />
        {!isPlaying && <img src={play} className={'play'} alt={'play button'} onClick={handlePlay} />}
        {isPlaying && <img src={pause} className={'pause'} alt={'pause button'} onClick={handlePause} />}
      </div>
      <div className='flex column'>
        <div className={'voice-player-name'}>{name || '-'}</div>
        <div className='voice-player-sound-graph'>
          <div className='voice-player-sound-graph-progress' style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
};

export default VoicePlayer;
