import { offer } from "../assets/images"
import Button from "../components/Button"
import { arrowRight } from "../assets/icons"

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center gap-10 max-container max-xl:flex-col-reverse">

      <div className="flex-1">
        <img src={offer} alt="shoe offer" width={770} height={680} className="object-contain w-full"/>
      </div>

      <div className="flex flex-col flex-1">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-fuchsia-800">Special </span>
          Offer
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight}></Button>
          <Button label="Learn more" backgroundColor="bg-white" borderColor="border-red" textColor="text-slate-gray"></Button>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer