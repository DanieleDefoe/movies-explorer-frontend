import { images } from '../../images';
import { Project, SectionTitle } from '..';
import './Student.css';
import { projects } from './lib/constants';

export const Student = () => {
  return (
    <section className="student">
      <SectionTitle text="Студент" />
      <section className="student__info">
        <div className="student__texts">
          <h3 className="student__title">Абузар</h3>
          <p className="student__general">Фронтенд-разработчик, 25 лет</p>
          <p className="student__bio">
            Я родился в Подольске, но сейчас живу в Санкт-Петербурге, учусь в
            университете. Я люблю заниматься спортом и слушать музыку,
            программирование тоже могу назвать хобби. На данный момент я работаю
            в стартапе разработчиком интерфейсов
          </p>
        </div>
        <a
          href="https://github.com/DanieleDefoe"
          rel="noreferrer nofollow noopener"
          className="student__github"
        >
          Github
        </a>
        <img
          src={images.abuzar}
          className="student__image"
          alt="фотграфия Абузара Мамедова"
        />
      </section>
      <section className="student__portfolio">
        <h4 className="student__portfolio-title">Портфолио</h4>
        <ul className="student__portfolio-list">
          {projects.map(({ title, link }, index) => (
            <Project title={title} link={link} key={index} />
          ))}
        </ul>
      </section>
    </section>
  );
};
