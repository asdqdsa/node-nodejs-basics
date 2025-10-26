import { fork } from "child_process";
import path from "path";

const target = path.join(import.meta.dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  fork(target, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["ls", "-l", "-a"]);
