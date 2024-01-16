import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="tw-p-4">
      <h1>Hello Dashboard</h1>
      <Link
        to="/map"
        className="tw-mt-4 tw-cursor-pointer tw-rounded-md tw-bg-blue-500 tw-px-4 tw-py-2 tw-text-sm tw-font-semibold tw-text-white"
      >
        Jump to Map
      </Link>
    </div>
  );
}
