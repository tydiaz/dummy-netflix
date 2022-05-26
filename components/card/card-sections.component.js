import Card from './card.component';
import styles from './card-sections.module.css';

const CardSections = (props) => {
  const { title, movies, size } = props;
  console.log({ movies });
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {movies.map((movie, idx) => {
          return (
            <Card id={idx} key={idx} imageUrl={movie.imageUrl} size={size} />
          );
        })}
      </div>
    </section>
  );
};

export default CardSections;
