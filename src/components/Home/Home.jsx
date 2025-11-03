import Hero from '../Hero/Hero';
import LatestProducts from '../LatestProducts/LatestProducts';

const latestProductPromise = fetch('http://localhost:5000/latest-products').then((res) =>
  res.json(),
);

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestProducts latestProductPromise={latestProductPromise} />
    </div>
  );
};

export default Home;
