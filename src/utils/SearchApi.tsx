const URL = 'https://dummyjson.com/users/search?q=';

function CheckResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка ${res.status}`);
  }
}

export function Search(query) {
  return fetch(`${URL}${query}`, {
    method: 'GET',
  })
  .then((res)=> {
    return CheckResponse(res)
  })
}