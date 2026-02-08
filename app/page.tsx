// import HeaderComponent from "./_mixing/ui/shared/HeaderComponent";
import PrimaryButton from "./_mixing/ui/shared/PrimaryButton";
import MovieGenreList from "./_mixing/feature/movies/MovieGenreList";
import ListDevices from "./_mixing/ui/homePage/ListDevices";
import ListQuestionComponent from "./_mixing/ui/homePage/ListQuestionComponent";
import ListPlanComponent from "./components/ListPlanComponent";
import FooterComponent from "./_mixing/ui/shared/FooterComponent";

export default function Home() {
  return (
    <main className="w-full h-screen bg-black overflow-hidden">
     <div className="px-2 md:px-20 text-[14px] md:text-[16px]">

      <div className="w-full h-screen">
        <img
          src="images/movies.jpeg"
          className="absolute inset-0 w-screen h-full object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-black/50 to-black/85   px-2 md:px-12">
          {/* <HeaderComponent openNav={setNavOpen} open={navOpen} /> */}
          <div className="h-[65vh] w-full flex justify-center items-center">
            <img
              src="svg/logoTrans.svg"
              width={550}
              className="mt-auto"
              alt=""
            />
          </div>
          
          <section className="mt-[10vh] flex flex-col justify-center items-center text-center">
        <p className="text-3xl md:text-5xl font-bold mb-5">
          The Best Streaming Experience
        </p>
        <p className="text-subtitle mt-2 mb-10 md:hidden">
          Mofie is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. 
        </p>
        <p className="text-subtitle mt-2 mb-10 hidden md:block">
          Mofie is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With Mofie, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.
        </p>
<PrimaryButton className="items-center " icon={<img  className="my-3 " width={24} src="svg/play.svg" alt="sh" />} title="Start Watching Now" />
      </section>
        </div>
      </div>


      <section className="mt-[30vh]" id="categories">
        <p className="text-2xl md:text-4xl font-bold">
          Explore our wide variety of categories
        </p>
        <p className="text-subtitle mt-2">
          Whether you're looking for a comedy to make you laugh, a drama to make
          you think, or a documentary to learn something new
        </p>
        {/* <MovieGenreList /> */}
      </section>

      <section className="mt-[10vh]" id="devices">
        <p className="text-2xl md:text-4xl font-bold">
          We Provide you streaming experience across various devices.
        </p>
        <p className="text-subtitle mt-2">
          With mofie, you can enjoy your favorite movies and TV shows anytime,
          anywhere. Our platform is designed to be compatible with a wide range
          of devices, ensuring that you never miss a moment of entertainment.
        </p>
        <ListDevices />
      </section>

      <section className="mt-[10vh]" id="faq">
        <p className="text-2xl md:text-4xl font-bold">
          Frequently Asked Questions
        </p>
        <p className="text-subtitle mt-2">
          Got questions? We've got answers! Check out our FAQ section to find
          answers to the most common questions about Mofie.
        </p>
        <ListQuestionComponent />
      </section>

      <section className="mt-[10vh]" id="pricing">
        <p className="text-2xl md:text-4xl font-bold">
          Choose the plan that's right for you
        </p>
        <p className="text-subtitle mt-2">
          Join mofie and select from our flexible subscription options tailored
          to suit your viewing preferences. Get ready for non-stop
          entertainment!
        </p>
        <ListPlanComponent />
      </section>
      

<FooterComponent className="-mx-2 md:-mx-20 px-2 md:px-20" />
    </div>

    </main>
  );
}
