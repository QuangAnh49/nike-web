import ReviewCard from '../components/ReviewCard';
import { reviews } from '../constants/index';
const CustomerReview = () => {
  return (
    <section className=" max-container">
      <h3 className=" font-palanquin text-center text-4xl font-bold">
        What Our <span className=" text-coral-red">Customers </span>
        Say?
      </h3>
      <p className=" info-text m-auto mt-4 max-w-lg text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ratione corporis, eligendi velit rem magnam
        cumque quam ea aliquid facilis quibusdam nobis nesciunt enim tenetur incidunt omnis repellendus minus
        asperiores.
      </p>
      <div className=" mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map(review => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
