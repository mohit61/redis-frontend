import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

import {
  getValue,
  setValue,
  checkKey,
  delKey,
  setExp,
  rem,
  zadd,
  zrange,
  zrank,
} from "../actions/index.js";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setkey: "",
      setvalue: "",
      getkey: "",
      delkey: "",
      expkey: "",
      exptime: "",
      remkey: "",
      zaddname: "",
      zaddscore: "",
      zaddelement: "",
      zrankname: "",
      zrankelement: "",
      zrange_name: "",
      zrange_start: "",
      zrange_stop: "",
      withscores: false,
    };
  }

  onInputChange(e, type) {
    // console.log(e.target.value);
    if (type === "get") {
      this.setState({
        getkey: e.target.value,
      });
    } else if (type === "exp") {
      this.setState({
        expkey: e.target.value,
      });
    } else if (type === "expTime") {
      this.setState({
        exptime: e.target.value,
      });
    } else if (type === "set") {
      this.setState({
        setkey: e.target.value,
      });
    } else if (type === "setValue") {
      this.setState({
        setvalue: e.target.value,
      });
    } else if (type === "del") {
      this.setState({
        delkey: e.target.value,
      });
    } else if (type === "rem") {
      this.setState({
        remkey: e.target.value,
      });
    } else if (type === "check") {
      this.setState({
        checkkey: e.target.value,
      });
    } else if (type === "zadd") {
      this.setState({
        zaddname: e.target.value,
      });
    } else if (type === "zaddscore") {
      this.setState({
        zaddscore: e.target.value,
      });
    } else if (type === "zaddelement") {
      this.setState({
        zaddelement: e.target.value,
      });
    } else if (type === "zrank") {
      this.setState({
        zrankname: e.target.value,
      });
    } else if (type === "zrankelement") {
      this.setState({
        zrankelement: e.target.value,
      });
    } else if (type === "zrange") {
      this.setState({
        zrange_name: e.target.value,
      });
    } else if (type === "zrange_start") {
      this.setState({
        zrange_start: e.target.value,
      });
    } else if (type === "zrange_stop") {
      this.setState({
        zrange_stop: e.target.value,
      });
    } else if (type === "withscores") {
      this.setState({
        withscores: !this.state.withscores,
      });
    }
  }

  onFormSubmit(event, type) {
    event.preventDefault();
    if (type === "set") {
      let key = this.state.setkey;
      let value = this.state.setvalue;
      this.props.setValue(key, value);
    } else if (type === "get") {
      let key = this.state.getkey;
      this.props.getValue(key);
    } else if (type === "exp") {
      let key = this.state.expkey;
      let time = this.state.exptime;
      this.props.setExp(key, time);
    } else if (type === "del") {
      let key = this.state.delkey;
      this.props.delKey(key);
    } else if (type === "rem") {
      let key = this.state.remkey;
      this.props.rem(key);
    } else if (type === "check") {
      let key = this.state.checkkey;
      this.props.checkKey(key);
    } else if (type === "zadd") {
      let name = this.state.zaddname;
      let score = this.state.zaddscore;
      let element = this.state.zaddelement;
      this.props.zadd(name, score, element);
    } else if (type === "zrank") {
      let name = this.state.zrankname;
      let element = this.state.zrankelement;
      this.props.zrank(name, element);
    } else if (type === "zrange") {
      let name = this.state.zrange_name;
      let start = this.state.zrange_start;
      let stop = this.state.zrange_stop;
      let withscores = this.state.withscores;
      this.props.zrange(name, start, stop, withscores);
    }
  }

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => this.onFormSubmit(e, this.props.type)}
          className="mb-5 center"
        >
          <h2>{this.props.heading}</h2>
          <div>
            <span className="m-4">
              {this.props.keyInputType}{" "}
              <input
                id="getKey"
                required
                onChange={(e) => this.onInputChange(e, this.props.type)}
              />
            </span>
            {this.props.valueType ? (
              <span>
                {this.props.valueText}{" "}
                <input
                  id="getKey"
                  required
                  onChange={(e) =>
                    this.onInputChange(e, this.props.valueInputType)
                  }
                />
              </span>
            ) : null}
            {this.props.value2InputType ? (
              <span className="m-4">
                {this.props.value2Text}{" "}
                <input
                  id="getKey"
                  required
                  onChange={(e) =>
                    this.onInputChange(e, this.props.value2InputType)
                  }
                />
              </span>
            ) : null}
            {this.props.value3InputType ? (
              <span className="m-4">
                {this.props.value3InputType}{" "}
                <input
                  type="checkbox"
                  onClick={(e) =>
                    this.onInputChange(e, this.props.value3InputType)
                  }
                />
              </span>
            ) : null}
            <span className="m-4">
              <Button variant="info" type="submit">
                {this.props.submitText}
              </Button>
            </span>

            {this.props.type === "get" ? (
              <div>
                <strong>Result : </strong>
                {this.props.getResult ? this.props.getResult : null}
              </div>
            ) : null}
            {this.props.type === "set" ? (
              <div>
                <strong>Result : </strong>
                {this.props.setResult ? this.props.setResult : null}
              </div>
            ) : null}
            {this.props.type === "check" ? (
              <div>
                <strong>Result : </strong>
                {this.props.checkResult ? this.props.checkResult : null}
              </div>
            ) : null}
            {this.props.type === "exp" ? (
              <div>
                <strong>Result : </strong>
                {this.props.expResult ? this.props.expResult : null}
              </div>
            ) : null}
            {this.props.type === "rem" ? (
              <div>
                <strong>Result : </strong>
                {this.props.remResult ? this.props.remResult : null}
              </div>
            ) : null}
            {this.props.type === "zadd" ? (
              <div>
                <strong>Result : </strong>
                {this.props.zaddResult ? this.props.zaddResult : null}
              </div>
            ) : null}
            {this.props.type === "zrank" ? (
              <div>
                <strong>Result : </strong>
                {this.props.zrankResult ? this.props.zrankResult : null}
              </div>
            ) : null}
            {this.props.type === "zrange" ? (
              <div>
                <strong>Result : </strong>
                {this.props.zrangeResult ? this.props.zrangeResult : null}
              </div>
            ) : null}
            {this.props.type === "del" ? (
              <div>
                <strong>Result : </strong>
                {this.props.delResult ? this.props.delResult : null}
              </div>
            ) : null}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  setResult: state.setResult,
  getResult: state.getResult,
  expResult: state.expResult,
  delResult: state.delResult,
  remResult: state.remResult,
  zaddResult: state.zaddResult,
  checkResult: state.checkResult,
  zrankResult: state.zrankResult,
  zrangeResult: JSON.stringify(state.zrangeResult),
});

export default connect(mapStateToProps, {
  getValue,
  setValue,
  checkKey,
  delKey,
  setExp,
  rem,
  zadd,
  zrange,
  zrank,
})(Form);
