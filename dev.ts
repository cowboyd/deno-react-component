import { evaluate, shift } from "https://deno.land/x/continuation@0.1.0/mod.ts";

evaluate(function*() {
  let watcher = Deno.watchFs("./app");
  console.log('watching ./app...');
  try {
    yield* shift<void>(function*(quit) {
      Deno.addSignalListener("SIGINT", quit);

      let iterator = watcher[Symbol.asyncIterator]();

      while (true) {
        let current = yield* shift<IteratorResult<Deno.FsEvent>>(function*(resume, reject) {
          iterator.next().then(resume, reject);
        });
        console.dir({ current });
        if (current.done) {
          break;
        }
      }
    });
  } finally {
    watcher.close()
  }
  console.log('exiting....');
})
