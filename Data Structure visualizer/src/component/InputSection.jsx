import React, { Component } from "react";
import PropTypes from "prop-types";
import InputCode from "./InputCode";
import InputData from "./InputData";
import SampleCode from "./SampleCode";
import "tailwindcss/tailwind.css";

class InputSection extends Component {
  constructor() {
    super();
    this.state = {
      submit: false,
      showCaution: false,
      sampleCode: ``,
      sampleData: ``,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.sampleCode !== ``) {
      return true;
    }
    const { submit, showCaution } = this.state;
    return (
      (!submit && nextState.submit) || showCaution !== nextState.showCaution
    );
  }

  componentDidUpdate() {
    if (this.state.submit) {
      this.setState({
        submit: false,
        sampleCode: ``,
        sampleData: ``,
      });
    } else {
      this.setState({
        sampleCode: ``,
        sampleData: ``,
      });
    }
  }

  changeShow = () => {
    console.log("click");
    this.setState({ showCaution: !this.state.showCaution });
  };

  render() {
    return (
      <section className="w-2/5 h-11/12 float-right">
        <div className="w-[23%] h-[4.2%] m-0 float-left mt-[1.5%] relative text-center">
          Write Code
        </div>
        <button className="w-[22px] h-[22px] p-0 float-left m-0 mt-[1.5%] relative border-none cursor-pointer bg-cover outline-none">
          <img
            className="w-[22px] h-[22px] block float-left"
            src={require("../public/caution.png")}
            alt="caution"
          />
        </button>
        <button
          className="h-[4.2%] mt-[1%] float-right text-center border-none bg-black text-white cursor-pointer"
          onClick={(input) => this.setState({ submit: true })}
        >
          Submit
        </button>
        <SampleCode
          changeSample={(code, data) =>
            this.setState({ sampleCode: code, sampleData: data })
          }
        />
        <InputCode
          submit={this.state.submit}
          getCode={this.props.getCode}
          sampleCode={this.state.sampleCode}
        />
        <div className="w-2/5 h-[4.2%] m-0 mt-[3%] float-left relative text-center">
          Input Data JSON
        </div>
        <InputData
          submit={this.state.submit}
          getData={this.props.getData}
          sampleData={this.state.sampleData}
        />
        {this.state.showCaution ? (
          <div className="w-[1000%] h-[1000%] top-0 left-0 right-0 bottom-0 fixed bg-[rgba(0,0,0,0.5)] z-[1002]">
            <div className="w-[400px] h-[300px] top-[25%] left-[25%] right-[25%] bottom-[25%] fixed bg-white z-[1003] border-black border-2 border-double">
              <p className="m-[5px]">
                1. Declare variables at the top of the scope block.
              </p>
              <p className="m-[5px]">
                2. Semicolon is needed at the end of the line
              </p>
              <p className="m-[5px]">3. Method Chaining does not animate</p>
              <p className="m-[5px]">
                4. The method in parameter does not animate
              </p>
              <p className="m-[5px]">5. Paste the '.' and name</p>
              <p className="m-[5px]">
                6. Make toString() function to object data. This shows you 6
                characters
              </p>
              <button
                className="h-[10%] mt-[1%] float-right text-center border-none bg-black text-white cursor-pointer"
                onClick={this.changeShow}
              >
                Close
              </button>
            </div>
          </div>
        ) : null}
      </section>
    );
  }
}

InputSection.propTypes = {
  getCode: PropTypes.func,
  getData: PropTypes.func,
  inputdata: PropTypes.object,
};

InputSection.defaultProps = {
  getCode: (f) => f,
  getData: (f) => f,
};

export default InputSection;
