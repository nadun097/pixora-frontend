import React from 'react';
import styles from './HomePage.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Sponsored_2 from '../../assets/images/Sponsored_2.png';
import Sponsored_1 from '../../assets/images/Sponsered_1.png';
import Sponsored_3 from '../../assets/images/Sponsored_3.png';
import Sponsored_4 from '../../assets/images/Sponsored_4.png';
import Highlight from '../../assets/images/highlight_1.png';
import Highlight2 from '../../assets/images/highlight_2.png';
import LandingBackground from '../../assets/images/LandingBackground.png';
import Card from "../../components/Card/CardHome";
import DecorCard from "../../components/Card/DecorCard";

import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.jpg";

const HomePage: React.FC = () => {
  React.useEffect(() => {
    function animateCountUp(el: HTMLElement) {
      const target = +el.getAttribute('data-target')!;
      const duration = 2000;
      const frameRate = 30;
      const totalFrames = Math.round(duration / (1000 / frameRate));
      let currentFrame = 0;

      const counter = setInterval(() => {
        currentFrame++;
        const progress = currentFrame / totalFrames;
        const value = Math.floor(progress * target);
        el.innerText = value.toLocaleString();

        if (currentFrame === totalFrames) {
          clearInterval(counter);
        }
      }, 1000 / frameRate);
    }

    function startCountWhenVisible() {
      const counters = document.querySelectorAll<HTMLElement>(`.${styles.count}`);

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCountUp(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.9 });

      counters.forEach(counter => observer.observe(counter));
    }

    startCountWhenVisible();
  }, []);

  return (
      <>
        <NavBar />
        <main>
          <div className={styles.landingPageImage}>
            <img src={LandingBackground} alt="NFT Highlight" />
          </div>

          <section className={styles.collaboratorSection}>
            <div className={styles.sectionHeader}>
              <div className={styles.nonbold}><h1>NEW RELEASES</h1></div>
              <div className={styles.sectionHeaderSpace}><h1>|</h1></div>
              <h1>NFT Collections</h1>
            </div>

            <div className={styles.tileCollection}><p>DIGITAL ARTs</p></div>
            <div className={styles.cards}>
              <Card image={img1} />
              <Card image={img2} />
              <Card image={img3} />
              <Card image={img4} />
              <Card image={img5} />
            </div>

            <div className={styles.tileCollection}><p>PHOTOGRAPHs</p></div>
            <div className={styles.cards}>
              <Card image={img1} />
              <Card image={img2} />
              <Card image={img3} />
              <Card image={img4} />
              <Card image={img5} />
            </div>
          </section>

          <div className={styles.decorCard}>
            <DecorCard />
          </div>

          <div className={styles.homepageContainer}>
            <section className={styles.newReleases}>
              <div className={styles.sectionHeader}>
                <div className={styles.nonbold}><h1>NEW RELEASES</h1></div>
                <div className={styles.sectionHeaderSpace}><h1>|</h1></div>
                <h1>Articles</h1>
              </div>

              <h2 className={styles.subHedding}>Everything you need, all in one place</h2>
              <div className={styles.tagButtonsContainer}>
                <button className={styles.tagButton}>NFT Arts</button>
                <button className={styles.tagButton}>Real-World</button>
                <button className={styles.tagButton}>Collection</button>
              </div>

              <div className={styles.nftHighlight}>
                <div className={styles.nftHighlightImage}>
                  <div className={styles.highlightMovingImage1}>
                    <img src={Highlight} alt="NFT Highlight 1" />
                  </div>
                  <div className={styles.highlightMovingImage2}>
                    <img src={Highlight2} alt="NFT Highlight 2" />
                  </div>
                </div>

                <div className={styles.nftHighlightTopic}>
                  <p>CREATE DIGITAL ART WITH THE AS</p>
                  <p>YOUR CANVAS - AND MONETIZE IT</p>
                  <p>IN A BREEZE</p>
                </div>

                <div className={styles.nftHighlightContent}>
                  <div className={styles.nftDescription}>
                    <p className={styles.nftDescription1}>View Use Case</p>
                    <p className={styles.nftDescription2}> ⟶ </p>
                  </div>
                  <div className={styles.yellowDescriptionBoard}>
                    <h3>Featured Article</h3>
                    <div className={styles.yellowBoardText}>
                      <p>How NFTs Are Revitalizing The</p>
                      <p>Creative industry</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.statsSection}>
              <div className={styles.statsContainer}>
                <div className={styles.statTopic}>
                  <p>Trusted by</p>
                  <h3>Millions</h3>
                </div>
                <div className={styles.alignContent}>
                  <div className={styles.statItem}>
                    <p>WALLET INSTALLS</p>
                    <h3 className={styles.count} data-target="539">0</h3>
                  </div>
                  <div className={styles.statItem}>
                    <p>CREATED ASSETS</p>
                    <h3 className={styles.count} data-target="120669">0</h3>
                  </div>
                  <div className={styles.statItem}>
                    <p>MARKETPLACE VOLUME</p>
                    <h3 className={styles.count} data-target="1030">0</h3>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section className={styles.aboutSection}>
            <div className={styles.sectionHeader}>
              <div className={styles.nonbold}>
                <h1>DISCOVER NFTs</h1>
              </div>
              <div className={styles.sectionHeaderSpace}>
                <h1>|</h1>
              </div>
              <h1>About Us</h1>
            </div>
            <div className={styles.aboutContent}>
              <p>
                Welcome to piXora the ultimate destination for digital art and NFT collections.
              </p>
              <p>
                We empower artists, collectors, and enthusiasts to create, buy, and sell unique digital assets on a secure and decentralized platform.
              </p>
              <p>
                Our marketplace is built with cutting-edge blockchain technology, ensuring authenticity, transparency, and true ownership of every NFT.
              </p>
              <p>
                Whether you're a creator looking to showcase your work or a collector searching for rare digital pieces, piXora provides a seamless and user-friendly experience.
              </p>
              <p>
                Join us in shaping the future of digital ownership and explore the limitless possibilities of NFTs today
              </p>
            </div>
          </section>

          <section className={styles.collaboratorSection}>
            <div className={styles.sectionHeader}>
              <div className={styles.nonbold}><h1>OUR</h1></div>
              <div className={styles.sectionHeaderSpace}><h1>|</h1></div>
              <h1>Collaborators</h1>
            </div>

            <div className={styles.collaboratorLogos}>
              <img src={Sponsored_2} alt="NFT logo" />
              <img src={Sponsored_1} alt="Attachment logo" />
              <img src={Sponsored_3} alt="OKX exchange logo" />
              <img src={Sponsored_4} alt="Ervix logo" />
            </div>
          </section>
        </main>
        <Footer />
      </>
  );
};

export default HomePage;
