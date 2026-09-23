import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseCount,
  decreaseCount,
  increaseByValue,
} from "./features/countSlices.jsx";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const { count } = useSelector((store) => store.counter);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-sm text-blue-400 font-medium mb-2">
            REDUX TOOLKIT PRACTICE
          </p>

          <h1 className="text-4xl font-bold mb-3">Counter App</h1>

          <p className="text-slate-400">
            Simple Redux Toolkit counter with easy revision notes
          </p>
        </div>

        {/* Counter Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
          {/* Current Count */}
          <div className="text-center mb-8">
            <p className="text-sm text-slate-400 mb-2">Current Count</p>

            <h2 className="text-6xl font-bold text-blue-400">{count}</h2>
          </div>

          {/* Increase / Decrease */}
          <div className="flex gap-3 mb-8">
            <button
              onClick={() => dispatch(increaseCount())}
              className="flex-1 bg-blue-600 hover:bg-blue-500 transition rounded-xl py-3 font-semibold"
            >
              + Increase
            </button>

            <button
              onClick={() => dispatch(decreaseCount())}
              className="flex-1 bg-slate-700 hover:bg-slate-600 transition rounded-xl py-3 font-semibold"
            >
              − Decrease
            </button>
          </div>

          {/* Increase By Value */}
          <div className="border-t border-slate-800 pt-7">
            <h3 className="text-lg font-semibold mb-1">Increase By Value</h3>

            <p className="text-sm text-slate-400 mb-4">
              Enter a number and add it to the current count.
            </p>

            <div className="flex gap-3">
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter number..."
                className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
              />

              <button
                onClick={() => dispatch(increaseByValue(Number(inputValue)))}
                className="bg-emerald-600 hover:bg-emerald-500 transition rounded-xl px-6 py-3 font-semibold"
              >
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Easy Notes */}
        <div className="mt-6 bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-5">Redux Toolkit — Easy Notes</h2>

          <div className="space-y-4 text-sm">
            <div>
              <p className="text-blue-400 font-semibold">1. useSelector()</p>

              <p className="text-slate-400 mt-1">
                Redux store se data read karne ke liye useSelector use hota hai.
              </p>

              <code className="block mt-2 bg-slate-800 rounded-lg p-3 text-slate-300">
                const &#123; count &#125; = useSelector( (store) =&gt;
                store.counter );
              </code>
            </div>

            <div>
              <p className="text-blue-400 font-semibold">2. useDispatch()</p>

              <p className="text-slate-400 mt-1">
                Action ko Redux store tak bhejne ke liye dispatch use hota hai.
              </p>

              <code className="block mt-2 bg-slate-800 rounded-lg p-3 text-slate-300">
                dispatch(increaseCount());
              </code>
            </div>

            <div>
              <p className="text-blue-400 font-semibold">3. Action</p>

              <p className="text-slate-400 mt-1">
                Action batata hai ki Redux mein kya operation karna hai.
              </p>

              <code className="block mt-2 bg-slate-800 rounded-lg p-3 text-slate-300">
                increaseCount()
              </code>
            </div>

            <div>
              <p className="text-blue-400 font-semibold">4. Payload</p>

              <p className="text-slate-400 mt-1">
                Extra data bhejna ho to payload use karte hain.
              </p>

              <code className="block mt-2 bg-slate-800 rounded-lg p-3 text-slate-300">
                dispatch(increaseByValue(10))
              </code>
            </div>

            <div>
              <p className="text-blue-400 font-semibold">5. Complete Flow</p>

              <p className="text-slate-400 mt-2">
                Button → dispatch → action → reducer → store update → UI
                re-render
              </p>
            </div>
          </div>
        </div>

        {/* Quick Revision */}
        <div className="mt-6 text-center text-sm text-slate-500">
          <p>
            Remember:
            <span className="text-slate-300"> useSelector = Read Data</span>
            {" • "}
            <span className="text-slate-300">useDispatch = Send Action</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
