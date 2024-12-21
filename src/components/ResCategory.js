import ItemList from "./ItemList";

const Rescategory = ({data}) => {

    return <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto ">
        <div className=" flex justify-between">
            <span className="font-bold">{data.title} ({data.itemCards.length}) </span>
            <span> icon </span>
        </div>
        <div>
            <ItemList items = {data?.itemCards}/>
        </div>
    </div>
};

export default Rescategory;