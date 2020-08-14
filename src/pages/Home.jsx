import React from 'react';
import { getRecentPulls } from '../utils/services';
import getPullMeta from '../utils/getPullMeta';
import SideMenu from '../templates/SideMenu';
import Pulls from '../components/Pulls';
import Menu from '../components/Menu';

function Home() {
  const [pulls, setPulls] = React.useState([]);
  const [sections, setSections] = React.useState([]);

  React.useEffect(() => {
    async function getPulls() {
      const result = await getRecentPulls({ state: 'all' });

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

    getPulls();
  }, []);

  return (
    <SideMenu
      menu={<Menu sections={sections} />}
      content={<Pulls pulls={pulls} />}
    />
  );
}

export default Home;
