import { QuestionTypes } from "../../../_@types/types"
import QuestionCard from "./QuestionCard"


function ListQuestionComponent() {
    const _questions:QuestionTypes[]=[ {
        id:1,
        "q": "What is Mofie?",
        "answer": "Mofie is an on-demand streaming platform that lets you watch movies, shows, and other entertainment anytime, anywhere."
    },
    {
        id:2,
        "q": "How much does Mofie cost?",
        "answer": "Mofie offers various subscription plans at different price points depending on your region and selected features."
    },
    {
        id:3,
        "q": "What content is available on Mofie?",
        "answer": "Mofie offers a wide selection of content including movies, series, documentaries, and more across different genres."
    },
    {
        id:4,
        "q": "How can I watch Mofie?",
        "answer": "You can stream Mofie on multiple devices like smartphones, tablets, smart TVs, and web browsers."
    },
    {
        id:5,
        "q": "How do I sign up for Mofie?",
        "answer": "To get started with Mofie, visit the official website or download the app and follow the sign-up instructions."
    },
    {
        id:6,
        "q": "What is the Mofie free trial?",
        "answer": "New users may be eligible for a free trial that lets you explore Mofie with full access for a limited time."
    },
    {
        id:7,
        "q": "How do I contact Mofie customer support?",
        "answer": "Support is available through the help center on the Mofie website or app, including chat and email options."
    },
    {
        id:8,
      "q": "What are the Mofie payment methods?",
      "answer": "Mofie accepts major credit/debit cards and digital payment services, depending on your location."
    }]

    return (
     <div className="grid  md:grid-flow-col gap-2 xl:grid-cols-2 md:grid-rows-4 lg:grid-cols-2  tv:flex tv:flex-wrap   mt-10">
         {_questions.map(el=><QuestionCard q={el.q} answer={el.answer} id={el.id} key={el.id} />)}

        </div>
    )
}

export default ListQuestionComponent
