import React from "react";
import PropTypes from "prop-types";
import "../stylesheet/ShowMethodList.css";

class ShowMethodList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showmethod: false,
    };
  }

  changeShowMethod = (did = true) => {
    if (did || !this.props.stopShow) {
      this.props.changeStop();
    }
    this.setState({ showmethod: !this.state.showmethod });
  };

  gotoMethod = (idx) => {
    this.setState({ showmethod: !this.state.showmethod });
    this.props.goMethod(idx);
  };

  methodScript = (method, idx) => {
    return (
      <div className="methodscript" key={idx}>
        <div className="methodCommand">
          {idx}: {method.executingCode.substring(0, 40)}
        </div>
        <button className="goMethod" onClick={() => this.gotoMethod(idx)}>
          Go
        </button>
      </div>
    );
  };

  render() {
    return (
      <div className="showmethod">
        <button
          className="showmethodbutton"
          onClick={() => this.changeShowMethod(false)}
        >
          Show Method
        </button>
        {this.state.showmethod && (
          <div className="coverDom2">
            <div className="methodContent">
              {this.props.methodList.map((method, i) =>
                this.methodScript(method, i)
              )}
              <button className="closeshowdata" onClick={this.changeShowMethod}>
                close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

ShowMethodList.propTypes = {
  goMethod: PropTypes.func,
  methodList: PropTypes.array,
  changeStop: PropTypes.func,
};

export default ShowMethodList;
