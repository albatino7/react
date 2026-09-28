import React from "react";
import {
  ShieldCheck,
  Database,
  LoaderCircle,
  LogIn,
  KeyRound,
  RefreshCw,
  CheckCircle2,
  XCircle,
  ArrowDown,
  Home,
  Lightbulb,
  Code2,
} from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#f5f7fa] py-10 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
              <Home className="text-[#2874f0]" size={25} />
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Redux Auth Flow
              </h1>

              <p className="text-gray-500 mt-2">
                Quick revision notes for Login, Hydration, JWT and
                Authentication State.
              </p>
            </div>
          </div>
        </div>

        {/* Main Concept */}
        <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-5">
            <ShieldCheck className="text-green-600" size={23} />

            <h2 className="text-xl font-bold text-gray-900">
              1. Main Authentication Idea
            </h2>
          </div>

          <div className="bg-gray-50 rounded-xl p-5">
            <p className="text-gray-700 leading-7">
              When the application starts, Redux does not know whether the user
              is already logged in. So we use{" "}
              <span className="font-semibold text-[#2874f0]">hydration</span> to
              check the stored access token and get the current user.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-5 text-sm font-semibold">
              <span className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg">
                App Start
              </span>

              <ArrowDown className="text-gray-400" size={18} />

              <span className="px-3 py-2 bg-yellow-50 text-yellow-700 rounded-lg">
                Hydration
              </span>

              <ArrowDown className="text-gray-400" size={18} />

              <span className="px-3 py-2 bg-green-50 text-green-700 rounded-lg">
                Check Token
              </span>

              <ArrowDown className="text-gray-400" size={18} />

              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg">
                User Data
              </span>
            </div>
          </div>
        </section>

        {/* Redux State */}
        <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-5">
            <Database className="text-purple-600" size={23} />

            <h2 className="text-xl font-bold text-gray-900">
              2. Auth Redux State
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-blue-50 border border-blue-100">
              <h3 className="font-bold text-blue-700">user</h3>
              <p className="text-sm text-gray-600 mt-2">
                Stores the logged-in user's information.
              </p>

              <code className="block mt-3 text-xs bg-white p-2 rounded-lg">
                user: null
              </code>
            </div>

            <div className="p-5 rounded-xl bg-green-50 border border-green-100">
              <h3 className="font-bold text-green-700">isAuthenticated</h3>

              <p className="text-sm text-gray-600 mt-2">
                Tells whether the user is authenticated.
              </p>

              <code className="block mt-3 text-xs bg-white p-2 rounded-lg">
                true / false
              </code>
            </div>

            <div className="p-5 rounded-xl bg-yellow-50 border border-yellow-100">
              <h3 className="font-bold text-yellow-700">isLoading</h3>

              <p className="text-sm text-gray-600 mt-2">
                Tells whether authentication checking is still running.
              </p>

              <code className="block mt-3 text-xs bg-white p-2 rounded-lg">
                true / false
              </code>
            </div>
          </div>
        </section>

        {/* Loading State */}
        <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-5">
            <LoaderCircle className="text-orange-500" size={23} />

            <h2 className="text-xl font-bold text-gray-900">
              3. Why isLoading is Important?
            </h2>
          </div>

          <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
            <p className="text-gray-700 leading-7">
              At application start, we don't immediately know if the user is
              logged in. Therefore:
            </p>

            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-3">
                <LoaderCircle size={19} className="text-orange-500" />

                <span className="text-gray-700">
                  <b>isLoading = true</b> → Show Loading component
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 size={19} className="text-green-600" />

                <span className="text-gray-700">
                  <b>isLoading = false</b> → Authentication check finished
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Hydration */}
        <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-5">
            <RefreshCw className="text-[#2874f0]" size={23} />

            <h2 className="text-xl font-bold text-gray-900">
              4. Hydration Flow
            </h2>
          </div>

          <div className="space-y-3">
            {[
              "Get accessToken from localStorage",
              "Send token to /auth/me",
              "Backend verifies JWT",
              "Backend returns current user",
              "hydration.fulfilled runs",
              "Redux stores user information",
              "isAuthenticated becomes true",
              "isLoading becomes false",
            ].map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-4 p-3 rounded-lg bg-gray-50"
              >
                <span className="w-7 h-7 rounded-full bg-[#2874f0] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {index + 1}
                </span>

                <span className="text-sm text-gray-700">{step}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Login Flow */}
        <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-5">
            <LogIn className="text-green-600" size={23} />

            <h2 className="text-xl font-bold text-gray-900">5. Login Flow</h2>
          </div>

          <div className="bg-gray-50 rounded-xl p-5">
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
              <span className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg">
                Login Form
              </span>

              <ArrowDown size={18} className="text-gray-400" />

              <span className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg">
                dispatch(loginAction())
              </span>

              <ArrowDown size={18} className="text-gray-400" />

              <span className="px-3 py-2 bg-yellow-50 text-yellow-700 rounded-lg">
                POST /auth/login
              </span>

              <ArrowDown size={18} className="text-gray-400" />

              <span className="px-3 py-2 bg-green-50 text-green-700 rounded-lg">
                accessToken
              </span>

              <ArrowDown size={18} className="text-gray-400" />

              <span className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg">
                Redux State
              </span>
            </div>
          </div>
        </section>

        {/* JWT */}
        <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-5">
            <KeyRound className="text-yellow-600" size={23} />

            <h2 className="text-xl font-bold text-gray-900">6. JWT Token</h2>
          </div>

          <div className="bg-gray-900 rounded-xl p-5 overflow-x-auto">
            <pre className="text-sm text-gray-200">
              {`const token = localStorage.getItem("accessToken");

Authorization: Bearer <token>`}
            </pre>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            The frontend sends the access token to the backend so the backend
            can identify the authenticated user.
          </p>
        </section>

        {/* Success / Failure */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-green-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="text-green-600" size={23} />

              <h2 className="text-lg font-bold text-gray-900">
                Hydration Success
              </h2>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <p>✓ user gets user data</p>
              <p>✓ isAuthenticated = true</p>
              <p>✓ isLoading = false</p>
              <p>✓ Protected pages can render</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-red-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <XCircle className="text-red-500" size={23} />

              <h2 className="text-lg font-bold text-gray-900">
                Hydration Failed
              </h2>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <p>✕ user remains null</p>
              <p>✕ isAuthenticated = false</p>
              <p>✓ isLoading = false</p>
              <p>→ Redirect user to Login</p>
            </div>
          </div>
        </section>

        {/* Golden Rule */}
        <section className="bg-gradient-to-r from-[#2874f0] to-blue-600 rounded-2xl shadow-md p-7 text-white">
          <div className="flex items-center gap-3 mb-5">
            <Lightbulb size={25} />

            <h2 className="text-xl font-bold">Golden Rule to Remember</h2>
          </div>

          <div className="bg-white/10 rounded-xl p-5 space-y-3 text-sm sm:text-base">
            <p>
              <b>isLoading === true</b>
              <span className="mx-2">→</span>
              Show Loading
            </p>

            <p>
              <b>isLoading === false</b> && <b>isAuthenticated === true</b>
              <span className="mx-2">→</span>
              Show Home / Protected Page
            </p>

            <p>
              <b>isLoading === false</b> && <b>isAuthenticated === false</b>
              <span className="mx-2">→</span>
              Go to Login
            </p>
          </div>
        </section>

        {/* Quick Revision */}
        <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-5">
            <Code2 className="text-[#2874f0]" size={23} />

            <h2 className="text-xl font-bold text-gray-900">Quick Revision</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <div className="p-4 bg-gray-50 rounded-lg">
              <b>createAsyncThunk</b>
              <p className="text-gray-500 mt-1">
                Handles asynchronous API operations.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <b>pending</b>
              <p className="text-gray-500 mt-1">
                Request is currently running.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <b>fulfilled</b>
              <p className="text-gray-500 mt-1">
                API request completed successfully.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <b>rejected</b>
              <p className="text-gray-500 mt-1">API request failed.</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <b>hydration()</b>
              <p className="text-gray-500 mt-1">
                Checks whether the saved token is still valid.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <b>localStorage</b>
              <p className="text-gray-500 mt-1">
                Stores the access token on the client.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
