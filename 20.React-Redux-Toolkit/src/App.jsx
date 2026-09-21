import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./features/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((store) => store.counterReducer);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-4">
            ⚡ Redux Toolkit
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Redux Counter
          </h1>

          <p className="text-slate-400 mt-3">
            A simple example of global state management using Redux Toolkit
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
          {/* Counter */}
          <div className="text-center py-8">
            <p className="text-sm text-slate-400 uppercase tracking-widest">
              Current Count
            </p>

            <h2 className="text-7xl sm:text-8xl font-bold mt-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {count}
            </h2>

            <p className="text-slate-500 mt-3">
              Value stored inside Redux global state
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => dispatch(increase({ name: "atul" }))}
              className="flex-1 sm:flex-none px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 active:scale-95 transition font-semibold"
            >
              + Increment
            </button>

            <button
              onClick={() => dispatch(decrease())}
              className="flex-1 sm:flex-none px-8 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-95 transition font-semibold border border-slate-700"
            >
              − Decrement
            </button>
          </div>

          {/* Redux Flow */}
          <div className="mt-10 pt-8 border-t border-slate-800">
            <h3 className="text-lg font-semibold mb-5">
              How Redux Toolkit is working
            </h3>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-2xl mb-3">🎯</div>
                <h4 className="font-semibold">Dispatch</h4>
                <p className="text-sm text-slate-400 mt-2">
                  Button dispatches an action like{" "}
                  <code className="text-purple-300">increase()</code>
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-2xl mb-3">⚙️</div>
                <h4 className="font-semibold">Reducer</h4>
                <p className="text-sm text-slate-400 mt-2">
                  Reducer receives the action and updates the state.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-2xl mb-3">🔄</div>
                <h4 className="font-semibold">useSelector</h4>
                <p className="text-sm text-slate-400 mt-2">
                  Component reads the latest Redux state value.
                </p>
              </div>
            </div>
          </div>

          {/* Code Flow */}
          <div className="mt-8 p-5 rounded-2xl bg-black/30 border border-slate-800">
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">
              Redux Flow
            </p>

            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="px-3 py-2 rounded-lg bg-purple-500/10 text-purple-300">
                Button
              </span>

              <span className="text-slate-600">→</span>

              <span className="px-3 py-2 rounded-lg bg-blue-500/10 text-blue-300">
                dispatch()
              </span>

              <span className="text-slate-600">→</span>

              <span className="px-3 py-2 rounded-lg bg-green-500/10 text-green-300">
                Reducer
              </span>

              <span className="text-slate-600">→</span>

              <span className="px-3 py-2 rounded-lg bg-orange-500/10 text-orange-300">
                Store
              </span>

              <span className="text-slate-600">→</span>

              <span className="px-3 py-2 rounded-lg bg-pink-500/10 text-pink-300">
                useSelector()
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-slate-600 text-sm mt-6">
          Learning Redux Toolkit • React + Redux
        </p>
      </div>
    </div>
  );
};

export default App;
