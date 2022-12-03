import react from 'react';
function CreateEvent() {
    

    return (
        <>
          <div className="container mx-auto">
            <div className="md:grid  md:gap-6">
              <div className="mt-5 md:col-span-2 md:mt-0">
                <form>
                  <div className="shadow sm:overflow-hidden sm:rounded-md">
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                            Name
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            {/* <span className="inline-flex items-center rounded-l-md border border-r-1 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                              http://
                            </span> */}
                            <input
                              type="text"
                              name="company-website"
                              id="company-website"
                              className="block w-full flex-1 rounded-none rounded-r-0 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="..."
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                            From date
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                              type="date"
                              name="company-website"
                              id="company-website"
                              className="block w-full flex-1 rounded-none rounded-r-0 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                            To date
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                              type="date"
                              name="company-website"
                              id="company-website"
                              className="block w-full flex-1 rounded-none rounded-r-0 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-6">
                      <fieldset>
                    <legend className="contents text-base font-medium text-gray-900">Type</legend>
                    <p className="text-sm text-gray-500"></p>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="push-everything"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                          Free
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-email"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                          Paid
                        </label>
                      </div>
                    </div>
                  </fieldset>
                      </div>

                      {/* <div>
                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                          About
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="you@example.com"
                            defaultValue={''}
                          />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          Brief description for your profile. URLs are hyperlinked.
                        </p>
                      </div> */}
    
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Mint Image</label>
                        <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                          <div className="space-y-1 text-center">
                            <svg
                              className="mx-auto h-12 w-12 text-gray-400"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 48 48"
                              aria-hidden="true"
                            >
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                              >
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                              </label>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG up to 1MB</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
    
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>
        </>
      )
  }
  
  export default CreateEvent;