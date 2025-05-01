import { star } from "../assets/icons";

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex flex-col justify-center items-center">
        <img src={imgURL} alt={customerName} className="rounded-full object-cover w-30 h-30"/> 
        {/* cover: if needed, it can crop the image */}
        
        <div className="mt-5 flex justify-center items-center text-center gap-2">
            <img src={star} alt="rating star" width={24} height={24} className="object-contain m-0"/>
            {/* contain: it will not crop the image, it will fit the image in the given width and height. */}
            <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
        </div>

        <p className="mt-3 max-w-sm text-center info-text">{feedback}</p>

        <h3 className="mt-1 font-palanquin font-bold text-3xl text-center items-start">{customerName}</h3>
        
    </div>
  )
}

export default ReviewCard;