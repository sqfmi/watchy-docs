import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'E-Paper Display',
    imageUrl: 'img/watchy_watchface_weather.gif',
    description: (
      <>
        Beautiful E-Paper display with 200x200 pixel resolution. Glare free visibility under bright sunlight, near 180 degree view angle, and ultra low power consumption.
      </>
    ),
  },
  {
    title: 'Powered by ESP32',
    imageUrl: 'img/esp32.jpg',
    description: (
      <>
        ESP32-PICO-D4 at its core, with built-in WiFi/Bluetooth LE and compatibility with Arduino, MicroPython, and ESP-IDF
      </>
    ),
  },  
  {
    title: 'Open Source HW & SW',
    imageUrl: 'img/oshw-logo.svg',
    description: (
      <>
        Certified open source hardware (OSHWA) and open source  software. Tons of fun examples and cool watchfaces by us and the community.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title} by SQFMI`}
      description="Watchy by SQFMI">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/getting-started')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
