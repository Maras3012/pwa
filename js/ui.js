const jobs = document.querySelector('.jobs');

document.addEventListener('DOMContentLoaded', function () {
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, { edge: 'right' });
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, { edge: 'left' });
});

const renderJob = (data, id) => {
  const html = `
    <div class="card-panel job white row" data-id="${id}">
      <img src="/img/image.png" alt="job thumb">
      <div class="job-details">
        <div class="job-title">${data.title}</div>
        <div class="job-details">${data.description}</div>
      </div>
    </div>
  `;
  jobs.innerHTML += html;
};
