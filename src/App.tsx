import { initDomToCode } from 'dom-to-code';
import { ToastContainer } from 'react-toastify';
import generateRoutes from '@Routes/generateRoutes';
import appRoutes from '@Routes/appRoutes';

import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      {process.env.NODE_ENV !== 'production' &&
        !process.env.DISABLE_DOM_TO_CODE &&
        initDomToCode()}
      <div className="tw-ml-0 tw-flex">
        <ToastContainer />

        {generateRoutes({ routes: [...appRoutes] })}
      </div>
    </>
  );
}
