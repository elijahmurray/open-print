import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <section className={styles.features}>
          <div className="container">
            <h2>About OpenPrint</h2>
            <p>
              OpenPrint is designed to provide a detailed and user-friendly documentation of Bryan Johnson's Blueprint. Our aim is to make it easier for individuals to understand, track, and implement the Blueprint in their daily lives.
            </p>
            <h2>Community Contributions</h2>
            <p>
              We believe in the power of community. OpenPrint will be regularly updated not just based on Bryan's insights but also from valuable contributions and discussions from the Reddit community. Together, we can refine and enhance the Blueprint for everyone.
            </p>
            <h2>Get Started</h2>
            <p>
              Dive into the documentation to learn more about the Blueprint, track your progress, and join the community in refining this powerful protocol.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
