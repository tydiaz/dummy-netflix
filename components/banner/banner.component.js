import Image from 'next/image';
import styles from './banner.module.css';

const Banner = (props) => {
  const { title, subTitle, imageUrl } = props;

  const handleOnPlay = () => {
    console.log('button clicked');
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <div className={styles.seriesWrapper}>
            <p className={styles.firstLetter}>N</p>
            <p className={styles.series}>S E R I E S</p>
          </div>
          <h3 className={styles.title}>{title}</h3>
          <h3 className={styles.subtitle}>{subTitle}</h3>
          <div className={styles.buttonWrapper}>
            <button onClick={handleOnPlay} className={styles.button}>
              <Image
                src='/static/play_arrow.svg'
                alt='play button icon'
                width='32px'
                height='32px'
              />
              <span className={styles.buttonText}>Play</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={styles.bannerImage}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
    </div>
  );
};

export default Banner;
