import os from "os";
import { Worker } from "worker_threads";
import path from "path";

const myWorker = path.join(import.meta.dirname, "worker.js");
const availableCores = os.availableParallelism();
const INCREMENT_NUM = 10;

const performCalculations = async () => {
  const workers = [...Array(availableCores)].map((_, idx) => {
    return new Promise((resolve) => {
      const worker = new Worker(myWorker, { workerData: INCREMENT_NUM + idx });
      worker.on("message", (msg) => resolve({ status: "resolved", data: msg }));
      worker.on("error", () => resolve({ status: "error", data: null }));
    });
  });

  const out = await Promise.all(workers);
  console.log(out);
};

await performCalculations();
