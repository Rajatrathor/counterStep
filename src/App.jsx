import "./App.css";
import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const handleNext = () => {
    if (step < 3) setStep((prev) => prev + 1);
  };
  const handlePrevious = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  return (
    <>
      <div>
        <button className="close" onClick={() => setIsOpen(!isOpen)}>
          &times;
        </button>
      </div>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <div className="message">
            <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          </div>

          <div className="buttons">
            <Button
              bgColor={"#7950f2"}
              textColor={"#fff"}
              onClick={handlePrevious}
            >
              👈 Previous
            </Button>
            <Button bgColor={"#7950f2"} textColor={"#fff"} onClick={handleNext}>
              Next👉
            </Button>
            {/* <button
              onClick={handlePrevious}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              previous
            </button> */}
            {/* <button
              onClick={handleNext}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              next
            </button> */}
          </div>
        </div>
      )}
    </>
  );
}
const StepMessage = ({ step, children }) => {
  return (
    <div>
      <p>step {step}:</p>
      {children}
    </div>
  );
};
const Button = ({ bgColor, textColor, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
};

export default App;
