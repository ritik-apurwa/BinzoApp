import { testimonials } from "@/data";
import Image, { StaticImageData } from "next/image";
import { FaStar } from "react-icons/fa";

interface User {
  id: number;
  name: string;
  image: StaticImageData;
  reviewDescription: string;
  rating: number;
}

interface BinzoUsersProps {
  testimonials: User[];
}

interface BinzoUsersCardProps {
  user: User;
}

const BinzoUsersCard: React.FC<BinzoUsersCardProps> = ({ user }) => {
  return (
    <div className="bg-white flex flex-col max-w-96 items-center justify-center  border border-b-black  py-4 rounded-lg overflow-hidden">
      <div className="relative size-14 rounded-full overflow-hidden">
        <Image
          src={user.image}
          alt={user.name}
          layout="fill"
          objectFit="cover"
          className="object-center object-cover"
        />
      </div>

      <div className="p-4 text-center px-10">
        <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
        <p className="text-gray-600 mb-4">{user.reviewDescription}</p>
      </div>

      <div className="flex w-full justify-center items-center">
        <p className="text-gray-400 text-sm">Rating:</p>
        <div className="ml-2 flex  items-center">
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
        </div>
      </div>
    </div>
  );
};

const BinzoUsers: React.FC<BinzoUsersProps> = ({ testimonials }) => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col gap-y-4">
      {testimonials.map((user) => (
        <BinzoUsersCard key={user.id} user={user} />
      ))}
    </section>
  );
};

const BinzoUsersPage = () => {
  return (
    <section className="h-auto w-full">
      <BinzoUsers testimonials={testimonials} />
    </section>
  );
};

export default BinzoUsersPage;
