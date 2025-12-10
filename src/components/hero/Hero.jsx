import heroImg from "../../assets/grocery.png";
import Button from "../button/Button";

function Hero() {
  return (
    <section>
      <div className="max-w-[1400px] m-auto px-10 flex md:flex-row flex-col items-center pt-25 min-h-screen">
        {/* content side */}
        <div className="flex-1">
          <span className="bg-orange-200 font-semibold text-orange-400 py-2 px-5 rounded-full">
            Export Best Quality...
          </span>
          <h1 className="md:text-7xl/19 text-5xl/15 my-7 font-bold tracking-wider">
            Tasty Oraganic <span className="text-orange-500">Fruits</span> &{" "}
            <span className="text-orange-500">Veggies</span> In Your City.
          </h1>
          <p className="text-zinc-500 md:text-xl text-md mb-10 font-semibold">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>
          <Button content="Shop Now" />
        </div>
        {/* image side */}
        <div className="flex-1 md:pt-0 pt-10">
          <img src={heroImg} alt="hero image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
