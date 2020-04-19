import React, { Component } from "react";
import Form from "./form.js";

class Home extends Component {
  render() {
    return (
      <div className="m-4">
        {/*  set key-value */}
        <Form
          heading="Set a Key-Value pair"
          type="set"
          keyType="setKey"
          keyInputType="key"
          valueType="setValue"
          valueText="value"
          valueInputType="setValue"
          submitText="Submit"
        />
        {/* get value */}
        <Form
          heading="Get the value"
          type="get"
          keyInputType="key"
          keyType="getKey"
          valueType=""
          submitText="Submit"
        />
        {/* check key */}
        <Form
          heading="Check if key exists"
          type="check"
          keyInputType="key"
          keyType="checkKey"
          valueType=""
          submitText="Submit"
        />
        {/* delete key-value */}
        <Form
          heading="Delete key if exists"
          type="del"
          keyInputType="key"
          keyType="delKey"
          valueType=""
          submitText="Submit"
        />
        {/* set expiration */}
        <Form
          heading="Set Expiration of Key"
          type="exp"
          keyInputType="key"
          keyType="delKey"
          valueType="time"
          valueText="Time"
          valueInputType="expTime"
          submitText="Submit"
        />
        {/* remaining time */}
        <Form
          heading="Check Remaining Time of Key"
          type="rem"
          keyInputType="key"
          keyType="delKey"
          valueType=""
          submitText="Submit"
        />
        {/* add element in sorted set */}
        <Form
          heading="Add elements in the sorted set"
          type="zadd"
          keyType="delKey"
          valueType="zadd"
          keyInputType="Set name"
          valueText="score"
          value2Text="element"
          valueInputType="zaddscore"
          value2InputType="zaddelement"
          submitText="Submit"
        />
        {/* check the rank */}
        <Form
          heading="Get the rank of the element in sorted set"
          type="zrank"
          keyInputType="Set name"
          keyType="zrankname"
          valueType="true"
          valueText="element"
          valueInputType="zrankelement"
          submitText="Submit"
        />
        {/* element in given range */}
        <Form
          heading="Get all the element in the range"
          type="zrange"
          keyInputType="Set name"
          keyType="zrange_name"
          valueType="true"
          valueText="start index"
          value2Text="end index"
          valueInputType="zrange_start"
          value2InputType="zrange_stop"
          value3InputType="withscores"
          submitText="Submit"
        />
      </div>
    );
  }
}

export default Home;
