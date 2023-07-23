import peoples from "./utils/PEOPLE_DATA"
import People from "../components/People"

function ArrayData() {
    return (
        <>
            <h1>Длинна массива: {peoples.length}</h1>
            <div className="cards">
                {peoples.map((people) => {                    //перебор массива
                    return <People key={people.id} {...people} />
                })}
            </div>
        </>

    )
}

export default ArrayData


