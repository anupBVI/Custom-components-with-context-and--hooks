
import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      id: "eoioqepqweoqwpo",
      label: "Accordion 1",
      content:
        "111111 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla dolores sunt impedit cumque vitae laborum nisi unde sed fuga dolor enim incidunt quisquam veritatis quis dolorem, autem cum. Odit, accusantium? ",
    },
    {
      id: "asokakqeokqoeqw",
      label: "Accordion 2",
      content:
        "2222222 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla dolores sunt impedit cumque vitae laborum nisi unde sed fuga dolor enim incidunt quisquam veritatis quis dolorem, autem cum. Odit, accusantium? ",
    },
    {
      id: "adjfajeoiqo",
      label: "Accordion 3",
      content:
        "333333 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla dolores sunt impedit cumque vitae laborum nisi unde sed fuga dolor enim incidunt quisquam veritatis quis dolorem, autem cum. Odit, accusantium? ",
    },
  ];
  return <Accordion items={items} />;
};

export default AccordionPage;
