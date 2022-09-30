import React, { Component } from "react";
import Papa from "papaparse";
import csvFile from "./matches.csv";
import { useParams } from "react-router-dom";
function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}


export class Seasons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // matchDate:'',
      matchs: [],
      teams: {},
      teamNames: [],
      selectedTeam: "Filter By team",
    };
    this.updateData = this.updateData.bind(this);
  }

  updateData(result) {
    const data = result.data;
    const season = this.props.params.season;
    // let seasonsData = {};
    let matchs = [];
    let teams = {};
    let teamNames = [];
    data.forEach((match) => {
      if (season === match.season) {
        matchs.push(match);

        if (!(match.team1 in teams)) {
          const team = match.team1;
          teams[team] = {};
          teams[team].matchs = [match];
          teamNames.push(team);
        } else {
          const team = match.team1;
          teams[team].matchs.push(match);
        }
        if (!(match.team2 in teams)) {
          const team = match.team2;
          teamNames.push(team);
          teams[team] = {};
          teams[team].matchs = [match];
        } else {
          const team = match.team2;
          teams[team].matchs.push(match);
        }
        if (teams[match.winner].wins === undefined) {
          teams[match.winner].wins = 1;
        } else {
          teams[match.winner].wins += 1;
        }
        if (match.result === 'tie'){

          if (teams[match.winner].teamTies === undefined) {
            teams[match.winner].teamTies = 1;
          } else {
            teams[match.winner].teamTies += 1;
          }        }
      }
    });
    console.log(teams);
    this.setState({
      teams: teams,
      matchs: matchs,
      teamNames: teamNames,
    });
  }
  handleTeam = (e) => {
    this.setState({ selectedTeam: e.target.value });
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.matchDate !== prevState.matchDate) {
      console.log(this.state.matchDate);
    }
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
    let winns;
    let teamData;
    let teamMatchs;
    let teamTies;

    if (this.state.selectedTeam !== "Filter By team") {
      console.log(this.state.teams[this.state.selectedTeam]);
      winns = this.state.teams[this.state.selectedTeam].wins;
      teamMatchs = this.state.teams[this.state.selectedTeam].matchs.length;
      teamTies = this.state.teams[this.state.selectedTeam].teamTies;
      teamData = this.state.teams[this.state.selectedTeam].matchs.map(
        (match) => (
          <tbody key={match.id}>
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
          </tbody>
        )
      );
    }
    return (
      <div>
        <div className="flex justify-center gap-4 my-2 w-full flex-wrap">
          {/* <Bar options={options} data={data}></Bar> */}
          <select
            className="select select-ghost w-full max-w-xs"
            value={this.state.selectedTeam}
            onChange={this.handleTeam}
            defaultValue="Filter By team"
          >
            <option disabled selected>
              Filter By team
            </option>
            {this.state.teamNames.map((team) => (
              <option>{team}</option>
            ))}
          </select>
        </div>
        <div className="stats shadow flex justify-center">
          <div className="stat place-items-center">
            <div className="stat-title">Winns</div>
            <div className="stat-value">{winns ? winns:0}</div>
            {/* <div className="stat-desc">From January 1st to February 1st</div> */}
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Total Matchs</div>
            <div className="stat-value text-secondary">{teamMatchs ? teamMatchs:0}</div>
          </div>
          <div className="stat">
            <div className="stat-title">Ties</div>
            <div className="stat-value">{teamTies ? teamTies:0}</div>
          </div>

          {/* <div className="stat place-items-center">
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div> */}
        </div>
        <div className="mockup-window border">
          <div className=" px-4 py-16 ">
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
              {teamData}
            </table>
          </div>
        </div>
        {/* <input type={"date"} value={this.state.matchDate} onChange={this.handleDate} className="card w-full pl-5 pr-5 py-3 flex flex-row " ></input> */}
      </div>
    );
  }
}
export default withParams(Seasons);
