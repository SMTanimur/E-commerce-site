import ProductCard from '@components/ProductCard';
import { getAllProducts } from '../utils/api/index';
import Slider from 'react-slick';
import Head from 'next/head';
import { useQuery } from 'react-query';
import { Products } from '../utils/data';
// import db from 'utils/db';
// import Product from 'utils/models/product';

export default function Home(props) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipeToSlide: true,
    arrows: true,
  };
  const { data } = useQuery('products', getAllProducts, {
    initialData: props.products,
  });
  console.log(data);
  return (
    <div className='py-6 my-6'>
      <Head>
        <title>Home page</title>
      </Head>
      <div className='container mx-auto max-h-[500px] overflow-hidden max-w-[1450px]'>
        <Slider {...settings}>
          <div className='w-full overflow-hidden'>
            <img src='/images/banner1.jpg' alt='banner1' />
          </div>
          <div className='w-full overflow-hidden'>
            <img src='/images/banner2.jpg' alt='banner2' />
          </div>
        </Slider>
      </div>
      <h1 className='mb-5 text-2xl text-gray-700 dark:text-white font-semibold text-center md:text-left md:ml-4'>
        Popular Products
      </h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-content-center gap-6 px-8'>
        {Products.map(product => (
          <ProductCard product={product} key={product.name} />
        ))}
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   await db.connect();
//   const products = await Product.find({}).lean();
//   await db.disconnect();
//   return {
//     props: {
//       products,
//     },
//   };
// }
