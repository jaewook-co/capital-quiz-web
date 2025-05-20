import { useState } from 'react'

const countries = [
  { country: "부룬디", capital: "기테가", flag: "🇧🇮" },
  { country: "프랑스", capital: "파리", flag: "🇫🇷" },
  { country: "레소토", capital: "마세루", flag: "🇱🇸" }
]

function App() {
  const [current, setCurrent] = useState(0)
  const [answer, setAnswer] = useState("")
  const [result, setResult] = useState(null)

  const checkAnswer = () => {
    const isCorrect = answer.trim().toLowerCase() === countries[current].capital.toLowerCase()
    setResult(isCorrect)
  }

  const nextQuestion = () => {
    setCurrent((prev) => (prev + 1) % countries.length)
    setAnswer("")
    setResult(null)
  }

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h1>이 나라 수도도 모르세요?</h1>
      <h2>{countries[current].flag} {countries[current].country}</h2>
      <input
        value={answer}
        onChange={e => setAnswer(e.target.value)}
        placeholder="수도를 입력하세요"
        style={{ fontSize: 18, padding: 6 }}
      />
      <button onClick={checkAnswer} style={{ marginLeft: 10, fontSize: 16 }}>
        제출
      </button>
      {result !== null && (
        <div style={{ marginTop: 20 }}>
          {result ? "정답입니다! 🎉" : "틀렸습니다! 🍻"}
          <br />
          <button onClick={nextQuestion} style={{ marginTop: 10 }}>
            다음 문제 →
          </button>
        </div>
      )}
    </div>
  )
}

export default App
