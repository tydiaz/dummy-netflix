import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../styles/Login.module.css';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const handleOnChangeEmail = (e) => {
    setUserMessage('');
    console.log('event', e);
    console.log(e.target.value);
    const email = e.target.value;
    setEmail(email);
  };

  const handleLogin = (e) => {
    console.log('login button');
    e.preventDefault();

    if (email) {
      if (email === 'mad_hack3r@protonmail.com') {
        // route to home
        console.log('logging in....');
        router.push('/');
      } else {
        setUserMessage('Something went wrong. Please try again.');
      }
    } else {
      // show message
      setUserMessage('Please enter a valid email');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Nextflix Login</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link href='/' className={styles.logoLink}>
            <a className={styles.logoLink}>
              <div className={styles.logoWrapper}>
                <Image
                  src={'/static/netflix.svg'}
                  alt='Netflix logo'
                  width='128px'
                  height='34px'
                />
              </div>
            </a>
          </Link>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <h1 className={styles.loginHeader}>Login</h1>
          <input
            type='text'
            placeholder='Email Address'
            onChange={handleOnChangeEmail}
            className={styles.email}
          />
          <p className={styles.message}>{userMessage}</p>
          <button onClick={handleLogin} className={styles.loginButton}>
            Sign In
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
