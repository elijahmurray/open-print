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
              OpenPrint is designed to provide a detailed and user-friendly documentation of Bryan Johnson's Blueprint. My goal is to make it easier for everyone to understand, track, and implement the Blueprint in their daily lives, and have a single source of truth documentation (instead of YouTube, Twitter, Bryan's website etc...).
            </p>
            <h2>Community Contributions</h2>
            <p>
              I can't do this alone and would love your help. I will update OpenPrint will be regularly not just based on Bryan's insights but also from discussions from the Reddit community and elsewhere. If you have any suggestions, please feel free to reach out to me through the newsletter or on Twitter.
            </p>
            <h2>Get Started</h2>
            <p>
              Dive into the documentation to learn more about the Blueprint. Subscribe to be notified as I update the project.
            </p>
            <p>My ultimate goal is for us to build a community where we can measure and track our progress, and swap notes for the best process together.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
