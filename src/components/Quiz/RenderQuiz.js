import questions from "../utils/QUESTIONS_DATA"
import Quiz from './Quiz'

function RenderQuiz() {
    return (
        <div className="cards">
            {questions.map((e) => {     
                return <Quiz key={e.id} {...e} />
            })}
        </div>
    )
}
export default RenderQuiz