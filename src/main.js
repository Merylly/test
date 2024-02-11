import axios from 'axios';
import Pagination from 'tui-pagination';
axios.defaults.baseURL = 'https://energyflow.b.goit.study/api';

const btn = document.querySelector('.switch-list');
const ex = document.querySelector('.exercises-list');
const p = document.querySelector('.exercises-page');
let pagesize = 8;

async function getApiInfo({ filter, page = 1, limit = 12, type }) {
  try {
    const response = await axios.get(`/${type}`, {
      params: {
        filter,
        page,
        limit,
      },
    });
    return response.data;
  } catch {
    console.error('n');
  }
}

async function get() {
  try {
    const exercises = await getApiInfo({
      type: 'filters',
      filter: 'Muscles',
      limit: pagesize,
    }).then(data => {
      const { page, totalPages, results } = data;
      ex.innerHTML = markup(results);
      // const f = pag(page, totalPages);
      p.innerHTML = pag(page, totalPages);
    });
  } catch {
    console.error;
  }
}
get();

// const exercises = await getApiInfo({ type: 'filters', filter: 'Muscles' })
//   .then(data => {
//     const { page, totalPages, results } = data;
//     ex.innerHTML = markup(results);
//   })
//   .catch(console.error('something wrong'));

// console.log(getApiInfo({ type: 'exercises' }));

// function postApiInfo(userEmail, type) {
//   return axios.post(`https://energyflow.b.goit.study/api/${type}`, userEmail);
// }

// export { getApiInfo, postApiInfo };

// const screenWidth = window.innerWidth;
// let ps = 0;

// if (screenWidth < 375) {
//   ps = 8;
// }
// if (screenWidth <= 768) {
// }

// const exercises = await getApiInfo('filter', {
//   params: {
//     filter: 'Muscles',
//     limit: 8,
//   },
// })
//   .then(({ data }) => data)
//   .catch(console.error);

// const result = exercises.data;
// const pages = exercises.totalPages;

// ex.innerHTML = markup(result);

// console.log(exercises);

function markup(results) {
  const mark = results
    .map(
      ({ name, filter, imgUrl }) => `<li class="exercises-item">
              <a class="exercises-link" href=""
                ><div class="image-container">
                  <img class="exercises-image" src="${imgUrl}"/>
                  <div class="text-container">
                    <h3 class="exercises-title">${name}</h3>
                    <p class="exercises-text">${filter}</p>
                  </div>
                </div>
              </a>
            </li>`
    )
    .join();
  return mark;
}

function pag(p, tp) {
  let pag = '';

  for (let a = 1; a <= tp; a += 1) {
    pag += `<button class="page active-page">${i}</button>`;
  }
  return pag;
}
console.log(pag());

// .addEventListener('click', fp);

async function fp(event) {
  const current = event.target.textContent;
  Array.from(event.currentTarget.children).map(item => {
    if (item.textContent !== currentPage) {
      item.classList.remove('active-page');
    } else {
      e.target.classList.add('active-page');
    }
  });
  try {
    const { results, page, totalPages } = await get();

    if (page === totalPages) {
      return;
    }
  } catch {}
}

const pagination = new Pagination('pagination', {
  totalItems: 500,
});

pagination.on('beforeMove', function (eventData) {
  return confirm('Go to page ' + eventData.page + '?');
});

pagination.on('afterMove', function (eventData) {
  alert('The current page is ' + eventData.page);
});
