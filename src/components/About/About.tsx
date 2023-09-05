import { Progress, SectionTitle } from '..';
import './About.css';

export const About = () => {
  return (
    <section className="about" id="about">
      <SectionTitle text="О проекте" />
      <div className="about__info">
        <article className="about__info-item">
          <h3 className="about__info-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about__info-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </article>
        <article className="about__info-item">
          <h3 className="about__info-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about__info-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>
      <div className="about__progresses">
        <Progress
          percentage="1 неделя"
          color="#000"
          bg="var(--primary-element-color, #3ddc84)"
          title="Back-end"
          className="progress_type_green"
        />
        <Progress
          percentage="4 недели"
          color="#fff"
          bg="var(--seconday-element-color, #303030)"
          title="Front-end"
        />
      </div>
    </section>
  );
};
