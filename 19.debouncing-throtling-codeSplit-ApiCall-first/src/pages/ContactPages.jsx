import React from "react";

const ContactPages = () => {
  return (
    <div className="min-h-[calc(100vh-73px)] bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
            Get In Touch
          </span>

          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Contact <span className="text-blue-600">Us</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Have a question or want to work with us? Send us a message and we'll
            get back to you.
          </p>
        </div>

        {/* Contact Card */}
        <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl md:grid-cols-2">
          {/* Left Side */}
          <div className="bg-slate-900 p-8 text-white md:p-10">
            <h2 className="text-2xl font-bold">Let's talk</h2>

            <p className="mt-3 leading-7 text-slate-400">
              We'd love to hear from you. Feel free to reach out to us with any
              questions, ideas or feedback.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600">
                  ✉️
                </div>

                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="mt-1 font-medium">hello@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600">
                  📞
                </div>

                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="mt-1 font-medium">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600">
                  📍
                </div>

                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="mt-1 font-medium">India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="p-8 md:p-10">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              Send a message
            </h2>

            <form className="space-y-5">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPages;
