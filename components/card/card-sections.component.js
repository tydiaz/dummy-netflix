import Card from './card.component';
import styles from './card-sections.module.css';

const CardSections = (props) => {
  const { title, vids = [], size } = props;
  console.log({ vids });
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {vids.map((video, idx) => {
          return (
            <Card id={idx} key={idx} imageUrl={video.imageUrl} size={size} />
          );
        })}
      </div>
    </section>
  );
};

export default CardSections;
