const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImage}) => {
    
    const handleClick = () => {
        if(bigShoeImage !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe)
        }
    };

    return (
        <div
            className={`border-2 rounded-xl ${bigShoeImage === imgURL.bigShoe ? 'border-fuchsia-300' : 'border-transparent'} cursor-pointer max-sm:flex-1`}
            onClick={handleClick}
        >
            <div className='flex justify-center items-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4 bg-fuchsia-100 transition-all duration-300 ease-in-out hover:scale-105'>
                <img
                    src={imgURL.thumbnail}
                    alt="shoe collection"
                    width={130}
                    height={105}
                    className='object-contain'
                />
            </div>
        </div>
    )
}

export default ShoeCard