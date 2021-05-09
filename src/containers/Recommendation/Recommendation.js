import { useState } from "react";
import ConditionalRendering from "../ConditionalRendering/ConditionalRendering";
import classes from "./Recommendation.module.scss"

const Buttons = [
  {
    title: "Просмотренные",
  },
  {
    title: "Выбор редакции",
  },
  {
    title: "Сниженные цены",
  },
];
const Recommendation = ({
    products
  }) => {
    const [page, setPage] = useState("Просмотренные");
    return (
      <div className={classes.Recommendation}>
        <div className={classes.Container}>
          <div className={classes.RecommendationAppbar}>
            {Buttons.map((item) => (
              <button
              key={item.title}
                className={`${classes.RecommendationBtn} ${
                  page === item.title ? "ActivePage" : ""
                }`}
                value={item.title}
                onClick={(e) => setPage(e.target.value)}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className={classes.Content}>
            <ConditionalRendering products={products} page={page} />
          </div>
        </div>
      </div>
    );
}

export default Recommendation
