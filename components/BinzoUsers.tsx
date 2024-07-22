import React from "react";
import { testimonials } from "@/data";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, StarHalf } from "lucide-react";
import BannerCard from "./BannerCard";

const Stars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return <Star key={i} className="text-yellow-400 fill-yellow-400" />;
        } else if (i === fullStars && hasHalfStar) {
          return (
            <StarHalf key={i} className="text-yellow-400 fill-yellow-400" />
          );
        } else {
          return <FaRegStar size={22} key={i} className="text-yellow-400" />;
        }
      })}
    </div>
  );
};

const RatingBar = ({
  stars,
  percentage,
}: {
  stars: number;
  percentage: number;
}) => {
  return (
    <div className="flex items-center gap-2">
      <span className="w-3 text-sm">{stars}</span>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-purple-600 h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="w-8 text-right text-sm">{percentage}%</span>
    </div>
  );
};

const TestimonialsSection = () => {
  const overallRating = 4.7;
  const ratings = [
    { stars: 5, percentage: 35 },
    { stars: 4, percentage: 40 },
    { stars: 3, percentage: 8 },
    { stars: 2, percentage: 12 },
    { stars: 1, percentage: 5 },
  ];

  return (
    <section className="bg-gradient-to-br text-white  pt-2 pb-10  sm:px-6 lg:px-8">
      <BannerCard title="Testimonials" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 px-4 lg:items-center items-start">
          <div className="w-full lg:w-1/3  rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <div className="text-5xl font-bold text-purple-600 mr-4">
                {overallRating}
              </div>
              <div>
                <Stars rating={overallRating} />
                <p className="text-sm text-gray-600 mt-1">out of 5</p>
              </div>
            </div>
            <div className="space-y-2">
              {ratings.map((rating) => (
                <RatingBar
                  key={rating.stars}
                  stars={rating.stars}
                  percentage={rating.percentage}
                />
              ))}
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className=" text-white m-1 p-6 rounded-lg shadow-md flex flex-col items-center h-full">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                        <Image
                          src={item.image}
                          alt={item.name}
                          height={400}
                          width={400}
                          className="object-center object-cover size-20"
                        />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {item.name}
                      </h3>
                      <Stars rating={item.rating} />
                      <p className="text-white text-sm mt-4 text-center">
                        {item.reviewDescription}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden sm:block">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
