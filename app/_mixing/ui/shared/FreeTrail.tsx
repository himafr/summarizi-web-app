import PrimaryButton from "./PrimaryButton"

function FreeTrail() {
    return (
           <section className="my-[10vh] relative w-full h-70 md:h-60  rounded-xl overflow-hidden border border-border">
        <img
          src="/images/movies.webp"
          alt="Mofie device support"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r  from-black to-primary/50  flex flex-col justify-center px-2 md:px-12">
          <div className="flex flex-col justify-between md:pr-12  md:flex-row gap-20 items-center  md:gap-8 ">
            <div>
              <p className="text-xl md:text-4xl font-bold ">
                Start your free trial today!
              </p>
              <p className="text-subtitle mt-2 text-[10px]">
                This is a clear and concise call to action that encourages users
                to sign up for a free trial of Mofie.
              </p>
            </div>
            <div>
              <PrimaryButton
                title="Start a Free Trail"
                className="text-[10px] w-27 md:text-base md:w-full"
              />
            </div>
          </div>
        </div>
      </section>
    )
}

export default FreeTrail
