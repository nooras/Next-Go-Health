"use client"

import styles from "./page.module.css";
import HeroSection from './components/HeroSection'
import TypeSection from './components/TypeSection'
import Testimonials from './components/Testimonials'
import LoadCarousals from './components/LoadCarousals'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
      <HeroSection />
      </section>
      <section>
      <TypeSection />
      </section>
      <section>
      <Testimonials />
      </section>
      <section>
        <LoadCarousals />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
