import React from "react";

function Items(data) {
  console.log(data);
  return (
    <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
      >
        {item.item.address}
      </th>
      <td className="px-6 py-4"></td>
      <td className="px-6 py-4"></td>
      <td className="px-6 py-4"></td>
      <td className="px-6 py-4 text-right">
        <a
          href="#"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Edit
        </a>
      </td>
    </tr>
  );
}

export default Items;
