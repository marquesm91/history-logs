async function http(method, endpoint, options = {}) {
  const url = buildURL(endpoint, options.params);

  const config = {
    method,
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: 'token ' + process.env.REACT_APP_TOKEN,
    },
  };

  if (options.data) {
    config.body = JSON.stringify(options.data);
  }

  const fetchResponse = await fetch(url, config);

  const response = await fetchResponse.json();

  return response;
}

export function buildURL(endpoint, params = {}) {
  const baseURL = 'https://api.github.com';
  const qs = new URLSearchParams(Object.entries(params)).toString();

  const _endpoint = endpoint
    .replace('{owner}', process.env.REACT_APP_OWNER)
    .replace('{repo}', process.env.REACT_APP_REPO);

  return [baseURL + _endpoint, qs].filter(v => v).join('?');
}

export default http;
