import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  console.log(step, setStep);

  function handlePrevious() {
    if (step === 1) return;
    setStep(step - 1);
  }
  function handleNext() {
    if (step === 3) return;
    setStep(step + 1);
  }
  if (!isOpen)
    return (
      <div className="buttons" style={{ position: "relative" }}>
        <button
          style={{
            backgroundColor: "#7950f2",
            color: "#fff",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          onClick={() => setIsOpen(true)}
        >
          Render Back the steps
        </button>
      </div>
    );
  return (
    <>
      <button className="close" onClick={() => setIsOpen(false)}>
        &times;
      </button>
      <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>
        <p className="message">
          Step {step}: {messages[step - 1]}
        </p>
        <div className="buttons">
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
