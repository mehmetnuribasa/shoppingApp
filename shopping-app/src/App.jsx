// rafce -> create the componet with file name automatically.
import React from 'react';
import {Hero, CustomerReviews, Footer, PopularProduct,
Services, SpecialOffer, Subscribe, SuperQuality} from './sections';
import Nav from './components/Nav';


const App = () => {
  return (
  <main className='relative'>
    <Nav />
    <section className='xl:padding-l wide:padding-r padding-b bg-amber-200'>
      <Hero />
    </section>
    <section className='padding'>
     < PopularProduct />
    </section>
    <section className='padding'>
      <SuperQuality />
    </section>
    <section className='padding py-10'>
      <Services />
    </section>
    <section className='padding'>
      <SpecialOffer />
    </section>
    <section className='bg-pale-blue padding'>
     < CustomerReviews />
    </section>
    <section className='padding-x sm:py-32 py-16 w-full'>
     < Subscribe />
    </section>
    <section className='bg-black padding-x padding-t pb-8 text-white-400'>
      <Footer />
    </section>
  </main>
  );
}

export default App;
