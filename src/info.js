import React from "react";

class Info extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const title = this.props.title;
    const showTitle = true;
    if (showTitle) {
      return (
        <div>
          <h1>{title}</h1>
          <p>Manage your stuff</p>
        </div>
      );
    } else {
      return <p>Empty</p>;
    }
  }
}

Info.deafultProps = {
  title: "Default",
}

export default Info;
