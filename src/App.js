import { useEffect } from "react";
import "./styles.css";

export default function App() {
  //  get box 10*10
  const obj = {
    worship: 2,
    car: 3,
    shoot: 4
  };
  let boxes = [];
  const generateBox = () => {
    for (let i = 0; i < 10; i++) {
      boxes.push([]);
      for (let j = 0; j < 10; j++) {
        boxes[i].push(0);
      }
    }
    console.log("boxes");

    console.log(boxes);
  };

  const showBoxes = () => {
    const id = document.getElementById("boxes_battle");
    let html = "";
    boxes.forEach((row, rN) => {
      html += "<div class='row'>";
      row.forEach((ceil) => {
        if (ceil) {
          html += `<div class="box bg"></div>`;
        } else {
          html += '<div class="box"></div>';
        }
      });
      html += "</div>";
    });

    id.innerHTML = html;
  };

  const addShip = (type, row, col, horizontal) => {
    // -----
    type = obj[type];
    if (!horizontal) {
      for (let i = col; i < col + type && i < 10; i++) {
        let start = boxes[row][i];
        if (start === 1) {
          return false;
        } else {
          boxes[row][i] = 1;
        }
      }
    } else {
      for (let i = row; i < row + type && i < 10; i++) {
        let start = boxes[i][col];
        if (start === 1) {
          return false;
        } else {
          boxes[i][col] = 1;
        }
      }
    }
    return true;
  };

  const inite = () => {
    generateBox();
    addShip("shoot", 1, 2, false);
    //  addShip('shoot', 0, 1, true);
    //  addShip('shoot', 7, 1, true);
    // addShip('shoot', 6, 1, true);
    // addShip('shoot', 5, 1, true);
    // addShip('shoot', 4, 1, true);
    // addShip('shoot', 3, 1, true);
    // addShip('shoot', 2, 1, true);
    // addShip('shoot', 1, 1, true);

    showBoxes();
  };

  useEffect(() => {
    inite();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div id="boxes_battle"></div>
    </div>
  );
}
