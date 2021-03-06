import http from './http';

export async function getRecentPulls(params = {}) {
  const pulls = await http('GET', '/repos/{owner}/{repo}/pulls', { params });

  return pulls;
}

export async function getUser(username) {
  const user = await http('GET', '/users/' + username);

  return user;
}

export async function getRepos() {
  const repos = await http('GET', '/user/repos', {
    params: {
      sort: 'updated',
    },
  });

  return repos;
}
