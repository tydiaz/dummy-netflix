import Image from 'next/image';
import { useState } from 'react';
import cls from 'classnames';
import { motion } from 'framer-motion';
import styles from './card.module.css';

const Card = (props) => {
  const placeholderImage =
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80';
  const { imageUrl = placeholderImage, size = 'medium' } = props;
  const [imageSrc, setImageSrc] = useState(imageUrl);

  const sizeMap = {
    large: styles.largeItem,
    medium: styles.mediumItem,
    small: styles.smallItem,
  };

  const handleOnError = () => {
    console.log('error');
    setImageSrc(placeholderImage);
  };

  return (
    <div className={styles.container}>
      Card
      <motion.div
        whileHover={{ scale: 1.2 }}
        className={cls(styles.motionWrapper, sizeMap[size])}
      >
        <Image
          src={imageSrc}
          alt='card image'
          layout='fill'
          className={styles.cardImage}
          onError={handleOnError}
        />
      </motion.div>
    </div>
  );
};

export default Card;
