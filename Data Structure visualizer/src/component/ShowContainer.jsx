import React, { Component } from "react";
import PropTypes from "prop-types";
import "tailwindcss/tailwind.css"; // Assuming you have Tailwind CSS installed and imported

const NextComp = () => {
  return (
    <svg className="w-full h-full">
      <text x={20} y={50} width={200} height={40}>
        End this Method
      </text>
    </svg>
  );
};

const CodeComp = ({ executing, step }) => {
  return (
    <div className="codeText">
      {step >= 0 ? `${step.toString()}. ${executing}` : null}
    </div>
  );
};

const EmptyComp = () => {
  return <div />;
};

let complexCollections = [
  "PriorityQueue",
  "SetTree",
  "MapTree",
  "MultiSetTree",
  "MultiMapTree",
];

class ShowContainer extends Component {
  constructor() {
    super();
    this.state = {
      Visualize: EmptyComp,
      Executing: CodeComp,
      Stop: false,
    };
    this.showstep = 0;
  }

  setVisualize = (props) => {
    const objectName = props.containerState.object.classname;
    const method = props.containerState.method;
    this.params = props.containerState.params;

    this.setState({ Visualize: EmptyComp, Executing: EmptyComp, Stop: false });

    setTimeout(() => {
      if (objectName === "List") {
        switch (method) {
          case "pushBack":
            this.setState({
              Visualize: std.List.PushBack,
              Executing: CodeComp,
              Stop: false,
            });
            break;
          case "popBack":
            this.setState({
              Visualize: std.List.PopBack,
              Executing: CodeComp,
              Stop: false,
            });
            break;
          case "pushFront":
            this.setState({
              Visualize: std.List.PushFront,
              Executing: CodeComp,
              Stop: false,
            });
            break;
          case "popFront":
            this.setState({
              Visualize: std.List.PopFront,
              Executing: CodeComp,
              Stop: false,
            });
            break;
          default:
            this.setState({
              Visualize: EmptyComp,
              Executing: CodeComp,
              Stop: false,
            });
        }
      } else if (objectName === "Stack") {
        switch (method) {
          case "push":
            this.setState({
              Visualize: std.Stack.Push,
              Executing: CodeComp,
              Stop: false,
            });
            break;
          case "pop":
            this.setState({
              Visualize: std.Stack.Pop,
              Executing: CodeComp,
              Stop: false,
            });
            break;
          default:
            this.setState({
              Visualize: EmptyComp,
              Executing: CodeComp,
              Stop: false,
            });
        }
      } else if (objectName === "Queue") {
        switch (method) {
          case "push":
            this.setState({
              Visualize: std.Queue.Push,
              Executing: CodeComp,
              Stop: false,
            });
            break;
          case "pop":
            this.setState({
              Visualize: std.Queue.Pop,
              Executing: CodeComp,
              Stop: false,
            });
            break;
          default:
            this.setState({
              Visualize: EmptyComp,
              Executing: CodeComp,
              Stop: false,
            });
        }
      } else if (complexCollections.includes(objectName)) {
        switch (objectName) {
          case "PriorityQueue":
            switch (method) {
              case "push":
                this.setState({
                  Visualize: std.PriorityQueue.Push,
                  Executing: CodeComp,
                  Stop: false,
                });
                break;
              case "pop":
                this.setState({
                  Visualize: std.PriorityQueue.Pop,
                  Executing: CodeComp,
                  Stop: false,
                });
                break;
              default:
                this.setState({
                  Visualize: EmptyComp,
                  Executing: CodeComp,
                  Stop: false,
                });
            }
            break;
          case "SetTree":
          case "MapTree":
          case "MultiSetTree":
          case "MultiMapTree":
            this.setState({
              Visualize: std.RedBlackTree.Insert,
              Executing: CodeComp,
              Stop: false,
            });
            break;
          default:
            this.setState({
              Visualize: EmptyComp,
              Executing: CodeComp,
              Stop: false,
            });
        }
      }
    }, 10);
  };

  shouldComponentUpdate(nextProps, nextState) {
    // Check for changes in props and state to determine if rerendering is necessary
    // Logic omitted for brevity, you can add it based on your specific requirements
    return true;
  }

  componentDidUpdate() {
    this.showstep += 1; // Increment showstep on component update
  }

  // Method to initialize visualization
  initiate = (time) => {
    const submitStack = this.props.submitStack;
    this.sto1 = setTimeout(() => {
      this.setState({
        Visualize: EmptyComp,
        Executing: EmptyComp,
        Stop: false,
      });
      this.sto2 = setTimeout(() => this.props.nextStep(submitStack), 10);
    }, time);
  };

  render() {
    return (
      <div className="show-container">
        <div className="text-show2">DataStructure</div>
        <div className="slidercontainer">
          <div className="slidername">speed bar</div>
          <input
            type="range"
            min={20}
            max={250}
            value={this.props.duration}
            onChange={(e) => this.props.changeDuration(e.target.value)}
            className="slider"
          />
        </div>
        <div className="text-show3">Executing: </div>
        <this.state.Executing
          executing={this.props.executingCode}
          step={this.props.step}
        />
        <div className="drawing">
          <this.state.Visualize
            duration={Number(this.props.duration) / 100}
            stop={this.state.Stop}
            initiate={this.initiate}
            object={this.props.containerState.object}
            params={this.params}
          />
        </div>
      </div>
    );
  }
}

ShowContainer.propTypes = {
  stopShow: PropTypes.bool,
  step: PropTypes.number,
  submitStack: PropTypes.number,
  nextStep: PropTypes.func,
  containerState: PropTypes.object,
  executingCode: PropTypes.string,
  duration: PropTypes.string,
  changeDuration: PropTypes.func,
};

ShowContainer.defaultProps = {
  stopShow: false,
  step: 0,
  submitStack: 0,
  nextStep: (f) => f,
  containerState: {},
  executingCode: "",
  duration: "1",
  changeDuration: (f) => f,
};

export default ShowContainer;
