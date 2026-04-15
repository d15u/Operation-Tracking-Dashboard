import { generateTickets } from "./ticketGeneration.js";

const tickets = generateTickets(30);


const root = document.getElementById("tickets-table-root");
const table = document.createElement("table");

table.innerHTML = `
  <tr>
    <th>ID</th>
    <th>Title</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Test ticket</td>
  </tr>
`;

root.appendChild(table);