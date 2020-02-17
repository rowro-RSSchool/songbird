import React from "react";
import './BirdDescription.scss';
import CustomAudioPlayer from "./CustomAudioPlayer";

interface BirdDescriptionProps {
  name: string,
  image: string,
  audio: string,
  species: string,
  description: string
}

const BirdDescription: React.FC<BirdDescriptionProps> = ({image, audio, name, species, description}) => (
  <div className="bird-description">
    <div className="bird-description__container">
      <div className="bird-description__image" style={{backgroundImage: `url(${image})`}}/>
      <div className="bird-description__content">
        <div className="bird-description__title">{name}</div>
        <div className="bird-description__species">{species}</div>
        <div className="bird-description__player">
          <CustomAudioPlayer audioUrl={audio}/>
        </div>
      </div>
    </div>
    <div className="bird-description__description">{description}</div>
  </div>
);

export default BirdDescription;
