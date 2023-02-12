import { Card, Trend } from "../components/post";

const search = () => {
  return (
    <div>
      <section className="border-b border-neutral-200 p-1 dark:border-neutral-700">
        <div>
          <span className="block px-4 py-3 text-xl font-bold">
            Trends for you
          </span>
          {[1, 2, 3, 4, 5, 6]?.map((index) => (
            <Trend
              topic="Trent topic"
              text="#TrendText"
              tweets="78214"
              key={index}
            />
          ))}
        </div>
        <div className="px-4 py-3 text-sky-600">
          <span className="break-words font-semibold">Show more</span>
        </div>
      </section>

      <section className="border-b border-neutral-200 p-1 dark:border-neutral-700">
        <div>
          <span className="block px-4 py-3 text-xl font-bold">
            What's happening
          </span>
          {[1, 2]?.map((index) => (
            <Card key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default search;
