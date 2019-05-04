import React, { Component } from "react";
import Input from "../components/Input";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      seoTitle: "TTRRT!!!"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { seoTitle } = this.state;
    return (
      <form id="article-form">
        <Input
          text="SEO title"
          label="seo_title"
          type="text"
          id="seoTitle"
          value={seoTitle}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}

export default FormContainer;
