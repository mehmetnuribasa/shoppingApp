import { useState} from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes} from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container p-2"
    >

      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-fuchsia-600">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] font-bold max-sm:leading-[82]">
          <span className="xl:bg-white relative z-10 pr-10 xl:whitespace-nowrap">The New Product</span>
          <br />
          <span className="text-fuchsia-800 inline-block mt-5">MNB</span>
          Shoes
        </h1>
        <p className="text-lg font-montserrat text-slate-gray leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Shop Online arrivals, quality comfort, and innovation for your active life.</p>
        
        <Button label="Show now" iconURL={arrowRight}/>

        <div className="flex gap-14 justify-start items-start flex-wrap w-full mt-20">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-pink-50 bg-cover bg-center">
        <img 
          src={bigShoeImg}
          alt="Shoe Collection"
          width={600}
          height={500}
          className="object-contain relative z-10"
        />
      
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                  imgURL={shoe}
                  changeBigShoeImage={(shoePhoto) => setBigShoeImg(shoePhoto)}
                  bigShoeImage= {bigShoeImg}
              />
            </div>

          ))}
        </div>
      </div>
    </section>

  )
}

export default Hero