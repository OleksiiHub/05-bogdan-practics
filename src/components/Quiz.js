


function Quiz({ question, incorrectAnswers, correctAnswer }) {
    const arrayConcat = incorrectAnswers.concat(correctAnswer)

    return (
        <div className="card" >
            <h4>{question.text}</h4>
            <div className="card_button">
                {
                    arrayConcat.map((e, index) => {
                        return (
                            <button key={index}>{e}</button>
                        )
                    })}
            </div>
        </div >
    )
}

export default Quiz