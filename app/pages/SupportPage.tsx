import { useState } from "react";
import HeaderComponent from "../ui/shared/HeaderComponent";
import ListQuestionComponent from "../ui/homePage/ListQuestionComponent";
import ContactForm from "../ui/shared/ContactForm";
import FreeTrail from "../ui/shared/FreeTrail";
import FooterComponent from "../ui/shared/FooterComponent";

function SupportPage() {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <div className="px-2 md:px-20 text-[14px] md:text-[16px]">
      <HeaderComponent openNav={setNavOpen} open={navOpen} />


        <section className="mt-[10vh]" id="contact">
            <div className="grid gap-12 grid-rows-1  md:grid-cols-3 ">
<div  >

        <p className="text-2xl md:text-4xl font-bold">
          Frequently Asked Questions
        </p>
        <p className="text-subtitle mt-2 mb-10">
          Got questions? We've got answers! Check out our FAQ section to find
          answers to the most common questions about Mofie.
        </p>
        <img src="/images/movies.jpeg" className="w-full object-cover rounded-2xl"  />
</div>
        <ContactForm className="md:col-span-2" />

            </div>
      </section>

        <section className="mt-[10vh]">
        <p className="text-2xl md:text-4xl font-bold">
          Frequently Asked Questions
        </p>
        <p className="text-subtitle mt-2">
          Got questions? We've got answers! Check out our FAQ section to find
          answers to the most common questions about Mofie.
        </p>
        <ListQuestionComponent />
      </section>

   <FreeTrail />
<FooterComponent className="-mx-2 md:-mx-20 px-2 md:px-20" />

    </div>
  );
}



export default SupportPage
