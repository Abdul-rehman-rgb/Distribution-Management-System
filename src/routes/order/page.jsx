import React from "react";

const page = () => {
    return (
        <section className="bg-white p-3 sm:p-5">
            <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg">
                    <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-y-0 md:space-x-4">
                        <div className="w-full md:w-1/2">
                            <form className="flex items-center">
                                <label
                                    for="simple-search"
                                    className="sr-only"
                                >
                                    Search
                                </label>
                                <div className="relative w-full">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <svg
                                            aria-hidden="true"
                                            className="h-5 w-5 text-gray-500"
                                            fill="currentColor"
                                            viewbox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        id="simple-search"
                                        className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 p-2 pl-10 text-sm text-gray-900"
                                        placeholder="Search"
                                        required=""
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-y-0 md:space-x-3">
                            <div className="flex w-full items-center space-x-3 md:w-auto">
                                <button
                                    id="actionsDropdownButton"
                                    data-dropdown-toggle="actionsDropdown"
                                    className="hover:text-primary-700 flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 focus:outline-none md:w-auto"
                                    type="button"
                                >
                                    <svg
                                        className="mr-1.5 -ml-1 h-5 w-5"
                                        fill="currentColor"
                                        viewbox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                    >
                                        <path
                                            clip-rule="evenodd"
                                            fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        />
                                    </svg>
                                    Actions
                                </button>
                                <div
                                    id="actionsDropdown"
                                    className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow"
                                >
                                    <ul
                                        className="py-1 text-sm text-gray-700"
                                        aria-labelledby="actionsDropdownButton"
                                    >
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Mass Edit
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Delete all
                                        </a>
                                    </div>
                                </div>
                                <button
                                    id="filterDropdownButton"
                                    data-dropdown-toggle="filterDropdown"
                                    className="hover:text-primary-700 flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 focus:outline-none md:w-auto"
                                    type="button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        className="mr-2 h-4 w-4 text-gray-400"
                                        viewbox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    Filter
                                    <svg
                                        className="-mr-1 ml-1.5 h-5 w-5"
                                        fill="currentColor"
                                        viewbox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                    >
                                        <path
                                            clip-rule="evenodd"
                                            fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        />
                                    </svg>
                                </button>
                                <div
                                    id="filterDropdown"
                                    className="z-10 hidden w-48 rounded-lg bg-white p-3 shadow"
                                >
                                    <h6 className="mb-3 text-sm font-medium text-gray-900">Choose brand</h6>
                                    <ul
                                        className="space-y-2 text-sm"
                                        aria-labelledby="filterDropdownButton"
                                    >
                                        <li className="flex items-center">
                                            <input
                                                id="apple"
                                                type="checkbox"
                                                value=""
                                                className="text-primary-600 focus:ring-primary-500 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                                            />
                                            <label
                                                for="apple"
                                                className="ml-2 text-sm font-medium text-gray-900"
                                            >
                                                Apple (56)
                                            </label>
                                        </li>
                                        <li className="flex items-center">
                                            <input
                                                id="fitbit"
                                                type="checkbox"
                                                value=""
                                                className="text-primary-600 focus:ring-primary-500 h-4 w-4 rounded border-gray-300"
                                            />
                                            <label
                                                for="fitbit"
                                                className="ml-2 text-sm font-medium text-gray-900"
                                            >
                                                Microsoft (16)
                                            </label>
                                        </li>
                                        <li className="flex items-center">
                                            <input
                                                id="razor"
                                                type="checkbox"
                                                value=""
                                                className="text-primary-600 focus:ring-primary-500 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                                            />
                                            <label
                                                for="razor"
                                                className="ml-2 text-sm font-medium text-gray-900"
                                            >
                                                Razor (49)
                                            </label>
                                        </li>
                                        <li className="flex items-center">
                                            <input
                                                id="nikon"
                                                type="checkbox"
                                                value=""
                                                className="text-primary-600 focus:ring-primary-500 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                                            />
                                            <label
                                                for="nikon"
                                                className="ml-2 text-sm font-medium text-gray-900"
                                            >
                                                Nikon (12)
                                            </label>
                                        </li>
                                        <li className="flex items-center">
                                            <input
                                                id="benq"
                                                type="checkbox"
                                                value=""
                                                className="text-primary-600 focus:ring-primary-500 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                                            />
                                            <label
                                                for="benq"
                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                            >
                                                BenQ (74)
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-gray-500">
                            <thead className="bg-white text-xs text-gray-700 uppercase">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-4 py-3"
                                    >
                                        Product name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3"
                                    >
                                        Category
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3"
                                    >
                                        Brand
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3"
                                    >
                                        Description
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3"
                                    >
                                        Price
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3"
                                    >
                                        <span className="sr-only">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b dark:border-gray-700">
                                    <th
                                        scope="row"
                                        className="px-4 py-3 font-medium whitespace-nowrap text-gray-900 dark:text-white"
                                    >
                                        Apple iMac 27&#34;
                                    </th>
                                    <td className="px-4 py-3">PC</td>
                                    <td className="px-4 py-3">Apple</td>
                                    <td className="px-4 py-3">300</td>
                                    <td className="px-4 py-3">$2999</td>
                                    <td className="flex items-center justify-end px-4 py-3">
                                        <button
                                            id="apple-imac-27-dropdown-button"
                                            data-dropdown-toggle="apple-imac-27-dropdown"
                                            className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                            type="button"
                                        >
                                            <svg
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewbox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div
                                            id="apple-imac-27-dropdown"
                                            className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                                        >
                                            <ul
                                                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="apple-imac-27-dropdown-button"
                                            >
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Show
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Edit
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="py-1">
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b dark:border-gray-700">
                                    <th
                                        scope="row"
                                        className="px-4 py-3 font-medium whitespace-nowrap text-gray-900 dark:text-white"
                                    >
                                        Apple iMac 20&#34;
                                    </th>
                                    <td className="px-4 py-3">PC</td>
                                    <td className="px-4 py-3">Apple</td>
                                    <td className="px-4 py-3">200</td>
                                    <td className="px-4 py-3">$1499</td>
                                    <td className="flex items-center justify-end px-4 py-3">
                                        <button
                                            id="apple-imac-20-dropdown-button"
                                            data-dropdown-toggle="apple-imac-20-dropdown"
                                            className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                            type="button"
                                        >
                                            <svg
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewbox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div
                                            id="apple-imac-20-dropdown"
                                            className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                                        >
                                            <ul
                                                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="apple-imac-20-dropdown-button"
                                            >
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Show
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Edit
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="py-1">
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b dark:border-gray-700">
                                    <th
                                        scope="row"
                                        className="px-4 py-3 font-medium whitespace-nowrap text-gray-900 dark:text-white"
                                    >
                                        Apple iPhone 14
                                    </th>
                                    <td className="px-4 py-3">Phone</td>
                                    <td className="px-4 py-3">Apple</td>
                                    <td className="px-4 py-3">1237</td>
                                    <td className="px-4 py-3">$999</td>
                                    <td className="flex items-center justify-end px-4 py-3">
                                        <button
                                            id="apple-iphone-14-dropdown-button"
                                            data-dropdown-toggle="apple-iphone-14-dropdown"
                                            className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                            type="button"
                                        >
                                            <svg
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewbox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div
                                            id="apple-iphone-14-dropdown"
                                            className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                                        >
                                            <ul
                                                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="apple-iphone-14-dropdown-button"
                                            >
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Show
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Edit
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="py-1">
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b dark:border-gray-700">
                                    <th
                                        scope="row"
                                        className="px-4 py-3 font-medium whitespace-nowrap text-gray-900 dark:text-white"
                                    >
                                        Apple iPad Air
                                    </th>
                                    <td className="px-4 py-3">Tablet</td>
                                    <td className="px-4 py-3">Apple</td>
                                    <td className="px-4 py-3">4578</td>
                                    <td className="px-4 py-3">$1199</td>
                                    <td className="flex items-center justify-end px-4 py-3">
                                        <button
                                            id="apple-ipad-air-dropdown-button"
                                            data-dropdown-toggle="apple-ipad-air-dropdown"
                                            className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                            type="button"
                                        >
                                            <svg
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewbox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div
                                            id="apple-ipad-air-dropdown"
                                            className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                                        >
                                            <ul
                                                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="apple-ipad-air-dropdown-button"
                                            >
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Show
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Edit
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="py-1">
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b dark:border-gray-700">
                                    <th
                                        scope="row"
                                        className="px-4 py-3 font-medium whitespace-nowrap text-gray-900 dark:text-white"
                                    >
                                        Xbox Series S
                                    </th>
                                    <td className="px-4 py-3">Gaming/Console</td>
                                    <td className="px-4 py-3">Microsoft</td>
                                    <td className="px-4 py-3">56</td>
                                    <td className="px-4 py-3">$299</td>
                                    <td className="flex items-center justify-end px-4 py-3">
                                        <button
                                            id="xbox-series-s-dropdown-button"
                                            data-dropdown-toggle="xbox-series-s-dropdown"
                                            className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                            type="button"
                                        >
                                            <svg
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewbox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div
                                            id="xbox-series-s-dropdown"
                                            className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                                        >
                                            <ul
                                                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="xbox-series-s-dropdown-button"
                                            >
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Show
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Edit
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="py-1">
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b dark:border-gray-700">
                                    <th
                                        scope="row"
                                        className="px-4 py-3 font-medium whitespace-nowrap text-gray-900 dark:text-white"
                                    >
                                        PlayStation 5
                                    </th>
                                    <td className="px-4 py-3">Gaming/Console</td>
                                    <td className="px-4 py-3">Sony</td>
                                    <td className="px-4 py-3">78</td>
                                    <td className="px-4 py-3">$799</td>
                                    <td className="flex items-center justify-end px-4 py-3">
                                        <button
                                            id="playstation-5-dropdown-button"
                                            data-dropdown-toggle="playstation-5-dropdown"
                                            className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                            type="button"
                                        >
                                            <svg
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewbox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div
                                            id="playstation-5-dropdown"
                                            className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                                        >
                                            <ul
                                                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="playstation-5-dropdown-button"
                                            >
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Show
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Edit
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="py-1">
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b dark:border-gray-700">
                                    <th
                                        scope="row"
                                        className="px-4 py-3 font-medium whitespace-nowrap text-gray-900 dark:text-white"
                                    >
                                        Xbox Series X
                                    </th>
                                    <td className="px-4 py-3">Gaming/Console</td>
                                    <td className="px-4 py-3">Microsoft</td>
                                    <td className="px-4 py-3">200</td>
                                    <td className="px-4 py-3">$699</td>
                                    <td className="flex items-center justify-end px-4 py-3">
                                        <button
                                            id="xbox-series-x-dropdown-button"
                                            data-dropdown-toggle="xbox-series-x-dropdown"
                                            className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                            type="button"
                                        >
                                            <svg
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewbox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div
                                            id="xbox-series-x-dropdown"
                                            className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                                        >
                                            <ul
                                                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="xbox-series-x-dropdown-button"
                                            >
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Show
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Edit
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="py-1">
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b dark:border-gray-700">
                                    <th
                                        scope="row"
                                        className="px-4 py-3 font-medium whitespace-nowrap text-gray-900 dark:text-white"
                                    >
                                        Apple Watch SE
                                    </th>
                                    <td className="px-4 py-3">Watch</td>
                                    <td className="px-4 py-3">Apple</td>
                                    <td className="px-4 py-3">657</td>
                                    <td className="px-4 py-3">$399</td>
                                    <td className="flex items-center justify-end px-4 py-3">
                                        <button
                                            id="apple-watch-se-dropdown-button"
                                            data-dropdown-toggle="apple-watch-se-dropdown"
                                            className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                            type="button"
                                        >
                                            <svg
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewbox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div
                                            id="apple-watch-se-dropdown"
                                            className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                                        >
                                            <ul
                                                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="apple-watch-se-dropdown-button"
                                            >
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Show
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Edit
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="py-1">
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b dark:border-gray-700">
                                    <th
                                        scope="row"
                                        className="px-4 py-3 font-medium whitespace-nowrap text-gray-900 dark:text-white"
                                    >
                                        NIKON D850
                                    </th>
                                    <td className="px-4 py-3">Photo</td>
                                    <td className="px-4 py-3">Nikon</td>
                                    <td className="px-4 py-3">465</td>
                                    <td className="px-4 py-3">$599</td>
                                    <td className="flex items-center justify-end px-4 py-3">
                                        <button
                                            id="nikon-d850-dropdown-button"
                                            data-dropdown-toggle="nikon-d850-dropdown"
                                            className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                            type="button"
                                        >
                                            <svg
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewbox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div
                                            id="nikon-d850-dropdown"
                                            className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                                        >
                                            <ul
                                                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="nikon-d850-dropdown-button"
                                            >
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Show
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Edit
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="py-1">
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b dark:border-gray-700">
                                    <th
                                        scope="row"
                                        className="px-4 py-3 font-medium whitespace-nowrap text-gray-900 dark:text-white"
                                    >
                                        Monitor BenQ EX2710Q
                                    </th>
                                    <td className="px-4 py-3">TV/Monitor</td>
                                    <td className="px-4 py-3">BenQ</td>
                                    <td className="px-4 py-3">354</td>
                                    <td className="px-4 py-3">$499</td>
                                    <td className="flex items-center justify-end px-4 py-3">
                                        <button
                                            id="benq-ex2710q-dropdown-button"
                                            data-dropdown-toggle="benq-ex2710q-dropdown"
                                            className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                            type="button"
                                        >
                                            <svg
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewbox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <div
                                            id="benq-ex2710q-dropdown"
                                            className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                                        >
                                            <ul
                                                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="benq-ex2710q-dropdown-button"
                                            >
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Show
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Edit
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="py-1">
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <nav
                        className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0"
                        aria-label="Table navigation"
                    >
                        <span className="text-sm font-normal text-gray-500">
                            Showing
                            <span className="font-semibold text-gray-900">1-10</span>
                            of
                            <span className="font-semibold text-gray-900">1000</span>
                        </span>
                        <ul className="inline-flex items-stretch -space-x-px">
                            <li>
                                <a
                                    href="#"
                                    className="ml-0 flex h-full items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 py-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Previous</span>
                                    <svg
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewbox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    1
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    2
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    aria-current="page"
                                    className="text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 z-10 flex items-center justify-center border px-3 py-2 text-sm leading-tight dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                >
                                    3
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    ...
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    100
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex h-full items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 py-1.5 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Next</span>
                                    <svg
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewbox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default page;
