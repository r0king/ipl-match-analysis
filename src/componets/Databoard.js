import React, { Component } from "react";
import Papa from "papaparse";
import csvFile from "./matches.csv";
export class Databoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      seasons: [],
      seasonsData: {},
    };
    this.updateData = this.updateData.bind(this);
    // this.data;
  }
  updateData(result) {
    const data = result.data;
    let seasonsData = {};
    let seasons = [];
    data.forEach((match) => {
      if (!(match.season in seasonsData)) {
        seasonsData[match.season] = 0;
        seasons.push(match.season);
      } else {
        seasonsData[match.season] = seasonsData[match.season] + 1;
      }
    });
    console.log(seasonsData);
    this.setState({
      data: data,
      seasonsData: seasonsData,
      seasons: seasons.sort(),
    });
  }

  componentWillMount() {
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
          {this.state.seasons.map((season) => (
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <span className="after:ml-0.8 block text-sm font-medium text-[30vh]">
                {season.substring(2, 4)}
              </span>

              <div className="card-body">
                <h2 className="card-title">{season}</h2>
                <p>number of matches {this.state.seasonsData[season]}</p>
                <div className="card-actions justify-end">
                  <a href={"/IPL/s/" + season}>
                    <button className="btn btn-primary">Open Season</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Databoard;
