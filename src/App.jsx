import {
  Hero,
  PopularProduct,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections";
import Nav from "./components/Nav";

function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:px-16 xl:max-wide:pr-0 pb-12 sm:pb-24">
        <Hero />
      </section>
      <section className="px-8 py-12 sm:px-16 sm:py-24">
        <PopularProduct />
      </section>
      <section className="px-8 py-12 sm:px-16 sm:py-24">
        <SuperQuality />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <SpecialOffer />
      </section>
      <section>
        <CustomerReviews />
      </section>
      <section>
        <Subscribe />
      </section>
      <section className="bg-black">
        <Footer />
      </section>
    </main>
  );
}

export default App;
