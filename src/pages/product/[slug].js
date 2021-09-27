import { useRouter } from 'next/router';
import { Products } from 'utils/data';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

const ProductScreen = () => {
  const router = useRouter();
  const { slug } = router.query;
  const product = Products.find(a => a.slug === slug);

  if (!product) {
    return (
      <div className='grid place-items-center place-content-center text-5xl text-red-300 font-semibold'>
        product is not available
      </div>
    );
  }
  return (
    <div className='py-3'>
      <Head>
        <title>{product.name} - Amazona</title>
      </Head>
      <Link href='/'>
        <a className='text-lg text-yellow-400'>Back to the Products</a>
      </Link>
      <div className='grid grid-cols-12 gap-3'>
        <div className='md:col-span-6 col-span-12'>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout='responsive'
          />
        </div>
        <div className='md:col-span-3 col-span-12 mt-6 flex flex-col space-y-3 ml-3'>
          <h1 className='text-2xl text-gray-800 dark:text-white font-bold'>{product.name}</h1>
          <h2>Categories: {product.category}</h2>
          <h2>Brand: {product.brand}</h2>
          <h2>Rating: {product.rating} stars ({product.numReview} reviews)</h2>
          <h2>Description: {product.description}</h2>
        </div>

          <div className="md:col-span-3 col-span-12">
          <div className="border shadow-md flex flex-col mx-2 px-4 py-4">
             <div className="flex justify-between items-center w-2/3 md:w-full lg:w-2/3">
              <h5 className="text-lg font-semibold">Price:</h5>
              <h5 className="text-lg font-semibold">${product.price}</h5>
             </div>
             <div className="flex justify-between items-center w-2/3 md:w-full lg:w-2/3 mt-4">
              <h5 className="text-lg ">Status:</h5>
              <h5 className="text-lg ">{product.countInStock>0? "In Stock":"Unavailable"}</h5>
             </div>
             
             {/* button */}
             <div className="mt-4">
               <button className="w-full bg-yellow-400 py-2 hover:bg-yellow-500 rounded-md transition">Add to Cart</button>
             </div>

          </div>

          </div>

      </div>
    </div>
  );
};

export default ProductScreen;
