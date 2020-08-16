import React from 'react';
import * as Services from '../utils/services';
import getPullMeta from '../utils/getPullMeta';
import SideMenu from '../templates/SideMenu';
import Pulls from '../components/Pulls';
import Menu from '../components/Menu';
import EndpointParams from '../utils/EndpointParams';

function Home() {
  const [pulls, setPulls] = React.useState([]);
  const [repos, setRepos] = React.useState([]);
  const [repoId, setRepoId] = React.useState(0);
  const [sections, setSections] = React.useState([]);

  const changeRepo = React.useCallback(repo => {
    EndpointParams.setParam('owner', repo.owner.login);
    EndpointParams.setParam('repo', repo.name);

    setRepoId(repo.id);
  }, []);

  React.useEffect(() => {
    async function getPulls() {
      const result = await Services.getRecentPulls({ state: 'all' });

      setPulls(result);

      setSections(
        result.map(pull => {
          const { bgColor } = getPullMeta(pull);

          return {
            bgColor,
            ref: 'section-' + pull.id,
          };
        })
      );
    }

    if (repoId > 0) {
      getPulls();
    }
  }, [repoId]);

  React.useEffect(() => {
    async function getRepos() {
      const result = await Services.getRepos();

      setRepos(result);

      if (result.length) {
        changeRepo(result[0]);
      }
    }

    getRepos();
  }, [changeRepo]);

  return (
    <SideMenu
      menu={
        <Menu sections={sections} repos={repos} onChangeRepo={changeRepo} />
      }
      content={<Pulls pulls={pulls} />}
    />
  );
}

export default Home;
