"use client";

export default function ContactPage() {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)

    const data = {
      name: form.get('name'),
      email: form.get('email'),
      phone_number: form.get('phone_number')
    }

    console.log(data)
  };
  return (
    <div className="p-5">
      <p className="font-bold text-3xl">Contact Register Page</p>
      <form
        onSubmit={submitHandler}
        className="max-w-md mx-auto p-6 bg-white shadow-md rounded-2xl space-y-4"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-bold text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-bold text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:outline-none focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="phone_number"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="number"
            name="phone_number"
            id="phone_number"
            required
            className="mt-1 border w-full px-4 py-2 rounded-lg border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition cursor-pointer"
        >
          Save
        </button>
      </form>
    </div>
  );
}
