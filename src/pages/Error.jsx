import { useRouteError } from 'react-router-dom';
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page" className='min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}