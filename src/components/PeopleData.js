import peoples from "./utils/PEOPLE_DATA"
import People from "./People"

function ArrayData() {
    return (
        <>
            <h1>Элементов в массиве: {peoples.length}</h1>
            <div className="cards">
                {peoples.map((people) => {                    //перебор массива
                    return <People key={people.id} {...people} />
                })}
            </div>
        </>

    )
}

export default ArrayData


