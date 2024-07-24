import { Link } from "react-router-dom";
import { cards } from "../../../../data/cards.data";
import Card from "./Card";
export default function CardsContainer() {
  return (
    <div className="gap-8 text-center grid grid-cols-2 grid-rows-2 px-10 lg:px-0 max-sm:grid-cols-1 max-sm:gap-8 max-sm:grid-rows-3 lg:grid-cols-3 lg:grid-cols-1 lg:max-w-[75%]">
      {cards.data.map((card, index) => (
        <Link to={card.link} key={index}>
          <Card icon={card.icon} title={card.title} desc={card.desc} />
        </Link>
      ))}
      ;
    </div>
  );
}
