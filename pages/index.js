import Head from 'next/head';
import Banner from '../components/banner/banner.component';
import CardSections from '../components/card/card-sections.component';
import NavBar from '../components/nav/navbar.component';
import { getPopularVids, getVids } from '../lib/vids';
import styles from '../styles/Home.module.css';

export async function getServerSideProps() {
  // TODO: add sections for popular movies and tv shows
  const dcMovies = await getVids('dc trailer');
  const programmingVids = await getVids('coding tutorial');
  const marvelMovies = await getVids('marvel trailer');
  const popularVids = await getPopularVids();

  return { props: { dcMovies, programmingVids, marvelMovies, popularVids } };
}

export default function Home({
  dcMovies,
  programmingVids,
  marvelMovies,
  popularVids,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.main}>
        <NavBar username='Ty@nextflix.io' />
        <Banner
          title='The Flash'
          subTitle='fastest superhero ever'
          imageUrl='/static/the_flash.webp'
        />
        <div className={styles.sectionsContainer}>
          <CardSections title='DC' vids={dcMovies} size='large' />
          <CardSections
            title='Programming'
            vids={programmingVids}
            size='small'
          />
          <CardSections title='Marvel' vids={marvelMovies} size='medium' />
          <CardSections title='Most Popular' vids={popularVids} size='small' />
        </div>
      </div>
    </div>
  );
}
