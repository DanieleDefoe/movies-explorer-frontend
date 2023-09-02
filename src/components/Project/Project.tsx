import { FC } from 'react';

import { images } from '../../images';

import './Project.css';
import { ProjectProps } from './lib/types';

export const Project: FC<ProjectProps> = ({ title, link }) => {
  return (
    <a
      href={link}
      className="project"
      rel="noreferrer noopener nofollow"
      target="_blank"
    >
      <div className="project__content">
        <h5 className="project__title">{title}</h5>
        <img className="project__arrow" src={images.arrow} alt="стрелочка" />
      </div>
    </a>
  );
};
