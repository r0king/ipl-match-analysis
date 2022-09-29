import React, { Component } from "react";
import Papa from "papaparse";
import csvFile from "./matches.csv";
// import { withRouter } from "react-router";
import { useParams } from "react-router-dom";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

export class Seasons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchs: [],
    };
    this.updateData = this.updateData.bind(this);
  }

  updateData(result) {
    const data = result.data;
    const season = this.props.params.season;
    // let seasonsData = {};
    let matchs = [];
    data.forEach((match) => {
      if (season === match.season) {        
        matchs.push(match);
      }
    });
    console.log(matchs)
    this.setState({
      data: data,
      matchs: matchs,
    });

  }

  componentDidMount() {
    Papa.parse(csvFile, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: this.updateData,
    });
  }

  render() {
    return (
      <div>
        <div className="flex justify-center gap-4 my-2 w-full flex-wrap">
          {/* {this.props} */}asdfasd
        </div>
      </div>
    );
  }
}
export default withParams(Seasons);
