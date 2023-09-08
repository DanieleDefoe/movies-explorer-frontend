import { FC } from 'react';

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
        <p className="project__arrow">↗</p>
      </div>
    </a>
  );
};
