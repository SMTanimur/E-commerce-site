import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className='shadow-xl border-2 rounded-lg w-full'>
      <div className='rounded-md flex flex-col w-full'>
        <div className='flex flex-col object-cover relative w-full h-full'>
          <Link href={`/product/${product.slug}`}>
            <a>
              <div className='absolute z-20 top-0 left-0 hover:bg-black hover:bg-opacity-20 w-full h-full transition'></div>
              <Image
                src={product.image}
                width={580}
                height={350}
                className='object-center w-full'
              />
              <h3 className='text-lg font-semibold ml-2 my-2'>
                {product.name}
              </h3>
            </a>
          </Link>
        </div>

        <div className='flex space-x-3 ml-2 text-lg font-medium py-3 items-center '>
          <h1>${product.price}</h1>
          <button className='text-yellow-500 uppercase text-sm'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
