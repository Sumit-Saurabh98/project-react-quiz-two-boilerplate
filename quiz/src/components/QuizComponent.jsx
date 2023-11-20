import { Component } from "react";
import "../styles/quizstyle.css";
import quizData from "../resources/resources";

class QuizComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 0,
    };
  }

  handleNextClick = () => {
    this.setState((prevState) => ({
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
    }));
  };

  handlePreviousClick = () => {
    this.setState((prevState) => ({
      currentQuestionIndex: prevState.currentQuestionIndex - 1,
    }));
  };

  handleQuit = () => {
    confirm("Are you sure you want to quit")
  }

  render() {
    const { currentQuestionIndex } = this.state;
    const currentQuestion = quizData[currentQuestionIndex];

    return (
      <div className="parent-div">
        <div className="main-container">
          <div className="question-container">
            <div className="question-number">{currentQuestionIndex + 1} of {quizData.length}</div>
            <h3>Question</h3>
            <p>{currentQuestion.question}</p>
          </div>
          <div className="option-container">
            <div className="option-parent">
              <div className="option">{currentQuestion.optionA}</div>
              <div className="option">{currentQuestion.optionB}</div>
            </div>
            <div className="option-parent">
              <div className="option">{currentQuestion.optionC}</div>
              <div className="option">{currentQuestion.optionD}</div>
            </div>
          </div>
          <div className="button-container">
            <button className="previous" onClick={this.handlePreviousClick} disabled={currentQuestionIndex === 0}>
              Previous
            </button>
            <button className="next" onClick={this.handleNextClick} disabled={currentQuestionIndex === quizData.length - 1}>
              Next
            </button>
            <button className="quit" onClick={this.handleQuit}>Quit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizComponent;
