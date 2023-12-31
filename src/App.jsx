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
      <section className="xl:px-16 xl:max-wide:pr-0">
        <Hero />
      </section>
      <section>
        <PopularProduct />
      </section>
      <section>
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
