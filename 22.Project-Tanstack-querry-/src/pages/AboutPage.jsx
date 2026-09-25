import React from "react";
import {
  BookOpen,
  Layers,
  Route,
  ShieldCheck,
  Database,
  Search,
  Server,
  RefreshCw,
  Component,
  Zap,
  Code2,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

const AboutPage = () => {
  const topics = [
    {
      icon: Layers,
      title: "Redux Toolkit",
      color: "text-purple-600",
      bg: "bg-purple-50",
      description:
        "Used Redux Toolkit to keep important application state in one central store.",
      points: [
        "createSlice is used to create state and reducers.",
        "useDispatch is used to send an action.",
        "useSelector is used to read data from Redux.",
        "Auth user data is stored in Redux.",
        "Redux state is hydrated from localStorage when the app starts.",
      ],
    },
    {
      icon: Route,
      title: "React Router",
      color: "text-blue-600",
      bg: "bg-blue-50",
      description:
        "Used React Router to create multiple pages without doing a full browser reload.",
      points: [
        "createBrowserRouter creates the route configuration.",
        "RouterProvider provides the router to the application.",
        "Outlet renders child routes.",
        "Navigate is used for programmatic redirects.",
        "Link and NavLink are used for SPA navigation.",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Protected Routes",
      color: "text-green-600",
      bg: "bg-green-50",
      description:
        "Used protected route components to control which pages logged-in and logged-out users can access.",
      points: [
        "PublicProtected handles public pages.",
        "MainProtected handles protected pages.",
        "Logged-in users are redirected to /main.",
        "Unauthenticated users are redirected to /.",
        "Route guards should not perform side effects directly during render.",
      ],
    },
    {
      icon: Database,
      title: "TanStack Query",
      color: "text-red-600",
      bg: "bg-red-50",
      description:
        "Used TanStack Query to handle server data fetching and caching.",
      points: [
        "useQuery is used to fetch API data.",
        "queryKey identifies the query.",
        "queryFn contains the API function.",
        "isPending is used for loading state.",
        "error is used for API error handling.",
        "staleTime controls how long fetched data is considered fresh.",
      ],
    },
    {
      icon: Search,
      title: "Product Search",
      color: "text-orange-600",
      bg: "bg-orange-50",
      description:
        "Search functionality is kept separate from the TanStack Query implementation for easier learning and testing.",
      points: [
        "HomePage uses the custom product hook for search practice.",
        "Filter receives filterProduct through props.",
        "The input stores the user's search value.",
        "The search function uses JavaScript filter().",
        "Search returns products whose title contains the search text.",
      ],
    },
    {
      icon: Component,
      title: "Props & Component Communication",
      color: "text-pink-600",
      bg: "bg-pink-50",
      description:
        "Child components receive data or functions from their parent using props.",
      points: [
        "ProductPage owns the product query.",
        "Filter receives filterProduct as a prop.",
        "Filter does not create another product state.",
        "This keeps one source of truth for that particular flow.",
        "Props are useful for parent-to-child communication.",
      ],
    },
    {
      icon: RefreshCw,
      title: "Custom Hooks",
      color: "text-cyan-600",
      bg: "bg-cyan-50",
      description:
        "Custom hooks are used to reuse React logic, but they do not automatically create shared global state.",
      points: [
        "useProductForHomePage contains product/search logic.",
        "Calling the hook in two components creates separate state instances.",
        "A custom hook is mainly for reusing logic.",
        "Context or Redux is better when multiple components need the same shared state.",
      ],
    },
    {
      icon: Zap,
      title: "Why Two Product Implementations?",
      color: "text-yellow-600",
      bg: "bg-yellow-50",
      description:
        "The project intentionally keeps two implementations so different concepts can be practiced separately.",
      points: [
        "HomePage → custom hook + product search.",
        "ProductPage → TanStack Query implementation.",
        "This makes it easier to understand both approaches.",
        "TanStack Query manages server-state fetching.",
        "Search/filter logic is practiced separately.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-green-50 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 rounded-3xl border border-green-100 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green-100">
              <BookOpen size={32} className="text-green-600" />
            </div>

            <div>
              <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-green-600">
                Developer Notes
              </p>

              <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                My React Learning Notes
              </h1>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600 md:text-base">
                This page contains the important concepts used while building
                this project. The goal is simple: understand why something is
                used, not just memorize the syntax.
              </p>
            </div>
          </div>
        </div>

        {/* Architecture */}
        <div className="mb-10 rounded-3xl border border-green-100 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100">
              <Code2 size={22} className="text-green-600" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Current Project Structure
              </h2>

              <p className="text-sm text-gray-500">
                Different concepts are intentionally practiced separately.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-gray-900 p-5 font-mono text-sm leading-7 text-gray-200">
            <p>
              <span className="text-green-400">HomePage</span>
              {" → "}
              Custom Hook
              {" → "}
              Product Search
            </p>

            <p>
              <span className="text-blue-400">ProductPage</span>
              {" → "}
              TanStack Query
              {" → "}
              API Data
            </p>

            <p>
              <span className="text-purple-400">Auth</span>
              {" → "}
              Redux Toolkit
              {" → "}
              User State
            </p>

            <p>
              <span className="text-yellow-400">Router</span>
              {" → "}
              Protected Routes
              {" → "}
              Page Access
            </p>
          </div>

          <div className="mt-5 flex gap-3 rounded-2xl bg-green-50 p-4">
            <Lightbulb size={21} className="mt-0.5 shrink-0 text-green-600" />

            <p className="text-sm leading-6 text-gray-700">
              <strong>Learning idea:</strong> Instead of putting everything into
              one implementation, separate concepts when practicing. This makes
              it easier to understand what each library or pattern is actually
              doing.
            </p>
          </div>
        </div>

        {/* Topics */}
        <div className="grid gap-6 md:grid-cols-2">
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <div
                key={topic.title}
                className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${topic.bg}`}
                  >
                    <Icon size={24} className={topic.color} />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {topic.title}
                    </h2>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      {topic.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-gray-100 pt-5">
                  {topic.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-green-500"
                      />

                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Important Revision */}
        <div className="mt-10 rounded-3xl border border-green-200 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-5 flex items-center gap-3">
            <Server size={23} className="text-green-600" />

            <h2 className="text-xl font-bold text-gray-900">
              Important Revision
            </h2>
          </div>

          <div className="space-y-4 text-sm leading-7 text-gray-700">
            <div>
              <strong>Custom Hook:</strong> Reuses logic. Calling the same
              custom hook in different components normally gives separate state.
            </div>

            <div>
              <strong>Props:</strong> Used when a parent needs to give data or a
              function to a child component.
            </div>

            <div>
              <strong>Redux:</strong> Useful when application state needs to be
              accessed by many different components.
            </div>

            <div>
              <strong>TanStack Query:</strong> Mainly handles server state such
              as fetching, caching, loading, refetching, and errors.
            </div>

            <div>
              <strong>filter():</strong> Returns a new array containing the
              products that match the condition.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Build → Break → Understand → Fix → Revise
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
