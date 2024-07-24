import ReactDOM from "react-dom";

import App from "./App";

const yogaPoses = [
  "Tadasana",
  "Vrikshasana",
  "Adho Mukho Svanasana",
  "Trikonasana",
  "Kursiasana",
  "Naukasana",
  "Bhujangasana",
  "Paschimottanasana",
  "Balasana",
  "Sukhasna",
  "Bandha Sarvangasana",
  "Virabhadrasana I",
  "Chaturanga",
  "Utkatasana",
  "Bakasana",
  "Savasana",
];

ReactDOM.render(<App data={yogaPoses} />, document.getElementById("root"));
