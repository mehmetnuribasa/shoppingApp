import {products} from '../constants';
import PopularProductCard from '../components/PopularProductCard';

const PopularProduct = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-fuchsia-800'>Popular</span> Products
        </h2>
        
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Experience exceptional quality and style with our highly coveted selections. Explore a realm of comfort, design, and unmatched value.</p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12'>
        {products.map((product, index) => (
          <PopularProductCard
            key={index}
            {...product}  //provide to pass all the properties of an object as props
            // imgURL={product.imgURL}
            // name={product.name}
            // price={product.price}
          
          >
          </PopularProductCard>
        ))}
      </div>
    </section>
  )
}

export default PopularProduct