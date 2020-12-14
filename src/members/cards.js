import React from "react";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = "";
  }

  render() {
    return (
      <div id="custom" className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{this.props.names}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Email</h6>
          <h6 className="card-subtitle mb-2 text-muted">city</h6>
          <h6 className="card-subtitle mb-2 text-muted">zipcode</h6>

          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>
    );
  }
}

export default Cards;
