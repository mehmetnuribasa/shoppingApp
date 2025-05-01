import Button from '../components/Button';
import { shoe8 } from '../assets/images';

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className='flex justify-between items-center gap-10 w-full max-container max-lg:flex-col'
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
          We offer you
          <span className="text-fuchsia-800"> Top Quality </span>
          Shoes
        </h2>

        <p className="mt-4 info-text lg:max-w-lg">
          Copilot said: Our carefully designed footwear guarantees superior comfort
          Our carefully designed footwear guarantees superior comfort and style,
          enhancing your experience with exceptional quality, innovation, and a hint of sophistication.
        </p>

        <p className="mt-6 info-text lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <div className="mt-10">
          <Button label="View Detail"/>
        </div>
      </div>

      <div className='flex flex-1 justify-center items-center'>
        <img src={shoe8} alt="shoe photo" width={560} height={520} className='object-contain'/>
      </div>
    </section>
  )
}

export default SuperQuality;