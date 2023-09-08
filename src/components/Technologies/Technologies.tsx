import { SectionTitle, TechItem } from '..';
import './Technologies.css';
import { technologies } from './lib/constants';

export const Technologies = () => {
  return (
    <section className="technologies">
      <SectionTitle
        text="Технологии"
        className="title-container__divider_type_black"
      />
      <div className="technologies__info">
        <h3 className="technologies__title">7 технологий</h3>
        <p className="technologies__subtitle">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="technologies__list">
          {technologies.map((element, index) => (
            <TechItem text={element} key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};
