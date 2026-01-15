const menu = [
  { id: 1, name: "French Fries", price: 99, category: "appetizer", emoji: "🍟" },
  { id: 2, name: "Biryani", price: 199, category: "main", emoji: "🍛" },
  { id: 3, name: "Veg Burger", price: 109, category: "main", emoji: "🍔" },
  { id: 4, name: "Coke", price: 59, category: "beverage", emoji: "🥤" },
  { id: 5, name: "Brownie", price: 99, category: "dessert", emoji: "🍰" },
  { id: 6, name: "Pizza", price: 249, category: "main", emoji: "🍕" },
  { id: 7, name: "Spring Rolls", price: 129, category: "appetizer", emoji: "🥟" },
  { id: 8, name: "Ice Cream", price: 79, category: "dessert", emoji: "🍨" },
  { id: 9, name: "Coffee", price: 69, category: "beverage", emoji: "☕" },
  { id: 10, name: "Pasta", price: 179, category: "main", emoji: "🍝" }
];
const tables = [
  { id: 1, name: "Table 1", orders: [] },
  { id: 2, name: "Table 2", orders: [] },
  { id: 3, name: "Table 3", orders: [] },
  { id: 4, name: "Table 4", orders: [] }
];
const menuList = document.getElementById("menuList");
const tablesList = document.getElementById("tablesList");
const menuSearch = document.getElementById("menuSearch");
const tableSearch = document.getElementById("tableSearch");
const categoryFilter = document.getElementById("categoryFilter");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const orderDetails = document.getElementById("orderDetails");
const closeModalBtn = document.getElementById("closeModal");
const closeSessionBtn = document.getElementById("closeSession");
function renderTables(filter = "") {
  tablesList.innerHTML = "";
  tables
    .filter(t => t.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(table => {
      const div = document.createElement("div");
      div.className = "table-card";
      div.innerHTML = `
            <div class="table-card-header">${table.name}</div>
            <div class="table-card-info">
              Items: ${getItemCount(table)} | Total: ₹${getTotal(table)}
            </div>
          `;
      div.dataset.id = table.id;
      div.addEventListener("click", () => openModal(table.id));
      div.addEventListener("dragover", e => e.preventDefault());
      div.addEventListener("drop", e => {
        const menuId = Number(e.dataTransfer.getData("menuId"));
        addItemToTable(table.id, menuId);
      });
      tablesList.appendChild(div);
    });
}
function renderMenu() {
  const text = menuSearch.value.toLowerCase();
  const category = categoryFilter.value;
  menuList.innerHTML = "";
  const filtered = menu.filter(item =>
    item.name.toLowerCase().includes(text) &&
    (category === "" || item.category === category)
  );
  if (filtered.length === 0) {
    menuList.innerHTML = `
          <div class="empty-state" style="grid-column: 1/-1">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
            <div>No menu items found</div>
          </div>
        `;
    return;
  }
  filtered.forEach(item => {
    const div = document.createElement("div");
    div.className = "menu-card";
    div.draggable = true;
    div.innerHTML = `
          <div class="menu-card-image">${item.emoji}</div>
          <div class="menu-card-content">
            <div class="menu-card-name">${item.name}</div>
            <div class="menu-card-price">₹${item.price}</div>
            <span class="menu-card-category">${item.category}</span>
          </div>
        `;
    div.addEventListener("dragstart", e => {
      e.dataTransfer.setData("menuId", item.id);
    });
    menuList.appendChild(div);
  });
}
function addItemToTable(tableId, menuId) {
  const table = tables.find(t => t.id === tableId);
  const item = menu.find(m => m.id === menuId);
  if (!table || !item) return;
  const existingOrder = table.orders.find(
    order => order.item.id === item.id
  );
  if (existingOrder) {
    existingOrder.qty += 1;
  } else {
    table.orders.push({
      item: item,
      qty: 1
    });
  }
  renderTables(tableSearch.value);
}
function getTotal(table) {
  return table.orders.reduce((sum, o) => sum + o.item.price * o.qty, 0);
}
function getItemCount(table) {
  return table.orders.length;
}
function openModal(tableId) {
  const table = tables.find(t => t.id === tableId);
  if (!table) return;
  activeTableId = tableId;
  modal.classList.remove("hidden");
  modalTitle.textContent = `${table.name} - Order Details`;
  renderModalContent(table);
}

function renderModalContent(table) {
  orderDetails.innerHTML = "";
  if (table.orders.length === 0) {
    orderDetails.innerHTML = `
          <div class="empty-state">
            <div style="font-size: 3rem; margin-bottom: 1rem;">📋</div>
            <div>No orders yet. Drag items here!</div>
          </div>
        `;
    return;
  }
  table.orders.forEach(order => {
    const row = document.createElement("div");
    row.className = "order-item";
    row.innerHTML = `
          <div class="order-item-info">
            <div class="order-item-name">${order.item.emoji} ${order.item.name}</div>
            <div class="order-item-price">₹${order.item.price} each</div>
          </div>
          <div class="order-item-controls">
            <input type="number" min="1" value="${order.qty}">
            <button class="btn-delete">Remove</button>
          </div>
        `;
    const qtyInput = row.querySelector("input");
    const deleteBtn = row.querySelector("button");
    qtyInput.addEventListener("change", () => {
      order.qty = Math.max(1, Number(qtyInput.value));
      renderTables(tableSearch.value);
      renderModalContent(table);
    });
    deleteBtn.addEventListener("click", () => {
      table.orders = table.orders.filter(o => o !== order);
      renderTables(tableSearch.value);
      renderModalContent(table);
    });

    orderDetails.appendChild(row);
  });
  const total = document.createElement("div");
  total.className = "total-section";
  total.innerHTML = `<h4>Total: ₹${getTotal(table)}</h4>`;
  orderDetails.appendChild(total);
}
closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});
closeSessionBtn.addEventListener("click", () => {
  const table = tables.find(t => t.id === activeTableId);
  if (table && table.orders.length > 0) {
    alert(`Bill Generated for ${table.name}!\nTotal: ₹${getTotal(table)}`);
    table.orders = [];
    modal.classList.add("hidden");
    renderTables(tableSearch.value);
  } else {
    alert("No orders to bill!");
  }
});
menuSearch.addEventListener("input", renderMenu);
categoryFilter.addEventListener("change", renderMenu);
tableSearch.addEventListener("input", e => renderTables(e.target.value));
renderTables();
renderMenu();