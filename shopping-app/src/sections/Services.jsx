import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service, index) => (
        // spread operator is used to pass all the properties of an object as props
        <ServiceCard key={index} {...service} />
      ))}
    </section>
  )
}

export default Services