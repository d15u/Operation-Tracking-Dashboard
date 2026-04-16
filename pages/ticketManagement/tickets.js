import { generateTickets } from "./ticketGeneration.js";

const state = {
  allTickets: generateTickets(30)
};

function renderStatsCards(tickets) {
  const totalCountEl = document.getElementById("total-count");
  const openCountEl = document.getElementById("open-count");
  const progressCountEl = document.getElementById("progress-count");
  const doneCountEl = document.getElementById("done-count");

  if (!totalCountEl || !openCountEl || !progressCountEl || !doneCountEl) return;

  const total = tickets.length;
  const open = tickets.filter((t) => t.status === "open").length;
  const progress = tickets.filter((t) => t.status === "in progress").length;
  const done = tickets.filter((t) => t.status === "resolved" || t.status === "closed").length;

  totalCountEl.textContent = String(total);
  openCountEl.textContent = String(open);
  progressCountEl.textContent = String(progress);
  doneCountEl.textContent = String(done);
}

function renderTableRows(tickets) {
  const tbody = document.getElementById("tickets-table-body");
  if (!tbody) return;

  tbody.innerHTML = tickets
    .map(
      (ticket) => `
      <tr>
        <td>${ticket.id}</td>
        <td>${ticket.title}</td>
        <td>${ticket.status}</td>
        <td>${ticket.priority}</td>
        <td>${ticket.openDate}</td>
        <td>${ticket.customer}</td>
        <td>
          <button type="button" class="btn-secondary btn-edit" data-id="${ticket.id}">
            Edit
          </button>
        </td>
      </tr>
    `
    )
    .join("");
}

function renderAll() {
  renderStatsCards(state.allTickets);
  renderTableRows(state.allTickets);
}

renderAll();