
const mainDiv = document.createElement("div");
mainDiv.setAttribute("style", "border-radius: 10px;margin: 20px auto; border: 4px black solid; background-color: gray;height: 400px; width: 300px;");
document.body.appendChild(mainDiv);
const displayDiv = document.createElement("div");
displayDiv.setAttribute("style", "font-family: monospace;text-align: center; font-size: 25px;border-radius: 10px;border: 4px solid black;height: 12%; width: 80%; background-color: white;margin: 20px auto;");
mainDiv.appendChild(displayDiv)

const buttonBox = document.createElement("div");
mainDiv.appendChild(buttonBox);
buttonBox.setAttribute("style", "border-radius: 10px;display: flex;flex-wrap: wrap; margin: 50px auto 0px auto;width: 80%; height: 60%;");

const gridHeight = 4;
const gridWidth = 4;
let index = 0;
const labels = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "0", "=", "C", "/"];
for (let row = 0; row < gridHeight;row++) {
    for (let col = 0; col < gridWidth;col++) {
        const cell = document.createElement("div");
        cell.textContent = labels[index];
        index++
        cell.setAttribute("style", "background-color: rgb(16,16,16); color: white;text-align: center;font-size: 30px; border-radius: 10px;height: 25%; width: 25%;outline: 2px black solid;")
        buttonBox.append(cell);
        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = "purple";
        });
        cell.addEventListener("mouseleave", () => {
            cell.style.backgroundColor = "rgb(16,16,16)";
        });
        cell.addEventListener("click", (e) => {
            const value = e.target.textContent;
            switch(value) {
                case "7":
                    displayDiv.textContent += "7";
                    break
                case "8":
                    displayDiv.textContent += "8";
                    break
                case "9":
                    displayDiv.textContent += "9";
                    break
                case "+":
                    displayDiv.textContent += "+";
                    break
                case "4":
                    displayDiv.textContent += "4";
                    break
                case "5":
                    displayDiv.textContent += "5";
                    break
                case "6":
                    displayDiv.textContent += "6";
                    break
                case "-":
                    displayDiv.textContent += "-";
                    break
                case "1":
                    displayDiv.textContent += "1";
                    break
                case "2":
                    displayDiv.textContent += "2";
                    break
                case "3":
                    displayDiv.textContent += "3";
                    break
                case "*":
                    displayDiv.textContent += "*";
                    break
                case "0":
                    displayDiv.textContent += "0";
                    break
                case "=":
                    const formula = displayDiv.textContent;
                    const result = operate(formula);
                    displayDiv.textContent = result;
                    break
                case "/":
                    displayDiv.textContent += "/";
                    break
                case "C":
                    displayDiv.textContent = "";
                    break
            }

        })
    }
}

const operate = (expression) => {
    const regex = /\d+|\+|\-|\*|\//g
    const parts = expression.match(regex);
    for (let i = 0;i < parts.length;i++) {
        if (parts[i] === "*" || parts[i] === "/") {
            const num1 = parseFloat(parts[i-1]);
            const num2 = parseFloat(parts[i+1]);
            const result = parts[i] === "*"? num1 * num2 : num1 / num2;
            parts.splice(i - 1, 3, result.toString());
            i--;
        }
    }
    for (let i = 0;i < parts.length; i++) {
        if (parts[i] === "+" || parts[i] === "-") {
            const num1 = parseFloat(parts[i-1]);
            const num2 = parseFloat(parts[i+1]);
            const result = parts[i] === "+"? num1 + num2: num1 - num2;
            parts.splice(i-1,3, result.toString());
            i--

        }
    }
    return parts[0];
}


