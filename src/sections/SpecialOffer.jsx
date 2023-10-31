import { offer } from '../assets/images';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';

const SpecialOffer = () => {
  return (
    <section id="offers" className=" flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className=" flex-1 ">
        <img src={offer} alt="offer" height={687} width={773} className=" object-contain w-full" />
      </div>
      <div className=" flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className=" text-coral-red inline-block mt-3"> Special</span> Offers
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text">
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Soluta molestiae minima dolorem sunt quis ea nihil, nobis, perspiciatis
          molestias, praesentium cumque quaerat id ullam neque similique. Reiciendis consequatur sed totam.
        </p>
        <p className=" mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction</p>
        <p className="mt-11 flex flex-wrap gap-4 ">
          {' '}
          <Button label="Shop Now" iconUrl={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            textColor="text-slate-gray"
            borderColor="border-slate-gray"
          />
        </p>
      </div>
    </section>
  );
};

export default SpecialOffer;
