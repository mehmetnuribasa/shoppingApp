import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section id="contact-us" className="max-container flex justify-between items-center gap-10 max-lg:flex-col">
      <h3 className="max-sm:text-4xl text-5xl font-bold font-palanquin leading-16 lg:max-w-md ">
        <span className="text-fuchsia-800">Sign up </span>
        for
        <span className="text-slate-700"> Updates </span>
        &
        <span className="text-slate-700"> Contact Us</span> 
      </h3>

      <div className="w-full flex items-center gap-5 p-2 rounded-full lg:max-w-[40%] max-sm:flex-col sm:border sm:border-slate-gray">
        <input type="text" placeholder="subscribe@mnb.com" className="input"/>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign up" />
        </div>
      </div>

    </section>
  )
}

export default Subscribe