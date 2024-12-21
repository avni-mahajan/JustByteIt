import { LOGO_CDN } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div>
                <span>{item?.card?.info?.name}</span>
                {/* Conditional rendering for price and finalprice */}
                <div>
                  {item?.card?.info?.finalPrice ? (
                    <>
                      <span className="line-through text-gray-500">
                        {item.card.info.price / 100}
                      </span>
                      <span className="ml-2">
                        {item.card.info.price
                          ? item.card.info.price / 100
                          : item.card.info.defaultPrice / 100}
                      </span>
                    </>
                  ) : (
                    <span>
                      {item.card.info.price
                        ? item.card.info.price / 100
                        : item.card.info.defaultPrice / 100}
                    </span>
                  )}
                </div>
                <p className="text-xs">{item.card.info.description}</p>
              </div>
            </div>

            <div className="w-3/12">
            <img src={LOGO_CDN + item.card.info.imageId} className="w-full" />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
