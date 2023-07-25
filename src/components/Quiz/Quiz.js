function Quiz({ question, incorrectAnswers, correctAnswer }) {

    function Answers() {
        const arrayConcat = incorrectAnswers.concat(correctAnswer)
        const arrayRandom = arrayConcat.sort(() => Math.floor(Math.random() - 0.5));
        return arrayRandom
    }

    return (
        <div className="card" >
            <h4>{question.text}</h4>
            <div className="card_button">
                {
                    Answers().map((e) => {
                        return (
                            <button key={e}>{e}</button>
                        )
                    })}
            </div>
        </div >
    )
}

export default Quiz