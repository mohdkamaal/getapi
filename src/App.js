import React from "react";
import "./App.css";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    persons: [],
    totalBalance: 0,
    selectedIds: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole`
      )
      .then((res) => {
        const persons = res.data;
        let balanceSum = 0;
        res.data.forEach((element) => {
          balanceSum += parseFloat(
            element.balance.substr(1).replaceAll(",", "")
          );
        });
        this.setState({
          persons,
          totalBalance: balanceSum,
          selectedIds: [persons[0].email],
        });
      });
  }

  showData(id) {
    //first checking if selectedIds already have this item, then remove from them to hide detail
    if (this.state.selectedIds.indexOf(id) > -1) {
      let updated = this.state.selectedIds.filter((x) => x != id);
      this.setState({ selectedIds: updated });
    } else {
      let updated = this.state.selectedIds;
      updated.push(id);
      this.setState({ selectedIds: updated });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="card " id="102">
          {this.state.persons.map((person) => (
            <div className="card-body" k={person.id}>
              <p class="card-text">{person.id}</p>
              <h3 className="card-title">
                <a onClick={() => this.showData(person.email)}>
                  {person.first} {person.last}
                </a>
              </h3>
              {this.state.selectedIds.indexOf(person.email) > -1 && (
                <div>
                  Details:
                  <h6 className="card-subtitle mb-2 text-muted">
                    {person.email}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {person.address}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {person.created}
                  </h6>
                  <h4 className="card-subtitle mb-2 text-muted">
                    {person.balance}
                  </h4>
                  <br />
                </div>
              )}
            </div>
          ))}

          <span>Total Balance : {this.state.totalBalance}</span>
        </div>
      </div>
    );
  }
}
