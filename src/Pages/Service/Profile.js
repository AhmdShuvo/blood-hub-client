import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ donor }) => {
  const photoURL="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"

  if (!donor) {
    return "loading"
  }
  const { address, displayName, group, email, phone, facebook } = donor

  return (

    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-evenly items-center">
        <img width="20%" src={photoURL} alt={displayName+"photo"} />
      <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
        {displayName}
      </h5></div>

      <ul className="my-4 space-y-3">
        <li>
          <p className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <i className="fa-solid fa-map-location"></i>
            <span className="flex-1 ml-3 whitespace-nowrap">{address}</span>

          </p>
        </li>
        <li>
          <a className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <i className="fa-solid fa-droplet"></i>
            <span style={{ textTransform: "uppercase" }} className="flex-1 ml-3 whitespace-nowrap">{group}</span>
          </a>
        </li>
        <li>
          <a   className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <i className="fa-solid fa-address-book"></i>
            <span className="flex-1 ml-3 whitespace-nowrap">{phone ? phone : email}</span>
          </a>
        </li>
        <li>
          <a className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <i className="fa-brands fa-facebook"></i>
            <span className="flex-1 ml-3 whitespace-nowrap"> <a  href={facebook} target="_blank" href={facebook} > Facebook</a></span>
          </a>
        </li>
      </ul>
      <div>
        <a className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
          <svg className="w-3 h-3 mr-2" aria-hidden="true" focusable="false" data-prefix="far" data-icon="question-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z" /></svg>
        </a>
      </div>
    </div>

  );
};

export default Profile;