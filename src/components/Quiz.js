function Quiz({ correctAnswer, question, incorrectAnswers }) {
    return (
        <div className="card" >
            <h4>{question.text}</h4>
            <div className="card_button">
                <button>{correctAnswer}</button>
                {
                    incorrectAnswers.map((e) => {
                        return <button>{e}</button>
                    })
                }
            </div>

        </div >
    )
}

export default Quiz