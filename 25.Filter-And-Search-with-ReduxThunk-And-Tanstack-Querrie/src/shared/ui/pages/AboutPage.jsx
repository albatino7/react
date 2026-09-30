import React from "react";
import {
  ShieldCheck,
  Database,
  Search,
  Filter,
  Zap,
  GitBranch,
  Server,
  UserCheck,
  KeyRound,
  RefreshCw,
  Layers3,
  Code2,
  Workflow,
  CheckCircle2,
  ArrowRight,
  FileCode2,
  Globe,
  Clock3,
  PackageSearch,
  BrainCircuit,
} from "lucide-react";

const AboutPage = () => {
  const sections = [
    {
      icon: GitBranch,
      title: "Redux Toolkit + Redux Thunk",
      color: "blue",
      description:
        "Redux is used to manage global application state. createAsyncThunk is used when Redux needs to perform an asynchronous API call.",
      points: [
        "createAsyncThunk handles asynchronous operations.",
        "It can call an API and then dispatch the result automatically.",
        "The thunk has three important states: pending, fulfilled and rejected.",
        "The slice updates Redux state according to the API result.",
        "Components use useDispatch() to dispatch actions.",
        "Components use useSelector() to read Redux state.",
      ],
      flow: "Component → dispatch(thunk) → API → fulfilled/rejected → Redux Store → Component",
    },

    {
      icon: ShieldCheck,
      title: "Authentication",
      color: "green",
      description:
        "Authentication checks whether a user is logged in and controls which part of the application the user can access.",
      points: [
        "User registers with name, email and password.",
        "User logs in with email and password.",
        "Backend verifies the credentials.",
        "Backend creates an access token.",
        "The frontend stores the access token.",
        "Redux can store the authenticated user information.",
        "Protected routes allow access only to authenticated users.",
        "Logout removes the token and clears the Redux user state.",
      ],
      flow: "Login → API → Access Token → Redux User → Protected Route → Main Application",
    },

    {
      icon: KeyRound,
      title: "Access Token & Authentication State",
      color: "purple",
      description:
        "The access token proves that the frontend has authenticated successfully with the backend.",
      points: [
        "The token is sent with protected API requests.",
        "The backend verifies the token.",
        "If the token is valid, the request can continue.",
        "Redux keeps user information available to components.",
        "On page refresh, authentication state can be hydrated again.",
        "On logout, the token and Redux authentication state are cleared.",
      ],
      flow: "Token → Request → Backend Authentication → Protected Resource",
    },

    {
      icon: Database,
      title: "API Calls",
      color: "orange",
      description:
        "API functions are kept separately from components. This keeps the React components clean and makes API logic reusable.",
      points: [
        "Axios is used to communicate with the backend/API.",
        "API functions contain GET, POST, PUT and DELETE requests.",
        "The API function receives required data.",
        "Axios sends the HTTP request.",
        "The API returns response.data.",
        "Hooks or Redux use the returned data.",
        "Components display the final data.",
      ],
      flow: "Component → Hook/Thunk → API Function → Axios → Server → Response",
    },

    {
      icon: Layers3,
      title: "Feature-Based Structure",
      color: "pink",
      description:
        "Feature-based architecture keeps related files together according to application features instead of putting everything into one large folder.",
      points: [
        "Each feature can have its own components.",
        "Each feature can have its own API functions.",
        "Each feature can have its own hooks.",
        "Each feature can have its own Redux slice.",
        "Product-related code stays inside the product feature.",
        "Authentication-related code stays inside the authentication feature.",
        "This makes a large application easier to maintain.",
      ],
      flow: "Feature → Components + Hooks + API + Redux + Pages",
    },

    {
      icon: Zap,
      title: "TanStack Query",
      color: "cyan",
      description:
        "TanStack Query manages server state. It handles fetching, caching and updating API data without requiring everything to be stored in Redux.",
      points: [
        "useQuery is used for GET requests.",
        "queryKey identifies a particular query.",
        "queryFn contains the function that calls the API.",
        "isPending tells us when the first data is loading.",
        "The returned data is available to the component.",
        "TanStack Query caches query results.",
        "Changing the queryKey can trigger another API request.",
      ],
      flow: "Component → useQuery → queryFn → API → Server → Cache → Component",
    },

    {
      icon: Search,
      title: "Product Search",
      color: "yellow",
      description:
        "The search feature allows users to find products by typing a search value. Debouncing prevents an API request for every single keystroke.",
      points: [
        "searchData stores what the user types.",
        "useEffect watches searchData.",
        "A timeout waits for the user to stop typing.",
        "After the delay, debounceData is updated.",
        "TanStack Query uses debounceData in its queryKey.",
        "The search API is called.",
        "Search results are displayed as ProductCard components.",
      ],
      flow: "Input → searchData → 1 Second Delay → debounceData → Search API → Results",
    },

    {
      icon: Filter,
      title: "Category Filter",
      color: "indigo",
      description:
        "The category filter changes the product API URL according to the selected category.",
      points: [
        "categoriesData stores the selected category.",
        "The category select updates categoriesData.",
        "categoriesData is included in the queryKey.",
        "When the category changes, the queryKey changes.",
        "TanStack Query runs the query again.",
        "The API calls products/category/{category}.",
        "The new products are displayed.",
        "Selecting All Categories uses the normal /products API.",
      ],
      flow: "Select Category → State Change → Query Key Change → API → Category Products",
    },
  ];

  const colorClasses = {
    blue: {
      icon: "bg-blue-100 text-blue-600",
      border: "hover:border-blue-300",
    },
    green: {
      icon: "bg-green-100 text-green-600",
      border: "hover:border-green-300",
    },
    purple: {
      icon: "bg-purple-100 text-purple-600",
      border: "hover:border-purple-300",
    },
    orange: {
      icon: "bg-orange-100 text-orange-600",
      border: "hover:border-orange-300",
    },
    pink: {
      icon: "bg-pink-100 text-pink-600",
      border: "hover:border-pink-300",
    },
    cyan: {
      icon: "bg-cyan-100 text-cyan-600",
      border: "hover:border-cyan-300",
    },
    yellow: {
      icon: "bg-yellow-100 text-yellow-600",
      border: "hover:border-yellow-300",
    },
    indigo: {
      icon: "bg-indigo-100 text-indigo-600",
      border: "hover:border-indigo-300",
    },
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2874f0] via-blue-600 to-indigo-700 px-6 py-16 text-white sm:px-10 lg:px-16">
        {/* Animated Background */}
        <div className="absolute -right-20 -top-20 h-72 w-72 animate-pulse rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 animate-pulse rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-2xl bg-white/15 p-3 backdrop-blur-sm">
              <BrainCircuit size={30} />
            </div>

            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
              ShopKart Developer Notes
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            How My React Application
            <span className="block text-blue-100">Works Internally</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-blue-100 sm:text-lg">
            A complete revision guide for understanding Redux Toolkit, Redux
            Thunk, TanStack Query, API calls, authentication, feature-based
            architecture, search and category filtering.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "React",
              "Redux Toolkit",
              "TanStack Query",
              "Axios",
              "Authentication",
              "API",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Notes */}
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Architecture Overview */}
        <section className="mb-12 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-8 flex items-center gap-4">
            <div className="rounded-2xl bg-blue-100 p-3 text-blue-600">
              <Workflow size={28} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Application Architecture
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Understand the complete data flow first.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 text-center md:flex-row">
            {[
              {
                icon: Code2,
                title: "React Component",
              },
              {
                icon: Server,
                title: "Hook / Redux",
              },
              {
                icon: Globe,
                title: "API Function",
              },
              {
                icon: Database,
                title: "Backend / Server",
              },
              {
                icon: PackageSearch,
                title: "UI Data",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <React.Fragment key={item.title}>
                  <div className="group w-full rounded-2xl border border-gray-200 bg-gray-50 p-5 transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:bg-blue-50 md:w-40">
                    <Icon
                      size={25}
                      className="mx-auto text-[#2874f0] transition duration-300 group-hover:scale-125"
                    />

                    <p className="mt-3 text-sm font-semibold text-gray-700">
                      {item.title}
                    </p>
                  </div>

                  {index !== 4 && (
                    <ArrowRight
                      className="hidden text-gray-400 md:block"
                      size={20}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </section>

        {/* Revision Cards */}
        <div className="space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const colors = colorClasses[section.color];

            return (
              <section
                key={section.title}
                className={`group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${colors.border}`}
              >
                {/* Heading */}
                <div className="flex items-start gap-4">
                  <div
                    className={`shrink-0 rounded-2xl p-3 transition duration-500 group-hover:rotate-6 group-hover:scale-110 ${colors.icon}`}
                  >
                    <Icon size={27} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-500">
                        NOTE {String(index + 1).padStart(2, "0")}
                      </span>

                      <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                        {section.title}
                      </h2>
                    </div>

                    <p className="mt-3 leading-7 text-gray-600">
                      {section.description}
                    </p>
                  </div>
                </div>

                {/* Important Points */}
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {section.points.map((point) => (
                    <div
                      key={point}
                      className="flex gap-3 rounded-xl bg-gray-50 p-4 transition duration-300 hover:bg-blue-50"
                    >
                      <CheckCircle2
                        size={19}
                        className="mt-0.5 shrink-0 text-green-500"
                      />

                      <p className="text-sm leading-6 text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>

                {/* Flow */}
                <div className="mt-6 rounded-2xl border border-dashed border-blue-200 bg-blue-50/60 p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <RefreshCw size={18} className="text-[#2874f0]" />

                    <span className="text-sm font-bold text-blue-700">
                      Data Flow
                    </span>
                  </div>

                  <p className="overflow-x-auto text-sm font-medium leading-7 text-gray-700">
                    {section.flow}
                  </p>
                </div>
              </section>
            );
          })}
        </div>

        {/* Search Flow */}
        <section className="mt-12 rounded-3xl bg-gray-900 p-6 text-white shadow-xl sm:p-8">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-white/10 p-3">
              <Search size={27} />
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Search Feature — Easy Revision
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                Why debounce is used?
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {[
              ["01", "User Types", "searchData"],
              ["02", "Wait 1 Second", "debounce"],
              ["03", "Query Key", "searchProduct"],
              ["04", "API Call", "/products/search"],
              ["05", "Results", "ProductCard"],
            ].map(([number, title, code]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-2 hover:bg-white/10"
              >
                <span className="text-xs font-bold text-blue-400">
                  {number}
                </span>

                <h3 className="mt-3 font-bold">{title}</h3>

                <code className="mt-2 block break-all text-xs text-gray-400">
                  {code}
                </code>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-yellow-400/10 p-5 text-sm leading-6 text-yellow-200">
            <Clock3 className="mt-0.5 shrink-0" size={20} />

            <p>
              Debouncing prevents the application from sending an API request
              every time the user presses a key. The application waits until the
              user stops typing for the configured delay.
            </p>
          </div>
        </section>

        {/* Category Flow */}
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-indigo-100 p-3 text-indigo-600">
              <Filter size={27} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Category Filter — Easy Revision
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Category changes the TanStack Query key.
              </p>
            </div>
          </div>

          <div className="mt-8 overflow-x-auto">
            <div className="flex min-w-[700px] items-center justify-between gap-3">
              {[
                ["Select", "category"],
                ["State", "categoriesData"],
                ["Query Key", "getallproduct + category"],
                ["API", "products/category/..."],
                ["UI", "ProductCard"],
              ].map(([title, value], index) => (
                <React.Fragment key={title}>
                  <div className="w-32 rounded-2xl border border-gray-200 bg-gray-50 p-4 text-center transition duration-300 hover:-translate-y-2 hover:border-indigo-300">
                    <p className="text-xs font-bold text-indigo-500">{title}</p>

                    <p className="mt-2 break-words text-xs font-semibold text-gray-700">
                      {value}
                    </p>
                  </div>

                  {index !== 4 && (
                    <ArrowRight size={18} className="shrink-0 text-gray-400" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Revision */}
        <section className="mt-12 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white shadow-xl sm:p-8">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-white/10 p-3">
              <FileCode2 size={27} />
            </div>

            <div>
              <h2 className="text-2xl font-bold">Quick Interview Revision</h2>

              <p className="mt-1 text-sm text-blue-100">
                Remember these differences.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
              <h3 className="font-bold">Redux Toolkit</h3>
              <p className="mt-2 text-sm leading-6 text-blue-100">
                Mainly useful for global client-side state such as user,
                authentication state and other application state.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
              <h3 className="font-bold">Redux Thunk</h3>
              <p className="mt-2 text-sm leading-6 text-blue-100">
                Helps Redux perform asynchronous logic such as API requests.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
              <h3 className="font-bold">TanStack Query</h3>
              <p className="mt-2 text-sm leading-6 text-blue-100">
                Mainly handles server state, fetching, caching and
                synchronization of API data.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
              <h3 className="font-bold">Axios</h3>
              <p className="mt-2 text-sm leading-6 text-blue-100">
                Sends HTTP requests to APIs and returns the server response.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
              <h3 className="font-bold">Feature Based</h3>
              <p className="mt-2 text-sm leading-6 text-blue-100">
                Organizes code according to features such as auth, product, cart
                and user.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
              <h3 className="font-bold">Debounce</h3>
              <p className="mt-2 text-sm leading-6 text-blue-100">
                Delays an action until the user stops typing for a specified
                amount of time.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <div className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-gray-500">
          <UserCheck size={18} className="text-[#2874f0]" />
          <span>Built as a personal MERN revision guide for ShopKart.</span>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
