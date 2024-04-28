import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="md:container mx-auto mt-10 md:mt-16 lg:mt-32 mb-10">
      <div className="">
        <h1 className="pb-6 text-center text-2xl md:text-4xl lg:text-5xl font-light">
          Adventure Beyond <span className="font-medium md:font-bold text-green-800">
            Borders
          </span>
        </h1>
        <p className="lg:pb-4 mx-auto w-3/4 md:w-1/2 text-center opacity-70">
          Discover hidden gems and ignite your wanderlust. Explore, experience,
          and discover with our action-packed tours.
        </p>
      </div>

      <div className="pt-12 md:mt-8 md:pt-0 text-center md:text-left mx-auto md:w-1/2 lg:w-3/4 md:border rounded-lg p-4 space-y-4 shadow-xl">
        <h1>
          We provide all types of holiday packages: city breaks, beach trips,
          luxury getaways, all-inclusive resorts, and tours for travelers of all
          ages and package holidays. First of all, you have to choose where you
          want to go and then compare our cheap International tour packages from
          bangladesh with other Bangladesh travel agency package tours to see
          which offers suit you best. Whether you would like an extended vacation or just need to get away for a couple of days, you are sure to find the trip that is right for you in <Link to='/allTouristSpots' className="text-green-800 font-semibold">Tourify</Link>
        </h1>
        <h1 className="pt-4 text-md md:text-xl lg:text-2xl">
        Types of Holiday Deals
        </h1>
        <p>We create and update great new offers for our users every day in our tour operator. Go through our site to compare types of holiday packages.</p>
        <ul className="list-disc px-4">
            <li>All-inclusive: All the meals and drinks you want is available for you on-site at your accommodation</li>
            <li>Beach holidays: When is comes to a beach, there is never a bad time for a beach holiday! Relax in the sun or try out scuba diving, or surfing.</li>
            <li>Luxury getaways: Put your comfort as your first priority and submerge yourself in full-on relaxing time with a luxury getaway with our cheap holiday packages .</li>
            <li>Family-friendly: Fun for all is what we want so we designed our trips, which both adults and children can enjoy.</li>
            <li>Multi-stop trips: See multiple and different places and famous monuments in just one trip.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
