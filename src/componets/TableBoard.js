import React, { Component } from "react";
import Papa from "papaparse";
import csvFile from "./matches.csv";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

let labels = [
  "Royal Challengers Bangalore",
  "Delhi Daredevils",
  "Sunrisers Hyderabad",
];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => [1, 2, 3, 4, 5, 6, -7]),
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => [1, 2, 3, 4, 5, -46, 7]),
      backgroundColor: "rgb(75, 192, 192)",
    },
    {
      label: "Dataset 3",
      data: labels.map(() => [1, 2, 3, 4, 5, 6, -45457]),
      backgroundColor: "rgb(53, 162, 235)",
    },
  ],
};

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
        <Bar options={options} data={data}></Bar>
      </div>
    );
  }
}

export default TableBoard;
