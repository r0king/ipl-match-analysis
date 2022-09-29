import React, { Component } from "react";
import Papa from "papaparse";
import csvFile from "./matches.csv";


export class TableBoard extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
    this.updateData = this.updateData.bind(this);
    // this.data;
  }
  updateData(result) {
    const data = result.data;
    console.log(data);
    this.setState({ data: data });
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
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Season</th>
                <th>City</th>
                <th>Date</th>
                <th>Team A</th>
                <th>Team B</th>
                <th>Winner</th>
                <th>Result</th>
                <th>Toss winner</th>
                <th>Toss decicion</th>
                <th>DL Applied</th>
                <th>Win by Runs</th>
                <th>win by wickets</th>
                <th>player of match</th>
                <th>venue</th>
                <th>umpire1</th>
                <th>umpire2</th>
                <th>umpire3</th>
              </tr>
            </thead>
            <tbody>
              { this.state.data.map(match => 
                <tr key={match.id}>
                <th>{match.season}</th>
                <th>{match.city}</th>
                <th>{match.date}</th>
                <th>{match.team1}</th>
                <th>{match.team2}</th>
                <th>{match.winner}</th>
                <th>{match.result}</th>
                <th>{match.toss_winner}</th>
                <th>{match.toss_decision}</th>
                <th>{match.dl_applied}</th>
                <th>{match.win_by_runs}</th>
                <th>{match.win_by_wickets}</th>
                <th>{match.player_of_match}</th>
                <th>{match.venue}</th>
                <th>{match.umpire1}</th>
                <th>{match.umpire2}</th>
                <th>{match.umpire3}</th>
              </tr>
              )
              }
            </tbody>
            <tfoot>
              <tr>
              <th>Season</th>
                <th>City</th>
                <th>Date</th>
                <th>Team A</th>
                <th>Team B</th>
                <th>Winner</th>
                <th>Result</th>
                <th>Toss winner</th>
                <th>Toss decicion</th>
                <th>DL Applied</th>
                <th>Win by Runs</th>
                <th>win by wickets</th>
                <th>player of match</th>
                <th>venue</th>
                <th>umpire1</th>
                <th>umpire2</th>
                <th>umpire3</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

export default TableBoard;
