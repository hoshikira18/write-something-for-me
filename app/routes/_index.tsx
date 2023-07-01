import type { V2_MetaFunction } from "@remix-run/node";
const { request, GraphQLClient } = require("graphql-request");

const endpoint =
  "https://api-eu-west-2.hygraph.com/v2/cljhcjich0fx001ume05m1i44/master";

const sendMessage = `
mutation MyMutation($post: String!) {
  createPost(data: {post: $post}) {
    id
  }
}

`;

// Function to create an asset
async function createAsset() {
  let content = document.querySelector("#comment").value;
  try {
    // Create a new GraphQL client
    const graphQLClient = new GraphQLClient(endpoint);

    const variables = { post: content };
    // Send the mutation request
    const response = await graphQLClient.request(sendMessage, variables);

    // Return the created asset
    return response.createAsset;
  } catch (error) {
    console.error("Error creating asset:", error);
    throw error;
  }
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Ship tool" },
    { className: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.8",
      }}
      className="flex h-screen w-screen items-center justify-center bg-zinc-900"
    >
      <div className="container mx-auto rounded bg-gray-800 p-10 max-[400px]:h-full lg:h-max lg:w-1/2">
        <h1 className="py-4 text-center text-3xl font-bold text-gray-300">
          Write something for me!
        </h1>
        <form>
          <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
            <div className="rounded-t-lg bg-white px-4 py-2 dark:bg-gray-800">
              <label for="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                className="w-full border-0 bg-white px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                placeholder="Xin chào, viết điều gì đó cho tôi nhé...!"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between border-t px-3 py-2 dark:border-gray-600">
              <button
                type="submit"
                className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2.5 text-center text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
                onClick={() => {
                  createAsset()
                    .then((asset) => {
                      console.log("Created asset:", asset);
                    })
                    .catch((error) => {
                      console.error("Error:", error);
                    });
                }}
              >
                Send me
              </button>
              <div className="flex space-x-1 pl-0 sm:pl-2">
                <button
                  type="button"
                  className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Upload image</span>
                </button>
              </div>
            </div>
          </div>
        </form>
        <p className="mb-0.5 ml-auto text-xs text-gray-500 dark:text-gray-400">
          Để lại tên ở cuối bài để tôi biết bạn là ai nhé!
        </p>
        <p className="ml-auto text-xs text-gray-500 dark:text-gray-400">
          Yên tâm, những điều trên chỉ có tôi biết, bạn biết mà thôi, há há!
        </p>
      </div>
    </div>
  );
}
