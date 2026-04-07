const data = [
  {
    name: "Ana",
    status: false,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, inventore.",
  },
  {
    name: "George",
    status: false,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, inventore.",
  },
  {
    name: "Davit",
    status: false,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, inventore.",
  },
  {
    name: "Elen",
    status: true,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, inventore.",
  },
  {
    name: "Elen",
    status: true,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, inventore.",
  },
  {
    name: "Elen",
    status: true,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, inventore.",
  },
];

const container = document.getElementById("card-container");
let cardBoxes = "";

data.forEach((item) => {
  cardBoxes += `
        <div class="col-12 col-md-6">
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <h4 class="card-title fw-bold">${item.name}</h4>
                    <p class="text-muted small mb-2">${item.status}</p>
                    <p class="card-text text-secondary">
                        ${item.desc}
                    </p>
                    <div class="mt-4">
                        <a href="#" class="card-link text-primary text-decoration-none">Card link</a>
                        <a href="#" class="card-link text-primary text-decoration-none">Another link</a>
                    </div>
                </div>
            </div>
        </div>
    `;
});
container.innerHTML = cardBoxes;
