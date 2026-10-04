const projectsGrid = document.querySelector("#projects-grid");
const projectCount = document.querySelector("#project-count");

const dialog = document.querySelector("#project-dialog");
const projectContent = document.querySelector("#project-content");
const closeDialog = document.querySelector("#close-dialog");


// --------------------------------
// Render Projects
// --------------------------------

function renderProjects() {

  projectCount.textContent =
    String(projects.length).padStart(2, "0");


  projectsGrid.innerHTML = projects.map((project, index) => {

    return `
      <article
        class="project-card"
        data-project="${project.id}"
      >

        <div class="project-number">
          ${String(index + 1).padStart(2, "0")}
        </div>

        <div class="project-logo">

          <img
            src="${project.logo}"
            alt="${project.title} logo"
          >

        </div>

        <div class="project-info">

          <h2>
            ${project.title}
          </h2>

          <span class="view-project">
            VIEW PROJECT →
          </span>

        </div>

      </article>
    `;

  }).join("");


  document
    .querySelectorAll(".project-card")
    .forEach(card => {

      card.addEventListener("click", () => {

        const projectId =
          card.dataset.project;

        openProject(projectId);

      });

    });

}


// --------------------------------
// Open Project
// --------------------------------

function openProject(projectId) {

  const project =
    projects.find(item => item.id === projectId);


  if (!project) return;


  projectContent.innerHTML = `

    <div class="project-detail">

      <div class="detail-logo">

        <img
          src="${project.logo}"
          alt="${project.title} logo"
        >

      </div>


      <p class="detail-label">
        PROJECT
      </p>


      <h1>
        ${project.title}
      </h1>


      <div class="detail-line"></div>


      <p class="detail-description">
        ${project.description}
      </p>


      <div class="detail-placeholder">

        <span>
          MORE INFORMATION
        </span>

        <p>
          جزئیات این پروژه به‌زودی اضافه خواهد شد.
        </p>

      </div>

    </div>

  `;


  dialog.showModal();

}


// --------------------------------
// Close Dialog
// --------------------------------

closeDialog.addEventListener(
  "click",
  () => {
    dialog.close();
  }
);


// Close when clicking outside panel

dialog.addEventListener(
  "click",
  event => {

    if (event.target === dialog) {
      dialog.close();
    }

  }
);


// --------------------------------
// Escape Key
// --------------------------------

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape" &&
      dialog.open
    ) {
      dialog.close();
    }

  }
);


// --------------------------------
// Start
// --------------------------------

renderProjects();
