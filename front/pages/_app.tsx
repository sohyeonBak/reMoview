import BaseLayout from '../components/BaseLayout'

import '../assets/styles/all.scss';
import '../assets/styles/header.scss';

const app = ({Component}) => {
  return (
    <BaseLayout>
      <Component />
    </BaseLayout>
  )
}

export default app