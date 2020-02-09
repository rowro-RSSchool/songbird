import React from "react";
import './BirdDescription.scss';
import CustomAudioPlayer from "./CustomAudioPlayer";
import {withCustomAudio} from "react-soundplayer/lib/addons";

function BirdDescription({image, audio, name, species, description}) {
  const AudioPlayer = withCustomAudio(CustomAudioPlayer);

  return (
    <div className="bird-description">
      <div className="bird-description__container">
        <div className="bird-description__image" style={{backgroundImage: `url(${image})`}}/>
        <div className="bird-description__content">
          <div className="bird-description__title">{name}</div>
          <div className="bird-description__species">{species}</div>
          <div className="bird-description__player">
            <AudioPlayer streamUrl={audio} preloadType="auto"/>
          </div>
        </div>
      </div>
      <div className="bird-description__description">{description}</div>
    </div>
  );
}

export default BirdDescription;
