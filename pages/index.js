import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/banner/banner.component';
import Card from '../components/card/card.component';
import NavBar from '../components/nav/navbar.component';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar username='Ty@nextflix.io' />
      <Banner
        title='The Flash'
        subTitle='fastest superhero ever'
        imageUrl='/static/the_flash.webp'
      />
      <Card imageUrl='/static/the_flash.webp' size='large' />
      <Card imageUrl='/static/the_flas.webp' size='medium' />
      <Card imageUrl='/static/the_flash.webp' size='small' />
    </div>
  );
}
