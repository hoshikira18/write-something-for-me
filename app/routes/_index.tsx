import type { V2_MetaFunction } from '@remix-run/node';
import handleSendMessage from '../javascripts/handleSendMessage';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Những điều thầm kín' },
    { className: 'description', content: 'Nơi thổ lộ tâm tình' }
  ];
};

export default function Index() {
  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        lineHeight: '1.8'
      }}
      className="flex h-screen w-screen items-center justify-center bg-zinc-900">
      <div className="container mx-auto rounded bg-gray-800 p-10 max-[400px]:h-full lg:h-max lg:w-1/2">
        <h1 className="py-4 text-center text-3xl font-bold text-gray-300">
          Write something for me!
        </h1>
        <form>
          <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
            <div className="rounded-t-lg bg-white px-4 py-2 dark:bg-gray-800">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                className="w-full border-0 bg-white px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                placeholder="Xin chào, viết điều gì đó cho tôi nhé...!"
                required></textarea>
            </div>
            <div className="flex items-center justify-between border-t px-3 py-2 dark:border-gray-600">
              <button
                type="button"
                className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2.5 text-center text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
                onClick={() => {
                  var content = document.getElementById('comment').value;
                  handleSendMessage(content)
                    .then((message) => {
                      console.log('Created message:', message);
                      document.getElementById('comment').value = '';
                      document.getElementById('alert-success').classList.replace('hidden', 'flex');
                      setTimeout(() => {
                        document
                          .getElementById('alert-success')
                          .classList.replace('flex', 'hidden');
                      }, 5000);
                    })
                    .catch((error) => {
                      console.error('Error:', error);
                      document.getElementById('comment').value = '';
                      document.getElementById('alert-err').classList.replace('hidden', 'flex');
                      setTimeout(() => {
                        document.getElementById('alert-err').classList.replace('flex', 'hidden');
                      }, 5000);
                    });
                }}>
                Send me
              </button>
            </div>
          </div>
        </form>
        <div
          id="alert-success"
          className="mb-4 hidden rounded-lg bg-green-50 p-4 text-sm text-green-800 dark:bg-gray-800 dark:text-green-400"
          role="alert">
          <svg
            aria-hidden="true"
            className="mr-3 inline h-5 w-5 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"></path>
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Khuyến nhận được rồi nhé!</span> Chúc bạn một ngày tuyệt
            vời.
          </div>
        </div>
        <div
          id="alert-err"
          className=" mb-4 hidden rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-gray-800 dark:text-red-400"
          role="alert">
          <svg
            aria-hidden="true"
            className="mr-3 inline h-5 w-5 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"></path>
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Ohhh!</span> Kiểm tra lại mạng nhé bạn ơi.
          </div>
        </div>
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
