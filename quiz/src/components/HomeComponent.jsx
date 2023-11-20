import { Component } from "react";
import "../styles/quizstyle.css"
import QuizComponent from "./QuizComponent";


class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isQuizStarted: false,
    };
  }

  handlePlay = () => {
    this.setState({
      isQuizStarted: true,
    });
  };

  render() {
    return (
      <div
      className="homepage"
      >
        <h2>Quiz App</h2>
          {
            this.state.isQuizStarted ? (
                <QuizComponent/>
            ):(
                <button onClick={this.handlePlay}>Play</button>
            )
          }
      </div>
    );
  }
}

export default HomeComponent;
