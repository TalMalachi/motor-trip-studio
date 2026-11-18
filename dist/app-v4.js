(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __reflectGet = Reflect.get;
  var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __pow = Math.pow;
  var __defNormalProp = (obj, key, value2) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __publicField = (obj, key, value2) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value2);
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd = (obj, member, value2) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value2);
  var __privateSet = (obj, member, value2, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value2) : member.set(obj, value2), value2);
  var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
  var __privateWrapper = (obj, member, setter, getter) => ({
    set _(value2) {
      __privateSet(obj, member, value2, setter);
    },
    get _() {
      return __privateGet(obj, member, getter);
    }
  });
  var __superGet = (cls, obj, key) => __reflectGet(__getProtoOf(cls), key, obj);
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value2) => {
        try {
          step(generator.next(value2));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value2) => {
        try {
          step(generator.throw(value2));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  var __forAwait = (obj, it, method) => (it = obj[__knownSymbol("asyncIterator")]) ? it.call(obj) : (obj = obj[__knownSymbol("iterator")](), it = {}, method = (key, fn) => (fn = obj[key]) && (it[key] = (arg) => new Promise((yes, no, done) => (arg = fn.call(obj, arg), done = arg.done, Promise.resolve(arg.value).then((value2) => yes({ value: value2, done }), no)))), method("next"), method("return"), it);

  // node_modules/regenerator-runtime/runtime.js
  var require_runtime = __commonJS({
    "node_modules/regenerator-runtime/runtime.js"(exports, module) {
      var runtime = (function(exports2) {
        "use strict";
        var Op = Object.prototype;
        var hasOwn = Op.hasOwnProperty;
        var defineProperty = Object.defineProperty || function(obj, key, desc) {
          obj[key] = desc.value;
        };
        var undefined2;
        var $Symbol = typeof Symbol === "function" ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || "@@iterator";
        var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
        var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
        function define2(obj, key, value2) {
          Object.defineProperty(obj, key, {
            value: value2,
            enumerable: true,
            configurable: true,
            writable: true
          });
          return obj[key];
        }
        try {
          define2({}, "");
        } catch (err) {
          define2 = function(obj, key, value2) {
            return obj[key] = value2;
          };
        }
        function wrap(innerFn, outerFn, self2, tryLocsList) {
          var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
          var generator = Object.create(protoGenerator.prototype);
          var context = new Context(tryLocsList || []);
          defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self2, context) });
          return generator;
        }
        exports2.wrap = wrap;
        function tryCatch(fn, obj, arg) {
          try {
            return { type: "normal", arg: fn.call(obj, arg) };
          } catch (err) {
            return { type: "throw", arg: err };
          }
        }
        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed";
        var ContinueSentinel = {};
        function Generator() {
        }
        function GeneratorFunction() {
        }
        function GeneratorFunctionPrototype() {
        }
        var IteratorPrototype = {};
        define2(IteratorPrototype, iteratorSymbol, function() {
          return this;
        });
        var getProto = Object.getPrototypeOf;
        var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
          IteratorPrototype = NativeIteratorPrototype;
        }
        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        GeneratorFunction.prototype = GeneratorFunctionPrototype;
        defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
        defineProperty(
          GeneratorFunctionPrototype,
          "constructor",
          { value: GeneratorFunction, configurable: true }
        );
        GeneratorFunction.displayName = define2(
          GeneratorFunctionPrototype,
          toStringTagSymbol,
          "GeneratorFunction"
        );
        function defineIteratorMethods(prototype) {
          ["next", "throw", "return"].forEach(function(method) {
            define2(prototype, method, function(arg) {
              return this._invoke(method, arg);
            });
          });
        }
        exports2.isGeneratorFunction = function(genFun) {
          var ctor = typeof genFun === "function" && genFun.constructor;
          return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
        };
        exports2.mark = function(genFun) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
          } else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define2(genFun, toStringTagSymbol, "GeneratorFunction");
          }
          genFun.prototype = Object.create(Gp);
          return genFun;
        };
        exports2.awrap = function(arg) {
          return { __await: arg };
        };
        function AsyncIterator2(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") {
              reject(record.arg);
            } else {
              var result = record.arg;
              var value2 = result.value;
              if (value2 && typeof value2 === "object" && hasOwn.call(value2, "__await")) {
                return PromiseImpl.resolve(value2.__await).then(function(value3) {
                  invoke("next", value3, resolve, reject);
                }, function(err) {
                  invoke("throw", err, resolve, reject);
                });
              }
              return PromiseImpl.resolve(value2).then(function(unwrapped) {
                result.value = unwrapped;
                resolve(result);
              }, function(error) {
                return invoke("throw", error, resolve, reject);
              });
            }
          }
          var previousPromise;
          function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new PromiseImpl(function(resolve, reject) {
                invoke(method, arg, resolve, reject);
              });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(
              callInvokeWithMethodAndArg,
              // Avoid propagating failures to Promises returned by later
              // invocations of the iterator.
              callInvokeWithMethodAndArg
            ) : callInvokeWithMethodAndArg();
          }
          defineProperty(this, "_invoke", { value: enqueue });
        }
        defineIteratorMethods(AsyncIterator2.prototype);
        define2(AsyncIterator2.prototype, asyncIteratorSymbol, function() {
          return this;
        });
        exports2.AsyncIterator = AsyncIterator2;
        exports2.async = function(innerFn, outerFn, self2, tryLocsList, PromiseImpl) {
          if (PromiseImpl === void 0) PromiseImpl = Promise;
          var iter = new AsyncIterator2(
            wrap(innerFn, outerFn, self2, tryLocsList),
            PromiseImpl
          );
          return exports2.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
        };
        function makeInvokeMethod(innerFn, self2, context) {
          var state = GenStateSuspendedStart;
          return function invoke(method, arg) {
            if (state === GenStateExecuting) {
              throw new Error("Generator is already running");
            }
            if (state === GenStateCompleted) {
              if (method === "throw") {
                throw arg;
              }
              return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while (true) {
              var delegate = context.delegate;
              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);
                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }
              if (context.method === "next") {
                context.sent = context._sent = context.arg;
              } else if (context.method === "throw") {
                if (state === GenStateSuspendedStart) {
                  state = GenStateCompleted;
                  throw context.arg;
                }
                context.dispatchException(context.arg);
              } else if (context.method === "return") {
                context.abrupt("return", context.arg);
              }
              state = GenStateExecuting;
              var record = tryCatch(innerFn, self2, context);
              if (record.type === "normal") {
                state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                if (record.arg === ContinueSentinel) {
                  continue;
                }
                return {
                  value: record.arg,
                  done: context.done
                };
              } else if (record.type === "throw") {
                state = GenStateCompleted;
                context.method = "throw";
                context.arg = record.arg;
              }
            }
          };
        }
        function maybeInvokeDelegate(delegate, context) {
          var methodName = context.method;
          var method = delegate.iterator[methodName];
          if (method === undefined2) {
            context.delegate = null;
            if (methodName === "throw" && delegate.iterator["return"]) {
              context.method = "return";
              context.arg = undefined2;
              maybeInvokeDelegate(delegate, context);
              if (context.method === "throw") {
                return ContinueSentinel;
              }
            }
            if (methodName !== "return") {
              context.method = "throw";
              context.arg = new TypeError(
                "The iterator does not provide a '" + methodName + "' method"
              );
            }
            return ContinueSentinel;
          }
          var record = tryCatch(method, delegate.iterator, context.arg);
          if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
          }
          var info2 = record.arg;
          if (!info2) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
          }
          if (info2.done) {
            context[delegate.resultName] = info2.value;
            context.next = delegate.nextLoc;
            if (context.method !== "return") {
              context.method = "next";
              context.arg = undefined2;
            }
          } else {
            return info2;
          }
          context.delegate = null;
          return ContinueSentinel;
        }
        defineIteratorMethods(Gp);
        define2(Gp, toStringTagSymbol, "Generator");
        define2(Gp, iteratorSymbol, function() {
          return this;
        });
        define2(Gp, "toString", function() {
          return "[object Generator]";
        });
        function pushTryEntry(locs) {
          var entry = { tryLoc: locs[0] };
          if (1 in locs) {
            entry.catchLoc = locs[1];
          }
          if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
          }
          this.tryEntries.push(entry);
        }
        function resetTryEntry(entry) {
          var record = entry.completion || {};
          record.type = "normal";
          delete record.arg;
          entry.completion = record;
        }
        function Context(tryLocsList) {
          this.tryEntries = [{ tryLoc: "root" }];
          tryLocsList.forEach(pushTryEntry, this);
          this.reset(true);
        }
        exports2.keys = function(val) {
          var object = Object(val);
          var keys2 = [];
          for (var key in object) {
            keys2.push(key);
          }
          keys2.reverse();
          return function next() {
            while (keys2.length) {
              var key2 = keys2.pop();
              if (key2 in object) {
                next.value = key2;
                next.done = false;
                return next;
              }
            }
            next.done = true;
            return next;
          };
        };
        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) {
              return iteratorMethod.call(iterable);
            }
            if (typeof iterable.next === "function") {
              return iterable;
            }
            if (!isNaN(iterable.length)) {
              var i = -1, next = function next2() {
                while (++i < iterable.length) {
                  if (hasOwn.call(iterable, i)) {
                    next2.value = iterable[i];
                    next2.done = false;
                    return next2;
                  }
                }
                next2.value = undefined2;
                next2.done = true;
                return next2;
              };
              return next.next = next;
            }
          }
          return { next: doneResult };
        }
        exports2.values = values;
        function doneResult() {
          return { value: undefined2, done: true };
        }
        Context.prototype = {
          constructor: Context,
          reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            this.sent = this._sent = undefined2;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined2;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
              for (var name in this) {
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                  this[name] = undefined2;
                }
              }
            }
          },
          stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") {
              throw rootRecord.arg;
            }
            return this.rval;
          },
          dispatchException: function(exception) {
            if (this.done) {
              throw exception;
            }
            var context = this;
            function handle(loc, caught) {
              record.type = "throw";
              record.arg = exception;
              context.next = loc;
              if (caught) {
                context.method = "next";
                context.arg = undefined2;
              }
              return !!caught;
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              var record = entry.completion;
              if (entry.tryLoc === "root") {
                return handle("end");
              }
              if (entry.tryLoc <= this.prev) {
                var hasCatch = hasOwn.call(entry, "catchLoc");
                var hasFinally = hasOwn.call(entry, "finallyLoc");
                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  } else if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  }
                } else if (hasFinally) {
                  if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else {
                  throw new Error("try statement without catch or finally");
                }
              }
            }
          },
          abrupt: function(type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
              }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
              finallyEntry = null;
            }
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
              this.method = "next";
              this.next = finallyEntry.finallyLoc;
              return ContinueSentinel;
            }
            return this.complete(record);
          },
          complete: function(record, afterLoc) {
            if (record.type === "throw") {
              throw record.arg;
            }
            if (record.type === "break" || record.type === "continue") {
              this.next = record.arg;
            } else if (record.type === "return") {
              this.rval = this.arg = record.arg;
              this.method = "return";
              this.next = "end";
            } else if (record.type === "normal" && afterLoc) {
              this.next = afterLoc;
            }
            return ContinueSentinel;
          },
          finish: function(finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc);
                resetTryEntry(entry);
                return ContinueSentinel;
              }
            }
          },
          "catch": function(tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc === tryLoc) {
                var record = entry.completion;
                if (record.type === "throw") {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }
                return thrown;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
              iterator: values(iterable),
              resultName,
              nextLoc
            };
            if (this.method === "next") {
              this.arg = undefined2;
            }
            return ContinueSentinel;
          }
        };
        return exports2;
      })(
        // If this script is executing as a CommonJS module, use module.exports
        // as the regeneratorRuntime namespace. Otherwise create a new empty
        // object. Either way, the resulting object will be used to initialize
        // the regeneratorRuntime variable at the top of this file.
        typeof module === "object" ? module.exports : {}
      );
      try {
        regeneratorRuntime = runtime;
      } catch (accidentalStrictMode) {
        if (typeof globalThis === "object") {
          globalThis.regeneratorRuntime = runtime;
        } else {
          Function("r", "regeneratorRuntime = r")(runtime);
        }
      }
    }
  });

  // node_modules/tesseract.js/src/utils/getId.js
  var require_getId = __commonJS({
    "node_modules/tesseract.js/src/utils/getId.js"(exports, module) {
      "use strict";
      module.exports = (prefix, cnt) => `${prefix}-${cnt}-${Math.random().toString(16).slice(3, 8)}`;
    }
  });

  // node_modules/tesseract.js/src/createJob.js
  var require_createJob = __commonJS({
    "node_modules/tesseract.js/src/createJob.js"(exports, module) {
      "use strict";
      var getId = require_getId();
      var jobCounter = 0;
      module.exports = ({
        id: _id6,
        action: action2,
        payload = {}
      }) => {
        let id = _id6;
        if (typeof id === "undefined") {
          id = getId("Job", jobCounter);
          jobCounter += 1;
        }
        return {
          id,
          action: action2,
          payload
        };
      };
    }
  });

  // node_modules/tesseract.js/src/utils/log.js
  var require_log = __commonJS({
    "node_modules/tesseract.js/src/utils/log.js"(exports) {
      "use strict";
      var logging = false;
      exports.logging = logging;
      exports.setLogging = (_logging) => {
        logging = _logging;
      };
      exports.log = (...args) => logging ? console.log.apply(exports, args) : null;
    }
  });

  // node_modules/tesseract.js/src/createScheduler.js
  var require_createScheduler = __commonJS({
    "node_modules/tesseract.js/src/createScheduler.js"(exports, module) {
      "use strict";
      var createJob = require_createJob();
      var { log } = require_log();
      var getId = require_getId();
      var schedulerCounter = 0;
      module.exports = () => {
        const id = getId("Scheduler", schedulerCounter);
        const workers = {};
        const runningWorkers = {};
        let jobQueue = [];
        schedulerCounter += 1;
        const getQueueLen = () => jobQueue.length;
        const getNumWorkers = () => Object.keys(workers).length;
        const dequeue = () => {
          if (jobQueue.length !== 0) {
            const wIds = Object.keys(workers);
            for (let i = 0; i < wIds.length; i += 1) {
              if (typeof runningWorkers[wIds[i]] === "undefined") {
                jobQueue[0](workers[wIds[i]]);
                break;
              }
            }
          }
        };
        const queue = (action2, payload) => new Promise((resolve, reject) => {
          const job = createJob({ action: action2, payload });
          jobQueue.push((w) => __async(exports, null, function* () {
            jobQueue.shift();
            runningWorkers[w.id] = job;
            try {
              resolve(yield w[action2].apply(exports, [...payload, job.id]));
            } catch (err) {
              reject(err);
            } finally {
              delete runningWorkers[w.id];
              dequeue();
            }
          }));
          log(`[${id}]: Add ${job.id} to JobQueue`);
          log(`[${id}]: JobQueue length=${jobQueue.length}`);
          dequeue();
        });
        const addWorker = (w) => {
          workers[w.id] = w;
          log(`[${id}]: Add ${w.id}`);
          log(`[${id}]: Number of workers=${getNumWorkers()}`);
          dequeue();
          return w.id;
        };
        const addJob = (action2, ...payload) => __async(exports, null, function* () {
          if (getNumWorkers() === 0) {
            throw Error(`[${id}]: You need to have at least one worker before adding jobs`);
          }
          return queue(action2, payload);
        });
        const terminate = () => __async(exports, null, function* () {
          Object.keys(workers).forEach((wid) => __async(exports, null, function* () {
            yield workers[wid].terminate();
          }));
          jobQueue = [];
        });
        return {
          addWorker,
          addJob,
          terminate,
          getQueueLen,
          getNumWorkers
        };
      };
    }
  });

  // node_modules/tesseract.js/src/utils/getEnvironment.js
  var require_getEnvironment = __commonJS({
    "node_modules/tesseract.js/src/utils/getEnvironment.js"(exports, module) {
      "use strict";
      module.exports = (key) => {
        const env = {};
        if (typeof WorkerGlobalScope !== "undefined") {
          env.type = "webworker";
        } else if (typeof document === "object") {
          env.type = "browser";
        } else if (typeof process === "object" && typeof __require === "function") {
          env.type = "node";
        }
        if (typeof key === "undefined") {
          return env;
        }
        return env[key];
      };
    }
  });

  // node_modules/tesseract.js/src/utils/resolvePaths.js
  var require_resolvePaths = __commonJS({
    "node_modules/tesseract.js/src/utils/resolvePaths.js"(exports, module) {
      "use strict";
      var isBrowser2 = require_getEnvironment()("type") === "browser";
      var resolveURL = isBrowser2 ? (s) => new URL(s, window.location.href).href : (s) => s;
      module.exports = (options) => {
        const opts = __spreadValues({}, options);
        ["corePath", "workerPath", "langPath"].forEach((key) => {
          if (options[key]) {
            opts[key] = resolveURL(opts[key]);
          }
        });
        return opts;
      };
    }
  });

  // node_modules/tesseract.js/src/constants/OEM.js
  var require_OEM = __commonJS({
    "node_modules/tesseract.js/src/constants/OEM.js"(exports, module) {
      "use strict";
      module.exports = {
        TESSERACT_ONLY: 0,
        LSTM_ONLY: 1,
        TESSERACT_LSTM_COMBINED: 2,
        DEFAULT: 3
      };
    }
  });

  // node_modules/tesseract.js/package.json
  var require_package = __commonJS({
    "node_modules/tesseract.js/package.json"(exports, module) {
      module.exports = {
        name: "tesseract.js",
        version: "7.0.0",
        description: "Pure Javascript Multilingual OCR",
        main: "src/index.js",
        type: "commonjs",
        types: "src/index.d.ts",
        unpkg: "dist/tesseract.min.js",
        jsdelivr: "dist/tesseract.min.js",
        scripts: {
          start: "node scripts/server.js",
          build: "rimraf dist && webpack --config scripts/webpack.config.prod.js && rollup -c scripts/rollup.esm.mjs",
          "profile:tesseract": "webpack-bundle-analyzer dist/tesseract-stats.json",
          "profile:worker": "webpack-bundle-analyzer dist/worker-stats.json",
          prepublishOnly: "npm run build",
          wait: "rimraf dist && wait-on http://localhost:3000/dist/tesseract.min.js",
          test: "npm-run-all -p -r start test:all",
          "test:all": "npm-run-all wait test:browser test:node:all",
          "test:browser": "karma start karma.conf.js",
          "test:node": "nyc mocha --exit --bail --require ./scripts/test-helper.mjs",
          "test:node:all": "npm run test:node -- ./tests/*.test.mjs",
          lint: "eslint src",
          "lint:fix": "eslint --fix src",
          postinstall: "opencollective-postinstall || true"
        },
        browser: {
          "./src/worker/node/index.js": "./src/worker/browser/index.js"
        },
        author: "",
        contributors: [
          "jeromewu"
        ],
        license: "Apache-2.0",
        devDependencies: {
          "@babel/core": "^7.21.4",
          "@babel/eslint-parser": "^7.21.3",
          "@babel/preset-env": "^7.21.4",
          "@rollup/plugin-commonjs": "^24.1.0",
          acorn: "^8.8.2",
          "babel-loader": "^9.1.2",
          buffer: "^6.0.3",
          cors: "^2.8.5",
          eslint: "^7.32.0",
          "eslint-config-airbnb-base": "^14.2.1",
          "eslint-plugin-import": "^2.27.5",
          "expect.js": "^0.3.1",
          express: "^4.18.2",
          mocha: "^10.2.0",
          "npm-run-all": "^4.1.5",
          karma: "^6.4.2",
          "karma-chrome-launcher": "^3.2.0",
          "karma-firefox-launcher": "^2.1.2",
          "karma-mocha": "^2.0.1",
          "karma-webpack": "^5.0.0",
          nyc: "^15.1.0",
          rimraf: "^5.0.0",
          rollup: "^3.20.7",
          "wait-on": "^7.0.1",
          webpack: "^5.79.0",
          "webpack-bundle-analyzer": "^4.8.0",
          "webpack-cli": "^5.0.1",
          "webpack-dev-middleware": "^6.0.2",
          "rollup-plugin-sourcemaps": "^0.6.3"
        },
        dependencies: {
          "bmp-js": "^0.1.0",
          "idb-keyval": "^6.2.0",
          "is-url": "^1.2.4",
          "node-fetch": "^2.6.9",
          "opencollective-postinstall": "^2.0.3",
          "regenerator-runtime": "^0.13.3",
          "tesseract.js-core": "^7.0.0",
          "wasm-feature-detect": "^1.8.0",
          zlibjs: "^0.3.1"
        },
        overrides: {
          "@rollup/pluginutils": "^5.0.2"
        },
        repository: {
          type: "git",
          url: "https://github.com/naptha/tesseract.js.git"
        },
        bugs: {
          url: "https://github.com/naptha/tesseract.js/issues"
        },
        homepage: "https://github.com/naptha/tesseract.js",
        collective: {
          type: "opencollective",
          url: "https://opencollective.com/tesseractjs"
        }
      };
    }
  });

  // node_modules/tesseract.js/src/constants/defaultOptions.js
  var require_defaultOptions = __commonJS({
    "node_modules/tesseract.js/src/constants/defaultOptions.js"(exports, module) {
      "use strict";
      module.exports = {
        /*
         * Use BlobURL for worker script by default
         * TODO: remove this option
         *
         */
        workerBlobURL: true,
        logger: () => {
        }
      };
    }
  });

  // node_modules/tesseract.js/src/worker/browser/defaultOptions.js
  var require_defaultOptions2 = __commonJS({
    "node_modules/tesseract.js/src/worker/browser/defaultOptions.js"(exports, module) {
      "use strict";
      var version5 = require_package().version;
      var defaultOptions = require_defaultOptions();
      module.exports = __spreadProps(__spreadValues({}, defaultOptions), {
        workerPath: `https://cdn.jsdelivr.net/npm/tesseract.js@v${version5}/dist/worker.min.js`
      });
    }
  });

  // node_modules/tesseract.js/src/worker/browser/spawnWorker.js
  var require_spawnWorker = __commonJS({
    "node_modules/tesseract.js/src/worker/browser/spawnWorker.js"(exports, module) {
      "use strict";
      module.exports = ({ workerPath, workerBlobURL }) => {
        let worker;
        if (Blob && URL && workerBlobURL) {
          const blob = new Blob([`importScripts("${workerPath}");`], {
            type: "application/javascript"
          });
          worker = new Worker(URL.createObjectURL(blob));
        } else {
          worker = new Worker(workerPath);
        }
        return worker;
      };
    }
  });

  // node_modules/tesseract.js/src/worker/browser/terminateWorker.js
  var require_terminateWorker = __commonJS({
    "node_modules/tesseract.js/src/worker/browser/terminateWorker.js"(exports, module) {
      "use strict";
      module.exports = (worker) => {
        worker.terminate();
      };
    }
  });

  // node_modules/tesseract.js/src/worker/browser/onMessage.js
  var require_onMessage = __commonJS({
    "node_modules/tesseract.js/src/worker/browser/onMessage.js"(exports, module) {
      "use strict";
      module.exports = (worker, handler) => {
        worker.onmessage = ({ data }) => {
          handler(data);
        };
      };
    }
  });

  // node_modules/tesseract.js/src/worker/browser/send.js
  var require_send = __commonJS({
    "node_modules/tesseract.js/src/worker/browser/send.js"(exports, module) {
      "use strict";
      module.exports = (worker, packet) => __async(null, null, function* () {
        worker.postMessage(packet);
      });
    }
  });

  // node_modules/tesseract.js/src/worker/browser/loadImage.js
  var require_loadImage = __commonJS({
    "node_modules/tesseract.js/src/worker/browser/loadImage.js"(exports, module) {
      "use strict";
      var readFromBlobOrFile = (blob) => new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = ({ target: { error: { code } } }) => {
          reject(Error(`File could not be read! Code=${code}`));
        };
        fileReader.readAsArrayBuffer(blob);
      });
      var loadImage = (image) => __async(null, null, function* () {
        let data = image;
        if (typeof image === "undefined") {
          return "undefined";
        }
        if (typeof image === "string") {
          if (/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(image)) {
            data = atob(image.split(",")[1]).split("").map((c) => c.charCodeAt(0));
          } else {
            const resp = yield fetch(image);
            data = yield resp.arrayBuffer();
          }
        } else if (typeof HTMLElement !== "undefined" && image instanceof HTMLElement) {
          if (image.tagName === "IMG") {
            data = yield loadImage(image.src);
          }
          if (image.tagName === "VIDEO") {
            data = yield loadImage(image.poster);
          }
          if (image.tagName === "CANVAS") {
            yield new Promise((resolve) => {
              image.toBlob((blob) => __async(null, null, function* () {
                data = yield readFromBlobOrFile(blob);
                resolve();
              }));
            });
          }
        } else if (typeof OffscreenCanvas !== "undefined" && image instanceof OffscreenCanvas) {
          const blob = yield image.convertToBlob();
          data = yield readFromBlobOrFile(blob);
        } else if (image instanceof File || image instanceof Blob) {
          data = yield readFromBlobOrFile(image);
        }
        return new Uint8Array(data);
      });
      module.exports = loadImage;
    }
  });

  // node_modules/tesseract.js/src/worker/browser/index.js
  var require_browser = __commonJS({
    "node_modules/tesseract.js/src/worker/browser/index.js"(exports, module) {
      "use strict";
      var defaultOptions = require_defaultOptions2();
      var spawnWorker = require_spawnWorker();
      var terminateWorker = require_terminateWorker();
      var onMessage = require_onMessage();
      var send = require_send();
      var loadImage = require_loadImage();
      module.exports = {
        defaultOptions,
        spawnWorker,
        terminateWorker,
        onMessage,
        send,
        loadImage
      };
    }
  });

  // node_modules/tesseract.js/src/createWorker.js
  var require_createWorker = __commonJS({
    "node_modules/tesseract.js/src/createWorker.js"(exports, module) {
      "use strict";
      var resolvePaths = require_resolvePaths();
      var createJob = require_createJob();
      var { log } = require_log();
      var getId = require_getId();
      var OEM = require_OEM();
      var {
        defaultOptions,
        spawnWorker,
        terminateWorker,
        onMessage,
        loadImage,
        send
      } = require_browser();
      var workerCounter = 0;
      module.exports = (..._0) => __async(null, [..._0], function* (langs = "eng", oem = OEM.LSTM_ONLY, _options = {}, config = {}) {
        const id = getId("Worker", workerCounter);
        const _a4 = resolvePaths(__spreadValues(__spreadValues({}, defaultOptions), _options)), {
          logger,
          errorHandler
        } = _a4, options = __objRest(_a4, [
          "logger",
          "errorHandler"
        ]);
        const promises = {};
        const currentLangs = typeof langs === "string" ? langs.split("+") : langs;
        let currentOem = oem;
        let currentConfig = config;
        const lstmOnlyCore = [OEM.DEFAULT, OEM.LSTM_ONLY].includes(oem) && !options.legacyCore;
        let workerResReject;
        let workerResResolve;
        const workerRes = new Promise((resolve, reject) => {
          workerResResolve = resolve;
          workerResReject = reject;
        });
        const workerError = (event) => {
          workerResReject(event.message);
        };
        let worker = spawnWorker(options);
        worker.onerror = workerError;
        workerCounter += 1;
        const startJob = ({ id: jobId, action: action2, payload }) => new Promise((resolve, reject) => {
          log(`[${id}]: Start ${jobId}, action=${action2}`);
          const promiseId = `${action2}-${jobId}`;
          promises[promiseId] = { resolve, reject };
          send(worker, {
            workerId: id,
            jobId,
            action: action2,
            payload
          });
        });
        const load2 = () => console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)");
        const loadInternal = (jobId) => startJob(createJob({
          id: jobId,
          action: "load",
          payload: { options: { lstmOnly: lstmOnlyCore, corePath: options.corePath, logging: options.logging } }
        }));
        const writeText = (path, text3, jobId) => startJob(createJob({
          id: jobId,
          action: "FS",
          payload: { method: "writeFile", args: [path, text3] }
        }));
        const readText = (path, jobId) => startJob(createJob({
          id: jobId,
          action: "FS",
          payload: { method: "readFile", args: [path, { encoding: "utf8" }] }
        }));
        const removeFile = (path, jobId) => startJob(createJob({
          id: jobId,
          action: "FS",
          payload: { method: "unlink", args: [path] }
        }));
        const FS = (method, args, jobId) => startJob(createJob({
          id: jobId,
          action: "FS",
          payload: { method, args }
        }));
        const loadLanguageInternal = (_langs, jobId) => startJob(createJob({
          id: jobId,
          action: "loadLanguage",
          payload: {
            langs: _langs,
            options: {
              langPath: options.langPath,
              dataPath: options.dataPath,
              cachePath: options.cachePath,
              cacheMethod: options.cacheMethod,
              gzip: options.gzip,
              lstmOnly: [OEM.DEFAULT, OEM.LSTM_ONLY].includes(currentOem) && !options.legacyLang
            }
          }
        }));
        const initializeInternal = (_langs, _oem, _config, jobId) => startJob(createJob({
          id: jobId,
          action: "initialize",
          payload: { langs: _langs, oem: _oem, config: _config }
        }));
        const reinitialize = (langs2 = "eng", oem2, config2, jobId) => {
          if (lstmOnlyCore && [OEM.TESSERACT_ONLY, OEM.TESSERACT_LSTM_COMBINED].includes(oem2)) throw Error("Legacy model requested but code missing.");
          const _oem = oem2 || currentOem;
          currentOem = _oem;
          const _config = config2 || currentConfig;
          currentConfig = _config;
          const langsArr = typeof langs2 === "string" ? langs2.split("+") : langs2;
          const _langs = langsArr.filter((x) => !currentLangs.includes(x));
          currentLangs.push(..._langs);
          if (_langs.length > 0) {
            return loadLanguageInternal(_langs, jobId).then(() => initializeInternal(langs2, _oem, _config, jobId));
          }
          return initializeInternal(langs2, _oem, _config, jobId);
        };
        const setParameters = (params = {}, jobId) => startJob(createJob({
          id: jobId,
          action: "setParameters",
          payload: { params }
        }));
        const recognize = (_02, ..._1) => __async(null, [_02, ..._1], function* (image, opts = {}, output = {
          text: true
        }, jobId) {
          return startJob(createJob({
            id: jobId,
            action: "recognize",
            payload: { image: yield loadImage(image), options: opts, output }
          }));
        });
        const detect = (image, jobId) => __async(null, null, function* () {
          if (lstmOnlyCore) throw Error("`worker.detect` requires Legacy model, which was not loaded.");
          return startJob(createJob({
            id: jobId,
            action: "detect",
            payload: { image: yield loadImage(image) }
          }));
        });
        const terminate = () => __async(null, null, function* () {
          if (worker !== null) {
            terminateWorker(worker);
            worker = null;
          }
          return Promise.resolve();
        });
        onMessage(worker, ({
          workerId,
          jobId,
          status: status2,
          action: action2,
          data
        }) => {
          const promiseId = `${action2}-${jobId}`;
          if (status2 === "resolve") {
            log(`[${workerId}]: Complete ${jobId}`);
            promises[promiseId].resolve({ jobId, data });
            delete promises[promiseId];
          } else if (status2 === "reject") {
            promises[promiseId].reject(data);
            delete promises[promiseId];
            if (action2 === "load") workerResReject(data);
            if (errorHandler) {
              errorHandler(data);
            } else {
              throw Error(data);
            }
          } else if (status2 === "progress") {
            logger(__spreadProps(__spreadValues({}, data), { userJobId: jobId }));
          }
        });
        const resolveObj = {
          id,
          worker,
          load: load2,
          writeText,
          readText,
          removeFile,
          FS,
          reinitialize,
          setParameters,
          recognize,
          detect,
          terminate
        };
        loadInternal().then(() => loadLanguageInternal(langs)).then(() => initializeInternal(langs, oem, config)).then(() => workerResResolve(resolveObj)).catch(() => {
        });
        return workerRes;
      });
    }
  });

  // node_modules/tesseract.js/src/Tesseract.js
  var require_Tesseract = __commonJS({
    "node_modules/tesseract.js/src/Tesseract.js"(exports, module) {
      "use strict";
      var createWorker = require_createWorker();
      var recognize = (image, langs, options) => __async(null, null, function* () {
        const worker = yield createWorker(langs, 1, options);
        return worker.recognize(image).finally(() => __async(null, null, function* () {
          yield worker.terminate();
        }));
      });
      var detect = (image, options) => __async(null, null, function* () {
        const worker = yield createWorker("osd", 0, options);
        return worker.detect(image).finally(() => __async(null, null, function* () {
          yield worker.terminate();
        }));
      });
      module.exports = {
        recognize,
        detect
      };
    }
  });

  // node_modules/tesseract.js/src/constants/languages.js
  var require_languages = __commonJS({
    "node_modules/tesseract.js/src/constants/languages.js"(exports, module) {
      "use strict";
      module.exports = {
        AFR: "afr",
        AMH: "amh",
        ARA: "ara",
        ASM: "asm",
        AZE: "aze",
        AZE_CYRL: "aze_cyrl",
        BEL: "bel",
        BEN: "ben",
        BOD: "bod",
        BOS: "bos",
        BUL: "bul",
        CAT: "cat",
        CEB: "ceb",
        CES: "ces",
        CHI_SIM: "chi_sim",
        CHI_TRA: "chi_tra",
        CHR: "chr",
        CYM: "cym",
        DAN: "dan",
        DEU: "deu",
        DZO: "dzo",
        ELL: "ell",
        ENG: "eng",
        ENM: "enm",
        EPO: "epo",
        EST: "est",
        EUS: "eus",
        FAS: "fas",
        FIN: "fin",
        FRA: "fra",
        FRK: "frk",
        FRM: "frm",
        GLE: "gle",
        GLG: "glg",
        GRC: "grc",
        GUJ: "guj",
        HAT: "hat",
        HEB: "heb",
        HIN: "hin",
        HRV: "hrv",
        HUN: "hun",
        IKU: "iku",
        IND: "ind",
        ISL: "isl",
        ITA: "ita",
        ITA_OLD: "ita_old",
        JAV: "jav",
        JPN: "jpn",
        KAN: "kan",
        KAT: "kat",
        KAT_OLD: "kat_old",
        KAZ: "kaz",
        KHM: "khm",
        KIR: "kir",
        KOR: "kor",
        KUR: "kur",
        LAO: "lao",
        LAT: "lat",
        LAV: "lav",
        LIT: "lit",
        MAL: "mal",
        MAR: "mar",
        MKD: "mkd",
        MLT: "mlt",
        MSA: "msa",
        MYA: "mya",
        NEP: "nep",
        NLD: "nld",
        NOR: "nor",
        ORI: "ori",
        PAN: "pan",
        POL: "pol",
        POR: "por",
        PUS: "pus",
        RON: "ron",
        RUS: "rus",
        SAN: "san",
        SIN: "sin",
        SLK: "slk",
        SLV: "slv",
        SPA: "spa",
        SPA_OLD: "spa_old",
        SQI: "sqi",
        SRP: "srp",
        SRP_LATN: "srp_latn",
        SWA: "swa",
        SWE: "swe",
        SYR: "syr",
        TAM: "tam",
        TEL: "tel",
        TGK: "tgk",
        TGL: "tgl",
        THA: "tha",
        TIR: "tir",
        TUR: "tur",
        UIG: "uig",
        UKR: "ukr",
        URD: "urd",
        UZB: "uzb",
        UZB_CYRL: "uzb_cyrl",
        VIE: "vie",
        YID: "yid"
      };
    }
  });

  // node_modules/tesseract.js/src/constants/PSM.js
  var require_PSM = __commonJS({
    "node_modules/tesseract.js/src/constants/PSM.js"(exports, module) {
      "use strict";
      module.exports = {
        OSD_ONLY: "0",
        AUTO_OSD: "1",
        AUTO_ONLY: "2",
        AUTO: "3",
        SINGLE_COLUMN: "4",
        SINGLE_BLOCK_VERT_TEXT: "5",
        SINGLE_BLOCK: "6",
        SINGLE_LINE: "7",
        SINGLE_WORD: "8",
        CIRCLE_WORD: "9",
        SINGLE_CHAR: "10",
        SPARSE_TEXT: "11",
        SPARSE_TEXT_OSD: "12",
        RAW_LINE: "13"
      };
    }
  });

  // node_modules/tesseract.js/src/index.js
  var require_src = __commonJS({
    "node_modules/tesseract.js/src/index.js"(exports, module) {
      "use strict";
      require_runtime();
      var createScheduler = require_createScheduler();
      var createWorker = require_createWorker();
      var Tesseract = require_Tesseract();
      var languages = require_languages();
      var OEM = require_OEM();
      var PSM = require_PSM();
      var { setLogging } = require_log();
      module.exports = __spreadValues({
        languages,
        OEM,
        PSM,
        createScheduler,
        createWorker,
        setLogging
      }, Tesseract);
    }
  });

  // node_modules/pdfjs-dist/legacy/build/pdf.mjs
  var pdf_exports = {};
  __export(pdf_exports, {
    AbortException: () => AbortException,
    AnnotationEditorLayer: () => AnnotationEditorLayer,
    AnnotationEditorParamsType: () => AnnotationEditorParamsType,
    AnnotationEditorType: () => AnnotationEditorType,
    AnnotationEditorUIManager: () => AnnotationEditorUIManager,
    AnnotationLayer: () => AnnotationLayer,
    AnnotationMode: () => AnnotationMode,
    AnnotationType: () => AnnotationType,
    CSSConstants: () => CSSConstants,
    ColorPicker: () => ColorPicker,
    DOMSVGFactory: () => DOMSVGFactory,
    DrawLayer: () => DrawLayer,
    FeatureTest: () => FeatureTest,
    GlobalWorkerOptions: () => GlobalWorkerOptions,
    ImageKind: () => ImageKind,
    InvalidPDFException: () => InvalidPDFException,
    MathClamp: () => MathClamp,
    OPS: () => OPS,
    OutputScale: () => OutputScale,
    PDFDataRangeTransport: () => PDFDataRangeTransport,
    PDFDateString: () => PDFDateString,
    PDFWorker: () => PDFWorker,
    PasswordException: () => PasswordException,
    PasswordResponses: () => PasswordResponses,
    PermissionFlag: () => PermissionFlag,
    PixelsPerInch: () => PixelsPerInch,
    RenderingCancelledException: () => RenderingCancelledException,
    ResponseException: () => ResponseException,
    SignatureExtractor: () => SignatureExtractor,
    SupportedImageMimeTypes: () => SupportedImageMimeTypes,
    TextLayer: () => TextLayer,
    TextLayerImages: () => TextLayerImages,
    TouchManager: () => TouchManager,
    Util: () => Util,
    VerbosityLevel: () => VerbosityLevel,
    XfaLayer: () => XfaLayer,
    applyOpacity: () => applyOpacity,
    build: () => build,
    createValidAbsoluteUrl: () => createValidAbsoluteUrl,
    fetchData: () => fetchData,
    findContrastColor: () => findContrastColor,
    getDocument: () => getDocument,
    getFilenameFromUrl: () => getFilenameFromUrl,
    getPdfFilenameFromUrl: () => getPdfFilenameFromUrl,
    getRGB: () => getRGB,
    getRGBA: () => getRGBA,
    getUuid: () => getUuid,
    isDataScheme: () => isDataScheme,
    isPdfFile: () => isPdfFile,
    isValidExplicitDest: () => isValidExplicitDest,
    makeArr: () => makeArr,
    makeMap: () => makeMap,
    makeObj: () => makeObj,
    makeSet: () => makeSet,
    noContextMenu: () => noContextMenu,
    normalizeUnicode: () => normalizeUnicode,
    renderRichText: () => renderRichText,
    setLayerDimensions: () => setLayerDimensions,
    shadow: () => util_shadow,
    stopEvent: () => stopEvent,
    updateUrlHash: () => updateUrlHash,
    version: () => api_version
  });
  function __webpack_require__(moduleId) {
    const cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== void 0) {
      return cachedModule.exports;
    }
    const module = __webpack_module_cache__[moduleId] = {
      /******/
      // no module.id needed
      /******/
      // no module.loaded needed
      /******/
      exports: {}
      /******/
    };
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
  }
  function setVerbosityLevel(level) {
    if (Number.isInteger(level)) {
      verbosity = level;
    }
  }
  function getVerbosityLevel() {
    return verbosity;
  }
  function info(msg) {
    if (verbosity >= VerbosityLevel.INFOS) {
      console.info(`Info: ${msg}`);
    }
  }
  function warn(msg) {
    if (verbosity >= VerbosityLevel.WARNINGS) {
      console.warn(`Warning: ${msg}`);
    }
  }
  function unreachable(msg) {
    throw new Error(msg);
  }
  function util_assert(cond, msg) {
    if (!cond) {
      unreachable(msg);
    }
  }
  function _isValidProtocol(url) {
    switch (url == null ? void 0 : url.protocol) {
      case "http:":
      case "https:":
      case "ftp:":
      case "mailto:":
      case "tel:":
        return true;
      default:
        return false;
    }
  }
  function createValidAbsoluteUrl(url, baseUrl = null, options = null) {
    if (!url) {
      return null;
    }
    if (options && typeof url === "string") {
      if (options.addDefaultProtocol && url.startsWith("www.")) {
        const dots = url.match(/\./g);
        if ((dots == null ? void 0 : dots.length) >= 2) {
          url = `http://${url}`;
        }
      }
      if (options.tryConvertEncoding) {
        try {
          url = stringToUTF8String(url);
        } catch (e) {
        }
      }
    }
    const absoluteUrl = baseUrl ? URL.parse(url, baseUrl) : URL.parse(url);
    return _isValidProtocol(absoluteUrl) ? absoluteUrl : null;
  }
  function updateUrlHash(url, hash, allowRel = false) {
    const res = URL.parse(url);
    if (res) {
      res.hash = hash;
      return res.href;
    }
    if (allowRel && createValidAbsoluteUrl(url, "http://example.com")) {
      return url.split("#", 1)[0] + `${hash ? `#${hash}` : ""}`;
    }
    return "";
  }
  function stripPath(str) {
    return str.substring(str.lastIndexOf("/") + 1);
  }
  function util_shadow(obj, prop, value2, nonSerializable = false) {
    Object.defineProperty(obj, prop, {
      value: value2,
      enumerable: !nonSerializable,
      configurable: true,
      writable: false
    });
    return value2;
  }
  function bytesToString(bytes) {
    if (typeof bytes !== "object" || (bytes == null ? void 0 : bytes.length) === void 0) {
      unreachable("Invalid argument for bytesToString");
    }
    const length = bytes.length;
    const MAX_ARGUMENT_COUNT = 8192;
    if (length < MAX_ARGUMENT_COUNT) {
      return String.fromCharCode.apply(null, bytes);
    }
    const strBuf = [];
    for (let i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
      const chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
      const chunk = bytes.subarray(i, chunkEnd);
      strBuf.push(String.fromCharCode.apply(null, chunk));
    }
    return strBuf.join("");
  }
  function stringToBytes(str) {
    if (typeof str !== "string") {
      unreachable("Invalid argument for stringToBytes");
    }
    const length = str.length;
    const bytes = new Uint8Array(length);
    for (let i = 0; i < length; ++i) {
      bytes[i] = str.charCodeAt(i) & 255;
    }
    return bytes;
  }
  function stringToUTF8String(str) {
    return decodeURIComponent(escape(str));
  }
  function normalizeUnicode(str) {
    if (!NormalizeRegex) {
      NormalizeRegex = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu;
      NormalizationMap = /* @__PURE__ */ new Map([["ï¬…", "Å¿t"]]);
    }
    return str.replaceAll(NormalizeRegex, (_, p1, p2) => p1 ? p1.normalize("NFKC") : NormalizationMap.get(p2));
  }
  function getUuid() {
    if (typeof crypto.randomUUID === "function") {
      return crypto.randomUUID();
    }
    const buf = new Uint8Array(32);
    crypto.getRandomValues(buf);
    return bytesToString(buf);
  }
  function _isValidExplicitDest(validRef, validName, dest) {
    if (!Array.isArray(dest) || dest.length < 2) {
      return false;
    }
    const [page, zoom, ...args] = dest;
    if (!validRef(page) && !Number.isInteger(page)) {
      return false;
    }
    if (!validName(zoom)) {
      return false;
    }
    const argsLen = args.length;
    let allowNull = true;
    switch (zoom.name) {
      case "XYZ":
        if (argsLen < 2 || argsLen > 3) {
          return false;
        }
        break;
      case "Fit":
      case "FitB":
        return argsLen === 0;
      case "FitH":
      case "FitBH":
      case "FitV":
      case "FitBV":
        if (argsLen > 1) {
          return false;
        }
        break;
      case "FitR":
        if (argsLen !== 4) {
          return false;
        }
        allowNull = false;
        break;
      default:
        return false;
    }
    for (const arg of args) {
      if (typeof arg === "number" || allowNull && arg === null) {
        continue;
      }
      return false;
    }
    return true;
  }
  function MathClamp(v, min, max) {
    return Math.min(Math.max(v, min), max);
  }
  function getRGBA(color) {
    if (color.startsWith("#")) {
      const hex = color.slice(1);
      return [parseInt(hex.slice(0, 2), 16), parseInt(hex.slice(2, 4), 16), parseInt(hex.slice(4, 6), 16), hex.length >= 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1];
    }
    if (color.startsWith("rgb(")) {
      const [r, g, b] = color.slice(4, -1).split(",").map((x) => parseInt(x, 10));
      return [r, g, b, 1];
    }
    if (color.startsWith("rgba(")) {
      const parts = color.slice(5, -1).split(",");
      return [parseInt(parts[0], 10), parseInt(parts[1], 10), parseInt(parts[2], 10), parseFloat(parts[3])];
    }
    const m = color.match(/^color\(srgb\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+|none))?\)$/);
    if (m) {
      return [Math.round(parseFloat(m[1]) * 255), Math.round(parseFloat(m[2]) * 255), Math.round(parseFloat(m[3]) * 255), m[4] !== void 0 && m[4] !== "none" ? parseFloat(m[4]) : 1];
    }
    return null;
  }
  function getRGB(color) {
    const rgba = getRGBA(color);
    if (!rgba) {
      warn(`Not a valid color format: "${color}"`);
      return [0, 0, 0];
    }
    return rgba.slice(0, 3);
  }
  function getCurrentTransform(ctx) {
    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = ctx.getTransform();
    return [a, b, c, d, e, f];
  }
  function getCurrentTransformInverse(ctx) {
    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = ctx.getTransform().invertSelf();
    return [a, b, c, d, e, f];
  }
  function applyOpacity(color, opacity) {
    opacity = MathClamp(opacity != null ? opacity : 1, 0, 1);
    const white = 255 * (1 - opacity);
    return color.map((c) => Math.round(c * opacity + white));
  }
  function RGBToHSL(rgb, output) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    if (max === min) {
      output[0] = output[1] = 0;
    } else {
      const d = max - min;
      output[1] = l < 0.5 ? d / (max + min) : d / (2 - max - min);
      switch (max) {
        case r:
          output[0] = ((g - b) / d + (g < b ? 6 : 0)) * 60;
          break;
        case g:
          output[0] = ((b - r) / d + 2) * 60;
          break;
        case b:
          output[0] = ((r - g) / d + 4) * 60;
          break;
      }
    }
    output[2] = l;
  }
  function HSLToRGB(hsl, output) {
    const h = hsl[0];
    const s = hsl[1];
    const l = hsl[2];
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(h / 60 % 2 - 1));
    const m = l - c / 2;
    switch (Math.floor(h / 60)) {
      case 0:
        output[0] = c + m;
        output[1] = x + m;
        output[2] = m;
        break;
      case 1:
        output[0] = x + m;
        output[1] = c + m;
        output[2] = m;
        break;
      case 2:
        output[0] = m;
        output[1] = c + m;
        output[2] = x + m;
        break;
      case 3:
        output[0] = m;
        output[1] = x + m;
        output[2] = c + m;
        break;
      case 4:
        output[0] = x + m;
        output[1] = m;
        output[2] = c + m;
        break;
      case 5:
      case 6:
        output[0] = c + m;
        output[1] = m;
        output[2] = x + m;
        break;
    }
  }
  function computeLuminance(x) {
    return x <= 0.03928 ? x / 12.92 : __pow((x + 0.055) / 1.055, 2.4);
  }
  function contrastRatio(hsl1, hsl2, output) {
    HSLToRGB(hsl1, output);
    output.map(computeLuminance);
    const lum1 = 0.2126 * output[0] + 0.7152 * output[1] + 0.0722 * output[2];
    HSLToRGB(hsl2, output);
    output.map(computeLuminance);
    const lum2 = 0.2126 * output[0] + 0.7152 * output[1] + 0.0722 * output[2];
    return lum1 > lum2 ? (lum1 + 0.05) / (lum2 + 0.05) : (lum2 + 0.05) / (lum1 + 0.05);
  }
  function findContrastColor(baseColor, fixedColor) {
    const key = baseColor[0] + baseColor[1] * 256 + baseColor[2] * 65536 + fixedColor[0] * 16777216 + fixedColor[1] * 4294967296 + fixedColor[2] * 1099511627776;
    let cachedValue = contrastCache.get(key);
    if (cachedValue) {
      return cachedValue;
    }
    const array = new Float32Array(9);
    const output = array.subarray(0, 3);
    const baseHSL = array.subarray(3, 6);
    RGBToHSL(baseColor, baseHSL);
    const fixedHSL = array.subarray(6, 9);
    RGBToHSL(fixedColor, fixedHSL);
    const isFixedColorDark = fixedHSL[2] < 0.5;
    const minContrast = isFixedColorDark ? 12 : 4.5;
    baseHSL[2] = isFixedColorDark ? Math.sqrt(baseHSL[2]) : 1 - Math.sqrt(1 - baseHSL[2]);
    if (contrastRatio(baseHSL, fixedHSL, output) < minContrast) {
      let start, end;
      if (isFixedColorDark) {
        start = baseHSL[2];
        end = 1;
      } else {
        start = 0;
        end = baseHSL[2];
      }
      const PRECISION = 5e-3;
      while (end - start > PRECISION) {
        const mid = baseHSL[2] = (start + end) / 2;
        if (isFixedColorDark === contrastRatio(baseHSL, fixedHSL, output) < minContrast) {
          start = mid;
        } else {
          end = mid;
        }
      }
      baseHSL[2] = isFixedColorDark ? end : start;
    }
    HSLToRGB(baseHSL, output);
    cachedValue = Util.makeHexColor(Math.round(output[0] * 255), Math.round(output[1] * 255), Math.round(output[2] * 255));
    contrastCache.set(key, cachedValue);
    return cachedValue;
  }
  function makePathFromDrawOPS(data) {
    const path = new Path2D();
    if (!data) {
      return path;
    }
    for (let i = 0, ii = data.length; i < ii; ) {
      switch (data[i++]) {
        case DrawOPS.moveTo:
          path.moveTo(data[i++], data[i++]);
          break;
        case DrawOPS.lineTo:
          path.lineTo(data[i++], data[i++]);
          break;
        case DrawOPS.curveTo:
          path.bezierCurveTo(data[i++], data[i++], data[i++], data[i++], data[i++], data[i++]);
          break;
        case DrawOPS.quadraticCurveTo:
          path.quadraticCurveTo(data[i++], data[i++], data[i++], data[i++]);
          break;
        case DrawOPS.closePath:
          path.closePath();
          break;
        default:
          warn(`Unrecognized drawing path operator: ${data[i - 1]}`);
          break;
      }
    }
    return path;
  }
  function fetchData(url, type = "text") {
    return __async(this, null, function* () {
      if (isValidFetchUrl(url, document.baseURI)) {
        const response = yield fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        switch (type) {
          case "blob":
            return response.blob();
          case "bytes":
            return response.bytes();
          case "json":
            return response.json();
        }
        return response.text();
      }
      return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.responseType = type === "bytes" ? "arraybuffer" : type;
        request.onreadystatechange = () => {
          if (request.readyState !== XMLHttpRequest.DONE) {
            return;
          }
          if (request.status === 200 || request.status === 0) {
            switch (type) {
              case "bytes":
                resolve(new Uint8Array(request.response));
                return;
              case "blob":
              case "json":
                resolve(request.response);
                return;
            }
            resolve(request.responseText);
            return;
          }
          reject(new Error(request.statusText));
        };
        request.send(null);
      });
    });
  }
  function isDataScheme(url) {
    const ii = url.length;
    let i = 0;
    while (i < ii && url[i].trim() === "") {
      i++;
    }
    return url.substring(i, i + 5).toLowerCase() === "data:";
  }
  function isPdfFile(filename) {
    return typeof filename === "string" && /\.pdf$/i.test(filename);
  }
  function getFilenameFromUrl(url) {
    [url] = url.split(/[#?]/, 1);
    return stripPath(url);
  }
  function getPdfFilenameFromUrl(url, defaultFilename = "document.pdf") {
    var _a4;
    if (typeof url !== "string") {
      return defaultFilename;
    }
    if (isDataScheme(url)) {
      warn('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.');
      return defaultFilename;
    }
    const getURL = (urlString) => {
      try {
        return new URL(urlString);
      } catch (e) {
      }
      try {
        return new URL(decodeURIComponent(urlString));
      } catch (e) {
      }
      try {
        return new URL(urlString, "https://foo.bar");
      } catch (e) {
      }
      try {
        return new URL(decodeURIComponent(urlString), "https://foo.bar");
      } catch (e) {
      }
      return null;
    };
    const newURL = getURL(url);
    if (!newURL) {
      return defaultFilename;
    }
    const decode = (name) => {
      try {
        let decoded = decodeURIComponent(name);
        if (decoded.includes("/")) {
          decoded = stripPath(decoded);
          if (decoded.length === 4 && pdfRegex.test(decoded)) {
            return name;
          }
        }
        return decoded;
      } catch (e) {
        return name;
      }
    };
    const pdfRegex = /\.pdf$/i;
    const filename = stripPath(newURL.pathname);
    if (pdfRegex.test(filename)) {
      return decode(filename);
    }
    if (newURL.searchParams.size > 0) {
      const getLast = (iterator) => [...iterator].findLast((v) => pdfRegex.test(v));
      const name = (_a4 = getLast(newURL.searchParams.values())) != null ? _a4 : getLast(newURL.searchParams.keys());
      if (name) {
        return decode(name);
      }
    }
    if (newURL.hash) {
      const {
        hash
      } = newURL;
      let extensionStart = -1;
      for (const {
        index
      } of hash.matchAll(/\.pdf\b/gi)) {
        extensionStart = index;
      }
      if (extensionStart > 0) {
        let filenameStart = extensionStart;
        while (filenameStart > 0 && !"/?#=".includes(hash[filenameStart - 1])) {
          filenameStart--;
        }
        if (filenameStart < extensionStart) {
          return decode(hash.slice(filenameStart, extensionStart + 4));
        }
      }
    }
    return defaultFilename;
  }
  function isValidFetchUrl(url, baseUrl) {
    var _a4;
    const res = baseUrl ? URL.parse(url, baseUrl) : URL.parse(url);
    return /https?:/.test((_a4 = res == null ? void 0 : res.protocol) != null ? _a4 : "");
  }
  function noContextMenu(e) {
    e.preventDefault();
  }
  function stopEvent(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  function getColorValues(colors) {
    const span = document.createElement("span");
    span.style.visibility = "hidden";
    span.style.colorScheme = "only light";
    document.body.append(span);
    for (const name of colors.keys()) {
      span.style.color = name;
      const computedColor = window.getComputedStyle(span).color;
      colors.set(name, getRGB(computedColor));
    }
    span.remove();
  }
  function setLayerDimensions(div, viewport, mustFlip = false, mustRotate = true) {
    if (viewport instanceof PageViewport) {
      const {
        pageWidth,
        pageHeight
      } = viewport.rawDims;
      const {
        style
      } = div;
      const widthStr = `round(down, var(--total-scale-factor) * ${pageWidth}px, var(--scale-round-x))`, heightStr = `round(down, var(--total-scale-factor) * ${pageHeight}px, var(--scale-round-y))`;
      if (!mustFlip || viewport.rotation % 180 === 0) {
        style.width = widthStr;
        style.height = heightStr;
      } else {
        style.width = heightStr;
        style.height = widthStr;
      }
    }
    if (mustRotate) {
      div.setAttribute("data-main-rotation", viewport.rotation);
    }
  }
  function renderRichText({
    html,
    dir,
    className
  }, container) {
    const fragment = document.createDocumentFragment();
    if (typeof html === "string") {
      const p = document.createElement("p");
      p.dir = dir || "auto";
      const lines = html.split(/\r\n?|\n/);
      for (let i = 0, ii = lines.length; i < ii; ++i) {
        const line = lines[i];
        p.append(document.createTextNode(line));
        if (i < ii - 1) {
          p.append(document.createElement("br"));
        }
      }
      fragment.append(p);
    } else {
      XfaLayer.render({
        xfaHtml: html,
        div: fragment,
        intent: "richText"
      });
    }
    fragment.firstElementChild.classList.add("richText", className);
    container.append(fragment);
  }
  function bindEvents(obj, element2, names) {
    for (const name of names) {
      element2.addEventListener(name, obj[name].bind(obj));
    }
  }
  function preventDefault(evt) {
    evt.preventDefault();
  }
  function stopTouchEvent(evt) {
    if (evt.cancelable) {
      stopEvent(evt);
      return true;
    }
    evt.stopPropagation();
    return false;
  }
  function getUrlProp(val) {
    if (val instanceof URL) {
      return val;
    }
    if (typeof val === "string") {
      if (isNodeJS) {
        if (/^[a-z][a-z0-9\-+.]+:/i.test(val)) {
          return new URL(val);
        }
        const url2 = process.getBuiltinModule("url");
        return new URL(url2.pathToFileURL(val));
      }
      const url = URL.parse(val, window.location);
      if (url) {
        return url;
      }
    }
    throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
  }
  function getDataProp(val) {
    if (isNodeJS && typeof Buffer !== "undefined" && val instanceof Buffer) {
      throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
    }
    if (val instanceof Uint8Array && val.byteLength === val.buffer.byteLength) {
      return val;
    }
    if (typeof val === "string") {
      return stringToBytes(val);
    }
    if (val instanceof ArrayBuffer || ArrayBuffer.isView(val) || typeof val === "object" && !isNaN(val == null ? void 0 : val.length)) {
      return new Uint8Array(val);
    }
    throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
  }
  function getFactoryUrlProp(val) {
    if (typeof val !== "string") {
      return null;
    }
    if (val.endsWith("/")) {
      return val;
    }
    throw new Error(`Invalid factory url: "${val}" must include trailing slash.`);
  }
  function isSameOrigin(baseUrl, otherUrl) {
    const base = URL.parse(baseUrl);
    if (!(base == null ? void 0 : base.origin) || base.origin === "null") {
      return false;
    }
    const other = new URL(otherUrl, base);
    return base.origin === other.origin;
  }
  function getWorkerSrc(src) {
    if (!isSameOrigin(window.location, src)) {
      const wrapper = `await import("${new URL(src, window.location).href}");`;
      return URL.createObjectURL(new Blob([wrapper], {
        type: "text/javascript"
      }));
    }
    return src;
  }
  function initGPU() {
    return _webGPU.init();
  }
  function isGPUReady() {
    return _webGPU.isReady;
  }
  function loadMeshShader() {
    _webGPU.loadMeshShader();
  }
  function drawMeshWithGPU(posData, colData, vertexCount, context, backgroundColor, paddedWidth, paddedHeight, borderSize) {
    return _webGPU.draw(posData, colData, vertexCount, context, backgroundColor, paddedWidth, paddedHeight, borderSize);
  }
  function onFn() {
  }
  function wrapReason(ex) {
    if (ex instanceof AbortException || ex instanceof InvalidPDFException || ex instanceof PasswordException || ex instanceof ResponseException || ex instanceof UnknownErrorException) {
      return ex;
    }
    if (typeof ex !== "object" || ex === null) {
      return new UnknownErrorException(String(ex), String(ex));
    }
    switch (ex.name) {
      case "AbortException":
        return new AbortException(ex.message);
      case "InvalidPDFException":
        return new InvalidPDFException(ex.message);
      case "PasswordException":
        return new PasswordException(ex.message, ex.code);
      case "ResponseException":
        return new ResponseException(ex.message, ex.status, ex.missing);
      case "UnknownErrorException":
        return new UnknownErrorException(ex.message, ex.details);
    }
    return new UnknownErrorException(ex.message, ex.toString());
  }
  function node_utils_fetchData(url) {
    return __async(this, null, function* () {
      const fs = process.getBuiltinModule("fs/promises");
      const data = yield fs.readFile(url);
      return new Uint8Array(data);
    });
  }
  function expandBBox(array, index, minX, minY, maxX, maxY) {
    array[index * 4 + 0] = Math.min(array[index * 4 + 0], minX);
    array[index * 4 + 1] = Math.min(array[index * 4 + 1], minY);
    array[index * 4 + 2] = Math.max(array[index * 4 + 2], maxX);
    array[index * 4 + 3] = Math.max(array[index * 4 + 3], maxY);
  }
  function scaleCharBBox(scaleX, scaleY, x, y, bbox) {
    let temp;
    if (scaleX) {
      if (scaleX < 0) {
        temp = bbox[0];
        bbox[0] = bbox[2];
        bbox[2] = temp;
      }
      bbox[0] *= scaleX;
      bbox[2] *= scaleX;
      if (scaleY < 0) {
        temp = bbox[1];
        bbox[1] = bbox[3];
        bbox[3] = temp;
      }
      bbox[1] *= scaleY;
      bbox[3] *= scaleY;
    } else {
      bbox.fill(0);
    }
    bbox[0] += x;
    bbox[1] += y;
    bbox[2] += x;
    bbox[3] += y;
  }
  function createCanvasTrackers(canvas, operationsCount, {
    recordOperations = false,
    recordImages = false,
    recordDebugMetadata = false
  }) {
    const bboxTracker = recordOperations || recordImages ? new CanvasBBoxTracker(canvas, operationsCount) : null;
    return {
      dependencyTracker: recordOperations ? new CanvasDependencyTracker(bboxTracker, recordDebugMetadata) : bboxTracker,
      imagesTracker: recordImages ? new CanvasImagesTracker(canvas) : null
    };
  }
  function convertBlackAndWhiteToRGBA({
    src,
    srcPos = 0,
    dest,
    width,
    height,
    nonBlackColor = 4294967295,
    inverseDecode = false
  }) {
    const black = FeatureTest.isLittleEndian ? 4278190080 : 255;
    const [zeroMapping, oneMapping] = inverseDecode ? [nonBlackColor, black] : [black, nonBlackColor];
    const widthInSource = width >> 3;
    const widthRemainder = width & 7;
    const xorMask = zeroMapping ^ oneMapping;
    const srcLength = src.length;
    dest = new Uint32Array(dest.buffer);
    let destPos = 0;
    for (let i = 0; i < height; ++i) {
      for (const max = srcPos + widthInSource; srcPos < max; ++srcPos, destPos += 8) {
        const elem2 = src[srcPos];
        dest[destPos] = zeroMapping ^ -(elem2 >> 7 & 1) & xorMask;
        dest[destPos + 1] = zeroMapping ^ -(elem2 >> 6 & 1) & xorMask;
        dest[destPos + 2] = zeroMapping ^ -(elem2 >> 5 & 1) & xorMask;
        dest[destPos + 3] = zeroMapping ^ -(elem2 >> 4 & 1) & xorMask;
        dest[destPos + 4] = zeroMapping ^ -(elem2 >> 3 & 1) & xorMask;
        dest[destPos + 5] = zeroMapping ^ -(elem2 >> 2 & 1) & xorMask;
        dest[destPos + 6] = zeroMapping ^ -(elem2 >> 1 & 1) & xorMask;
        dest[destPos + 7] = zeroMapping ^ -(elem2 & 1) & xorMask;
      }
      if (widthRemainder === 0) {
        continue;
      }
      const elem = srcPos < srcLength ? src[srcPos++] : 255;
      for (let j = 0; j < widthRemainder; ++j, ++destPos) {
        dest[destPos] = zeroMapping ^ -(elem >> 7 - j & 1) & xorMask;
      }
    }
    return {
      srcPos,
      destPos
    };
  }
  function convertRGBToRGBA({
    src,
    srcPos = 0,
    dest,
    destPos = 0,
    width,
    height
  }) {
    let i = 0;
    const len = width * height * 3;
    const byteOffset = src.byteOffset + srcPos;
    const len32 = byteOffset % 4 === 0 ? Math.floor(MathClamp(src.length - srcPos, 0, len) / 4) : 0;
    const src32 = len32 > 0 ? new Uint32Array(src.buffer, byteOffset, len32) : null;
    const alphaMask = FeatureTest.isLittleEndian ? 4278190080 : 255;
    if (FeatureTest.isLittleEndian) {
      for (; i < len32 - 2; i += 3, destPos += 4) {
        const s1 = src32[i], s2 = src32[i + 1], s3 = src32[i + 2];
        dest[destPos] = s1 | alphaMask;
        dest[destPos + 1] = s1 >>> 24 | s2 << 8 | alphaMask;
        dest[destPos + 2] = s2 >>> 16 | s3 << 16 | alphaMask;
        dest[destPos + 3] = s3 >>> 8 | alphaMask;
      }
      for (let j = srcPos + i * 4, jj = srcPos + len; j < jj; j += 3) {
        dest[destPos++] = src[j] | src[j + 1] << 8 | src[j + 2] << 16 | alphaMask;
      }
    } else {
      for (; i < len32 - 2; i += 3, destPos += 4) {
        const s1 = src32[i], s2 = src32[i + 1], s3 = src32[i + 2];
        dest[destPos] = s1 | alphaMask;
        dest[destPos + 1] = s1 << 24 | s2 >>> 8 | alphaMask;
        dest[destPos + 2] = s2 << 16 | s3 >>> 16 | alphaMask;
        dest[destPos + 3] = s3 << 8 | alphaMask;
      }
      for (let j = srcPos + i * 4, jj = srcPos + len; j < jj; j += 3) {
        dest[destPos++] = src[j] << 24 | src[j + 1] << 16 | src[j + 2] << 8 | alphaMask;
      }
    }
    return {
      srcPos: srcPos + len,
      destPos
    };
  }
  function applyBoundingBox(ctx, bbox) {
    if (!bbox) {
      return;
    }
    const width = bbox[2] - bbox[0];
    const height = bbox[3] - bbox[1];
    const region = new Path2D();
    region.rect(bbox[0], bbox[1], width, height);
    ctx.clip(region);
  }
  function drawTriangle(data, context, p1, p2, p3, c1, c2, c3) {
    const coords = context.coords, colors = context.colors;
    const bytes = data.data, rowSize = data.width * 4;
    let tmp;
    if (coords[p1 * 2 + 1] > coords[p2 * 2 + 1]) {
      tmp = p1;
      p1 = p2;
      p2 = tmp;
      tmp = c1;
      c1 = c2;
      c2 = tmp;
    }
    if (coords[p2 * 2 + 1] > coords[p3 * 2 + 1]) {
      tmp = p2;
      p2 = p3;
      p3 = tmp;
      tmp = c2;
      c2 = c3;
      c3 = tmp;
    }
    if (coords[p1 * 2 + 1] > coords[p2 * 2 + 1]) {
      tmp = p1;
      p1 = p2;
      p2 = tmp;
      tmp = c1;
      c1 = c2;
      c2 = tmp;
    }
    const x1 = (coords[p1 * 2] + context.offsetX) * context.scaleX;
    const y1 = (coords[p1 * 2 + 1] + context.offsetY) * context.scaleY;
    const x2 = (coords[p2 * 2] + context.offsetX) * context.scaleX;
    const y2 = (coords[p2 * 2 + 1] + context.offsetY) * context.scaleY;
    const x3 = (coords[p3 * 2] + context.offsetX) * context.scaleX;
    const y3 = (coords[p3 * 2 + 1] + context.offsetY) * context.scaleY;
    if (y1 >= y3) {
      return;
    }
    const c1r = colors[c1 * 4], c1g = colors[c1 * 4 + 1], c1b = colors[c1 * 4 + 2];
    const c2r = colors[c2 * 4], c2g = colors[c2 * 4 + 1], c2b = colors[c2 * 4 + 2];
    const c3r = colors[c3 * 4], c3g = colors[c3 * 4 + 1], c3b = colors[c3 * 4 + 2];
    const minY = Math.round(y1), maxY = Math.round(y3);
    let xa, car, cag, cab;
    let xb, cbr, cbg, cbb;
    for (let y = minY; y <= maxY; y++) {
      if (y < y2) {
        const k2 = y < y1 ? 0 : (y1 - y) / (y1 - y2);
        xa = x1 - (x1 - x2) * k2;
        car = c1r - (c1r - c2r) * k2;
        cag = c1g - (c1g - c2g) * k2;
        cab = c1b - (c1b - c2b) * k2;
      } else {
        let k2;
        if (y > y3) {
          k2 = 1;
        } else if (y2 === y3) {
          k2 = 0;
        } else {
          k2 = (y2 - y) / (y2 - y3);
        }
        xa = x2 - (x2 - x3) * k2;
        car = c2r - (c2r - c3r) * k2;
        cag = c2g - (c2g - c3g) * k2;
        cab = c2b - (c2b - c3b) * k2;
      }
      let k;
      if (y < y1) {
        k = 0;
      } else if (y > y3) {
        k = 1;
      } else {
        k = (y1 - y) / (y1 - y3);
      }
      xb = x1 - (x1 - x3) * k;
      cbr = c1r - (c1r - c3r) * k;
      cbg = c1g - (c1g - c3g) * k;
      cbb = c1b - (c1b - c3b) * k;
      const x1_ = Math.round(Math.min(xa, xb));
      const x2_ = Math.round(Math.max(xa, xb));
      let j = rowSize * y + x1_ * 4;
      for (let x = x1_; x <= x2_; x++) {
        k = (xa - x) / (xa - xb);
        if (k < 0) {
          k = 0;
        } else if (k > 1) {
          k = 1;
        }
        bytes[j++] = car - (car - cbr) * k | 0;
        bytes[j++] = cag - (cag - cbg) * k | 0;
        bytes[j++] = cab - (cab - cbb) * k | 0;
        bytes[j++] = 255;
      }
    }
  }
  function getShadingPattern(IR) {
    switch (IR[0]) {
      case "RadialAxial":
        return new RadialAxialShadingPattern(IR);
      case "Mesh":
        return new MeshShadingPattern(IR);
      case "Dummy":
        return new DummyShadingPattern();
    }
    throw new Error(`Unknown IR type: ${IR[0]}`);
  }
  function mirrorContextOperations(ctx, destCtx) {
    if (ctx._removeMirroring) {
      throw new Error("Context is already forwarding operations.");
    }
    const originalMethods = /* @__PURE__ */ new Map();
    for (const name of ["save", "restore", "rotate", "scale", "translate", "transform", "setTransform", "resetTransform", "clip", "moveTo", "lineTo", "bezierCurveTo", "quadraticCurveTo", "arc", "arcTo", "ellipse", "rect", "roundRect", "closePath", "beginPath"]) {
      const original = ctx[name];
      if (typeof original !== "function" || typeof destCtx[name] !== "function") {
        continue;
      }
      originalMethods.set(name, original);
      ctx[name] = function(...args) {
        destCtx[name](...args);
        return original.apply(this, args);
      };
    }
    ctx._removeMirroring = () => {
      for (const [name, original] of originalMethods) {
        ctx[name] = original;
      }
      delete ctx._removeMirroring;
    };
  }
  function drawImageAtIntegerCoords(ctx, srcImg, srcX, srcY, srcW, srcH, destX, destY, destW, destH) {
    const [a, b, c, d, tx, ty] = getCurrentTransform(ctx);
    if (b === 0 && c === 0) {
      const tlX = destX * a + tx;
      const rTlX = Math.round(tlX);
      const tlY = destY * d + ty;
      const rTlY = Math.round(tlY);
      const brX = (destX + destW) * a + tx;
      const rWidth = Math.abs(Math.round(brX) - rTlX) || 1;
      const brY = (destY + destH) * d + ty;
      const rHeight = Math.abs(Math.round(brY) - rTlY) || 1;
      ctx.setTransform(Math.sign(a), 0, 0, Math.sign(d), rTlX, rTlY);
      ctx.drawImage(srcImg, srcX, srcY, srcW, srcH, 0, 0, rWidth, rHeight);
      ctx.setTransform(a, b, c, d, tx, ty);
      return [rWidth, rHeight];
    }
    if (a === 0 && d === 0) {
      const tlX = destY * c + tx;
      const rTlX = Math.round(tlX);
      const tlY = destX * b + ty;
      const rTlY = Math.round(tlY);
      const brX = (destY + destH) * c + tx;
      const rWidth = Math.abs(Math.round(brX) - rTlX) || 1;
      const brY = (destX + destW) * b + ty;
      const rHeight = Math.abs(Math.round(brY) - rTlY) || 1;
      ctx.setTransform(0, Math.sign(b), Math.sign(c), 0, rTlX, rTlY);
      ctx.drawImage(srcImg, srcX, srcY, srcW, srcH, 0, 0, rHeight, rWidth);
      ctx.setTransform(a, b, c, d, tx, ty);
      return [rHeight, rWidth];
    }
    ctx.drawImage(srcImg, srcX, srcY, srcW, srcH, destX, destY, destW, destH);
    const scaleX = Math.hypot(a, b);
    const scaleY = Math.hypot(c, d);
    return [scaleX * destW, scaleY * destH];
  }
  function putBinaryImageData(ctx, imgData) {
    const {
      width,
      height,
      kind
    } = imgData;
    const partialChunkHeight = height % FULL_CHUNK_HEIGHT;
    const fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
    const totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
    const chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
    let srcPos = 0;
    const src = imgData.data;
    const dest = chunkImgData.data;
    let i;
    if (kind === ImageKind.GRAYSCALE_1BPP) {
      for (i = 0; i < totalChunks; i++) {
        ({
          srcPos
        } = convertBlackAndWhiteToRGBA({
          src,
          srcPos,
          dest,
          width,
          height: i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight
        }));
        ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
      }
    } else if (kind === ImageKind.RGBA_32BPP) {
      let j = 0;
      let elemsInThisChunk = width * FULL_CHUNK_HEIGHT * 4;
      for (i = 0; i < fullChunks; i++) {
        dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
        srcPos += elemsInThisChunk;
        ctx.putImageData(chunkImgData, 0, j);
        j += FULL_CHUNK_HEIGHT;
      }
      if (i < totalChunks) {
        elemsInThisChunk = width * partialChunkHeight * 4;
        dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
        ctx.putImageData(chunkImgData, 0, j);
      }
    } else if (kind === ImageKind.RGB_24BPP) {
      for (i = 0; i < totalChunks; i++) {
        ({
          srcPos
        } = convertRGBToRGBA({
          src,
          srcPos,
          dest: new Uint32Array(dest.buffer),
          width,
          height: i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight
        }));
        ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
      }
    } else {
      throw new Error(`bad image kind: ${kind}`);
    }
  }
  function putBinaryImageMask(ctx, imgData) {
    if (imgData.bitmap) {
      ctx.drawImage(imgData.bitmap, 0, 0);
      return;
    }
    const {
      width,
      height
    } = imgData;
    const partialChunkHeight = height % FULL_CHUNK_HEIGHT;
    const fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
    const totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
    const chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
    let srcPos = 0;
    const src = imgData.data;
    const dest = chunkImgData.data;
    for (let i = 0; i < totalChunks; i++) {
      ({
        srcPos
      } = convertBlackAndWhiteToRGBA({
        src,
        srcPos,
        dest,
        width,
        height: i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight,
        nonBlackColor: 0
      }));
      ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
    }
  }
  function copyCtxState(sourceCtx, destCtx) {
    const properties = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
    for (const property of properties) {
      if (sourceCtx[property] !== void 0) {
        destCtx[property] = sourceCtx[property];
      }
    }
    if (sourceCtx.setLineDash !== void 0) {
      destCtx.setLineDash(sourceCtx.getLineDash());
      destCtx.lineDashOffset = sourceCtx.lineDashOffset;
    }
  }
  function setAnnotationCanvasName(canvas, canvasName) {
    var _a4;
    (_a4 = canvas.setAttribute) == null ? void 0 : _a4.call(canvas, "data-canvas-name", canvasName);
    canvas._pdfjsCanvasName = canvasName;
  }
  function getAnnotationCanvasName(canvas) {
    var _a4;
    return (_a4 = canvas._pdfjsCanvasName) != null ? _a4 : null;
  }
  function resetCtxToDefault(ctx) {
    ctx.strokeStyle = ctx.fillStyle = "#000000";
    ctx.fillRule = "nonzero";
    ctx.globalAlpha = 1;
    ctx.lineWidth = 1;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.miterLimit = 10;
    ctx.globalCompositeOperation = "source-over";
    ctx.font = "10px sans-serif";
    if (ctx.setLineDash !== void 0) {
      ctx.setLineDash([]);
      ctx.lineDashOffset = 0;
    }
    const {
      filter
    } = ctx;
    if (filter !== "none" && filter !== "") {
      ctx.filter = "none";
    }
  }
  function getImageSmoothingEnabled(transform, interpolate, pixelRatio) {
    if (interpolate) {
      return true;
    }
    Util.singularValueDecompose2dScale(transform, XY);
    const actualScale = Math.fround(pixelRatio * PixelsPerInch.PDF_TO_CSS_UNITS);
    return XY[0] <= actualScale && XY[1] <= actualScale;
  }
  function blend(fg, bg, alpha) {
    return Math.round(alpha * fg + (1 - alpha) * bg);
  }
  function isCSSString(str) {
    const quote2 = str[0];
    if (str.length < 2 || quote2 !== `"` && quote2 !== `'` || str.at(-1) !== quote2) {
      return false;
    }
    const end = str.length - 1;
    for (let i = 1; i < end; i++) {
      const char = str[i];
      if (char === quote2 || CONTROL_CHAR_REGEXP.test(char)) {
        return false;
      }
      if (char === "\\") {
        if (++i >= end || CONTROL_CHAR_REGEXP.test(str[i])) {
          return false;
        }
      }
    }
    return true;
  }
  function serializeFontFamily(fontFamily) {
    if (isCSSString(fontFamily)) {
      return fontFamily;
    }
    const escaped = fontFamily.replaceAll(/["\\\p{Cc}]/gu, (char) => char === `"` || char === "\\" ? `\\${char}` : `\\${char.codePointAt(0).toString(16)} `);
    return `"${escaped}"`;
  }
  function getFilenameFromContentDispositionHeader(contentDisposition) {
    let needsEncodingFixup = true;
    let tmp = toParamRegExp("filename\\*", "i").exec(contentDisposition);
    if (tmp) {
      tmp = tmp[1];
      let filename = rfc2616unquote(tmp);
      filename = unescape(filename);
      filename = rfc5987decode(filename);
      filename = rfc2047decode(filename);
      return fixupEncoding(filename);
    }
    tmp = rfc2231getparam(contentDisposition);
    if (tmp) {
      const filename = rfc2047decode(tmp);
      return fixupEncoding(filename);
    }
    tmp = toParamRegExp("filename", "i").exec(contentDisposition);
    if (tmp) {
      tmp = tmp[1];
      let filename = rfc2616unquote(tmp);
      filename = rfc2047decode(filename);
      return fixupEncoding(filename);
    }
    function toParamRegExp(attributePattern, flags) {
      return new RegExp("(?:^|;)\\s*" + attributePattern + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', flags);
    }
    function textdecode(encoding, value2) {
      if (encoding) {
        if (!/^[\x00-\xFF]+$/.test(value2)) {
          return value2;
        }
        try {
          const decoder = new TextDecoder(encoding, {
            fatal: true
          });
          const buffer = stringToBytes(value2);
          value2 = decoder.decode(buffer);
          needsEncodingFixup = false;
        } catch (e) {
        }
      }
      return value2;
    }
    function fixupEncoding(value2) {
      if (needsEncodingFixup && /[\x80-\xff]/.test(value2)) {
        value2 = textdecode("utf-8", value2);
        if (needsEncodingFixup) {
          value2 = textdecode("iso-8859-1", value2);
        }
      }
      return value2;
    }
    function rfc2231getparam(contentDispositionStr) {
      const matches2 = [];
      let match;
      const iter = toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
      while ((match = iter.exec(contentDispositionStr)) !== null) {
        let [, n, quot, part] = match;
        n = parseInt(n, 10);
        if (n in matches2) {
          if (n === 0) {
            break;
          }
          continue;
        }
        matches2[n] = [quot, part];
      }
      const parts = [];
      for (let n = 0; n < matches2.length; ++n) {
        if (!(n in matches2)) {
          break;
        }
        let [quot, part] = matches2[n];
        part = rfc2616unquote(part);
        if (quot) {
          part = unescape(part);
          if (n === 0) {
            part = rfc5987decode(part);
          }
        }
        parts.push(part);
      }
      return parts.join("");
    }
    function rfc2616unquote(value2) {
      if (value2.startsWith('"')) {
        const parts = value2.slice(1).split('\\"');
        for (let i = 0; i < parts.length; ++i) {
          const quotindex = parts[i].indexOf('"');
          if (quotindex !== -1) {
            parts[i] = parts[i].slice(0, quotindex);
            parts.length = i + 1;
          }
          parts[i] = parts[i].replaceAll(/\\(.)/g, "$1");
        }
        value2 = parts.join('"');
      }
      return value2;
    }
    function rfc5987decode(extvalue) {
      const encodingend = extvalue.indexOf("'");
      if (encodingend === -1) {
        return extvalue;
      }
      const encoding = extvalue.slice(0, encodingend);
      const langvalue = extvalue.slice(encodingend + 1);
      const value2 = langvalue.replace(/^[^']*'/, "");
      return textdecode(encoding, value2);
    }
    function rfc2047decode(value2) {
      if (!value2.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(value2)) {
        return value2;
      }
      return value2.replaceAll(/=\?([\w-]*)\?([QB])\?((?:[^?]|\?(?!=))*)\?=/gi, function(matches2, charset, encoding, text3) {
        if (encoding === "q" || encoding === "Q") {
          text3 = text3.replaceAll("_", " ").replaceAll(/=([0-9a-f]{2})/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
          return textdecode(charset, text3);
        }
        try {
          text3 = atob(text3);
        } catch (e) {
        }
        return textdecode(charset, text3);
      });
    }
    return "";
  }
  function createHeaders(isHttp, httpHeaders) {
    const headers = new Headers();
    if (!isHttp || !httpHeaders || typeof httpHeaders !== "object") {
      return headers;
    }
    for (const key in httpHeaders) {
      const val = httpHeaders[key];
      if (val !== void 0) {
        headers.append(key, val);
      }
    }
    return headers;
  }
  function trimHeadersEnd(str) {
    let end = str.length;
    while (end > 0 && str[end - 1] !== " " && /\s/.test(str[end - 1])) {
      end--;
    }
    return str.slice(0, end);
  }
  function getResponseOrigin(url) {
    var _a4, _b;
    return (_b = (_a4 = URL.parse(url)) == null ? void 0 : _a4.origin) != null ? _b : null;
  }
  function validateRangeRequestCapabilities({
    responseHeaders,
    isHttp,
    rangeChunkSize,
    disableRange
  }) {
    const rv = {
      contentLength: 0,
      isRangeSupported: false
    };
    const length = parseInt(responseHeaders.get("Content-Length"), 10);
    if (!Number.isInteger(length)) {
      return rv;
    }
    rv.contentLength = length;
    if (length <= 2 * rangeChunkSize) {
      return rv;
    }
    if (disableRange || !isHttp || responseHeaders.get("Accept-Ranges") !== "bytes") {
      return rv;
    }
    const contentEncoding = responseHeaders.get("Content-Encoding") || "identity";
    if (contentEncoding === "identity") {
      rv.isRangeSupported = true;
    }
    return rv;
  }
  function extractFilenameFromHeader(responseHeaders) {
    const contentDisposition = responseHeaders.get("Content-Disposition");
    if (contentDisposition) {
      let filename = getFilenameFromContentDispositionHeader(contentDisposition);
      if (filename.includes("%")) {
        try {
          filename = decodeURIComponent(filename);
        } catch (e) {
        }
      }
      if (isPdfFile(filename)) {
        return filename;
      }
    }
    return null;
  }
  function createResponseError(status2, url) {
    return new ResponseException(`Unexpected server response (${status2}) while retrieving PDF "${url.href}".`, status2, status2 === 404 || status2 === 0 && url.protocol === "file:");
  }
  function ensureResponseOrigin(rangeOrigin, origin) {
    if (rangeOrigin !== origin) {
      throw new Error(`Expected range response-origin "${rangeOrigin}" to match "${origin}".`);
    }
  }
  function fetchUrl(url, headers, withCredentials, abortController) {
    return fetch(url, {
      method: "GET",
      headers,
      signal: abortController.signal,
      mode: "cors",
      credentials: withCredentials ? "include" : "same-origin",
      redirect: "follow"
    });
  }
  function ensureResponseStatus(status2, url) {
    if (status2 !== 200 && status2 !== 206) {
      throw createResponseError(status2, url);
    }
  }
  function getArrayBuffer(val) {
    if (val instanceof Uint8Array) {
      return val.buffer;
    }
    if (val instanceof ArrayBuffer) {
      return val;
    }
    throw new Error(`getArrayBuffer - unexpected data: ${val}`);
  }
  function transport_stream_getArrayBuffer(val) {
    return val instanceof Uint8Array && val.byteLength === val.buffer.byteLength ? val.buffer : new Uint8Array(val).buffer;
  }
  function endRequests() {
    for (const capability of this._requests) {
      capability.resolve({
        value: void 0,
        done: true
      });
    }
    this._requests.length = 0;
  }
  function network_getArrayBuffer(val) {
    return typeof val !== "string" ? val : stringToBytes(val).buffer;
  }
  function getReadableStream(url, opts = null) {
    const fs = process.getBuiltinModule("fs");
    const {
      Readable
    } = process.getBuiltinModule("stream");
    const readStream = fs.createReadStream(url, opts);
    return Readable.toWeb(readStream);
  }
  function getNetworkStream(url) {
    return isValidFetchUrl(url) ? PDFFetchStream : isNodeJS ? PDFNodeStream : PDFNetworkStream;
  }
  function readString(buffer, view, index, offset = 0) {
    const {
      decoder
    } = InfoUtils;
    for (let i = 0; i < index; i++) {
      offset += view.getUint32(offset) + 4;
    }
    const length = view.getUint32(offset);
    return decoder.decode(new Uint8Array(buffer, offset + 4, length));
  }
  function closeFrame({
    bitmap,
    annotationBitmaps
  }) {
    bitmap == null ? void 0 : bitmap.close();
    if (annotationBitmaps) {
      for (const [, , annotationBitmap] of annotationBitmaps) {
        annotationBitmap.close();
      }
    }
  }
  function getDocument(src = {}) {
    var _a4;
    const task = new PDFDocumentLoadingTask();
    const {
      docId
    } = task;
    const url = src.url ? getUrlProp(src.url) : null;
    const data = src.data ? getDataProp(src.data) : null;
    const httpHeaders = src.httpHeaders || null;
    const withCredentials = src.withCredentials === true;
    const password = (_a4 = src.password) != null ? _a4 : null;
    const rangeTransport = src.range instanceof PDFDataRangeTransport ? src.range : null;
    const rangeChunkSize = Number.isInteger(src.rangeChunkSize) && src.rangeChunkSize > 0 ? src.rangeChunkSize : __pow(2, 16);
    let worker = src.worker instanceof PDFWorker ? src.worker : null;
    const verbosity2 = src.verbosity;
    const docBaseUrl = typeof src.docBaseUrl === "string" && !isDataScheme(src.docBaseUrl) ? src.docBaseUrl : null;
    const cMapUrl = getFactoryUrlProp(src.cMapUrl);
    const cMapPacked = src.cMapPacked !== false;
    const iccUrl = getFactoryUrlProp(src.iccUrl);
    const standardFontDataUrl = getFactoryUrlProp(src.standardFontDataUrl);
    const wasmUrl = getFactoryUrlProp(src.wasmUrl);
    const ignoreErrors = src.stopAtErrors !== true;
    const maxImageSize = Number.isInteger(src.maxImageSize) && src.maxImageSize > -1 ? src.maxImageSize : -1;
    const isOffscreenCanvasSupported = typeof src.isOffscreenCanvasSupported === "boolean" ? src.isOffscreenCanvasSupported : !isNodeJS;
    const isImageDecoderSupported = typeof src.isImageDecoderSupported === "boolean" ? src.isImageDecoderSupported : !isNodeJS;
    const canvasMaxAreaInBytes = Number.isInteger(src.canvasMaxAreaInBytes) ? src.canvasMaxAreaInBytes : -1;
    const disableFontFace = typeof src.disableFontFace === "boolean" ? src.disableFontFace : isNodeJS;
    const fontExtraProperties = src.fontExtraProperties === true;
    const enableXfa = src.enableXfa === true;
    const ownerDocument = src.ownerDocument || globalThis.document;
    const disableRange = src.disableRange === true;
    const disableStream = src.disableStream === true;
    const disableAutoFetch = src.disableAutoFetch === true;
    const pdfBug = src.pdfBug === true;
    const CanvasFactory = src.CanvasFactory || (isNodeJS ? NodeCanvasFactory : DOMCanvasFactory);
    const FilterFactory = src.FilterFactory || (isNodeJS ? NodeFilterFactory : DOMFilterFactory);
    const BinaryDataFactory = src.BinaryDataFactory || (isNodeJS ? NodeBinaryDataFactory : DOMBinaryDataFactory);
    const enableHWA = src.enableHWA === true;
    const enableWebGPU = src.enableWebGPU === true;
    if (enableWebGPU) {
      initGPU();
    }
    const useWasm = src.useWasm !== false;
    const pagesMapper = src.pagesMapper || new PagesMapper();
    const styleElement = null;
    const useSystemFonts = typeof src.useSystemFonts === "boolean" ? src.useSystemFonts : !isNodeJS && !disableFontFace;
    const useWorkerFetch = typeof src.useWorkerFetch === "boolean" ? src.useWorkerFetch : !!(BinaryDataFactory === DOMBinaryDataFactory && cMapUrl && cMapPacked && standardFontDataUrl && wasmUrl && isValidFetchUrl(cMapUrl, document.baseURI) && isValidFetchUrl(standardFontDataUrl, document.baseURI) && isValidFetchUrl(wasmUrl, document.baseURI));
    const disableWorkerRendering = src.disableWorkerRendering === true || !isOffscreenCanvasSupported || ownerDocument !== globalThis.document || !!styleElement || !RendererWorker.isAvailable;
    setVerbosityLevel(verbosity2);
    const transportFactory = {
      canvasFactory: new CanvasFactory({
        ownerDocument,
        enableHWA
      }),
      filterFactory: new FilterFactory({
        docId,
        ownerDocument
      }),
      binaryDataFactory: useWorkerFetch ? null : new BinaryDataFactory({
        cMapUrl,
        standardFontDataUrl,
        wasmUrl
      })
    };
    if (!worker) {
      worker = PDFWorker.create({
        verbosity: verbosity2,
        port: GlobalWorkerOptions.workerPort
      });
      task._worker = worker;
    }
    if (!disableWorkerRendering) {
      const rendererWorker = RendererWorker.create({
        verbosity: verbosity2,
        enableHWA,
        enableWebGPU,
        ports: GlobalWorkerOptions.rendererPorts
      });
      rendererWorker.promise.catch((reason) => {
        if (!rendererWorker.destroyed) {
          warn(`Renderer worker disabled: ${reason.message}`);
          rendererWorker.destroy();
        }
      });
      task._rendererWorker = rendererWorker;
    }
    const docParams = {
      docId,
      apiVersion: "6.5.438",
      data,
      password,
      disableAutoFetch,
      rangeChunkSize,
      docBaseUrl,
      enableXfa,
      evaluatorOptions: {
        maxImageSize,
        disableFontFace,
        ignoreErrors,
        isOffscreenCanvasSupported,
        isImageDecoderSupported,
        canvasMaxAreaInBytes,
        fontExtraProperties,
        useSystemFonts,
        useWasm,
        useWorkerFetch,
        cMapUrl,
        cMapPacked,
        iccUrl,
        standardFontDataUrl,
        wasmUrl
      }
    };
    const transportParams = {
      ownerDocument,
      pdfBug,
      styleElement,
      rendererWorker: task._rendererWorker,
      enableWebGPU,
      loadingParams: {
        disableAutoFetch,
        enableXfa
      }
    };
    worker.promise.then(function() {
      if (worker.destroyed) {
        throw new Error("Worker was destroyed");
      }
      const workerIdPromise = worker.messageHandler.sendWithPromise("GetDocRequest", docParams, data ? [data.buffer] : null);
      let networkStream;
      if (data) {
      } else if (rangeTransport) {
        networkStream = new PDFDataTransportStream({
          pdfDataRangeTransport: rangeTransport,
          disableRange,
          disableStream
        });
      } else if (url) {
        const NetworkStream = getNetworkStream(url);
        networkStream = new NetworkStream({
          url,
          httpHeaders,
          withCredentials,
          rangeChunkSize,
          disableRange,
          disableStream
        });
      } else {
        throw new Error("getDocument - expected either `data`, `range`, or `url` parameter.");
      }
      return workerIdPromise.then((workerId) => {
        if (worker.destroyed) {
          throw new Error("Worker was destroyed");
        }
        const messageHandler = new MessageHandler(docId, workerId, worker.port);
        const transport = new WorkerTransport(messageHandler, task, networkStream, transportParams, transportFactory, pagesMapper);
        task._transport = transport;
        if (task.destroyed) {
          throw new Error("Loading aborted");
        }
        messageHandler.send("Ready", null);
      });
    }).catch(task._capability.reject).finally(task._setupCapability.resolve);
    return task;
  }
  function makeColorComp(n) {
    return Math.floor(MathClamp(n, 0, 1) * 255).toString(16).padStart(2, "0");
  }
  function scaleAndClamp(x) {
    return MathClamp(x, 0, 1) * 255;
  }
  function getHighlightSVGProperties(outline) {
    return {
      bbox: outline.box,
      root: {
        viewBox: "0 0 1 1"
      },
      rootClass: {
        highlight: true,
        free: outline.isFree
      },
      path: {
        d: outline.toSVGPath()
      }
    };
  }
  function getHighlightFocusSVGProperties(outline, rotation) {
    const {
      focusOutline
    } = outline;
    return {
      bbox: Outline._rotateBox(focusOutline.box, rotation),
      root: {
        "data-main-rotation": rotation
      },
      rootClass: {
        highlightOutline: true,
        free: outline.isFree
      },
      path: {
        d: focusOutline.toSVGPath()
      }
    };
  }
  function svgPoint(data, i) {
    return `${Outline.svgRound(data[i])} ${Outline.svgRound(data[i + 1])}`;
  }
  function pushCurves(buffer, line, start) {
    for (let i = start, ii = line.length; i < ii; i += 6) {
      buffer.push(`C${svgPoint(line, i)} ${svgPoint(line, i + 2)} ${svgPoint(line, i + 4)}`);
    }
  }
  function lineToSVGPath(line) {
    const start = `M${svgPoint(line, 4)}`;
    if (line.length === 6) {
      return `${start}Z`;
    }
    if (line.length === 12 && isNaN(line[6])) {
      return `${start}L${svgPoint(line, 10)}`;
    }
    const buffer = [start];
    pushCurves(buffer, line, 6);
    return buffer.join("");
  }
  function compareTextLayers(a, b) {
    if (a === b) {
      return 0;
    }
    return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
  }
  function getTextLayer(node) {
    var _a4;
    if (!node) {
      return null;
    }
    return node.nodeType === Node.ELEMENT_NODE ? node.closest(".textLayer") : ((_a4 = node.parentElement) == null ? void 0 : _a4.closest(".textLayer")) || null;
  }
  function isPointBefore(nodeA, offsetA, nodeB, offsetB) {
    if (nodeA === nodeB) {
      return offsetA <= offsetB;
    }
    const relation = nodeA.compareDocumentPosition(nodeB);
    if (relation & Node.DOCUMENT_POSITION_FOLLOWING) {
      return true;
    }
    if (relation & Node.DOCUMENT_POSITION_PRECEDING) {
      return false;
    }
    return null;
  }
  function normalizeEdgeBoundary(container, offset, textLayer) {
    if (container.nodeType !== Node.ELEMENT_NODE || !container.classList.contains("textLayer") || offset !== container.childNodes.length) {
      return {
        container,
        offset
      };
    }
    let lastNode = container.lastChild;
    if ((lastNode == null ? void 0 : lastNode.nodeType) === Node.ELEMENT_NODE && lastNode.classList.contains("endOfContent")) {
      lastNode = lastNode.previousSibling;
    }
    if (!lastNode || !textLayer.contains(lastNode)) {
      return null;
    }
    return lastNode.nodeType === Node.TEXT_NODE ? {
      container: lastNode,
      offset: lastNode.textContent.length
    } : {
      container: lastNode,
      offset: lastNode.childNodes.length
    };
  }
  function percentage2(value2) {
    return `${(value2 * 100).toFixed(2)}%`;
  }
  var import_meta, __webpack_modules__, __webpack_module_cache__, a_callable_namespaceFn, a_possible_prototype_namespaceFn, a_set_namespaceFn, a_string_namespaceFn, a_weak_key_namespaceFn, a_weak_map_namespaceFn, add_to_unscopables_namespaceFn, an_instance_namespaceFn, an_object_or_undefined_namespaceFn, an_object_namespaceFn, an_uint8_array_namespaceFn, array_buffer_basic_detection_namespaceFn, array_buffer_byte_length_namespaceFn, array_buffer_is_detached_namespaceFn, array_buffer_not_detached_namespaceFn, array_buffer_view_core_namespaceFn, array_from_constructor_and_list_namespaceFn, array_includes_namespaceFn, array_set_length_namespaceFn, array_slice_namespaceFn, base64_map_namespaceFn, call_with_safe_iteration_closing_namespaceFn, classof_raw_namespaceFn, classof_namespaceFn, copy_constructor_properties_namespaceFn, correct_prototype_getter_namespaceFn, create_iter_result_object_namespaceFn, create_non_enumerable_property_namespaceFn, create_property_descriptor_namespaceFn, create_property_namespaceFn, define_built_in_accessor_namespaceFn, define_built_in_namespaceFn, define_built_ins_namespaceFn, define_global_property_namespaceFn, descriptors_namespaceFn, document_create_element_namespaceFn, does_not_exceed_safe_integer_namespaceFn, dom_exception_constants_namespaceFn, enum_bug_keys_namespaceFn, environment_user_agent_namespaceFn, environment_v8_version_namespaceFn, error_stack_clear_namespaceFn, export_namespaceFn, fails_namespaceFn, function_apply_namespaceFn, function_bind_context_namespaceFn, function_bind_native_namespaceFn, function_call_namespaceFn, function_name_namespaceFn, function_uncurry_this_accessor_namespaceFn, function_uncurry_this_clause_namespaceFn, function_uncurry_this_namespaceFn, get_alphabet_option_namespaceFn, get_built_in_namespaceFn, get_iterator_direct_namespaceFn, get_iterator_flattenable_namespaceFn, get_iterator_internal_namespaceFn, get_iterator_method_internal_namespaceFn, get_method_namespaceFn, get_set_record_namespaceFn, global_this_namespaceFn, has_own_property_namespaceFn, hidden_keys_namespaceFn, html_namespaceFn, ie8_dom_define_namespaceFn, indexed_object_namespaceFn, inherit_if_required_namespaceFn, inspect_source_namespaceFn, internal_state_namespaceFn, is_array_iterator_method_namespaceFn, is_array_namespaceFn, is_big_int_array_namespaceFn, is_callable_namespaceFn, is_forced_namespaceFn, is_null_or_undefined_namespaceFn, is_object_namespaceFn, is_possible_prototype_namespaceFn, is_pure_namespaceFn, is_raw_json_namespaceFn, is_symbol_namespaceFn, iterate_simple_namespaceFn, iterate_namespaceFn, iterator_cleanup_state_namespaceFn, iterator_close_all_namespaceFn, iterator_close_namespaceFn, iterator_create_proxy_namespaceFn, iterator_helper_throws_on_invalid_iterator_namespaceFn, iterator_helper_without_closing_on_early_error_namespaceFn, iterators_core_namespaceFn, iterators_namespaceFn, length_of_array_like_namespaceFn, make_built_in_namespaceFn, map_helpers_namespaceFn, native_raw_json_namespaceFn, new_promise_capability_namespaceFn, normalize_string_argument_namespaceFn, not_a_nan_namespaceFn, object_create_namespaceFn, object_define_properties_namespaceFn, object_define_property_namespaceFn, object_get_own_property_descriptor_namespaceFn, object_get_own_property_names_namespaceFn, object_get_own_property_symbols_namespaceFn, object_get_prototype_of_namespaceFn, object_is_prototype_of_namespaceFn, object_keys_internal_namespaceFn, object_keys_namespaceFn, object_property_is_enumerable_namespaceFn, object_set_prototype_of_namespaceFn, ordinary_to_primitive_namespaceFn, own_keys_namespaceFn, parse_json_string_namespaceFn, perform_namespaceFn, promise_resolve_namespaceFn, require_object_coercible_namespaceFn, set_clone_namespaceFn, set_difference_namespaceFn, set_helpers_namespaceFn, set_intersection_namespaceFn, set_is_disjoint_from_namespaceFn, set_is_subset_of_namespaceFn, set_is_superset_of_namespaceFn, set_iterate_namespaceFn, set_method_accept_set_like_namespaceFn, set_method_get_keys_before_cloning_detection_namespaceFn, set_size_namespaceFn, set_symmetric_difference_namespaceFn, set_union_namespaceFn, shared_key_namespaceFn, shared_store_namespaceFn, shared_namespaceFn, symbol_constructor_detection_namespaceFn, this_number_value_namespaceFn, to_absolute_index_namespaceFn, to_big_int_namespaceFn, to_indexed_object_namespaceFn, to_integer_or_infinity_namespaceFn, to_length_namespaceFn, to_object_namespaceFn, to_positive_integer_namespaceFn, to_primitive_namespaceFn, to_property_key_namespaceFn, to_string_tag_support_namespaceFn, to_string_namespaceFn, try_to_string_namespaceFn, uid_namespaceFn, uint8_from_base64_namespaceFn, uint8_from_hex_namespaceFn, url_constructor_detection_namespaceFn, use_symbol_as_uid_namespaceFn, v8_prototype_define_bug_namespaceFn, validate_arguments_length_namespaceFn, weak_map_basic_detection_namespaceFn, weak_map_helpers_namespaceFn, well_known_symbol_namespaceFn, es_array_includes_namespaceFn, es_array_push_namespaceFn, es_iterator_constructor_namespaceFn, es_iterator_drop_namespaceFn, es_iterator_every_namespaceFn, es_iterator_filter_namespaceFn, es_iterator_find_namespaceFn, es_iterator_flat_map_namespaceFn, es_iterator_for_each_namespaceFn, es_iterator_map_namespaceFn, es_iterator_some_namespaceFn, es_iterator_take_namespaceFn, es_iterator_to_array_namespaceFn, es_json_parse_namespaceFn, es_json_stringify_namespaceFn, es_map_get_or_insert_computed_namespaceFn, es_map_get_or_insert_namespaceFn, es_math_sum_precise_namespaceFn, es_promise_try_namespaceFn, es_set_difference_v2_namespaceFn, es_set_intersection_v2_namespaceFn, es_set_is_disjoint_from_v2_namespaceFn, es_set_is_subset_of_v2_namespaceFn, es_set_is_superset_of_v2_namespaceFn, es_set_symmetric_difference_v2_namespaceFn, es_set_union_v2_namespaceFn, es_typed_array_with_namespaceFn, es_uint8_array_from_base64_namespaceFn, es_uint8_array_set_from_base64_namespaceFn, es_uint8_array_set_from_hex_namespaceFn, es_uint8_array_to_base64_namespaceFn, es_uint8_array_to_hex_namespaceFn, es_weak_map_get_or_insert_computed_namespaceFn, es_weak_map_get_or_insert_namespaceFn, web_dom_exception_stack_namespaceFn, web_url_parse_namespaceFn, isNodeJS, BBOX_INIT, F32_BBOX_INIT, FONT_IDENTITY_MATRIX, SVG_NS, RenderingIntentFlag, AnnotationMode, AnnotationPrefix, AnnotationEditorPrefix, AnnotationEditorType, AnnotationEditorParamsType, PermissionFlag, TextRenderingMode, ImageKind, AnnotationType, AnnotationBorderStyleType, VerbosityLevel, OPS, DrawOPS, PasswordResponses, verbosity, BaseException, PasswordException, UnknownErrorException, InvalidPDFException, ResponseException, FormatError, AbortException, FeatureTest, _Util_static, getExtremumOnCurve_fn, getExtremum_fn, Util, NormalizeRegex, NormalizationMap, makeArr, makeMap, makeObj, makeSet, _PixelsPerInch, PixelsPerInch, RenderingCancelledException, OutputScale, contrastCache, PageViewport, XfaText, disallowedRichTextStyleRegExp, disallowedEventHandlerAttrRegExp, _XfaLayer_static, createElement_fn, XfaLayer, _regex, PDFDateString, SupportedImageMimeTypes, ColorScheme, CSSConstants, _toolbar, _colorPicker, _editor, _buttons, _altText, _comment, _commentButtonDivider, _signatureDescriptionButton, _l10nRemove, _EditorToolbar_static, pointerDown_fn, _EditorToolbar_instances, focusIn_fn, focusOut_fn, addListenersToElement_fn, divider_get, _EditorToolbar, EditorToolbar, _buttons2, _toolbar2, _uiManager, _FloatingToolbar_instances, render_fn, getLastPoint_fn, makeButton_fn, FloatingToolbar, INTERNAL_EVT, internalOpt, _pointerId, _pointerIds, _moveTimestamp, _pointerType, _CurrentPointers, CurrentPointers, _id, IdManager, _baseId, _id2, _cache, _ImageManager_instances, get_fn, _ImageManager, ImageManager, _commands, _locked, _maxSize, _position, CommandManager, _KeyboardManager_static, parseShortcut_fn, codeToKey_fn, _KeyboardManager, KeyboardManager, _ColorManager, ColorManager, _abortController, _activeEditor, _allEditableAnnotations, _allEditors, _allLayers, _savedAllLayers, _savedEditorsByPage, _altTextManager, _annotationStorage, _changedExistingAnnotations, _commandManager, _commentManager, _copyPasteAC, _currentDrawingSession, _currentPageIndex, _deletedAnnotationsElementIds, _draggingEditors, _editorTypes, _editorsToRescale, _enableHighlightFloatingButton, _enableUpdatedAddImage, _enableNewAltTextWhenAddingImage, _filterFactory, _focusMainContainerTimeoutId, _focusManagerAC, _highlightColors, _highlightWhenShiftUp, _floatingToolbar, _idManager, _isEnabled, _isPointerDown, _isWaiting, _keyboardManagerAC, _lastActiveElement, _mainHighlightColorPicker, _missingCanvases, _mlManager, _mode, _selectedEditors, _selectedTextNode, _signatureManager, _pageColors, _showAllStates, _pdfDocument, _previousStates, _translation, _translationTimeoutId, _container, _viewer, _viewerAlert, _updateModeCapability, _AnnotationEditorUIManager_instances, getAnchorElementForSelection_fn, getLayerForTextLayer_fn, displayFloatingToolbar_fn, selectionChange_fn, onSelectEnd_fn, addSelectionListener_fn, addFocusManager_fn, removeFocusManager_fn, addKeyboardManager_fn, removeKeyboardManager_fn, addCopyPasteListeners_fn, removeCopyPasteListeners_fn, addDragAndDropListeners_fn, dispatchUpdateStates_fn, dispatchUpdateUI_fn, enableAll_fn, disableAll_fn, addEditorToLayer_fn, lastSelectedEditor_get, isEmpty_fn, selectEditors_fn, _AnnotationEditorUIManager, AnnotationEditorUIManager, _altText2, _altTextDecorative, _altTextButton, _altTextButtonLabel, _altTextTooltip, _altTextTooltipTimeout, _altTextWasFromKeyBoard, _badge, _editor2, _guessedText, _textWithDisclaimer, _useNewAltTextFlow, _l10nNewButton, _AltText_instances, label_get, setState_fn, _AltText, AltText, _commentStandaloneButton, _commentToolbarButton, _commentWasFromKeyBoard, _editor3, _initialText, _richText, _text, _date, _deleted, _popupPosition, _Comment_instances, render_fn2, Comment, MIN_TOUCH_SPAN, _container2, _isPinching, _isPinchingStopped, _isPinchingDisabled, _onPinchStart, _onPinching, _onPinchEnd, _onPanning, _ownsGesture, _pointerDownAC, _signal, _touchIds, _touchInfo, _touchManagerAC, _touchMoveAC, _unconfirmedPinch, _TouchManager_instances, onTouchStart_fn, armPointerDown_fn, pruneTouchIds_fn, getTrackedTouches_fn, setTouchInfo_fn, onTouchMove_fn, onTouchEnd_fn, endGesture_fn, TouchManager, _accessibilityData, _allResizerDivs, _altText3, _comment2, _commentStandaloneButton2, _disabled, _dragPointerId, _dragPointerType, _resizersDiv, _lastPointerCoords, _savedDimensions, _fakeAnnotation, _focusAC, _focusedResizerName, _hasBeenClicked, _initialRect, _isEditing, _isInEditMode, _isResizerEnabledForKeyboard, _moveInDOMTimeout, _prevDragX, _prevDragY, _telemetryTimeouts, _touchManager, _isDraggable, _zIndex, _AnnotationEditor_instances, translate_fn, _AnnotationEditor_static, rotatePoint_fn, getRotationMatrix_fn, createResizers_fn, resizerPointerdown_fn, resize_fn, addResizeToUndoStack_fn, resizerPointermove_fn, touchPinchStartCallback_fn, touchPinchCallback_fn, touchPinchEndCallback_fn, selectOnPointerEvent_fn, setUpDragSession_fn, addFocusListeners_fn, addTouchManager_fn, resizerKeydown_fn, resizerBlur_fn, resizerFocus_fn, setResizerTabIndex_fn, stopResizing_fn, showEditToolbar_fn, _AnnotationEditor, AnnotationEditor, FakeEditor, SEED, MASK_HIGH, MASK_LOW, MurmurHash3_64, SerializableEmpty, _modified, _modifiedIds, _editorsMap, _storage, _AnnotationStorage_instances, setModified_fn, AnnotationStorage, _serializable, PrintAnnotationStorage, isRefProxy, isNameProxy, isValidExplicitDest, _listeners, _deferred, LoopbackPort, _started, StatTimer, MESH_WGSL, _initPromise, _device, _meshPipeline, _preferredFormat, _WebGPU_instances, initGPU_fn, WebGPU, _webGPU, CallbackKind, StreamKind, _actions, _callbackCapabilities, _callbackId, _comObj, _messageAC, _sourceName, _streamControllers, _streamId, _streamSinks, _targetName, _MessageHandler_instances, onMessage_fn, createStreamSink_fn, processStreamMessage_fn, deleteStreamController_fn, MessageHandler, _errorStr, BaseBinaryDataFactory, DOMBinaryDataFactory, _enableHWA, BaseCanvasFactory, BaseFilterFactory, _a, NodeFilterFactory, NodeCanvasFactory, NodeBinaryDataFactory, FORCED_DEPENDENCY_LABEL, canvas_dependency_tracker_floor, ceil, EMPTY_BBOX, _bboxes, _coords, _BBoxReader, BBoxReader, ensureDebugMetadata, _baseTransformStack, _clipBox, _pendingBBox, _canvasWidth, _canvasHeight, _bboxesCoords, _bboxes2, _CanvasBBoxTracker_instances, initializeBBoxes_fn, CanvasBBoxTracker, _simple, _incremental, _namedDependencies, _pendingDependencies, _fontBBoxTrustworthy, _debugMetadata, _recordDebugMetadataDepenencyAfterRestore, _bboxTracker, CanvasDependencyTracker, _dependencyTracker, _opIdx, _ignoreBBoxes, _nestingLevel, _savesLevel, _CanvasNestedDependencyTracker, CanvasNestedDependencyTracker, Dependencies, _canvasWidth2, _canvasHeight2, _capacity, _count, _coords2, _CoordsArray, _CanvasImagesTracker, CanvasImagesTracker, PathType, BaseShadingPattern, RadialAxialShadingPattern, MeshShadingPattern, DummyShadingPattern, PaintType, _TilingPattern, TilingPattern, MIN_FONT_SIZE, MAX_FONT_SIZE, EXECUTION_TIME, EXECUTION_STEPS, FULL_CHUNK_HEIGHT, XY, CanvasExtraState, _maps, TransferMapsFallback, LINE_CAP_STYLES, LINE_JOIN_STYLES, NORMAL_CLIP, EO_CLIP, _SCALE_MATRIX, _pathCaches, _knockoutGroupLevel, _knockoutElementDepth, _knockoutTempCanvasEntry, _knockoutSavedCtx, _knockoutSavedSMaskCtx, _knockoutSavedGCO, _knockoutElementAlpha, _knockoutFilterCache, _knockoutElementGroupMeta, _groupStackMeta, _CanvasGraphics_instances, restoreInitialState_fn, drawFilter_fn, createKnockoutMaskCanvas_fn, getOrCreatePooledEntry_fn, compositeKnockoutSurface_fn, beginKnockoutElement_fn, endKnockoutElement_fn, getScaledPath_fn, getTextPattern_fn, transferColor_fn, convertGroupToGray_fn, destroyKnockoutPools_fn, _CanvasGraphics, CanvasGraphics, DOMCanvasFactory, _baseUrl, __cache, __defs, _docId, _document, __hcmCache, _id3, _DOMFilterFactory_instances, cache_get, hcmCache_get, defs_get, createTables_fn, createUrl_fn, addLuminosityConversion_fn, addGrayConversion_fn, createFilter_fn, appendFeFunc_fn, addTransferMapConversion_fn, addTransferMapAlphaConversion_fn, getRGB_fn, getRGBA_fn, resetDefsColor_fn, getOpaqueTextColor_fn, DOMFilterFactory, CONTROL_CHAR_REGEXP, _nativeFontFaces, _systemFonts, _styleSheet, _FontLoader_instances, getStyleSheet_fn, testFontLoaded_fn, FontLoader, _compiledPaths, _fontData, FontFaceObject, _PDFStreamReader, _PDFStreamRangeReader, BasePDFStream, BasePDFStreamReader, BasePDFStreamRangeReader, PDFFetchStream, PDFFetchStreamReader, PDFFetchStreamRangeReader, _PDFDataTransportStream_instances, onReceiveData_fn, PDFDataTransportStream, _endRequests, PDFDataTransportStreamReader, _endRequests2, PDFDataTransportStreamRangeReader, OK_RESPONSE, PARTIAL_CONTENT_RESPONSE, _pendingRequests, _PDFNetworkStream_instances, onProgress_fn, onStateChange_fn, PDFNetworkStream, _endRequests3, _PDFNetworkStreamReader_instances, onHeadersReceived_fn, onDone_fn, onError_fn, onProgress_fn2, PDFNetworkStreamReader, _endRequests4, _PDFNetworkStreamRangeReader_instances, onHeadersReceived_fn2, onDone_fn2, onError_fn2, PDFNetworkStreamRangeReader, PDFNodeStream, PDFNodeStreamReader, PDFNodeStreamRangeReader, _port, _rendererPorts, _rendererSrc, _src, GlobalWorkerOptions, _map, _data, Metadata, CSS_FONT_INFO, SYSTEM_FONT_INFO, _FONT_INFO, FONT_INFO, PATTERN_INFO, InfoUtils, _buffer, _view, _CssFontInfo_instances, readString_fn, CssFontInfo, _buffer2, _view2, _SystemFontInfo_instances, readString_fn2, SystemFontInfo, _buffer3, _view3, _FontInfo_instances, readBoolean_fn, readArray_fn, readString_fn3, getBufferOffset_fn, FontInfo, PatternInfo, _buffer4, FontPathInfo, INITIAL_DATA, dataObj, _objs, PDFObjects, ObjectHandler, INTERNAL, _isDisplay, _isPrint, _userSet, _visible, OptionalContentGroup, _cachedGetHash, _groups, _initialHash, _order, _rawData, _OptionalContentConfig_instances, evaluateVisibilityExpression_fn, _OptionalContentConfig, OptionalContentConfig, _pageNumberToId, _prevPageNumbers, _pagesNumber, _initialPagesNumber, _clipboard, _savedData, _PagesMapper_instances, ensureInit_fn, buildIdToPageNumber_fn, updatePrevPageNumbers_fn, buildCopyLevels_fn, PagesMapper, PORT_CONNECTION_TIMEOUT, _annotationCanvasMap, _cancelled, _canvas, _canvasFactory, _filteredLength, _id4, _initParams, _onError, _onFrame, _operatorListState, _rendererWorker, _renderTasks, _WorkerRenderTask_instances, drawAnnotationCanvases_fn, WorkerRenderTask, _capability, _enableHWA2, _enableWebGPU, _messageHandler, _operatorListId, _operatorLists, _pendingMessages, _pendingRequests2, _port2, _portNames, _renderTaskId, _renderTasks2, _terminateEarly, _webWorker, _workerAC, _connectionId, _usedPorts, _RendererWorker_instances, resolve_fn, reject_fn, initializeFromPort_fn, initialize_fn, waitForReady_fn, closeStrayFrames_fn, send_fn, sendObj_fn, _RendererWorker, RendererWorker, MAX_TEXT_DIVS_TO_RENDER, DEFAULT_FONT_SIZE, _a2, _capability2, _container3, _disableProcessItems, _fontInspectorEnabled, _imagesHandler, _lang, _layoutTextParams, _pageHeight, _pageWidth, _pixelRatio, _reader, _rootContainer, _rotation, _scale, _styleCache, _textContentItemsStr, _textContentSource, _textDivs, _transform, _ascentCache, _canvasContexts, _canvasCtxFonts, _minFontSize, _pendingTextLayers, _TextLayer_instances, processItems_fn, appendText_fn, layout_fn, _TextLayer_static, getCtx_fn, quantizeFontSize_fn, ensureCtxFont_fn, ensureMinFontSizeComputed_fn, getAscent_fn, _TextLayer, TextLayer, RENDERING_CANCELLED_TIMEOUT, _docId2, _PDFDocumentLoadingTask, PDFDocumentLoadingTask, _capability3, _listener, PDFDataRangeTransport, PDFDocumentProxy, _pendingCleanup, _pagesMapper, _idCounter, _PDFPageProxy_instances, tryCleanup_fn, _PDFPageProxy, PDFPageProxy, _capability4, _messageHandler2, _port3, _webWorker2, _fakeWorkerId, _isWorkerDisabled, _workerPorts, _PDFWorker_instances, resolve_fn2, initializeFromPort_fn2, initialize_fn2, setupFakeWorker_fn, _PDFWorker_static, mainThreadWorkerMessageHandler_get, _PDFWorker, PDFWorker, _fullReader, _hasMeshPattern, _methodPromises, _networkStream, _pageCache, _pagePromises, _pageRefCache, _passwordCapability, _printToPDF, _WorkerTransport_instances, cacheSimpleMethod_fn, onProgress_fn3, WorkerTransport, RenderTask, _dependencyTracker2, _imagesTracker, _rAF, _rendererTask, _waitForGPU, _canvasInUse, _InternalRenderTask, InternalRenderTask, api_version, build, _button, _buttonSwatch, _defaultColor, _dropdown, _dropdownWasFromKeyboard, _isMainColorPicker, _editor4, _eventBus, _openDropdownAC, _uiManager2, _l10nColor, _ColorPicker_instances, getDropdownRoot_fn, colorSelect_fn, keyDown_fn, openDropdown_fn, pointerDown_fn2, isDropdownVisible_get, _ColorPicker, ColorPicker, _input, _hasAlpha, _editor5, _uiManager3, _l10nColor2, _BasicColorPicker, BasicColorPicker, ColorConverters, BaseSVGFactory, DOMSVGFactory, annotation_layer_DEFAULT_FONT_SIZE, GetElementsByNameSet, TIMEZONE_OFFSET, AnnotationElementFactory, _updates, _hasBorder, _popupElement, _AnnotationElement_instances, setRectEdited_fn, _AnnotationElement, AnnotationElement, EditorAnnotationElement, _LinkAnnotationElement_instances, setInternalLink_fn, bindAttachment_fn, bindSetOCGState_fn, LinkAnnotationElement, TextAnnotationElement, WidgetAnnotationElement, TextWidgetAnnotationElement, SignatureWidgetAnnotationElement, CheckboxWidgetAnnotationElement, RadioButtonWidgetAnnotationElement, PushButtonWidgetAnnotationElement, ChoiceWidgetAnnotationElement, _PopupAnnotationElement_instances, createPopup_fn, PopupAnnotationElement, _commentManager2, _boundKeyDown, _boundHide, _boundShow, _boundToggle, _color, _container4, _contentsObj, _dateObj, _elements, _parent, _parentRect, _pinned, _popup, _popupAbortController, _position2, _commentButton, _commentButtonPosition, _popupPosition2, _rect, _richText2, _titleObj, _updates2, _wasVisible, _firstElement, _commentText, _PopupElement_instances, addEventListeners_fn, setCommentButtonPosition_fn, updateCommentButtonPosition_fn, updateColor_fn, html_get, fontSize_get, fontColor_get, makePopupContent_fn, keyDown_fn2, setPosition_fn, toggle_fn, show_fn, hide_fn, PopupElement, FreeTextAnnotationElement, _line, LineAnnotationElement, _square, SquareAnnotationElement, _circle, CircleAnnotationElement, _polyline, PolylineAnnotationElement, PolygonAnnotationElement, CaretAnnotationElement, _polylinesGroupElement, _polylines, _InkAnnotationElement_instances, getTransform_fn, InkAnnotationElement, HighlightAnnotationElement, UnderlineAnnotationElement, SquigglyAnnotationElement, StrikeOutAnnotationElement, StampAnnotationElement, _trigger, _FileAttachmentAnnotationElement_instances, download_fn, FileAttachmentAnnotationElement, _abortController2, _contentUrl, _media, _MediaAnnotationElement_instances, load_fn, revokeContentUrl_fn, MediaAnnotationElement, _accessibilityManager, _annotationCanvasMap2, _annotationStorage2, _editableAnnotations, _structTreeLayer, _linkService, _elements2, _hasAriaAttributesFromStructTree, _AnnotationLayer_instances, addElementsToDOM_fn, setAnnotationCanvasMap_fn, _AnnotationLayer, AnnotationLayer, EOL_PATTERN, _content, _editorDivId, _editModeAC, _fontSize, _FreeTextEditor_instances, updateFontSize_fn, updateColor_fn2, extractText_fn, setEditorDimensions_fn, _FreeTextEditor_static, getNodeContent_fn, setContent_fn, serializeContent_fn, deserializeContent_fn, hasElementChanged_fn, _FreeTextEditor, FreeTextEditor, _svgProperties, DrawingOptions, _internalDiv, _mustBeCommitted, _currentDraw, _currentDrawingAC, _currentDrawingOptions, _currentClipPathId, _DrawingEditor_instances, createDrawOutlines_fn, createDrawing_fn, createFocusOutline_fn, updateFocusOutline_fn, toggleFocusOutlineClass_fn, updateVisibility_fn, rotationAngle_get, cleanDrawLayer_fn, addToDrawLayer_fn, convertToParentSpace_fn, convertToDrawSpace_fn, updateBbox_fn, rotateBox_fn, _DrawingEditor, DrawingEditor, Outline, _box, _bottom, _innerMargin, _isLTR, _top, _last, _lastX, _lastY, _min, _min_dist, _scaleFactor, _thickness, _points, _MIN_DIST, _MIN_DIFF, _MIN, _FreeDrawOutliner_instances, getLastCoords_fn, toSVGPathTwoPoints_fn, toSVGPathStart_fn, toSVGPathEnd_fn, getOutlineTwoPoints_fn, getOutlineStart_fn, getOutlineEnd_fn, _FreeDrawOutliner, FreeDrawOutliner, _box2, _bbox, _innerMargin2, _isLTR2, _points2, _scaleFactor2, _outline, _FreeDrawOutline_instances, computeMinMax_fn, FreeDrawOutline, _box3, _firstPoint, _lastPoint, _verticalEdges, _intervals, _HighlightOutliner_instances, getOutlines_fn, binarySearch_fn, insert_fn, remove_fn, breakEdge_fn, HighlightOutliner, _box4, _boxes, _outlines, HighlightOutline, FreeHighlightOutliner, _outliner, _thickness2, FreeHighlightDrawer, _EXTRA_THICKNESS, _FreeHighlightOutline, FreeHighlightOutline, HighlightDrawingOptions, _anchorNode, _anchorOffset, _focusNode, _focusOffset, _methodOfCreation, _text2, _HighlightEditor_instances, relativeToBox_fn, keydown_fn, setCaret_fn, hasElementChanged_fn2, _HighlightEditor, HighlightEditor, _HALF_WINDOW, _UPSAMPLING_PERIOD, _MAX_DIVISIONS, _TIME_EPSILON, _samples, _firstTime, _lastTime, _InputSmoother_instances, smooth_fn, getSampleIndex_fn, average_fn, _InputSmoother, InputSmoother, _last2, _tip, _line2, _lines, _rotation2, _smoother, _thickness3, _points3, _inputCount, _lastInput, _lastSVGPath, _lastIndex, _outlines2, _parentWidth, _parentHeight, _InkDrawOutliner_instances, startLine_fn, normalizeToTip_fn, addSample_fn, isTooClose_fn, addSmoothedPoints_fn, addPoint_fn, updatePath_fn, endLine_fn, toSVGPathWithTip_fn, InkDrawOutliner, _bbox2, _currentRotation, _innerMargin3, _lines2, _parentWidth2, _parentHeight2, _parentScale, _rotation3, _thickness4, _InkDrawOutline_instances, getMarginComponents_fn, getBBoxWithNoMargin_fn, computeBbox_fn, updateThickness_fn, InkDrawOutline, InkDrawingOptions, _InkEditor_instances, hasElementChanged_fn3, _InkEditor, InkEditor, ContourDrawOutline, BASE_HEADER_LENGTH, POINTS_PROPERTIES_NUMBER, _PARAMETERS, _SignatureExtractor_static, neighborIndexToId_fn, _neighborIdToIndex, clockwiseNonZero_fn, counterClockwiseNonZero_fn, findContours_fn, douglasPeuckerHelper_fn, douglasPeucker_fn, bilateralFilter_fn, getHistogram_fn, toUint8_fn, guessThreshold_fn, getGrayPixels_fn, SignatureExtractor, SignatureOptions, DrawnSignatureOptions, _isExtracted, _description, _signatureData, _signatureUUID, _isWaitingForSignature, _SignatureEditor, SignatureEditor, _bitmap, _bitmapId, _bitmapPromise, _bitmapUrl, _bitmapFile, _bitmapFileName, _canvas2, _missingCanvas, _resizeTimeoutId, _isSvg, _hasBeenAddedInUndoStack, _StampEditor_instances, getBitmapFetched_fn, getBitmapDone_fn, getBitmap_fn, createCanvas_fn, scaleBitmap_fn, drawBitmap_fn, serializeBitmap_fn, hasElementChanged_fn4, _StampEditor, StampEditor, _accessibilityManager2, _allowClick, _annotationLayer, _clickAC, _editorFocusTimeoutId, _editors, _hadPointerDown, _isDisabling, _isEnabling, _drawingAC, _focusedElement, _textLayer, _textSelectionAC, _textLayerDblClickAC, _lastPointerDownTimestamp, _uiManager4, _editorTypes2, _AnnotationEditorLayer_instances, allEditorsIterator_get, textLayerPointerDown_fn, currentEditorType_get, createNewEditor_fn, getCenterPoint_fn, cleanup_fn, _AnnotationEditorLayer, AnnotationEditorLayer, _parent2, _mapping, _textLayer2, _filterFactory2, _pageColors2, _textLayerObserver, _toUpdate, _id5, _selectionId, _selectionChangeAC, _selections, _isSelecting, _textLayerSet, _textLayers, _DrawLayer_static, cleanupTextLayerSelection_fn, hasSelection_fn, getOrderedTextLayers_fn, selectionChange_fn2, setBox_fn, _DrawLayer_instances, createSVG_fn, createClipPath_fn, updateProperties_fn, _DrawLayer, DrawLayer, _coordinates, _coordinatesByElement, _getPageCanvas, _minSize, _pageWidth2, _pageHeight2, _activeImage, _TextLayerImages_instances, createImagePlaceholder_fn, _TextLayerImages, TextLayerImages;
  var init_pdf = __esm({
    "node_modules/pdfjs-dist/legacy/build/pdf.mjs"() {
      import_meta = {};
      __webpack_modules__ = {
        /***/
        463(module) {
          var $TypeError = TypeError;
          module.exports = function(argument) {
            if (typeof argument == "string") return argument;
            throw new $TypeError("Argument is not a string");
          };
        },
        /***/
        804(module) {
          var commonAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          var base64Alphabet = commonAlphabet + "+/";
          var base64UrlAlphabet = commonAlphabet + "-_";
          var inverse = function(characters) {
            var result = {};
            var index = 0;
            for (; index < 64; index++) result[characters.charAt(index)] = index;
            return result;
          };
          module.exports = {
            i2c: base64Alphabet,
            c2i: inverse(base64Alphabet),
            i2cUrl: base64UrlAlphabet,
            c2iUrl: inverse(base64UrlAlphabet)
          };
        },
        /***/
        529(module) {
          module.exports = function(value2, done) {
            return { value: value2, done };
          };
        },
        /***/
        837(module) {
          var $TypeError = TypeError;
          var MAX_SAFE_INTEGER = 9007199254740991;
          module.exports = function(it) {
            if (it > MAX_SAFE_INTEGER) throw new $TypeError("Maximum allowed index exceeded");
            return it;
          };
        },
        /***/
        2(module) {
          module.exports = {
            IndexSizeError: { s: "INDEX_SIZE_ERR", c: 1, m: 1 },
            DOMStringSizeError: { s: "DOMSTRING_SIZE_ERR", c: 2, m: 0 },
            HierarchyRequestError: { s: "HIERARCHY_REQUEST_ERR", c: 3, m: 1 },
            WrongDocumentError: { s: "WRONG_DOCUMENT_ERR", c: 4, m: 1 },
            InvalidCharacterError: { s: "INVALID_CHARACTER_ERR", c: 5, m: 1 },
            NoDataAllowedError: { s: "NO_DATA_ALLOWED_ERR", c: 6, m: 0 },
            NoModificationAllowedError: { s: "NO_MODIFICATION_ALLOWED_ERR", c: 7, m: 1 },
            NotFoundError: { s: "NOT_FOUND_ERR", c: 8, m: 1 },
            NotSupportedError: { s: "NOT_SUPPORTED_ERR", c: 9, m: 1 },
            InUseAttributeError: { s: "INUSE_ATTRIBUTE_ERR", c: 10, m: 1 },
            InvalidStateError: { s: "INVALID_STATE_ERR", c: 11, m: 1 },
            SyntaxError: { s: "SYNTAX_ERR", c: 12, m: 1 },
            InvalidModificationError: { s: "INVALID_MODIFICATION_ERR", c: 13, m: 1 },
            NamespaceError: { s: "NAMESPACE_ERR", c: 14, m: 1 },
            InvalidAccessError: { s: "INVALID_ACCESS_ERR", c: 15, m: 1 },
            ValidationError: { s: "VALIDATION_ERR", c: 16, m: 0 },
            TypeMismatchError: { s: "TYPE_MISMATCH_ERR", c: 17, m: 1 },
            SecurityError: { s: "SECURITY_ERR", c: 18, m: 1 },
            NetworkError: { s: "NETWORK_ERR", c: 19, m: 1 },
            AbortError: { s: "ABORT_ERR", c: 20, m: 1 },
            URLMismatchError: { s: "URL_MISMATCH_ERR", c: 21, m: 1 },
            QuotaExceededError: { s: "QUOTA_EXCEEDED_ERR", c: 22, m: 1 },
            TimeoutError: { s: "TIMEOUT_ERR", c: 23, m: 1 },
            InvalidNodeTypeError: { s: "INVALID_NODE_TYPE_ERR", c: 24, m: 1 },
            DataCloneError: { s: "DATA_CLONE_ERR", c: 25, m: 1 }
          };
        },
        /***/
        944(module) {
          var $TypeError = TypeError;
          module.exports = function(options) {
            var alphabet = options && options.alphabet;
            if (alphabet === void 0 || alphabet === "base64" || alphabet === "base64url") return alphabet || "base64";
            throw new $TypeError("Incorrect `alphabet` option");
          };
        },
        /***/
        767(module) {
          module.exports = function(obj) {
            return {
              iterator: obj,
              next: obj.next,
              done: false
            };
          };
        },
        /***/
        117(module) {
          module.exports = function(it) {
            return it === null || it === void 0;
          };
        },
        /***/
        859(module) {
          module.exports = function(state) {
            state.iterator = state.next = state.nextHandler = state.mapper = state.predicate = state.inner = state.iterables = state.iters = state.openIters = state.padding = state.finishResults = state.buffer = null;
          };
        },
        /***/
        684(module) {
          module.exports = function(methodName, argument) {
            var method = typeof Iterator == "function" && Iterator.prototype[methodName];
            if (method) try {
              method.call({ next: null }, argument).next();
            } catch (error) {
              return true;
            }
          };
        },
        /***/
        269(module) {
          module.exports = Object.create ? /* @__PURE__ */ Object.create(null) : {};
        },
        /***/
        741(module) {
          var ceil2 = Math.ceil;
          var floor = Math.floor;
          module.exports = Math.trunc || function trunc(x) {
            var n = +x;
            return (n > 0 ? floor : ceil2)(n);
          };
        },
        /***/
        149(module) {
          var $RangeError = RangeError;
          module.exports = function(it) {
            if (it === it) return it;
            throw new $RangeError("NaN is not allowed");
          };
        },
        /***/
        717(__unused_webpack_module, exports) {
          exports.f = Object.getOwnPropertySymbols;
        },
        /***/
        103(module) {
          module.exports = function(exec) {
            try {
              return { error: false, value: exec() };
            } catch (error) {
              return { error: true, value: error };
            }
          };
        },
        /***/
        750(module, __unused_webpack_exports, __webpack_require__2) {
          var isNullOrUndefined = __webpack_require__2(117);
          var $TypeError = TypeError;
          module.exports = function(it) {
            if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
            return it;
          };
        },
        /***/
        835(module) {
          module.exports = function(METHOD_NAME) {
            try {
              var baseSet = /* @__PURE__ */ new Set();
              var setLike = {
                size: 0,
                has: function() {
                  return true;
                },
                keys: function() {
                  return Object.defineProperty({}, "next", {
                    get: function() {
                      baseSet.clear();
                      baseSet.add(4);
                      return function() {
                        return { done: true };
                      };
                    }
                  });
                }
              };
              var result = baseSet[METHOD_NAME](setLike);
              return result.size === 1 && result.values().next().value === 4;
            } catch (error) {
              return false;
            }
          };
        },
        /***/
        291(module, __unused_webpack_exports, __webpack_require__2) {
          var trunc = __webpack_require__2(741);
          module.exports = function(argument) {
            var number2 = +argument;
            return number2 !== number2 || number2 === 0 ? 0 : trunc(number2);
          };
        },
        /***/
        14(module, __unused_webpack_exports, __webpack_require__2) {
          var toIntegerOrInfinity = __webpack_require__2(291);
          var min = Math.min;
          module.exports = function(argument) {
            var len = toIntegerOrInfinity(argument);
            return len > 0 ? min(len, 9007199254740991) : 0;
          };
        },
        /***/
        981(module, __unused_webpack_exports, __webpack_require__2) {
          var requireObjectCoercible = __webpack_require__2(750);
          var $Object = Object;
          module.exports = function(argument) {
            return $Object(requireObjectCoercible(argument));
          };
        },
        /***/
        590(module, __unused_webpack_exports, __webpack_require__2) {
          var toIntegerOrInfinity = __webpack_require__2(291);
          var $RangeError = RangeError;
          module.exports = function(it) {
            var result = toIntegerOrInfinity(it);
            if (result < 0) throw new $RangeError("The argument can't be less than 0");
            return result;
          };
        },
        /***/
        812(module) {
          var $TypeError = TypeError;
          module.exports = function(passed, required) {
            if (passed < required) throw new $TypeError("Not enough arguments");
            return passed;
          };
        }
        /******/
      };
      __webpack_module_cache__ = {};
      __webpack_require__.cw = (body) => {
        var mod;
        return () => {
          if (body) {
            var fn = body;
            body = 0;
            mod = { exports: {} };
            fn.call(mod.exports, mod, mod.exports);
          }
          return mod.exports;
        };
      };
      __webpack_require__.d = (exports, definition) => {
        for (var key in definition) {
          if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          }
        }
      };
      __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
      a_callable_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var isCallable = is_callable_namespaceFn();
        var tryToString = try_to_string_namespaceFn();
        var $TypeError = TypeError;
        module.exports = function(argument) {
          if (isCallable(argument)) return argument;
          throw new $TypeError(tryToString(argument) + " is not a function");
        };
      });
      a_possible_prototype_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var isPossiblePrototype = is_possible_prototype_namespaceFn();
        var $String = String;
        var $TypeError = TypeError;
        module.exports = function(argument) {
          if (isPossiblePrototype(argument)) return argument;
          throw new $TypeError("Can't set " + $String(argument) + " as a prototype");
        };
      });
      a_set_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var has = set_helpers_namespaceFn().has;
        module.exports = function(it) {
          has(it);
          return it;
        };
      });
      a_string_namespaceFn = () => {
        return __webpack_require__(463);
      };
      a_weak_key_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var WeakMapHelpers = weak_map_helpers_namespaceFn();
        var weakmap = new WeakMapHelpers.WeakMap();
        var set = WeakMapHelpers.set;
        var remove2 = WeakMapHelpers.remove;
        module.exports = function(key) {
          set(weakmap, key, 1);
          remove2(weakmap, key);
          return key;
        };
      });
      a_weak_map_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var has = weak_map_helpers_namespaceFn().has;
        module.exports = function(it) {
          has(it);
          return it;
        };
      });
      add_to_unscopables_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var wellKnownSymbol = well_known_symbol_namespaceFn();
        var create = object_create_namespaceFn();
        var defineProperty = object_define_property_namespaceFn().f;
        var UNSCOPABLES = wellKnownSymbol("unscopables");
        var ArrayPrototype = Array.prototype;
        if (ArrayPrototype[UNSCOPABLES] === void 0) {
          defineProperty(ArrayPrototype, UNSCOPABLES, {
            configurable: true,
            value: create(null)
          });
        }
        module.exports = function(key) {
          ArrayPrototype[UNSCOPABLES][key] = true;
        };
      });
      an_instance_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var isPrototypeOf = object_is_prototype_of_namespaceFn();
        var $TypeError = TypeError;
        module.exports = function(it, Prototype) {
          if (isPrototypeOf(Prototype, it)) return it;
          throw new $TypeError("Incorrect invocation");
        };
      });
      an_object_or_undefined_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var isObject2 = is_object_namespaceFn();
        var $String = String;
        var $TypeError = TypeError;
        module.exports = function(argument) {
          if (argument === void 0 || isObject2(argument)) return argument;
          throw new $TypeError($String(argument) + " is not an object or undefined");
        };
      });
      an_object_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var isObject2 = is_object_namespaceFn();
        var $String = String;
        var $TypeError = TypeError;
        module.exports = function(argument) {
          if (isObject2(argument)) return argument;
          throw new $TypeError($String(argument) + " is not an object");
        };
      });
      an_uint8_array_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var classof = classof_namespaceFn();
        var $TypeError = TypeError;
        module.exports = function(argument) {
          if (classof(argument) === "Uint8Array") return argument;
          throw new $TypeError("Argument is not an Uint8Array");
        };
      });
      array_buffer_basic_detection_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        module.exports = typeof ArrayBuffer != "undefined" && typeof DataView != "undefined";
      });
      array_buffer_byte_length_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var globalThis2 = global_this_namespaceFn();
        var uncurryThisAccessor = function_uncurry_this_accessor_namespaceFn();
        var classof = classof_raw_namespaceFn();
        var ArrayBuffer2 = globalThis2.ArrayBuffer;
        var TypeError2 = globalThis2.TypeError;
        module.exports = ArrayBuffer2 && uncurryThisAccessor(ArrayBuffer2.prototype, "byteLength", "get") || function(O) {
          if (classof(O) !== "ArrayBuffer") throw new TypeError2("ArrayBuffer expected");
          return O.byteLength;
        };
      });
      array_buffer_is_detached_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var globalThis2 = global_this_namespaceFn();
        var NATIVE_ARRAY_BUFFER = array_buffer_basic_detection_namespaceFn();
        var arrayBufferByteLength = array_buffer_byte_length_namespaceFn();
        var DataView2 = globalThis2.DataView;
        module.exports = function(O) {
          if (!NATIVE_ARRAY_BUFFER || arrayBufferByteLength(O) !== 0) return false;
          try {
            new DataView2(O);
            return false;
          } catch (error) {
            return true;
          }
        };
      });
      array_buffer_not_detached_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var isDetached = array_buffer_is_detached_namespaceFn();
        var $TypeError = TypeError;
        module.exports = function(it) {
          if (isDetached(it)) throw new $TypeError("ArrayBuffer is detached");
          return it;
        };
      });
      array_buffer_view_core_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var NATIVE_ARRAY_BUFFER = array_buffer_basic_detection_namespaceFn();
        var DESCRIPTORS = descriptors_namespaceFn();
        var globalThis2 = global_this_namespaceFn();
        var isCallable = is_callable_namespaceFn();
        var isObject2 = is_object_namespaceFn();
        var hasOwn = has_own_property_namespaceFn();
        var classof = classof_namespaceFn();
        var tryToString = try_to_string_namespaceFn();
        var createNonEnumerableProperty = create_non_enumerable_property_namespaceFn();
        var defineBuiltIn = define_built_in_namespaceFn();
        var defineBuiltInAccessor = define_built_in_accessor_namespaceFn();
        var isPrototypeOf = object_is_prototype_of_namespaceFn();
        var getPrototypeOf = object_get_prototype_of_namespaceFn();
        var setPrototypeOf = object_set_prototype_of_namespaceFn();
        var wellKnownSymbol = well_known_symbol_namespaceFn();
        var uid = uid_namespaceFn();
        var InternalStateModule = internal_state_namespaceFn();
        var enforceInternalState = InternalStateModule.enforce;
        var getInternalState = InternalStateModule.get;
        var Int8Array2 = globalThis2.Int8Array;
        var Int8ArrayPrototype = Int8Array2 && Int8Array2.prototype;
        var Uint8ClampedArray2 = globalThis2.Uint8ClampedArray;
        var Uint8ClampedArrayPrototype = Uint8ClampedArray2 && Uint8ClampedArray2.prototype;
        var TypedArray = Int8Array2 && getPrototypeOf(Int8Array2);
        var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
        var ObjectPrototype = Object.prototype;
        var TypeError2 = globalThis2.TypeError;
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        var TYPED_ARRAY_TAG = uid("TYPED_ARRAY_TAG");
        var TYPED_ARRAY_CONSTRUCTOR = "TypedArrayConstructor";
        var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(globalThis2.opera) !== "Opera";
        var TYPED_ARRAY_TAG_REQUIRED = false;
        var NAME, Constructor, Prototype;
        var TypedArrayConstructorsList = {
          Int8Array: 1,
          Uint8Array: 1,
          Uint8ClampedArray: 1,
          Int16Array: 2,
          Uint16Array: 2,
          Int32Array: 4,
          Uint32Array: 4,
          Float32Array: 4,
          Float64Array: 8
        };
        var BigIntArrayConstructorsList = {
          BigInt64Array: 8,
          BigUint64Array: 8
        };
        var isView = function isView2(it) {
          if (!isObject2(it)) return false;
          var klass = classof(it);
          return klass === "DataView" || hasOwn(TypedArrayConstructorsList, klass) || hasOwn(BigIntArrayConstructorsList, klass);
        };
        var getTypedArrayConstructor = function(it) {
          var proto = getPrototypeOf(it);
          if (!isObject2(proto)) return;
          var state = getInternalState(proto);
          return state && hasOwn(state, TYPED_ARRAY_CONSTRUCTOR) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor(proto);
        };
        var isTypedArray = function(it) {
          if (!isObject2(it)) return false;
          var klass = classof(it);
          return hasOwn(TypedArrayConstructorsList, klass) || hasOwn(BigIntArrayConstructorsList, klass);
        };
        var aTypedArray = function(it) {
          if (isTypedArray(it)) return it;
          throw new TypeError2("Target is not a typed array");
        };
        var aTypedArrayConstructor = function(C) {
          if (isCallable(C) && (!setPrototypeOf || isPrototypeOf(TypedArray, C))) return C;
          throw new TypeError2(tryToString(C) + " is not a typed array constructor");
        };
        var exportTypedArrayMethod = function(KEY, property, forced, options) {
          if (!DESCRIPTORS) return;
          if (forced) for (var ARRAY in TypedArrayConstructorsList) {
            var TypedArrayConstructor = globalThis2[ARRAY];
            if (TypedArrayConstructor && hasOwn(TypedArrayConstructor.prototype, KEY)) try {
              delete TypedArrayConstructor.prototype[KEY];
            } catch (error) {
              try {
                TypedArrayConstructor.prototype[KEY] = property;
              } catch (error2) {
              }
            }
          }
          if (!TypedArrayPrototype[KEY] || forced) {
            defineBuiltIn(TypedArrayPrototype, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property, options);
          }
        };
        var exportTypedArrayStaticMethod = function(KEY, property, forced) {
          var ARRAY, TypedArrayConstructor;
          if (!DESCRIPTORS) return;
          if (setPrototypeOf) {
            if (forced) for (ARRAY in TypedArrayConstructorsList) {
              TypedArrayConstructor = globalThis2[ARRAY];
              if (TypedArrayConstructor && hasOwn(TypedArrayConstructor, KEY)) try {
                delete TypedArrayConstructor[KEY];
              } catch (error) {
              }
            }
            if (!TypedArray[KEY] || forced) {
              try {
                return defineBuiltIn(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
              } catch (error) {
              }
            } else return;
          }
          for (ARRAY in TypedArrayConstructorsList) {
            TypedArrayConstructor = globalThis2[ARRAY];
            if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
              defineBuiltIn(TypedArrayConstructor, KEY, property);
            }
          }
        };
        for (NAME in TypedArrayConstructorsList) {
          Constructor = globalThis2[NAME];
          Prototype = Constructor && Constructor.prototype;
          if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
          else NATIVE_ARRAY_BUFFER_VIEWS = false;
        }
        for (NAME in BigIntArrayConstructorsList) {
          Constructor = globalThis2[NAME];
          Prototype = Constructor && Constructor.prototype;
          if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
        }
        if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable(TypedArray) || TypedArray === Function.prototype) {
          TypedArray = function TypedArray2() {
            throw new TypeError2("Incorrect invocation");
          };
          if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
            if (globalThis2[NAME]) setPrototypeOf(globalThis2[NAME], TypedArray);
          }
        }
        if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
          TypedArrayPrototype = TypedArray.prototype;
          if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
            if (globalThis2[NAME]) setPrototypeOf(globalThis2[NAME].prototype, TypedArrayPrototype);
          }
        }
        if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
          setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
        }
        if (DESCRIPTORS && !hasOwn(TypedArrayPrototype, TO_STRING_TAG)) {
          TYPED_ARRAY_TAG_REQUIRED = true;
          defineBuiltInAccessor(TypedArrayPrototype, TO_STRING_TAG, {
            configurable: true,
            get: function() {
              return isObject2(this) ? this[TYPED_ARRAY_TAG] : void 0;
            }
          });
          for (NAME in TypedArrayConstructorsList) if (globalThis2[NAME]) {
            createNonEnumerableProperty(globalThis2[NAME].prototype, TYPED_ARRAY_TAG, NAME);
          }
        }
        module.exports = {
          NATIVE_ARRAY_BUFFER_VIEWS,
          TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG,
          aTypedArray,
          aTypedArrayConstructor,
          exportTypedArrayMethod,
          exportTypedArrayStaticMethod,
          getTypedArrayConstructor,
          isView,
          isTypedArray,
          TypedArray,
          TypedArrayPrototype
        };
      });
      array_from_constructor_and_list_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var lengthOfArrayLike = length_of_array_like_namespaceFn();
        module.exports = function(Constructor, list, $length) {
          var index = 0;
          var length = arguments.length > 2 ? $length : lengthOfArrayLike(list);
          var result = new Constructor(length);
          while (length > index) result[index] = list[index++];
          return result;
        };
      });
      array_includes_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var toIndexedObject = to_indexed_object_namespaceFn();
        var toAbsoluteIndex = to_absolute_index_namespaceFn();
        var lengthOfArrayLike = length_of_array_like_namespaceFn();
        var createMethod = function(IS_INCLUDES) {
          return function($this, el, fromIndex) {
            var O = toIndexedObject($this);
            var length = lengthOfArrayLike(O);
            if (length === 0) return !IS_INCLUDES && -1;
            var index = toAbsoluteIndex(fromIndex, length);
            var value2;
            if (IS_INCLUDES && el !== el) while (length > index) {
              value2 = O[index++];
              if (value2 !== value2) return true;
            }
            else for (; length > index; index++) {
              if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
            }
            return !IS_INCLUDES && -1;
          };
        };
        module.exports = {
          // `Array.prototype.includes` method
          // https://tc39.es/ecma262/#sec-array.prototype.includes
          includes: createMethod(true),
          // `Array.prototype.indexOf` method
          // https://tc39.es/ecma262/#sec-array.prototype.indexof
          indexOf: createMethod(false)
        };
      });
      array_set_length_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var DESCRIPTORS = descriptors_namespaceFn();
        var isArray = is_array_namespaceFn();
        var $TypeError = TypeError;
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !(function() {
          if (this !== void 0) return true;
          try {
            Object.defineProperty([], "length", { writable: false }).length = 1;
          } catch (error) {
            return error instanceof TypeError;
          }
        })();
        module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function(O, length) {
          if (isArray(O) && !getOwnPropertyDescriptor(O, "length").writable) {
            throw new $TypeError("Cannot set read only .length");
          }
          return O.length = length;
        } : function(O, length) {
          return O.length = length;
        };
      });
      array_slice_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var uncurryThis = function_uncurry_this_namespaceFn();
        module.exports = uncurryThis([].slice);
      });
      base64_map_namespaceFn = () => {
        return __webpack_require__(804);
      };
      call_with_safe_iteration_closing_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var anObject = an_object_namespaceFn();
        var iteratorClose = iterator_close_namespaceFn();
        module.exports = function(iterator, fn, value2, ENTRIES) {
          try {
            return ENTRIES ? fn(anObject(value2)[0], value2[1]) : fn(value2);
          } catch (error) {
            iteratorClose(iterator, "throw", error);
          }
        };
      });
      classof_raw_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var uncurryThis = function_uncurry_this_namespaceFn();
        var toString = uncurryThis({}.toString);
        var stringSlice = uncurryThis("".slice);
        module.exports = function(it) {
          return stringSlice(toString(it), 8, -1);
        };
      });
      classof_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var TO_STRING_TAG_SUPPORT = to_string_tag_support_namespaceFn();
        var isCallable = is_callable_namespaceFn();
        var classofRaw = classof_raw_namespaceFn();
        var wellKnownSymbol = well_known_symbol_namespaceFn();
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        var $Object = Object;
        var CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ (function() {
          return arguments;
        })()) === "Arguments";
        var tryGet = function(it, key) {
          try {
            return it[key];
          } catch (error) {
          }
        };
        module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
          var O, tag, result;
          return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
        };
      });
      copy_constructor_properties_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var hasOwn = has_own_property_namespaceFn();
        var ownKeys4 = own_keys_namespaceFn();
        var getOwnPropertyDescriptorModule = object_get_own_property_descriptor_namespaceFn();
        var definePropertyModule = object_define_property_namespaceFn();
        module.exports = function(target, source, exceptions) {
          var keys2 = ownKeys4(source);
          var defineProperty = definePropertyModule.f;
          var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
          for (var i = 0; i < keys2.length; i++) {
            var key = keys2[i];
            if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
              defineProperty(target, key, getOwnPropertyDescriptor(source, key));
            }
          }
        };
      });
      correct_prototype_getter_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var fails = fails_namespaceFn();
        module.exports = !fails(function() {
          function F() {
          }
          F.prototype.constructor = null;
          return Object.getPrototypeOf(new F()) !== F.prototype;
        });
      });
      create_iter_result_object_namespaceFn = () => {
        return __webpack_require__(529);
      };
      create_non_enumerable_property_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var DESCRIPTORS = descriptors_namespaceFn();
        var definePropertyModule = object_define_property_namespaceFn();
        var createPropertyDescriptor = create_property_descriptor_namespaceFn();
        module.exports = DESCRIPTORS ? function(object, key, value2) {
          return definePropertyModule.f(object, key, createPropertyDescriptor(1, value2));
        } : function(object, key, value2) {
          object[key] = value2;
          return object;
        };
      });
      create_property_descriptor_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        module.exports = function(bitmap, value2) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value2
          };
        };
      });
      create_property_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var DESCRIPTORS = descriptors_namespaceFn();
        var definePropertyModule = object_define_property_namespaceFn();
        var createPropertyDescriptor = create_property_descriptor_namespaceFn();
        module.exports = function(object, key, value2) {
          if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value2));
          else object[key] = value2;
        };
      });
      define_built_in_accessor_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var makeBuiltIn = make_built_in_namespaceFn();
        var defineProperty = object_define_property_namespaceFn();
        module.exports = function(target, name, descriptor) {
          if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
          if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
          return defineProperty.f(target, name, descriptor);
        };
      });
      define_built_in_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var isCallable = is_callable_namespaceFn();
        var definePropertyModule = object_define_property_namespaceFn();
        var makeBuiltIn = make_built_in_namespaceFn();
        var defineGlobalProperty = define_global_property_namespaceFn();
        module.exports = function(O, key, value2, options) {
          if (!options) options = {};
          var simple = options.enumerable;
          var name = options.name !== void 0 ? options.name : key;
          if (isCallable(value2)) makeBuiltIn(value2, name, options);
          if (options.global) {
            if (simple) O[key] = value2;
            else defineGlobalProperty(key, value2);
          } else {
            try {
              if (!options.unsafe) delete O[key];
              else if (O[key]) simple = true;
            } catch (error) {
            }
            if (simple) O[key] = value2;
            else definePropertyModule.f(O, key, {
              value: value2,
              enumerable: false,
              configurable: !options.nonConfigurable,
              writable: !options.nonWritable
            });
          }
          return O;
        };
      });
      define_built_ins_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var defineBuiltIn = define_built_in_namespaceFn();
        module.exports = function(target, src, options) {
          for (var key in src) defineBuiltIn(target, key, src[key], options);
          return target;
        };
      });
      define_global_property_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var globalThis2 = global_this_namespaceFn();
        var defineProperty = Object.defineProperty;
        module.exports = function(key, value2) {
          try {
            defineProperty(globalThis2, key, { value: value2, configurable: true, writable: true });
          } catch (error) {
            globalThis2[key] = value2;
          }
          return value2;
        };
      });
      descriptors_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var fails = fails_namespaceFn();
        module.exports = !fails(function() {
          return Object.defineProperty({}, 1, { get: function() {
            return 7;
          } })[1] !== 7;
        });
      });
      document_create_element_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var globalThis2 = global_this_namespaceFn();
        var isObject2 = is_object_namespaceFn();
        var document2 = globalThis2.document;
        var EXISTS = isObject2(document2) && isObject2(document2.createElement);
        module.exports = function(it) {
          return EXISTS ? document2.createElement(it) : {};
        };
      });
      does_not_exceed_safe_integer_namespaceFn = () => {
        return __webpack_require__(837);
      };
      dom_exception_constants_namespaceFn = () => {
        return __webpack_require__(2);
      };
      enum_bug_keys_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        module.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf"
        ];
      });
      environment_user_agent_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var globalThis2 = global_this_namespaceFn();
        var navigator2 = globalThis2.navigator;
        var userAgent = navigator2 && navigator2.userAgent;
        module.exports = userAgent ? String(userAgent) : "";
      });
      environment_v8_version_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var globalThis2 = global_this_namespaceFn();
        var userAgent = environment_user_agent_namespaceFn();
        var process2 = globalThis2.process;
        var Deno2 = globalThis2.Deno;
        var versions = process2 && process2.versions || Deno2 && Deno2.version;
        var v8 = versions && versions.v8;
        var match, version5;
        if (v8) {
          match = v8.split(".");
          version5 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
        }
        if (!version5 && userAgent) {
          match = userAgent.match(/Edge\/(\d+)/);
          if (!match || match[1] >= 74) {
            match = userAgent.match(/Chrome\/(\d+)/);
            if (match) version5 = +match[1];
          }
        }
        module.exports = version5;
      });
      error_stack_clear_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var uncurryThis = function_uncurry_this_namespaceFn();
        var $Error = Error;
        var replace = uncurryThis("".replace);
        var TEST = (function(arg) {
          return String(new $Error(arg).stack);
        })("zxcasd");
        var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
        var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
        module.exports = function(stack, dropEntries) {
          if (IS_V8_OR_CHAKRA_STACK && typeof stack == "string" && !$Error.prepareStackTrace) {
            while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, "");
          }
          return stack;
        };
      });
      export_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var globalThis2 = global_this_namespaceFn();
        var getOwnPropertyDescriptor = object_get_own_property_descriptor_namespaceFn().f;
        var createNonEnumerableProperty = create_non_enumerable_property_namespaceFn();
        var defineBuiltIn = define_built_in_namespaceFn();
        var defineGlobalProperty = define_global_property_namespaceFn();
        var copyConstructorProperties = copy_constructor_properties_namespaceFn();
        var isForced = is_forced_namespaceFn();
        module.exports = function(options, source) {
          var TARGET = options.target;
          var GLOBAL = options.global;
          var STATIC = options.stat;
          var FORCED, target, key, targetProperty, sourceProperty, descriptor;
          if (GLOBAL) {
            target = globalThis2;
          } else if (STATIC) {
            target = globalThis2[TARGET] || defineGlobalProperty(TARGET, {});
          } else {
            target = globalThis2[TARGET] && globalThis2[TARGET].prototype;
          }
          if (target) for (key in source) {
            sourceProperty = source[key];
            if (options.dontCallGetSet) {
              descriptor = getOwnPropertyDescriptor(target, key);
              targetProperty = descriptor && descriptor.value;
            } else targetProperty = target[key];
            FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
            if (!FORCED && targetProperty !== void 0) {
              if (typeof sourceProperty == typeof targetProperty) continue;
              copyConstructorProperties(sourceProperty, targetProperty);
            }
            if (options.sham || targetProperty && targetProperty.sham) {
              createNonEnumerableProperty(sourceProperty, "sham", true);
            }
            defineBuiltIn(target, key, sourceProperty, options);
          }
        };
      });
      fails_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        module.exports = function(exec) {
          try {
            return !!exec();
          } catch (error) {
            return true;
          }
        };
      });
      function_apply_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var NATIVE_BIND = function_bind_native_namespaceFn();
        var FunctionPrototype = Function.prototype;
        var apply = FunctionPrototype.apply;
        var call2 = FunctionPrototype.call;
        module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call2.bind(apply) : function() {
          return call2.apply(apply, arguments);
        });
      });
      function_bind_context_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var uncurryThis = function_uncurry_this_clause_namespaceFn();
        var aCallable = a_callable_namespaceFn();
        var NATIVE_BIND = function_bind_native_namespaceFn();
        var bind = uncurryThis(uncurryThis.bind);
        module.exports = function(fn, that) {
          aCallable(fn);
          return that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
            return fn.apply(that, arguments);
          };
        };
      });
      function_bind_native_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var fails = fails_namespaceFn();
        module.exports = !fails(function() {
          var test = function() {
          }.bind();
          return typeof test != "function" || test.hasOwnProperty("prototype");
        });
      });
      function_call_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var NATIVE_BIND = function_bind_native_namespaceFn();
        var call2 = Function.prototype.call;
        module.exports = NATIVE_BIND ? call2.bind(call2) : function() {
          return call2.apply(call2, arguments);
        };
      });
      function_name_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var DESCRIPTORS = descriptors_namespaceFn();
        var hasOwn = has_own_property_namespaceFn();
        var FunctionPrototype = Function.prototype;
        var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
        var EXISTS = hasOwn(FunctionPrototype, "name");
        var PROPER = EXISTS && function something() {
        }.name === "something";
        var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
        module.exports = __spreadProps(__spreadValues(
          __spreadValues(
            {},
            /* unused pure expression */
            null
          ),
          /* unused pure expression */
          null
        ), {
          CONFIGURABLE
        });
      });
      function_uncurry_this_accessor_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var uncurryThis = function_uncurry_this_namespaceFn();
        var aCallable = a_callable_namespaceFn();
        module.exports = function(object, key, method) {
          try {
            return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
          } catch (error) {
          }
        };
      });
      function_uncurry_this_clause_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var classofRaw = classof_raw_namespaceFn();
        var uncurryThis = function_uncurry_this_namespaceFn();
        module.exports = function(fn) {
          if (classofRaw(fn) === "Function") return uncurryThis(fn);
        };
      });
      function_uncurry_this_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var NATIVE_BIND = function_bind_native_namespaceFn();
        var FunctionPrototype = Function.prototype;
        var call2 = FunctionPrototype.call;
        var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call2, call2);
        module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
          return function() {
            return call2.apply(fn, arguments);
          };
        };
      });
      get_alphabet_option_namespaceFn = () => {
        return __webpack_require__(944);
      };
      get_built_in_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var globalThis2 = global_this_namespaceFn();
        var isCallable = is_callable_namespaceFn();
        var aFunction = function(argument) {
          return isCallable(argument) ? argument : void 0;
        };
        module.exports = function(namespace, method) {
          return arguments.length < 2 ? aFunction(globalThis2[namespace]) : globalThis2[namespace] && globalThis2[namespace][method];
        };
      });
      get_iterator_direct_namespaceFn = () => {
        return __webpack_require__(767);
      };
      get_iterator_flattenable_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var call2 = function_call_namespaceFn();
        var anObject = an_object_namespaceFn();
        var getIteratorDirect = get_iterator_direct_namespaceFn();
        var getIteratorMethod = get_iterator_method_internal_namespaceFn();
        module.exports = function(obj, stringHandling) {
          if (!stringHandling || typeof obj !== "string") anObject(obj);
          var method = getIteratorMethod(obj);
          return getIteratorDirect(anObject(method !== void 0 ? call2(method, obj) : obj));
        };
      });
      get_iterator_internal_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var call2 = function_call_namespaceFn();
        var isCallable = is_callable_namespaceFn();
        var anObject = an_object_namespaceFn();
        var tryToString = try_to_string_namespaceFn();
        var getIteratorMethod = get_iterator_method_internal_namespaceFn();
        var $TypeError = TypeError;
        module.exports = function(argument, usingIterator) {
          var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
          if (isCallable(iteratorMethod)) return anObject(call2(iteratorMethod, argument));
          throw new $TypeError(tryToString(argument) + " is not iterable");
        };
      });
      get_iterator_method_internal_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var classof = classof_raw_namespaceFn();
        var isNullOrUndefined = is_null_or_undefined_namespaceFn();
        var getMethod = get_method_namespaceFn();
        var wellKnownSymbol = well_known_symbol_namespaceFn();
        var ITERATOR = wellKnownSymbol("iterator");
        var ArrayPrototype = Array.prototype;
        module.exports = function(it) {
          if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || (classof(it) === "Arguments" ? ArrayPrototype[ITERATOR] : void 0);
        };
      });
      get_method_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var aCallable = a_callable_namespaceFn();
        var isNullOrUndefined = is_null_or_undefined_namespaceFn();
        module.exports = function(V, P) {
          var func = V[P];
          return isNullOrUndefined(func) ? void 0 : aCallable(func);
        };
      });
      get_set_record_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var aCallable = a_callable_namespaceFn();
        var anObject = an_object_namespaceFn();
        var call2 = function_call_namespaceFn();
        var toIntegerOrInfinity = to_integer_or_infinity_namespaceFn();
        var getIteratorDirect = get_iterator_direct_namespaceFn();
        var INVALID_SIZE = "Invalid size";
        var $RangeError = RangeError;
        var $TypeError = TypeError;
        var max = Math.max;
        var SetRecord = function(set, intSize) {
          this.set = set;
          this.size = max(intSize, 0);
          this.has = aCallable(set.has);
          this.keys = aCallable(set.keys);
        };
        SetRecord.prototype = {
          getIterator: function() {
            return getIteratorDirect(anObject(call2(this.keys, this.set)));
          },
          includes: function(it) {
            return call2(this.has, this.set, it);
          }
        };
        module.exports = function(obj) {
          anObject(obj);
          var numSize = +obj.size;
          if (numSize !== numSize) throw new $TypeError(INVALID_SIZE);
          var intSize = toIntegerOrInfinity(numSize);
          if (intSize < 0) throw new $RangeError(INVALID_SIZE);
          return new SetRecord(obj, intSize);
        };
      });
      global_this_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(function(module) {
        var check = function(it) {
          return it && it.Math === Math && it;
        };
        module.exports = // eslint-disable-next-line es/no-global-this -- safe
        check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
        check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof this == "object" && this) || // eslint-disable-next-line no-new-func -- fallback
        /* @__PURE__ */ (function() {
          return this;
        })() || Function("return this")();
      });
      has_own_property_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var uncurryThis = function_uncurry_this_namespaceFn();
        var toObject = to_object_namespaceFn();
        var hasOwnProperty = uncurryThis({}.hasOwnProperty);
        module.exports = Object.hasOwn || function hasOwn(it, key) {
          return hasOwnProperty(toObject(it), key);
        };
      });
      hidden_keys_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        module.exports = {};
      });
      html_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var getBuiltIn = get_built_in_namespaceFn();
        module.exports = getBuiltIn("document", "documentElement");
      });
      ie8_dom_define_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var DESCRIPTORS = descriptors_namespaceFn();
        var fails = fails_namespaceFn();
        var createElement = document_create_element_namespaceFn();
        module.exports = !DESCRIPTORS && !fails(function() {
          return Object.defineProperty(createElement("div"), "a", {
            get: function() {
              return 7;
            }
          }).a !== 7;
        });
      });
      indexed_object_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var uncurryThis = function_uncurry_this_namespaceFn();
        var fails = fails_namespaceFn();
        var classof = classof_raw_namespaceFn();
        var $Object = Object;
        var split = uncurryThis("".split);
        module.exports = fails(function() {
          return !$Object("z").propertyIsEnumerable(0);
        }) ? function(it) {
          return classof(it) === "String" ? split(it, "") : $Object(it);
        } : $Object;
      });
      inherit_if_required_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var isCallable = is_callable_namespaceFn();
        var isObject2 = is_object_namespaceFn();
        var setPrototypeOf = object_set_prototype_of_namespaceFn();
        module.exports = function($this, dummy, Wrapper) {
          var NewTarget, NewTargetPrototype;
          if (
            // it can work only with native `setPrototypeOf`
            setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
            isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject2(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype
          ) setPrototypeOf($this, NewTargetPrototype);
          return $this;
        };
      });
      inspect_source_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var uncurryThis = function_uncurry_this_namespaceFn();
        var isCallable = is_callable_namespaceFn();
        var store = shared_store_namespaceFn();
        var functionToString = uncurryThis(Function.toString);
        if (!isCallable(store.inspectSource)) {
          store.inspectSource = function(it) {
            return functionToString(it);
          };
        }
        module.exports = store.inspectSource;
      });
      internal_state_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var NATIVE_WEAK_MAP = weak_map_basic_detection_namespaceFn();
        var globalThis2 = global_this_namespaceFn();
        var isObject2 = is_object_namespaceFn();
        var createNonEnumerableProperty = create_non_enumerable_property_namespaceFn();
        var hasOwn = has_own_property_namespaceFn();
        var shared = shared_store_namespaceFn();
        var sharedKey = shared_key_namespaceFn();
        var hiddenKeys = hidden_keys_namespaceFn();
        var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
        var TypeError2 = globalThis2.TypeError;
        var WeakMap2 = globalThis2.WeakMap;
        var set, get2, has;
        var enforce = function(it) {
          return has(it) ? get2(it) : set(it, {});
        };
        var getterFor = function(TYPE) {
          return function(it) {
            var state;
            if (!isObject2(it) || (state = get2(it)).type !== TYPE) {
              throw new TypeError2("Incompatible receiver, " + TYPE + " required");
            }
            return state;
          };
        };
        if (NATIVE_WEAK_MAP || shared.state) {
          var store = shared.state || (shared.state = new WeakMap2());
          store.get = store.get;
          store.has = store.has;
          store.set = store.set;
          set = function(it, metadata) {
            if (store.has(it)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
            metadata.facade = it;
            store.set(it, metadata);
            return metadata;
          };
          get2 = function(it) {
            return store.get(it) || {};
          };
          has = function(it) {
            return store.has(it);
          };
        } else {
          var STATE = sharedKey("state");
          hiddenKeys[STATE] = true;
          set = function(it, metadata) {
            if (hasOwn(it, STATE)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
            metadata.facade = it;
            createNonEnumerableProperty(it, STATE, metadata);
            return metadata;
          };
          get2 = function(it) {
            return hasOwn(it, STATE) ? it[STATE] : {};
          };
          has = function(it) {
            return hasOwn(it, STATE);
          };
        }
        module.exports = {
          set,
          get: get2,
          has,
          enforce,
          getterFor
        };
      });
      is_array_iterator_method_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var wellKnownSymbol = well_known_symbol_namespaceFn();
        var Iterators = iterators_namespaceFn();
        var ITERATOR = wellKnownSymbol("iterator");
        var ArrayPrototype = Array.prototype;
        module.exports = function(it) {
          return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
        };
      });
      is_array_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var classof = classof_raw_namespaceFn();
        module.exports = Array.isArray || function isArray(argument) {
          return classof(argument) === "Array";
        };
      });
      is_big_int_array_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var classof = classof_namespaceFn();
        module.exports = function(it) {
          var klass = classof(it);
          return klass === "BigInt64Array" || klass === "BigUint64Array";
        };
      });
      is_callable_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var documentAll = typeof document == "object" && document.all;
        module.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
          return typeof argument == "function" || argument === documentAll;
        } : function(argument) {
          return typeof argument == "function";
        };
      });
      is_forced_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var fails = fails_namespaceFn();
        var isCallable = is_callable_namespaceFn();
        var replacement = /#|\.prototype\./;
        var isForced = function(feature, detection) {
          var value2 = data[normalize4(feature)];
          return value2 === POLYFILL ? true : value2 === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
        };
        var normalize4 = isForced.normalize = function(string) {
          return String(string).replace(replacement, ".").toLowerCase();
        };
        var data = isForced.data = {};
        var NATIVE = isForced.NATIVE = "N";
        var POLYFILL = isForced.POLYFILL = "P";
        module.exports = isForced;
      });
      is_null_or_undefined_namespaceFn = () => {
        return __webpack_require__(117);
      };
      is_object_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var isCallable = is_callable_namespaceFn();
        module.exports = function(it) {
          return typeof it == "object" ? it !== null : isCallable(it);
        };
      });
      is_possible_prototype_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var isObject2 = is_object_namespaceFn();
        module.exports = function(argument) {
          return isObject2(argument) || argument === null;
        };
      });
      is_pure_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        module.exports = false;
      });
      is_raw_json_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var isObject2 = is_object_namespaceFn();
        var getInternalState = internal_state_namespaceFn().get;
        module.exports = function isRawJSON(O) {
          if (!isObject2(O)) return false;
          var state = getInternalState(O);
          return !!state && state.type === "RawJSON";
        };
      });
      is_symbol_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var getBuiltIn = get_built_in_namespaceFn();
        var isCallable = is_callable_namespaceFn();
        var isPrototypeOf = object_is_prototype_of_namespaceFn();
        var USE_SYMBOL_AS_UID = use_symbol_as_uid_namespaceFn();
        var $Object = Object;
        module.exports = USE_SYMBOL_AS_UID ? function(it) {
          return typeof it == "symbol";
        } : function(it) {
          var $Symbol = getBuiltIn("Symbol");
          return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
        };
      });
      iterate_simple_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var call2 = function_call_namespaceFn();
        module.exports = function(record, fn, ITERATOR_INSTEAD_OF_RECORD) {
          var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
          var next = record.next;
          var step, result;
          while (!(step = call2(next, iterator)).done) {
            result = fn(step.value);
            if (result !== void 0) return result;
          }
        };
      });
      iterate_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var bind = function_bind_context_namespaceFn();
        var call2 = function_call_namespaceFn();
        var anObject = an_object_namespaceFn();
        var tryToString = try_to_string_namespaceFn();
        var isArrayIteratorMethod = is_array_iterator_method_namespaceFn();
        var lengthOfArrayLike = length_of_array_like_namespaceFn();
        var isPrototypeOf = object_is_prototype_of_namespaceFn();
        var getIterator = get_iterator_internal_namespaceFn();
        var getIteratorMethod = get_iterator_method_internal_namespaceFn();
        var iteratorClose = iterator_close_namespaceFn();
        var $TypeError = TypeError;
        var Result = function(stopped, result) {
          this.stopped = stopped;
          this.result = result;
        };
        var ResultPrototype = Result.prototype;
        module.exports = function(iterable, unboundFunction, options) {
          var that = options && options.that;
          var AS_ENTRIES = !!(options && options.AS_ENTRIES);
          var IS_RECORD = !!(options && options.IS_RECORD);
          var IS_ITERATOR = !!(options && options.IS_ITERATOR);
          var INTERRUPTED = !!(options && options.INTERRUPTED);
          var fn = bind(unboundFunction, that);
          var iterator, iterFn, index, length, result, next, step;
          var stop = function(condition) {
            var $iterator = iterator;
            iterator = void 0;
            if ($iterator) iteratorClose($iterator, "normal");
            return new Result(true, condition);
          };
          var callFn = function(value3) {
            if (AS_ENTRIES) {
              anObject(value3);
              return INTERRUPTED ? fn(value3[0], value3[1], stop) : fn(value3[0], value3[1]);
            }
            return INTERRUPTED ? fn(value3, stop) : fn(value3);
          };
          if (IS_RECORD) {
            iterator = iterable.iterator;
          } else if (IS_ITERATOR) {
            iterator = iterable;
          } else {
            iterFn = getIteratorMethod(iterable);
            if (!iterFn) throw new $TypeError(tryToString(iterable) + " is not iterable");
            if (isArrayIteratorMethod(iterFn)) {
              for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
                result = callFn(iterable[index]);
                if (result && isPrototypeOf(ResultPrototype, result)) return result;
              }
              return new Result(false);
            }
            iterator = getIterator(iterable, iterFn);
          }
          next = IS_RECORD ? iterable.next : iterator.next;
          while (!(step = call2(next, iterator)).done) {
            var value2 = step.value;
            try {
              result = callFn(value2);
            } catch (error) {
              if (iterator) iteratorClose(iterator, "throw", error);
              else throw error;
            }
            if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result)) return result;
          }
          return new Result(false);
        };
      });
      iterator_cleanup_state_namespaceFn = () => {
        return __webpack_require__(859);
      };
      iterator_close_all_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var iteratorClose = iterator_close_namespaceFn();
        module.exports = function(iters, kind, value2) {
          for (var i = iters.length - 1; i >= 0; i--) {
            if (iters[i] === void 0) continue;
            try {
              value2 = iteratorClose(iters[i].iterator, kind, value2);
            } catch (error) {
              kind = "throw";
              value2 = error;
            }
          }
          if (kind === "throw") throw value2;
          return value2;
        };
      });
      iterator_close_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var call2 = function_call_namespaceFn();
        var anObject = an_object_namespaceFn();
        var getMethod = get_method_namespaceFn();
        module.exports = function(iterator, kind, value2) {
          var innerResult, innerError;
          anObject(iterator);
          try {
            innerResult = getMethod(iterator, "return");
            if (!innerResult) {
              if (kind === "throw") throw value2;
              return value2;
            }
            innerResult = call2(innerResult, iterator);
          } catch (error) {
            innerError = true;
            innerResult = error;
          }
          if (kind === "throw") throw value2;
          if (innerError) throw innerResult;
          anObject(innerResult);
          return value2;
        };
      });
      iterator_create_proxy_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var call2 = function_call_namespaceFn();
        var create = object_create_namespaceFn();
        var createNonEnumerableProperty = create_non_enumerable_property_namespaceFn();
        var defineBuiltIns = define_built_ins_namespaceFn();
        var wellKnownSymbol = well_known_symbol_namespaceFn();
        var InternalStateModule = internal_state_namespaceFn();
        var getMethod = get_method_namespaceFn();
        var IteratorPrototype = iterators_core_namespaceFn().IteratorPrototype;
        var createIterResultObject = create_iter_result_object_namespaceFn();
        var iteratorClose = iterator_close_namespaceFn();
        var iteratorCloseAll = iterator_close_all_namespaceFn();
        var cleanupState = iterator_cleanup_state_namespaceFn();
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        var ITERATOR_HELPER = "IteratorHelper";
        var WRAP_FOR_VALID_ITERATOR = "WrapForValidIterator";
        var NORMAL = "normal";
        var THROW = "throw";
        var setInternalState = InternalStateModule.set;
        var createIteratorProxyPrototype = function(IS_ITERATOR) {
          var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);
          return defineBuiltIns(create(IteratorPrototype), {
            next: function next() {
              var state = getInternalState(this);
              if (IS_ITERATOR) return state.nextHandler();
              if (state.done) return createIterResultObject(void 0, true);
              try {
                var result = state.nextHandler();
                if (state.done) cleanupState(state);
                return state.returnHandlerResult ? result : createIterResultObject(result, state.done);
              } catch (error) {
                state.done = true;
                cleanupState(state);
                throw error;
              }
            },
            "return": function() {
              var state = getInternalState(this);
              var iterator = state.iterator;
              var inner = state.inner;
              var openIters = state.openIters;
              var done = state.done;
              state.done = true;
              if (IS_ITERATOR) {
                var returnMethod = getMethod(iterator, "return");
                return returnMethod ? call2(returnMethod, iterator) : createIterResultObject(void 0, true);
              }
              cleanupState(state);
              if (done) return createIterResultObject(void 0, true);
              if (inner) try {
                iteratorClose(inner.iterator, NORMAL);
              } catch (error) {
                return iteratorClose(iterator, THROW, error);
              }
              if (openIters) try {
                iteratorCloseAll(openIters, NORMAL);
              } catch (error) {
                if (iterator) return iteratorClose(iterator, THROW, error);
                throw error;
              }
              if (iterator) iteratorClose(iterator, NORMAL);
              return createIterResultObject(void 0, true);
            }
          });
        };
        var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
        var IteratorHelperPrototype = createIteratorProxyPrototype(false);
        createNonEnumerableProperty(IteratorHelperPrototype, TO_STRING_TAG, "Iterator Helper");
        module.exports = function(nextHandler, IS_ITERATOR, RETURN_HANDLER_RESULT) {
          var IteratorProxy = function Iterator2(record, state) {
            if (state) {
              state.iterator = record.iterator;
              state.next = record.next;
            } else state = record;
            state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
            state.returnHandlerResult = !!RETURN_HANDLER_RESULT;
            state.nextHandler = nextHandler;
            state.counter = 0;
            state.done = false;
            setInternalState(this, state);
          };
          IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;
          return IteratorProxy;
        };
      });
      iterator_helper_throws_on_invalid_iterator_namespaceFn = () => {
        return __webpack_require__(684);
      };
      iterator_helper_without_closing_on_early_error_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var globalThis2 = global_this_namespaceFn();
        module.exports = function(METHOD_NAME, ExpectedError) {
          var Iterator2 = globalThis2.Iterator;
          var IteratorPrototype = Iterator2 && Iterator2.prototype;
          var method = IteratorPrototype && IteratorPrototype[METHOD_NAME];
          var CLOSED = false;
          if (method) try {
            method.call({
              next: function() {
                return { done: true };
              },
              "return": function() {
                CLOSED = true;
              }
            }, -1);
          } catch (error) {
            if (!(error instanceof ExpectedError)) CLOSED = false;
          }
          if (!CLOSED) return method;
        };
      });
      iterators_core_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var fails = fails_namespaceFn();
        var isCallable = is_callable_namespaceFn();
        var isObject2 = is_object_namespaceFn();
        var create = object_create_namespaceFn();
        var getPrototypeOf = object_get_prototype_of_namespaceFn();
        var defineBuiltIn = define_built_in_namespaceFn();
        var wellKnownSymbol = well_known_symbol_namespaceFn();
        var IS_PURE = is_pure_namespaceFn();
        var ITERATOR = wellKnownSymbol("iterator");
        var BUGGY_SAFARI_ITERATORS = false;
        var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
        if ([].keys) {
          arrayIterator = [].keys();
          if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
          else {
            PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
            if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
          }
        }
        var NEW_ITERATOR_PROTOTYPE = !isObject2(IteratorPrototype) || fails(function() {
          var test = {};
          return IteratorPrototype[ITERATOR].call(test) !== test;
        });
        if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
        else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);
        if (!isCallable(IteratorPrototype[ITERATOR])) {
          defineBuiltIn(IteratorPrototype, ITERATOR, function() {
            return this;
          });
        }
        module.exports = __spreadValues(
          {
            IteratorPrototype
          },
          /* unused pure expression */
          null
        );
      });
      iterators_namespaceFn = () => {
        return __webpack_require__(269);
      };
      length_of_array_like_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var toLength = to_length_namespaceFn();
        module.exports = function(obj) {
          return toLength(obj.length);
        };
      });
      make_built_in_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var uncurryThis = function_uncurry_this_namespaceFn();
        var fails = fails_namespaceFn();
        var isCallable = is_callable_namespaceFn();
        var hasOwn = has_own_property_namespaceFn();
        var DESCRIPTORS = descriptors_namespaceFn();
        var CONFIGURABLE_FUNCTION_NAME = function_name_namespaceFn().CONFIGURABLE;
        var inspectSource = inspect_source_namespaceFn();
        var InternalStateModule = internal_state_namespaceFn();
        var enforceInternalState = InternalStateModule.enforce;
        var getInternalState = InternalStateModule.get;
        var $String = String;
        var defineProperty = Object.defineProperty;
        var stringSlice = uncurryThis("".slice);
        var replace = uncurryThis("".replace);
        var join = uncurryThis([].join);
        var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
          return defineProperty(function() {
          }, "length", { value: 8 }).length !== 8;
        });
        var TEMPLATE = String(String).split("String");
        var makeBuiltIn = module.exports = function(value2, name, options) {
          if (stringSlice($String(name), 0, 7) === "Symbol(") {
            name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
          }
          if (options && options.getter) name = "get " + name;
          if (options && options.setter) name = "set " + name;
          if (!hasOwn(value2, "name") || CONFIGURABLE_FUNCTION_NAME && value2.name !== name) {
            if (DESCRIPTORS) defineProperty(value2, "name", { value: name, configurable: true });
            else value2.name = name;
          }
          if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value2.length !== options.arity) {
            defineProperty(value2, "length", { value: options.arity });
          }
          try {
            if (options && hasOwn(options, "constructor") && options.constructor) {
              if (DESCRIPTORS) defineProperty(value2, "prototype", { writable: false });
            } else if (value2.prototype) value2.prototype = void 0;
          } catch (error) {
          }
          var state = enforceInternalState(value2);
          if (!hasOwn(state, "source")) {
            state.source = join(TEMPLATE, typeof name == "string" ? name : "");
          }
          return value2;
        };
        Function.prototype.toString = makeBuiltIn(function toString() {
          return isCallable(this) && getInternalState(this).source || inspectSource(this);
        }, "toString");
      });
      map_helpers_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var uncurryThis = function_uncurry_this_namespaceFn();
        var MapPrototype = Map.prototype;
        module.exports = {
          // eslint-disable-next-line es/no-map -- safe
          Map,
          set: uncurryThis(MapPrototype.set),
          get: uncurryThis(MapPrototype.get),
          has: uncurryThis(MapPrototype.has),
          remove: uncurryThis(MapPrototype["delete"]),
          proto: MapPrototype
        };
      });
      native_raw_json_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var fails = fails_namespaceFn();
        module.exports = !fails(function() {
          var unsafeInt = "9007199254740993";
          var raw = JSON.rawJSON(unsafeInt);
          return !JSON.isRawJSON(raw) || JSON.stringify(raw) !== unsafeInt;
        });
      });
      new_promise_capability_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var aCallable = a_callable_namespaceFn();
        var $TypeError = TypeError;
        var PromiseCapability = function(C) {
          var resolve, reject;
          this.promise = new C(function($$resolve, $$reject) {
            if (resolve !== void 0 || reject !== void 0) throw new $TypeError("Bad Promise constructor");
            resolve = $$resolve;
            reject = $$reject;
          });
          this.resolve = aCallable(resolve);
          this.reject = aCallable(reject);
        };
        module.exports.f = function(C) {
          return new PromiseCapability(C);
        };
      });
      normalize_string_argument_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var toString = to_string_namespaceFn();
        module.exports = function(argument, $default) {
          return argument === void 0 ? arguments.length < 2 ? "" : $default : toString(argument);
        };
      });
      not_a_nan_namespaceFn = () => {
        return __webpack_require__(149);
      };
      object_create_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var anObject = an_object_namespaceFn();
        var definePropertiesModule = object_define_properties_namespaceFn();
        var enumBugKeys = enum_bug_keys_namespaceFn();
        var hiddenKeys = hidden_keys_namespaceFn();
        var html = html_namespaceFn();
        var documentCreateElement = document_create_element_namespaceFn();
        var sharedKey = shared_key_namespaceFn();
        var GT = ">";
        var LT = "<";
        var PROTOTYPE = "prototype";
        var SCRIPT = "script";
        var IE_PROTO = sharedKey("IE_PROTO");
        var EmptyConstructor = function() {
        };
        var scriptTag = function(content) {
          return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
        };
        var NullProtoObjectViaActiveX = function(activeXDocument2) {
          activeXDocument2.write(scriptTag(""));
          activeXDocument2.close();
          var temp = activeXDocument2.parentWindow.Object;
          activeXDocument2 = null;
          return temp;
        };
        var NullProtoObjectViaIFrame = function() {
          var iframe = documentCreateElement("iframe");
          var JS = "java" + SCRIPT + ":";
          var iframeDocument;
          iframe.style.display = "none";
          html.appendChild(iframe);
          iframe.src = String(JS);
          iframeDocument = iframe.contentWindow.document;
          iframeDocument.open();
          iframeDocument.write(scriptTag("document.F=Object"));
          iframeDocument.close();
          return iframeDocument.F;
        };
        var activeXDocument;
        var NullProtoObject = function() {
          try {
            activeXDocument = new ActiveXObject("htmlfile");
          } catch (error) {
          }
          NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
          var length = enumBugKeys.length;
          while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
          return NullProtoObject();
        };
        hiddenKeys[IE_PROTO] = true;
        module.exports = Object.create || function create(O, Properties) {
          var result;
          if (O !== null) {
            EmptyConstructor[PROTOTYPE] = anObject(O);
            result = new EmptyConstructor();
            EmptyConstructor[PROTOTYPE] = null;
            result[IE_PROTO] = O;
          } else result = NullProtoObject();
          return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
        };
      });
      object_define_properties_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((__unused_webpack_module, exports) => {
        var DESCRIPTORS = descriptors_namespaceFn();
        var V8_PROTOTYPE_DEFINE_BUG = v8_prototype_define_bug_namespaceFn();
        var definePropertyModule = object_define_property_namespaceFn();
        var anObject = an_object_namespaceFn();
        var toIndexedObject = to_indexed_object_namespaceFn();
        var objectKeys = object_keys_namespaceFn();
        exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
          anObject(O);
          var props = toIndexedObject(Properties);
          var keys2 = objectKeys(Properties);
          var length = keys2.length;
          var index = 0;
          var key;
          while (length > index) definePropertyModule.f(O, key = keys2[index++], props[key]);
          return O;
        };
      });
      object_define_property_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((__unused_webpack_module, exports) => {
        var DESCRIPTORS = descriptors_namespaceFn();
        var IE8_DOM_DEFINE = ie8_dom_define_namespaceFn();
        var V8_PROTOTYPE_DEFINE_BUG = v8_prototype_define_bug_namespaceFn();
        var anObject = an_object_namespaceFn();
        var toPropertyKey4 = to_property_key_namespaceFn();
        var $TypeError = TypeError;
        var $defineProperty = Object.defineProperty;
        var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var ENUMERABLE = "enumerable";
        var CONFIGURABLE = "configurable";
        var WRITABLE = "writable";
        exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
          anObject(O);
          P = toPropertyKey4(P);
          anObject(Attributes);
          if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
            var current = $getOwnPropertyDescriptor(O, P);
            if (current && current[WRITABLE]) {
              O[P] = Attributes.value;
              Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
              };
            }
          }
          return $defineProperty(O, P, Attributes);
        } : $defineProperty : function defineProperty(O, P, Attributes) {
          anObject(O);
          P = toPropertyKey4(P);
          anObject(Attributes);
          if (IE8_DOM_DEFINE) try {
            return $defineProperty(O, P, Attributes);
          } catch (error) {
          }
          if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
          if ("value" in Attributes) O[P] = Attributes.value;
          return O;
        };
      });
      object_get_own_property_descriptor_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((__unused_webpack_module, exports) => {
        var DESCRIPTORS = descriptors_namespaceFn();
        var call2 = function_call_namespaceFn();
        var propertyIsEnumerableModule = object_property_is_enumerable_namespaceFn();
        var createPropertyDescriptor = create_property_descriptor_namespaceFn();
        var toIndexedObject = to_indexed_object_namespaceFn();
        var toPropertyKey4 = to_property_key_namespaceFn();
        var hasOwn = has_own_property_namespaceFn();
        var IE8_DOM_DEFINE = ie8_dom_define_namespaceFn();
        var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
          O = toIndexedObject(O);
          P = toPropertyKey4(P);
          if (IE8_DOM_DEFINE) try {
            return $getOwnPropertyDescriptor(O, P);
          } catch (error) {
          }
          if (hasOwn(O, P)) return createPropertyDescriptor(!call2(propertyIsEnumerableModule.f, O, P), O[P]);
        };
      });
      object_get_own_property_names_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((__unused_webpack_module, exports) => {
        var internalObjectKeys = object_keys_internal_namespaceFn();
        var enumBugKeys = enum_bug_keys_namespaceFn();
        var hiddenKeys = enumBugKeys.concat("length", "prototype");
        exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
          return internalObjectKeys(O, hiddenKeys);
        };
      });
      object_get_own_property_symbols_namespaceFn = () => {
        return __webpack_require__(717);
      };
      object_get_prototype_of_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var hasOwn = has_own_property_namespaceFn();
        var isCallable = is_callable_namespaceFn();
        var toObject = to_object_namespaceFn();
        var sharedKey = shared_key_namespaceFn();
        var CORRECT_PROTOTYPE_GETTER = correct_prototype_getter_namespaceFn();
        var IE_PROTO = sharedKey("IE_PROTO");
        var $Object = Object;
        var ObjectPrototype = $Object.prototype;
        module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
          var object = toObject(O);
          if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
          var constructor = object.constructor;
          if (isCallable(constructor) && object instanceof constructor) {
            return constructor.prototype;
          }
          return object instanceof $Object ? ObjectPrototype : null;
        };
      });
      object_is_prototype_of_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var uncurryThis = function_uncurry_this_namespaceFn();
        module.exports = uncurryThis({}.isPrototypeOf);
      });
      object_keys_internal_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var uncurryThis = function_uncurry_this_namespaceFn();
        var hasOwn = has_own_property_namespaceFn();
        var toIndexedObject = to_indexed_object_namespaceFn();
        var indexOf = array_includes_namespaceFn().indexOf;
        var hiddenKeys = hidden_keys_namespaceFn();
        var push = uncurryThis([].push);
        module.exports = function(object, names) {
          var O = toIndexedObject(object);
          var i = 0;
          var result = [];
          var key;
          for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
          while (names.length > i) if (hasOwn(O, key = names[i++])) {
            ~indexOf(result, key) || push(result, key);
          }
          return result;
        };
      });
      object_keys_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var internalObjectKeys = object_keys_internal_namespaceFn();
        var enumBugKeys = enum_bug_keys_namespaceFn();
        module.exports = Object.keys || function keys2(O) {
          return internalObjectKeys(O, enumBugKeys);
        };
      });
      object_property_is_enumerable_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((__unused_webpack_module, exports) => {
        var $propertyIsEnumerable = {}.propertyIsEnumerable;
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
        exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
          var descriptor = getOwnPropertyDescriptor(this, V);
          return !!descriptor && descriptor.enumerable;
        } : $propertyIsEnumerable;
      });
      object_set_prototype_of_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var uncurryThisAccessor = function_uncurry_this_accessor_namespaceFn();
        var isObject2 = is_object_namespaceFn();
        var requireObjectCoercible = require_object_coercible_namespaceFn();
        var aPossiblePrototype = a_possible_prototype_namespaceFn();
        module.exports = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
          var CORRECT_SETTER = false;
          var test = {};
          var setter;
          try {
            setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
            setter(test, []);
            CORRECT_SETTER = test instanceof Array;
          } catch (error) {
          }
          return function setPrototypeOf(O, proto) {
            requireObjectCoercible(O);
            aPossiblePrototype(proto);
            if (!isObject2(O)) return O;
            if (CORRECT_SETTER) setter(O, proto);
            else O.__proto__ = proto;
            return O;
          };
        })() : void 0);
      });
      ordinary_to_primitive_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var call2 = function_call_namespaceFn();
        var isCallable = is_callable_namespaceFn();
        var isObject2 = is_object_namespaceFn();
        var $TypeError = TypeError;
        module.exports = function(input, pref) {
          var fn, val;
          if (pref === "string" && isCallable(fn = input.toString) && !isObject2(val = call2(fn, input))) return val;
          if (isCallable(fn = input.valueOf) && !isObject2(val = call2(fn, input))) return val;
          if (pref !== "string" && isCallable(fn = input.toString) && !isObject2(val = call2(fn, input))) return val;
          throw new $TypeError("Can't convert object to primitive value");
        };
      });
      own_keys_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var getBuiltIn = get_built_in_namespaceFn();
        var uncurryThis = function_uncurry_this_namespaceFn();
        var getOwnPropertyNamesModule = object_get_own_property_names_namespaceFn();
        var getOwnPropertySymbolsModule = object_get_own_property_symbols_namespaceFn();
        var anObject = an_object_namespaceFn();
        var concat = uncurryThis([].concat);
        module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys4(it) {
          var keys2 = getOwnPropertyNamesModule.f(anObject(it));
          var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
          return getOwnPropertySymbols ? concat(keys2, getOwnPropertySymbols(it)) : keys2;
        };
      });
      parse_json_string_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var uncurryThis = function_uncurry_this_namespaceFn();
        var hasOwn = has_own_property_namespaceFn();
        var $SyntaxError = SyntaxError;
        var $parseInt = parseInt;
        var fromCharCode = String.fromCharCode;
        var at = uncurryThis("".charAt);
        var slice = uncurryThis("".slice);
        var exec = uncurryThis(/./.exec);
        var codePoints = {
          '\\"': '"',
          "\\\\": "\\",
          "\\/": "/",
          "\\b": "\b",
          "\\f": "\f",
          "\\n": "\n",
          "\\r": "\r",
          "\\t": "	"
        };
        var IS_4_HEX_DIGITS = /^[\da-f]{4}$/i;
        var IS_C0_CONTROL_CODE = /^[\u0000-\u001F]$/;
        module.exports = function(source, i) {
          var unterminated = true;
          var value2 = "";
          while (i < source.length) {
            var chr = at(source, i);
            if (chr === "\\") {
              var twoChars = slice(source, i, i + 2);
              if (hasOwn(codePoints, twoChars)) {
                value2 += codePoints[twoChars];
                i += 2;
              } else if (twoChars === "\\u") {
                i += 2;
                var fourHexDigits = slice(source, i, i + 4);
                if (!exec(IS_4_HEX_DIGITS, fourHexDigits)) throw new $SyntaxError("Bad Unicode escape at: " + i);
                value2 += fromCharCode($parseInt(fourHexDigits, 16));
                i += 4;
              } else throw new $SyntaxError('Unknown escape sequence: "' + twoChars + '"');
            } else if (chr === '"') {
              unterminated = false;
              i++;
              break;
            } else {
              if (exec(IS_C0_CONTROL_CODE, chr)) throw new $SyntaxError("Bad control character in string literal at: " + i);
              value2 += chr;
              i++;
            }
          }
          if (unterminated) throw new $SyntaxError("Unterminated string at: " + i);
          return { value: value2, end: i };
        };
      });
      perform_namespaceFn = () => {
        return __webpack_require__(103);
      };
      promise_resolve_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var anObject = an_object_namespaceFn();
        var isObject2 = is_object_namespaceFn();
        var newPromiseCapability = new_promise_capability_namespaceFn();
        module.exports = function(C, x) {
          anObject(C);
          if (isObject2(x) && x.constructor === C) return x;
          var promiseCapability = newPromiseCapability.f(C);
          var resolve = promiseCapability.resolve;
          resolve(x);
          return promiseCapability.promise;
        };
      });
      require_object_coercible_namespaceFn = () => {
        return __webpack_require__(750);
      };
      set_clone_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var SetHelpers = set_helpers_namespaceFn();
        var iterate = set_iterate_namespaceFn();
        var Set2 = SetHelpers.Set;
        var add = SetHelpers.add;
        module.exports = function(set) {
          var result = new Set2();
          iterate(set, function(it) {
            add(result, it);
          });
          return result;
        };
      });
      set_difference_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var aSet = a_set_namespaceFn();
        var SetHelpers = set_helpers_namespaceFn();
        var clone = set_clone_namespaceFn();
        var size = set_size_namespaceFn();
        var getSetRecord = get_set_record_namespaceFn();
        var iterateSet = set_iterate_namespaceFn();
        var iterateSimple = iterate_simple_namespaceFn();
        var has = SetHelpers.has;
        var remove2 = SetHelpers.remove;
        module.exports = function difference(other) {
          var O = aSet(this);
          var otherRec = getSetRecord(other);
          var result = clone(O);
          if (size(result) <= otherRec.size) iterateSet(result, function(e) {
            if (otherRec.includes(e)) remove2(result, e);
          });
          else iterateSimple(otherRec.getIterator(), function(e) {
            if (has(result, e)) remove2(result, e);
          });
          return result;
        };
      });
      set_helpers_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var uncurryThis = function_uncurry_this_namespaceFn();
        var SetPrototype = Set.prototype;
        module.exports = {
          // eslint-disable-next-line es/no-set -- safe
          Set,
          add: uncurryThis(SetPrototype.add),
          has: uncurryThis(SetPrototype.has),
          remove: uncurryThis(SetPrototype["delete"]),
          proto: SetPrototype
        };
      });
      set_intersection_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var aSet = a_set_namespaceFn();
        var SetHelpers = set_helpers_namespaceFn();
        var size = set_size_namespaceFn();
        var getSetRecord = get_set_record_namespaceFn();
        var iterateSet = set_iterate_namespaceFn();
        var iterateSimple = iterate_simple_namespaceFn();
        var Set2 = SetHelpers.Set;
        var add = SetHelpers.add;
        var has = SetHelpers.has;
        module.exports = function intersection(other) {
          var O = aSet(this);
          var otherRec = getSetRecord(other);
          var result = new Set2();
          if (size(O) > otherRec.size) {
            iterateSimple(otherRec.getIterator(), function(e) {
              if (has(O, e)) add(result, e);
            });
          } else {
            iterateSet(O, function(e) {
              if (otherRec.includes(e)) add(result, e);
            });
          }
          return result;
        };
      });
      set_is_disjoint_from_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var aSet = a_set_namespaceFn();
        var has = set_helpers_namespaceFn().has;
        var size = set_size_namespaceFn();
        var getSetRecord = get_set_record_namespaceFn();
        var iterateSet = set_iterate_namespaceFn();
        var iterateSimple = iterate_simple_namespaceFn();
        var iteratorClose = iterator_close_namespaceFn();
        module.exports = function isDisjointFrom(other) {
          var O = aSet(this);
          var otherRec = getSetRecord(other);
          if (size(O) <= otherRec.size) return iterateSet(O, function(e) {
            if (otherRec.includes(e)) return false;
          }, true) !== false;
          var iterator = otherRec.getIterator();
          return iterateSimple(iterator, function(e) {
            if (has(O, e)) return iteratorClose(iterator.iterator, "normal", false);
          }) !== false;
        };
      });
      set_is_subset_of_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var aSet = a_set_namespaceFn();
        var size = set_size_namespaceFn();
        var iterate = set_iterate_namespaceFn();
        var getSetRecord = get_set_record_namespaceFn();
        module.exports = function isSubsetOf(other) {
          var O = aSet(this);
          var otherRec = getSetRecord(other);
          if (size(O) > otherRec.size) return false;
          return iterate(O, function(e) {
            if (!otherRec.includes(e)) return false;
          }, true) !== false;
        };
      });
      set_is_superset_of_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var aSet = a_set_namespaceFn();
        var has = set_helpers_namespaceFn().has;
        var size = set_size_namespaceFn();
        var getSetRecord = get_set_record_namespaceFn();
        var iterateSimple = iterate_simple_namespaceFn();
        var iteratorClose = iterator_close_namespaceFn();
        module.exports = function isSupersetOf(other) {
          var O = aSet(this);
          var otherRec = getSetRecord(other);
          if (size(O) < otherRec.size) return false;
          var iterator = otherRec.getIterator();
          return iterateSimple(iterator, function(e) {
            if (!has(O, e)) return iteratorClose(iterator.iterator, "normal", false);
          }) !== false;
        };
      });
      set_iterate_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var uncurryThis = function_uncurry_this_namespaceFn();
        var iterateSimple = iterate_simple_namespaceFn();
        var SetHelpers = set_helpers_namespaceFn();
        var Set2 = SetHelpers.Set;
        var SetPrototype = SetHelpers.proto;
        var forEach = uncurryThis(SetPrototype.forEach);
        var keys2 = uncurryThis(SetPrototype.keys);
        var next = keys2(new Set2()).next;
        module.exports = function(set, fn, interruptible) {
          return interruptible ? iterateSimple({ iterator: keys2(set), next }, fn) : forEach(set, fn);
        };
      });
      set_method_accept_set_like_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var getBuiltIn = get_built_in_namespaceFn();
        var createSetLike = function(size) {
          return {
            size,
            has: function() {
              return false;
            },
            keys: function() {
              return {
                next: function() {
                  return { done: true };
                }
              };
            }
          };
        };
        var createSetLikeWithInfinitySize = function(size) {
          return {
            size,
            has: function() {
              return true;
            },
            keys: function() {
              throw new Error("e");
            }
          };
        };
        module.exports = function(name, callback) {
          var Set2 = getBuiltIn("Set");
          try {
            new Set2()[name](createSetLike(0));
            try {
              new Set2()[name](createSetLike(-1));
              return false;
            } catch (error2) {
              if (!callback) return true;
              try {
                new Set2()[name](createSetLikeWithInfinitySize(-Infinity));
                return false;
              } catch (error) {
                var set = new Set2([1, 2]);
                return callback(set[name](createSetLikeWithInfinitySize(Infinity)));
              }
            }
          } catch (error) {
            return false;
          }
        };
      });
      set_method_get_keys_before_cloning_detection_namespaceFn = () => {
        return __webpack_require__(835);
      };
      set_size_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var uncurryThisAccessor = function_uncurry_this_accessor_namespaceFn();
        var SetHelpers = set_helpers_namespaceFn();
        module.exports = uncurryThisAccessor(SetHelpers.proto, "size", "get") || function(set) {
          return set.size;
        };
      });
      set_symmetric_difference_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var aSet = a_set_namespaceFn();
        var SetHelpers = set_helpers_namespaceFn();
        var clone = set_clone_namespaceFn();
        var getSetRecord = get_set_record_namespaceFn();
        var iterateSimple = iterate_simple_namespaceFn();
        var add = SetHelpers.add;
        var has = SetHelpers.has;
        var remove2 = SetHelpers.remove;
        module.exports = function symmetricDifference(other) {
          var O = aSet(this);
          var keysIter = getSetRecord(other).getIterator();
          var result = clone(O);
          iterateSimple(keysIter, function(e) {
            if (has(O, e)) remove2(result, e);
            else add(result, e);
          });
          return result;
        };
      });
      set_union_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var aSet = a_set_namespaceFn();
        var add = set_helpers_namespaceFn().add;
        var clone = set_clone_namespaceFn();
        var getSetRecord = get_set_record_namespaceFn();
        var iterateSimple = iterate_simple_namespaceFn();
        module.exports = function union(other) {
          var O = aSet(this);
          var keysIter = getSetRecord(other).getIterator();
          var result = clone(O);
          iterateSimple(keysIter, function(it) {
            add(result, it);
          });
          return result;
        };
      });
      shared_key_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var shared = shared_namespaceFn();
        var uid = uid_namespaceFn();
        var keys2 = shared("keys");
        module.exports = function(key) {
          return keys2[key] || (keys2[key] = uid(key));
        };
      });
      shared_store_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var IS_PURE = is_pure_namespaceFn();
        var globalThis2 = global_this_namespaceFn();
        var defineGlobalProperty = define_global_property_namespaceFn();
        var SHARED = "__core-js_shared__";
        var store = module.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
        (store.versions || (store.versions = [])).push({
          version: "3.51.0",
          mode: IS_PURE ? "pure" : "global",
          copyright: "Â© 2013â€“2025 Denis Pushkarev (zloirock.ru), 2025â€“2026 CoreJS Company (core-js.io). All rights reserved.",
          license: "https://github.com/zloirock/core-js/blob/v3.51.0/LICENSE",
          source: "https://github.com/zloirock/core-js"
        });
      });
      shared_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var store = shared_store_namespaceFn();
        var create = Object.create || Object;
        module.exports = function(key, value2) {
          return store[key] || (store[key] = value2 || create(null));
        };
      });
      symbol_constructor_detection_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var V8_VERSION = environment_v8_version_namespaceFn();
        var fails = fails_namespaceFn();
        var globalThis2 = global_this_namespaceFn();
        var $String = globalThis2.String;
        module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
          var symbol = Symbol("symbol detection");
          return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
          !Symbol.sham && V8_VERSION && V8_VERSION < 41;
        });
      });
      this_number_value_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var uncurryThis = function_uncurry_this_namespaceFn();
        module.exports = uncurryThis(1.1.valueOf);
      });
      to_absolute_index_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var toIntegerOrInfinity = to_integer_or_infinity_namespaceFn();
        var max = Math.max;
        var min = Math.min;
        module.exports = function(index, length) {
          var integer2 = toIntegerOrInfinity(index);
          return integer2 < 0 ? max(integer2 + length, 0) : min(integer2, length);
        };
      });
      to_big_int_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var toPrimitive4 = to_primitive_namespaceFn();
        var $TypeError = TypeError;
        module.exports = function(argument) {
          var prim = toPrimitive4(argument, "number");
          if (typeof prim == "number") throw new $TypeError("Can't convert number to bigint");
          return BigInt(prim);
        };
      });
      to_indexed_object_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var IndexedObject = indexed_object_namespaceFn();
        var requireObjectCoercible = require_object_coercible_namespaceFn();
        module.exports = function(it) {
          return IndexedObject(requireObjectCoercible(it));
        };
      });
      to_integer_or_infinity_namespaceFn = () => {
        return __webpack_require__(291);
      };
      to_length_namespaceFn = () => {
        return __webpack_require__(14);
      };
      to_object_namespaceFn = () => {
        return __webpack_require__(981);
      };
      to_positive_integer_namespaceFn = () => {
        return __webpack_require__(590);
      };
      to_primitive_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var call2 = function_call_namespaceFn();
        var isObject2 = is_object_namespaceFn();
        var isSymbol = is_symbol_namespaceFn();
        var getMethod = get_method_namespaceFn();
        var ordinaryToPrimitive = ordinary_to_primitive_namespaceFn();
        var wellKnownSymbol = well_known_symbol_namespaceFn();
        var $TypeError = TypeError;
        var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
        module.exports = function(input, pref) {
          if (!isObject2(input) || isSymbol(input)) return input;
          var exoticToPrim = getMethod(input, TO_PRIMITIVE);
          var result;
          if (exoticToPrim) {
            if (pref === void 0) pref = "default";
            result = call2(exoticToPrim, input, pref);
            if (!isObject2(result) || isSymbol(result)) return result;
            throw new $TypeError("Can't convert object to primitive value");
          }
          if (pref === void 0) pref = "number";
          return ordinaryToPrimitive(input, pref);
        };
      });
      to_property_key_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var toPrimitive4 = to_primitive_namespaceFn();
        var isSymbol = is_symbol_namespaceFn();
        module.exports = function(argument) {
          var key = toPrimitive4(argument, "string");
          return isSymbol(key) ? key : key + "";
        };
      });
      to_string_tag_support_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var wellKnownSymbol = well_known_symbol_namespaceFn();
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        var test = {};
        test[TO_STRING_TAG] = "z";
        module.exports = String(test) === "[object z]";
      });
      to_string_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var classof = classof_namespaceFn();
        var $String = String;
        module.exports = function(argument) {
          if (classof(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
          return $String(argument);
        };
      });
      try_to_string_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var $String = String;
        module.exports = function(argument) {
          try {
            return $String(argument);
          } catch (error) {
            return "Object";
          }
        };
      });
      uid_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var uncurryThis = function_uncurry_this_namespaceFn();
        var id = 0;
        var postfix = Math.random();
        var toString = uncurryThis(1.1.toString);
        module.exports = function(key) {
          return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
        };
      });
      uint8_from_base64_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var globalThis2 = global_this_namespaceFn();
        var uncurryThis = function_uncurry_this_namespaceFn();
        var anObjectOrUndefined = an_object_or_undefined_namespaceFn();
        var aString = a_string_namespaceFn();
        var hasOwn = has_own_property_namespaceFn();
        var base64Map = base64_map_namespaceFn();
        var getAlphabetOption = get_alphabet_option_namespaceFn();
        var notDetached = array_buffer_not_detached_namespaceFn();
        var base64Alphabet = base64Map.c2i;
        var base64UrlAlphabet = base64Map.c2iUrl;
        var SyntaxError2 = globalThis2.SyntaxError;
        var TypeError2 = globalThis2.TypeError;
        var $Array = globalThis2.Array;
        var at = uncurryThis("".charAt);
        var floor = Math.floor;
        var skipAsciiWhitespace = function(string, index) {
          var length = string.length;
          for (; index < length; index++) {
            var chr = at(string, index);
            if (chr !== " " && chr !== "	" && chr !== "\n" && chr !== "\f" && chr !== "\r") break;
          }
          return index;
        };
        var decodeBase64Chunk = function(chunk, alphabet, throwOnExtraBits) {
          var chunkLength = chunk.length;
          if (chunkLength < 4) {
            chunk += chunkLength === 2 ? "AA" : "A";
          }
          var triplet = (alphabet[at(chunk, 0)] << 18) + (alphabet[at(chunk, 1)] << 12) + (alphabet[at(chunk, 2)] << 6) + alphabet[at(chunk, 3)];
          var chunkBytes = [
            triplet >> 16 & 255,
            triplet >> 8 & 255,
            triplet & 255
          ];
          if (chunkLength === 2) {
            if (throwOnExtraBits && chunkBytes[1] !== 0) {
              throw new SyntaxError2("Extra bits");
            }
            return [chunkBytes[0]];
          }
          if (chunkLength === 3) {
            if (throwOnExtraBits && chunkBytes[2] !== 0) {
              throw new SyntaxError2("Extra bits");
            }
            return [chunkBytes[0], chunkBytes[1]];
          }
          return chunkBytes;
        };
        var writeBytes = function(bytes, elements, written) {
          var elementsLength = elements.length;
          for (var index = 0; index < elementsLength; index++) {
            bytes[written + index] = elements[index];
          }
          return written + elementsLength;
        };
        module.exports = function(string, options, into, maxLength) {
          aString(string);
          anObjectOrUndefined(options);
          var alphabet = getAlphabetOption(options) === "base64" ? base64Alphabet : base64UrlAlphabet;
          var lastChunkHandling = options ? options.lastChunkHandling : void 0;
          if (lastChunkHandling === void 0) lastChunkHandling = "loose";
          if (lastChunkHandling !== "loose" && lastChunkHandling !== "strict" && lastChunkHandling !== "stop-before-partial") {
            throw new TypeError2("Incorrect `lastChunkHandling` option");
          }
          if (into) notDetached(into.buffer);
          var stringLength = string.length;
          var bytes = into || $Array(floor(stringLength * 3 / 4));
          var written = 0;
          var read2 = 0;
          var chunk = "";
          var index = 0;
          if (maxLength) while (true) {
            index = skipAsciiWhitespace(string, index);
            if (index === stringLength) {
              if (chunk.length > 0) {
                if (lastChunkHandling === "stop-before-partial") {
                  break;
                }
                if (lastChunkHandling === "loose") {
                  if (chunk.length === 1) {
                    throw new SyntaxError2("Malformed padding: exactly one additional character");
                  }
                  written = writeBytes(bytes, decodeBase64Chunk(chunk, alphabet, false), written);
                } else {
                  throw new SyntaxError2("Missing padding");
                }
              }
              read2 = stringLength;
              break;
            }
            var chr = at(string, index);
            ++index;
            if (chr === "=") {
              if (chunk.length < 2) {
                throw new SyntaxError2("Padding is too early");
              }
              index = skipAsciiWhitespace(string, index);
              if (chunk.length === 2) {
                if (index === stringLength) {
                  if (lastChunkHandling === "stop-before-partial") {
                    break;
                  }
                  throw new SyntaxError2("Malformed padding: only one =");
                }
                if (at(string, index) === "=") {
                  ++index;
                  index = skipAsciiWhitespace(string, index);
                }
              }
              if (index < stringLength) {
                throw new SyntaxError2("Unexpected character after padding");
              }
              written = writeBytes(bytes, decodeBase64Chunk(chunk, alphabet, lastChunkHandling === "strict"), written);
              read2 = stringLength;
              break;
            }
            if (!hasOwn(alphabet, chr)) {
              throw new SyntaxError2("Unexpected character");
            }
            var remainingBytes = maxLength - written;
            if (remainingBytes === 1 && chunk.length === 2 || remainingBytes === 2 && chunk.length === 3) {
              break;
            }
            chunk += chr;
            if (chunk.length === 4) {
              written = writeBytes(bytes, decodeBase64Chunk(chunk, alphabet, false), written);
              chunk = "";
              read2 = index;
              if (written === maxLength) {
                break;
              }
            }
          }
          if (!into) bytes.length = written;
          return { bytes, read: read2, written };
        };
      });
      uint8_from_hex_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var globalThis2 = global_this_namespaceFn();
        var uncurryThis = function_uncurry_this_namespaceFn();
        var Uint8Array2 = globalThis2.Uint8Array;
        var SyntaxError2 = globalThis2.SyntaxError;
        var min = Math.min;
        var stringMatch = uncurryThis("".match);
        module.exports = function(string, into) {
          var stringLength = string.length;
          if (stringLength % 2 !== 0) throw new SyntaxError2("String should be an even number of characters");
          var maxLength = into ? min(into.length, stringLength / 2) : stringLength / 2;
          var bytes = into || new Uint8Array2(maxLength);
          var segments = stringMatch(string, /[\S\s]{2}/g);
          var written = 0;
          for (; written < maxLength; written++) {
            var result = +("0x" + segments[written] + "0");
            if (result !== result) {
              throw new SyntaxError2("String should only contain hex characters");
            }
            bytes[written] = result >> 4;
          }
          return { bytes, read: written << 1 };
        };
      });
      url_constructor_detection_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var fails = fails_namespaceFn();
        var wellKnownSymbol = well_known_symbol_namespaceFn();
        var DESCRIPTORS = descriptors_namespaceFn();
        var IS_PURE = is_pure_namespaceFn();
        var ITERATOR = wellKnownSymbol("iterator");
        module.exports = !fails(function() {
          var url = new URL("b?a=1&b=2&c=3", "https://a");
          var params = url.searchParams;
          var params2 = new URLSearchParams("a=1&a=2&b=3");
          var result = "";
          url.pathname = "c%20d";
          params.forEach(function(value2, key) {
            params["delete"]("b");
            result += key + value2;
          });
          params2["delete"]("a", 2);
          params2["delete"]("b", void 0);
          return IS_PURE && (!url.toJSON || !params2.has("a", 1) || params2.has("a", 2) || !params2.has("a", void 0) || params2.has("b")) || !params.size && (IS_PURE || !DESCRIPTORS) || !params.sort || url.href !== "https://a/c%20d?a=1&c=3" || params.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !params[ITERATOR] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("https://Ñ‚ÐµÑÑ‚").host !== "xn--e1aybc" || new URL("https://a#Ð±").hash !== "#%D0%B1" || result !== "a1c3" || new URL("https://x", void 0).host !== "x";
        });
      });
      use_symbol_as_uid_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var NATIVE_SYMBOL = symbol_constructor_detection_namespaceFn();
        module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
      });
      v8_prototype_define_bug_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var DESCRIPTORS = descriptors_namespaceFn();
        var fails = fails_namespaceFn();
        module.exports = DESCRIPTORS && fails(function() {
          return Object.defineProperty(function() {
          }, "prototype", {
            value: 42,
            writable: false
          }).prototype !== 42;
        });
      });
      validate_arguments_length_namespaceFn = () => {
        return __webpack_require__(812);
      };
      weak_map_basic_detection_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var globalThis2 = global_this_namespaceFn();
        var isCallable = is_callable_namespaceFn();
        var WeakMap2 = globalThis2.WeakMap;
        module.exports = isCallable(WeakMap2) && /native code/.test(String(WeakMap2));
      });
      weak_map_helpers_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var uncurryThis = function_uncurry_this_namespaceFn();
        var WeakMapPrototype = WeakMap.prototype;
        module.exports = {
          // eslint-disable-next-line es/no-weak-map -- safe
          WeakMap,
          set: uncurryThis(WeakMapPrototype.set),
          get: uncurryThis(WeakMapPrototype.get),
          has: uncurryThis(WeakMapPrototype.has),
          remove: uncurryThis(WeakMapPrototype["delete"])
        };
      });
      well_known_symbol_namespaceFn = /* @__PURE__ */ __webpack_require__.cw((module) => {
        var globalThis2 = global_this_namespaceFn();
        var shared = shared_namespaceFn();
        var hasOwn = has_own_property_namespaceFn();
        var uid = uid_namespaceFn();
        var NATIVE_SYMBOL = symbol_constructor_detection_namespaceFn();
        var USE_SYMBOL_AS_UID = use_symbol_as_uid_namespaceFn();
        var Symbol2 = globalThis2.Symbol;
        var WellKnownSymbolsStore = shared("wks");
        var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
        module.exports = function(name) {
          if (!hasOwn(WellKnownSymbolsStore, name)) {
            WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
          }
          return WellKnownSymbolsStore[name];
        };
      });
      es_array_includes_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var $includes = array_includes_namespaceFn().includes;
        var fails = fails_namespaceFn();
        var addToUnscopables = add_to_unscopables_namespaceFn();
        var BROKEN_ON_SPARSE = fails(function() {
          return !Array(1).includes();
        });
        var BROKEN_ON_SPARSE_WITH_FROM_INDEX = fails(function() {
          return [, 1].includes(void 0, 1);
        });
        $2({ target: "Array", proto: true, forced: BROKEN_ON_SPARSE || BROKEN_ON_SPARSE_WITH_FROM_INDEX }, {
          includes: function includes2(el) {
            return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
        addToUnscopables("includes");
      });
      es_array_push_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var toObject = to_object_namespaceFn();
        var lengthOfArrayLike = length_of_array_like_namespaceFn();
        var setArrayLength = array_set_length_namespaceFn();
        var doesNotExceedSafeInteger = does_not_exceed_safe_integer_namespaceFn();
        var fails = fails_namespaceFn();
        var INCORRECT_TO_LENGTH = fails(function() {
          return [].push.call({ length: 4294967296 }, 1) !== 4294967297;
        });
        var properErrorOnNonWritableLength = function() {
          try {
            Object.defineProperty([], "length", { writable: false }).push();
          } catch (error) {
            return error instanceof TypeError;
          }
        };
        var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();
        $2({ target: "Array", proto: true, arity: 1, forced: FORCED }, {
          // eslint-disable-next-line no-unused-vars -- required for `.length`
          push: function push(item) {
            var O = toObject(this);
            var len = lengthOfArrayLike(O);
            var argCount = arguments.length;
            doesNotExceedSafeInteger(len + argCount);
            for (var i = 0; i < argCount; i++) {
              O[len] = arguments[i];
              len++;
            }
            setArrayLength(O, len);
            return len;
          }
        });
      });
      es_iterator_constructor_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var globalThis2 = global_this_namespaceFn();
        var anInstance = an_instance_namespaceFn();
        var anObject = an_object_namespaceFn();
        var isCallable = is_callable_namespaceFn();
        var getPrototypeOf = object_get_prototype_of_namespaceFn();
        var defineBuiltInAccessor = define_built_in_accessor_namespaceFn();
        var createProperty = create_property_namespaceFn();
        var fails = fails_namespaceFn();
        var hasOwn = has_own_property_namespaceFn();
        var wellKnownSymbol = well_known_symbol_namespaceFn();
        var IteratorPrototype = iterators_core_namespaceFn().IteratorPrototype;
        var DESCRIPTORS = descriptors_namespaceFn();
        var IS_PURE = is_pure_namespaceFn();
        var CONSTRUCTOR = "constructor";
        var ITERATOR = "Iterator";
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        var $TypeError = TypeError;
        var NativeIterator = globalThis2[ITERATOR];
        var FORCED = IS_PURE || !isCallable(NativeIterator) || NativeIterator.prototype !== IteratorPrototype || !fails(function() {
          NativeIterator({});
        });
        var IteratorConstructor = function Iterator2() {
          anInstance(this, IteratorPrototype);
          if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError("Abstract class Iterator not directly constructable");
        };
        var defineIteratorPrototypeAccessor = function(key, value2) {
          if (DESCRIPTORS) {
            defineBuiltInAccessor(IteratorPrototype, key, {
              configurable: true,
              get: function() {
                return value2;
              },
              set: function(replacement) {
                anObject(this);
                if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
                if (hasOwn(this, key)) this[key] = replacement;
                else createProperty(this, key, replacement);
              }
            });
          } else IteratorPrototype[key] = value2;
        };
        if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);
        if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) {
          defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
        }
        IteratorConstructor.prototype = IteratorPrototype;
        $2({ global: true, constructor: true, forced: FORCED }, {
          Iterator: IteratorConstructor
        });
      });
      es_iterator_drop_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var call2 = function_call_namespaceFn();
        var anObject = an_object_namespaceFn();
        var getIteratorDirect = get_iterator_direct_namespaceFn();
        var notANaN = not_a_nan_namespaceFn();
        var toPositiveInteger = to_positive_integer_namespaceFn();
        var iteratorClose = iterator_close_namespaceFn();
        var createIteratorProxy = iterator_create_proxy_namespaceFn();
        var iteratorHelperThrowsOnInvalidIterator = iterator_helper_throws_on_invalid_iterator_namespaceFn();
        var iteratorHelperWithoutClosingOnEarlyError = iterator_helper_without_closing_on_early_error_namespaceFn();
        var IS_PURE = is_pure_namespaceFn();
        var $RangeError = RangeError;
        var $Infinity = Infinity;
        var DROP_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator("drop", 0);
        var dropWithoutClosingOnEarlyError = !IS_PURE && !DROP_WITHOUT_THROWING_ON_INVALID_ITERATOR && iteratorHelperWithoutClosingOnEarlyError("drop", RangeError);
        var FORCED = IS_PURE || DROP_WITHOUT_THROWING_ON_INVALID_ITERATOR || dropWithoutClosingOnEarlyError || !(function() {
          try {
            Iterator.prototype.drop.call({
              next: function() {
                return { done: true };
              }
            }, 9007199254740992);
          } catch (error) {
            return error instanceof $RangeError;
          }
        })();
        var IteratorProxy = createIteratorProxy(function() {
          var iterator = this.iterator;
          var next = this.next;
          var result, done;
          while (this.remaining) {
            this.remaining--;
            result = anObject(call2(next, iterator));
            done = this.done = !!result.done;
            if (done) return;
          }
          result = anObject(call2(next, iterator));
          done = this.done = !!result.done;
          if (!done) return result.value;
        });
        $2({ target: "Iterator", proto: true, real: true, forced: FORCED }, {
          drop: function drop(limit) {
            anObject(this);
            var remaining;
            try {
              remaining = toPositiveInteger(notANaN(+limit));
              if (remaining > 9007199254740991 && remaining !== $Infinity) {
                throw new $RangeError("The argument should be a safe integer");
              }
            } catch (error) {
              iteratorClose(this, "throw", error);
            }
            if (dropWithoutClosingOnEarlyError) return call2(dropWithoutClosingOnEarlyError, this, remaining);
            return new IteratorProxy(getIteratorDirect(this), {
              remaining
            });
          }
        });
      });
      es_iterator_every_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var call2 = function_call_namespaceFn();
        var iterate = iterate_namespaceFn();
        var aCallable = a_callable_namespaceFn();
        var anObject = an_object_namespaceFn();
        var getIteratorDirect = get_iterator_direct_namespaceFn();
        var iteratorClose = iterator_close_namespaceFn();
        var iteratorHelperWithoutClosingOnEarlyError = iterator_helper_without_closing_on_early_error_namespaceFn();
        var everyWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError("every", TypeError);
        $2({ target: "Iterator", proto: true, real: true, forced: everyWithoutClosingOnEarlyError }, {
          every: function every(predicate) {
            anObject(this);
            try {
              aCallable(predicate);
            } catch (error) {
              iteratorClose(this, "throw", error);
            }
            if (everyWithoutClosingOnEarlyError) return call2(everyWithoutClosingOnEarlyError, this, predicate);
            var record = getIteratorDirect(this);
            var counter = 0;
            return !iterate(record, function(value2, stop) {
              if (!predicate(value2, counter++)) return stop();
            }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
          }
        });
      });
      es_iterator_filter_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var call2 = function_call_namespaceFn();
        var aCallable = a_callable_namespaceFn();
        var anObject = an_object_namespaceFn();
        var getIteratorDirect = get_iterator_direct_namespaceFn();
        var createIteratorProxy = iterator_create_proxy_namespaceFn();
        var callWithSafeIterationClosing = call_with_safe_iteration_closing_namespaceFn();
        var IS_PURE = is_pure_namespaceFn();
        var iteratorClose = iterator_close_namespaceFn();
        var iteratorHelperThrowsOnInvalidIterator = iterator_helper_throws_on_invalid_iterator_namespaceFn();
        var iteratorHelperWithoutClosingOnEarlyError = iterator_helper_without_closing_on_early_error_namespaceFn();
        var FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator("filter", function() {
        });
        var filterWithoutClosingOnEarlyError = !IS_PURE && !FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR && iteratorHelperWithoutClosingOnEarlyError("filter", TypeError);
        var FORCED = IS_PURE || FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR || filterWithoutClosingOnEarlyError;
        var IteratorProxy = createIteratorProxy(function() {
          var iterator = this.iterator;
          var predicate = this.predicate;
          var next = this.next;
          var result, done, value2;
          while (true) {
            result = anObject(call2(next, iterator));
            done = this.done = !!result.done;
            if (done) return;
            value2 = result.value;
            if (callWithSafeIterationClosing(iterator, predicate, [value2, this.counter++], true)) return value2;
          }
        });
        $2({ target: "Iterator", proto: true, real: true, forced: FORCED }, {
          filter: function filter(predicate) {
            anObject(this);
            try {
              aCallable(predicate);
            } catch (error) {
              iteratorClose(this, "throw", error);
            }
            if (filterWithoutClosingOnEarlyError) return call2(filterWithoutClosingOnEarlyError, this, predicate);
            return new IteratorProxy(getIteratorDirect(this), {
              predicate
            });
          }
        });
      });
      es_iterator_find_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var call2 = function_call_namespaceFn();
        var iterate = iterate_namespaceFn();
        var aCallable = a_callable_namespaceFn();
        var anObject = an_object_namespaceFn();
        var getIteratorDirect = get_iterator_direct_namespaceFn();
        var iteratorClose = iterator_close_namespaceFn();
        var iteratorHelperWithoutClosingOnEarlyError = iterator_helper_without_closing_on_early_error_namespaceFn();
        var findWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError("find", TypeError);
        $2({ target: "Iterator", proto: true, real: true, forced: findWithoutClosingOnEarlyError }, {
          find: function find(predicate) {
            anObject(this);
            try {
              aCallable(predicate);
            } catch (error) {
              iteratorClose(this, "throw", error);
            }
            if (findWithoutClosingOnEarlyError) return call2(findWithoutClosingOnEarlyError, this, predicate);
            var record = getIteratorDirect(this);
            var counter = 0;
            return iterate(record, function(value2, stop) {
              if (predicate(value2, counter++)) return stop(value2);
            }, { IS_RECORD: true, INTERRUPTED: true }).result;
          }
        });
      });
      es_iterator_flat_map_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var call2 = function_call_namespaceFn();
        var aCallable = a_callable_namespaceFn();
        var anObject = an_object_namespaceFn();
        var getIteratorDirect = get_iterator_direct_namespaceFn();
        var getIteratorFlattenable = get_iterator_flattenable_namespaceFn();
        var createIteratorProxy = iterator_create_proxy_namespaceFn();
        var iteratorClose = iterator_close_namespaceFn();
        var fails = fails_namespaceFn();
        var IS_PURE = is_pure_namespaceFn();
        var iteratorHelperThrowsOnInvalidIterator = iterator_helper_throws_on_invalid_iterator_namespaceFn();
        var iteratorHelperWithoutClosingOnEarlyError = iterator_helper_without_closing_on_early_error_namespaceFn();
        var THROWS_ON_ITERATOR_WITHOUT_RETURN = !IS_PURE && fails(function() {
          return [1].values().flatMap(function() {
            return [1];
          }).find(function() {
            return true;
          }) !== 1;
        });
        var FLAT_MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !THROWS_ON_ITERATOR_WITHOUT_RETURN && !iteratorHelperThrowsOnInvalidIterator("flatMap", function() {
        });
        var flatMapWithoutClosingOnEarlyError = !IS_PURE && !THROWS_ON_ITERATOR_WITHOUT_RETURN && !FLAT_MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR && iteratorHelperWithoutClosingOnEarlyError("flatMap", TypeError);
        var FORCED = IS_PURE || THROWS_ON_ITERATOR_WITHOUT_RETURN || FLAT_MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR || flatMapWithoutClosingOnEarlyError;
        var IteratorProxy = createIteratorProxy(function() {
          var iterator = this.iterator;
          var mapper = this.mapper;
          var result, inner;
          while (true) {
            if (inner = this.inner) try {
              result = anObject(call2(inner.next, inner.iterator));
              if (!result.done) return result.value;
              this.inner = null;
            } catch (error) {
              iteratorClose(iterator, "throw", error);
            }
            result = anObject(call2(this.next, iterator));
            if (this.done = !!result.done) return;
            try {
              this.inner = getIteratorFlattenable(mapper(result.value, this.counter++), false);
            } catch (error) {
              iteratorClose(iterator, "throw", error);
            }
          }
        });
        $2({ target: "Iterator", proto: true, real: true, forced: FORCED }, {
          flatMap: function flatMap(mapper) {
            anObject(this);
            try {
              aCallable(mapper);
            } catch (error) {
              iteratorClose(this, "throw", error);
            }
            if (flatMapWithoutClosingOnEarlyError) return call2(flatMapWithoutClosingOnEarlyError, this, mapper);
            return new IteratorProxy(getIteratorDirect(this), {
              mapper,
              inner: null
            });
          }
        });
      });
      es_iterator_for_each_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var call2 = function_call_namespaceFn();
        var iterate = iterate_namespaceFn();
        var aCallable = a_callable_namespaceFn();
        var anObject = an_object_namespaceFn();
        var getIteratorDirect = get_iterator_direct_namespaceFn();
        var iteratorClose = iterator_close_namespaceFn();
        var iteratorHelperWithoutClosingOnEarlyError = iterator_helper_without_closing_on_early_error_namespaceFn();
        var forEachWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError("forEach", TypeError);
        $2({ target: "Iterator", proto: true, real: true, forced: forEachWithoutClosingOnEarlyError }, {
          forEach: function forEach(fn) {
            anObject(this);
            try {
              aCallable(fn);
            } catch (error) {
              iteratorClose(this, "throw", error);
            }
            if (forEachWithoutClosingOnEarlyError) return call2(forEachWithoutClosingOnEarlyError, this, fn);
            var record = getIteratorDirect(this);
            var counter = 0;
            iterate(record, function(value2) {
              fn(value2, counter++);
            }, { IS_RECORD: true });
          }
        });
      });
      es_iterator_map_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var call2 = function_call_namespaceFn();
        var aCallable = a_callable_namespaceFn();
        var anObject = an_object_namespaceFn();
        var getIteratorDirect = get_iterator_direct_namespaceFn();
        var createIteratorProxy = iterator_create_proxy_namespaceFn();
        var callWithSafeIterationClosing = call_with_safe_iteration_closing_namespaceFn();
        var iteratorClose = iterator_close_namespaceFn();
        var iteratorHelperThrowsOnInvalidIterator = iterator_helper_throws_on_invalid_iterator_namespaceFn();
        var iteratorHelperWithoutClosingOnEarlyError = iterator_helper_without_closing_on_early_error_namespaceFn();
        var IS_PURE = is_pure_namespaceFn();
        var MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator("map", function() {
        });
        var mapWithoutClosingOnEarlyError = !IS_PURE && !MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR && iteratorHelperWithoutClosingOnEarlyError("map", TypeError);
        var FORCED = IS_PURE || MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR || mapWithoutClosingOnEarlyError;
        var IteratorProxy = createIteratorProxy(function() {
          var iterator = this.iterator;
          var result = anObject(call2(this.next, iterator));
          var done = this.done = !!result.done;
          if (!done) return callWithSafeIterationClosing(iterator, this.mapper, [result.value, this.counter++], true);
        });
        $2({ target: "Iterator", proto: true, real: true, forced: FORCED }, {
          map: function map(mapper) {
            anObject(this);
            try {
              aCallable(mapper);
            } catch (error) {
              iteratorClose(this, "throw", error);
            }
            if (mapWithoutClosingOnEarlyError) return call2(mapWithoutClosingOnEarlyError, this, mapper);
            return new IteratorProxy(getIteratorDirect(this), {
              mapper
            });
          }
        });
      });
      es_iterator_some_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var call2 = function_call_namespaceFn();
        var iterate = iterate_namespaceFn();
        var aCallable = a_callable_namespaceFn();
        var anObject = an_object_namespaceFn();
        var getIteratorDirect = get_iterator_direct_namespaceFn();
        var iteratorClose = iterator_close_namespaceFn();
        var iteratorHelperWithoutClosingOnEarlyError = iterator_helper_without_closing_on_early_error_namespaceFn();
        var someWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError("some", TypeError);
        $2({ target: "Iterator", proto: true, real: true, forced: someWithoutClosingOnEarlyError }, {
          some: function some(predicate) {
            anObject(this);
            try {
              aCallable(predicate);
            } catch (error) {
              iteratorClose(this, "throw", error);
            }
            if (someWithoutClosingOnEarlyError) return call2(someWithoutClosingOnEarlyError, this, predicate);
            var record = getIteratorDirect(this);
            var counter = 0;
            return iterate(record, function(value2, stop) {
              if (predicate(value2, counter++)) return stop();
            }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
          }
        });
      });
      es_iterator_take_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var call2 = function_call_namespaceFn();
        var anObject = an_object_namespaceFn();
        var getIteratorDirect = get_iterator_direct_namespaceFn();
        var notANaN = not_a_nan_namespaceFn();
        var toPositiveInteger = to_positive_integer_namespaceFn();
        var createIteratorProxy = iterator_create_proxy_namespaceFn();
        var iteratorClose = iterator_close_namespaceFn();
        var iteratorHelperThrowsOnInvalidIterator = iterator_helper_throws_on_invalid_iterator_namespaceFn();
        var iteratorHelperWithoutClosingOnEarlyError = iterator_helper_without_closing_on_early_error_namespaceFn();
        var IS_PURE = is_pure_namespaceFn();
        var $RangeError = RangeError;
        var $Infinity = Infinity;
        var TAKE_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator("take", 1);
        var takeWithoutClosingOnEarlyError = !IS_PURE && !TAKE_WITHOUT_THROWING_ON_INVALID_ITERATOR && iteratorHelperWithoutClosingOnEarlyError("take", RangeError);
        var FORCED = IS_PURE || TAKE_WITHOUT_THROWING_ON_INVALID_ITERATOR || takeWithoutClosingOnEarlyError || !(function() {
          try {
            Iterator.prototype.take.call({
              next: function() {
                return { done: true };
              }
            }, 9007199254740992);
          } catch (error) {
            return error instanceof $RangeError;
          }
        })();
        var IteratorProxy = createIteratorProxy(function() {
          var iterator = this.iterator;
          if (!this.remaining--) {
            this.done = true;
            return iteratorClose(iterator, "normal", void 0);
          }
          var result = anObject(call2(this.next, iterator));
          var done = this.done = !!result.done;
          if (!done) return result.value;
        });
        $2({ target: "Iterator", proto: true, real: true, forced: FORCED }, {
          take: function take(limit) {
            anObject(this);
            var remaining;
            try {
              remaining = toPositiveInteger(notANaN(+limit));
              if (remaining > 9007199254740991 && remaining !== $Infinity) {
                throw new $RangeError("The argument should be a safe integer");
              }
            } catch (error) {
              iteratorClose(this, "throw", error);
            }
            if (takeWithoutClosingOnEarlyError) return call2(takeWithoutClosingOnEarlyError, this, remaining);
            return new IteratorProxy(getIteratorDirect(this), {
              remaining
            });
          }
        });
      });
      es_iterator_to_array_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var anObject = an_object_namespaceFn();
        var createProperty = create_property_namespaceFn();
        var iterate = iterate_namespaceFn();
        var getIteratorDirect = get_iterator_direct_namespaceFn();
        $2({ target: "Iterator", proto: true, real: true }, {
          toArray: function toArray2() {
            var result = [];
            var index = 0;
            iterate(getIteratorDirect(anObject(this)), function(element2) {
              createProperty(result, index++, element2);
            }, { IS_RECORD: true });
            return result;
          }
        });
      });
      es_json_parse_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var DESCRIPTORS = descriptors_namespaceFn();
        var globalThis2 = global_this_namespaceFn();
        var getBuiltIn = get_built_in_namespaceFn();
        var uncurryThis = function_uncurry_this_namespaceFn();
        var call2 = function_call_namespaceFn();
        var isCallable = is_callable_namespaceFn();
        var isObject2 = is_object_namespaceFn();
        var isArray = is_array_namespaceFn();
        var hasOwn = has_own_property_namespaceFn();
        var toString = to_string_namespaceFn();
        var lengthOfArrayLike = length_of_array_like_namespaceFn();
        var createProperty = create_property_namespaceFn();
        var fails = fails_namespaceFn();
        var parseJSONString = parse_json_string_namespaceFn();
        var NATIVE_SYMBOL = symbol_constructor_detection_namespaceFn();
        var JSON2 = globalThis2.JSON;
        var Number2 = globalThis2.Number;
        var SyntaxError2 = globalThis2.SyntaxError;
        var nativeParse = JSON2 && JSON2.parse;
        var enumerableOwnProperties = getBuiltIn("Object", "keys");
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var at = uncurryThis("".charAt);
        var slice = uncurryThis("".slice);
        var exec = uncurryThis(/./.exec);
        var push = uncurryThis([].push);
        var IS_DIGIT = /^\d$/;
        var IS_NON_ZERO_DIGIT = /^[1-9]$/;
        var IS_NUMBER_START = /^[\d-]$/;
        var IS_WHITESPACE = /^[\t\n\r ]$/;
        var PRIMITIVE = 0;
        var OBJECT = 1;
        var $parse = function(source, reviver) {
          source = toString(source);
          var context = new Context(source, 0);
          var root = context.parse();
          var value2 = root.value;
          var endIndex = context.skip(IS_WHITESPACE, root.end);
          if (endIndex < source.length) {
            throw new SyntaxError2('Unexpected extra character: "' + at(source, endIndex) + '" after the parsed data at: ' + endIndex);
          }
          return isCallable(reviver) ? internalize({ "": value2 }, "", reviver, root) : value2;
        };
        var internalize = function(holder, name, reviver, node) {
          var val = holder[name];
          var unmodified = node && val === node.value;
          var context = unmodified && typeof node.source == "string" ? { source: node.source } : {};
          var elementRecordsLen, keys2, len, i, P;
          if (isObject2(val)) {
            var nodeIsArray = isArray(val);
            var nodes = unmodified ? node.nodes : nodeIsArray ? [] : {};
            if (nodeIsArray) {
              elementRecordsLen = nodes.length;
              len = lengthOfArrayLike(val);
              for (i = 0; i < len; i++) {
                internalizeProperty(val, i, internalize(val, "" + i, reviver, i < elementRecordsLen ? nodes[i] : void 0));
              }
            } else {
              keys2 = enumerableOwnProperties(val);
              len = lengthOfArrayLike(keys2);
              for (i = 0; i < len; i++) {
                P = keys2[i];
                internalizeProperty(val, P, internalize(val, P, reviver, hasOwn(nodes, P) ? nodes[P] : void 0));
              }
            }
          }
          return call2(reviver, holder, name, val, context);
        };
        var internalizeProperty = function(object, key, value2) {
          if (DESCRIPTORS) {
            var descriptor = getOwnPropertyDescriptor(object, key);
            if (descriptor && !descriptor.configurable) return;
          }
          if (value2 === void 0) delete object[key];
          else createProperty(object, key, value2);
        };
        var Node2 = function(value2, end, source, nodes) {
          this.value = value2;
          this.end = end;
          this.source = source;
          this.nodes = nodes;
        };
        var Context = function(source, index) {
          this.source = source;
          this.index = index;
        };
        Context.prototype = {
          fork: function(nextIndex) {
            return new Context(this.source, nextIndex);
          },
          parse: function() {
            var source = this.source;
            var i = this.skip(IS_WHITESPACE, this.index);
            var fork = this.fork(i);
            var chr = at(source, i);
            if (exec(IS_NUMBER_START, chr)) return fork.number();
            switch (chr) {
              case "{":
                return fork.object();
              case "[":
                return fork.array();
              case '"':
                return fork.string();
              case "t":
                return fork.keyword(true);
              case "f":
                return fork.keyword(false);
              case "n":
                return fork.keyword(null);
            }
            throw new SyntaxError2('Unexpected character: "' + chr + '" at: ' + i);
          },
          node: function(type, value2, start, end, nodes) {
            return new Node2(value2, end, type ? null : slice(this.source, start, end), nodes);
          },
          object: function() {
            var source = this.source;
            var i = this.index + 1;
            var expectKeypair = false;
            var object = {};
            var nodes = {};
            var closed = false;
            while (i < source.length) {
              i = this.until(['"', "}"], i);
              if (at(source, i) === "}" && !expectKeypair) {
                i++;
                closed = true;
                break;
              }
              var result = this.fork(i).string();
              var key = result.value;
              i = result.end;
              i = this.until([":"], i) + 1;
              i = this.skip(IS_WHITESPACE, i);
              result = this.fork(i).parse();
              createProperty(nodes, key, result);
              createProperty(object, key, result.value);
              i = this.until([",", "}"], result.end);
              var chr = at(source, i);
              if (chr === ",") {
                expectKeypair = true;
                i++;
              } else if (chr === "}") {
                i++;
                closed = true;
                break;
              }
            }
            if (!closed) throw new SyntaxError2("Unterminated object at: " + i);
            return this.node(OBJECT, object, this.index, i, nodes);
          },
          array: function() {
            var source = this.source;
            var i = this.index + 1;
            var expectElement = false;
            var array = [];
            var nodes = [];
            var closed = false;
            while (i < source.length) {
              i = this.skip(IS_WHITESPACE, i);
              if (at(source, i) === "]" && !expectElement) {
                i++;
                closed = true;
                break;
              }
              var result = this.fork(i).parse();
              push(nodes, result);
              push(array, result.value);
              i = this.until([",", "]"], result.end);
              if (at(source, i) === ",") {
                expectElement = true;
                i++;
              } else if (at(source, i) === "]") {
                i++;
                closed = true;
                break;
              }
            }
            if (!closed) throw new SyntaxError2("Unterminated array at: " + i);
            return this.node(OBJECT, array, this.index, i, nodes);
          },
          string: function() {
            var index = this.index;
            var parsed = parseJSONString(this.source, this.index + 1);
            return this.node(PRIMITIVE, parsed.value, index, parsed.end);
          },
          number: function() {
            var source = this.source;
            var startIndex = this.index;
            var i = startIndex;
            if (at(source, i) === "-") i++;
            if (at(source, i) === "0") i++;
            else if (exec(IS_NON_ZERO_DIGIT, at(source, i))) i = this.skip(IS_DIGIT, i + 1);
            else throw new SyntaxError2("Failed to parse number at: " + i);
            if (at(source, i) === ".") {
              var fractionStartIndex = i + 1;
              i = this.skip(IS_DIGIT, fractionStartIndex);
              if (fractionStartIndex === i) throw new SyntaxError2("Failed to parse number's fraction at: " + i);
            }
            if (at(source, i) === "e" || at(source, i) === "E") {
              i++;
              if (at(source, i) === "+" || at(source, i) === "-") i++;
              var exponentStartIndex = i;
              i = this.skip(IS_DIGIT, i);
              if (exponentStartIndex === i) throw new SyntaxError2("Failed to parse number's exponent value at: " + i);
            }
            return this.node(PRIMITIVE, Number2(slice(source, startIndex, i)), startIndex, i);
          },
          keyword: function(value2) {
            var keyword = "" + value2;
            var index = this.index;
            var endIndex = index + keyword.length;
            if (slice(this.source, index, endIndex) !== keyword) throw new SyntaxError2("Failed to parse value at: " + index);
            return this.node(PRIMITIVE, value2, index, endIndex);
          },
          skip: function(regex, i) {
            var source = this.source;
            for (; i < source.length; i++) if (!exec(regex, at(source, i))) break;
            return i;
          },
          until: function(array, i) {
            i = this.skip(IS_WHITESPACE, i);
            var chr = at(this.source, i);
            for (var j = 0; j < array.length; j++) if (array[j] === chr) return i;
            throw new SyntaxError2('Unexpected character: "' + chr + '" at: ' + i);
          }
        };
        var NO_SOURCE_SUPPORT = fails(function() {
          var unsafeInt = "9007199254740993";
          var source;
          nativeParse(unsafeInt, function(key, value2, context) {
            source = context.source;
          });
          return source !== unsafeInt;
        });
        var PROPER_BASE_PARSE = NATIVE_SYMBOL && !fails(function() {
          return 1 / nativeParse("-0 	") !== -Infinity;
        });
        $2({ target: "JSON", stat: true, forced: NO_SOURCE_SUPPORT }, {
          parse: function parse2(text3, reviver) {
            return PROPER_BASE_PARSE && !isCallable(reviver) ? nativeParse(text3) : $parse(text3, reviver);
          }
        });
      });
      es_json_stringify_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var getBuiltIn = get_built_in_namespaceFn();
        var call2 = function_call_namespaceFn();
        var uncurryThis = function_uncurry_this_namespaceFn();
        var fails = fails_namespaceFn();
        var isArray = is_array_namespaceFn();
        var isCallable = is_callable_namespaceFn();
        var isObject2 = is_object_namespaceFn();
        var create = object_create_namespaceFn();
        var isRawJSON = is_raw_json_namespaceFn();
        var isSymbol = is_symbol_namespaceFn();
        var classof = classof_raw_namespaceFn();
        var thisNumberValue = this_number_value_namespaceFn();
        var includes2 = array_includes_namespaceFn().includes;
        var hasOwn = has_own_property_namespaceFn();
        var toString = to_string_namespaceFn();
        var parseJSONString = parse_json_string_namespaceFn();
        var uid = uid_namespaceFn();
        var NATIVE_SYMBOL = symbol_constructor_detection_namespaceFn();
        var NATIVE_RAW_JSON = native_raw_json_namespaceFn();
        var $String = String;
        var $TypeError = TypeError;
        var $stringify = getBuiltIn("JSON", "stringify");
        var $BigInt = getBuiltIn("BigInt");
        var stringValueOf = uncurryThis("".valueOf);
        var booleanValueOf = uncurryThis(true.valueOf);
        var bigIntValueOf = $BigInt && uncurryThis($BigInt.prototype.valueOf);
        var exec = uncurryThis(/./.exec);
        var charAt = uncurryThis("".charAt);
        var charCodeAt = uncurryThis("".charCodeAt);
        var replace = uncurryThis("".replace);
        var slice = uncurryThis("".slice);
        var push = uncurryThis([].push);
        var pop = uncurryThis([].pop);
        var numberToString = uncurryThis(1.1.toString);
        var surrogates = /[\uD800-\uDFFF]/g;
        var leadingSurrogates = /^[\uD800-\uDBFF]$/;
        var trailingSurrogates = /^[\uDC00-\uDFFF]$/;
        var digits = /^\d+$/;
        var RAW_MARK = uid();
        var KEY_MARK = uid();
        var END_MARK = uid();
        var RAW_MARK_LENGTH = RAW_MARK.length;
        var KEY_MARK_LENGTH = KEY_MARK.length;
        var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function() {
          var symbol = getBuiltIn("Symbol")("stringify detection");
          return $stringify([symbol]) !== "[null]" || $stringify({ a: symbol }) !== "{}" || $stringify(Object(symbol)) !== "{}";
        });
        var ILL_FORMED_UNICODE = fails(function() {
          return $stringify("\uDF06\uD834") !== '"\\udf06\\ud834"' || $stringify("\uDEAD") !== '"\\udead"';
        });
        var isRawJSONValue = NATIVE_RAW_JSON ? getBuiltIn("JSON", "isRawJSON") : isRawJSON;
        var stringifyWithProperSymbolsConversion = WRONG_SYMBOLS_CONVERSION ? function(it, replacer, space) {
          return $stringify(it, function(key, value2) {
            var replaced = call2(replacer, this, key, value2);
            if (!isSymbol(replaced)) return replaced;
          }, space);
        } : $stringify;
        var fixIllFormedJSON = function(match, offset, string) {
          var prev = charAt(string, offset - 1);
          var next = charAt(string, offset + 1);
          if (exec(leadingSurrogates, match) && !exec(trailingSurrogates, next) || exec(trailingSurrogates, match) && !exec(leadingSurrogates, prev)) {
            return "\\u" + numberToString(charCodeAt(match, 0), 16);
          }
          return match;
        };
        var getPropertyList = function(replacer) {
          if (!isArray(replacer)) return;
          var rawLength = replacer.length;
          var propertyList = [];
          var addedKeys = create(null);
          for (var i = 0; i < rawLength; i++) {
            var element2 = replacer[i];
            var key;
            if (typeof element2 == "string") key = element2;
            else if (typeof element2 == "number" || classof(element2) === "Number" || classof(element2) === "String") key = toString(element2);
            else continue;
            if (!hasOwn(addedKeys, key)) {
              addedKeys[key] = true;
              push(propertyList, key);
            }
          }
          return propertyList;
        };
        var hasInternalSlot = function(valueOf, it) {
          try {
            valueOf(it);
            return true;
          } catch (error) {
            return false;
          }
        };
        var isBoxedPrimitive = function(it) {
          var kind = classof(it);
          return kind === "Number" && hasInternalSlot(thisNumberValue, it) || kind === "String" && hasInternalSlot(stringValueOf, it) || kind === "Boolean" && hasInternalSlot(booleanValueOf, it) || !!bigIntValueOf && kind === "BigInt" && hasInternalSlot(bigIntValueOf, it);
        };
        var isSerializedAsObject = function(it) {
          if (!isObject2(it) || isCallable(it) || isArray(it)) return false;
          try {
            return !isBoxedPrimitive(it);
          } catch (error) {
            return true;
          }
        };
        var createElementHolder = function(holder, key) {
          return {
            toJSON: function() {
              var element2 = holder[key];
              if (isObject2(element2) || typeof element2 == "bigint") {
                var elementToJSON = element2.toJSON;
                if (isCallable(elementToJSON)) element2 = call2(elementToJSON, element2, key);
              }
              return element2;
            }
          };
        };
        var getKeyPrefix = function(propertyList) {
          for (var i = 0, length = propertyList.length; i < length; i++) {
            if (exec(digits, propertyList[i])) return KEY_MARK;
          }
          return "";
        };
        var createOrderedObject = function(value2, propertyList, keyPrefix) {
          var ordered = create(null);
          for (var i = 0, length = propertyList.length; i < length; i++) {
            var key = propertyList[i];
            ordered[keyPrefix + key] = createElementHolder(value2, key);
          }
          ordered[END_MARK] = null;
          return ordered;
        };
        if ($stringify) $2({ target: "JSON", stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE || !NATIVE_RAW_JSON }, {
          stringify: function stringify(text3, replacer, space) {
            var replacerFunction = isCallable(replacer) ? replacer : void 0;
            var propertyList = replacerFunction ? void 0 : getPropertyList(replacer);
            var keyPrefix = propertyList && getKeyPrefix(propertyList);
            var rawStrings = [];
            var openObjects = [];
            var parentOrdered = [];
            var currentOrdered;
            var marked = false;
            var root = true;
            var json = stringifyWithProperSymbolsConversion(text3, function(key, value2) {
              key = $String(key);
              if (propertyList) {
                if (key === END_MARK) {
                  pop(openObjects);
                  currentOrdered = pop(parentOrdered);
                  return;
                }
                if (root) root = false;
                else if (this !== currentOrdered && !isArray(this) && !includes2(propertyList, key)) return;
              } else if (replacerFunction) value2 = call2(replacerFunction, this, key, value2);
              if (isRawJSONValue(value2)) {
                if (NATIVE_RAW_JSON) return value2;
                marked = true;
                return RAW_MARK + (push(rawStrings, value2.rawJSON) - 1);
              }
              if (propertyList && isSerializedAsObject(value2)) {
                if (includes2(openObjects, value2)) throw new $TypeError("Converting circular structure to JSON");
                var ordered = createOrderedObject(value2, propertyList, keyPrefix);
                push(openObjects, value2);
                push(parentOrdered, currentOrdered);
                currentOrdered = ordered;
                if (keyPrefix) marked = true;
                return ordered;
              }
              return value2;
            }, space);
            if (typeof json != "string") return json;
            if (ILL_FORMED_UNICODE) json = replace(json, surrogates, fixIllFormedJSON);
            if (!marked) return json;
            var result = "";
            var length = json.length;
            for (var i = 0; i < length; i++) {
              var chr = charAt(json, i);
              if (chr === '"') {
                var end = parseJSONString(json, ++i).end - 1;
                var string = slice(json, i, end);
                if (slice(string, 0, RAW_MARK_LENGTH) === RAW_MARK) result += rawStrings[slice(string, RAW_MARK_LENGTH)];
                else if (slice(string, 0, KEY_MARK_LENGTH) === KEY_MARK) result += '"' + slice(string, KEY_MARK_LENGTH) + '"';
                else result += '"' + string + '"';
                i = end;
              } else result += chr;
            }
            return result;
          }
        });
      });
      es_map_get_or_insert_computed_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var aCallable = a_callable_namespaceFn();
        var MapHelpers = map_helpers_namespaceFn();
        var IS_PURE = is_pure_namespaceFn();
        var get2 = MapHelpers.get;
        var has = MapHelpers.has;
        var set = MapHelpers.set;
        $2({ target: "Map", proto: true, real: true, forced: IS_PURE }, {
          getOrInsertComputed: function getOrInsertComputed(key, callbackfn) {
            var hasKey = has(this, key);
            aCallable(callbackfn);
            if (hasKey) return get2(this, key);
            if (key === 0 && 1 / key === -Infinity) key = 0;
            var value2 = callbackfn(key);
            set(this, key, value2);
            return value2;
          }
        });
      });
      es_map_get_or_insert_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var MapHelpers = map_helpers_namespaceFn();
        var IS_PURE = is_pure_namespaceFn();
        var get2 = MapHelpers.get;
        var has = MapHelpers.has;
        var set = MapHelpers.set;
        $2({ target: "Map", proto: true, real: true, forced: IS_PURE }, {
          getOrInsert: function getOrInsert(key, value2) {
            if (has(this, key)) return get2(this, key);
            set(this, key, value2);
            return value2;
          }
        });
      });
      es_math_sum_precise_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var uncurryThis = function_uncurry_this_namespaceFn();
        var iterate = iterate_namespaceFn();
        var fails = fails_namespaceFn();
        var getIterator = get_iterator_internal_namespaceFn();
        var setPrototypeOf = object_set_prototype_of_namespaceFn();
        var wellKnownSymbol = well_known_symbol_namespaceFn();
        var $RangeError = RangeError;
        var $TypeError = TypeError;
        var $Infinity = Infinity;
        var $NaN = NaN;
        var $sumPrecise = Math.sumPrecise;
        var abs = Math.abs;
        var pow = Math.pow;
        var push = uncurryThis([].push);
        var ITERATOR = wellKnownSymbol("iterator");
        var POW_2_1023 = pow(2, 1023);
        var MAX_SAFE_INTEGER = pow(2, 53) - 1;
        var MAX_DOUBLE = Number.MAX_VALUE;
        var MAX_ULP = pow(2, 971);
        var NOT_A_NUMBER = {};
        var MINUS_INFINITY = {};
        var PLUS_INFINITY = {};
        var MINUS_ZERO = {};
        var FINITE = {};
        var FORCED = fails(function() {
          if ($sumPrecise([-1]) !== -1 || $sumPrecise([-MAX_DOUBLE]) !== -MAX_DOUBLE) return true;
          if (!setPrototypeOf) return false;
          try {
            $sumPrecise(setPrototypeOf([1], {}));
            return true;
          } catch (error) {
          }
          try {
            var prototype = {};
            prototype[ITERATOR] = function() {
              return this;
            };
            $sumPrecise(setPrototypeOf(getIterator([1]), prototype));
            return true;
          } catch (error) {
          }
        });
        var twosum = function(x, y) {
          var hi = x + y;
          var lo = y - (hi - x);
          return { hi, lo };
        };
        $2({ target: "Math", stat: true, forced: FORCED }, {
          // eslint-disable-next-line max-statements -- ok
          sumPrecise: function sumPrecise(items) {
            var numbers = [];
            var count = 0;
            var state = MINUS_ZERO;
            iterate(items, function(n2) {
              if (++count > MAX_SAFE_INTEGER) throw new $RangeError("Maximum allowed index exceeded");
              if (typeof n2 != "number") throw new $TypeError("Value is not a number");
              if (state !== NOT_A_NUMBER) {
                if (n2 !== n2) state = NOT_A_NUMBER;
                else if (n2 === $Infinity) state = state === MINUS_INFINITY ? NOT_A_NUMBER : PLUS_INFINITY;
                else if (n2 === -$Infinity) state = state === PLUS_INFINITY ? NOT_A_NUMBER : MINUS_INFINITY;
                else if ((n2 !== 0 || 1 / n2 === $Infinity) && (state === MINUS_ZERO || state === FINITE)) {
                  state = FINITE;
                  push(numbers, n2);
                }
              }
            });
            switch (state) {
              case NOT_A_NUMBER:
                return $NaN;
              case MINUS_INFINITY:
                return -$Infinity;
              case PLUS_INFINITY:
                return $Infinity;
              case MINUS_ZERO:
                return -0;
            }
            var partials = [];
            var overflow = 0;
            var x, y, sum, hi, lo, tmp;
            for (var i = 0; i < numbers.length; i++) {
              x = numbers[i];
              var actuallyUsedPartials = 0;
              for (var j = 0; j < partials.length; j++) {
                y = partials[j];
                if (abs(x) < abs(y)) {
                  tmp = x;
                  x = y;
                  y = tmp;
                }
                sum = twosum(x, y);
                hi = sum.hi;
                lo = sum.lo;
                if (abs(hi) === $Infinity) {
                  var sign = hi === $Infinity ? 1 : -1;
                  overflow += sign;
                  x = x - sign * POW_2_1023 - sign * POW_2_1023;
                  if (abs(x) < abs(y)) {
                    tmp = x;
                    x = y;
                    y = tmp;
                  }
                  sum = twosum(x, y);
                  hi = sum.hi;
                  lo = sum.lo;
                }
                if (lo !== 0) partials[actuallyUsedPartials++] = lo;
                x = hi;
              }
              partials.length = actuallyUsedPartials;
              if (x !== 0) push(partials, x);
            }
            var n = partials.length - 1;
            hi = 0;
            lo = 0;
            if (overflow !== 0) {
              var next = n >= 0 ? partials[n] : 0;
              n--;
              if (abs(overflow) > 1 || overflow > 0 && next > 0 || overflow < 0 && next < 0) {
                return overflow > 0 ? $Infinity : -$Infinity;
              }
              sum = twosum(overflow * POW_2_1023, next / 2);
              hi = sum.hi;
              lo = sum.lo;
              lo *= 2;
              if (abs(2 * hi) === $Infinity) {
                if (hi > 0) {
                  return hi === POW_2_1023 && lo === -(MAX_ULP / 2) && n >= 0 && partials[n] < 0 ? MAX_DOUBLE : $Infinity;
                }
                return hi === -POW_2_1023 && lo === MAX_ULP / 2 && n >= 0 && partials[n] > 0 ? -MAX_DOUBLE : -$Infinity;
              }
              if (lo !== 0) {
                partials[++n] = lo;
                lo = 0;
              }
              hi *= 2;
            }
            while (n >= 0) {
              sum = twosum(hi, partials[n--]);
              hi = sum.hi;
              lo = sum.lo;
              if (lo !== 0) break;
            }
            if (n >= 0 && (lo < 0 && partials[n] < 0 || lo > 0 && partials[n] > 0)) {
              y = lo * 2;
              x = hi + y;
              if (y === x - hi) hi = x;
            }
            return hi;
          }
        });
      });
      es_promise_try_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var globalThis2 = global_this_namespaceFn();
        var apply = function_apply_namespaceFn();
        var slice = array_slice_namespaceFn();
        var promiseResolve = promise_resolve_namespaceFn();
        var newPromiseCapabilityModule = new_promise_capability_namespaceFn();
        var aCallable = a_callable_namespaceFn();
        var perform = perform_namespaceFn();
        var fails = fails_namespaceFn();
        var Promise2 = globalThis2.Promise;
        var ACCEPT_ARGUMENTS = false;
        var FORCED = !Promise2 || !Promise2["try"] || fails(function() {
          var p = Promise2.resolve();
          return Promise2["try"](function(argument) {
            ACCEPT_ARGUMENTS = argument === 8;
            return p;
          }, 8) !== p;
        }) || !ACCEPT_ARGUMENTS;
        $2({ target: "Promise", stat: true, forced: FORCED }, {
          "try": function(callbackfn) {
            var args = arguments.length > 1 ? slice(arguments, 1) : [];
            var result = perform(function() {
              return apply(aCallable(callbackfn), void 0, args);
            });
            if (!result.error) return promiseResolve(this, result.value);
            var promiseCapability = newPromiseCapabilityModule.f(this);
            var reject = promiseCapability.reject;
            reject(result.value);
            return promiseCapability.promise;
          }
        });
      });
      es_set_difference_v2_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var difference = set_difference_namespaceFn();
        var fails = fails_namespaceFn();
        var setMethodAcceptSetLike = set_method_accept_set_like_namespaceFn();
        var SET_LIKE_INCORRECT_BEHAVIOR = !setMethodAcceptSetLike("difference", function(result) {
          return result.size === 0;
        });
        var FORCED = SET_LIKE_INCORRECT_BEHAVIOR || fails(function() {
          var setLike = {
            size: 1,
            has: function() {
              return true;
            },
            keys: function() {
              var index = 0;
              return {
                next: function() {
                  var done = index++ > 1;
                  if (baseSet.has(1)) baseSet.clear();
                  return { done, value: 2 };
                }
              };
            }
          };
          var baseSet = /* @__PURE__ */ new Set([1, 2, 3, 4]);
          return baseSet.difference(setLike).size !== 3;
        });
        $2({ target: "Set", proto: true, real: true, forced: FORCED }, {
          difference
        });
      });
      es_set_intersection_v2_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var fails = fails_namespaceFn();
        var intersection = set_intersection_namespaceFn();
        var setMethodAcceptSetLike = set_method_accept_set_like_namespaceFn();
        var INCORRECT = !setMethodAcceptSetLike("intersection", function(result) {
          return result.size === 2 && result.has(1) && result.has(2);
        }) || fails(function() {
          return String(Array.from((/* @__PURE__ */ new Set([1, 2, 3])).intersection(/* @__PURE__ */ new Set([3, 2])))) !== "3,2";
        });
        $2({ target: "Set", proto: true, real: true, forced: INCORRECT }, {
          intersection
        });
      });
      es_set_is_disjoint_from_v2_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var isDisjointFrom = set_is_disjoint_from_namespaceFn();
        var setMethodAcceptSetLike = set_method_accept_set_like_namespaceFn();
        var INCORRECT = !setMethodAcceptSetLike("isDisjointFrom", function(result) {
          return !result;
        });
        $2({ target: "Set", proto: true, real: true, forced: INCORRECT }, {
          isDisjointFrom
        });
      });
      es_set_is_subset_of_v2_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var isSubsetOf = set_is_subset_of_namespaceFn();
        var setMethodAcceptSetLike = set_method_accept_set_like_namespaceFn();
        var INCORRECT = !setMethodAcceptSetLike("isSubsetOf", function(result) {
          return result;
        });
        $2({ target: "Set", proto: true, real: true, forced: INCORRECT }, {
          isSubsetOf
        });
      });
      es_set_is_superset_of_v2_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var isSupersetOf = set_is_superset_of_namespaceFn();
        var setMethodAcceptSetLike = set_method_accept_set_like_namespaceFn();
        var INCORRECT = !setMethodAcceptSetLike("isSupersetOf", function(result) {
          return !result;
        });
        $2({ target: "Set", proto: true, real: true, forced: INCORRECT }, {
          isSupersetOf
        });
      });
      es_set_symmetric_difference_v2_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var symmetricDifference = set_symmetric_difference_namespaceFn();
        var setMethodGetKeysBeforeCloning = set_method_get_keys_before_cloning_detection_namespaceFn();
        var setMethodAcceptSetLike = set_method_accept_set_like_namespaceFn();
        var FORCED = !setMethodAcceptSetLike("symmetricDifference") || !setMethodGetKeysBeforeCloning("symmetricDifference");
        $2({ target: "Set", proto: true, real: true, forced: FORCED }, {
          symmetricDifference
        });
      });
      es_set_union_v2_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var union = set_union_namespaceFn();
        var setMethodGetKeysBeforeCloning = set_method_get_keys_before_cloning_detection_namespaceFn();
        var setMethodAcceptSetLike = set_method_accept_set_like_namespaceFn();
        var FORCED = !setMethodAcceptSetLike("union") || !setMethodGetKeysBeforeCloning("union");
        $2({ target: "Set", proto: true, real: true, forced: FORCED }, {
          union
        });
      });
      es_typed_array_with_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var ArrayBufferViewCore = array_buffer_view_core_namespaceFn();
        var isBigIntArray = is_big_int_array_namespaceFn();
        var lengthOfArrayLike = length_of_array_like_namespaceFn();
        var toIntegerOrInfinity = to_integer_or_infinity_namespaceFn();
        var toBigInt = to_big_int_namespaceFn();
        var aTypedArray = ArrayBufferViewCore.aTypedArray;
        var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
        var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
        var $RangeError = RangeError;
        var PROPER_ORDER = (function() {
          try {
            new Int8Array(1)["with"](2, { valueOf: function() {
              throw 8;
            } });
          } catch (error) {
            return error === 8;
          }
        })();
        var THROW_ON_NEGATIVE_FRACTIONAL_INDEX = PROPER_ORDER && (function() {
          try {
            new Int8Array(1)["with"](-0.5, 1);
          } catch (error) {
            return true;
          }
        })();
        exportTypedArrayMethod("with", { "with": function(index, value2) {
          var O = aTypedArray(this);
          var len = lengthOfArrayLike(O);
          var relativeIndex = toIntegerOrInfinity(index);
          var actualIndex = relativeIndex < 0 ? len + relativeIndex : relativeIndex;
          var numericValue = isBigIntArray(O) ? toBigInt(value2) : +value2;
          if (actualIndex >= len || actualIndex < 0) throw new $RangeError("Incorrect index");
          var A = new (getTypedArrayConstructor(O))(len);
          var k = 0;
          for (; k < len; k++) A[k] = k === actualIndex ? numericValue : O[k];
          return A;
        } }["with"], !PROPER_ORDER || THROW_ON_NEGATIVE_FRACTIONAL_INDEX);
      });
      es_uint8_array_from_base64_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var globalThis2 = global_this_namespaceFn();
        var arrayFromConstructorAndList = array_from_constructor_and_list_namespaceFn();
        var $fromBase64 = uint8_from_base64_namespaceFn();
        var Uint8Array2 = globalThis2.Uint8Array;
        var INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS = !Uint8Array2 || !Uint8Array2.fromBase64 || !(function() {
          try {
            Uint8Array2.fromBase64("a");
            return;
          } catch (error) {
          }
          try {
            Uint8Array2.fromBase64("", null);
          } catch (error) {
            return true;
          }
        })();
        if (Uint8Array2) $2({ target: "Uint8Array", stat: true, forced: INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS }, {
          fromBase64: function fromBase64(string) {
            var result = $fromBase64(string, arguments.length > 1 ? arguments[1] : void 0, null, 9007199254740991);
            return arrayFromConstructorAndList(Uint8Array2, result.bytes);
          }
        });
      });
      es_uint8_array_set_from_base64_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var globalThis2 = global_this_namespaceFn();
        var $fromBase64 = uint8_from_base64_namespaceFn();
        var anUint8Array = an_uint8_array_namespaceFn();
        var Uint8Array2 = globalThis2.Uint8Array;
        var INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS = !Uint8Array2 || !Uint8Array2.prototype.setFromBase64 || !(function() {
          var target = new Uint8Array2([255, 255, 255, 255, 255]);
          try {
            target.setFromBase64("", null);
            return;
          } catch (error) {
          }
          try {
            target.setFromBase64("a");
            return;
          } catch (error) {
          }
          try {
            target.setFromBase64("MjYyZg===");
          } catch (error) {
            return target[0] === 50 && target[1] === 54 && target[2] === 50 && target[3] === 255 && target[4] === 255;
          }
        })();
        if (Uint8Array2) $2({ target: "Uint8Array", proto: true, forced: INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS }, {
          setFromBase64: function setFromBase64(string) {
            anUint8Array(this);
            var result = $fromBase64(string, arguments.length > 1 ? arguments[1] : void 0, this, this.length);
            return { read: result.read, written: result.written };
          }
        });
      });
      es_uint8_array_set_from_hex_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var globalThis2 = global_this_namespaceFn();
        var aString = a_string_namespaceFn();
        var anUint8Array = an_uint8_array_namespaceFn();
        var notDetached = array_buffer_not_detached_namespaceFn();
        var $fromHex = uint8_from_hex_namespaceFn();
        function throwsOnLengthTrackingView() {
          try {
            var rab = new ArrayBuffer(16, { maxByteLength: 1024 });
            new Uint8Array(rab).setFromHex("cafed00d");
          } catch (error) {
            return true;
          }
        }
        if (globalThis2.Uint8Array) $2({ target: "Uint8Array", proto: true, forced: throwsOnLengthTrackingView() }, {
          setFromHex: function setFromHex(string) {
            anUint8Array(this);
            aString(string);
            notDetached(this.buffer);
            var read2 = $fromHex(string, this).read;
            return { read: read2, written: read2 / 2 };
          }
        });
      });
      es_uint8_array_to_base64_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var globalThis2 = global_this_namespaceFn();
        var uncurryThis = function_uncurry_this_namespaceFn();
        var anObjectOrUndefined = an_object_or_undefined_namespaceFn();
        var anUint8Array = an_uint8_array_namespaceFn();
        var notDetached = array_buffer_not_detached_namespaceFn();
        var base64Map = base64_map_namespaceFn();
        var getAlphabetOption = get_alphabet_option_namespaceFn();
        var base64Alphabet = base64Map.i2c;
        var base64UrlAlphabet = base64Map.i2cUrl;
        var $floor = Math.floor;
        var $ceil = Math.ceil;
        var charAt = uncurryThis("".charAt);
        var Uint8Array2 = globalThis2.Uint8Array;
        var $Array = globalThis2.Array;
        var join = uncurryThis([].join);
        var INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS = !Uint8Array2 || !Uint8Array2.prototype.toBase64 || !(function() {
          try {
            var target = new Uint8Array2();
            target.toBase64(null);
          } catch (error) {
            return true;
          }
        })();
        if (Uint8Array2) $2({ target: "Uint8Array", proto: true, forced: INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS }, {
          toBase64: function toBase64() {
            var array = anUint8Array(this);
            var options = arguments.length ? anObjectOrUndefined(arguments[0]) : void 0;
            var alphabet = getAlphabetOption(options) === "base64" ? base64Alphabet : base64UrlAlphabet;
            var omitPadding = !!options && !!options.omitPadding;
            notDetached(this.buffer);
            var i = 0;
            var length = array.length;
            var result = $Array(omitPadding ? $floor(length / 3) * 4 + (length % 3 ? length % 3 + 1 : 0) : $ceil(length / 3) * 4);
            var written = 0;
            var triplet;
            var at = function(shift) {
              return charAt(alphabet, triplet >> 6 * shift & 63);
            };
            for (; i + 2 < length; i += 3) {
              triplet = (array[i] << 16) + (array[i + 1] << 8) + array[i + 2];
              result[written++] = at(3);
              result[written++] = at(2);
              result[written++] = at(1);
              result[written++] = at(0);
            }
            if (i + 2 === length) {
              triplet = (array[i] << 16) + (array[i + 1] << 8);
              result[written++] = at(3);
              result[written++] = at(2);
              result[written++] = at(1);
              if (!omitPadding) result[written++] = "=";
            } else if (i + 1 === length) {
              triplet = array[i] << 16;
              result[written++] = at(3);
              result[written++] = at(2);
              if (!omitPadding) {
                result[written++] = "=";
                result[written++] = "=";
              }
            }
            return join(result, "");
          }
        });
      });
      es_uint8_array_to_hex_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var globalThis2 = global_this_namespaceFn();
        var uncurryThis = function_uncurry_this_namespaceFn();
        var anUint8Array = an_uint8_array_namespaceFn();
        var notDetached = array_buffer_not_detached_namespaceFn();
        var numberToString = uncurryThis(1.1.toString);
        var join = uncurryThis([].join);
        var $Array = Array;
        var Uint8Array2 = globalThis2.Uint8Array;
        var INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS = !Uint8Array2 || !Uint8Array2.prototype.toHex || !(function() {
          try {
            var target = new Uint8Array2([255, 255, 255, 255, 255, 255, 255, 255]);
            return target.toHex() === "ffffffffffffffff";
          } catch (error) {
            return false;
          }
        })();
        if (Uint8Array2) $2({ target: "Uint8Array", proto: true, forced: INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS }, {
          toHex: function toHex2() {
            anUint8Array(this);
            notDetached(this.buffer);
            var result = $Array(this.length);
            for (var i = 0, length = this.length; i < length; i++) {
              var hex = numberToString(this[i], 16);
              result[i] = hex.length === 1 ? "0" + hex : hex;
            }
            return join(result, "");
          }
        });
      });
      es_weak_map_get_or_insert_computed_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var aCallable = a_callable_namespaceFn();
        var aWeakMap = a_weak_map_namespaceFn();
        var aWeakKey = a_weak_key_namespaceFn();
        var WeakMapHelpers = weak_map_helpers_namespaceFn();
        var IS_PURE = is_pure_namespaceFn();
        var get2 = WeakMapHelpers.get;
        var has = WeakMapHelpers.has;
        var set = WeakMapHelpers.set;
        var FORCED = IS_PURE || !(function() {
          try {
            if (WeakMap.prototype.getOrInsertComputed) (/* @__PURE__ */ new WeakMap()).getOrInsertComputed(1, function() {
              throw 1;
            });
          } catch (error) {
            return error instanceof TypeError;
          }
        })();
        $2({ target: "WeakMap", proto: true, real: true, forced: FORCED }, {
          getOrInsertComputed: function getOrInsertComputed(key, callbackfn) {
            if (!IS_PURE) aWeakMap(this);
            aWeakKey(key);
            aCallable(callbackfn);
            if (has(this, key)) return get2(this, key);
            var value2 = callbackfn(key);
            set(this, key, value2);
            return value2;
          }
        });
      });
      es_weak_map_get_or_insert_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var WeakMapHelpers = weak_map_helpers_namespaceFn();
        var IS_PURE = is_pure_namespaceFn();
        var get2 = WeakMapHelpers.get;
        var has = WeakMapHelpers.has;
        var set = WeakMapHelpers.set;
        $2({ target: "WeakMap", proto: true, real: true, forced: IS_PURE }, {
          getOrInsert: function getOrInsert(key, value2) {
            if (has(this, key)) return get2(this, key);
            set(this, key, value2);
            return value2;
          }
        });
      });
      web_dom_exception_stack_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var globalThis2 = global_this_namespaceFn();
        var getBuiltIn = get_built_in_namespaceFn();
        var createPropertyDescriptor = create_property_descriptor_namespaceFn();
        var defineProperty = object_define_property_namespaceFn().f;
        var hasOwn = has_own_property_namespaceFn();
        var anInstance = an_instance_namespaceFn();
        var inheritIfRequired = inherit_if_required_namespaceFn();
        var normalizeStringArgument = normalize_string_argument_namespaceFn();
        var DOMExceptionConstants = dom_exception_constants_namespaceFn();
        var clearErrorStack = error_stack_clear_namespaceFn();
        var DESCRIPTORS = descriptors_namespaceFn();
        var IS_PURE = is_pure_namespaceFn();
        var DOM_EXCEPTION = "DOMException";
        var Error2 = getBuiltIn("Error");
        var NativeDOMException = getBuiltIn(DOM_EXCEPTION);
        var $DOMException = function DOMException2() {
          anInstance(this, DOMExceptionPrototype);
          var argumentsLength = arguments.length;
          var message = normalizeStringArgument(argumentsLength < 1 ? void 0 : arguments[0]);
          var name = normalizeStringArgument(argumentsLength < 2 ? void 0 : arguments[1], "Error");
          var that = new NativeDOMException(message, name);
          var error = new Error2(message);
          error.name = DOM_EXCEPTION;
          defineProperty(that, "stack", createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
          inheritIfRequired(that, this, $DOMException);
          return that;
        };
        var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;
        var ERROR_HAS_STACK = "stack" in new Error2(DOM_EXCEPTION);
        var DOM_EXCEPTION_HAS_STACK = "stack" in new NativeDOMException(1, 2);
        var descriptor = NativeDOMException && DESCRIPTORS && Object.getOwnPropertyDescriptor(globalThis2, DOM_EXCEPTION);
        var BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable);
        var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;
        $2({ global: true, constructor: true, forced: IS_PURE || FORCED_CONSTRUCTOR }, {
          // TODO: fix export logic
          DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
        });
        var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
        var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;
        if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
          if (!IS_PURE) {
            defineProperty(PolyfilledDOMExceptionPrototype, "constructor", createPropertyDescriptor(1, PolyfilledDOMException));
          }
          for (var key in DOMExceptionConstants) if (hasOwn(DOMExceptionConstants, key)) {
            var constant = DOMExceptionConstants[key];
            var constantName = constant.s;
            if (!hasOwn(PolyfilledDOMException, constantName)) {
              defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant.c));
            }
          }
        }
      });
      web_url_parse_namespaceFn = /* @__PURE__ */ __webpack_require__.cw(() => {
        var $2 = export_namespaceFn();
        var getBuiltIn = get_built_in_namespaceFn();
        var validateArgumentsLength = validate_arguments_length_namespaceFn();
        var toString = to_string_namespaceFn();
        var USE_NATIVE_URL = url_constructor_detection_namespaceFn();
        var URL2 = getBuiltIn("URL");
        $2({ target: "URL", stat: true, forced: !USE_NATIVE_URL }, {
          parse: function parse2(url) {
            var length = validateArgumentsLength(arguments.length, 1);
            var urlString = toString(url);
            var base = length < 2 || arguments[1] === void 0 ? void 0 : toString(arguments[1]);
            try {
              return new URL2(urlString, base);
            } catch (error) {
              return null;
            }
          }
        });
      });
      es_array_includes_namespaceFn();
      es_array_push_namespaceFn();
      es_iterator_constructor_namespaceFn();
      es_iterator_filter_namespaceFn();
      es_map_get_or_insert_namespaceFn();
      es_map_get_or_insert_computed_namespaceFn();
      es_set_difference_v2_namespaceFn();
      es_set_intersection_v2_namespaceFn();
      es_set_is_disjoint_from_v2_namespaceFn();
      es_set_is_subset_of_v2_namespaceFn();
      es_set_is_superset_of_v2_namespaceFn();
      es_set_symmetric_difference_v2_namespaceFn();
      es_set_union_v2_namespaceFn();
      es_typed_array_with_namespaceFn();
      es_uint8_array_set_from_base64_namespaceFn();
      es_uint8_array_set_from_hex_namespaceFn();
      es_uint8_array_to_base64_namespaceFn();
      es_uint8_array_to_hex_namespaceFn();
      web_url_parse_namespaceFn();
      isNodeJS = typeof process === "object" && process + "" === "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");
      BBOX_INIT = [Infinity, Infinity, -Infinity, -Infinity];
      F32_BBOX_INIT = new Float32Array(BBOX_INIT);
      FONT_IDENTITY_MATRIX = [1e-3, 0, 0, 1e-3, 0, 0];
      SVG_NS = "http://www.w3.org/2000/svg";
      RenderingIntentFlag = {
        ANY: 1,
        DISPLAY: 2,
        PRINT: 4,
        SAVE: 8,
        ANNOTATIONS_FORMS: 16,
        ANNOTATIONS_STORAGE: 32,
        ANNOTATIONS_DISABLE: 64,
        IS_EDITING: 128,
        OPLIST: 256
      };
      AnnotationMode = {
        DISABLE: 0,
        ENABLE: 1,
        ENABLE_FORMS: 2,
        ENABLE_STORAGE: 3
      };
      AnnotationPrefix = "pdfjs_internal_id_";
      AnnotationEditorPrefix = "pdfjs_internal_editor_";
      AnnotationEditorType = {
        DISABLE: -1,
        NONE: 0,
        FREETEXT: 3,
        HIGHLIGHT: 9,
        STAMP: 13,
        INK: 15,
        POPUP: 16,
        SIGNATURE: 101,
        COMMENT: 102
      };
      AnnotationEditorParamsType = {
        RESIZE: 1,
        CREATE: 2,
        FREETEXT_SIZE: 11,
        FREETEXT_COLOR: 12,
        FREETEXT_OPACITY: 13,
        INK_COLOR: 21,
        INK_THICKNESS: 22,
        INK_OPACITY: 23,
        INK_COLOR_AND_OPACITY: 24,
        HIGHLIGHT_COLOR: 31,
        HIGHLIGHT_THICKNESS: 32,
        HIGHLIGHT_FREE: 33,
        HIGHLIGHT_SHOW_ALL: 34,
        DRAW_STEP: 41
      };
      PermissionFlag = {
        PRINT: 4,
        MODIFY_CONTENTS: 8,
        COPY: 16,
        MODIFY_ANNOTATIONS: 32,
        FILL_INTERACTIVE_FORMS: 256,
        COPY_FOR_ACCESSIBILITY: 512,
        ASSEMBLE: 1024,
        PRINT_HIGH_QUALITY: 2048
      };
      TextRenderingMode = {
        FILL: 0,
        STROKE: 1,
        FILL_STROKE: 2,
        INVISIBLE: 3,
        FILL_ADD_TO_PATH: 4,
        STROKE_ADD_TO_PATH: 5,
        FILL_STROKE_ADD_TO_PATH: 6,
        ADD_TO_PATH: 7,
        FILL_STROKE_MASK: 3,
        ADD_TO_PATH_FLAG: 4
      };
      ImageKind = {
        GRAYSCALE_1BPP: 1,
        RGB_24BPP: 2,
        RGBA_32BPP: 3
      };
      AnnotationType = {
        TEXT: 1,
        LINK: 2,
        FREETEXT: 3,
        LINE: 4,
        SQUARE: 5,
        CIRCLE: 6,
        POLYGON: 7,
        POLYLINE: 8,
        HIGHLIGHT: 9,
        UNDERLINE: 10,
        SQUIGGLY: 11,
        STRIKEOUT: 12,
        STAMP: 13,
        CARET: 14,
        INK: 15,
        POPUP: 16,
        FILEATTACHMENT: 17,
        SOUND: 18,
        MOVIE: 19,
        WIDGET: 20,
        SCREEN: 21,
        PRINTERMARK: 22,
        TRAPNET: 23,
        WATERMARK: 24,
        THREED: 25,
        REDACT: 26,
        RICHMEDIA: 27
      };
      AnnotationBorderStyleType = {
        SOLID: 1,
        DASHED: 2,
        BEVELED: 3,
        INSET: 4,
        UNDERLINE: 5
      };
      VerbosityLevel = {
        ERRORS: 0,
        WARNINGS: 1,
        INFOS: 5
      };
      OPS = {
        dependency: 1,
        setLineWidth: 2,
        setLineCap: 3,
        setLineJoin: 4,
        setMiterLimit: 5,
        setDash: 6,
        setRenderingIntent: 7,
        setFlatness: 8,
        setGState: 9,
        save: 10,
        restore: 11,
        transform: 12,
        moveTo: 13,
        lineTo: 14,
        curveTo: 15,
        curveTo2: 16,
        curveTo3: 17,
        closePath: 18,
        rectangle: 19,
        stroke: 20,
        closeStroke: 21,
        fill: 22,
        eoFill: 23,
        fillStroke: 24,
        eoFillStroke: 25,
        closeFillStroke: 26,
        closeEOFillStroke: 27,
        endPath: 28,
        clip: 29,
        eoClip: 30,
        beginText: 31,
        endText: 32,
        setCharSpacing: 33,
        setWordSpacing: 34,
        setHScale: 35,
        setLeading: 36,
        setFont: 37,
        setTextRenderingMode: 38,
        setTextRise: 39,
        moveText: 40,
        setLeadingMoveText: 41,
        setTextMatrix: 42,
        nextLine: 43,
        showText: 44,
        showSpacedText: 45,
        nextLineShowText: 46,
        nextLineSetSpacingShowText: 47,
        setCharWidth: 48,
        setCharWidthAndBounds: 49,
        setStrokeColorSpace: 50,
        setFillColorSpace: 51,
        setStrokeColor: 52,
        setStrokeColorN: 53,
        setFillColor: 54,
        setFillColorN: 55,
        setStrokeGray: 56,
        setFillGray: 57,
        setStrokeRGBColor: 58,
        setFillRGBColor: 59,
        setStrokeCMYKColor: 60,
        setFillCMYKColor: 61,
        shadingFill: 62,
        beginInlineImage: 63,
        beginImageData: 64,
        endInlineImage: 65,
        paintXObject: 66,
        markPoint: 67,
        markPointProps: 68,
        beginMarkedContent: 69,
        beginMarkedContentProps: 70,
        endMarkedContent: 71,
        beginCompat: 72,
        endCompat: 73,
        paintFormXObjectBegin: 74,
        paintFormXObjectEnd: 75,
        beginGroup: 76,
        endGroup: 77,
        beginAnnotation: 80,
        endAnnotation: 81,
        paintImageMaskXObject: 83,
        paintImageMaskXObjectGroup: 84,
        paintImageXObject: 85,
        paintInlineImageXObject: 86,
        paintInlineImageXObjectGroup: 87,
        paintImageXObjectRepeat: 88,
        paintImageMaskXObjectRepeat: 89,
        paintSolidColorImageMask: 90,
        constructPath: 91,
        setStrokeTransparent: 92,
        setFillTransparent: 93,
        rawFillPath: 94
      };
      DrawOPS = {
        moveTo: 0,
        lineTo: 1,
        curveTo: 2,
        quadraticCurveTo: 3,
        closePath: 4
      };
      PasswordResponses = {
        NEED_PASSWORD: 1,
        INCORRECT_PASSWORD: 2
      };
      verbosity = VerbosityLevel.WARNINGS;
      BaseException = (function BaseExceptionClosure() {
        function BaseException2(message, name) {
          this.message = message;
          this.name = name;
        }
        BaseException2.prototype = new Error();
        BaseException2.constructor = BaseException2;
        return BaseException2;
      })();
      PasswordException = class extends BaseException {
        constructor(msg, code) {
          super(msg, "PasswordException");
          this.code = code;
        }
      };
      UnknownErrorException = class extends BaseException {
        constructor(msg, details) {
          super(msg, "UnknownErrorException");
          this.details = details;
        }
      };
      InvalidPDFException = class extends BaseException {
        constructor(msg) {
          super(msg, "InvalidPDFException");
        }
      };
      ResponseException = class extends BaseException {
        constructor(msg, status2, missing) {
          super(msg, "ResponseException");
          this.status = status2;
          this.missing = missing;
        }
      };
      FormatError = class extends BaseException {
        constructor(msg) {
          super(msg, "FormatError");
        }
      };
      AbortException = class extends BaseException {
        constructor(msg) {
          super(msg, "AbortException");
        }
      };
      FeatureTest = class {
        static get isLittleEndian() {
          const buffer8 = new Uint8Array(4);
          buffer8[0] = 1;
          const view32 = new Uint32Array(buffer8.buffer, 0, 1);
          return util_shadow(this, "isLittleEndian", view32[0] === 1);
        }
        static get isOffscreenCanvasSupported() {
          return util_shadow(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas !== "undefined");
        }
        static get isImageDecoderSupported() {
          return util_shadow(this, "isImageDecoderSupported", typeof ImageDecoder !== "undefined");
        }
        static get isVideoFrameSupported() {
          return util_shadow(this, "isVideoFrameSupported", typeof VideoFrame !== "undefined");
        }
        static get isFloat16ArraySupported() {
          return util_shadow(this, "isFloat16ArraySupported", typeof Float16Array !== "undefined");
        }
        static get isSanitizerSupported() {
          return util_shadow(this, "isSanitizerSupported", typeof Sanitizer !== "undefined");
        }
        static get platform() {
          const {
            platform,
            userAgent
          } = navigator;
          return util_shadow(this, "platform", {
            isAndroid: userAgent.includes("Android"),
            isLinux: platform.includes("Linux"),
            isMac: platform.includes("Mac"),
            isWindows: platform.includes("Win"),
            isFirefox: userAgent.includes("Firefox")
          });
        }
        static get isCanvasFilterSupported() {
          let ctx;
          if (this.isOffscreenCanvasSupported) {
            ctx = new OffscreenCanvas(1, 1).getContext("2d");
          } else if (typeof document !== "undefined") {
            ctx = document.createElement("canvas").getContext("2d");
          }
          return util_shadow(this, "isCanvasFilterSupported", (ctx == null ? void 0 : ctx.filter) !== void 0);
        }
        static get isAlphaColorInputSupported() {
          if (typeof document === "undefined") {
            return util_shadow(this, "isAlphaColorInputSupported", false);
          }
          const input = document.createElement("input");
          input.type = "color";
          input.setAttribute("alpha", "");
          input.value = "#ff000080";
          return util_shadow(this, "isAlphaColorInputSupported", input.value !== "#ff0000");
        }
        static get isBackdropFilterSupported() {
          return util_shadow(this, "isBackdropFilterSupported", typeof CSS !== "undefined" && CSS.supports("backdrop-filter", "blur(1px)"));
        }
      };
      Util = class {
        static get hexNums() {
          return util_shadow(this, "hexNums", Array.from({
            length: 256
          }, (_, n) => n.toString(16).padStart(2, "0")));
        }
        static makeHexColor(r, g, b) {
          return `#${this.hexNums[r]}${this.hexNums[g]}${this.hexNums[b]}`;
        }
        static get identity0to256Map() {
          return util_shadow(this, "identity0to256Map", Uint8Array.from({
            length: 256
          }, (_, i) => i));
        }
        static transform(m1, m2) {
          return [m1[0] * m2[0] + m1[2] * m2[1], m1[1] * m2[0] + m1[3] * m2[1], m1[0] * m2[2] + m1[2] * m2[3], m1[1] * m2[2] + m1[3] * m2[3], m1[0] * m2[4] + m1[2] * m2[5] + m1[4], m1[1] * m2[4] + m1[3] * m2[5] + m1[5]];
        }
        static multiplyByDOMMatrix(m, md) {
          return [m[0] * md.a + m[2] * md.b, m[1] * md.a + m[3] * md.b, m[0] * md.c + m[2] * md.d, m[1] * md.c + m[3] * md.d, m[0] * md.e + m[2] * md.f + m[4], m[1] * md.e + m[3] * md.f + m[5]];
        }
        static applyTransform(p, m, pos = 0) {
          const p0 = p[pos];
          const p1 = p[pos + 1];
          p[pos] = p0 * m[0] + p1 * m[2] + m[4];
          p[pos + 1] = p0 * m[1] + p1 * m[3] + m[5];
        }
        static applyTransformToBezier(p, transform, pos = 0) {
          const m0 = transform[0];
          const m1 = transform[1];
          const m2 = transform[2];
          const m3 = transform[3];
          const m4 = transform[4];
          const m5 = transform[5];
          for (let i = 0; i < 6; i += 2) {
            const pI = p[pos + i];
            const pI1 = p[pos + i + 1];
            p[pos + i] = pI * m0 + pI1 * m2 + m4;
            p[pos + i + 1] = pI * m1 + pI1 * m3 + m5;
          }
        }
        static applyInverseTransform(p, m) {
          const p0 = p[0];
          const p1 = p[1];
          const d = m[0] * m[3] - m[1] * m[2];
          p[0] = (p0 * m[3] - p1 * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
          p[1] = (-p0 * m[1] + p1 * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
        }
        static axialAlignedBoundingBox(rect, transform, output) {
          const m0 = transform[0];
          const m1 = transform[1];
          const m2 = transform[2];
          const m3 = transform[3];
          const m4 = transform[4];
          const m5 = transform[5];
          const r0 = rect[0];
          const r1 = rect[1];
          const r2 = rect[2];
          const r3 = rect[3];
          let a0 = m0 * r0 + m4;
          let a2 = a0;
          let a1 = m0 * r2 + m4;
          let a3 = a1;
          let b0 = m3 * r1 + m5;
          let b2 = b0;
          let b1 = m3 * r3 + m5;
          let b3 = b1;
          if (m1 !== 0 || m2 !== 0) {
            const m1r0 = m1 * r0;
            const m1r2 = m1 * r2;
            const m2r1 = m2 * r1;
            const m2r3 = m2 * r3;
            a0 += m2r1;
            a3 += m2r1;
            a1 += m2r3;
            a2 += m2r3;
            b0 += m1r0;
            b3 += m1r0;
            b1 += m1r2;
            b2 += m1r2;
          }
          output[0] = Math.min(output[0], a0, a1, Math.min(a2, a3));
          output[1] = Math.min(output[1], b0, b1, Math.min(b2, b3));
          output[2] = Math.max(output[2], a0, a1, Math.max(a2, a3));
          output[3] = Math.max(output[3], b0, b1, Math.max(b2, b3));
        }
        static inverseTransform(m) {
          const d = m[0] * m[3] - m[1] * m[2];
          return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
        }
        static singularValueDecompose2dScale(matrix, output) {
          const m0 = matrix[0];
          const m1 = matrix[1];
          const m2 = matrix[2];
          const m3 = matrix[3];
          const a = __pow(m0, 2) + __pow(m1, 2);
          const b = m0 * m2 + m1 * m3;
          const c = __pow(m2, 2) + __pow(m3, 2);
          const first = (a + c) / 2;
          const second = Math.sqrt(__pow(first, 2) - (a * c - __pow(b, 2)));
          output[0] = Math.sqrt(first + second || 1);
          output[1] = Math.sqrt(first - second || 1);
        }
        static normalizeRect(rect) {
          const r = rect.slice(0);
          if (rect[0] > rect[2]) {
            r[0] = rect[2];
            r[2] = rect[0];
          }
          if (rect[1] > rect[3]) {
            r[1] = rect[3];
            r[3] = rect[1];
          }
          return r;
        }
        static intersect(rect1, rect2) {
          const xLow = Math.max(Math.min(rect1[0], rect1[2]), Math.min(rect2[0], rect2[2]));
          const xHigh = Math.min(Math.max(rect1[0], rect1[2]), Math.max(rect2[0], rect2[2]));
          if (xLow > xHigh) {
            return null;
          }
          const yLow = Math.max(Math.min(rect1[1], rect1[3]), Math.min(rect2[1], rect2[3]));
          const yHigh = Math.min(Math.max(rect1[1], rect1[3]), Math.max(rect2[1], rect2[3]));
          return yLow > yHigh ? null : [xLow, yLow, xHigh, yHigh];
        }
        static pointBoundingBox(x, y, minMax) {
          minMax[0] = Math.min(minMax[0], x);
          minMax[1] = Math.min(minMax[1], y);
          minMax[2] = Math.max(minMax[2], x);
          minMax[3] = Math.max(minMax[3], y);
        }
        static rectBoundingBox(x0, y0, x1, y1, minMax) {
          minMax[0] = Math.min(minMax[0], x0, x1);
          minMax[1] = Math.min(minMax[1], y0, y1);
          minMax[2] = Math.max(minMax[2], x0, x1);
          minMax[3] = Math.max(minMax[3], y0, y1);
        }
        static bezierBoundingBox(x0, y0, x1, y1, x2, y2, x3, y3, minMax) {
          minMax[0] = Math.min(minMax[0], x0, x3);
          minMax[1] = Math.min(minMax[1], y0, y3);
          minMax[2] = Math.max(minMax[2], x0, x3);
          minMax[3] = Math.max(minMax[3], y0, y3);
          __privateMethod(this, _Util_static, getExtremum_fn).call(this, x0, x1, x2, x3, y0, y1, y2, y3, 3 * (-x0 + 3 * (x1 - x2) + x3), 6 * (x0 - 2 * x1 + x2), 3 * (x1 - x0), minMax);
          __privateMethod(this, _Util_static, getExtremum_fn).call(this, x0, x1, x2, x3, y0, y1, y2, y3, 3 * (-y0 + 3 * (y1 - y2) + y3), 6 * (y0 - 2 * y1 + y2), 3 * (y1 - y0), minMax);
        }
      };
      _Util_static = new WeakSet();
      getExtremumOnCurve_fn = function(x0, x1, x2, x3, y0, y1, y2, y3, t, minMax) {
        if (t <= 0 || t >= 1) {
          return;
        }
        const mt = 1 - t;
        const tt = t * t;
        const ttt = tt * t;
        const x = mt * (mt * (mt * x0 + 3 * t * x1) + 3 * tt * x2) + ttt * x3;
        const y = mt * (mt * (mt * y0 + 3 * t * y1) + 3 * tt * y2) + ttt * y3;
        minMax[0] = Math.min(minMax[0], x);
        minMax[1] = Math.min(minMax[1], y);
        minMax[2] = Math.max(minMax[2], x);
        minMax[3] = Math.max(minMax[3], y);
      };
      getExtremum_fn = function(x0, x1, x2, x3, y0, y1, y2, y3, a, b, c, minMax) {
        if (Math.abs(a) < 1e-12) {
          if (Math.abs(b) >= 1e-12) {
            __privateMethod(this, _Util_static, getExtremumOnCurve_fn).call(this, x0, x1, x2, x3, y0, y1, y2, y3, -c / b, minMax);
          }
          return;
        }
        const delta = __pow(b, 2) - 4 * c * a;
        if (delta < 0) {
          return;
        }
        const sqrtDelta = Math.sqrt(delta);
        const a2 = 2 * a;
        __privateMethod(this, _Util_static, getExtremumOnCurve_fn).call(this, x0, x1, x2, x3, y0, y1, y2, y3, (-b + sqrtDelta) / a2, minMax);
        __privateMethod(this, _Util_static, getExtremumOnCurve_fn).call(this, x0, x1, x2, x3, y0, y1, y2, y3, (-b - sqrtDelta) / a2, minMax);
      };
      __privateAdd(Util, _Util_static);
      NormalizeRegex = null;
      NormalizationMap = null;
      makeArr = () => [];
      makeMap = () => /* @__PURE__ */ new Map();
      makeObj = () => /* @__PURE__ */ Object.create(null);
      makeSet = () => /* @__PURE__ */ new Set();
      if (typeof Blob.prototype.bytes !== "function") {
        Blob.prototype.bytes = function() {
          return __async(this, null, function* () {
            return new Uint8Array(yield this.arrayBuffer());
          });
        };
      }
      if (typeof Response.prototype.bytes !== "function") {
        Response.prototype.bytes = function() {
          return __async(this, null, function* () {
            return new Uint8Array(yield this.arrayBuffer());
          });
        };
      }
      if (typeof Iterator.prototype.join !== "function") {
        Iterator.prototype.join = function(separator) {
          return [...this].join(separator);
        };
      }
      es_iterator_map_namespaceFn();
      _PixelsPerInch = class _PixelsPerInch {
      };
      __publicField(_PixelsPerInch, "CSS", 96);
      __publicField(_PixelsPerInch, "PDF", 72);
      __publicField(_PixelsPerInch, "PDF_TO_CSS_UNITS", _PixelsPerInch.CSS / _PixelsPerInch.PDF);
      PixelsPerInch = _PixelsPerInch;
      RenderingCancelledException = class extends BaseException {
        constructor(msg, extraDelay = 0) {
          super(msg, "RenderingCancelledException");
          this.extraDelay = extraDelay;
        }
      };
      OutputScale = class _OutputScale {
        constructor() {
          const {
            pixelRatio
          } = _OutputScale;
          this.sx = pixelRatio;
          this.sy = pixelRatio;
        }
        get scaled() {
          return this.sx !== 1 || this.sy !== 1;
        }
        get symmetric() {
          return this.sx === this.sy;
        }
        limitCanvas(width, height, maxPixels2, maxDim, capAreaFactor = -1) {
          let maxAreaScale = Infinity, maxWidthScale = Infinity, maxHeightScale = Infinity;
          maxPixels2 = _OutputScale.capPixels(maxPixels2, capAreaFactor);
          if (maxPixels2 > 0) {
            maxAreaScale = Math.sqrt(maxPixels2 / (width * height));
          }
          if (maxDim !== -1) {
            maxWidthScale = maxDim / width;
            maxHeightScale = maxDim / height;
          }
          const maxScale = Math.min(maxAreaScale, maxWidthScale, maxHeightScale);
          if (this.sx > maxScale || this.sy > maxScale) {
            this.sx = maxScale;
            this.sy = maxScale;
            return true;
          }
          return false;
        }
        static get pixelRatio() {
          return globalThis.devicePixelRatio || 1;
        }
        static capPixels(maxPixels2, capAreaFactor) {
          if (capAreaFactor >= 0) {
            const winPixels = Math.ceil(window.screen.availWidth * window.screen.availHeight * __pow(this.pixelRatio, 2) * (1 + capAreaFactor / 100));
            return maxPixels2 > 0 ? Math.min(maxPixels2, winPixels) : winPixels;
          }
          return maxPixels2;
        }
      };
      contrastCache = /* @__PURE__ */ new Map();
      es_iterator_take_namespaceFn();
      es_weak_map_get_or_insert_namespaceFn();
      es_weak_map_get_or_insert_computed_namespaceFn();
      es_iterator_some_namespaceFn();
      es_json_stringify_namespaceFn();
      web_dom_exception_stack_namespaceFn();
      es_iterator_drop_namespaceFn();
      es_iterator_every_namespaceFn();
      es_iterator_find_namespaceFn();
      es_json_parse_namespaceFn();
      PageViewport = class _PageViewport {
        constructor({
          viewBox,
          userUnit,
          scale,
          rotation,
          offsetX = 0,
          offsetY = 0,
          dontFlip = false
        }) {
          this.viewBox = viewBox;
          this.userUnit = userUnit;
          this.scale = scale;
          this.rotation = rotation;
          this.offsetX = offsetX;
          this.offsetY = offsetY;
          scale *= userUnit;
          const centerX = (viewBox[2] + viewBox[0]) / 2;
          const centerY = (viewBox[3] + viewBox[1]) / 2;
          let rotateA, rotateB, rotateC, rotateD;
          rotation %= 360;
          if (rotation < 0) {
            rotation += 360;
          }
          switch (rotation) {
            case 180:
              rotateA = -1;
              rotateB = 0;
              rotateC = 0;
              rotateD = 1;
              break;
            case 90:
              rotateA = 0;
              rotateB = 1;
              rotateC = 1;
              rotateD = 0;
              break;
            case 270:
              rotateA = 0;
              rotateB = -1;
              rotateC = -1;
              rotateD = 0;
              break;
            case 0:
              rotateA = 1;
              rotateB = 0;
              rotateC = 0;
              rotateD = -1;
              break;
            default:
              throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
          }
          if (dontFlip) {
            rotateC = -rotateC;
            rotateD = -rotateD;
          }
          let offsetCanvasX, offsetCanvasY;
          let width, height;
          if (rotateA === 0) {
            offsetCanvasX = Math.abs(centerY - viewBox[1]) * scale + offsetX;
            offsetCanvasY = Math.abs(centerX - viewBox[0]) * scale + offsetY;
            width = (viewBox[3] - viewBox[1]) * scale;
            height = (viewBox[2] - viewBox[0]) * scale;
          } else {
            offsetCanvasX = Math.abs(centerX - viewBox[0]) * scale + offsetX;
            offsetCanvasY = Math.abs(centerY - viewBox[1]) * scale + offsetY;
            width = (viewBox[2] - viewBox[0]) * scale;
            height = (viewBox[3] - viewBox[1]) * scale;
          }
          this.transform = [rotateA * scale, rotateB * scale, rotateC * scale, rotateD * scale, offsetCanvasX - rotateA * scale * centerX - rotateC * scale * centerY, offsetCanvasY - rotateB * scale * centerX - rotateD * scale * centerY];
          this.width = width;
          this.height = height;
        }
        get rawDims() {
          const dims = this.viewBox;
          return util_shadow(this, "rawDims", {
            pageWidth: dims[2] - dims[0],
            pageHeight: dims[3] - dims[1],
            pageX: dims[0],
            pageY: dims[1]
          });
        }
        clone({
          scale = this.scale,
          rotation = this.rotation,
          offsetX = this.offsetX,
          offsetY = this.offsetY,
          dontFlip = false
        } = {}) {
          return new _PageViewport({
            viewBox: this.viewBox.slice(),
            userUnit: this.userUnit,
            scale,
            rotation,
            offsetX,
            offsetY,
            dontFlip
          });
        }
        convertToViewportPoint(x, y) {
          const p = [x, y];
          Util.applyTransform(p, this.transform);
          return p;
        }
        convertToPdfPoint(x, y) {
          const p = [x, y];
          Util.applyInverseTransform(p, this.transform);
          return p;
        }
      };
      XfaText = class _XfaText {
        static textContent(xfa) {
          const items = [];
          const output = {
            items,
            styles: /* @__PURE__ */ Object.create(null)
          };
          function walk(node) {
            var _a4;
            if (!node) {
              return;
            }
            let str = null;
            const name = node.name;
            if (name === "#text") {
              str = node.value;
            } else if (!_XfaText.shouldBuildText(name)) {
              return;
            } else if ((_a4 = node == null ? void 0 : node.attributes) == null ? void 0 : _a4.textContent) {
              str = node.attributes.textContent;
            } else if (node.value) {
              str = node.value;
            }
            if (str !== null) {
              items.push({
                str
              });
            }
            if (!node.children) {
              return;
            }
            for (const child of node.children) {
              walk(child);
            }
          }
          walk(xfa);
          return output;
        }
        static shouldBuildText(name) {
          return !(name === "textarea" || name === "input" || name === "option" || name === "select");
        }
      };
      disallowedRichTextStyleRegExp = /url\(|image-set\(/i;
      disallowedEventHandlerAttrRegExp = /^on/i;
      XfaLayer = class {
        static get _allowedHtmlElements() {
          return util_shadow(this, "_allowedHtmlElements", /* @__PURE__ */ new Set(["a", "b", "br", "button", "div", "i", "img", "input", "label", "li", "ol", "option", "p", "select", "span", "sub", "sup", "textarea", "ul"]));
        }
        static get _allowedSvgElements() {
          return util_shadow(this, "_allowedSvgElements", /* @__PURE__ */ new Set(["ellipse", "line", "path", "rect", "svg"]));
        }
        static get _allowedRichTextElements() {
          return util_shadow(this, "_allowedRichTextElements", /* @__PURE__ */ new Set(["a", "b", "br", "div", "i", "li", "ol", "p", "span", "sub", "sup", "ul"]));
        }
        static get _allowedRichTextAttributes() {
          return util_shadow(this, "_allowedRichTextAttributes", /* @__PURE__ */ new Set(["class", "dir", "style"]));
        }
        static get _allowedRichTextStyles() {
          return util_shadow(this, "_allowedRichTextStyles", /* @__PURE__ */ new Set(["color", "font", "fontFamily", "fontSize", "fontStretch", "fontStyle", "fontWeight", "kerningMode", "letterSpacing", "lineHeight", "margin", "marginBottom", "marginLeft", "marginRight", "marginTop", "orphans", "paddingLeft", "paddingRight", "breakAfter", "breakBefore", "breakInside", "tabInterval", "tabStop", "textAlign", "textDecoration", "textIndent", "transform", "verticalAlign", "widows"]));
        }
        static setupStorage(html, id, element2, storage, intent) {
          const storedData = storage.getValue(id, {
            value: null
          });
          switch (element2.name) {
            case "textarea":
              if (storedData.value !== null) {
                html.textContent = storedData.value;
              }
              if (intent === "print") {
                break;
              }
              html.addEventListener("input", (event) => {
                storage.setValue(id, {
                  value: event.target.value
                });
              });
              break;
            case "input":
              if (element2.attributes.type === "radio" || element2.attributes.type === "checkbox") {
                if (storedData.value === element2.attributes.xfaOn) {
                  html.setAttribute("checked", true);
                } else if (storedData.value === element2.attributes.xfaOff) {
                  html.removeAttribute("checked");
                }
                if (intent === "print") {
                  break;
                }
                html.addEventListener("change", (event) => {
                  storage.setValue(id, {
                    value: event.target.checked ? event.target.getAttribute("xfaOn") : event.target.getAttribute("xfaOff")
                  });
                });
              } else {
                if (storedData.value !== null) {
                  html.setAttribute("value", storedData.value);
                }
                if (intent === "print") {
                  break;
                }
                html.addEventListener("input", (event) => {
                  storage.setValue(id, {
                    value: event.target.value
                  });
                });
              }
              break;
            case "select":
              if (storedData.value !== null) {
                html.setAttribute("value", storedData.value);
                for (const option of element2.children) {
                  if (option.attributes.value === storedData.value) {
                    option.attributes.selected = true;
                  } else if (Object.hasOwn(option.attributes, "selected")) {
                    delete option.attributes.selected;
                  }
                }
              }
              html.addEventListener("input", (event) => {
                const options = event.target.options;
                const value2 = options.selectedIndex === -1 ? "" : options[options.selectedIndex].value;
                storage.setValue(id, {
                  value: value2
                });
              });
              break;
          }
        }
        static setAttributes({
          html,
          element: element2,
          storage = null,
          intent,
          linkService
        }) {
          const {
            attributes
          } = element2;
          const isHTMLAnchorElement = html instanceof HTMLAnchorElement;
          if (attributes.type === "radio") {
            attributes.name = `${attributes.name}-${intent}`;
          }
          for (const [key, value2] of Object.entries(attributes)) {
            if (value2 === null || value2 === void 0 || disallowedEventHandlerAttrRegExp.test(key)) {
              continue;
            }
            if (intent === "richText" && !this._allowedRichTextAttributes.has(key)) {
              continue;
            }
            switch (key) {
              case "class":
                if (value2.length) {
                  html.setAttribute(key, value2.join(" "));
                }
                break;
              case "dataId":
                break;
              case "id":
                html.setAttribute("data-element-id", value2);
                break;
              case "style":
                if (intent === "richText") {
                  const allowedStyles = this._allowedRichTextStyles;
                  for (const [styleName, styleValue] of Object.entries(value2)) {
                    if (allowedStyles.has(styleName) && !disallowedRichTextStyleRegExp.test(styleValue)) {
                      html.style[styleName] = styleValue;
                    }
                  }
                } else {
                  Object.assign(html.style, value2);
                }
                break;
              case "textContent":
                html.textContent = value2;
                break;
              default:
                if (!isHTMLAnchorElement || key !== "href" && key !== "newWindow") {
                  html.setAttribute(key, value2);
                }
            }
          }
          if (isHTMLAnchorElement) {
            linkService == null ? void 0 : linkService.addLinkAttributes(html, attributes.href, attributes.newWindow);
          }
          if (storage && attributes.dataId) {
            this.setupStorage(html, attributes.dataId, element2, storage);
          }
        }
        static render(parameters) {
          var _a4, _b, _c, _d;
          const storage = parameters.annotationStorage;
          const linkService = parameters.linkService;
          const root = parameters.xfaHtml;
          const intent = parameters.intent || "display";
          const rootHtml = (_b = __privateMethod(this, _XfaLayer_static, createElement_fn).call(this, root.name, (_a4 = root.attributes) == null ? void 0 : _a4.xmlns, intent)) != null ? _b : document.createElement("div");
          if (root.attributes) {
            this.setAttributes({
              html: rootHtml,
              element: root,
              intent,
              linkService
            });
          }
          const isNotForRichText = intent !== "richText";
          const rootDiv = parameters.div;
          rootDiv.append(rootHtml);
          if (parameters.viewport) {
            const transform = `matrix(${parameters.viewport.transform.join(",")})`;
            rootDiv.style.transform = transform;
          }
          if (isNotForRichText) {
            rootDiv.setAttribute("class", "xfaLayer xfaFont");
          }
          const textDivs = [];
          if (root.children.length === 0) {
            if (root.value) {
              const node = document.createTextNode(root.value);
              rootHtml.append(node);
              if (isNotForRichText && XfaText.shouldBuildText(root.name)) {
                textDivs.push(node);
              }
            }
            return {
              textDivs
            };
          }
          const stack = [[root, -1, rootHtml]];
          while (stack.length > 0) {
            const [parent, i, html] = stack.at(-1);
            if (i + 1 === parent.children.length) {
              stack.pop();
              continue;
            }
            const child = parent.children[++stack.at(-1)[1]];
            if (child === null) {
              continue;
            }
            const {
              name
            } = child;
            if (name === "#text") {
              const node = document.createTextNode(child.value);
              textDivs.push(node);
              html.append(node);
              continue;
            }
            const childHtml = __privateMethod(this, _XfaLayer_static, createElement_fn).call(this, name, (_c = child.attributes) == null ? void 0 : _c.xmlns, intent);
            if (!childHtml) {
              continue;
            }
            html.append(childHtml);
            if (child.attributes) {
              this.setAttributes({
                html: childHtml,
                element: child,
                storage,
                intent,
                linkService
              });
            }
            if (((_d = child.children) == null ? void 0 : _d.length) > 0) {
              stack.push([child, -1, childHtml]);
            } else if (child.value) {
              const node = document.createTextNode(child.value);
              if (isNotForRichText && XfaText.shouldBuildText(name)) {
                textDivs.push(node);
              }
              childHtml.append(node);
            }
          }
          for (const el of rootDiv.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) {
            el.setAttribute("readOnly", true);
          }
          return {
            textDivs
          };
        }
        static update(parameters) {
          const transform = `matrix(${parameters.viewport.transform.join(",")})`;
          parameters.div.style.transform = transform;
          parameters.div.hidden = false;
        }
        static getPageViewport(xfaPage, {
          scale = 1,
          rotation = 0
        }) {
          const {
            width,
            height
          } = xfaPage.attributes.style;
          return new PageViewport({
            viewBox: [0, 0, parseInt(width, 10), parseInt(height, 10)],
            userUnit: 1,
            scale,
            rotation
          });
        }
      };
      _XfaLayer_static = new WeakSet();
      createElement_fn = function(name, xmlns, intent) {
        if (intent === "richText") {
          return !xmlns && this._allowedRichTextElements.has(name) ? document.createElement(name) : null;
        }
        if (xmlns) {
          return xmlns === SVG_NS && this._allowedSvgElements.has(name) ? document.createElementNS(SVG_NS, name) : null;
        }
        return this._allowedHtmlElements.has(name) ? document.createElement(name) : null;
      };
      __privateAdd(XfaLayer, _XfaLayer_static);
      PDFDateString = class {
        static toDateObject(input) {
          if (input instanceof Date) {
            return input;
          }
          if (!input || typeof input !== "string") {
            return null;
          }
          __privateGet(this, _regex) || __privateSet(this, _regex, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+\\-])?(\\d{2})?'?(\\d{2})?'?"));
          const matches2 = __privateGet(this, _regex).exec(input);
          if (!matches2) {
            return null;
          }
          const year = parseInt(matches2[1], 10);
          let month = parseInt(matches2[2], 10);
          month = month >= 1 && month <= 12 ? month - 1 : 0;
          let day = parseInt(matches2[3], 10);
          day = day >= 1 && day <= 31 ? day : 1;
          let hour = parseInt(matches2[4], 10);
          hour = hour >= 0 && hour <= 23 ? hour : 0;
          let minute = parseInt(matches2[5], 10);
          minute = minute >= 0 && minute <= 59 ? minute : 0;
          let second = parseInt(matches2[6], 10);
          second = second >= 0 && second <= 59 ? second : 0;
          const universalTimeRelation = matches2[7] || "Z";
          let offsetHour = parseInt(matches2[8], 10);
          offsetHour = offsetHour >= 0 && offsetHour <= 23 ? offsetHour : 0;
          let offsetMinute = parseInt(matches2[9], 10) || 0;
          offsetMinute = offsetMinute >= 0 && offsetMinute <= 59 ? offsetMinute : 0;
          if (universalTimeRelation === "-") {
            hour += offsetHour;
            minute += offsetMinute;
          } else if (universalTimeRelation === "+") {
            hour -= offsetHour;
            minute -= offsetMinute;
          }
          return new Date(Date.UTC(year, month, day, hour, minute, second));
        }
      };
      _regex = new WeakMap();
      __privateAdd(PDFDateString, _regex);
      SupportedImageMimeTypes = /* @__PURE__ */ new Set(["image/apng", "image/avif", "image/bmp", "image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/webp", "image/x-icon"]);
      ColorScheme = class {
        static get isDarkMode() {
          var _a4;
          return util_shadow(this, "isDarkMode", !!((_a4 = window == null ? void 0 : window.matchMedia) == null ? void 0 : _a4.call(window, "(prefers-color-scheme: dark)").matches));
        }
      };
      CSSConstants = class {
        static get commentForegroundColor() {
          const element2 = document.createElement("span");
          element2.classList.add("comment", "sidebar");
          const {
            style
          } = element2;
          style.width = style.height = "0";
          style.display = "none";
          style.color = "var(--comment-fg-color)";
          document.body.append(element2);
          const {
            color
          } = window.getComputedStyle(element2);
          element2.remove();
          return util_shadow(this, "commentForegroundColor", getRGB(color));
        }
      };
      _EditorToolbar = class _EditorToolbar {
        constructor(editor) {
          __privateAdd(this, _EditorToolbar_instances);
          __privateAdd(this, _toolbar, null);
          __privateAdd(this, _colorPicker, null);
          __privateAdd(this, _editor);
          __privateAdd(this, _buttons, null);
          __privateAdd(this, _altText, null);
          __privateAdd(this, _comment, null);
          __privateAdd(this, _commentButtonDivider, null);
          __privateAdd(this, _signatureDescriptionButton, null);
          __privateSet(this, _editor, editor);
          __privateGet(_EditorToolbar, _l10nRemove) || __privateSet(_EditorToolbar, _l10nRemove, Object.freeze({
            freetext: "pdfjs-editor-remove-freetext-button",
            highlight: "pdfjs-editor-remove-highlight-button",
            ink: "pdfjs-editor-remove-ink-button",
            stamp: "pdfjs-editor-remove-stamp-button",
            signature: "pdfjs-editor-remove-signature-button"
          }));
        }
        render() {
          const editToolbar = __privateSet(this, _toolbar, document.createElement("div"));
          editToolbar.classList.add("editToolbar", "hidden");
          editToolbar.setAttribute("role", "toolbar");
          const signal = __privateGet(this, _editor)._uiManager._signal;
          if (signal instanceof AbortSignal && !signal.aborted) {
            editToolbar.addEventListener("contextmenu", noContextMenu, {
              signal
            });
            editToolbar.addEventListener("pointerdown", __privateMethod(_EditorToolbar, _EditorToolbar_static, pointerDown_fn), {
              signal
            });
          }
          const buttons = __privateSet(this, _buttons, document.createElement("div"));
          buttons.className = "buttons";
          editToolbar.append(buttons);
          const position2 = __privateGet(this, _editor).toolbarPosition;
          if (position2) {
            const {
              style
            } = editToolbar;
            const x = __privateGet(this, _editor)._uiManager.direction === "ltr" ? 1 - position2[0] : position2[0];
            style.insetInlineEnd = `${100 * x}%`;
            style.top = `calc(${100 * position2[1]}% + var(--editor-toolbar-vert-offset))`;
          }
          return editToolbar;
        }
        get div() {
          return __privateGet(this, _toolbar);
        }
        hide() {
          var _a4;
          __privateGet(this, _toolbar).classList.add("hidden");
          (_a4 = __privateGet(this, _colorPicker)) == null ? void 0 : _a4.hideDropdown();
        }
        show() {
          var _a4, _b;
          __privateGet(this, _toolbar).classList.remove("hidden");
          (_a4 = __privateGet(this, _altText)) == null ? void 0 : _a4.shown();
          (_b = __privateGet(this, _comment)) == null ? void 0 : _b.shown();
        }
        addDeleteButton() {
          const {
            editorType,
            _uiManager: _uiManager5
          } = __privateGet(this, _editor);
          const button = document.createElement("button");
          button.classList.add("basic", "deleteButton");
          button.tabIndex = 0;
          button.setAttribute("data-l10n-id", __privateGet(_EditorToolbar, _l10nRemove)[editorType]);
          if (__privateMethod(this, _EditorToolbar_instances, addListenersToElement_fn).call(this, button)) {
            button.addEventListener("click", (e) => {
              _uiManager5.delete();
            }, {
              signal: _uiManager5._signal
            });
          }
          __privateGet(this, _buttons).append(button);
        }
        addAltText(altText) {
          return __async(this, null, function* () {
            const button = yield altText.render();
            __privateMethod(this, _EditorToolbar_instances, addListenersToElement_fn).call(this, button);
            __privateGet(this, _buttons).append(button, __privateGet(this, _EditorToolbar_instances, divider_get));
            __privateSet(this, _altText, altText);
          });
        }
        addComment(comment, beforeElement = null) {
          if (__privateGet(this, _comment)) {
            return;
          }
          const button = comment.renderForToolbar();
          if (!button) {
            return;
          }
          __privateMethod(this, _EditorToolbar_instances, addListenersToElement_fn).call(this, button);
          const divider = __privateSet(this, _commentButtonDivider, __privateGet(this, _EditorToolbar_instances, divider_get));
          if (!beforeElement) {
            __privateGet(this, _buttons).append(button, divider);
          } else {
            __privateGet(this, _buttons).insertBefore(button, beforeElement);
            __privateGet(this, _buttons).insertBefore(divider, beforeElement);
          }
          __privateSet(this, _comment, comment);
          comment.toolbar = this;
        }
        addColorPicker(colorPicker) {
          if (__privateGet(this, _colorPicker)) {
            return;
          }
          __privateSet(this, _colorPicker, colorPicker);
          const button = colorPicker.renderButton();
          __privateMethod(this, _EditorToolbar_instances, addListenersToElement_fn).call(this, button);
          __privateGet(this, _buttons).append(button, __privateGet(this, _EditorToolbar_instances, divider_get));
        }
        addEditSignatureButton(signatureManager) {
          return __async(this, null, function* () {
            const button = __privateSet(this, _signatureDescriptionButton, yield signatureManager.renderEditButton(__privateGet(this, _editor)));
            if (!button) {
              return;
            }
            __privateMethod(this, _EditorToolbar_instances, addListenersToElement_fn).call(this, button);
            __privateGet(this, _buttons).append(button, __privateGet(this, _EditorToolbar_instances, divider_get));
          });
        }
        removeButton(name) {
          var _a4, _b;
          switch (name) {
            case "comment":
              (_a4 = __privateGet(this, _comment)) == null ? void 0 : _a4.removeToolbarCommentButton();
              __privateSet(this, _comment, null);
              (_b = __privateGet(this, _commentButtonDivider)) == null ? void 0 : _b.remove();
              __privateSet(this, _commentButtonDivider, null);
              break;
          }
        }
        addButton(name, tool) {
          return __async(this, null, function* () {
            switch (name) {
              case "colorPicker":
                if (tool) {
                  this.addColorPicker(tool);
                }
                break;
              case "altText":
                if (tool) {
                  yield this.addAltText(tool);
                }
                break;
              case "editSignature":
                if (tool) {
                  yield this.addEditSignatureButton(tool);
                }
                break;
              case "delete":
                this.addDeleteButton();
                break;
              case "comment":
                if (tool) {
                  this.addComment(tool);
                }
                break;
            }
          });
        }
        addButtonBefore(name, tool, beforeSelector) {
          return __async(this, null, function* () {
            if (!tool && name === "comment") {
              return;
            }
            const beforeElement = __privateGet(this, _buttons).querySelector(beforeSelector);
            if (!beforeElement) {
              return;
            }
            if (name === "comment") {
              this.addComment(tool, beforeElement);
            }
          });
        }
        updateEditSignatureButton(description) {
          if (__privateGet(this, _signatureDescriptionButton)) {
            __privateGet(this, _signatureDescriptionButton).title = description;
          }
        }
        remove() {
          var _a4;
          __privateGet(this, _toolbar).remove();
          (_a4 = __privateGet(this, _colorPicker)) == null ? void 0 : _a4.destroy();
          __privateSet(this, _colorPicker, null);
        }
      };
      _toolbar = new WeakMap();
      _colorPicker = new WeakMap();
      _editor = new WeakMap();
      _buttons = new WeakMap();
      _altText = new WeakMap();
      _comment = new WeakMap();
      _commentButtonDivider = new WeakMap();
      _signatureDescriptionButton = new WeakMap();
      _l10nRemove = new WeakMap();
      _EditorToolbar_static = new WeakSet();
      pointerDown_fn = function(e) {
        e.stopPropagation();
      };
      _EditorToolbar_instances = new WeakSet();
      focusIn_fn = function(e) {
        __privateGet(this, _editor)._focusEventsAllowed = false;
        stopEvent(e);
      };
      focusOut_fn = function(e) {
        __privateGet(this, _editor)._focusEventsAllowed = true;
        stopEvent(e);
      };
      addListenersToElement_fn = function(element2) {
        const signal = __privateGet(this, _editor)._uiManager._signal;
        if (!(signal instanceof AbortSignal) || signal.aborted) {
          return false;
        }
        element2.addEventListener("focusin", __privateMethod(this, _EditorToolbar_instances, focusIn_fn).bind(this), {
          capture: true,
          signal
        });
        element2.addEventListener("focusout", __privateMethod(this, _EditorToolbar_instances, focusOut_fn).bind(this), {
          capture: true,
          signal
        });
        element2.addEventListener("contextmenu", noContextMenu, {
          signal
        });
        return true;
      };
      divider_get = function() {
        const divider = document.createElement("div");
        divider.className = "divider";
        return divider;
      };
      __privateAdd(_EditorToolbar, _EditorToolbar_static);
      __privateAdd(_EditorToolbar, _l10nRemove, null);
      EditorToolbar = _EditorToolbar;
      FloatingToolbar = class {
        constructor(uiManager) {
          __privateAdd(this, _FloatingToolbar_instances);
          __privateAdd(this, _buttons2, null);
          __privateAdd(this, _toolbar2, null);
          __privateAdd(this, _uiManager);
          __privateSet(this, _uiManager, uiManager);
        }
        show(parent, boxes, isLTR) {
          const [x, y] = __privateMethod(this, _FloatingToolbar_instances, getLastPoint_fn).call(this, boxes, isLTR);
          const {
            style
          } = __privateGet(this, _toolbar2) || __privateSet(this, _toolbar2, __privateMethod(this, _FloatingToolbar_instances, render_fn).call(this));
          parent.append(__privateGet(this, _toolbar2));
          style.insetInlineEnd = `${100 * x}%`;
          style.top = `calc(${100 * y}% + var(--editor-toolbar-vert-offset))`;
        }
        hide() {
          __privateGet(this, _toolbar2).remove();
        }
      };
      _buttons2 = new WeakMap();
      _toolbar2 = new WeakMap();
      _uiManager = new WeakMap();
      _FloatingToolbar_instances = new WeakSet();
      render_fn = function() {
        const editToolbar = __privateSet(this, _toolbar2, document.createElement("div"));
        editToolbar.className = "editToolbar";
        editToolbar.setAttribute("role", "toolbar");
        editToolbar.dir = __privateGet(this, _uiManager).direction;
        const signal = __privateGet(this, _uiManager)._signal;
        if (signal instanceof AbortSignal && !signal.aborted) {
          editToolbar.addEventListener("contextmenu", noContextMenu, {
            signal
          });
        }
        const buttons = __privateSet(this, _buttons2, document.createElement("div"));
        buttons.className = "buttons";
        editToolbar.append(buttons);
        if (__privateGet(this, _uiManager).hasCommentManager()) {
          __privateMethod(this, _FloatingToolbar_instances, makeButton_fn).call(this, "commentButton", `pdfjs-comment-floating-button`, "pdfjs-comment-floating-button-label", () => {
            __privateGet(this, _uiManager).commentSelection("floating_button");
          });
        }
        __privateMethod(this, _FloatingToolbar_instances, makeButton_fn).call(this, "highlightButton", `pdfjs-highlight-floating-button1`, "pdfjs-highlight-floating-button-label", () => {
          __privateGet(this, _uiManager).highlightSelection("floating_button");
        });
        return editToolbar;
      };
      getLastPoint_fn = function(boxes, isLTR) {
        let lastY = 0;
        let lastX = 0;
        for (const box of boxes) {
          const y = box.y + box.height;
          if (y < lastY) {
            continue;
          }
          const x = box.x + (isLTR ? box.width : 0);
          if (y > lastY) {
            lastX = x;
            lastY = y;
            continue;
          }
          if (isLTR) {
            if (x > lastX) {
              lastX = x;
            }
          } else if (x < lastX) {
            lastX = x;
          }
        }
        return [isLTR ? 1 - lastX : lastX, lastY];
      };
      makeButton_fn = function(buttonClass, l10nId, labelL10nId, clickHandler) {
        const button = document.createElement("button");
        button.classList.add("basic", buttonClass);
        button.tabIndex = 0;
        button.setAttribute("data-l10n-id", l10nId);
        const span = document.createElement("span");
        button.append(span);
        span.className = "visuallyHidden";
        span.setAttribute("data-l10n-id", labelL10nId);
        const signal = __privateGet(this, _uiManager)._signal;
        if (signal instanceof AbortSignal && !signal.aborted) {
          button.addEventListener("contextmenu", noContextMenu, {
            signal
          });
          button.addEventListener("click", clickHandler, {
            signal
          });
        }
        __privateGet(this, _buttons2).append(button);
      };
      INTERNAL_EVT = "0a475cb6-573c-46ed-869d-fa7c5839d995";
      internalOpt = Object.freeze({
        internal: INTERNAL_EVT
      });
      _CurrentPointers = class _CurrentPointers {
        static initializeAndAddPointerId(pointerId) {
          (__privateGet(_CurrentPointers, _pointerIds) || __privateSet(_CurrentPointers, _pointerIds, /* @__PURE__ */ new Set())).add(pointerId);
        }
        static setPointer(pointerType, pointerId) {
          var _a4;
          __privateGet(_CurrentPointers, _pointerId) || __privateSet(_CurrentPointers, _pointerId, pointerId);
          (_a4 = __privateGet(_CurrentPointers, _pointerType)) != null ? _a4 : __privateSet(_CurrentPointers, _pointerType, pointerType);
        }
        static setTimeStamp(timeStamp) {
          __privateSet(_CurrentPointers, _moveTimestamp, timeStamp);
        }
        static isSamePointerId(pointerId) {
          return __privateGet(_CurrentPointers, _pointerId) === pointerId;
        }
        static isSamePointerIdOrRemove(pointerId) {
          var _a4;
          if (__privateGet(_CurrentPointers, _pointerId) === pointerId) {
            return true;
          }
          (_a4 = __privateGet(_CurrentPointers, _pointerIds)) == null ? void 0 : _a4.delete(pointerId);
          return false;
        }
        static isSamePointerType(pointerType) {
          return __privateGet(_CurrentPointers, _pointerType) === pointerType;
        }
        static isInitializedAndDifferentPointerType(pointerType) {
          return __privateGet(_CurrentPointers, _pointerType) !== null && !_CurrentPointers.isSamePointerType(pointerType);
        }
        static isSameTimeStamp(timeStamp) {
          return __privateGet(_CurrentPointers, _moveTimestamp) === timeStamp;
        }
        static isUsingMultiplePointers() {
          var _a4;
          return ((_a4 = __privateGet(_CurrentPointers, _pointerIds)) == null ? void 0 : _a4.size) >= 1;
        }
        static clearPointerType() {
          __privateSet(_CurrentPointers, _pointerType, null);
        }
        static clearPointerIds() {
          __privateSet(_CurrentPointers, _pointerId, NaN);
          __privateSet(_CurrentPointers, _pointerIds, null);
        }
        static clearTimeStamp() {
          __privateSet(_CurrentPointers, _moveTimestamp, NaN);
        }
      };
      _pointerId = new WeakMap();
      _pointerIds = new WeakMap();
      _moveTimestamp = new WeakMap();
      _pointerType = new WeakMap();
      __privateAdd(_CurrentPointers, _pointerId, NaN);
      __privateAdd(_CurrentPointers, _pointerIds, null);
      __privateAdd(_CurrentPointers, _moveTimestamp, NaN);
      __privateAdd(_CurrentPointers, _pointerType, null);
      CurrentPointers = _CurrentPointers;
      IdManager = class {
        constructor() {
          __privateAdd(this, _id, 0);
        }
        get id() {
          return `${AnnotationEditorPrefix}${__privateWrapper(this, _id)._++}`;
        }
      };
      _id = new WeakMap();
      _ImageManager = class _ImageManager {
        constructor() {
          __privateAdd(this, _ImageManager_instances);
          __privateAdd(this, _baseId, getUuid());
          __privateAdd(this, _id2, 0);
          __privateAdd(this, _cache, null);
        }
        static get _isSVGFittingCanvas() {
          const svg = `data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="${SVG_NS}"><rect width="1" height="1" style="fill:red;"/></svg>`;
          const canvas = new OffscreenCanvas(1, 3);
          const ctx = canvas.getContext("2d", {
            willReadFrequently: true
          });
          const image = new Image();
          image.src = svg;
          const promise = image.decode().then(() => {
            ctx.drawImage(image, 0, 0, 1, 1, 0, 0, 1, 3);
            return new Uint32Array(ctx.getImageData(0, 0, 1, 1).data.buffer)[0] === 0;
          });
          return util_shadow(this, "_isSVGFittingCanvas", promise);
        }
        getFromFile(file) {
          return __async(this, null, function* () {
            const {
              lastModified,
              name,
              size,
              type
            } = file;
            return __privateMethod(this, _ImageManager_instances, get_fn).call(this, `${lastModified}_${name}_${size}_${type}`, file);
          });
        }
        getFromUrl(url) {
          return __async(this, null, function* () {
            return __privateMethod(this, _ImageManager_instances, get_fn).call(this, url, url);
          });
        }
        getFromBlob(id, blobPromise) {
          return __async(this, null, function* () {
            const blob = yield blobPromise;
            return __privateMethod(this, _ImageManager_instances, get_fn).call(this, id, blob);
          });
        }
        getFromId(id) {
          return __async(this, null, function* () {
            __privateGet(this, _cache) || __privateSet(this, _cache, /* @__PURE__ */ new Map());
            const data = __privateGet(this, _cache).get(id);
            if (!data) {
              return null;
            }
            if (data.bitmap) {
              data.refCounter += 1;
              return data;
            }
            if (data.file) {
              return this.getFromFile(data.file);
            }
            if (data.blobPromise) {
              const {
                blobPromise
              } = data;
              delete data.blobPromise;
              return this.getFromBlob(data.id, blobPromise);
            }
            return this.getFromUrl(data.url);
          });
        }
        getFromCanvas(id, canvas) {
          __privateGet(this, _cache) || __privateSet(this, _cache, /* @__PURE__ */ new Map());
          let data = __privateGet(this, _cache).get(id);
          if (data == null ? void 0 : data.bitmap) {
            data.refCounter += 1;
            return data;
          }
          const offscreen = new OffscreenCanvas(canvas.width, canvas.height);
          const ctx = offscreen.getContext("2d");
          ctx.drawImage(canvas, 0, 0);
          data = {
            bitmap: offscreen.transferToImageBitmap(),
            id: `image_${__privateGet(this, _baseId)}_${__privateWrapper(this, _id2)._++}`,
            refCounter: 1,
            isSvg: false
          };
          __privateGet(this, _cache).set(id, data);
          __privateGet(this, _cache).set(data.id, data);
          return data;
        }
        getSvgUrl(id) {
          const data = __privateGet(this, _cache).get(id);
          return !(data == null ? void 0 : data.isSvg) ? null : data.svgUrl;
        }
        deleteId(id) {
          var _a4;
          __privateGet(this, _cache) || __privateSet(this, _cache, /* @__PURE__ */ new Map());
          const data = __privateGet(this, _cache).get(id);
          if (!data) {
            return;
          }
          data.refCounter -= 1;
          if (data.refCounter !== 0) {
            return;
          }
          const {
            bitmap
          } = data;
          if (!data.url && !data.file) {
            const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
            const ctx = canvas.getContext("bitmaprenderer");
            ctx.transferFromImageBitmap(bitmap);
            data.blobPromise = canvas.convertToBlob();
          }
          (_a4 = bitmap.close) == null ? void 0 : _a4.call(bitmap);
          data.bitmap = null;
        }
        isValidId(id) {
          return id.startsWith(`image_${__privateGet(this, _baseId)}_`);
        }
      };
      _baseId = new WeakMap();
      _id2 = new WeakMap();
      _cache = new WeakMap();
      _ImageManager_instances = new WeakSet();
      get_fn = function(key, rawData) {
        return __async(this, null, function* () {
          __privateGet(this, _cache) || __privateSet(this, _cache, /* @__PURE__ */ new Map());
          let data = __privateGet(this, _cache).get(key);
          if (data === null) {
            return null;
          }
          if (data == null ? void 0 : data.bitmap) {
            data.refCounter += 1;
            return data;
          }
          try {
            data || (data = {
              bitmap: null,
              id: `image_${__privateGet(this, _baseId)}_${__privateWrapper(this, _id2)._++}`,
              refCounter: 0,
              isSvg: false
            });
            let image;
            if (typeof rawData === "string") {
              data.url = rawData;
              image = yield fetchData(rawData, "blob");
            } else if (rawData instanceof File) {
              image = data.file = rawData;
            } else if (rawData instanceof Blob) {
         ßŸ7÷ÍÊ×¬¢h­µçO]ˆÛ\ÜÏH˜XØÛÝ[\ÙXÝ[Û‹]XœÈˆ›ÛOHX›\Ý]Ûˆ\OH˜]Ûˆˆ›ÛOHXˆˆ\šXK\Ù[XÝYHYHˆ]K\[™[H\Ù\œÈµåõêuäuåuè5åuêØ]Û]Ûˆ\OH˜]Ûˆˆ›ÛOHXˆˆ\šXK\Ù[XÝYH™˜[ÙHˆ]K\[™[HœXÚØYÙHµåõäuæuç5å5åuçµæõèuêˆROØ]ÛÙ]]KXXØÛÝ[[Y\ÜØYÙH›ÛOHœÝ]\Èˆ\šXK[]™OHœÛ]HÜÙXÝ[Ûˆ]K\ÙXÝ[ÛH\Ù\œÈ›Ü›H]K\ÙX\˜ÚX™[µåõæué5åuêH5ç5é5æH5êuçH5ä5åH5çµæuæuç[œ]˜[YOHœ]Y\žHˆ\OHœÙX\˜ÚˆX^[™ÝHŒŒÛX™[]Ûµåõæué5åuêOØ]ÛÙ›Ü›O]ˆ]K]\Ù\œÏµæ5åuèµçÈ5åõêuäuåuè5åuê¸ )Ù]]ˆÛ\ÜÏHœ›ÝÈ]Ûˆ\OH˜]Ûˆˆ]K\™]µå5éõåuäõçOØ]Û]Ûˆ\OH˜]Ûˆˆ]K[™^µå5äuäØ]ÛÙ]ÜÙXÝ[ÛÙXÝ[Ûˆ]K\ÙXÝ[ÛHœXÚØYÙHˆY[]ˆ]KXYZ[‹\XÚØYÙKXØ][ÙÏÙ]ÜÙXÝ[ÛÙ]‰ÎÂˆÛÛœÝ	ˆH
ÊHOˆX[ÙËœ]Y\žTÙ[XÝÜŠÊKY\ÜØYÙHH	Š–Ù]KXXØÛÝ[[Y\ÜØYÙWHŠNÂˆ]Ù™œÙ]H]Y\žHHˆ‹[]™HHYK\Ý\ØÚHÝ\ÝÛY\”ÚÝÛˆH˜[ÙK\ÜÜÙPÝ\ÝÛY\ˆH[\ÜÜÙPØ][ÙÈH[ÂˆÛÛœÝ\ÜÜÙHH

HOˆÂˆYˆ
X[]™JH™]\›ŽÂˆ[]™HH˜[ÙNÂˆ\Ý\ØÚ
ÊÎÂˆ\ÜÜÙPÝ\ÝÛY\ˆOH[È›ÚYˆ\ÜÜÙPÝ\ÝÛY\Š
NÂˆ\ÜÜÙPØ][ÙÈOH[È›ÚYˆ\ÜÜÙPØ][ÙÊ
NÂˆX[ÙËœ™[[Ý™Q]™[\Ý[™\Š˜ÛÜÙH‹ÛÛÜÙJNÂˆYˆ
YZ[•šY]ÜË™Ù]
X[ÙÊHOOH\ÜÜÙJHYZ[•šY]ÜË™[]JX[ÙÊNÂˆNÂˆYZ[•šY]ÜËœÙ]
X[ÙË\ÜÜÙJNÂˆÛÛœÝÛÜÙHH

HOˆÂˆ\ÜÜÙJ
NÂˆX[ÙË˜ÛÜÙJ
NÂˆNÂˆ	Š–Ù]KXÛÜÙWHŠK›Û˜ÛXÚÈHÛÜÙNÂˆX[ÙË˜Y]™[\Ý[™\Š˜ÛÜÙH‹ÛÛÜÙJNÂˆ[˜Ý[ÛˆÛÛÜÙJ
HÂˆYˆ
YX[ÙË›Ü[ŠH\ÜÜÙJ
NÂˆBˆX[ÙËœ]Y\žTÙ[XÝÜ[
–Ù]K\[™[HŠK™›Ü‘XXÚ

ŠHOˆ‹›Û˜ÛXÚÈH

HOˆÂˆX[ÙËœ]Y\žTÙ[XÝÜ[
–Ù]K\[™[HŠK™›Ü‘XXÚ


HOˆœÙ]]šX]J˜\šXK\Ù[XÝY‹Ýš[™ÊOOHŠJJNÂˆX[ÙËœ]Y\žTÙ[XÝÜ[
–Ù]K\ÙXÝ[Û—HŠK™›Ü‘XXÚ


HOˆšY[ˆH™]\Ù]œÙXÝ[ÛˆOOH‹™]\Ù]œ[™[
NÂˆYˆ
‹™]\Ù]œ[™[OOHœXÚØYÙHˆ	‰ˆY\ÜÜÙPØ][ÙÊH\ÜÜÙPØ][ÙÈH[Ý[YZ[”XÚØYÙPØ][ÙÊÈ›ÛÝˆ	Š–Ù]KXYZ[‹\XÚØYÙKXØ][Ù×HŠK\KÚ[™ÙYˆÚ[™ÙYˆJNÂˆJNÂˆ[˜Ý[ÛˆØYŠ
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆÛÛœÝ™\]Y\ÝH
ÊÛ\Ý\ØÚÂˆžHÂˆÛÛœÝ™\Ý[HZY[\K›\Ý
Ù™œÙ]]Y\žJNÂˆYˆ
X[]™HÝ\ÝÛY\”ÚÝÛˆ™\]Y\ÝOOH\Ý\ØÚ
H™]\›ŽÂˆÛÛœÝ›ÝÜÈH
™\Ý[˜XØÛÝ[È×JK™š[\Š
JHOˆXKš\×ÜÝ\\\Ù\ŠNÂˆ	Š–Ù]K\™]—HŠK™\ØX›YHÙ™œÙ]OOHÂˆ	Š–Ù]K[™^HŠK™\ØX›YH›ÝÜË›[™ÝHLÂˆ	Š–Ù]K]\Ù\œ×HŠKš[›™\’SH›ÝÜËœÛXÙJL
K›X\

JHOˆ	Ï\XÛHÛ\ÜÏH›X[˜YÙYXXØÛÝ[]Ý›Û™Ï‰È
È\ØÌNJK›˜[YHK™[XZ[
H
È	ÏÜÝ›Û™ÏÛX[\H˜]]È‰È
È\ØÌNJK™[XZ[
H
È	ÏÜÛX[Ü[ˆÛ\ÜÏH˜XØÛÝ[\Ý]\È	È
È\ØÌNJKœÝ]\ÊH
È	È‰È
È\ØÌNJÝ]\Ù\Ì–ØKœÝ]\×JH
ÈÜÜ[ˆˆ
È
Kš\×ÜÝ\\\Ù\ˆÈÛX[µèuåué5ê5¯µæuåuåµêÜÛX[ˆˆˆˆŠH
È	ÏÙ]]Ûˆ\OH˜]Ûˆˆ]KXÝ\ÝÛY\‹[Ü[H‰È
È\ØÌNJK\Ù\—ÚY
H
È	Èµé5ê5æ5æH5ç5éõåuåË5èuæuèuçµå5åuä5çµéµèµæH5êµêuç5åuçOØ]Û›Ü›H]K]\Ù\H‰È
È\ØÌNJK\Ù\—ÚY
H
È	ÈX™[µèuæ5æ5åuèOÙ[XÝ˜[YOHœÝ]\È‰È
ÈØš™XÝ™[šY\ÊÝ]\Ù\ÌŠK›X\

ÚË—JHOˆ	ÏÜ[Ûˆ˜[YOH‰È
ÈÈ
È	Èˆ	È
È
KœÝ]\ÈOOHÈÈœÙ[XÝYˆˆˆŠH
Èˆˆ
Èˆ
ÈÛÜ[ÛˆŠKš›Ú[ŠˆŠH
È	ÏÜÙ[XÝÛX™[X™[µèuæuäuêˆ5êuæuè5åuæO[œ]˜[YOHœ™X\ÛÛˆˆ™\]Z\™YZ[›[™ÝHŒÈˆX^[™ÝHLˆXÙZÛ\Hµèuæuäuå5ç5êµæuèµåuäÈ5å5è5æuå5åuçÛX™[]Ûµêuçµåuê5èuæ5æ5åuèOØ]Û[œ]˜[YOH™\œÚ[Ûˆˆ\OHšY[ˆˆ˜[YOH‰È
È\ØÌNJK™\œÚ[ÛŠH
È	ÈÙ›Ü›OØ\XÛO‰ÊKš›Ú[ŠˆŠHµä5æuçÈ5ç5éõåuåõåuêˆ5ç5å5éµäµåˆ5åõêuäuåuè5åuêˆ5çµè5å5ç5ä5æuè5çH5åõêuäuåuè5åuêˆ5ç5éõåuåÈ5åuä5æuè5çH5çµåué5æuèµæuçH5äuê5êuæuçµå5åµåKÜˆŽÂˆ[Ý[][TYÙ\ÊÈÛÛZ[™\Žˆ	Š–Ù]K]\Ù\œ×HŠK][\ÎˆË‹‹‰Š–Ù]K]\Ù\œ×HŠKœ]Y\žTÙ[XÝÜ[
ŽœØÛÜHˆ\XÛHŠWKÝ]NˆßKYÙTÚ^™NˆˆJNÂˆX[ÙËœ]Y\žTÙ[XÝÜ[
–Ù]KXÝ\ÝÛY\‹[Ü[—HŠK™›Ü‘XXÚ

ŠHOˆ‹›Û˜ÛXÚÈH

HOˆÜ[Ý\ÝÛY\Š‹™]\Ù]˜Ý\ÝÛY\“Ü[ŠJNÂˆX[ÙËœ]Y\žTÙ[XÝÜ[
–Ù]K]\Ù\—HŠK™›Ü‘XXÚ

ŠHOˆ‹›ÛœÝX›Z]H
JHOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆKœ™]™[Y˜][

NÂˆ]ÛœÑ\ØX›Y
‹YJNÂˆY\ÜØYÙK^ÛÛ[Hµêuåuçµê8 )ˆŽÂˆžHÂˆZY[\KœÝ]\ÊÈÝ\Ù\Žˆ‹™]\Ù]\Ù\‹Ý™\œÚ[ÛŽˆ[X™\Š‹™[[Y[Ë™\œÚ[Û‹˜[YJKÜÝ]\Îˆ‹™[[Y[ËœÝ]\Ë˜[YKÜ™X\ÛÛŽˆ‹™[[Y[Ëœ™X\ÛÛ‹˜[YHJNÂˆYˆ
X[]™JH™]\›ŽÂˆY\ÜØYÙK^ÛÛ[Hµèuæ5æ5åuèH5å5åõêuäuåuçÈ5èµåuäõæõçËˆ5èuåuæõçÈ5æuåuçµæH5êuç5åõêuäuåuçÈ5êuä5æuè5åH5é5èµæuç5è5èµéµêˆŽÂˆZY[ØYŠ
NÂˆHØ]Ú
\œŠHÂˆYˆ
[]™JHY\ÜØYÙK^ÛÛ[H\œ‹›Y\ÜØYÙNÂˆHš[˜[HÂˆYˆ
[]™JH]ÛœÑ\ØX›Y
‹˜[ÙJNÂˆBˆJJNÂˆHØ]Ú
JHÂˆYˆ
[]™JHY\ÜØYÙK^ÛÛ[HK›Y\ÜØYÙNÂˆBˆJNÂˆBˆ	Š–Ù]K\ÙX\˜ÚHŠK›ÛœÝX›Z]H
JHOˆÂˆKœ™]™[Y˜][

NÂˆ]Y\žHHK\™Ù]™[[Y[Ëœ]Y\žK˜[YKš[J
NÂˆÙ™œÙ]HÂˆØYŠ
NÂˆNÂˆ	Š–Ù]K\™]—HŠK›Û˜ÛXÚÈH

HOˆÂˆÙ™œÙ]HX]›X^
Ù™œÙ]HL
NÂˆØYŠ
NÂˆNÂˆ	Š–Ù]K[™^HŠK›Û˜ÛXÚÈH

HOˆÂˆÙ™œÙ]
ÏHLÂˆØYŠ
NÂˆNÂˆ[˜Ý[ÛˆÜ[Ý\ÝÛY\ŠY
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆ˜\ˆØMØŽÂˆ
ØˆH
ØMH\K˜YZ[•šY]ÊHOH[È›ÚYˆØM˜Ø[
\K˜Ý\ÝÛY\ˆ‹Y
JHOH[È›ÚYˆØ‹˜Ø]Ú


HOˆÂˆJNÂˆÝ\ÝÛY\”ÚÝÛˆHYNÂˆ\Ý\ØÚ
ÊÎÂˆ\ÜÜÙPÝ\ÝÛY\ˆOH[È›ÚYˆ\ÜÜÙPÝ\ÝÛY\Š
NÂˆ	Š–Ù]K\ÙX\˜ÚHŠKšY[ˆHYNÂˆ	Š–Ù]K\™]—HŠKœ\™[[[Y[šY[ˆHYNÂˆ	Š–Ù]K]\Ù\œ×HŠKš[›™\’SH]ˆ]KXÝ\ÝÛY\‹Y]Z[Ù]ˆŽÂˆÛÛœÝÚ[H	Š–Ù]KXÝ\ÝÛY\‹Y]Z[HŠNÂˆÛÛœÝ\ÜÜÙLˆHZY[[Ý[YZ[Ý\ÝÛY\ŠÈ›ÛÝˆÚ[Ý\ÝÛY\’YˆY\K˜XÚÎˆ

HOˆÂˆ\ÜÜÙPÝ\ÝÛY\ˆOH[È›ÚYˆ\ÜÜÙPÝ\ÝÛY\Š
NÂˆÝ\ÝÛY\”ÚÝÛˆH˜[ÙNÂˆ\Ý\ØÚ
ÊÎÂˆ	Š–Ù]K\ÙX\˜ÚHŠKšY[ˆH˜[ÙNÂˆ	Š–Ù]K\™]—HŠKœ\™[[[Y[šY[ˆH˜[ÙNÂˆØYŠ
NÂˆHJNÂˆYˆ
[]™H	‰ˆX[ÙË›Ü[ŠH\ÜÜÙPÝ\ÝÛY\ˆH\ÜÜÙLŽÂˆ[ÙH\ÜÜÙLŠ
NÂˆJNÂˆBˆYˆ
[X™YY
HÂˆ	Š‹˜XØÛÝ[XÙ[\‹ZXY[™ÈˆŠK^ÛÛ[H[š]X[[™[OOHœXÚØYÙHˆÈµåõäuæuç5åuêˆ5åuêµçµåõåuêˆˆµè5æuå5åuç5çµêuêµçµêuæuçHŽÂˆ	Š‹˜XØÛÝ[\ÙXÝ[Û‹]XœÈŠKšY[ˆHYNÂˆBˆYˆ
[š]X[[™[OOHœXÚØYÙHŠH	Š–Ù]K\[™[\XÚØYÙWHŠK˜ÛXÚÊ
NÂˆYˆ
[X™YY
HX[ÙËœÚÝÊ
NÂˆ[ÙHX[ÙËœÚÝÓ[Ù[

NÂˆZY[ØYŠ
NÂˆYˆ
Ý\ÝÛY\’Y	‰ˆ[]™JHZY[Ü[Ý\ÝÛY\ŠÝ\ÝÛY\’Y
NÂˆJNÂˆBˆ[˜Ý[Ûˆ[Ý[Û˜›Ø\™[™ÊÈ›ÛÝÝ]K\K™Yœ™\ÚÚYÛ“Ý]š\YH[\Ý[˜][Û“˜[YHHˆˆJHÂˆ˜\ˆØMØ‹ØËÙÂˆ
ØMHÝ\ÝÛY\•šY]ÜË™Ù]
›ÛÝ
JHOH[È›ÚYˆØM

NÂˆ›ÛÝš[›™\’SHš[[™Ó[ÙSX\šÝ\
Ý]Kœ^[Y[[ÙK›ÛÝ
H
È	ÏÙXÝ[ÛˆÛ\ÜÏHœ™YÚ\Ý˜][ÛˆÜ[ˆÛ\ÜÏH˜XØÛÝ[Y^YXœ›ÝÈµå5åõêuäuåuçÈ5êuç5æOÜÜ[µé5ê5æ5æH5å5åõêuäuåuçÈ5åuå5åõäuæuç5åÚ‰È
È\ØÌNJÝ]\Ù\Ì–ÜÝ]KœÝ]\×HˆŠH
È	ÏÜ›Ü›H]K\›Ùš[OÏµé5ê5æ5æuçH5ç5æuéµæuê5êˆ5éõêuêÚÏ]ˆÛ\ÜÏH˜XØÛÝ[YšY[È‰È
È›Ùš[SX\šÝ\
Ý]Kœ›Ùš[JH
È	ÏÙ]]Ûµêuçµåuê5é5ê5æ5æuçOØ]ÛÙ›Ü›O]ˆ]KXÝ\ÝÛY\‹\XÚØYÙ\ÏÙ]]ˆ]K\^[Y[[Y]ÙÏÙ]]ˆ]KY[][Y[ÏÙ]]ˆ]KXXØÛÝ[Z\ÝÜžOÙ]]ˆ]KXXØÛÝ[X˜[[˜Ù\ÏÙ]]KXXØÛÝ[[Y\ÜØYÙH›ÛOHœÝ]\Èˆ\šXK[]™OHœÛ]HÜ]Ûˆ\OH˜]Ûˆˆ]KXÚXÚËXXØÛÝ[µê5èµè5çÈ5èuæ5æ5åuèH5åõêuäuåuçÈ5åuêµêuç5åuçOØ]Û]Ûˆ\OH˜]Ûˆˆ]K\ÚYÛ›Ý]Û\ÜÏHœÙXÛÛ™\žHµæuéµæuä5åØ]ÛÜÙXÝ[Û‰ÎÂˆÛÛœÝ	ˆH
ÊHOˆ›ÛÝœ]Y\žTÙ[XÝÜŠÊK\ÙÈH	Š–Ù]KXXØÛÝ[[Y\ÜØYÙWHŠNÂˆ][]™HHYK\ÜÜÙP˜[[˜Ù\ÈH[ÂˆÛÛœÝÙXÝ[ÛˆH	Š‹œ™YÚ\Ý˜][ÛˆŠNÂˆÛÛœÝÝ\œ™[H

HOˆ[]™H	‰ˆ›ÛÝ˜ÛÛZ[œÊÙXÝ[ÛŠNÂˆÙXÝ[Û‹œ]Y\žTÙ[XÝÜŠšˆŠKœÝ[K˜ÜÜÕ^H™›Û\Ú^™NŒKŒÍ\™[NÛX\™Ú[ŽŽÂˆÙXÝ[Û‹œ]Y\žTÙ[XÝÜŠŽœØÛÜHˆŠKœÝ[K›X\™Ú[ˆHŽÂˆÛÛœÝ\ÜÜÙTXÚØYÙ\ÈH[Ý[Ý\ÝÛY\”XÚØYÙ\ÊÈ›ÛÝˆ	Š–Ù]KXÝ\ÝÛY\‹\XÚØYÙ\×HŠKÝ]K\K™Yœ™\Úš\Y\Ý[˜][Û“˜[YKÛ“™YYØ\™ˆ

HOˆÂˆ˜\ˆØMNÂˆ™]\›ˆ
ØMHH›ÛÝœ]Y\žTÙ[XÝÜŠ	ÖÙ]K\ÙXÝ[Û‹]XH˜Ø\™È—IÊJHOH[È›ÚYˆØMK˜ÛXÚÊ
NÂˆHJNÂˆÛÛœÝX[ÙÈH›ÛÝ˜ÛÜÙ\Ý
™X[ÙÈŠNÂˆÛÛœÝ\ÜÜÙHH

HOˆÂˆ[]™HH˜[ÙNÂˆ\ÜÜÙTXÚØYÙ\Ê
NÂˆ\ÜÜÙP˜[[˜Ù\ÈOH[È›ÚYˆ\ÜÜÙP˜[[˜Ù\Ê
NÂˆX[ÙÈOH[È›ÚYˆX[ÙËœ™[[Ý™Q]™[\Ý[™\Š˜ÛÜÙH‹Û‘X[ÙÐÛÜÙJNÂˆNÂˆ[˜Ý[ÛˆÛ‘X[ÙÐÛÜÙJ
HÂˆYˆ
YX[ÙË›Ü[ŠH\ÜÜÙJ
NÂˆBˆÝ\ÝÛY\•šY]ÜËœÙ]
›ÛÝ\ÜÜÙJNÂˆX[ÙÈOH[È›ÚYˆX[ÙË˜Y]™[\Ý[™\Š˜ÛÜÙH‹Û‘X[ÙÐÛÜÙJNÂˆ	Š–Ù]K\ÚYÛ›Ý]HŠK›Û˜ÛXÚÈH

HOˆÂˆ\ÜÜÙJ
NÂˆÚYÛ“Ý]

NÂˆNÂˆ	Š–Ù]KXÚXÚËXXØÛÝ[HŠK›Û˜ÛXÚÈH™Yœ™\ÚÂˆ[Ý[^[Y[Y]ÙÊÈ›ÛÝˆ	Š–Ù]K\^[Y[[Y]Ù×HŠKÝ]K\K™Yœ™\ÚJNÂˆYˆ

ØˆHÝ]K›Ü™\œÊHOH[È›ÚYˆØ‹›[™Ý
HÂˆÛÛœÝ\ÝÜžHH›ÛÝ›ÝÛ™\‘ØÝ[Y[˜Ü™X]Q[[Y[
œÙXÝ[ÛˆŠNÂˆ\ÝÜžK˜Û\ÜÓ˜[YHH˜XØÛÝ[[Ü™\œÈŽÂˆ\ÝÜžKš[›™\’SHÏµêµêuç5åuçµæuçH5åuåõäuæuç5åuêÚÏˆˆ
ÈÝ]K›Ü™\œË›X\

ÊHOˆÂˆ˜\ˆØMNÂˆ™]\›ˆ\XÛOÝ›Û™Ïˆˆ
È\ØÌNJË™\Ý[˜][Û—Û˜[YJH
ÈÜÝ›Û™ÏÜ[ˆˆ
ÈšXÙJ
ØMHHË˜Ú\™ÙWØYÛÜ›Ý
HOH[ÈØMHˆËœšXÙWØYÛÜ›Ý
H
Èˆ0­Èˆ
È\ØÌNJ^[Y[X™[
ÊJH
ÈÜÜ[ˆˆ
È
ËœÝ]HOOHœ[™[™ÈˆÈ	Ï]Ûˆ\OH˜]Ûˆˆ]K[Ü™\H‰È
È\ØÌNJËšY
H
È	Èµäuäõæuéõêˆ5ä5æuêuåuê5êµêuç5åuçOØ]Û‰ÈˆˆŠH
ÈØ\XÛOˆŽÂˆJKš›Ú[ŠˆŠNÂˆ	Š–Ù]KXXØÛÝ[Z\ÝÜžWHŠK˜\[™
\ÝÜžJNÂˆ\ÝÜžKœ]Y\žTÙ[XÝÜ[
–Ù]K[Ü™\—HŠK™›Ü‘XXÚ

ŠHOˆ‹›Û˜ÛXÚÈH

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆ‹™\ØX›YHYNÂˆžHÂˆÛÛœÝ™\Ý[HZY[\Kœ™XÛÛ˜Ú[J‹™]\Ù]›Ü™\ŠNÂˆYˆ
XÝ\œ™[

JH™]\›ŽÂˆ\ÙË^ÛÛ[H™\Ý[œZYÈ™\Ý[œ^[Y[[ÙHOOH\ÝˆÈµêµêuç5åuçH5å5æ5èuæ5ä5åuêuê8 %5ä5æuçÈ5ä5æuêuåuê5ç5åõæuåuäH5ä5çµæuêµæHˆˆµå5êµêuç5åuçH5ä5åuêuêˆˆµå5êµêuç5åuçH5èµäõæuæuçÈ5çµçµêµæuçÈ5ç5ä5æuêuåuêŽÂˆZY[™Yœ™\Ú

NÂˆHØ]Ú
JHÂˆYˆ
Ý\œ™[

JH\ÙË^ÛÛ[Hµå5êµêuç5åuçH5æ5ê5çH5ä5åuçµê‹ˆ5ä5æuçÈ5ç5äuéµèˆ5êµêuç5åuçH5è5åuèuèÈ5ç5é5è5æH5äuäõæuéõêˆ5å5èuæ5æ5åuèKˆŽÂˆHš[˜[HÂˆYˆ
Ý\œ™[

JH‹™\ØX›YH˜[ÙNÂˆBˆJJNÂˆBˆYˆ
]š\Y	‰ˆ

ØÈHÝ]K™[][Y[ÊHOH[È›ÚYˆØË›[™Ý
JH	Š–Ù]KY[][Y[×HŠKš[œÙ\Y˜XÙ[S
˜Y\˜™YÚ[ˆ‹Ïµçµæõèuåuêˆ5ç5é5æH5æ5æuåuçÚÏˆˆ
ÈÝ]K™[][Y[Ë›X\

JHOˆ\XÛOÝ›Û™Ïˆˆ
È\ØÌNJK™\Ý[˜][Û—Û˜[YJH
ÈÜÝ›Û™Ïˆˆ
È
Kœ^[Y[Û[ÙHOOH\ÝˆÈµåõäuæuç5êˆ5æ5èuæÜˆˆˆˆŠH
È
Kœ^[Y[Û[ÙH	‰ˆKœ^[Y[Û[ÙHOOHÝ]Kœ^[Y[[ÙHÈµä5æuè5å5åµçµæuè5å5äuçµéµäH5å5èuç5æuéõå5å5è5åuæõåõæOÜˆˆˆˆŠH
È
Kœ[—ØÛÙHOOH[Èµåµæõä5åuêˆ5å5æuèuæ5åuê5æuêŽÈ5ä5æuçÈ5ç5å5èuæuéÈ5çµçµè5å5çµæõèuåuêˆ5åõäuæuç5å5åõäõêuåÜˆˆˆÖÈš[š]X[‹µêµæõè5åuçÈ—KÈ\]H‹µèµäõæõåuçÈ—KÈœ™\ÙX\˜Ú‹µçµåõéõê5æuåuçµæH—WK›X\

Ø‹X™[JHOˆÂˆ˜\ˆØMKØŒ‹ØÌ‹Ù‹ÙNÂˆ™]\›ˆˆˆ
ÈX™[
ÈŽˆ5è5åuêµê5åHˆ
È\ØÌNJX]›X^


ØMHHVØˆ
È—Û[Z]—JHOH[ÈØMHˆ
HH

ØŒˆHVØˆ
È—Ý\ÙY—JHOH[ÈØŒˆˆ
HH

ØÌˆHVØˆ
È—Ü™\Ù\™Y—JHOH[ÈØÌˆˆ
JJH
Èˆ0­È5è5åuéµç5åHˆ
È\ØÌNJ
ÙˆHVØˆ
È—Ý\ÙY—JHOH[ÈÙˆˆ
H
Èˆ0­È5êuçµåuê5åuêˆˆ
È\ØÌNJ
ÙHHVØˆ
È—Ü™\Ù\™Y—JHOH[ÈÙHˆ
H
ÈÜˆŽÂˆJKš›Ú[ŠˆŠJH
ÈØ\XÛOˆŠKš›Ú[ŠˆŠJNÂˆ	Š–Ù]K\›Ùš[WHŠK›ÛœÝX›Z]H
JHOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆKœ™]™[Y˜][

NÂˆYˆ
VÈœ[™[™È‹˜XÝ]™H—Kš[˜ÛY\ÊÝ]KœÝ]\ÊHÝ]Kš\ÔÝ\\\Ù\ˆÝ]Kš\×ÜÝ\\\Ù\ŠH™]\›ŽÂˆÛÛœÝˆHK\™Ù]Âˆ]ÛœÑ\ØX›Y
‹YJNÂˆžHÂˆÛÛœÝ›Ùš[HHØš™XÝ™œ›ÛQ[šY\Ê›Ùš[QšY[Ë›X\

Ú×JHOˆÚË‹™[[Y[ÖÚ×K˜[YKš[J
WJJNÂˆZY[\Kœ›Ùš[J›Ùš[JNÂˆYˆ
XÝ\œ™[

JH™]\›ŽÂˆ\ÙË^ÛÛ[Hµå5é5ê5æ5æuçH5è5êuçµê5åHŽÂˆZY[™Yœ™\Ú

NÂˆHØ]Ú
\œŠHÂˆYˆ
Ý\œ™[

JH\ÙË^ÛÛ[H\œ‹›Y\ÜØYÙNÂˆHš[˜[HÂˆYˆ
Ý\œ™[

JH]ÛœÑ\ØX›Y
‹˜[ÙJNÂˆBˆJNÂˆYˆ
J
ÙHÝ]K›Ü™\œÊHOH[È›ÚYˆÙ›[™Ý
JH	Š–Ù]KXXØÛÝ[Z\ÝÜžWHŠKš[›™\’SHµä5æuçÈ5êµêuç5åuçµæuçH5ç5å5éµäµå5äuåõêuäuåuçËÜˆŽÂˆ[Ý[ÙXÝ[Û•XœÊÈ›ÛÝˆÙXÝ[Û‹™Yš^ˆ›^KXXØÛÝ[‹X™[ˆµé5ê5æ5æH5å5åõêuäuåuçÈ5åuå5åõäuæuç5å‹Û”Ù[XÝˆ
Ù^JHOˆÂˆYˆ
Ù^HOOH˜˜[[˜Ù\Èˆ	‰ˆY\ÜÜÙP˜[[˜Ù\ÊH\ÜÜÙP˜[[˜Ù\ÈH[Ý[Ý\ÝÛY\”XÚØYÙP˜[[˜Ù\ÊÈ›ÛÝˆ	Š–Ù]KXXØÛÝ[X˜[[˜Ù\×HŠK\Kš\YJNÂˆKÜ›Ý\ÎˆÂˆÈYˆœ›Ùš[H‹X™[ˆµé5ê5æ5æuçH5ä5æuêuæuæuçH‹›Ù\ÎˆÉŠ–Ù]K\›Ùš[WHŠWHKˆÈYˆœXÚØYÙH‹X™[ˆµåõäuæuç5å5åuçµæõèuåuêˆ‹›Ù\ÎˆÉŠ–Ù]KXÝ\ÝÛY\‹\XÚØYÙ\×HŠWHKˆÈYˆ˜Ø\™È‹X™[ˆµä5çµéµèµæH5êµêuç5åuçH‹›Ù\ÎˆÉŠ–Ù]K\^[Y[[Y]Ù×HŠWHKˆÈYˆš\ÝÜžH‹X™[ˆµå5æuèuæ5åuê5æuæuêˆ5êµêuç5åuçµæuçH‹›Ù\ÎˆÉŠ–Ù]KXXØÛÝ[Z\ÝÜžWHŠWHKˆÈYˆ˜˜[[˜Ù\È‹X™[ˆµêµêuç5åuçµæuçH5åuæuêµê5åuêˆ‹›Ù\ÎˆÉŠ–Ù]KY[][Y[×HŠK	Š–Ù]KXXØÛÝ[X˜[[˜Ù\×HŠWHBˆHJNÂˆÙXÝ[Û‹œ]Y\žTÙ[XÝÜŠ–Ü›ÛO]X›\ÝHŠKœÝ[K›X\™Ú[ˆHœLŽÂˆÛÛœÝ›ÛÝ\ˆH›ÛÝ›ÝÛ™\‘ØÝ[Y[˜Ü™X]Q[[Y[
™]ˆŠNÂˆ›ÛÝ\‹˜Û\ÜÓ˜[YHHœ›ÝÈŽÂˆ›ÛÝ\‹™]\Ù]˜XØÛÝ[XÝ[ÛœÈHˆŽÂˆ›ÛÝ\‹œÝ[K˜ÜÜÕ^H™Ø\ŽÙ›^]Ü˜\››ÝÜ˜\ÛX\™Ú[‹]ÜœØ[YÛ‹Z][\Î˜Ù[\ˆŽÂˆÛÛœÝ›Ùš[Q›Ü›HH	Š–Ù]K\›Ùš[WHŠNÂˆ›Ùš[Q›Ü›KšYH˜XØÛÝ[\›Ùš[KY›Ü›HŽÂˆÛÛœÝØ]™HH	Š–Ù]K\›Ùš[WH]ÛˆŠNÂˆØ]™K™]\Ù]œØ]™T›Ùš[HHˆŽÂˆØ]™K˜Û\ÜÓ\Ý˜Y
˜XÝ[Û‹\Ø]™HŠNÂˆØ]™KœÙ]]šX]J™›Ü›H‹›Ùš[Q›Ü›KšY
NÂˆØ]™K›Û˜ÛXÚÈH
JHOˆÂˆKœ™]™[Y˜][

NÂˆ›Ùš[Q›Ü›Kœ™\]Y\ÝÝX›Z]

NÂˆNÂˆØ]™K^ÛÛ[H¸§$È5êuçµåuêŽÂˆÛÛœÝ™Yœ™\Ú]ÛˆH	Š–Ù]KXÚXÚËXXØÛÝ[HŠNÂˆ™Yœ™\Ú]Û‹˜Û\ÜÓ\Ý˜Y
˜XÝ[Û‹\ÙXÛÛ™\žHŠNÂˆ™Yœ™\Ú]Û‹^ÛÛ[Hµê5èµè5åuçÈŽÂˆ	Š–Ù]K\ÚYÛ›Ý]HŠKœ™[[Ý™J
NÂˆ	Š–Ù]KXÚXÚËXXØÛÝ[HŠK˜™Y›Ü™J›ÛÝ\ŠNÂˆ›ÛÝ\‹˜\[™
Ø]™K™Yœ™\Ú]ÛŠNÂˆ\ÙËœÝ[K›Z[’ZYÚHŒŽÂˆ\ÙËœÝ[K›X\™Ú[ˆHŽÂˆ™]\›ˆ\ÜÜÙNÂˆBˆ˜\ˆÝ\ÝÛY\•šY]ÜÈHÊˆ×ÔT‘W×È
‹È™]ÈÙXZÓX\

NÂ‚ˆËÈÜ˜ËÙ^[œÙ\ËšœÂˆ˜\ˆÙ[ÈH
ŠHOˆX]œ›Ý[™
ˆ
ˆL
NÂˆ˜\ˆ[[Ý[H
ŠHOˆ\[ÙˆˆOOH›[X™\ˆˆ	‰ˆ[X™\‹š\Ñš[š]JŠH	‰ˆˆHÂˆ[˜Ý[Ûˆ˜[Y]Q^[œÙ\Ê[œ]
HÂˆYˆ
P\œ˜^Kš\Ð\œ˜^J[œ]
H[œ]›[™ÝˆL
H›ÝÈ\œ›ÜŠµê5êuæuçµêˆ5å5å5åuéµä5åuêˆ5çµåuäµäuç5êˆ5ç5¯L5é5ê5æuæ5æuçHŠNÂˆÛÛœÝÙY[ˆHÊˆ×ÔT‘W×È
‹È™]ÈÙ]

NÂˆ™]\›ˆ[œ]›X\


HOˆÂˆ˜\ˆØMØŽÂˆYˆ
^\[ÙˆšYOOHœÝš[™ÈˆK×–ØK^KVŒNWËW^ÌKLIË\Ý
šY
HÙY[‹š\ÊšY
JH›ÝÈ\œ›ÜŠµçµåµå5å5å5åuéµä5å5ç5ä5êµéõæuçÈ5ä5åH5æõé5åuçŠNÂˆÙY[‹˜Y
šY
NÂˆÛÛœÝÝ]HÈYˆšYNÂˆ›Üˆ
ÛÛœÝÚÙ^KX^™\]Z\™YHÙˆÖÈ›˜[YH‹ÌYWKÈ˜Ø]YÛÜžH‹LYWKÈ››Ý\È‹™LË˜[ÙWWJHÂˆÛÛœÝˆH
ØMHÚÙ^WJHOH[ÈØMˆˆŽÂˆYˆ
\[ÙˆˆOOHœÝš[™Èˆ‹›[™ÝˆX^™\]Z\™Y	‰ˆ]‹š[J
JH›ÝÈ\œ›ÜŠµæuêH5ç5çµç5ä5êµæuä5åuê5åuéõæ5äµåuê5æuå5êµéõæuè5æuçH5ç5å5åuéµä5åŠNÂˆÝ]ÚÙ^WHH‹š[J
NÂˆBˆ›Üˆ
ÛÛœÝÙ^HÙˆÈ˜ÛÜÝ‹œZY—JHÂˆÛÛœÝˆH
ØˆHÚÙ^WJHOH[ÈØˆˆÙ^HOOH˜ÛÜÝˆÈ[ˆÂˆYˆ
Ù^HOOH˜ÛÜÝˆ	‰ˆˆOOH[
HÂˆÝ]˜ÛÜÝH[ÂˆÛÛ[YNÂˆBˆYˆ
X[[Ý[
ŠHˆˆYNJH›ÝÈ\œ›ÜŠµèuæõåuçµæH5å5åuéµä5å5åõæuæuäuæuçH5ç5å5æuåuêˆ5çµèué5ê5æuçH5åõæuåuäuæuæuçH5ä5åH5ä5é5èHŠNÂˆÝ]ÚÙ^WHHÙ[ÊŠHÈLÂˆBˆ™]\›ˆÈYˆÝ]šY˜[YNˆÝ]›˜[YKØ]YÛÜžNˆÝ]˜Ø]YÛÜžKÛÜÝˆÝ]˜ÛÜÝZYˆÝ]œZY›Ý\ÎˆÝ]››Ý\ÈNÂˆJNÂˆBˆ[˜Ý[Ûˆ^[œÙT›ÝÜÊ][\ËÙ][™ÜÌˆHßJHÂˆ˜\ˆØMÂˆÛÛœÝÙY[ˆHÊˆ×ÔT‘W×È
‹È™]ÈÙ]

K›ÝÜÈH×NÂˆ›Üˆ
ÛÛœÝ][HÙˆ][\È×JHÂˆYˆ
][KšÚ[™OOH˜›ÛÚÚ[™ÈˆÙY[‹š\Ê][KšY
JHÛÛ[YNÂˆÙY[‹˜Y
][KšY
NÂˆÛÛœÝH][Kœ^[ØYßNÂˆ›ÝÜËœ\Ú
ÈYˆ][KšYÛÝ\˜ÙNˆ˜›ÛÚÚ[™È‹˜[YNˆ›˜[YHµå5åµçµè5å‹Ø]YÛÜžNˆ

ØMH\JHOH[È›ÚYˆØMš[J
JHµç5ç5ä5éõæ5äµåuê5æuå‹ÛÜÝˆ[[Ý[
˜ÛÜÝ
H	‰ˆ˜ÛÜÝˆÈ˜ÛÜÝˆ[ZYˆœZYOOH[È[ˆ[[Ý[
œZY
HÈœZYˆ›Ý\Îˆ››Ý\Èˆ‹Ý]\ÎˆœÝ]\Èµç5äuäõæuéõåˆJNÂˆBˆ›Üˆ
ÛÛœÝÙˆ˜[Y]Q^[œÙ\ÊÙ][™ÜÌ‹™^[œÙ\È×JJH›ÝÜËœ\Ú
×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßK
KÈÛÝ\˜ÙNˆ›X[X[‹Ý]\Îˆµå5åuéµä5å5æuäõè5æuêˆˆJJNÂˆ™]\›ˆ›ÝÜÎÂˆBˆ[˜Ý[Ûˆ^[œÙTÝ]\ÝXÜÊ›ÝÜËYÙ]
HÂˆÛÛœÝÜ›Ý\ÈHÊˆ×ÔT‘W×È
‹È™]ÈX\

NÂˆÛÛœÝÝ[HÈ[›™YˆZYˆ›Ú™XÝYˆ[œZYˆ[šÛ›ÝÛŽˆÛÝ[ˆNÂˆ›Üˆ
ÛÛœÝˆÙˆ›ÝÜÊHÂˆYˆ
YÜ›Ý\Ëš\Ê‹˜Ø]YÛÜžJJHÜ›Ý\ËœÙ]
‹˜Ø]YÛÜžKÈØ]YÛÜžNˆ‹˜Ø]YÛÜžK[›™YˆZYˆ›Ú™XÝYˆ[œZYˆ[šÛ›ÝÛŽˆÛÝ[ˆJNÂˆÛÛœÝÛÜÝH‹˜ÛÜÝOOH[È[ˆÙ[Ê‹˜ÛÜÝ
KZYHÙ[Ê‹œZY
K˜[Y\ÈHÈ[›™YˆÛÜÝOH[ÈÛÜÝˆZY›Ú™XÝYˆX]›X^
ÛÜÝOH[ÈÛÜÝˆZY
K[œZYˆX]›X^

ÛÜÝOH[ÈÛÜÝˆ
HHZY
K[šÛ›ÝÛŽˆÛÜÝOOH[ÈHˆÛÝ[ˆHNÂˆ›Üˆ
ÛÛœÝÙ^HÙˆØš™XÝšÙ^\Ê˜[Y\ÊJHÂˆÝ[ÚÙ^WH
ÏH˜[Y\ÖÚÙ^WNÂˆÜ›Ý\Ë™Ù]
‹˜Ø]YÛÜžJVÚÙ^WH
ÏH˜[Y\ÖÚÙ^WNÂˆBˆBˆÛÛœÝÛÛ™\H

HOˆ×ÜÜ™XY˜[Y\Ê×ÜÜ™XY˜[Y\ÊßK
KØš™XÝ™œ›ÛQ[šY\ÊÈœ[›™Y‹œZY‹œ›Ú™XÝY‹[œZY—K›X\

ÊHOˆÚËÚ×HÈLJJJK\ÐYÙ]H[[Ý[
YÙ]
H	‰ˆYÙ]ˆˆH\ÐYÙ]ÈÙ[ÊYÙ]
Hˆ[Âˆ™]\›ˆ×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßKÛÛ™\
Ý[
JKÈYÙ]ˆ\ÐYÙ]ÈYÙ]ˆ[™[XZ[š[™ÐYÙ]ˆ\ÐYÙ]È
ˆHÝ[œZY
HÈLˆ[[›š[™Ð˜[[˜ÙNˆ\ÐYÙ]È
ˆHÝ[œ›Ú™XÝY
HÈLˆ[Ø]YÛÜšY\ÎˆË‹‹™Ü›Ý\Ë˜[Y\Ê
WK›X\
ÛÛ™\
KœÛÜ

KŒŠHOˆK˜Ø]YÛÜžK›ØØ[PÛÛ\\™JŒ‹˜Ø]YÛÜžKšHŠJHJNÂˆBˆ[˜Ý[Ûˆ^[œÙ\ÓX\šÝ\
š\‹Ø]YÛÜžHHˆŠHÂˆÛÛœÝ›ÝÜÈH^[œÙT›ÝÜÊš\‹š][\Ëš\‹œÙ][™ÜÊKÈH^[œÙTÝ]\ÝXÜÊ›ÝÜËš\‹œÙ][™ÜË˜YÙ]
Kš[\™YHØ]YÛÜžHÈ›ÝÜË™š[\Š

HOˆ˜Ø]YÛÜžHOOHØ]YÛÜžJHˆ›ÝÜË˜[YLˆH
ŠHOˆˆOOH[Èµæ5ê5çH5è5éõäuèˆˆˆ›Ü›X][Û™^JŠKØ\›š[™ÈH
›ÝÜËœÛÛYJ
ŠHOˆ‹œZYOOH[
HÈ	ÏÛ\ÜÏH™^[œÙK]Ø\›š[™Èµêµêuç5åuçµæuçH5ä5æuè5çH5æuäõåuèµæuçH5äuåõç5éÈ5çµå5å5åµçµè5åuê‹ˆ5èuæuæõåuçµæH5å5êµêuç5åuçµæuçH5åuå5æuêµê5åuêˆ5åõç5éõæuæuçKÜ‰ÈˆˆŠH
È
Ë[šÛ›ÝÛˆÈ	ÏÛ\ÜÏH™^[œÙK]Ø\›š[™Èµåõèuê5æuçH5çµåõæuê5æuçH5ç5¯‰È
ÈË[šÛ›ÝÛˆ
Èˆ5å5åuéµä5åuê‹ˆ5èuæuæõåuçµæH5å5êµæõè5åuçÈ5åuå5æuêµê5å5ç5êµêuç5åuçH5åõç5éõæuæuçNÈ5êµêuç5åuçµæuçH5êuæõäuê5å5åuåµè5åH5è5èué5ê5æuçH5äuçµç5åuä5çKÜˆˆˆˆŠNÂˆÛÛœÝY]šXÜÈHÖÈµêµéõéµæuäH5å5æ5æuåuç‹Ë˜YÙ]KÈµêµæõè5åuçÈ5å5åuéµä5åuêˆ5æuäõåuèˆ‹Ëœ[›™YKÈµêuåuç5çH5èµäÈ5èµæõêuæuåH‹ËœZYKÈµè5åuêµê5ç5êµêuç5åuçH5ç5é5æH5å5èuæõåuçµæuçH5å5æuäõåuèµæuçH‹Ë[œZYKÈµæuêµê5êˆ5êµéõéµæuäH5ç5ä5åõê5êµêuç5åuçµæuçH‹Ëœ™[XZ[š[™ÐYÙ]KÈµæuêµê5êˆ5êµéõéµæuäH5ç5ä5åõê5å5êµæõè5åuçÈ‹Ëœ[›š[™Ð˜[[˜ÙWWNÂˆ™]\›ˆ	Ï]ˆÛ\ÜÏH™^[œÙ\Ë\YÙHÙXÝ[Û]ˆÛ\ÜÏHœ›ÝÈµêµéõéµæuäH5åuå5åuéµä5åuêÚ]Ûˆ\OH˜]Ûˆˆ]KXYY^[œÙOŠÈ5å5åuèuèÈ5å5åuéµä5åØ]ÛÙ]Û\ÜÏH›]]Yµæõç5å5èuæõåuçµæuçH5äuêuéõç5æuçKˆ5å5åµçµè5åuêˆ5çµèuåuè5æõê5è5åuêˆ5ä5åuæ5åuçµæ5æuêŽÈ5ä5é5êuê5ç5å5åuèuæuèÈ5ä5åuæõç5äõç5éË5éµæuåuäÈ5åuå5åuéµä5åuêˆ5è5åuèué5åuê‹ˆ5å5æuçµè5èˆ5çµå5åµè5êˆ5ä5åuêµå5å5åuéµä5å5äµçH5æõå5åµçµè5å5åuäµçH5æõå5åuéµä5å5æuäõè5æuê‹Ü]ˆÛ\ÜÏH™^[œÙK[Y]šXÜÈ‰È
ÈY]šXÜË›X\

ÛX™[—JHOˆ	Ï\XÛHÛ\ÜÏH™^[œÙK[Y]šXÈ	È
È
ˆOOH[	‰ˆˆÈš\Ë[Ý™\‹XYÙ]ˆˆˆŠH
È	ÈÜ[‰È
ÈX™[
ÈÜÜ[Ý›Û™Ïˆˆ
È˜[YLŠŠH
ÈÜÝ›Û™ÏØ\XÛOˆŠKš›Ú[ŠˆŠH
ÈÙ]ˆˆ
ÈØ\›š[™È
È	ÏÛ\ÜÏH›]]Yµå5æuêµê5å5ç5ä5åõê5êµêuç5åuçµæuçH5å5æuä5å5êµéõéµæuäH5é5åõåuêˆ5çµå5êuæõäuê5êuåuç5çKˆ5å5æuêµê5å5ç5ä5åõê5å5êµæõè5åuçÈ5çµé5åõæuêµå5äµçH5å5åuéµä5åuêˆ5çµêµåuæõè5è5åuêˆ5êuæ5ê5çH5êuåuç5çµåNÈ5ä5çH5å5êµêuç5åuçH5äµäuåuå5çµå5êµæõè5åuçË5å5åuä5è5ç5éõåÈ5äuåõêuäuåuçÈ5äuçµç5åuä5åKˆ5êµéõéµæuäH5å5èuåuæõçÈ5è5é5ê5äÈ5çµêµéõéµæuäH5å5æ5æuåuçÜÜÙXÝ[ÛÙXÝ[ÛÏµèuæ5æ5æuèuæ5æuéõåuêˆ5ç5é5æH5éõæ5äµåuê5æuåÚÏ‰È
È
Ë˜Ø]YÛÜšY\Ë›[™ÝÈ	Ï]ˆÛ\ÜÏH™^[œÙK]X›K\ØÜ›Ûˆ›ÛOHœ™YÚ[Ûˆˆ\šXK[X™[HµèuæuæõåuçH5å5åuéµä5åuêˆ5ç5é5æH5éõæ5äµåuê5æuåˆXš[™^HŒX›HÛ\ÜÏH™^[œÙK]X›HXYØÛÜOH˜ÛÛµéõæ5äµåuê5æuåÝØÛÜOH˜ÛÛµêµæõè5åuçÈ5æuäõåuèÝØÛÜOH˜ÛÛµêuåuç5çOÝØÛÜOH˜ÛÛµè5åuêµê5ç5êµêuç5åuçOÝØÛÜOH˜ÛÛµå5êµéõäõçµåuêˆ5êµêuç5åuçOÝÝÝXY›ÙO‰È
ÈË˜Ø]YÛÜšY\Ë›X\

ÊHOˆ	ÏØÛÜOHœ›ÝÈ‰È
È\ØØ\R[
Ë˜Ø]YÛÜžJH
È
Ë[šÛ›ÝÛˆÈÛX[ˆˆ
ÈË[šÛ›ÝÛˆ
Èˆ5ç5ç5ä5çµåõæuêÜÛX[ˆˆˆˆŠH
ÈÝˆˆ
È›Ü›X][Û™^JËœ[›™Y
H
ÈÝˆˆ
È›Ü›X][Û™^JËœZY
H
ÈÝˆˆ
È›Ü›X][Û™^JË[œZY
H
È	ÏÝ›ÙÜ™\ÜÈX^H‰È
È
Ëœ›Ú™XÝYJH
È	Èˆ˜[YOH‰È
ÈËœZY
È	Èˆ\šXK[X™[Hµêµêuç5åuçµæuçH5äuéõæ5äµåuê5æuå	È
È\ØØ\R[
Ë˜Ø]YÛÜžJH
È	ÈÜ›ÙÜ™\ÜÏÛX[‰È
È
Ëœ›Ú™XÝYÈX]œ›Ý[™
ËœZYÈËœ›Ú™XÝY
ˆL
H
È‰H5çµå5èµç5åuêˆ5å5æuäõåuèµåˆˆµæ5ê5çH5è5éõäuèµå5èµç5åuêˆŠH
ÈÜÛX[ÝÝˆŠKš›Ú[ŠˆŠH
ÈÝ›ÙOÝX›OÙ]ˆˆˆµä5æuçÈ5èµäõæuæuçÈ5å5åuéµä5åuêˆ5ç5å5éµäµêˆ5èuæ5æ5æuèuæ5æuéõåuê‹ÜˆŠH
È	ÏÜÙXÝ[ÛÙXÝ[Û]ˆÛ\ÜÏHœ›ÝÈÏµé5æuê5åuæ5å5å5åuéµä5åuêÚÏX™[Û\ÜÏH™^[œÙKYš[\ˆµèuæuè5åuçÈ5å5ê5êuæuçµå5ç5é5æH5éõæ5äµåuê5æuåÙ[XÝ]KY^[œÙKYš[\Ü[Ûˆ˜[YOHˆµæõç5å5éõæ5äµåuê5æuåuêÛÜ[Û‰È
ÈË˜Ø]YÛÜšY\Ë›X\

ÊHOˆ	ÏÜ[Ûˆ˜[YOH‰È
È\ØØ\R[
Ë˜Ø]YÛÜžJH
È	Èˆ	È
È
Ë˜Ø]YÛÜžHOOHØ]YÛÜžHÈœÙ[XÝYˆˆˆŠH
Èˆˆ
È\ØØ\R[
Ë˜Ø]YÛÜžJH
ÈÛÜ[ÛˆŠKš›Ú[ŠˆŠH
È	ÏÜÙ[XÝÛX™[Ù]]ˆÛ\ÜÏH™^[œÙK[\Ý‰È
Èš[\™Y›X\

ŠHOˆ	Ï\XÛHÛ\ÜÏH™^[œÙK\›ÝÈ]ˆÛ\ÜÏHœ›ÝÈ]Ü[ˆÛ\ÜÏH˜˜YÙH‰È
È\ØØ\R[
‹˜Ø]YÛÜžJH
ÈÜÜ[ˆˆ
È\ØØ\R[
‹›˜[YJH
ÈÚÛX[ˆˆ
È\ØØ\R[
‹œÛÝ\˜ÙHOOH˜›ÛÚÚ[™ÈˆÈµçµêµåuæˆ5å5å5åµçµè5åuêˆ0­Èˆ
È‹œÝ]\Èˆµå5åuéµä5å5æuäõè5æuêˆŠH
È	ÏÜÛX[Ù]]ˆÛ\ÜÏHœ›ÝÈ]Ûˆ\OH˜]Ûˆˆ]KY^[œÙKYY]H‰È
È\ØØ\R[
‹šY
H
È	Èˆ]KY^[œÙK\ÛÝ\˜ÙOH‰È
È‹œÛÝ\˜ÙH
È	Èµèµê5æuæõåØ]Û‰È
È
‹œÛÝ\˜ÙHOOH›X[X[ˆÈ	Ï]Ûˆ\OH˜]Ûˆˆ]KY^[œÙKY[]OH‰È
È\ØØ\R[
‹šY
H
È	ÈµçµåõæuéõåØ]Û‰ÈˆˆŠH
ÈÙ]Ù]]µèuæõåuçH5çµêµåuæõè5çÏÙˆˆ
È˜[YLŠ‹˜ÛÜÝ
H
ÈÙÙ]]µêuåuç5çH5èµäÈ5èµæõêuæuåOÙˆˆ
È
‹œZYOOH[Èµç5ä5æuäõåuèˆˆˆ›Ü›X][Û™^J‹œZY
JH
ÈÙÙ]]µè5åuêµê5ç5êµêuç5åuçOÙˆˆ
È
‹˜ÛÜÝOOH[‹œZYOOH[ÈµèuæõåuçH5åõèuêˆˆ›Ü›X][Û™^JX]›X^
‹˜ÛÜÝH‹œZY
JJH
ÈÙÙ]Ùˆˆ
È
‹˜ÛÜÝOOH[	‰ˆ‹œZYˆ‹˜ÛÜÝÈ	ÏÛ\ÜÏH™^[œÙK]Ø\›š[™Èµå5êµêuç5åuçH5äµäuåuå5çµå5èuæõåuçH5å5çµêµåuæõè5çËˆ5æõäõä5æH5ç5èµäõæõçÈ5ä5êˆ5å5êµæõè5åuçËÜ‰ÈˆˆŠH
È
‹››Ý\ÈÈ]Z[ÏÝ[[X\žOµå5èµê5åuêÜÝ[[X\žOˆˆ
È\ØØ\R[
‹››Ý\ÊH
ÈÜÙ]Z[ÏˆˆˆˆŠH
ÈØ\XÛOˆŠKš›Ú[ŠˆŠH
ÈÙ]ˆˆ
È
š[\™Y›[™ÝÈˆˆˆµä5æuçÈ5å5åuéµä5åuêˆ5äuéõæ5äµåuê5æuå5êuè5äuåõê5åÜˆŠH
ÈÜÙXÝ[ÛÙ]ˆŽÂˆB‚ˆËÈÜ˜ËÜ[›š[™Ë\™Y™\™[˜Ù\ËšœÂˆ˜\ˆ™Y™\™[˜ÙQÜ›Ý\ÈHÂˆÈÙ^NˆœXÙH‹X™[ˆµéõéµäH5å5æ5æuåuç‹Ü[ÛœÎˆÖÈœ™[^Y‹µéõéµäH5ê5äµåuèˆ—KÈ˜˜[[˜ÙY‹µéõéµäH5çµä5åuåµçÈ—KÈ™[‹µæuçµæuçH5çµç5ä5æuçH5åué5èµæuç5æuçH—WHKˆÈÙ^Nˆ›ÙÚ[™È‹X™[ˆµèuäµè5åuçÈ5ç5æuè5å‹Ü[ÛœÎˆÖÈ˜ÛÛY›ÜX›H‹µçµç5åuè5åuêˆ5è5åuåõæuçH5äuê5çµå5æ5åuäuå—KÈ˜›Ý]\]YH‹µçµç5åuè5åuêˆ5äuåuæ5æuéÈ—KÈ›^\žH‹µçµç5åuè5åuêˆ5çµé5è5éõæuçH5äuê5çµå5äµäuåuå5å—KÈœÚ[\H‹µç5æuè5å5é5êuåuæ5å5åuè5éõæuæuå—WHKˆÈÙ^Nˆ™š]š[™È‹X™[ˆµçµêuæˆ5è5èuæuèµå5æuåuçµæH5çµåuèµäõèÈ‹Ü[ÛœÎˆÖÈœÚÜ‹µèµäÈÈ5êuèµåuêˆ5è5èuæuèµå5äuæuåuçH—KÈ›YY][H‹Œø $ÍH5êuèµåuêˆ5è5èuæuèµå5äuæuåuçH—KÈ›Û™È‹µèµäÈˆ5êuèµåuêˆ5è5èuæuèµå5äuæuåuçH—WHKˆÈÙ^Nˆš[\™\ÝÈ‹X™[ˆµçµå5çµèµè5æuæuçÈ5ä5åuêµæÈ‹][\NˆYKÜ[ÛœÎˆÖÈ›˜]\™H‹µæ5äuèˆ5åuè5åué5æuçH—KÈšY]ÜÚ[È‹µêµéµé5æuåuêˆ5åuéµæuç5åuçH—KÈ›ØØ[Ù›ÛÙ‹µä5åuæõç5çµéõåuçµæH5åuäuêµæH5éõé5å—KÈ˜Ý[\™H‹µêµê5äuåuêˆ5åuçµéõäõêuæuçH—KÈ˜™XXÚ‹µåõåué5æuçH5åuçµè5åuåõå—KÈ›X\šÙ]È‹µêuåuåuéõæuçH5åuéõè5æuåuêˆ—WHKˆÈÙ^Nˆœ›ØYÈ‹X™[ˆµå5èµäõé5åuêˆ5çµèuç5åuç‹][\NˆYKÜ[ÛœÎˆÖÈœØÙ[šXÈ‹µæõäuæuêuæuçH5è5åué5æuæuçH—KÈÚ[™[™È‹µæõäuæuêuæuçH5çµé5åuêµç5æuçH—KÈœ]™Y‹µæõäuæuêuæuçH5èuç5åuç5æuçH5äuç5äuäÈ—KÈ˜]›ÚYÚYÚØ^\È‹µç5å5æuçµè5èˆ5çµæõäuæuêuæuçH5çµå5æuê5æuçH—WHKˆÈÙ^Nˆ˜ÛÛœÝ˜Z[È‹X™[ˆµä5æuç5åuéµæuçH5åuäõê5æuêuåuêˆ‹][\NˆYKÜ[ÛœÎˆÖÈ››×ÛšYÚ‹µç5ç5ä5ê5æõæuäuå5äuç5æuç5å—KÈ™œ™\]Y[Ü™\Ý‹µèµéµæuê5åuêˆ5çµè5åuåõå5êµæõåué5åuêˆ—KÈœÚÜÝØ[ÜÈ‹µç5ç5ä5å5ç5æuæõåuêˆ5ä5ê5åuæõåuêˆ—KÈœÙXÝ\™WÜ\šÚ[™È‹µåõè5æuå5çµä5åuäuæ5åõêˆ5ç5ä5åué5è5åuèˆ—KÈœ™\ÝÙ^\È‹µç5êuç5äH5æuçµæH5çµè5åuåõå5ç5ç5ä5è5èuæuèµåuêˆ—WHBˆNÂˆ[˜Ý[Ûˆ™XY™Y™\™[˜Ù\Ê]JHÂˆÛÛœÝÚÚXÙ\ÌˆHßNÂˆ›Üˆ
ÛÛœÝÜ›Ý\Ùˆ™Y™\™[˜ÙQÜ›Ý\ÊHÂˆÛÛœÝ[ÝÙYH™]ÈÙ]
Ü›Ý\›Ü[ÛœË›X\

ÚYJHOˆY
JNÂˆÚÚXÙ\Ì–ÙÜ›Ý\šÙ^WHHÜ›Ý\›][\HÈ]K™Ù][
œ™Y™\™[˜ÙWÈˆ
ÈÜ›Ý\šÙ^JK™š[\Š
Y
HOˆ[ÝÙYš\ÊY
JHˆ[ÝÙYš\Ê]K™Ù]
œ™Y™\™[˜ÙWÈˆ
ÈÜ›Ý\šÙ^JJHÈ]K™Ù]
œ™Y™\™[˜ÙWÈˆ
ÈÜ›Ý\šÙ^JHˆˆŽÂˆBˆÛÛœÝœ™YU^HÝš[™Ê]K™Ù]
œ™Y™\™[˜Ù\ÈŠHˆŠNÂˆÛÛœÝ[™\ÈH™Y™\™[˜ÙQÜ›Ý\Ë™›]X\

Ü›Ý\
HOˆÂˆÛÛœÝXÚÙYH™]ÈÙ]
Ü›Ý\›][\HÈÚÚXÙ\Ì–ÙÜ›Ý\šÙ^WHˆØÚÚXÙ\Ì–ÙÜ›Ý\šÙ^WWJNÂˆÛÛœÝX™[ÍHHÜ›Ý\›Ü[ÛœË™š[\Š
ÚYJHOˆXÚÙYš\ÊY
JK›X\

ËX™[JHOˆX™[
NÂˆ™]\›ˆX™[ÍK›[™ÝÈÙÜ›Ý\›X™[
ÈŽˆˆ
ÈX™[ÍKš›Ú[Š‹ŠWHˆ×NÂˆJNÂˆYˆ
œ™YU^š[J
JH[™\Ëœ\Ú
µå5èµäõé5åuêˆ5è5åuèué5åuêˆ5äuæ5éõèuæ5åõåué5êuæNˆˆ
Èœ™YU^š[J
JNÂˆÛÛœÝ™Y™\™[˜Ù\ÈH[™\Ëš›Ú[Š—ˆŠNÂˆYˆ
™Y™\™[˜Ù\Ë›[™Ýˆ™LÊH›ÝÈ\œ›ÜŠµå5äuåõæuê5åuêˆ5åuå5æ5éõèuæ5å5åõåué5êuæH5æuåõäÈ5çµåuäµäuç5æuçH5ç5¯Œ‹5êµåuåuæuçKˆ5æuêH5ç5éõéµê5ä5êˆ5å5æ5éõèuæˆŠNÂˆ™]\›ˆÈÚÚXÙ\ÎˆÚÚXÙ\Ì‹œ™YU^™Y™\™[˜Ù\ÈNÂˆBˆ[˜Ý[Ûˆ™[™\”™Y™\™[˜Ù\ÊÚÚXÙ\Ì‹œ™YU^\ØØ\M
HÂˆÛÛœÝÙ[XÝÈH™Y™\™[˜ÙQÜ›Ý\Ë™š[\Š
ÊHOˆYË›][\JK›X\

ÊHOˆX™[ˆˆ
ÈË›X™[
È	ÏÙ[XÝ˜[YOHœ™Y™\™[˜ÙWÉÈ
ÈËšÙ^H
È	ÈÜ[Ûˆ˜[YOHˆµç5ç5ä5å5èµäõé5åÛÜ[Û‰È
ÈË›Ü[ÛœË›X\

ÚYX™[JHOˆ	ÏÜ[Ûˆ˜[YOH‰È
ÈY
È	Èˆ	È
È
ÚÚXÙ\Ì–ÙËšÙ^WHOOHYÈœÙ[XÝYˆˆˆŠH
Èˆˆ
ÈX™[
ÈÛÜ[ÛˆŠKš›Ú[ŠˆŠH
ÈÜÙ[XÝÛX™[ˆŠKš›Ú[ŠˆŠNÂˆÛÛœÝÚXÚÜÈH™Y™\™[˜ÙQÜ›Ý\Ë™š[\Š
ÊHOˆË›][\JK›X\

ÊHOˆ	ÏšY[Ù]Û\ÜÏHœ™Y™\™[˜ÙK[Ü[ÛœÈYÙ[™‰È
ÈË›X™[
È	ÏÛYÙ[™]ˆÛ\ÜÏHœ™Y™\™[˜ÙKXÚÚXÙKYÜšY‰È
ÈË›Ü[ÛœË›X\

ÚYX™[JHOˆ	ÏX™[Û\ÜÏHœ™Y™\™[˜ÙKXÚÚXÙH[œ]\OH˜ÚXÚØ›Þˆ˜[YOHœ™Y™\™[˜ÙWÉÈ
ÈËšÙ^H
È	Èˆ˜[YOH‰È
ÈY
È	Èˆ	È
È

ÚÚXÙ\Ì–ÙËšÙ^WH×JKš[˜ÛY\ÊY
HÈ˜ÚXÚÙYˆˆˆŠH
ÈÜ[ˆˆ
ÈX™[
ÈÜÜ[ÛX™[ˆŠKš›Ú[ŠˆŠH
ÈÙ]ÙšY[Ù]ˆŠKš›Ú[ŠˆŠNÂˆ™]\›ˆ	ÏšY[Ù]Û\ÜÏHœ[›™\‹\™Y™\™[˜Ù\ÈYÙ[™µå5èµäõé5åuêˆ5åuä5æuç5åuéµæuçOÛYÙ[™Û\ÜÏH›]]Yµä5é5êuê5ç5äuåõåuê5æõçµå5ä5é5êuê5åuæuåuêˆ5äuêµåõåuçµæH5å5èµè5æuæuçË5äuçµèuç5åuç5åuäuä5æuç5åuéµæuçKˆ5æõç5å5äuåõæuê5åuêˆ5ä5åué5éµæuåuè5ç5æuåuê‹Ü]ˆÛ\ÜÏHœ[›™\‹YÜšY‰È
ÈÙ[XÝÈ
ÈÙ]ˆˆ
ÈÚXÚÜÈ
È	ÏX™[µå5èµäõé5åuêˆ5è5åuèué5åuêˆ8 %5æ5éõèuæ5åõåué5êuæH
5ä5åué5éµæuåuè5ç5æJO^\™XH˜[YOHœ™Y™\™[˜Ù\ÈˆX^[™ÝHŒŒˆXÙZÛ\Hµäuéõêuåuêˆ5è5åuèué5åuêˆ5êuç5ä5çµåué5æuèµåuêˆ5äuä5é5êuê5åuæuåuêˆ5å5äuåõæuê5å‰È
È\ØØ\M
œ™YU^
H
È	ÏÝ^\™XOÛX™[Û\ÜÏH›]]Yµå5äuåõæuê5åuêˆ5åuå5æ5éõèuæ5æuåuéµäµåH5æuåõäÈ5äuèuæuæõåuçH5ç5é5è5æH5ä5æuêuåuê5å5å5ê5éµåˆ5ä5æuçÈ5ç5å5åµæuçÈ5èuæuèuçµä5åuê‹5é5ê5æ5æH5êµêuç5åuçH5ä5åH5çµèuçµæõæuçH5ä5æuêuæuæuçKÜÙšY[Ù]‰ÎÂˆB‚ˆËÈÜ˜ËÜ[›š[™ËY˜YšœÂˆ˜\ˆ˜YÝ\ÈHÈ™\Ý[˜][Ûˆ‹™]\È‹˜YÙ]‹˜]™[\œÈ‹œÝ[H‹š[\™\ÝÈ‹˜ÛÛœÝ˜Z[È‹œØY™]H—NÂˆ˜\ˆ[˜ÛY\ÈHÈ™›YÚÈ‹›ÙÚ[™È‹˜[œÜÜ‹™›ÛÙ‹˜XÝ]š]Y\È‹š[œÝ\˜[˜ÙH—NÂˆ[˜Ý[Ûˆ™Y™\™[˜ÙU^
ÚÚXÙ\Ì‹œ™YU^
HÂˆ™]\›ˆ™XY™Y™\™[˜Ù\ÊÈÙ]ˆ
ÊHOˆÈOOHœ™Y™\™[˜Ù\ÈˆÈœ™YU^ˆÚÚXÙ\Ì–ÚËœ™\XÙJœ™Y™\™[˜ÙWÈ‹ˆŠWKÙ][ˆ
ÊHOˆÚÚXÙ\Ì–ÚËœ™\XÙJœ™Y™\™[˜ÙWÈ‹ˆŠWH×HJKœ™Y™\™[˜Ù\ÎÂˆBˆ[˜Ý[Ûˆ™XÛÝ™\”™Y™\™[˜Ù\Ê˜[YLˆHˆŠHÂˆÛÛœÝÚÚXÙ\ÌˆHßK™[XZ[š[™ÈH×NÂˆ]œ™YHH˜[ÙNÂˆ›Üˆ
ÛÛœÝ[™HÙˆÝš[™Ê˜[YLŠKœÜ]
—ˆŠJHÂˆYˆ
[™KœÝ\ÕÚ]
µå5èµäõé5åuêˆ5è5åuèué5åuêˆ5äuæ5éõèuæ5åõåué5êuæNˆŠJHÂˆ™[XZ[š[™Ëœ\Ú
[™KœÛXÙJµå5èµäõé5åuêˆ5è5åuèué5åuêˆ5äuæ5éõèuæ5åõåué5êuæNˆ‹›[™Ý
JNÂˆœ™YHHYNÂˆÛÛ[YNÂˆBˆYˆ
œ™YJHÂˆ™[XZ[š[™Ëœ\Ú
[™JNÂˆÛÛ[YNÂˆBˆÛÛœÝÜ›Ý\H™Y™\™[˜ÙQÜ›Ý\Ë™š[™

ÊHOˆ[™KœÝ\ÕÚ]
Ë›X™[
ÈŽˆŠJNÂˆYˆ
YÜ›Ý\
HÂˆYˆ
[™JH™[XZ[š[™Ëœ\Ú
[™JNÂˆÛÛ[YNÂˆBˆÛÛœÝX™[ÍHH[™KœÛXÙJÜ›Ý\›X™[›[™Ý
ÈŠKœÜ]
‹ŠKXÚÙYHÜ›Ý\›Ü[ÛœË™š[\Š
ËX™[JHOˆX™[ÍKš[˜ÛY\ÊX™[
JK›X\

ÚYJHOˆY
NÂˆÚÚXÙ\Ì–ÙÜ›Ý\šÙ^WHHÜ›Ý\›][\HÈXÚÙYˆXÚÙYÌHˆŽÂˆÛÛœÝ[šÛ›ÝÛˆHX™[ÍK™š[\Š
X™[
HOˆYÜ›Ý\›Ü[ÛœËœÛÛYJ
ËÛ›ÝÛ—JHOˆÛ›ÝÛˆOOHX™[
JNÂˆYˆ
[šÛ›ÝÛ‹›[™Ý
H™[XZ[š[™Ëœ\Ú
Ü›Ý\›X™[
ÈŽˆˆ
È[šÛ›ÝÛ‹š›Ú[Š‹ŠJNÂˆBˆ™]\›ˆÈÚÚXÙ\ÎˆÚÚXÙ\Ì‹œ™YU^ˆ™[XZ[š[™Ëš›Ú[Š—ˆŠHNÂˆBˆ[˜Ý[Ûˆ˜[Y]T[›š[™Ñ˜Y
˜]ÊHÂˆ˜\ˆØMÂˆYˆ
\˜]È˜]ËœØÚ[XU™\œÚ[ÛˆOOHH\˜]Ëš[œ]\[Ùˆ˜]Ëš[œ]OOH›Øš™XÝˆ\œ˜^Kš\Ð\œ˜^J˜]Ëš[œ]
H\˜]Ë˜ÚÚXÙ\È\[Ùˆ˜]Ë˜ÚÚXÙ\ÈOOH›Øš™XÝˆ\œ˜^Kš\Ð\œ˜^J˜]Ë˜ÚÚXÙ\ÊH\[Ùˆ˜]Ë™œ™YU^OOHœÝš[™Èˆ˜]Ë™œ™YU^›[™Ýˆ™LÈP\œ˜^Kš\Ð\œ˜^J˜]Ëœ™]šY]ÙY
H˜]Ëœ™]šY]ÙYœÛÛYJ

HOˆY˜YÝ\Ëš[˜ÛY\Ê
JJH›ÝÈ\œ›ÜŠµå5äµäõê5åuêˆ5å5êµæõè5åuçÈ5ä5æuè5çÈ5êµéõæuè5åuêˆŠNÂˆÛÛœÝ[œ]HßKÚÚXÙ\ÌˆHßNÂˆ›Üˆ
ÛÛœÝÚËZ[‹X^[YÙ\Œ—HÙˆÖÈ™^\È‹KÍKYWKÈ™X\›Y\‘^\È‹ŒYWKÈ›]\‘^\È‹ŒYWKÈœÚÜ\‘^\È‹ÌYWKÈ›Û™Ù\‘^\È‹ÌYWKÈ˜]™[\œÈ‹KŒYWKÈœ›ÛÛ\È‹KŒYWKÈœ[“[Z]YÛÜ›Ý‹KLYWKÈ˜YÙ]‹YM‹˜[ÙWKÈ˜YÙ]]šX][Û”Ý‹L˜[ÙWWJHÂˆÛÛœÝˆH˜]Ëš[œ]Ú×NÂˆYˆ
\[ÙˆˆOOH›[X™\ˆˆS[X™\‹š\Ñš[š]JŠHˆZ[ˆˆˆX^[YÙ\Œˆ	‰ˆS[X™\‹š\Ò[YÙ\ŠŠJH›ÝÈ\œ›ÜŠµèµê5æˆ5ç5ä5êµéõæuçÈ5äuå5äµäõê5åuêˆ5å5êµæõè5åuçÎˆˆ
ÈÊNÂˆ[œ]Ú×HHŽÂˆBˆ›Üˆ
ÛÛœÝÚÙ^KX^HÙˆÖÈœÝ\‹LKÈ™\\\™H‹LWJHÂˆÛÛœÝˆH˜]Ëš[œ]ÚÙ^WNÂˆYˆ
\[ÙˆˆOOHœÝš[™Èˆ‹›[™ÝˆX^
H›ÝÈ\œ›ÜŠµè5êµåuè5æH5êµæõè5åuçÈ5ç5ä5êµéõæuè5æuçHŠNÂˆ[œ]ÚÙ^WHH‹š[J
NÂˆBˆYˆ
[œ]œÝ\	‰ˆ
K×—ÍKWÌŸKWÌŸIË\Ý
[œ]œÝ\
HS[X™\‹š\Ñš[š]J]Kœ\œÙJ[œ]œÝ\
JH™]È]J[œ]œÝ\
KÒTÓÔÝš[™Ê
KœÛXÙJL
HOOH[œ]œÝ\
JH›ÝÈ\œ›ÜŠµêµä5ê5æuæˆ5ç5ä5êµéõæuçÈŠNÂˆYˆ
VÈ›[ÝÜ˜ÞXÛH‹˜Ø\ˆ‹œX›XÈ‹›Z^Y—Kš[˜ÛY\Ê˜]Ëš[œ]˜[œÜÜ
HP\œ˜^Kš\Ð\œ˜^J˜]Ëš[œ]š[˜ÛY\ÊH˜]Ëš[œ]š[˜ÛY\ËœÛÛYJ

HOˆZ[˜ÛY\Ëš[˜ÛY\Ê
JJH›ÝÈ\œ›ÜŠµäuåõæuê5åuêˆ5êµæõè5åuçÈ5ç5ä5êµéõæuè5åuêˆŠNÂˆ[œ]˜[œÜÜH˜]Ëš[œ]˜[œÜÜÂˆ[œ]š[˜ÛY\ÈHË‹‹›™]ÈÙ]
˜]Ëš[œ]š[˜ÛY\ÊWNÂˆ›Üˆ
ÛÛœÝÈÙˆ™Y™\™[˜ÙQÜ›Ý\ÊHÂˆÛÛœÝ[ÝÙYHË›Ü[ÛœË›X\

ÚYJHOˆY
KˆH
ØMH˜]Ë˜ÚÚXÙ\ÖÙËšÙ^WJHOH[ÈØMˆË›][\HÈ×HˆˆŽÂˆYˆ
Ë›][\JHÂˆYˆ
P\œ˜^Kš\Ð\œ˜^JŠH‹œÛÛYJ
Y
HOˆX[ÝÙYš[˜ÛY\ÊY
JJH›ÝÈ\œ›ÜŠµå5èµäõé5å5ç5ä5êµéõæuè5åŠNÂˆÚÚXÙ\Ì–ÙËšÙ^WHHË‹‹›™]ÈÙ]
ŠWNÂˆH[ÙHÂˆYˆ
\[ÙˆˆOOHœÝš[™ÈˆˆOOHˆˆ	‰ˆX[ÝÙYš[˜ÛY\ÊŠJH›ÝÈ\œ›ÜŠµå5èµäõé5å5ç5ä5êµéõæuè5åŠNÂˆÚÚXÙ\Ì–ÙËšÙ^WHHŽÂˆBˆBˆÛÛœÝœ™YU^H˜]Ë™œ™YU^Âˆ[œ]œ™Y™\™[˜Ù\ÈH™Y™\™[˜ÙU^
ÚÚXÙ\Ì‹œ™YU^
NÂˆ™]\›ˆÈØÚ[XU™\œÚ[ÛŽˆK[œ]ÚÚXÙ\ÎˆÚÚXÙ\Ì‹œ™YU^™]šY]ÙYˆË‹‹›™]ÈÙ]
˜]Ëœ™]šY]ÙY
WHNÂˆBˆ[˜Ý[Ûˆ[›š[™Ñ˜Y
Ù][™ÜÌˆHßK™]š[Ý\Ò[œ]H[
HÂˆ˜\ˆØMØ‹ØËÙÂˆÛÛœÝØ]™YHÙ][™ÜÌ‹œ[›š[™Ñ˜YÂˆÛÛœÝY˜][ÈHÈÝ\ˆˆ‹^\ÎˆŒKX\›Y\‘^\Îˆ]\‘^\ÎˆÚÜ\‘^\ÎˆÛ™Ù\‘^\ÎˆYÙ]ˆYÙ]]šX][Û”Ýˆ˜]™[\œÎˆK›ÛÛ\ÎˆK\\\™Nˆˆ‹˜[œÜÜˆ›[ÝÜ˜ÞXÛH‹[˜ÛY\Ë™Y™\™[˜Ù\Îˆˆ‹[“[Z]YÛÜ›ÝˆLNÂˆÛÛœÝ™XÛÝ™\™YH™XÛÝ™\”™Y™\™[˜Ù\Ê™]š[Ý\Ò[œ]OH[È›ÚYˆ™]š[Ý\Ò[œ]œ™Y™\™[˜Ù\ÊNÂˆ™]\›ˆ˜[Y]T[›š[™Ñ˜Y
ÈØÚ[XU™\œÚ[ÛŽˆK[œ]ˆ×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\Ê×ÜÜ™XY˜[Y\Ê×ÜÜ™XY˜[Y\ÊßKY˜][ÊK™]š[Ý\Ò[œ]ßJK
Ø]™YOH[È›ÚYˆØ]™Yš[œ]
HßJKÈÝ\ˆ
ØMHÙ][™ÜÌ‹œÝ\
HOH[ÈØMˆˆ‹^\Îˆ
ØˆHÙ][™ÜÌ‹™^\ÊHOH[ÈØˆˆŒKYÙ]ˆ
ØÈHÙ][™ÜÌ‹˜YÙ]
HOH[ÈØÈˆJKÚÚXÙ\Îˆ
Ø]™YOH[È›ÚYˆØ]™Y˜ÚÚXÙ\ÊH™XÛÝ™\™Y˜ÚÚXÙ\Ëœ™YU^ˆ
ÙHØ]™YOH[È›ÚYˆØ]™Y™œ™YU^
HOH[ÈÙˆ™XÛÝ™\™Y™œ™YU^™]šY]ÙYˆ
Ø]™YOH[È›ÚYˆØ]™Yœ™]šY]ÙY
H
™]š[Ý\Ò[œ]È˜YÝ\Èˆ×JHJNÂˆB‚ˆËÈÜ˜ËØ›ÛÚÚ[™Ë\ÛXÞK\™]šY]ËšœÂˆ˜\ˆ\ØÌŒH
ŠHOˆÝš[™ÊˆOH[ÈˆˆˆŠKœ™\XÙJÖÉˆ‰×KÙË
ÊHOˆ
È‰ˆŽˆ‰˜[\È‹Žˆ‰›È‹ˆŽˆ‰™ÝÈ‹	È‰Îˆ‰œ][ÝÈ‹‰ÈŽˆ‰ˆÌÎNÈˆJVØ×JNÂˆ[˜Ý[Ûˆ˜[Y]T›ÜÜØ[Ê[œ]
HÂˆYˆ
P\œ˜^Kš\Ð\œ˜^J[œ]
H[œ]›[™ÝˆL
H›ÝÈ\œ›ÜŠµê5êuæuçµêˆ5å5éµèµåuêˆ5ç5ä5êµéõæuè5åŠNÂˆÛÛœÝYÈHÊˆ×ÔT‘W×È
‹È™]ÈÙ]

NÂˆ™]\›ˆ[œ]›X\


HOˆÂˆ˜\ˆØMØ‹ØËÙÂˆYˆ
\\[ÙˆšYOOHœÝš[™Èˆ\šYšY›[™ÝˆLYËš\ÊšY
H\[Ùˆ˜Ø]YÛÜžHOOHœÝš[™Èˆ\˜Ø]YÛÜžKš[J
H˜Ø]YÛÜžK›[™ÝˆL
H›ÝÈ\œ›ÜŠµå5éµèµêˆ5çµäõæuè5æuåuêˆ5ç5ä5êµéõæuè5åŠNÂˆYË˜Y
šY
NÂˆYˆ
VÈœÛXÞWÝ\]Y‹˜]ØZ][™×Ø\›Ý˜[‹˜\›Ý™Y‹œ™Z™XÝY—Kš[˜ÛY\ÊœÝ]JJH›ÝÈ\œ›ÜŠµçµéµäH5å5éµèµå5ç5ä5êµéõæuçÈŠNÂˆYˆ
P\œ˜^Kš\Ð\œ˜^J›Ü[ÛœÊH›Ü[ÛœË›[™ÝˆLP\œ˜^Kš\Ð\œ˜^J
ØMH˜›ÛÚÚ[™ÒYÊHOH[ÈØMˆ×JJH›ÝÈ\œ›ÜŠµä5é5êuê5åuæuåuêˆ5å5å5éµèµå5ç5ä5êµéõæuè5åuêˆŠNÂˆÛÛœÝÜ[Û’YÈHÊˆ×ÔT‘W×È
‹È™]ÈÙ]

NÂˆÛÛœÝÜ[ÛœÈH›Ü[ÛœË›X\

ÊHOˆÂˆ˜\ˆØMNÂˆYˆ
[È\[ÙˆËšYOOHœÝš[™Èˆ[ËšYËšY›[™ÝˆLÜ[Û’YËš\ÊËšY
H\[ÙˆË›X™[OOHœÝš[™Èˆ[Ë›X™[š[J
HË›X™[›[™ÝˆL
H›ÝÈ\œ›ÜŠµä5é5êuê5åuêˆ5ç5ä5êµéõæuè5åŠNÂˆÜ[Û’YË˜Y
ËšY
NÂˆÛÛœÝˆHÈYˆËšYX™[ˆË›X™[]Z[ÎˆÝš[™Ê
ØMHHË™]Z[ÊHOH[ÈØMHˆˆŠK™XÛÛ[Y[™YˆËœ™XÛÛ[Y[™YOOHYHNÂˆYˆ
‹™]Z[Ë›[™ÝˆYM
H›ÝÈ\œ›ÜŠµêµæuä5åuê5ä5ê5åuæˆ5çµäõæHŠNÂˆYˆ
ËœÛÝ\˜ÙU\›
HÂˆÛÛœÝHH™]ÈT“
ËœÛÝ\˜ÙU\›
NÂˆYˆ
VÈšˆ‹šÎˆ—Kš[˜ÛY\ÊKœ›ÝØÛÛ
JH›ÝÈ\œ›ÜŠµéõæuêuåuê5ç5ä5êµéõæuçÈŠNÂˆ‹œÛÝ\˜ÙU\›HKš™YŽÂˆBˆYˆ
Ë™\Ý[X]YÛÜÝOOH›ÚY
HÂˆYˆ
\[ÙˆË™\Ý[X]YÛÜÝOOH›[X™\ˆˆS[X™\‹š\Ñš[š]JË™\Ý[X]YÛÜÝ
HË™\Ý[X]YÛÜÝ
H›ÝÈ\œ›ÜŠµèµç5åuêˆ5ç5ä5êµéõæuè5åŠNÂˆ‹™\Ý[X]YÛÜÝHË™\Ý[X]YÛÜÝÂˆ‹˜ÛÜÝ˜\Ú\ÈHË˜ÛÜÝ˜\Ú\È˜›ÛÚÚ[™ÈŽÂˆYˆ
VÈ˜›ÛÚÚ[™È‹›šYÚ‹™^H‹œ\œÛÛˆ—Kš[˜ÛY\Ê‹˜ÛÜÝ˜\Ú\ÊJH›ÝÈ\œ›ÜŠµäuèuæuèH5èµç5åuêˆ5ç5ä5êµéõæuçÈŠNÂˆBˆ™]\›ˆŽÂˆJNÂˆÛÛœÝÙ[XÝYH
ØˆH˜\›Ý™YÜ[Û’YÊHOH[ÈØˆˆ×NÂˆYˆ
P\œ˜^Kš\Ð\œ˜^JÙ[XÝY
H™]ÈÙ]
Ù[XÝY
KœÚ^™HOOHÙ[XÝY›[™ÝÙ[XÝYœÛÛYJ
Y
HOˆ[Ü[Û’YËš\ÊY
JJH›ÝÈ\œ›ÜŠµäuåõæuê5åuêˆ5ç5ä5êµéõæuè5åuêˆŠNÂˆYˆ
˜YÙ]Ú\™TÝOOH›ÚY	‰ˆ˜YÙ]Ú\™TÝOOH[	‰ˆ
\[Ùˆ˜YÙ]Ú\™TÝOOH›[X™\ˆˆS[X™\‹š\Ñš[š]J˜YÙ]Ú\™TÝ
H˜YÙ]Ú\™TÝ˜YÙ]Ú\™TÝˆL
JH›ÝÈ\œ›ÜŠµä5åõåuåˆ5êµéõéµæuäH5ç5ä5êµéõæuçÈŠNÂˆÛÛœÝÝ]HÈYˆšYØ]YÛÜžNˆ˜Ø]YÛÜžKš[J
KÝ]NˆœÝ]KÜ[ÛœË›ÛÚÚ[™ÒYÎˆ

ØÈH˜›ÛÚÚ[™ÒYÊHOH[ÈØÈˆ×JK›X\

Y
HOˆÂˆYˆ
\[ÙˆYOOHœÝš[™ÈˆK×–ÌNXKY‹W^ÌÍŸIÚK\Ý
Y
JH›ÝÈ\œ›ÜŠµçµåµå5å5å5åµçµè5å5ç5ä5êµéõæuçÈŠNÂˆ™]\›ˆYÂˆJKYÙ]Ú\™TÝˆ
ÙH˜YÙ]Ú\™TÝ
HOH[ÈÙˆ[\›Ý™YÜ[Û’YÎˆÙ[XÝYNÂˆ›Üˆ
ÛÛœÝÙ^HÙˆÈ˜Ü™X]Y]‹œ™]šY]ÙY]—JHYˆ
ÚÙ^WHOOH›ÚY
HÂˆYˆ
\[ÙˆÚÙ^WHOOHœÝš[™ÈˆS[X™\‹š\Ñš[š]J]Kœ\œÙJÚÙ^WJJJH›ÝÈ\œ›ÜŠµêµä5ê5æuæˆ5å5éµèµå5ç5ä5êµéõæuçÈŠNÂˆÝ]ÚÙ^WHHÚÙ^WNÂˆBˆ™]\›ˆÝ]ÂˆJNÂˆBˆ[˜Ý[Ûˆ]\Ý›ÜÜØ[
Ù][™ÜÌ‹Ø]YÛÜžJHÂˆ™]\›ˆË‹‹œÙ][™ÜÌ‹˜›ÛÚÚ[™ÔÛXÞT›ÜÜØ[È×WKœ™]™\œÙJ
K™š[™


HOˆ˜Ø]YÛÜžHOOHØ]YÛÜžJH[ÂˆBˆ[˜Ý[ÛˆØ]YÛÜžPYÙ]
Ù][™ÜÌ‹›ÜÜØ[
HÂˆÛÛœÝÝ[H[X™\ŠÙ][™ÜÌ‹˜YÙ]
NÂˆ™]\›ˆÝ[ˆ	‰ˆ
›ÜÜØ[OH[È›ÚYˆ›ÜÜØ[˜YÙ]Ú\™TÝ
HOOH[	‰ˆ
›ÜÜØ[OH[È›ÚYˆ›ÜÜØ[˜YÙ]Ú\™TÝ
HOOH›ÚYÈX]œ›Ý[™
Ý[
ˆ›ÜÜØ[˜YÙ]Ú\™TÝ
HÈLˆ[ÂˆBˆ˜\ˆØY™TÛÝ\˜ÙHH
\›
HOˆÂˆžHÂˆÛÛœÝHH™]ÈT“
\›
NÂˆ™]\›ˆÈšÎˆ‹šˆ—Kš[˜ÛY\ÊKœ›ÝØÛÛ
HÈKš™YˆˆˆŽÂˆHØ]Ú
JHÂˆ™]\›ˆˆŽÂˆBˆNÂˆ˜\ˆ[Û™^MHH
ŠHOˆ™]È[“[X™\‘›Ü›X]
šKRS‹ÈÝ[Nˆ˜Ý\œ™[˜ÞH‹Ý\œ™[˜ÞNˆ’SÈ‹X^[][Qœ˜XÝ[Û‘YÚ]ÎˆJK™›Ü›X]
ŠNÂˆ[˜Ý[Ûˆ™]šY]ÓX\šÝ\
][\ËÙ][™ÜÌ‹Ù[XÝY
HÂˆÛÛœÝØ]YÛÜšY\ÌˆHË‹‹‹Êˆ×ÔT‘W×È
‹È™]ÈÙ]
Ë‹‹š][\Ë™š[\Š

HOˆšÚ[™OOH˜›ÛÚÚ[™ÈŠK›X\


HOˆÂˆ˜\ˆØMÂˆ™]\›ˆ

ØMHœ^[ØY\JHOH[È›ÚYˆØMš[J
JHµç5ç5ä5éõæ5äµåuê5æuåŽÂˆJK‹‹ŠÙ][™ÜÌ‹˜›ÛÚÚ[™ÔÛXÞT›ÜÜØ[È×JK›X\


HOˆ˜Ø]YÛÜžJWJWK™š[\Š
ÊHOˆÙ[XÝYOOH[ÈOOHÙ[XÝY
NÂˆ™]\›ˆ	Ï]ˆÛ\ÜÏHœÛXÞK\™]šY]ËZ[›ÈÏµä5é5êuê5åuæuåuêˆ5êuå5èuåuæõçÈ5çµéµä8 %5ç5ä5æuêuåuê5æÚÏµå5èuåuæõçÈ5æuéµæuäˆ5ä5é5êuê5åuæuåuêˆ5åuæuçµç5æuéH5èµç5äuåõæuê5åuê‹ˆ5èµäuåuê5èµç5æuå5çÈ5åuèuçµçÈ5ä5êˆ5å5ä5é5êuê5åuæuåuêˆ5å5çµéõåuäuç5åuêˆ5èµç5æuæ‹ˆ5ä5æuêuåuê5æõä5çÈ5çµä5êuê5ä5êˆ5ä5é5êuê5åuæuåuêˆ5å5çµäõæuè5æuåuêˆ5äuç5äuäËÜÝ›Û™ÏµêµéõéµæuäH5å5æ5æuåuçˆ	È
È
Ù][™ÜÌ‹˜YÙ]ˆÈ[Û™^MJÙ][™ÜÌ‹˜YÙ]
Hˆµæ5ê5çH5å5åuäµäõê8 %5æuêH5ç5èµäõæõçÈ5äuå5äµäõê5åuêˆ5å5æ5æuåuçŠH
È	ÏÜÝ›Û™ÏÜÙ]]ˆÛ\ÜÏHœÛXÞK\™]šY]ÜÈ‰È
ÈØ]YÛÜšY\Ì‹›X\

Ø]YÛÜžJHOˆÂˆÛÛœÝH]\Ý›ÜÜØ[
Ù][™ÜÌ‹Ø]YÛÜžJNÂˆYˆ
\
H™]\›ˆ	Ï\XÛHÛ\ÜÏH˜Ø\™Ï‰È
È\ØÌŒ
Ø]YÛÜžJH
È	ÏÚÏÛ\ÜÏH›]]Yµæ5ê5çH5å5êµéõäuç5åH5ä5é5êuê5åuæuåuêˆ5çµå5èuåuæõçÈ5èµäuåuê5éõæ5äµåuê5æuå5åµåKÜØ\XÛO‰ÎÂˆÛÛœÝ[™[™ÈHÈœÛXÞWÝ\]Y‹˜]ØZ][™×Ø\›Ý˜[—Kš[˜ÛY\ÊœÝ]JKYÙ]HØ]YÛÜžPYÙ]
Ù][™ÜÌ‹
NÂˆ™]\›ˆ	Ï\XÛHÛ\ÜÏH˜Ø\™Ü[ˆÛ\ÜÏH˜˜YÙH‰È
ÈÈÛXÞWÝ\]Yˆµçµäõæuè5æuåuêˆ5å5åµçµè5å5èµåuäõæõè5å‹]ØZ][™×Ø\›Ý˜[ˆµçµçµêµæuçÈ5ç5ä5æuêuåuê5æˆ‹\›Ý™Yˆµå5äuåõæuê5åuêˆ5ä5åuêuê5åH‹™Z™XÝYˆµå5å5éµèµå5è5äõåõêµåˆVÜœÝ]WH
ÈÜÜ[Ïˆˆ
È\ØÌŒ
Ø]YÛÜžJH
ÈÚÏˆˆ
È
˜YÙ]Ú\™TÝOOH[	‰ˆ˜YÙ]Ú\™TÝOOH›ÚYÈ
[™[™ÈÈµå5éõéµä5å5çµåuéµèµêŽˆˆˆµå5éõéµä5êˆ5éõæ5äµåuê5æuåˆŠH
È\ØÌŒ
˜YÙ]Ú\™TÝ
H
È‰H5çµêµéõéµæuäH5å5æ5æuåuçˆ
È
YÙ]OOH[Èˆ8 %ˆ
È[Û™^MJYÙ]
Hˆˆ8 %5å5èuæõåuçH5æuåõåuêuäH5ç5ä5åõê5å5äµäõê5êˆ5å5êµéõéµæuäHŠHˆµåõç5åuéõêˆ5å5êµéõéµæuäH5ç5éõæ5äµåuê5æuå5æ5ê5çH5å5åuéµèµåŠH
È	ÏÜ›Ü›H]K\ÛXÞK\™]šY]ÏH‰È
È\ØÌŒ
šY
H
È	È‰È
È›Ü[ÛœË›X\

ÊHOˆ	ÏX™[Û\ÜÏHœÛXÞK[Ü[Ûˆ[œ]\OH˜ÚXÚØ›Þˆ˜[YOH›Ü[Ûˆˆ˜[YOH‰È
È\ØÌŒ
ËšY
H
È	Èˆ	È
È

[™[™ÈÈËœ™XÛÛ[Y[™Yˆ
˜\›Ý™YÜ[Û’YÈ×JKš[˜ÛY\ÊËšY
JHÈ˜ÚXÚÙYˆˆˆŠH
È
[™[™ÈÈˆˆˆ™\ØX›YŠH
ÈÜ[Ý›Û™Ïˆˆ
È\ØÌŒ
Ë›X™[
H
ÈÜÝ›Û™Ïˆˆ
È
Ëœ™XÛÛ[Y[™YÈ	ÏÜ[ˆÛ\ÜÏH˜˜YÙHµå5èuåuæõçÈ5çµçµç5æuéOÜÜ[‰ÈˆˆŠH
ÈÜ[ˆˆ
È\ØÌŒ
Ë™]Z[ÊH
ÈÜÜ[ˆˆ
È
Ë™\Ý[X]YÛÜÝOOH›ÚYÈÜ[µèµç5åuêˆ5çµêuåuèµê5êŽˆˆ
È[Û™^MJË™\Ý[X]YÛÜÝ
H
Èˆˆ
ÈÈ›ÛÚÚ[™Îˆµç5å5åµçµè5å‹šYÚˆµç5ç5æuç5å‹^Nˆµç5æuåuçH‹\œÛÛŽˆµç5ä5äõçHˆVÛË˜ÛÜÝ˜\Ú\È˜›ÛÚÚ[™È—H
ÈÜÜ[ˆˆˆˆŠH
È
ØY™TÛÝ\˜ÙJËœÛÝ\˜ÙU\›
HÈ	ÏH™YH‰È
È\ØÌŒ
ØY™TÛÝ\˜ÙJËœÛÝ\˜ÙU\›
JH
È	Èˆ\™Ù]H—Ø›[šÈˆ™[H››ÛÜ[™\ˆ›Ü™Y™\œ™\ˆµäuäõæuéõêˆ5å5çµéõåuêØO‰ÈˆˆŠH
ÈÜÜ[ÛX™[ˆŠKš›Ú[ŠˆŠH
È
[™[™È	‰ˆ›Ü[ÛœË›[™ÝÈ	Ï]ˆÛ\ÜÏHœ›ÝÈ]Ûˆ\OHœÝX›Z]µä5êuê5ä5êˆ5å5ä5é5êuê5åuæuåuêˆ5êuèuæuçµè5êµæOØ]Û]Ûˆ\OH˜]Ûˆˆ]K\™Z™XÝ\ÛXÞOH‰È
È\ØÌŒ
šY
H
È	ÈˆÛ\ÜÏH™[™Ù\ˆµäõåõå5å5éµèµåØ]ÛÙ]‰ÈˆˆŠH
È	Ï]K\ÛXÞKY™YY˜XÚÈ›ÛOHœÝ]\Èˆ\šXK[]™OHœÛ]HÜÙ›Ü›OØ\XÛO‰ÎÂˆJKš›Ú[ŠˆŠH
ÈÙ]ˆŽÂˆB‚ˆËÈÜ˜ËØ›ÛÚÚ[™Ë\ÛXÚY\ËšœÂˆ˜\ˆÚÚXÙ\ÈHÈYÙ]˜\Ú\ÎˆÖÈ˜›ÛÚÚ[™È‹µç5æõç5å5å5åµçµè5å—KÈ›šYÚ‹µç5ç5æuç5å—KÈ™^H‹µç5æuåuçH—KÈœ\œÛÛˆ‹µç5ä5äõçH—WKØ[˜Ù[][ÛŽˆÖÈˆ‹µç5ä5å5åuäµäõê—KÈ™œ™YWÜ™\]Z\™Y‹µäuæuæ5åuç5ç5ç5ä5èµç5åuêˆ8 %5åõåuäuå—KÈ™›^X›WÜ™\]Z\™Y‹µä5é5êuê5åuêˆ5äuæuæ5åuç5äµçµæuêuå8 %5åõåuäuå—KÈ™›^X›WÜ™Y™\œ™Y‹µèµäõæué5åuêˆ5ç5äuæuæ5åuç5äµçµæuêH—WK›ÛÛU\NˆÖÈˆ‹µç5ä5å5åuäµäõê—KÈœÚ[™ÛH‹µåõäõê5ç5æuåõæuäÈ—KÈ™ÝX›H‹µåõäõê5åµåuäµæH—KÈœÝZ]H‹µèuåuåuæuæ5å—WKœ™XZÙ˜\ÝˆÖÈˆ‹µç5ä5å5åuäµäõê—KÈœ™\]Z\™Y‹µåõåuäuå5ç5æõç5åuç—KÈœ™Y™\œ™Y‹µèµäõæué5åuêˆ5ç5æõç5åuç—KÈ››ÝÛ™YYY‹µä5æuçÈ5éµåuê5æˆ—WKÝÙ\™YšZÙNˆÖÈˆ‹µç5ä5å5åuäµäõê—KÈœ™\]Z\™Y‹µä5åué5è5åuèˆ5çµåuè5çµæˆ8 %5åõåuäuå—KÈœ™Y™\œ™Y‹µèµäõæué5åuêˆ5ç5ä5åué5è5åuèˆ5çµåuè5çµæˆ—WKXÚÝ\ˆÖÈˆ‹µç5ä5å5åuäµäõê—KÈœ™\]Z\™Y‹µä5æuèuåuèÈ5çµå5çµç5åuçÈ8 %5åõåuäuå—KÈœ™Y™\œ™Y‹µèµäõæué5åuêˆ5ç5ä5æuèuåuèÈ—WHNÂˆ˜\ˆÛXÞQY˜][ÈHÈX^YÙ]ˆ[YÙ]˜\Ú\Îˆ˜›ÛÚÚ[™È‹Ø[˜Ù[][ÛŽˆˆ‹]T[\Îˆˆ‹›ÛÛU\Nˆˆ‹ÝY\ÝÎˆ[œ™XZÙ˜\Ýˆˆ‹ÝÙ\™YšZÙNˆˆ‹šZÙS[Ù[ˆˆ‹X^ÙX]ZYÚÛNˆ[˜YÙØYÙRÙÎˆ[X^ÛÛ›™XÝ[ÛœÎˆ[XÚÝ\ˆˆ‹™\]Z\™Y›Ý\Îˆˆ‹™Y™\œ™Y›Ý\Îˆˆ‹œ™YU^ˆˆˆNÂˆ[˜Ý[ÛˆÛXÞQšY[ÊØ]YÛÜžJHÂˆÛÛœÝˆHÖÈ˜Ø[˜Ù[][Ûˆ‹µçµäõæuè5æuåuêˆ5äuæuæ5åuç‹œÙ[XÝ—KÈ™]T[\È‹µçµäµäuç5åuêˆ5êµä5ê5æuæõæuçK5æuçµæH5êuäuåuèˆ5åuåõäµæuçH‹^\™XH—WNÂˆYˆ
õçµç5åuçß5ç5æuè5åË\Ý
Ø]YÛÜžJJH‹œ\Ú
Èœ›ÛÛU\H‹µèuåuäˆ5å5åõäõê‹œÙ[XÝ—KÈ™ÝY\ÝÈ‹µçµèué5ê5ä5åuê5åõæuçH‹›[X™\ˆ—KÈ˜œ™XZÙ˜\Ý‹µä5ê5åuåõêˆ5äuåuéõê‹œÙ[XÝ—JNÂˆYˆ
õä5åué5è5åuèŸ5ê5æõäKË\Ý
Ø]YÛÜžJJH‹œ\Ú
È›ÝÙ\™YšZÙH‹µä5åué5è5åuèˆ5çµåuè5çµæˆ‹œÙ[XÝ—KÈ˜šZÙS[Ù[‹µäõäµçH5çµäuåuéõêHÈ5åõç5åué5åuêˆ5çµåuêµê5åuêˆ‹^—KÈ›X^ÙX]ZYÚÛH‹µäµåuäuå5çµåuêuäH5çµê5äuæH5äuèuí5çˆ‹›[X™\ˆ—JNÂˆYˆ
õæ5æuèKË\Ý
Ø]YÛÜžJJH‹œ\Ú
È˜˜YÙØYÙRÙÈ‹µæõäuåuäõå5è5äõê5êuêˆ5äuéõí5äˆ‹›[X™\ˆ—KÈ›X^ÛÛ›™XÝ[ÛœÈ‹µçµèué5ê5éõåuè5éõêuè5æuçH5çµê5äuæH‹›[X™\ˆ—JNÂˆYˆ
õé5èµæuç5åuêŸ5èuæuåuê5êµåõäuåuê5åË\Ý
Ø]YÛÜžJJH‹œ\Ú
ÈœXÚÝ\‹µä5æuèuåuèÈ5çµå5çµç5åuçÈ‹œÙ[XÝ—JNÂˆ™]\›ˆË‹‹™‹Èœ™\]Z\™Y›Ý\È‹µäõê5æuêuåuêˆ5åõåuäuå5è5åuèué5åuêˆ‹^\™XH—KÈœ™Y™\œ™Y›Ý\È‹µå5èµäõé5åuêˆ8 %5ä5é5êuê5ç5å5êµé5êuê5èµç5æuå5çÈ‹^\™XH—KÈ™œ™YU^‹µæ5éõèuæ5åõåué5êuæH5åuå5è5åõæuåuêˆ5è5åuèué5åuêˆ5ç5èuåuæõçÈ‹^\™XH—WK›X\

ÚÙ^KX™[\WJHOˆ
ÈÙ^KX™[ˆX™[\KÜ[ÛœÎˆÚÚXÙ\ÖÚÙ^WHJJNÂˆBˆ[˜Ý[Ûˆ˜[Y]TÛXÞJ[œ]
HÂˆ˜\ˆØMÂˆYˆ
Z[œ]\[Ùˆ[œ]OOH›Øš™XÝˆ\œ˜^Kš\Ð\œ˜^J[œ]
H\[Ùˆ[œ]˜Ø]YÛÜžHOOHœÝš[™ÈˆZ[œ]˜Ø]YÛÜžKš[J
H[œ]˜Ø]YÛÜžKš[J
K›[™ÝˆL
H›ÝÈ\œ›ÜŠµæuêH5ç5å5åµæuçÈ5éõæ5äµåuê5æuå5èµäÈL5êµåuåuæuçHŠNÂˆÛÛœÝÝ]HÈØ]YÛÜžNˆ[œ]˜Ø]YÛÜžKš[J
HNÂˆ›Üˆ
ÛÛœÝÚÙ^K˜[˜XÚ×HÙˆØš™XÝ™[šY\ÊÛXÞQY˜][ÊJHÂˆ]˜[YLˆH
ØMH[œ]ÚÙ^WJHOH[ÈØMˆ˜[˜XÚÎÂˆYˆ
˜[˜XÚÈOOH[
HÂˆYˆ
˜[YLˆOOHˆŠH˜[YLˆH[ÂˆYˆ
˜[YLˆOOH[	‰ˆ
\[Ùˆ˜[YLˆOOH›[X™\ˆˆS[X™\‹š\Ñš[š]J˜[YLŠH˜[YLˆ
JH›ÝÈ\œ›ÜŠµèµê5æˆ5çµèué5ê5æH5ç5ä5êµéõæuçÈ5äuçµäõæuè5æuåuêˆŠNÂˆYˆ
È™ÝY\ÝÈ‹›X^ÛÛ›™XÝ[ÛœÈ—Kš[˜ÛY\ÊÙ^JH	‰ˆ˜[YLˆOOH[	‰ˆS[X™\‹š\Ò[YÙ\Š˜[YLŠJH›ÝÈ\œ›ÜŠµçµèué5ê5ä5åuê5åõæuçH5åuéõåuè5éõêuè5æuçH5åõæuæuäH5ç5å5æuåuêˆ5êuç5çHŠNÂˆYˆ
Ù^HOOH™ÝY\ÝÈˆ	‰ˆ˜[YLˆOOH
H›ÝÈ\œ›ÜŠµçµèué5ê5ä5åuê5åõæuçH5åõæuæuäH5ç5å5æuåuêˆ5åõæuåuäuæHŠNÂˆH[ÙHÂˆYˆ
\[Ùˆ˜[YLˆOOHœÝš[™Èˆ˜[YL‹›[™ÝˆYM
H›ÝÈ\œ›ÜŠµæ5éõèuæ5å5çµäõæuè5æuåuêˆ5ä5æuè5åH5êµéõæuçÈŠNÂˆ˜[YLˆH˜[YL‹š[J
NÂˆYˆ
ÚÚXÙ\ÖÚÙ^WH	‰ˆXÚÚXÙ\ÖÚÙ^WKœÛÛYJ
ÚYJHOˆYOOH˜[YLŠJH›ÝÈ\œ›ÜŠµäuåõæuê5å5ç5ä5êµéõæuè5å5äuçµäõæuè5æuåuêˆŠNÂˆBˆÝ]ÚÙ^WHH˜[YLŽÂˆBˆYˆ
[œ]\]Y]OOH›ÚY
HÂˆYˆ
\[Ùˆ[œ]\]Y]OOHœÝš[™ÈˆS[X™\‹š\Ñš[š]J]Kœ\œÙJ[œ]\]Y]
JJH›ÝÈ\œ›ÜŠµêµä5ê5æuæˆ5çµäõæuè5æuåuêˆ5ç5ä5êµéõæuçÈŠNÂˆÝ]\]Y]H[œ]\]Y]ÂˆBˆ™]\›ˆÝ]ÂˆBˆ[˜Ý[Ûˆ˜[Y]TÛXÚY\ÊÛXÚY\ÊHÂˆYˆ
P\œ˜^Kš\Ð\œ˜^JÛXÚY\ÊHÛXÚY\Ë›[™ÝˆŒ
H›ÝÈ\œ›ÜŠµê5êuæuçµêˆ5çµäõæuè5æuåuêˆ5ç5ä5êµéõæuè5åŠNÂˆÛÛœÝÙY[ˆHÊˆ×ÔT‘W×È
‹È™]ÈÙ]

NÂˆ™]\›ˆÛXÚY\Ë›X\


HOˆÂˆÛÛœÝˆH˜[Y]TÛXÞJ
KÙ^HH‹˜Ø]YÛÜžKÓÝÙ\Ø\ÙJ
NÂˆYˆ
ÙY[‹š\ÊÙ^JJH›ÝÈ\œ›ÜŠµçµäõæuè5æuåuêˆ5æõé5åuç5å5ç5ä5åuêµå5éõæ5äµåuê5æuåŠNÂˆÙY[‹˜Y
Ù^JNÂˆ™]\›ˆŽÂˆJNÂˆBˆ˜\ˆ\ØÌŒHH
ŠHOˆÝš[™ÊˆOH[ÈˆˆˆŠKœ™\XÙJÖÉˆ‰×KÙË
ÊHOˆ
È‰ˆŽˆ‰˜[\È‹Žˆ‰›È‹ˆŽˆ‰™ÝÈ‹	È‰Îˆ‰œ][ÝÈ‹‰ÈŽˆ‰ˆÌÎNÈˆJVØ×JNÂˆ[˜Ý[ÛˆÛXÚY\ÓX\šÝ\
][\ËÛXÚY\ËÙ[XÝYÙ][™ÜÌˆHÈYÙ]ˆJHÂˆÛÛœÝ˜[Y\ÈHË‹‹‹Êˆ×ÔT‘W×È
‹È™]ÈÙ]
Ë‹‹š][\Ë™š[\Š

HOˆšÚ[™OOH˜›ÛÚÚ[™ÈŠK›X\


HOˆÂˆ˜\ˆØMÂˆ™]\›ˆ

ØMHœ^[ØY\JHOH[È›ÚYˆØMš[J
JHµç5ç5ä5éõæ5äµåuê5æuåŽÂˆJK‹‹œÛXÚY\Ë›X\


HOˆ˜Ø]YÛÜžJWJWKœÛÜ

KŠHOˆK›ØØ[PÛÛ\\™J‹šHŠJNÂˆÛÛœÝš\ÚX›HHÙ[XÝYOOH[È˜[Y\Èˆ˜[Y\Ë™š[\Š
ŠHOˆˆOOHÙ[XÝY
NÂˆ™]\›ˆ™]šY]ÓX\šÝ\
][\ËÙ][™ÜÌ‹Ù[XÝY
H
È	Ï]Z[ÈÛ\ÜÏHœÛXÞK\™Y™\™[˜Ù\ÈÝ[[X\žOµå5è5åõæuåuêˆ5åuå5èµäõé5åuêˆ5ê5ä5êuåuè5æuåuêˆ5ç5éõæ5äµåuê5æuåuêÜÝ[[X\žO]ˆÛ\ÜÏH˜Ø\™ÈÛXÞKXØ\™È‰È
Èš\ÚX›K›X\

Ø]YÛÜžJHOˆÂˆÛÛœÝHÛXÚY\Ë™š[™


HOˆ˜Ø]YÛÜžHOOHØ]YÛÜžJNÂˆÛÛœÝ]Z[ÈHÈÛXÞQšY[ÊØ]YÛÜžJK™š[\Š
ŠHOˆÙ‹šÙ^WHOOH[	‰ˆÙ‹šÙ^WHOOHˆˆ	‰ˆ‹šÙ^HOOH˜YÙ]˜\Ú\ÈŠK›X\

ŠHOˆÂˆ˜\ˆØMØ‹ØËÙÂˆ]˜[YLˆH
ØÈH
ØˆH
ØMH‹›Ü[ÛœÊHOH[È›ÚYˆØM™š[™

ÚYJHOˆYOOHÙ‹šÙ^WJJHOH[È›ÚYˆØ–ÌWJHOH[ÈØÈˆÙ‹šÙ^WNÂˆYˆ
‹šÙ^HOOH›X^YÙ]ŠH˜[YLˆH™]È[“[X™\‘›Ü›X]
šKRS‹ÈÝ[Nˆ˜Ý\œ™[˜ÞH‹Ý\œ™[˜ÞNˆ’SÈˆJK™›Ü›X]
˜[YLŠH
Èˆˆ
È

ÙHÚÚXÙ\Ë˜YÙ]˜\Ú\Ë™š[™

ÚYJHOˆYOOH˜YÙ]˜\Ú\ÊJHOH[È›ÚYˆÙÌWJNÂˆ™]\›ˆ]ˆˆ
È‹›X™[
ÈÙˆˆ
È\ØÌŒJ˜[YLŠH
ÈÙÙ]ˆŽÂˆJKš›Ú[ŠˆŠHˆˆŽÂˆ™]\›ˆ	Ï\XÛHÛ\ÜÏH˜Ø\™ÛXÞKXØ\™Ü[ˆÛ\ÜÏH˜˜YÙH‰È
È
Èµå5è5åõæuåuêˆ5ê5ä5êuåuè5æuåuêˆˆˆµç5ç5ä5å5è5åõæuåuêˆ5ê5ä5êuåuè5æuåuêˆŠH
ÈÜÜ[Ïˆˆ
È\ØÌŒJØ]YÛÜžJH
ÈÚÏˆˆ
È
]Z[ÈÈ	ÏÛ\ÜÏHœ™XÛÜ™[Y]H‰È
È]Z[È
ÈÙˆˆˆ	ÏÛ\ÜÏH›]]Yµä5é5êuê5ç5å5åuèuæuèÈ5å5è5åõæuåuêˆ5ê5ä5êuåuè5æuåuêˆ5êuæuèµåµê5åH5ç5èuåuæõçÈ5ç5çµéµåuä5ä5é5êuê5åuæuåuê‹Ü‰ÊH
È	Ï]Ûˆ\OH˜]Ûˆˆ]K\ÛXÞKXØ]YÛÜžOH‰È
È\ØÌŒJØ]YÛÜžJH
È	È‰È
È
Èµèµê5æuæõêˆ5å5è5åõæuåuêˆˆˆµå5åuèuèÈ5å5è5åõæuåuêˆŠH
ÈØ]ÛØ\XÛOˆŽÂˆJKš›Ú[ŠˆŠH
ÈÙ]ˆˆ
È
š\ÚX›K›[™ÝÈˆˆˆµç5åõéH5èµç5í5çµäõæuè5æuåuêˆ5åõäõêuå5í5æõäõæH5ç5å5äµäõæuê5êµè5ä5æuçH5ç5éõæ5äµåuê5æuå5å5ê5ä5êuåuè5åÜˆŠH
ÈÙ]Z[ÏˆŽÂˆBˆ[˜Ý[ÛˆÛXÞQ›Ü›SX\šÝ\
Ø]YÛÜžKÛXÞJHÂˆÛÛœÝH×ÜÜ™XY˜[Y\Ê×ÜÜ™XY˜[Y\ÊßKÛXÞQY˜][ÊKÛXÞJNÂˆ™]\›ˆÛXÞQšY[ÊØ]YÛÜžJK›X\

ŠHOˆX™[ˆˆ
È‹›X™[
È
‹\HOOHœÙ[XÝˆÈ	ÏÙ[XÝ˜[YOH‰È
È‹šÙ^H
È	È‰È
È‹›Ü[ÛœË›X\

ÚYX™[JHOˆ	ÏÜ[Ûˆ˜[YOH‰È
ÈY
È	Èˆ	È
È
Ù‹šÙ^WHOOHYÈœÙ[XÝYˆˆˆŠH
Èˆˆ
ÈX™[
ÈÛÜ[ÛˆŠKš›Ú[ŠˆŠH
ÈÜÙ[XÝˆˆˆ‹\HOOH^\™XHˆÈ	Ï^\™XH˜[YOH‰È
È‹šÙ^H
È	È‰È
È\ØÌŒJÙ‹šÙ^WJH
ÈÝ^\™XOˆˆˆ	Ï[œ]˜[YOH‰È
È‹šÙ^H
È	Èˆ\OH‰È
È‹\H
È	Èˆ˜[YOH‰È
È\ØÌŒJÙ‹šÙ^WJH
È	Èˆ	È
È
‹\HOOH›[X™\ˆˆÈ	ÛZ[HŒˆÝ\H˜[žH‰ÈˆˆŠH
ÈˆŠH
ÈÛX™[ˆŠKš›Ú[ŠˆŠNÂˆB‚ˆËÈÜ˜ËØ˜XÚÝ\šœÂˆ˜\ˆÛÛXÝ[ÛœÈHÈ›ÛÚÚ[™Îˆ˜›ÛÚÚ[™ÜÈ‹ÝÜˆœÝÜÈ‹XÙNˆœXÙ\È‹ÙX\Žˆ™ÙX\ˆ‹\ÚÎˆ\ÚÜÈˆNÂˆ˜\ˆÙ^\ÈHÈ›ÛÚÚ[™ÎˆÈ›˜[YH‹\H‹œÝ]\È‹œÝ\Y\ˆ‹˜ÛÜÝ‹œZY‹œ™Yˆ‹\›‹››Ý\È—KÝÜˆÈ™^H‹œXÙH‹šÚ[™‹\›‹››Ý\È‹›]‹›™È—KXÙNˆÈ›˜[YH‹\H‹˜\™XH‹\›‹››Ý\È—KÙX\ŽˆÈ›˜[YH‹˜Ø]YÛÜžH‹œÝ]\È‹\›‹™ÝZYH‹››Ý\È—K\ÚÎˆÈ]H‹™Û™H‹˜Ø]YÛÜžH—HNÂˆ[˜Ý[Ûˆ˜[Y]T^[ØY
Ú[™[œ]
HÂˆ˜\ˆØMØŽÂˆYˆ
ZÙ^\ÖÚÚ[™HZ[œ]\[Ùˆ[œ]OOH›Øš™XÝˆ\œ˜^Kš\Ð\œ˜^J[œ]
JH›ÝÈ\œ›ÜŠ’[˜[Y][HŠNÂˆÛÛœÝÝ]HßNÂˆ›Üˆ
ÛÛœÝÙ^HÙˆÚ[™OOH\ÚÈˆÈÈ™YQ]H—HˆÚ[™OOH˜›ÛÚÚ[™ÈˆÈÈ˜XÝ[Û‘YQ]H‹˜ÚXÚÒ[‘]H‹˜ÚXÚÓÝ]]H—Hˆ×JHÂˆÛÛœÝ˜[YLˆH[œ]ÚÙ^WNÂˆYˆ
˜[YLˆOOH›ÚY˜[YLˆOOHˆŠHÛÛ[YNÂˆYˆ
]˜[YØØ[]J˜[YLŠJH›ÝÈ\œ›ÜŠµêµä5ê5æuæˆ5ç5ä5êµéõæuçÈŠNÂˆÝ]ÚÙ^WHH˜[YLŽÂˆBˆYˆ
Ý]˜ÚXÚÒ[‘]H	‰ˆÝ]˜ÚXÚÓÝ]]H	‰ˆÝ]˜ÚXÚÓÝ]]HHÝ]˜ÚXÚÒ[‘]JH›ÝÈ\œ›ÜŠµêµä5ê5æuæˆ5æuéµæuä5å5åõæuæuäH5ç5å5æuåuêˆ5ä5åõê5æH5å5æõè5æuèuåŠNÂˆYˆ
È˜›ÛÚÚ[™È‹\ÚÈ—Kš[˜ÛY\ÊÚ[™
JHÂˆYˆ
[œ]ÛÜšÙ›ÝÔÝ]\ÈOOH›ÚY
HÂˆYˆ
]ÛÜšÙ›ÝÔÝ]\Ù\ËœÛÛYJ
ÚYJHOˆYOOH[œ]ÛÜšÙ›ÝÔÝ]\ÊJH›ÝÈ\œ›ÜŠ’[˜[YÛÜšÙ›ÝÈÝ]\ÈŠNÂˆÝ]ÛÜšÙ›ÝÔÝ]\ÈH[œ]ÛÜšÙ›ÝÔÝ]\ÎÂˆBˆYˆ
[œ]ÛÜšÙ›ÝÕ\]Y]OOH›ÚY
HÂˆYˆ
\[Ùˆ[œ]ÛÜšÙ›ÝÕ\]Y]OOHœÝš[™ÈˆS[X™\‹š\Ñš[š]J]Kœ\œÙJ[œ]ÛÜšÙ›ÝÕ\]Y]
JJH›ÝÈ\œ›ÜŠ’[˜[YÛÜšÙ›ÝÈ[Y\Ý[\ŠNÂˆÝ]ÛÜšÙ›ÝÕ\]Y]H[œ]ÛÜšÙ›ÝÕ\]Y]ÂˆBˆYˆ
[œ]ÛÜšÙ›ÝÕ\]YžHOOH›ÚY
HÂˆYˆ
VÈ\Ù\ˆ‹˜YÙ[—Kš[˜ÛY\Ê[œ]ÛÜšÙ›ÝÕ\]YžJJH›ÝÈ\œ›ÜŠ’[˜[YÛÜšÙ›ÝÈXÝÜˆŠNÂˆÝ]ÛÜšÙ›ÝÕ\]YžHH[œ]ÛÜšÙ›ÝÕ\]YžNÂˆBˆBˆ›Üˆ
ÛÛœÝÙ^HÙˆÙ^\ÖÚÚ[™JHÂˆÛÛœÝˆH[œ]ÚÙ^WNÂˆYˆ
Ú[™OOH\ÚÈˆ	‰ˆÙ^HOOH˜Ø]YÛÜžHˆ	‰ˆˆOOH›ÚY
HÛÛ[YNÂˆYˆ
Ù^HOOH›]ˆÙ^HOOH›™ÈŠHÛÛ[YNÂˆYˆ
Ù^HOOH™Û™HŠHÂˆYˆ
ˆOOH›ÚY	‰ˆ\[ÙˆˆOOH˜›ÛÛX[ˆŠH›ÝÈ\œ›ÜŠ’[˜[Y\ÚÈÝ]HŠNÂˆÝ]ÚÙ^WHHˆOH[Èˆˆ˜[ÙNÂˆÛÛ[YNÂˆBˆYˆ
È™^H‹˜ÛÜÝ‹œZY—Kš[˜ÛY\ÊÙ^JJHÂˆYˆ
ˆOOH[	‰ˆÙ^HOOH™^HŠHÂˆÝ]ÚÙ^WHH[ÂˆÛÛ[YNÂˆBˆÛÛœÝˆHˆOH[ÈˆˆÙ^HOOH™^HˆÈHˆÂˆYˆ
\[ÙˆˆOOH›[X™\ˆˆS[X™\‹š\Ñš[š]JŠHˆÙ^HOOH™^Hˆ	‰ˆ
S[X™\‹š\Ò[YÙ\ŠŠHˆHˆˆÍJJH›ÝÈ\œ›ÜŠ’[˜[Y[X™\ˆŠNÂˆÝ]ÚÙ^WHHŽÂˆÛÛ[YNÂˆBˆYˆ
ˆOOH›ÚY	‰ˆ\[ÙˆˆOOHœÝš[™ÈŠH›ÝÈ\œ›ÜŠ’[˜[Y^ŠNÂˆÝ]ÚÙ^WHHˆOH[ÈˆˆˆŽÂˆYˆ
Ý]ÚÙ^WK›[™ÝˆYM
H›ÝÈ\œ›ÜŠ•^ÛÈÛ™ÈŠNÂˆYˆ
È\›‹™ÝZYH—Kš[˜ÛY\ÊÙ^JH	‰ˆÝ]ÚÙ^WJHÂˆ]NÂˆžHÂˆHH™]ÈT“
Ý]ÚÙ^WJNÂˆHØ]Ú
JHÂˆ›ÝÈ\œ›ÜŠ’[˜[YT“ŠNÂˆBˆYˆ
VÈšÎˆ‹šˆ—Kš[˜ÛY\ÊKœ›ÝØÛÛ
JH›ÝÈ\œ›ÜŠ•[œØY™HT“ŠNÂˆBˆBˆYˆ
Ú[™OOHœÝÜŠHÂˆÛÛœÝ]H
ØMH[œ]›]
HOH[ÈØMˆˆ‹™ÈH
ØˆH[œ]›™ÊHOH[ÈØˆˆˆŽÂˆYˆ
\[Ùˆ]OOHœÝš[™Èˆ\[Ùˆ™ÈOOHœÝš[™ÈŠH›ÝÈ\œ›ÜŠ’[˜[YÛÛÜ™[˜]\ÈŠNÂˆYˆ
]š[J
H™Ëš[J
JHÂˆYˆ
[]š[J
H[™Ëš[J
HS[X™\‹š\Ñš[š]J[X™\Š]
JHS[X™\‹š\Ñš[š]J[X™\Š™ÊJHX]˜XœÊ[X™\Š]
JHˆLX]˜XœÊ[X™\Š™ÊJHˆN
H›ÝÈ\œ›ÜŠµéõåuä5åuê5äõæuè5æ5åuêˆ5ç5ä5êµéõæuè5åuêˆŠNÂˆÝ]›]H]š[J
NÂˆÝ]›™ÈH™Ëš[J
NÂˆBˆBˆÛÛœÝ]HHÚ[™OOHœÝÜˆÈÝ]œXÙHˆÚ[™OOH\ÚÈˆÈÝ]]HˆÝ]›˜[YNÂˆYˆ
J]HOH[È›ÚYˆ]Kš[J
JJH›ÝÈ\œ›ÜŠ“Z\ÜÚ[™È][H]HŠNÂˆ™]\›ˆÝ]ÂˆBˆ[˜Ý[Ûˆ˜[Y]TÙ][™ÜÊÊHÂˆYˆ
\È\[ÙˆÈOOH›Øš™XÝˆ\œ˜^Kš\Ð\œ˜^JÊJH›ÝÈ\œ›ÜŠ’[˜[YÙ][™ÜÈŠNÂˆÛÛœÝÈÝ\Hˆ‹^\ÈHŒKYÙ]HÝ\œ™[˜ÞHH’SÈˆHHÎÂˆ˜[Y]SY™XÞXÛTÙ][™ÜÊ×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßKÊKÈÝ\^\ÈJJNÂˆYˆ
\[ÙˆÝ\OOHœÝš[™ÈˆÝ\	‰ˆK×—ÍKWÌŸKWÌŸIË\Ý
Ý\
HS[X™\‹š\Ò[YÙ\Š^\ÊH^\ÈH^\ÈˆÍH\[ÙˆYÙ]OOH›[X™\ˆˆS[X™\‹š\Ñš[š]JYÙ]
HYÙ]Ý\œ™[˜ÞHOOH’SÈŠH›ÝÈ\œ›ÜŠ’[˜[YÙ][™ÜÈŠNÂˆYˆ
Ë[YV›Û™HOOH›ÚY	‰ˆ]˜[Y[YV›Û™JË[YV›Û™JJH›ÝÈ\œ›ÜŠµä5åµåuê5åµçµçÈ5ç5ä5êµéõæuçÈŠNÂˆ™]\›ˆ×ÜÜ™XY˜[Y\Ê×ÜÜ™XY˜[Y\Ê×ÜÜ™XY˜[Y\Ê×ÜÜ™XY˜[Y\Ê×ÜÜ™XY˜[Y\Ê×ÜÜ™XY˜[Y\Ê×ÜÜ™XY˜[Y\Ê×ÜÜ™XY˜[Y\ÊÈÝ\^\ËYÙ]Ý\œ™[˜ÞHKØš™XÝš\ÓÝÛŠËš\Ý]\ÈŠHÈÈš\Ý]\ÎˆËš\Ý]\ÈHˆßJKØš™XÝš\ÓÝÛŠËœ™]\›‘]HŠHÈÈ™]\›‘]NˆËœ™]\›‘]HHˆßJKË[YV›Û™HOOH›ÚYÈÈ[YV›Û™NˆË[YV›Û™HHˆßJKËœ™XY[™\ÜÔ™\]Z\™[Y[ÈOOH›ÚYÈÈ™XY[™\ÜÔ™\]Z\™[Y[Îˆ˜[Y]T™XY[™\ÜÔ™\]Z\™[Y[ÊËœ™XY[™\ÜÔ™\]Z\™[Y[ÊHHˆßJKË™^[œÙ\ÈOOH›ÚYÈÈ^[œÙ\Îˆ˜[Y]Q^[œÙ\ÊË™^[œÙ\ÊHHˆßJKËœ[›š[™Ñ˜YOOH›ÚYÈÈ[›š[™Ñ˜Yˆ˜[Y]T[›š[™Ñ˜Y
×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßKËœ[›š[™Ñ˜Y
KÈ[œ]ˆ×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßKËœ[›š[™Ñ˜Yš[œ]
KÈÝ\^\ËYÙ]JHJJHHˆßJKË˜›ÛÚÚ[™ÔÛXÚY\ÈOOH›ÚYÈÈ›ÛÚÚ[™ÔÛXÚY\Îˆ˜[Y]TÛXÚY\ÊË˜›ÛÚÚ[™ÔÛXÚY\ÊHHˆßJKË˜›ÛÚÚ[™ÔÛXÞT›ÜÜØ[ÈOOH›ÚYÈÈ›ÛÚÚ[™ÔÛXÞT›ÜÜØ[Îˆ˜[Y]T›ÜÜØ[ÊË˜›ÛÚÚ[™ÔÛXÞT›ÜÜØ[ÊHHˆßJNÂˆBˆ[˜Ý[Ûˆ\œÙP˜XÚÝ\
^ÊHÂˆ˜\ˆØMÂˆYˆ
\[Ùˆ^ÈOOHœÝš[™Èˆ^Ë›[™ÝˆYMŠH›ÝÈ\œ›ÜŠ˜XÚÝ\ÛÈ\™ÙHŠNÂˆÛÛœÝH”ÓÓ‹œ\œÙJ^ÊNÂˆYˆ
\\[ÙˆOOH›Øš™XÝˆ\œ˜^Kš\Ð\œ˜^J
JH›ÝÈ\œ›ÜŠ’[˜[Y˜XÚÝ\ŠNÂˆYˆ
œØÚ[XU™\œÚ[ÛˆOOH›ÚY	‰ˆVÌK—Kš[˜ÛY\ÊœØÚ[XU™\œÚ[ÛŠJH›ÝÈ\œ›ÜŠ•[œÝ\ÜY™\œÚ[ÛˆŠNÂˆÛÛœÝH
ØMH™]JHOH[ÈØMˆÂˆÛÛœÝÙ][™ÜÌˆH˜[Y]TÙ][™ÜÊœÙ][™ÜÊNÂˆ]][\ÈH×NÂˆYˆ
œØÚ[XU™\œÚ[ÛˆOOHŠHÂˆYˆ
P\œ˜^Kš\Ð\œ˜^Jš][\ÊJH›ÝÈ\œ›ÜŠ’[˜[Y][\ÈŠNÂˆ][\ÈHš][\Ë›X\


HOˆÂˆ˜\ˆØMNÂˆ™]\›ˆÈÚ[™ˆšÚ[™YØXÞWÚYˆ
ØMHH›YØXÞWÚY
HOH[ÈØMHˆšY^[ØYˆ˜[Y]T^[ØY
šÚ[™œ^[ØY
HNÂˆJNÂˆH[ÙH›Üˆ
ÛÛœÝÚÚ[™˜[YWHÙˆØš™XÝ™[šY\ÊÛÛXÝ[ÛœÊJHÂˆYˆ
P\œ˜^Kš\Ð\œ˜^JÛ˜[YWJJH›ÝÈ\œ›ÜŠ“Z\ÜÚ[™ÈÛÛXÝ[ÛˆŠNÂˆ][\Ëœ\Ú
‹‹™Û˜[YWK›X\


HOˆ
ÈÚ[™YØXÞWÚYˆOH[È›ÚYˆšY^[ØYˆ˜[Y]T^[ØY
Ú[™
HJJJNÂˆBˆYˆ
][\Ë›[™ÝˆYLÊH›ÝÈ\œ›ÜŠ•ÛÈX[žH][\ÈŠNÂˆÛÛœÝÙY[ˆHÊˆ×ÔT‘W×È
‹È™]ÈÙ]

NÂˆ›Üˆ
ÛÛœÝÙˆ][\ÊHÂˆYˆ
\[Ùˆ›YØXÞWÚYOOHœÝš[™Èˆ^›YØXÞWÚY›[™Ý›YØXÞWÚY›[™ÝˆŒ
H›ÝÈ\œ›ÜŠ’[˜[YÛÝ\˜ÙHQŠNÂˆÛÛœÝYH”ÓÓ‹œÝš[™ÚYžJÞšÚ[™›YØXÞWÚYJNÂˆYˆ
ÙY[‹š\ÊY
JH›ÝÈ\œ›ÜŠ‘\XØ]HÛÝ\˜ÙHQŠNÂˆÙY[‹˜Y
Y
NÂˆBˆ™]\›ˆÈÙ][™ÜÎˆÙ][™ÜÌ‹][\ÈNÂˆBˆ[˜Ý[Ûˆ™]šY]Ò[\Ü
^\Ý[™Ë[˜ÛÛZ[™ÊHÂˆÛÛœÝYÈH™]ÈÙ]
^\Ý[™Ë›X\


HOˆÂˆ˜\ˆØMÂˆ™]\›ˆ”ÓÓ‹œÝš[™ÚYžJÞšÚ[™
ØMH›YØXÞWÚY
HOH[ÈØMˆšYJNÂˆJJNÂˆ™]\›ˆÈYˆ[˜ÛÛZ[™Ë™š[\Š

HOˆZYËš\Ê”ÓÓ‹œÝš[™ÚYžJÞšÚ[™›YØXÞWÚYJJJKÚÚ\ˆ[˜ÛÛZ[™Ë™š[\Š

HOˆYËš\Ê”ÓÓ‹œÝš[™ÚYžJÞšÚ[™›YØXÞWÚYJJJHNÂˆBˆ[˜Ý[Ûˆ^Üš\
š\ŠHÂˆ™]\›ˆ”ÓÓ‹œÝš[™ÚYžJÈØÚ[XU™\œÚ[ÛŽˆ‹^ÜY]ˆ
Êˆ×ÔT‘W×È
‹È™]È]J
JKÒTÓÔÝš[™Ê
K]NˆÈ\Ý[˜][ÛŽˆÈ˜[YNˆš\‹™\Ý[˜][Û—Û˜[YHš\‹]Hˆ‹\ÐXÝ]™Nˆš\‹š\×ØXÝ]™HOOH˜[ÙHKÙ][™ÜÎˆš\‹œÙ][™ÜË][\Îˆš\‹š][\Ë›X\


HOˆÂˆ˜\ˆØMÂˆ™]\›ˆÈYˆšYYØXÞWÚYˆ
ØMH›YØXÞWÚY
HOH[ÈØMˆšYÚ[™ˆšÚ[™^[ØYˆœ^[ØYNÂˆJHHK[ŠNÂˆB‚ˆËÈÜ˜ËÜ[›š[™ËšœÂˆ˜\ˆ[˜Û\Ú[Û“X™[ÈHÈ›YÚÎˆµæ5æuèuåuêˆ‹ÙÚ[™Îˆµç5æuè5å‹˜[œÜÜˆµêµåõäuåuê5å5åuä5åué5è5åuèˆ‹›ÛÙˆµä5åuæõç‹XÝ]š]Y\Îˆµé5èµæuç5åuæuåuêˆ‹[œÝ\˜[˜ÙNˆµäuæuæ5åuåÈˆNÂˆ˜\ˆ[›š[™ÔÝ]\Ù\ÈHÈ]Y]YYˆµäuêµåuê5ç5êµæõè5åuçÈ‹™\ÙX\˜Ú[™Îˆµçµåõéõê5åuêµæõè5åuçÈ‹™XYNˆµêµæõè5åuçÈ5çµåuæõçÈ5ç5äuäõæuéõå‹ÛÛ\]Yˆµå5êµæõè5åuçÈ5è5åuèuèÈ5ç5ä5êµê‹Ø[˜Ù[Yˆµå5å5ê5éµå5äuåuæ5ç5å‹˜Z[Yˆµå5å5ê5éµå5è5æõêuç5å‹YÙ]Ù^]\ÝYˆµêµéõéµæuäH5å5èuåuæõçÈ5è5åuéµç‹™YY×Ù]Z[Îˆµè5äõê5êuæuçH5é5ê5æ5æuçH5è5åuèué5æuçHˆNÂˆ[˜Ý[Ûˆ^
˜[YL‹X^X™[
HÂˆYˆ
\[Ùˆ˜[YLˆOOHœÝš[™Èˆ]˜[YL‹š[J
H˜[YL‹›[™ÝˆX^
H›ÝÈ\œ›ÜŠµèµê5æˆ5ç5ä5êµéõæuçÎˆˆ
ÈX™[
NÂˆ™]\›ˆ˜[YL‹š[J
NÂˆBˆ[˜Ý[Ûˆ[J‹Z[‹X^X™[[YÙ\ŒˆH˜[ÙJHÂˆYˆ
\[ÙˆˆOOH›[X™\ˆˆS[X™\‹š\Ñš[š]JŠHˆZ[ˆˆˆX^[YÙ\Œˆ	‰ˆS[X™\‹š\Ò[YÙ\ŠŠJH›ÝÈ\œ›ÜŠµèµê5æˆ5ç5ä5êµéõæuçÎˆˆ
ÈX™[
NÂˆ™]\›ˆŽÂˆBˆ[˜Ý[Ûˆ]LÊŠHÂˆYˆ
\[ÙˆˆOOHœÝš[™ÈˆK×—ÍKWÌŸKWÌŸIË\Ý
ŠHS[X™\‹š\Ñš[š]J]Kœ\œÙJŠJH™]È]JŠKÒTÓÔÝš[™Ê
KœÛXÙJL
HOOHŠH›ÝÈ\œ›ÜŠµêµä5ê5æuæˆ5ç5ä5êµéõæuçÈŠNÂˆ™]\›ˆŽÂˆBˆ[˜Ý[Ûˆ˜[Y]T[›š[™Ò[œ]
˜]ÊHÂˆYˆ
\˜]È\[Ùˆ˜]ÈOOH›Øš™XÝˆ\œ˜^Kš\Ð\œ˜^J˜]ÊJH›ÝÈ\œ›ÜŠµè5êµåuè5æH5êµæõè5åuçÈ5åõèuê5æuçHŠNÂˆÛÛœÝHÈÝ\ˆ]LÊ˜]ËœÝ\
HNÂˆ›Üˆ
ÛÛœÝÚÙ^KZ[‹X^HÙˆÖÈ™^\È‹KLKÈ™X\›Y\‘^\È‹ŒKÈ›]\‘^\È‹ŒKÈœÚÜ\‘^\È‹ÌKÈ›Û™Ù\‘^\È‹ÌKÈ˜]™[\œÈ‹KŒKÈœ›ÛÛ\È‹KŒKÈœ[“[Z]YÛÜ›Ý‹KLWJHÚÙ^WHH[J˜]ÖÚÙ^WKZ[‹X^Ù^KYJNÂˆYˆ
œÚÜ\‘^\ÈH™^\È™^\È
È›Û™Ù\‘^\ÈˆLœ›ÛÛ\Èˆ˜]™[\œÊH›ÝÈ\œ›ÜŠµäuäõåuéÈ5ä5êˆ5çµêuæˆ5å5æ5æuåuç5åuçµèué5ê5å5åõäõê5æuçHŠNÂˆ˜YÙ]H[J˜]Ë˜YÙ]KYM‹µêµéõéµæuäHŠNÂˆ˜YÙ]]šX][Û”ÝH[J˜]Ë˜YÙ]]šX][Û”ÝLµåõê5æuäµåŠNÂˆ™\\\™HH^
˜]Ë™\\\™KLµçµåuéµäŠNÂˆYˆ
VÈ›[ÝÜ˜ÞXÛH‹˜Ø\ˆ‹œX›XÈ‹›Z^Y—Kš[˜ÛY\Ê˜]Ë˜[œÜÜ
JH›ÝÈ\œ›ÜŠµä5çµéµèµæH5êµåõäuåuê5å5åõèuêŠNÂˆ˜[œÜÜH˜]Ë˜[œÜÜÂˆYˆ
P\œ˜^Kš\Ð\œ˜^J˜]Ëš[˜ÛY\ÊH\˜]Ëš[˜ÛY\Ë›[™Ý˜]Ëš[˜ÛY\ËœÛÛYJ
ÊHOˆSØš™XÝš\ÓÝÛŠ[˜Û\Ú[Û“X™[ËÊJH™]ÈÙ]
˜]Ëš[˜ÛY\ÊKœÚ^™HOOH˜]Ëš[˜ÛY\Ë›[™Ý
H›ÝÈ\œ›ÜŠµäuåõê5çµå5è5æõç5ç5äuêµéõéµæuäHŠNÂˆš[˜ÛY\ÈHË‹‹œ˜]Ëš[˜ÛY\×NÂˆYˆ
\[Ùˆ˜]Ëœ™Y™\™[˜Ù\ÈOOHœÝš[™Èˆ˜]Ëœ™Y™\™[˜Ù\Ë›[™Ýˆ™LÊH›ÝÈ\œ›ÜŠµå5èµäõé5åuêˆ5èµäÈŒ5êµåuåuæuçHŠNÂˆœ™Y™\™[˜Ù\ÈH˜]Ëœ™Y™\™[˜Ù\Ëš[J
NÂˆ™]\›ˆÂˆBˆ[˜Ý[ÛˆX›XÕ\›
˜]ÊHÂˆ]NÂˆžHÂˆHH™]ÈT“
˜]ÊNÂˆHØ]Ú
JHÂˆ›ÝÈ\œ›ÜŠµéõæuêuåuê5ç5ä5êµéõæuçÈŠNÂˆBˆÂˆÛÛœÝHKšÜÝ˜[YKÓÝÙ\Ø\ÙJ
NÂˆYˆ
Kœ›ÝØÛÛOOHšÎˆˆK\Ù\›˜[YHKœ\ÜÝÛÜ™KœÜOOH›ØØ[ÜÝˆZš[˜ÛY\Ê‹ˆŠH×–×—JÉË\Ý

Hš[˜ÛY\ÊŽˆŠH×ŠØØ[[\›˜[ØØ[ÜÝ\Ý[˜[Y
IË\Ý

JH›ÝÈ\œ›ÜŠµéõæuêuåuê5ä5æuè5åH5ä5êµê5éµæuäuåuê5æH5çµä5åuäuæ5åÈŠNÂˆ™]\›ˆKš™YŽÂˆB‚ˆËÈÜ˜ËÙ\Ý[˜][Û‹]Ú^˜\™šœÂˆ˜\ˆÝ\ÈHÖÈ™\Ý[˜][Ûˆ‹µé5ê5æ5æH5å5æuèµäÈ‹µêuçH5å5æuèµäÈ5åuå5é5èµæuç5åuêˆ5êuç5åH—KÈ™]\È‹µêµä5ê5æuæõæuçH5åuäµçµæuêuåuêˆ‹µçµåuèµäË5çµêuæˆ5åuæ5åuåuåÈ5å5êuæuè5åuæuæuçH5å5çµåuêµê—KÈ˜YÙ]‹µêµéõéµæuäH5åuêµæõåuç5å‹µå5êµéõéµæuäH5å5æõåuç5ç5åuå5éõæ5äµåuê5æuåuêˆ5å5æõç5åuç5åuêˆ5äuåH—KÈ˜]™[\œÈ‹µçµæ5æuæuç5æuçH5åuêµåõäuåuê5å‹µçµêuêµêµé5æuçK5åõäõê5æuçK5çµåuéµä5åuä5çµéµèµæH5êµåõäuåuê5å—KÈœÝ[H‹µéõéµäH5åuç5æuè5å‹µéõéµäH5å5æ5æuåuç5ä5æuæõåuêˆ5å5ç5æuè5å5åuçµêuæˆ5å5è5èuæuèµå—KÈš[\™\ÝÈ‹µèµè5æuæuçÈ5åuçµèuç5åuç‹µçµå5ç5ê5ä5åuêˆ5åuäuä5æuç5åH5äõê5æõæuçH5ç5è5èuåuèˆ—KÈ˜ÛÛœÝ˜Z[È‹µä5æuç5åuéµæuçH5åuå5èµê5åuêˆ‹µäõê5æuêuåuêˆ5ç5äuåõæuê5å5åuæ5éõèuæ5åõåué5êuæH—KÈœØY™]H‹µêµéõéµæuäH5å5èuåuæõçÈ‹µäµäuåuç5åuêˆ5èµç5åuêˆ5åuå5ê5êuä5åuêˆ5å5é5èµåuç5å—WNÂˆ˜\ˆ˜[œÜÜÈHÈ[ÝÜ˜ÞXÛNˆµä5åué5è5åuèˆ‹Ø\Žˆµê5æõäH‹X›XÎˆµêµåõäuåuê5å5éµæuäuåuê5æuêˆ‹Z^Yˆµêuæuç5åuäH5ä5çµéµèµæuçHˆNÂˆ[˜Ý[ÛˆÜ[‘\Ý[˜][Û•Ú^˜\™
ÈX[ÙË\Ý[˜][ÛˆH[\KÛ”Ø]™KÛ”[ˆH

HOˆÂˆKÛ”XÚØYÙHH

HOˆÂˆKÛÛÜÙHH

HOˆÂˆHJHÂˆ˜\ˆØMÂˆÛÛœÝÚ[ˆHX[ÙË›ÝÛ™\‘ØÝ[Y[™Y˜][šY]ÎÂˆ][]™HHYK\ÞLˆH˜[ÙKXÝ]™HHÝ\œ™[H\Ý[˜][Û‹˜YH[›š[™Ñ˜Y
\Ý[˜][ÛˆOH[È›ÚYˆ\Ý[˜][Û‹œÙ][™ÜÊK\HHÊˆ×ÔT‘W×È
‹È™]ÈÙ]

K™XÛÝ™\™YH[™XÛÝ™\žT›ÛZ\ÙHH[ØZ][™ÈH˜[ÙNÂˆÛÛœÝÝXÚY˜[Y\ÈHÊˆ×ÔT‘W×È
‹È™]ÈÙ]

NÂˆÛÛœÝ]Y\žHH
ÊHOˆX[ÙËœ]Y\žTÙ[XÝÜŠÊK[H
ÊHOˆX[ÙËœ]Y\žTÙ[XÝÜ[
ÊNÂˆÛÛœÝšY[ˆH
Ù^KX™[\HH^‹Z[ˆH[X^H[
HOˆX™[ˆˆ
È\ØØ\R[
X™[
H
È	Ï[œ]˜[YOH‰È
ÈÙ^H
È	Èˆ\OH‰È
È\H
È	Èˆ˜[YOH‰È
È\ØØ\R[
Ù^HOOH™\Ý[˜][ÛˆˆÈ
Ý\œ™[OH[È›ÚYˆÝ\œ™[™\Ý[˜][Û—Û˜[YJHˆˆˆÙ^HOOHœ[“[Z]ˆÈ˜Yš[œ]œ[“[Z]YÛÜ›ÝÈLˆ˜Yš[œ]ÚÙ^WJH
È	Èˆ	È
È
Z[ˆOOH[È	ÛZ[H‰È
ÈZ[ˆ
È	Èˆ	ÈˆˆŠH
È
X^OOH[È	ÛX^H‰È
ÈX^
È	Èˆ	ÈˆˆŠH
È
\HOOH›[X™\ˆˆÈ	ÜÝ\H‰È
È
È˜YÙ]‹˜YÙ]]šX][Û”Ý‹œ[“[Z]—Kš[˜ÛY\ÊÙ^JHÈŒŒHˆˆŒHŠH
È	È‰ÈˆˆŠH
È
Ù^HOOH™\\\™HˆÙ^HOOH™\Ý[˜][ÛˆˆÈ	ÛX^[™ÝHŒL‰ÈˆˆŠH
ÈÛX™[ˆŽÂˆÛÛœÝÜ›Ý\H
Ù^JHOˆÂˆÛÛœÝÈH™Y™\™[˜ÙQÜ›Ý\Ë™š[™


HOˆšÙ^HOOHÙ^JNÂˆ™]\›ˆË›][\HÈ	ÏšY[Ù]Û\ÜÏHœ™Y™\™[˜ÙK[Ü[ÛœÈYÙ[™‰È
È\ØØ\R[
Ë›X™[
H
È	ÏÛYÙ[™]ˆÛ\ÜÏHœ™Y™\™[˜ÙKXÚÚXÙKYÜšY‰È
ÈË›Ü[ÛœË›X\

ÚYX™[JHOˆ	ÏX™[Û\ÜÏHœ™Y™\™[˜ÙKXÚÚXÙH[œ]\OH˜ÚXÚØ›Þˆ˜[YOHœ™Y™\™[˜ÙWÉÈ
ÈÙ^H
È	Èˆ˜[YOH‰È
ÈY
È	Èˆ	È
È

˜Y˜ÚÚXÙ\ÖÚÙ^WH×JKš[˜ÛY\ÊY
HÈ˜ÚXÚÙYˆˆˆŠH
ÈÜ[ˆˆ
È\ØØ\R[
X™[
H
ÈÜÜ[ÛX™[ˆŠKš›Ú[ŠˆŠH
ÈÙ]ÙšY[Ù]ˆˆˆX™[ˆˆ
È\ØØ\R[
Ë›X™[
H
È	ÏÙ[XÝ˜[YOHœ™Y™\™[˜ÙWÉÈ
ÈÙ^H
È	ÈÜ[Ûˆ˜[YOHˆµç5ç5ä5å5èµäõé5åÛÜ[Û‰È
ÈË›Ü[ÛœË›X\

ÚYX™[JHOˆ	ÏÜ[Ûˆ˜[YOH‰È
ÈY
È	Èˆ	È
È
˜Y˜ÚÚXÙ\ÖÚÙ^WHOOHYÈœÙ[XÝYˆˆˆŠH
Èˆˆ
È\ØØ\R[
X™[
H
ÈÛÜ[ÛˆŠKš›Ú[ŠˆŠH
ÈÜÙ[XÝÛX™[ˆŽÂˆNÂˆ[˜Ý[Ûˆ›ÙJÙ^JHÂˆÝÚ]Ú
Ù^JHÂˆØ\ÙH™\Ý[˜][ÛˆŽ‚ˆ™]\›ˆšY[Š™\Ý[˜][Ûˆ‹µêuçH5å5æuèµäÈŠH
È	ÏX™[µèuæ5æ5åuèH5æuèµäÏÙ[XÝ˜[YOHš\Ý]\È‰È
Èš\Ý]\Ù\Ë›X\

ÚÙ^L‹X™[JHOˆÂˆ˜\ˆØMNÂˆ™]\›ˆ	ÏÜ[Ûˆ˜[YOH‰È
ÈÙ^Lˆ
È	Èˆ	È
È



ØMHHÝ\œ™[OH[È›ÚYˆÝ\œ™[œÙ][™ÜÊHOH[È›ÚYˆØMKš\Ý]\ÊHœ[›š[™ÈŠHOOHÙ^LˆÈœÙ[XÝYˆˆˆŠH
Èˆˆ
È\ØØ\R[
X™[
H
ÈÛÜ[ÛˆŽÂˆJKš›Ú[ŠˆŠH
È	ÏÜÙ[XÝÛX™[Û\ÜÏH›]]Yµä5é5êuê5ç5êuçµåuê5æuèµäÈ5äµçH5ç5é5è5æH5å5êuç5çµêˆ5æõç5å5å5äµäõê5åuê‹5åuç5åõåµåuê5ä5ç5æuåH5äuå5çµêuæ‹Ü‰ÎÂˆØ\ÙH™]\ÈŽ‚ˆ™]\›ˆ	Ï]ˆÛ\ÜÏHœ[›™\‹YÜšY‰È
ÈšY[ŠœÝ\‹µêµä5ê5æuæˆ5å5êµåõç5å‹™]HŠH
ÈšY[Š™^\È‹µçµèué5ê5æuçµæH5å5æ5æuåuç‹›[X™\ˆ‹KÍJH
ÈšY[Š™X\›Y\‘^\È‹µä5é5êuê5ç5å5éõäõæuçH5èµäÈ5æõçµå5æuçµæuçOÈ‹›[X™\ˆ‹Œ
H
ÈšY[Š›]\‘^\È‹µä5é5êuê5ç5ä5åõê5èµäÈ5æõçµå5æuçµæuçOÈ‹›[X™\ˆ‹Œ
H
ÈšY[ŠœÚÜ\‘^\È‹µä5é5êuê5ç5éõéµê5èµäÈ5æõçµå5æuçµæuçOÈ‹›[X™\ˆ‹Ì
H
ÈšY[Š›Û™Ù\‘^\È‹µä5é5êuê5ç5å5ä5ê5æuæˆ5èµäÈ5æõçµå5æuçµæuçOÈ‹›[X™\ˆ‹Ì
H
È	ÏÙ]Û\ÜÏH›]]Yµå5èuåuæõçÈ5êµåuçµæˆ5äuêµæõè5åuçÈ5êuç5èµäÈL5æuçµæuçK5æõåuç5ç5å5ä5ê5æõåÜ‰ÎÂˆØ\ÙH˜YÙ]Ž‚ˆ™]\›ˆ	Ï]ˆÛ\ÜÏHœ[›™\‹YÜšY‰È
ÈšY[Š˜YÙ]‹µêµéõéµæuäH5æõåuç5ç5äuêuí5åÈ‹›[X™\ˆ‹YMŠH
ÈšY[Š˜YÙ]]šX][Û”Ý‹µåõê5æuäµå5çµåuêµê5êˆ5äuä5åõåuåµæuçH‹›[X™\ˆ‹L
H
È	ÏÙ]šY[Ù]YÙ[™µçµå5æõç5åuç5äuêµéõéµæuäOÏÛYÙ[™]ˆÛ\ÜÏHœ[›™\‹XÚXÚÜÈ‰È
ÈØš™XÝ™[šY\Ê[˜Û\Ú[Û“X™[ÊK›X\

ÚYX™[JHOˆ	ÏX™[[œ]˜[YOHš[˜ÛY\Èˆ\OH˜ÚXÚØ›Þˆ˜[YOH‰È
ÈY
È	Èˆ	È
È
˜Yš[œ]š[˜ÛY\Ëš[˜ÛY\ÊY
HÈ˜ÚXÚÙYˆˆˆŠH
Èˆˆ
ÈX™[
ÈÛX™[ˆŠKš›Ú[ŠˆŠH
ÈÙ]ÙšY[Ù]ˆŽÂˆØ\ÙH˜]™[\œÈŽ‚ˆ™]\›ˆ	Ï]ˆÛ\ÜÏHœ[›™\‹YÜšY‰È
ÈšY[Š˜]™[\œÈ‹µçµèué5ê5çµæ5æuæuç5æuçH‹›[X™\ˆ‹KŒ
H
ÈšY[Šœ›ÛÛ\È‹µçµèué5ê5åõäõê5æuçH‹›[X™\ˆ‹KŒ
H
ÈšY[Š™\\\™H‹µèµæuêÈ5êuäõå5æuéµæuä5åŠH
È	ÏX™[µä5çµéµèµæH5êµåõäuåuê5åÙ[XÝ˜[YOH˜[œÜÜ‰È
ÈØš™XÝ™[šY\Ê˜[œÜÜÊK›X\

ÚYX™[JHOˆ	ÏÜ[Ûˆ˜[YOH‰È
ÈY
È	Èˆ	È
È
˜Yš[œ]˜[œÜÜOOHYÈœÙ[XÝYˆˆˆŠH
Èˆˆ
ÈX™[
ÈÛÜ[ÛˆŠKš›Ú[ŠˆŠH
ÈÜÙ[XÝÛX™[Ù]ˆŽÂˆØ\ÙHœÝ[HŽ‚ˆ™]\›ˆ	Ï]ˆÛ\ÜÏHœ[›™\‹YÜšY‰È
ÈÜ›Ý\
œXÙHŠH
ÈÜ›Ý\
›ÙÚ[™ÈŠH
ÈÜ›Ý\
™š]š[™ÈŠH
È	ÏÙ]Û\ÜÏH›]]Yµæõç5å5äuåõæuê5åuêˆ5æõä5çÈ5ä5åué5éµæuåuè5ç5æuåuê‹ˆ5êuçµåuê5æõäõæH5ç5êuçµåuê5ä5êˆ5å5å5äµäõê5åuê‹Ü‰ÎÂˆØ\ÙHš[\™\ÝÈŽ‚ˆ™]\›ˆÜ›Ý\
š[\™\ÝÈŠH
ÈÜ›Ý\
œ›ØYÈŠNÂˆØ\ÙH˜ÛÛœÝ˜Z[ÈŽ‚ˆ™]\›ˆÜ›Ý\
˜ÛÛœÝ˜Z[ÈŠH
È	ÏX™[µå5èµäõé5åuêˆ5è5åuèué5åuêˆ8 %5æ5éõèuæ5åõåué5êuæH
5ä5åué5éµæuåuè5ç5æJO^\™XH˜[YOHœ™Y™\™[˜Ù\ÈˆX^[™ÝHŒŒˆ›ÝÜÏHHˆXÙZÛ\Hµäuéõêuåuêˆ5è5åuèué5åuêˆ5êuç5ä5çµåué5æuèµåuêˆ5äuäuåõæuê5åuêˆ‰È
È\ØØ\R[
˜Y™œ™YU^
H
È	ÏÝ^\™XOÛX™[Û\ÜÏH›]]Yµå5äuåõæuê5åuêˆ5åuå5æ5éõèuæ5å5åõåué5êuæH5çµåuäµäuç5æuçH5æuåõäÈ5ç5¯Œ‹5êµåuåuæuçKˆ5ä5æuçÈ5ç5å5åµæuçÈ5èuæuèuçµä5åuêˆ5ä5åH5é5ê5æ5æH5êµêuç5åuçKÜ‰ÎÂˆØ\ÙHœØY™]HŽ‚ˆ™]\›ˆ	Ï]ˆÛ\ÜÏHÚ^˜\™\ØY™]H‰È
ÈXÛÛŠœÚY[ŠH
È]Ý›Û™Ïµä5êµå5çµä5êuê5æõç5éµèµäÈ5çµêuçµèµåuêµæOÜÝ›Û™Ïµå5èuåuæõçÈ5ê5êuä5æH5ç5åõéõåuê5çµæuäõèˆ5éµæuäuåuê5æH5åuç5å5æõæuçÈ5å5éµèµåuê‹ˆ5å5åµçµè5å5êµêuç5åuçH5ä5åH5çµêuç5åuåÈ5å5åuäõèµåuêˆ5ç5èué5éõæuçH5ä5æuè5çH5çµäuåuéµèµæuçKÜÙ]Ù]ˆˆ
ÈšY[Šœ[“[Z]‹µêµéõê5êˆ5èµç5åuêˆ5ç5å5ê5éµå5äuêuí5åÈ‹›[X™\ˆ‹ŒKJH
Èµêµéõê5å5åõåuäõêuæuêˆ5ç5æõç5å5åõêuäuåuçÎˆÝ›Û™ÏŒŒ8 ªÜÝ›Û™Ï‹ˆ5å5èµç5åuêˆ5å5çµê5äuæuêˆ5ç5å5ê5éµå5å5æuäH8 ª‹ˆ5êuçµæuê5êˆ5å5å5äµäõê5åuêˆ5ä5æuè5å5çµé5èµæuç5å5ä5êˆ5å5èuåuæõçËÜˆŽÂˆBˆBˆ[˜Ý[Ûˆ™XYŠ
HÂˆÛÛœÝˆH]Y\žJˆÙ\Ý[˜][Û‹Y›Ü›HŠKH™]ÈÚ[‹‘›Ü›Q]JŠKÙ[XÝ[ÛˆH™XY™Y™\™[˜Ù\Ê
K[œ]H×ÜÜ™XY˜[Y\ÊßK˜Yš[œ]
NÂˆ›Üˆ
ÛÛœÝÙ^HÙˆÈ™^\È‹™X\›Y\‘^\È‹›]\‘^\È‹œÚÜ\‘^\È‹›Û™Ù\‘^\È‹˜YÙ]‹˜YÙ]]šX][Û”Ý‹˜]™[\œÈ‹œ›ÛÛ\È—JH[œ]ÚÙ^WHH[X™\Š™Ù]
Ù^JJNÂˆ›Üˆ
ÛÛœÝÙ^HÙˆÈœÝ\‹™\\\™H‹˜[œÜÜ‹š\Ý]\È—JH[œ]ÚÙ^WHH™Ù]
Ù^JNÂˆ[œ]š[˜ÛY\ÈH™Ù][
š[˜ÛY\ÈŠNÂˆ[œ]œ[“[Z]YÛÜ›ÝHX]œ›Ý[™
[X™\Š™Ù]
œ[“[Z]ŠJH
ˆL
NÂˆ™]\›ˆÈØÚ[XU™\œÚ[ÛŽˆK[œ]ˆ×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßK[œ]
KÈ™Y™\™[˜Ù\ÎˆÙ[XÝ[Û‹œ™Y™\™[˜Ù\ÈJKÚÚXÙ\ÎˆÙ[XÝ[Û‹˜ÚÚXÙ\Ëœ™YU^ˆÙ[XÝ[Û‹™œ™YU^™]šY]ÙYˆË‹‹™˜Yœ™]šY]ÙYHNÂˆBˆ[˜Ý[Ûˆ˜[YŠÙ^JHÂˆ˜\ˆØMKØ‹ØÎÂˆÛÛœÝHH˜Yš[œ]ÈH˜Y˜ÚÚXÙ\Ë™]šY]ÙYH˜Yœ™]šY]ÙYš[˜ÛY\ÊÙ^JK[YÙ\ŒˆH
‹Z[‹X^
HOˆ[X™\‹š\Ò[YÙ\ŠŠH	‰ˆˆHZ[ˆ	‰ˆˆHX^ÂˆÝÚ]Ú
Ù^JHÂˆØ\ÙH™\Ý[˜][ÛˆŽ‚ˆ™]\›ˆ›ÛÛX[Š]Y\žJ–Û˜[YOY\Ý[˜][Û—HŠK˜[YKš[J
JNÂˆØ\ÙH™]\ÈŽ‚ˆ™]\›ˆ›ÛÛX[ŠKœÝ\
H	‰ˆ[X™\‹š\Ñš[š]J]Kœ\œÙJKœÝ\
JH	‰ˆ[YÙ\ŒŠK™^\ËKL
H	‰ˆ[YÙ\ŒŠK™X\›Y\‘^\ËŒ
H	‰ˆ[YÙ\ŒŠK›]\‘^\ËŒ
H	‰ˆ[YÙ\ŒŠKœÚÜ\‘^\ËÌ
H	‰ˆ[YÙ\ŒŠK›Û™Ù\‘^\ËÌ
H	‰ˆKœÚÜ\‘^\ÈK™^\È	‰ˆK™^\È
ÈK›Û™Ù\‘^\ÈHLÂˆØ\ÙH˜YÙ]Ž‚ˆ™]\›ˆK˜YÙ]ˆ	‰ˆK˜YÙ]HYMˆ	‰ˆK˜YÙ]]šX][Û”ÝH	‰ˆK˜YÙ]]šX][Û”ÝHL	‰ˆKš[˜ÛY\Ë›[™ÝˆÂˆØ\ÙH˜]™[\œÈŽ‚ˆ™]\›ˆ›ÛÛX[ŠK™\\\™Kš[J
JH	‰ˆ[YÙ\ŒŠK˜]™[\œËKŒ
H	‰ˆ[YÙ\ŒŠKœ›ÛÛ\ËKK˜]™[\œÊNÂˆØ\ÙHœÝ[HŽ‚ˆ™]\›ˆ™]šY]ÙY›ÛÛX[ŠËœXÙH	‰ˆË›ÙÚ[™È	‰ˆË™š]š[™ÊNÂˆØ\ÙHš[\™\ÝÈŽ‚ˆ™]\›ˆ™]šY]ÙY›ÛÛX[Š

ØMHHËš[\™\ÝÊHOH[È›ÚYˆØMK›[™Ý
H	‰ˆ

ØˆHËœ›ØYÊHOH[È›ÚYˆØ‹›[™Ý
JNÂˆØ\ÙH˜ÛÛœÝ˜Z[ÈŽ‚ˆ™]\›ˆ™]šY]ÙY›ÛÛX[Š

ØÈHË˜ÛÛœÝ˜Z[ÊHOH[È›ÚYˆØË›[™Ý
H˜Y™œ™YU^š[J
JNÂˆØ\ÙHœØY™]HŽ‚ˆ™]\›ˆ™]šY]ÙY	‰ˆ[YÙ\ŒŠKœ[“[Z]YÛÜ›ÝKL
NÂˆY˜][‚ˆ™]\›ˆ˜[ÙNÂˆBˆBˆ[˜Ý[Ûˆ™YY˜XÚÊY\ÜØYÙJHÂˆYˆ
[]™JH]Y\žJ–Ù]KYX[ÙË\Ý]\×HŠK^ÛÛ[HY\ÜØYÙNÂˆBˆ[˜Ý[Ûˆ\]J
HÂˆYˆ
X[]™JH™]\›ŽÂˆ›Üˆ
ÛÛœÝÚÙ^WHÙˆÝ\ÊHÂˆÛÛœÝˆH]Y\žJ	ÖÙ]K]Ú^˜\™]XH‰È
ÈÙ^H
È	È—IÊKÛÛ\]HH˜[YŠÙ^JKÝ]HH\Kš\ÊÙ^JHÈ™\HˆˆÛÛ\]HÈ˜ÛÛ\]Hˆˆ™[\HŽÂˆ‹™]\Ù]œÝ]HHÝ]NÂˆ‹œ]Y\žTÙ[XÝÜŠœÛX[ŠK^ÛÛ[HÝ]HOOH™\HˆÈµêuåuè5å0­È5æ5ê5çH5è5êuçµêˆˆÝ]HOOH˜ÛÛ\]HˆÈµå5åuäµäõê5åuè5êuçµêˆˆµæ5ê5çH5å5åuäµäõêŽÂˆ‹œ]Y\žTÙ[XÝÜŠ–Ù]K\Ý\\Þ[X›ÛHŠK^ÛÛ[HÝ]HOOH™\HˆÈ¸ (ˆˆˆÝ]HOOH˜ÛÛ\]HˆÈ¸§$Èˆˆ¸¥âÈŽÂˆÛÛœÝÜ[ÛˆH]Y\žJ	ÖÙ]K]Ú^˜\™[[Øš[K\Ý\HÜ[Û–Ý˜[YOH‰È
ÈÙ^H
È	È—IÊNÂˆÜ[Û‹^ÛÛ[HÝ\Ë™š[™[™^


HOˆÌHOOHÙ^JH
ÈH
È‹Î0­Èˆ
ÈÝ\Ë™š[™


HOˆÌHOOHÙ^JVÌWH
Èˆ0­Èˆ
È
Ý]HOOH™\HˆÈ¸ (ˆ5æ5ê5çH5è5êuçµêˆˆÝ]HOOH˜ÛÛ\]HˆÈ¸§$È5è5êuçµêˆˆ¸¥âÈ5æ5ê5çH5å5åuäµäõêŠNÂˆBˆ]Y\žJ–Ù]K]Ú^˜\™[[Øš[K\Ý\HŠK™]\Ù]œÝ]HH]Y\žJ	ÖÙ]K]Ú^˜\™]XH‰È
ÈÝ\ÖØXÝ]™WVÌH
È	È—IÊK™]\Ù]œÝ]NÂˆÛÛœÝÛÝ[HÝ\Ë™š[\Š
ÚÙ^WJHOˆ˜[YŠÙ^JJK›[™ÝÂˆ]Y\žJ–Ù]K]Ú^˜\™XÛÝ[HŠK^ÛÛ[HÛÝ[
Èˆ5çµêµåuæˆˆ
ÈÝ\Ë›[™Ý
Èˆ5ç5êuåuè5æuåuêˆ5å5åuäµäõê5åHŽÂˆ]Y\žJ–Ù]K]Ú^˜\™\›ÙÜ™\Ü×HŠK˜[YHHÛÝ[Âˆ]Y\žJ–Ù]K]Ú^˜\™\Ø]™K\Ý]WHŠK^ÛÛ[H\KœÚ^™HÈµæuêH5êuæuè5åuæuæuçH5êuæ5ê5çH5è5êuçµê5åHˆˆÝ\œ™[Èµæõç5å5êuæuè5åuæuæuçH5êuçµåuê5æuçHˆˆµå5æuèµäÈ5èµäõæuæuçÈ5ç5ä5è5êuçµêŽÂˆBˆ[˜Ý[ÛˆÙ[XÝ
[™^›ØÝ\ÈH˜[ÙJHÂˆ˜\ˆØMKØ‹ØÎÂˆXÝ]™HHX]›X^
X]›Z[ŠÝ\Ë›[™ÝHK[™^
JNÂˆ[
–Ü›ÛO]X—HŠK™›Ü‘XXÚ

‹JHOˆÂˆ‹œÙ]]šX]J˜\šXK\Ù[XÝY‹Ýš[™ÊHOOHXÝ]™JJNÂˆ‹X’[™^HHOOHXÝ]™HÈˆLNÂˆJNÂˆ[
–Ü›ÛO]Xœ[™[HŠK™›Ü‘XXÚ

JHOˆšY[ˆHHOOHXÝ]™JNÂˆ]Y\žJ–Ù]K]Ú^˜\™\™]—HŠK™\ØX›YHXÝ]™HOOH\ÞLŽÂˆ]Y\žJ–Ù]K]Ú^˜\™[™^HŠK™\ØX›YHXÝ]™HOOHÝ\Ë›[™ÝHH\ÞLŽÂˆ]Y\žJ–Ù]K]Ú^˜\™\ÜÚ][Û—HŠK^ÛÛ[Hµêuç5äHˆ
È
XÝ]™H
ÈJH
Èˆ5çµêµåuæˆˆ
ÈÝ\Ë›[™ÝÂˆÛÛœÝXÚÙ\ˆH]Y\žJ–Ù]K]Ú^˜\™[[Øš[K\Ý\HŠNÂˆXÚÙ\‹˜[YHHÝ\ÖØXÝ]™WVÌNÂˆXÚÙ\‹™]\Ù]œÝ]HH]Y\žJ	ÖÙ]K]Ú^˜\™]XH‰È
ÈÝ\ÖØXÝ]™WVÌH
È	È—IÊK™]\Ù]œÝ]NÂˆ]Y\žJ–Ù]K[[Øš[K\™]—HŠK™\ØX›YHXÝ]™HOOH\ÞLŽÂˆ]Y\žJ–Ù]K[[Øš[K[™^HŠK™\ØX›YHXÝ]™HOOHÝ\Ë›[™ÝHH\ÞLŽÂˆYˆ
›ØÝ\ÊHÂˆYˆ
X[ÙË›ÝÛ™\‘ØÝ[Y[˜XÝ]™Q[[Y[OOHXÚÙ\ŠHXÚÙ\‹˜›\Š
NÂˆ
ØÈH
ØˆH]Y\žJ‹Ú^˜\™XÛÛ[ŠJKœØÜ›Û[ÕšY]ÊHOH[È›ÚYˆØË˜Ø[
Ø‹È›ØÚÎˆ›™X\™\Ý‹™Z]š[ÜŽˆ

ØMHHÚ[‹›X]ÚYYXJHOH[È›ÚYˆØMK˜Ø[
Ú[‹Š™Y™\œË\™YXÙY[[Ý[ÛŽˆ™YXÙJHŠK›X]Ú\ÊHÈ˜]]ÈˆˆœÛ[ÛÝˆJNÂˆBˆBˆ[˜Ý[Ûˆ™[™\ŒŠ
HÂˆX[ÙËš[›™\’SH	Ï›Ü›HYH™\Ý[˜][Û‹Y›Ü›HˆÛ\ÜÏH™\Ý[˜][Û‹]Ú^˜\™ˆ›Ý˜[Y]OXY\ˆÛ\ÜÏHÚ^˜\™ZXY[™È]Ü[ˆÛ\ÜÏHœ[›™\‹Y^YXœ›ÝÈµæõç5å5å5äµäõê5åuê‹5äuçµéõåuçH5ä5åõäÏÜÜ[‰È
È
Ý\œ™[Èµèµê5æuæõêˆ5æuèµäÈˆˆµæuèµäÈ5åõäõêHŠH
ÈÚˆˆ
È\ØØ\R[

Ý\œ™[OH[È›ÚYˆÝ\œ™[™\Ý[˜][Û—Û˜[YJHµäuåuè5æuçH5ä5êˆ5å5æ5æuåuç5å5äuä5êuç5æˆŠH
È	ÏÜÙ]]Ûˆ\OH˜]ÛˆˆYH˜Ø[˜Ù[Y\Ý[˜][Ûˆˆ\šXK[X™[Hµèuäµåuê5èµê5æuæõêˆ5æuèµäÈµèuäµæuê5åØ]ÛÚXY\]ˆÛ\ÜÏHÚ^˜\™[Ý™\šY]ÈÜ[ˆ]K]Ú^˜\™XÛÝ[ÜÜ[Ü[ˆ]K]Ú^˜\™\Ø]™K\Ý]OÜÜ[›ÙÜ™\ÜÈ]K]Ú^˜\™\›ÙÜ™\ÜÈX^HŽˆ˜[YOHŒˆ\šXK[X™[Hµå5êuç5çµêˆ5å5äµäõê5åuêˆ5å5æuèµäÈÜ›ÙÜ™\ÜÏÙ]Û\ÜÏHÚ^˜\™[YÙ[™¸§$È5æuê5åuéÎˆ5å5åuäµäõê5åuè5êuçµê0­È8 (ˆ5æõêµåuçNˆ5êuæuè5åuæuæuçH5ç5êuçµæuê5å0­È8¥âÈ5ä5é5åuêˆ5æ5ê5çH5å5åuäµäõêÜ]ˆ]K]Ú^˜\™\™XÛÝ™\žOÙ]]ˆÛ\ÜÏHÚ^˜\™[[Øš[K[˜]šYØ][ÛˆˆÝ[OH™\Ü^N™›^ˆ\šXK[X™[Hµè5æuåuåuæ5éõåuçµé5éõæ5æH5äuæuçÈ5êuç5äuæuçH]Ûˆ\OH˜]Ûˆˆ]K[[Øš[K\™]ˆ\šXK[X™[Hµå5êuç5äH5å5éõåuäõçH¸¡¤Ø]ÛÙ[XÝ]K]Ú^˜\™[[Øš[K\Ý\\šXK[X™[Hµäuåõæuê5êˆ5êuç5äH5äuå5äµäõê5êˆ5æuèµäÈ‰È
ÈÝ\Ë›X\

ÚÙ^KX™[KŠHOˆ	ÏÜ[Ûˆ˜[YOH‰È
ÈÙ^H
È	È‰È
È
ˆ
ÈJH
È‹Î0­Èˆ
È\ØØ\R[
X™[
H
ÈÛÜ[ÛˆŠKš›Ú[ŠˆŠH
È	ÏÜÙ[XÝ]Ûˆ\OH˜]Ûˆˆ]K[[Øš[K[™^\šXK[X™[Hµå5êuç5äH5å5äuä¸¡¤Ø]ÛÙ]]ˆÛ\ÜÏHÚ^˜\™[^[Ý]ˆÝ[OH™\Ü^N˜›ØÚÈ˜]ˆÛ\ÜÏHÚ^˜\™]XœÈˆY[ˆÝ[OH™\Ü^N››Û™Hˆ›ÛOHX›\Ýˆ\šXK[X™[Hµéõæ5äµåuê5æuåuêˆ5å5äµäõê5êˆ5æuèµäÈ‰È
ÈÝ\Ë›X\

ÚÙ^KX™[KŠHOˆ	Ï]Ûˆ\OH˜]Ûˆˆ›ÛOHXˆˆYHÚ^˜\™]X‹IÈ
ÈÙ^H
È	Èˆ]K]Ú^˜\™]XH‰È
ÈÙ^H
È	Èˆ\šXKXÛÛ›ÛÏHÚ^˜\™\[™[IÈ
ÈÙ^H
È	Èˆ\šXK\Ù[XÝYH‰È
È
ˆOOHXÝ]™JH
È	ÈÜ[ˆÛ\ÜÏHÚ^˜\™\Ý\Z[™^ˆ]K\Ý\\Þ[X›Û¸¥âÏÜÜ[Ü[‰È
È\ØØ\R[
X™[
H
ÈÛX[ÜÛX[ÜÜ[Ø]ÛˆŠKš›Ú[ŠˆŠH
È	ÏÛ˜]]ˆÛ\ÜÏHÚ^˜\™XÛÛ[‰È
ÈÝ\Ë›X\

ÚÙ^KX™[\ØÜš\[Û—JHOˆ	ÏÙXÝ[Ûˆ›ÛOHXœ[™[ˆYHÚ^˜\™\[™[IÈ
ÈÙ^H
È	Èˆ]K]Ú^˜\™\[™[H‰È
ÈÙ^H
È	Èˆ\šXK[X™[YžOHÚ^˜\™]X‹IÈ
ÈÙ^H
È	Èˆ	È
È
Ù^HOOHÝ\ÖØXÝ]™WVÌHÈšY[ˆˆˆˆŠH
È	ÏÜ[ˆÛ\ÜÏHÚ^˜\™\[™[Y^YXœ›ÝÈµå5äµäõê5åuêˆ5å5æ5æuåuçÜÜ[Ï‰È
È\ØØ\R[
X™[
H
È	ÏÚÏÛ\ÜÏH›]]Y‰È
È\ØØ\R[
\ØÜš\[ÛŠH
ÈÜˆˆ
È›ÙJÙ^JH
ÈÜÙXÝ[ÛˆŠKš›Ú[ŠˆŠH
È	ÏÙ]Ù]›ÛÝ\ˆÛ\ÜÏHÚ^˜\™Y›ÛÝ\ˆ]ˆÛ\ÜÏHœ›ÝÈÚ^˜\™[˜]šYØ][Ûˆ]Ûˆ\OH˜]Ûˆˆ]K]Ú^˜\™\™]µå5éõåuäõçOØ]ÛÜ[ˆ]K]Ú^˜\™\ÜÚ][ÛÜÜ[]Ûˆ\OH˜]Ûˆˆ]K]Ú^˜\™[™^µå5äuäØ]ÛÙ]]ˆÛ\ÜÏHœ›ÝÈÚ^˜\™\Ø]™KXXÝ[ÛœÈ]Ûˆ\OH˜]Ûˆˆ]K]Ú^˜\™\Ø]™HÛ\ÜÏHœš[X\žHµêuçµåuê5êuæuè5åuæuæuçOØ]Û]Ûˆ\OHœÝX›Z]ˆYHœ[‹Y\Ý[˜][Ûˆµå5é5èµç5èuåuæõçÈ5ç5êµæõè5åuçÈ5å5æ5æuåuçØ]ÛÙ]]KYX[ÙË\Ý]\È›ÛOHœÝ]\Èˆ\šXK[]™OHœÛ]HÜÛX[µí5å5é5èµç5èuåuæõçÈ5ç5êµæõè5åuçÈ5å5æ5æuåuç5í5êuåuçµê5ä5êˆ5å5êuæuè5åuæuæuçH5åué5åuêµåÈ5èuæuæõåuçH5ç5ä5æuêuåuêˆ5å5ê5éµêˆRH5êµêµåõæuç5ê5éÈ5ç5ä5åõê5ä5æuêuåuê5æ‹ÜÛX[Ù›ÛÝ\Ù›Ü›O‰ÎÂˆÛÛœÝXÚØYÙS[šÈHÚ[‹™ØÝ[Y[˜Ü™X]Q[[Y[
˜]ÛˆŠNÂˆXÚØYÙS[šË\HH˜]ÛˆŽÂˆXÚØYÙS[šË˜Û\ÜÓ˜[YHH˜XÝ[Û‹\ÙXÛÛ™\žHŽÂˆXÚØYÙS[šË^ÛÛ[Hµé5ê5æ5æuçH5åuåõäuæuç5åŽÂˆXÚØYÙS[šË™]\Ù]Ú^˜\™XÚØYÙHHYHŽÂˆXÚØYÙS[šË›Û˜ÛXÚÈH

HOˆÂˆYˆ
X\ÞLŠHÛ”XÚØYÙJ
NÂˆNÂˆÛÛœÝØ]™P]ÛˆH]Y\žJ–Ù]K]Ú^˜\™\Ø]™WHŠNÂˆÛÛœÝ[]ÛˆH]Y\žJˆÜ[‹Y\Ý[˜][ÛˆŠNÂˆÛÛœÝÛÜÙP]ÛˆH]Y\žJˆØØ[˜Ù[Y\Ý[˜][ÛˆŠNÂˆØ]™P]Û‹^ÛÛ[H¸§$È5êuçµåuêŽÂˆØ]™P]Û‹˜Û\ÜÓ\Ý˜Y
˜XÝ[Û‹\Ø]™HŠNÂˆ[]Û‹^ÛÛ[Hµå5é5èµç5èuåuæõçÈŽÂˆ[]Û‹˜Û\ÜÓ\Ý˜Y
˜XÝ[Û‹\ÙXÛÛ™\žHŠNÂˆÛÜÙP]Û‹^ÛÛ[H°åÈŽÂˆÛÜÙP]Û‹˜Û\ÜÓ˜[YHH˜XÝ[Û‹XÛÜÙHŽÂˆ]Y\žJ‹Ú^˜\™ZXY[™ÈŠKœ™\[™
ÛÜÙP]ÛŠNÂˆØ]™P]Û‹˜Y\ŠXÚØYÙS[šÊNÂˆ[
–Ù]K]Ú^˜\™]X—HŠK™›Ü‘XXÚ

‹ŠHOˆÂˆ‹›Û˜ÛXÚÈH

HOˆÙ[XÝ
ŠNÂˆ‹›ÛšÙ^YÝÛˆH
]ŠHOˆÂˆ]™^ÂˆYˆ
]‹šÙ^HOOH\œ›ÝÓYŠH™^Hˆ
ÈNÂˆYˆ
]‹šÙ^HOOH\œ›ÝÔšYÚŠH™^HˆHNÂˆYˆ
]‹šÙ^HOOH’ÛYHŠH™^HÂˆYˆ
]‹šÙ^HOOH‘[™ŠH™^HÝ\Ë›[™ÝHNÂˆYˆ
™^OOH›ÚY
HÂˆ]‹œ™]™[Y˜][

NÂˆÙ[XÝ

™^
ÈÝ\Ë›[™Ý
H	HÝ\Ë›[™ÝYJNÂˆBˆNÂˆJNÂˆ]Y\žJ–Ù]K]Ú^˜\™[[Øš[K\Ý\HŠK›Û˜Ú[™ÙHH
]™[
HOˆÙ[XÝ
Ý\Ë™š[™[™^


HOˆÌHOOH]™[\™Ù]˜[YJKYJNÂˆ]Y\žJ–Ù]K[[Øš[K\™]—HŠK›Û˜ÛXÚÈH

HOˆÙ[XÝ
XÝ]™HHKYJNÂˆ]Y\žJ–Ù]K[[Øš[K[™^HŠK›Û˜ÛXÚÈH

HOˆÙ[XÝ
XÝ]™H
ÈKYJNÂˆ]Y\žJ–Ù]K]Ú^˜\™\™]—HŠK›Û˜ÛXÚÈH

HOˆÙ[XÝ
XÝ]™HHKYJNÂˆ]Y\žJ–Ù]K]Ú^˜\™[™^HŠK›Û˜ÛXÚÈH

HOˆÙ[XÝ
XÝ]™H
ÈKYJNÂˆÛÛœÝÚ[™ÙYˆH
]ŠHOˆÂˆ˜\ˆØMNÂˆYˆ
\ÞLŠH™]\›ŽÂˆÛÛœÝÙ^HH
ØMHH]‹\™Ù]˜ÛÜÙ\Ý
–Ù]K]Ú^˜\™\[™[HŠJHOH[È›ÚYˆØMK™]\Ù]Ú^˜\™[™[ÂˆYˆ
ZÙ^JH™]\›ŽÂˆ\K˜Y
Ù^JNÂˆYˆ
]‹\™Ù]›˜[YJHÝXÚY˜[Y\Ë˜Y
]‹\™Ù]›˜[YJNÂˆžHÂˆ˜YH™XYŠ
NÂˆ\]J
NÂˆ™YY˜XÚÊˆŠNÂˆHØ]Ú
\œŠHÂˆ]Y\žJ	ÖÙ]K]Ú^˜\™]XH‰È
ÈÙ^H
È	È—IÊK™]\Ù]œÝ]HH™\HŽÂˆ™YY˜XÚÊ\œ‹›Y\ÜØYÙJNÂˆBˆNÂˆ]Y\žJˆÙ\Ý[˜][Û‹Y›Ü›HŠK›Ûš[œ]HÚ[™ÙYŽÂˆ]Y\žJˆÙ\Ý[˜][Û‹Y›Ü›HŠK›Û˜Ú[™ÙHHÚ[™ÙYŽÂˆ]Y\žJ–Ù]K]Ú^˜\™\Ø]™WHŠK›Û˜ÛXÚÈH

HOˆØ]™J˜[ÙJNÂˆ]Y\žJˆÙ\Ý[˜][Û‹Y›Ü›HŠK›ÛœÝX›Z]H
]ŠHOˆÂˆ]‹œ™]™[Y˜][

NÂˆØ]™JYJNÂˆNÂˆ]Y\žJˆØØ[˜Ù[Y\Ý[˜][ÛˆŠK›Û˜ÛXÚÈH

HOˆÂˆYˆ
\ÞLŠH™]\›ŽÂˆYˆ
\KœÚ^™H	‰ˆ]Ú[‹˜ÛÛ™š\›JµæuêH5êuæuè5åuæuæuçH5êuç5ä5è5êuçµê5åKˆ5ç5èuäµåuê5äuç5æH5ç5êuçµåuêÈŠJH™]\›ŽÂˆX[ÙË˜ÛÜÙJ
NÂˆNÂˆÙ[XÝ
XÝ]™JNÂˆ\]J
NÂˆBˆ[˜Ý[ÛˆØ]™J[ŠHÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆ˜\ˆØMNÂˆYˆ
\ÞLˆØZ][™ÈX[]™JH™]\›ŽÂˆYˆ
™XÛÝ™\žT›ÛZ\ÙJHÂˆØZ][™ÈHYNÂˆ™YY˜XÚÊµæ5åuèµçÈ5ä5êˆ5å5å5äµäõê5åuêˆ5çµå5êµæõè5åuçÈ5å5ä5åõê5åuçÈ5ç5é5è5æH5å5êuçµæuê5å8 )ˆŠNÂˆZY[™XÛÝ™\žT›ÛZ\ÙNÂˆØZ][™ÈH˜[ÙNÂˆYˆ
X[]™JH™]\›ŽÂˆBˆ]Ù][™ÜÌ‹˜[YKXÝ]™Q›YËYØ]™HH˜[ÙNÂˆžHÂˆ˜YH˜[Y]T[›š[™Ñ˜Y
™XYŠ
JNÂˆÛÛœÝÝ]\ÌˆH˜Yš[œ]š\Ý]\È

ØMHHÝ\œ™[OH[È›ÚYˆÝ\œ™[œÙ][™ÜÊHOH[È›ÚYˆØMKš\Ý]\ÊHœ[›š[™ÈŽÂˆYˆ
\[ˆ	‰ˆÈœÝ[H‹š[\™\ÝÈ‹˜ÛÛœÝ˜Z[È‹œØY™]H—Kš[˜ÛY\ÊÝ\ÖØXÝ]™WVÌJJH˜Yœ™]šY]ÙYHË‹‹‹Êˆ×ÔT‘W×È
‹È™]ÈÙ]
Ë‹‹™˜Yœ™]šY]ÙYÝ\ÖØXÝ]™WVÌWJWNÂˆ˜[YHH]Y\žJ–Û˜[YOY\Ý[˜][Û—HŠK˜[YKš[J
NÂˆXÝ]™Q›YÈHÈœ[›š[™È‹œ™XYH‹˜]™[[™È—Kš[˜ÛY\ÊÝ]\ÌŠNÂˆYˆ
[˜[YH˜[YK›[™ÝˆL
HÂˆÙ[XÝ

NÂˆ›ÝÈ\œ›ÜŠµæuêH5ç5å5åµæuçÈ5êuçH5æuèµäÈ5èµäÈL5êµåuåuæuçHŠNÂˆBˆYˆ
[ŠHÂˆžHÂˆ˜[Y]T[›š[™Ò[œ]
˜Yš[œ]
NÂˆHØ]Ú
\œŠHÂˆÛÛœÝZ\ÜÚ[™ÈHÝ\Ë™š[™[™^

ÚÙ^WJHOˆÈ™]\È‹˜YÙ]‹˜]™[\œÈ—Kš[˜ÛY\ÊÙ^JH	‰ˆ]˜[YŠÙ^JJNÂˆYˆ
Z\ÜÚ[™ÈH
HÙ[XÝ
Z\ÜÚ[™ÊNÂˆ›ÝÈ\œŽÂˆBˆBˆÙ][™ÜÌˆH×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßKY™XÞXÛTÙ][™ÜÊ
Ý\œ™[OH[È›ÚYˆÝ\œ™[œÙ][™ÜÊHßKÈÝ\ˆ˜Yš[œ]œÝ\^\Îˆ˜Yš[œ]™^\Ëš\Ý]\ÎˆÝ]\ÌˆJJKÈYÙ]ˆ˜Yš[œ]˜YÙ]Ý\œ™[˜ÞNˆ’SÈ‹[›š[™Ñ˜Yˆ˜YJNÂˆHØ]Ú
\œŠHÂˆ™YY˜XÚÊ\œ‹›Y\ÜØYÙJNÂˆ™]\›ŽÂˆBˆ\ÞLˆHYNÂˆ[
˜]Û‹[œ]Ù[XÝ^\™XHŠK™›Ü‘XXÚ


HOˆ™\ØX›YHYJNÂˆ™YY˜XÚÊµêuåuçµê5ä5êˆ5å5å5äµäõê5åuêˆ5äuèµè5çø )ˆŠNÂˆžHÂˆÛÛœÝØ]™YHZY[Û”Ø]™JÈ˜[YKXÝ]™NˆXÝ]™Q›YËÙ][™ÜÎˆÙ][™ÜÌ‹^\Ý[™ÎˆÝ\œ™[JNÂˆYˆ
X[]™JH™]\›ŽÂˆÝ\œ™[HØ]™YÂˆ\K˜ÛX\Š
NÂˆYØ]™HHYNÂˆ\]J
NÂˆ™YY˜XÚÊµæõç5å5êuæuè5åuæuæuçH5è5êuçµê5åH5äuèµè5çÈŠNÂˆYˆ
[ŠHÂˆZY[Û”[ŠØ]™Y
NÂˆ[]™HH˜[ÙNÂˆX[ÙËœ™[[Ý™Q]™[\Ý[™\Š˜Ø[˜Ù[‹Ø[˜Ù[
NÂˆX[ÙËœ™[[Ý™Q]™[\Ý[™\Š˜ÛÜÙH‹ÛÜÙY
NÂˆBˆHØ]Ú
\œŠHÂˆYˆ
[]™JH™YY˜XÚÊ
YØ]™HÈµå5å5äµäõê5åuêˆ5è5êuçµê5åK5ä5æˆ5ç5ä5è5æuêµçÈ5ç5é5êµåuåÈ5ä5êˆ5å5êµæõè5åuçÎˆˆˆµå5êuæuè5åuæuæuçH5ç5ä5è5êuçµê5åNˆŠH
È\œ‹›Y\ÜØYÙJNÂˆHš[˜[HÂˆ\ÞLˆH˜[ÙNÂˆYˆ
[]™JHÂˆ[
˜]Û‹[œ]Ù[XÝ^\™XHŠK™›Ü‘XXÚ


HOˆ™\ØX›YH˜[ÙJNÂˆÙ[XÝ
XÝ]™JNÂˆBˆBˆJNÂˆBˆÛÛœÝØ[˜Ù[H
]ŠHOˆÂˆYˆ
\ÞLˆ\KœÚ^™H	‰ˆ]Ú[‹˜ÛÛ™š\›JµæuêH5êuæuè5åuæuæuçH5êuç5ä5è5êuçµê5åKˆ5ç5èuäµåuê5äuç5æH5ç5êuçµåuêÈŠJH]‹œ™]™[Y˜][

NÂˆNÂˆÛÛœÝÛÜÙYH

HOˆÂˆÛÛœÝ›ÝYžHH[]™NÂˆ[]™HH˜[ÙNÂˆX[ÙËœ™[[Ý™Q]™[\Ý[™\Š˜Ø[˜Ù[‹Ø[˜Ù[
NÂˆYˆ
›ÝYžJHÛÛÜÙJÝ\œ™[
NÂˆNÂˆX[ÙË˜Y]™[\Ý[™\Š˜Ø[˜Ù[‹Ø[˜Ù[
NÂˆX[ÙË˜Y]™[\Ý[™\Š˜ÛÜÙH‹ÛÜÙYÈÛ˜ÙNˆYHJNÂˆ™[™\ŒŠ
NÂˆYˆ
YX[ÙË›Ü[ŠHX[ÙËœÚÝÓ[Ù[

NÂˆYˆ
\Ý[˜][Ûˆ	‰ˆJ
ØMH\Ý[˜][Û‹œÙ][™ÜÊHOH[È›ÚYˆØMœ[›š[™Ñ˜Y
H	‰ˆ
\HOH[È›ÚYˆ\K›Ý™\šY]ÊJH™XÛÝ™\žT›ÛZ\ÙHH\K›Ý™\šY]Ê\Ý[˜][Û‹šY
K[Š
]JHOˆÂˆ˜\ˆØMKØŽÂˆYˆ
X[]™H

ØMHHÝ\œ™[OH[È›ÚYˆÝ\œ™[œÙ][™ÜÊHOH[È›ÚYˆØMKœ[›š[™Ñ˜Y
HJ
ØˆH]HOH[È›ÚYˆ]Kœ[ŠHOH[È›ÚYˆØ‹š[œ]
JH™]\›ŽÂˆ™XÛÝ™\™YH]Kœ[‹š[œ]ÂˆÛÛœÝ™\ÝÜ™YH[›š[™Ñ˜Y
Ý\œ™[œÙ][™ÜË™XÛÝ™\™Y
K˜[Y\ÈH×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßK™\ÝÜ™Yš[œ]
KÈ[“[Z]ˆ™\ÝÜ™Yš[œ]œ[“[Z]YÛÜ›ÝÈL™Y™\™[˜Ù\Îˆ™\ÝÜ™Y™œ™YU^JNÂˆ›Üˆ
ÛÛœÝÈÙˆ™Y™\™[˜ÙQÜ›Ý\ÊH˜[Y\ÖÈœ™Y™\™[˜ÙWÈˆ
ÈËšÙ^WHH™\ÝÜ™Y˜ÚÚXÙ\ÖÙËšÙ^WNÂˆ›Üˆ
ÛÛœÝÛ˜[YK˜[YL—HÙˆØš™XÝ™[šY\Ê˜[Y\ÊJHÂˆYˆ
ÝXÚY˜[Y\Ëš\Ê˜[YJHÈœ[“[Z]YÛÜ›Ý—Kš[˜ÛY\Ê˜[YJJHÛÛ[YNÂˆÛÛœÝšY[ÌÈHË‹‹˜[
	ÖÛ˜[YOH‰È
È˜[YH
È	È—IÊWNÂˆ›Üˆ
ÛÛœÝšY[ÈÙˆšY[ÌÊHÂˆYˆ
šY[Ë\HOOH˜ÚXÚØ›ÞŠHšY[Ë˜ÚXÚÙYH\œ˜^Kš\Ð\œ˜^J˜[YLŠH	‰ˆ˜[YL‹š[˜ÛY\ÊšY[Ë˜[YJNÂˆ[ÙHšY[Ë˜[YHH˜[YLˆOH[È˜[YLˆˆˆŽÂˆBˆBˆ˜YH™XYŠ
NÂˆ˜Yœ™]šY]ÙYHË‹‹‹Êˆ×ÔT‘W×È
‹È™]ÈÙ]
Ë‹‹™˜Yœ™]šY]ÙY‹‹œ™\ÝÜ™Yœ™]šY]ÙYJWNÂˆ›Üˆ
ÛÛœÝÚÙ^WHÙˆÝ\ÊHYˆ
Ù^HOOH™\Ý[˜][ÛˆŠH\K˜Y
Ù^JNÂˆ\]J
NÂˆ™YY˜XÚÊµå5å5äµäõê5åuêˆ5êuåuåõåµê5åH5çµå5êµæõè5åuçÈ5å5ä5åõê5åuçËˆ5å5êuæuè5åuæuæuçH5êuæõäuê5èµê5æõêˆ5è5êuçµê5åH5äuæ5æuåuæ5åÈ5ç5åõéH5êuçµæuê5å5æõäõæH5ç5êuçµåuê5å5æõåuç5äuèµè5çËˆŠNÂˆJK˜Ø]Ú


HOˆÂˆYˆ
[]™JH™YY˜XÚÊµç5ä5è5æuêµçÈ5ç5æ5èµåuçÈ5æõèµêˆ5ä5êˆ5å5êµæõè5åuçÈ5å5ä5åõê5åuçËˆ5ä5é5êuê5ç5èµê5åuæˆ5åuç5êuçµåuê5ä5êˆ5å5å5äµäõê5åuêˆ5æõä5çËˆŠNÂˆJNÂˆ™]\›ˆ

HOˆÂˆ[]™HH˜[ÙNÂˆX[ÙËœ™[[Ý™Q]™[\Ý[™\Š˜Ø[˜Ù[‹Ø[˜Ù[
NÂˆX[ÙËœ™[[Ý™Q]™[\Ý[™\Š˜ÛÜÙH‹ÛÜÙY
NÂˆNÂˆB‚ˆËÈÜ˜ËÜ[›š[™ËXØ\Xš[]Y\ËšœÂˆ[˜Ý[Ûˆ[›š[™ÐØ\Xš[]JÜ[ÛœËXÚÙ]
HÂˆ˜\ˆØMÂˆYˆ

Ü[ÛœÈOH[È›ÚYˆÜ[ÛœËš[š\š]Y
HOOHYJH™]\›ˆYNÂˆÛÛœÝ[][Y[HÜ[ÛœÈOH[È›ÚYˆÜ[ÛœË™[][Y[™[XZ[š[™ÈH
ØMHÜ[ÛœÈOH[È›ÚYˆÜ[ÛœËœ™[XZ[š[™ÊHOH[È›ÚYˆØMØXÚÙ]NÂˆ™]\›ˆ
Ü[ÛœÈOH[È›ÚYˆÜ[ÛœËœXÚØYÙ\Ñ[˜X›Y
HOOHYH	‰ˆÈ\Ý‹›]™H—Kš[˜ÛY\ÊÜ[ÛœËœ^[Y[[ÙJH	‰ˆ
[][Y[OH[È›ÚYˆ[][Y[œ^[Y[Û[ÙJHOOHÜ[ÛœËœ^[Y[[ÙH	‰ˆ\[Ùˆ[][Y[œXÚØYÙWÝ™\œÚ[Û—ÚYOOHœÝš[™Èˆ	‰ˆÈœÝ\\ˆ‹™[‹˜ÛÛ\[š[Ûˆ—Kš[˜ÛY\Ê[][Y[œ[—ØÛÙJH	‰ˆ
XÚÙ]OOHœ™\ÙX\˜Úˆ[][Y[œ[—ØÛÙHOOH˜ÛÛ\[š[ÛˆŠH	‰ˆ[X™\‹š\ÔØY™R[YÙ\Š™[XZ[š[™ÊH	‰ˆ™[XZ[š[™ÈˆÂˆB‚ˆËÈÜ˜ËÜ[›š[™Ë\›ÙÜ™\ÜËšœÂˆ˜\ˆXÝ]™TÝ]\ÈHÊˆ×ÔT‘W×È
‹È™]ÈÙ]
Èœ]Y]YY‹œ™\ÙX\˜Ú[™È—JNÂˆ˜\ˆÝYÙ\ÈHÈ]\ÙYˆÈµå5å5ê5éµå5çµåuêuå5æuêˆ‹µç5åõéH5å5çµêuæˆ5æõäõæH5ç5åõåµåuê5ç5ä5åuêµå5å5ê5éµåˆ5ç5ä5êµæué5êµåÈ5äuéõêuêˆ5êµæõè5åuçÈ5åõäõêuåˆ—K]\ÙYÜ™XYNˆÈµå5êµæõè5åuçÈ5çµåuæõçÈ5åuçµåuêuå5å‹µå5êµåuéµä5å5è5êuçµê5å5æõæ5æuåuæ5åˆ5ç5åõéH5å5çµêuæˆ5æõäõæH5ç5äuäõåuéÈ5åuç5ä5êuê5ä5åuêµåˆ—K™\Ý[YYˆÈµå5å5ê5éµå5åõåuäõêuå‹µå5çµêuæˆ5èµäuåuäõå5èµç5ä5åuêµå5å5ê5éµåˆ—K]Y]YYˆÈµçµçµêµæuè5å5ç5êµåõæuç5êˆ5èµäuåuäõå‹µå5äuéõêuå5å5êµéõäuç5å5åuçµçµêµæuè5å5ç5å5é5èµç5åˆ—KÝX›Z][™ÎˆÈµêuåuç5åÈ5äuéõêuå5ç5èué5éÈRH‹µè5êµåuè5æH5å5êµæõè5åuçÈ5è5äuäõéõåH5åuå5äuéõêuå5è5êuç5åõêˆ5ç5èué5éËˆ—KÝX›Z]YˆÈµå5äuéõêuå5å5êµéõäuç5å5ä5éµç5èué5éÈRH‹µçµçµêµæuçÈ5ç5èµäõæõåuçÈ5çµå5èué5éËˆ5ä5æuçÈ5æõê5äµèˆ5åµçµçÈ5èuæuåuçH5çµäõåuæuéËˆ—K›ÝšY\—Ü]Y]YYˆÈµäuêµåuê5ä5éµç5èué5éÈRH‹µå5èué5éÈ5ä5æuêuê5ä5êˆ5å5äuéõêuå5åuå5æuä5çµçµêµæuè5å5ç5èµæuäuåuäËˆ5ä5æuçÈ5æõê5äµèˆ5åµçµçÈ5èuæuåuçH5çµäõåuæuéËˆ—K›ÝšY\—ÝÛÜšÚ[™ÎˆÈµèué5éÈRH5èµåuäuäÈ5èµç5å5êµæõè5åuçÈ‹µå5èué5éÈ5èµäõæuæuçÈ5çµèµäuäÈ5ä5êˆ5å5êµåuæõè5æuê‹ˆ5ä5æuçÈ5æõê5äµèˆ5åµçµçÈ5èuæuåuçH5çµäõåuæuéËˆ—K™\ÙX\˜Ú[™ÎˆÈµåõæué5åuêH5çµæuäõèˆ5éµæuäuåuê5æH‹µå5èué5éÈ5çµäõåuåuåÈ5èµç5åõæué5åuêH5çµéõåuê5åuê‹ˆ5åµçµçÈ5å5èuæuåuçH5èµäõæuæuçÈ5ä5æuè5åH5æuäõåuè‹ˆ—K˜Y[™ÎˆÈµçµæõæuçÈ5ä5êˆ5å5êµåuæõè5æuêˆ5å5çµåuéµèµêˆ‹µå5êµéõäuç5èuæuçµçÈ5ç5å5æõè5êˆ5å5êµêuåuäuåˆ5å5êµåuæõè5æuêˆ5èµäõæuæuçÈ5ä5æuè5å5çµåuæõè5å5ç5äuäõæuéõåˆ—K˜[Y][™ÎˆÈµäuåuäõéÈ5ä5êˆ5å5êµåuæõè5æuêˆ5êuå5êµéõäuç5å‹µäuåuäõéÈ5ä5êˆ5çµäuè5å5å5êµåuæõè5æuê‹5å5êµä5ê5æuæõæuçK5å5êµéõéµæuäH5åuå5çµéõåuê5åuê‹ˆ—K›ÝšY\—Ü™]žNˆÈµçµçµêµæuçÈ5ç5åõæuäõåuêH5å5éõêuê5èµçH5å5èué5éÈ‹µäuäõæuéõêˆ5å5çµéµäH5çµåuç5å5èué5éÈ5è5æõêuç5åˆ5å5çµèµê5æõêˆ5êµäuäõåuéÈ5êuåuäH5ç5ç5ä5êuç5æuåõêˆ5äuéõêuêˆ5êµæõè5åuçÈ5è5åuèué5ê‹ˆ—K™XYNˆÈµå5êµæõè5åuçÈ5çµåuæõçÈ5ç5äuäõæuéõå‹µå5äuäõæuéõåuêˆ5å5èuêµæuæuçµåKˆ5äuäõåuéÈ5ä5êˆ5å5å5éµèµå5ç5é5è5æH5ä5æuêuåuê5å5åuèué5êµå5ç5ä5êµêˆ—KÛÛ\]YˆÈµå5êµæõè5åuçÈ5è5åuèuèÈ5ç5ä5êµê‹µå5å5åuèué5å5å5èuêµæuæuçµå5ç5ä5åõê5ä5æuêuåuê5æ‹ˆ—KØ[˜Ù[YˆÈµå5å5ê5éµå5äuåuæ5ç5å‹µå5äuæuæ5åuç5èuåué5æKˆ5ä5æH5ä5é5êuê5ç5å5çµêuæuæˆ5å5ê5éµå5åµåH5åuç5ä5êµêµåuåuèuèÈ5çµçµè5å5êµåuæõè5æuê‹ˆ—K˜Z[YˆÈµå5å5ê5éµå5è5æõêuç5å‹µå5å5ê5éµå5å5èuêµæuæuçµå5ç5ç5ä5å5åuèué5êˆ5êµåuæõè5æuê‹ˆ—K™YY×Ù]Z[ÎˆÈµå5êµæõè5åuçÈ5ç5ä5èµäuê5ä5êˆ5æõç5å5äuäõæuéõåuêˆ‹µå5êµéõäuç5å5êµêuåuäuå5êuç5ä5èµäuê5å5ä5æuçµåuê‹ˆ5ç5ä5êuåuè5åH5è5êµåuè5æH5å5æ5æuåuçˆ—KYÙ]Ù^]\ÝYˆÈµå5å5ê5éµå5è5èµéµê5å5ç5äuäõæuéõêˆ5èµç5åuêˆ‹µç5ä5è5æuêµçÈ5ç5å5çµêuæuæˆ5ç5é5è5æH5äuäõæuéõêˆ5è5êµåuè5æH5å5èµç5åuê‹ˆ—HNÂˆ˜\ˆ\œÙHH
ŠHOˆÂˆÛÛœÝH]Kœ\œÙJŠNÂˆ™]\›ˆ[X™\‹š\Ñš[š]J
HÈˆ[ÂˆNÂˆ˜\ˆ›Ü›X]H
\ÊHOˆÂˆÛÛœÝÙXÛÛ™ÈHX]›X^
X]™›ÛÜŠ\ÈÈYLÊJNÂˆ™]\›ˆÝš[™ÊX]™›ÛÜŠÙXÛÛ™ÈÈŒ
JKœYÝ\
‹ŒŠH
ÈŽˆˆ
ÈÝš[™ÊÙXÛÛ™È	HŒ
KœYÝ\
‹ŒŠNÂˆNÂˆ˜\ˆ\ØØ\LÈH
ŠHOˆÝš[™ÊˆOH[ÈˆˆˆŠKœ™\XÙJÖÉˆ‰×KÙË
ÊHOˆ
È‰ˆŽˆ‰˜[\È‹Žˆ‰›È‹ˆŽˆ‰™ÝÈ‹	È‰Îˆ‰œ][ÝÈ‹‰ÈŽˆ‰ˆÌÎNÈˆJVØ×JNÂˆ[˜Ý[Ûˆ›ÙÜ™\ÜÐÛØÚÜÊ[‹›ÝÈH]K››ÝÊ
JHÂˆ˜\ˆØMØ‹ØËÙÙNÂˆÛÛœÝXÝ]™HHXÝ]™TÝ]\Ëš\Ê[‹œÝ]JKÝ\H\œÙJ[‹˜Ü™X]YØ]
K[™HXÝ]™HÈ[‹œÝ]HOOHœ]Y]YYˆ	‰ˆ[‹œ]\ÙYØ]È
ØMH\œÙJ[‹œ]\ÙYØ]
JHOH[ÈØMˆ›ÝÈˆ›ÝÈˆ
ØˆH\œÙJ[‹™š[š\ÚYØ]
JHOH[ÈØˆˆ\œÙJ[‹\]YØ]
K\ÝH\œÙJ
ØÈH[‹œ›ÙÜ™\ÜÊHOH[È›ÚYˆØË˜ÚXÚÙY]
H\œÙJ[‹\]YØ]
HÝ\ÂˆÛÛœÝXÚÈHXÝ]™HÈ›ÝÈˆ[™Âˆ™]\›ˆÈ[\ÙYˆÝ\OOH[[™OOH[Èµç5ä5åµçµæuçÈˆˆ›Ü›X]
[™HÝ\
KXY[™NˆÝ\OOH[XÚÈOOH[Èµç5ä5åµçµæuçÈˆˆ›Ü›X]


ÙH\œÙJ[‹™XY[™WØ]
JHOH[ÈÙˆÝ\
ÈMH
ˆ™M
HH
[‹œÝ]HOOHœ]Y]YYˆ	‰ˆ[‹œ]\ÙYØ]È
ÙHH\œÙJ[‹œ]\ÙYØ]
JHOH[ÈÙHˆXÚÈˆXÚÊJK\ÝXÝ]š]Nˆ\ÝOOH[XÚÈOOH[Èµæ5ê5çH5å5êµéõäuçˆˆ›Ü›X]
XÚÈH\Ý
HNÂˆBˆ[˜Ý[Ûˆ[”›ÙÜ™\ÜÊ[‹›ÝÈH]K››ÝÊ
JHÂˆ˜\ˆØMØ‹ØÎÂˆÛÛœÝXÝ]™HHXÝ]™TÝ]\Ëš\Ê[‹œÝ]JK]\ÙYH›ÛÛX[Š[‹œ]\ÙYØ]
H	‰ˆÈœ]Y]YY‹œ™\ÙX\˜Ú[™È‹œ™XYH—Kš[˜ÛY\Ê[‹œÝ]JKÝYÙHH]\ÙYÈ[‹œÝ]HOOHœ™XYHˆÈœ]\ÙYÜ™XYHˆˆœ]\ÙYˆˆXÝ]™HÈÝYÙ\ÖÊØMH[‹œ›ÙÜ™\ÜÊHOH[È›ÚYˆØMœÝYÙWHÈ[‹œ›ÙÜ™\ÜËœÝYÙHˆ[‹œÝ]HOOHœ]Y]YYˆÈœ]Y]YYˆˆœ›ÝšY\—ÝÛÜšÚ[™Èˆˆ[‹œÝ]NÂˆ]Ý]K\ØÜš\[Û—HHÝYÙ\ÖÜÝYÙWHÈµçµéµäH5ç5ä5æuäõåuèˆ‹µæuêH5ç5ê5èµè5çÈ5ä5êˆ5çµéµäH5å5å5ê5éµåˆ—NÂˆYˆ
[‹œ\œÜÙHOOH™Z[HŠHÂˆYˆ
ÝYÙHOOH˜ÛÛ\]YŠHÂˆ]HHµå5äuäõæuéõå5å5æuåuçµæuêˆ5å5èuêµæuæuçµåŽÂˆ\ØÜš\[ÛˆHµå5äõåuí5åÈ5åuäuéõêuåuêˆ5å5ä5æuêuåuê5åµçµæuè5æuçH5äuçµèuæˆ5å5èuåuæõçËˆ5ç5ä5äuåuéµèµå5å5åµçµè5å5ä5éµç5èué5éËˆŽÂˆH[ÙHYˆ
ÝYÙHOOHœ™XYHŠHÂˆ]HHµå5çµåõéõê5å5æuåuçµæH5çµåuæõçÈŽÂˆ\ØÜš\[ÛˆHµå5çµèµê5æõêˆ5çµæõæuè5å5äõåuí5åÈ5åuå5éµèµåuêˆ5ç5äuäõæuéõå5æuäõè5æuê‹ˆŽÂˆH[ÙHYˆ
ÝYÙHOOHœ]\ÙYÜ™XYHŠHÂˆ]HHµå5çµåõéõê5å5æuåuçµæH5çµåuæõçÈ5åuçµåuêuå5åŽÂˆ\ØÜš\[ÛˆHµç5åõéH5å5çµêuæˆ5æõäõæH5ç5é5ê5èuçH5ä5êˆ5å5äõåuí5åÈ5åuäuéõêuåuêˆ5å5ä5æuêuåuêˆŽÂˆBˆBˆÛÛœÝ\ÝH\œÙJ
ØˆH[‹œ›ÙÜ™\ÜÊHOH[È›ÚYˆØ‹˜ÚXÚÙY]
H\œÙJ[‹\]YØ]
H\œÙJ[‹˜Ü™X]YØ]
KÝ[HHXÝ]™H	‰ˆ\]\ÙY	‰ˆ\ÝOOH[	‰ˆ›ÝÈH\ÝˆNMÂˆÛÛœÝ™\Ù\™YH[X™\Š[‹œ™\Ù\™YØYÛÜ›Ý
HÂˆÛÛœÝ^\™YHXÝ]™H	‰ˆJ]\ÙY	‰ˆ[‹œÝ]HOOHœ]Y]YYŠH	‰ˆ\œÙJ[‹˜Ü™X]YØ]
HOOH[	‰ˆ›ÝÈˆ

ØÈH\œÙJ[‹™XY[™WØ]
JHOH[ÈØÈˆ\œÙJ[‹˜Ü™X]YØ]
H
ÈMH
ˆ™M
NÂˆÛÛœÝ›ÝXÙHH]\ÙYÈ[‹œÝ]HOOHœ]Y]YYˆÈµç5ä5êµæuêuç5åÈ5äuéõêuêˆRH5èµäÈ5ç5ç5åõæuéµå5èµç5å5çµêuæ‹ˆ5å5êµéõéµæuäH5è5êuä5ê5êuçµåuê5ç5å5ê5éµå5åµåKˆˆˆ[‹œÝ]HOOHœ™XYHˆÈµå5êµåuæõè5æuêˆ5çµåuæõè5å5ä5æˆ5ä5æuè5å5çµä5åuêuê5êˆ5ç5é5ê5èuåuçKˆ5ç5åõéH5å5çµêuæˆ5æõäõæH5ç5äuäõåuéÈ5åuç5å5åuèuæuèÈ5ä5åuêµåˆˆˆµäuéõêuêˆRH5êuæõäuê5è5êuç5åõå5ç5èué5éÈ5èµêuåuæuå5ç5å5çµêuæuæˆ5åuç5éµê5åuæˆ5êµéõéµæuäKˆ5ä5æuçÈ5é5ê5èuåuçH5äuåµçµçÈ5å5êuå5æuåÈ5å5çµêuæˆ5æuåõåµåuê5ç5ä5åuêµå5å5ê5éµåˆˆˆXXÝ]™H	‰ˆ™\Ù\™YˆÈµå5å5ê5éµå5ä5æuè5å5é5èµæuç5åˆ5èµç5åuêˆ5å5èué5éÈ5æ5ê5çH5ä5åuçµêµåÈˆ
È
™\Ù\™YÈL
KÑš^Y
ŠH
Èˆ8 ªˆ5è5êuä5ê5åH5êuçµåuê5æuçH5ç5äuäõæuéõåˆˆˆ^\™YÈµåõç5é5å5çµäµäuç5êˆ5å5åµçµçÈ5êuç5å5å5ê5éµåˆ5çµçµêµæuçÈ5ç5ä5æuêuåuê5å5èuæuåuçH5çµå5êuê5êŽÈ5ä5æuçÈ5éµåuê5æˆ5ç5å5êµåõæuç5å5ê5éµå5è5åuèué5ê‹ˆˆˆÝ[HÈµç5ä5å5êµéõäuç5èµäõæõåuçÈ5çµå5èuåuæõçÈ5çµèµçÈ5äõéõåuê‹ˆ5æuæuêµæõçÈ5èµæuæõåuäH5ä5éµç5å5èué5éÎÈ5ä5é5êuê5ç5ê5èµè5çÈ5çµéµäH5ä5åH5ç5èµéµåuêˆˆˆˆŽÂˆ™]\›ˆÈXÝ]™K]\ÙYÝYÙK]K\ØÜš\[Û‹Ý[K›ÝXÙHNÂˆBˆ[˜Ý[ÛˆÚÙ[•\ØYÙSX\šÝ\
[ŠHÂˆÛÛœÝHH[‹ÚÙ[—Ý\ØYÙK˜[YˆHH	‰ˆÈš[œ]ÝÚÙ[œÈ‹›Ý]]ÝÚÙ[œÈ‹Ý[ÝÚÙ[œÈ—K™]™\žJ
ÊHOˆ[X™\‹š\ÔØY™R[YÙ\ŠVÚ×JH	‰ˆVÚ×HH
H	‰ˆKÝ[ÝÚÙ[œÈOOHKš[œ]ÝÚÙ[œÈ
ÈK›Ý]]ÝÚÙ[œÎÂˆYˆ
]˜[YŠH™]\›ˆ	ÏÛ\ÜÏH›]]Yˆ]K\[‹]ÚÙ[‹][˜]˜Z[X›Oµè5êµåuè5æH5æ5åuéõè5æuçH5ä5æuè5çH5åµçµæuè5æuçH5ç5å5ê5éµå5åµåKÜ‰ÎÂˆÛÛœÝˆH
ŠHOˆ™]È[“[X™\‘›Ü›X]
šKRSŠK™›Ü›X]
ŠNÂˆ™]\›ˆ	ÏÙXÝ[ÛˆÛ\ÜÏHœ[‹]ÚÙ[‹]\ØYÙHˆ\šXK[X™[Hµè5æuéµåuç5æ5åuéõè5æuçHµæ5åuéõè5æuçH5êuè5åuéµç5åH5äuå5ê5éµåÚ]ˆÛ\ÜÏHœ[‹][Z[™È]Ü[µéõç5æÜÜ[Ý›Û™Ï‰È
ÈŠKš[œ]ÝÚÙ[œÊH
ÈÜÝ›Û™ÏÙ]]Ü[µé5ç5æÜÜ[Ý›Û™Ïˆˆ
ÈŠK›Ý]]ÝÚÙ[œÊH
ÈÜÝ›Û™ÏÙ]]Ü[µèuæˆ5å5æõåuçÜÜ[Ý›Û™È]K\[‹]ÚÙ[‹]Ý[ˆˆ
ÈŠKÝ[ÝÚÙ[œÊH
È	ÏÜÝ›Û™ÏÙ]Ù]Û\ÜÏH›]]Yµç5é5æH5äõæuåuåuåÈ5å5èué5éËˆ5èµç5åuêˆ5åõæué5åuêH5åuæõç5æuçH5çµåõåuêuäuêˆ5äuè5é5ê5äËÜÜÙXÝ[Û‰ÎÂˆBˆ[˜Ý[Ûˆ™[™\”[”›ÙÜ™\ÜÊ[‹›ÝÈH]K››ÝÊ
JHÂˆ˜\ˆØMØ‹ØËÙÙKÙŽÂˆÛÛœÝH[”›ÙÜ™\ÜÊ[‹›ÝÊKÛØÚÈH›ÙÜ™\ÜÐÛØÚÜÊ[‹›ÝÊK]™[ÈH\œ˜^Kš\Ð\œ˜^J
ØMH[‹œ›ÙÜ™\ÜÊHOH[È›ÚYˆØM™]™[ÊHÈ[‹œ›ÙÜ™\ÜË™]™[Ë™š[\Š
JHOˆÝYÙ\ÖÙKœÝYÙWH	‰ˆ\œÙJK˜]
HOOH[
KœÛXÙJLLŠHˆ×NÂˆÛÛœÝ˜[˜XÚÈHÞÈÝYÙNˆœ]Y]YY‹]ˆ[‹˜Ü™X]YØ]WNÂˆYˆ
\˜XÝ]™JH˜[˜XÚËœ\Ú
ÈÝYÙNˆœÝYÙK]ˆ[‹\]YØ]JNÂˆÛÛœÝ[Y[[™HH]™[Ë›[™ÝÈË‹‹™˜[˜XÚËœÛXÙJJK‹‹™]™[Ë‹‹ˆ\˜XÝ]™HÈÞÈÝYÙNˆœÝYÙK]ˆ[‹\]YØ]WHˆ×WHˆ˜[˜XÚÎÂˆ™]\›ˆ	ÏÙXÝ[ÛˆÛ\ÜÏHœ[‹\›ÙÜ™\ÜÈˆ]K\[‹\›ÙÜ™\ÜÈ\šXK[X™[HµçµèµéõäH5èµäuåuäõêˆ5å5èuåuæõçÈ]ˆÛ\ÜÏHœ[‹\›ÙÜ™\ÜËZXY[™ÈÜ[ˆÛ\ÜÏHœ[‹\Ý]H	È
È
˜XÝ]™H	‰ˆ\œ]\ÙYÈš\Ë\[›š[™ÈˆˆˆŠH
È	È‰È
È
œ]\ÙYÈµçµåuêuå5åˆˆ˜XÝ]™HÈµäuêµå5ç5æuæˆˆˆµå5èuêµæuæuçHŠH
ÈÜÜ[È]K\[‹]]Oˆˆ
È\ØØ\LÊ]JH
ÈÚÏÙ]ˆˆ
È\ØØ\LÊ™\ØÜš\[ÛŠH
È	ÏÜ]ˆÛ\ÜÏHœ[‹][Z[™È]Ü[µåµçµçÈ5êuåõç5èÏÜÜ[Ý›Û™È]K\[‹Y[\ÙY‰È
ÈÛØÚË™[\ÙY
ÈÜÝ›Û™ÏÙ]ˆˆ
È
˜XÝ]™HÈ]Ü[µèµäÈ5çµäµäuç5êˆ5å5åµçµçÈ
5ç5ä5åµçµçÈ5èuæuåuçH5çµêuåuèµê
OÜÜ[Ý›Û™È]K\[‹YXY[™Oˆˆ
ÈÛØÚË™XY[™H
ÈÜÝ›Û™ÏÙ]ˆˆˆˆŠH
È]Ü[µåµçµçÈ5çµä5åˆ5å5èµäõæõåuçÈ5å5ä5åõê5åuçÈ5çµå5èuåuæõçÏÜÜ[Ý›Û™È]K\[‹[\ÝXXÝ]š]Oˆˆ
ÈÛØÚË›\ÝXÝ]š]H
ÈÜÝ›Û™ÏÙ]Ù]ˆˆ
È
\˜XÝ]™HÈÚÙ[•\ØYÙSX\šÝ\
[ŠHˆˆŠH
È	ÏÛ\ÜÏHœ[‹[›ÝXÙHˆ]K\[‹\Ý[H	È
È
\››ÝXÙHÈšY[ˆˆˆˆŠH
Èˆˆ
È\ØØ\LÊ››ÝXÙJH
È	ÏÜÛ\ÜÏH›]]Yˆ]K\[‹\Þ[˜Ï‰È
È
˜XÝ]™HÈµäuåuäõéÈ5çµéµäH5çµåuç5å5êuê5ê¸ )ˆˆˆµå5å5ê5éµå5å5èuêµæuæuçµå0­È5å5êuèµåuè5æuçH5è5èµéµê5åHŠH
ÈÜˆˆ
È
˜XÝ]™HÈ	ÏÛ\ÜÏH›]]Yµå5çµèuæˆ5äuåuäõéÈ5çµéµäH5æõçH5êuè5æuåuê‹ˆ5èµäõæõåuçÈ5çµå5èué5éÈ5èµêuåuæH5ç5éõåõêˆ5èµäÈ5æõäõéõåˆ5çµäµäuç5êˆ5å5å5ê5éµå5å5æuäMH5äõéõåuêŽÈ5åµå5ä5æuè5åH5åµçµçÈ5èuæuåuçH5çµåuäuæ5åËÜ‰ÈˆˆŠH
È	Ïµçµå5äuåuéµèˆ5èµäÈ5èµæõêuæuåOÏÚÛÛ\ÜÏHœ[‹][Y[[™H‰È
È[Y[[™K›X\

JHOˆÂˆ˜\ˆØMNÂˆ™]\›ˆOÜ[ˆˆ
È\ØØ\LÊ

ØMHHÝYÙ\ÖÙKœÝYÙWJHOH[È›ÚYˆØMVÌJHKœÝYÙJH
ÈÜÜ[[YOˆˆ
È\ØØ\LÊ\œÙJK˜]
HOOH[Èˆˆˆ™]È]JK˜]
KÓØØ[U[YTÝš[™ÊšKRS‹ÈÝ\ŽˆŒ‹YYÚ]‹Z[]NˆŒ‹YYÚ]‹ÙXÛÛ™ˆŒ‹YYÚ]ˆJJH
ÈÝ[YOÛOˆŽÂˆJKš›Ú[ŠˆŠH
ÈÛÛˆˆ
È


ØˆH[‹œ›ÙÜ™\ÜÊHOH[È›ÚYˆØ‹œÙX\˜Ú\ÊHˆÈµåõæué5åuêuæH5çµæuäõèˆ5êuå5åuêuç5çµåNˆˆ
È[X™\Š[‹œ›ÙÜ™\ÜËœÙX\˜Ú\ÊH
ÈÜˆˆˆˆŠH
È
[‹˜\Y˜XÝÈµå5êµåuéµä5å5æõåuç5ç5êˆˆ
È

ÙˆH
ÙHH
ØÈH[‹˜\Y˜XÝœ™XÛÜ™ÊHOH[È›ÚYˆØË›[™Ý
HOH[ÈÙHˆ
ÙH[‹˜\Y˜XÝ˜ÚXÚÜÊHOH[È›ÚYˆÙ›[™Ý
HOH[ÈÙˆˆ
H
Èˆ5é5ê5æuæ5æuçH5åu¯ˆˆ
È[‹˜\Y˜XÝœÛÝ\˜Ù\Ë›[™Ý
Èˆ5çµéõåuê5åuêˆ5ç5äuäõæuéõåÜˆˆˆˆŠH
È	Ï]ˆÛ\ÜÏHœ›ÝÈ[‹XÛÛ›ÛÈ]Ûˆ\OH˜]Ûˆˆ]K\™Yœ™\Ú\[µê5èµè5çÈ5çµéµäH5èµæõêuæuåOØ]Û‰È
È
œ]\ÙYÈ	Ï]Ûˆ\OH˜]Ûˆˆ]K\™\Ý[YK\[ˆÛ\ÜÏHœš[X\žHµå5çµêuæØ]Û‰Èˆ˜XÝ]™HÈ	Ï]Ûˆ\OH˜]Ûˆˆ]K\]\ÙK\[µèµéµåuê5åµçµè5æuêØ]Û‰ÈˆˆŠH
È
˜XÝ]™Hœ]\ÙY[‹œÝ]HOOHœ™XYHˆÈ	Ï]Ûˆ\OH˜]Ûˆˆ]KXØ[˜Ù[\[ˆÛ\ÜÏH™[™Ù\ˆµäuæ5ç5å5ê5éµåØ]Û‰ÈˆˆŠH
È	ÏÙ]Û\ÜÏH›]]Y‰È
È
œ]\ÙY	‰ˆ[‹œÝ]HOOHœ]Y]YYˆÈµå5å5ê5éµå5çµåuêuå5æuêˆ5äuêuê5ê‹ˆ5ä5é5êuê5ç5èuäµåuê5ä5êˆ5å5åõç5åuçÈ5åuç5åõåµåuê5äuå5çµêuæ‹ˆˆˆ˜XÝ]™HÈµä5é5êuê5ç5èuäµåuê5ä5êˆ5å5åõç5åuçÈ5åuç5åõåµåuê5äõê5æˆ5í5êµæõè5åuçÈ5æuèµäõíÈ5å5èµäuåuäõå5çµêµäuéµèµêˆ5äuêuê5ê‹ˆˆˆµé5ê5æ5æH5å5å5ê5éµå5è5êuçµê5åKˆ5ä5é5êuê5ç5åõåµåuê5ä5ç5æuå5çH5äõê5æˆ5í5êµæõè5åuçÈ5æuèµäõíˆŠH
ÈÜÜÙXÝ[ÛˆŽÂˆBˆ[˜Ý[Ûˆ\]T[ÛØÚÜÊÛÛZ[™\‹[‹\ÝÞ[˜Ë›ÝÈH]K››ÝÊ
JHÂˆÛÛœÝÈH›ÙÜ™\ÜÐÛØÚÜÊ[‹›ÝÊKH[”›ÙÜ™\ÜÊ[‹›ÝÊNÂˆ›Üˆ
ÛÛœÝÚÙ^KÙ[XÝÜ—HÙˆÖÈ™[\ÙY‹–Ù]K\[‹Y[\ÙYH—KÈ™XY[™H‹–Ù]K\[‹YXY[™WH—KÈ›\ÝXÝ]š]H‹–Ù]K\[‹[\ÝXXÝ]š]WH—WJHÂˆÛÛœÝ[HÛÛZ[™\‹œ]Y\žTÙ[XÝÜŠÙ[XÝÜŠNÂˆYˆ
[
H[^ÛÛ[HÖÚÙ^WNÂˆBˆÛÛœÝ›ÝXÙHHÛÛZ[™\‹œ]Y\žTÙ[XÝÜŠ–Ù]K\[‹\Ý[WHŠNÂˆYˆ
›ÝXÙJHÂˆ›ÝXÙKšY[ˆH\››ÝXÙNÂˆ›ÝXÙK^ÛÛ[H››ÝXÙNÂˆBˆÛÛœÝÞ[˜ÈHÛÛZ[™\‹œ]Y\žTÙ[XÝÜŠ–Ù]K\[‹\Þ[˜×HŠNÂˆYˆ
Þ[˜ÊHÞ[˜Ë^ÛÛ[H\˜XÝ]™HÈµå5å5ê5éµå5å5èuêµæuæuçµå0­È5å5êuèµåuè5æuçH5è5èµéµê5åHˆˆ\ÝÞ[˜ÈÈµå5åõæuäuåuê5ç5êuê5êˆ5è5äuäõéÈ5ç5é5è5æHˆ
È›Ü›X]
›ÝÈH\ÝÞ[˜ÊHˆµçµçµêµæuçÈ5ç5èµäõæõåuçÈ5çµå5êuê5êˆŽÂˆB‚ˆËÈÜ˜ËØYÙ[ZX‹šœÂˆ˜\ˆ]MH
ŠHOˆÂˆÛÛœÝH™]È]JŠNÂˆ™]\›ˆ[X™\‹š\Ñš[š]J
Ù
HÈÓØØ[TÝš[™ÊšKRS‹È[YV›Û™Nˆ\ÚXKÒ™\\Ø[[HˆJHˆµç5ä5åµçµæuçÈŽÂˆNÂˆ˜\ˆ[šÈH
\›X™[
HOˆÂˆžHÂˆ™]\›ˆ	ÏH™YH‰È
È\ØØ\R[
X›XÕ\›
\›
JH
È	Èˆ\™Ù]H—Ø›[šÈˆ™[H››ÛÜ[™\ˆ›Ü™Y™\œ™\ˆ‰È
È\ØØ\R[
X™[
H
Èˆ8¡¥ÏØOˆŽÂˆHØ]Ú
JHÂˆ™]\›ˆˆŽÂˆBˆNÂˆ˜\ˆÝ]\ÈHÈXÝ]™Nˆµé5èµæuç‹]\ÙYˆµçµåuêuå5å‹ÝÜYˆµæõäuåuæHˆNÂˆ˜\ˆXÚ\Ú[ÛˆHÈ[™[™Îˆµçµçµêµæuè5å5ç5ä5æuêuåuê‹\›Ý™Yˆµä5åuêuê5å5ç5äuæuéµåuèˆ5æuäõè5æH‹™Z™XÝYˆµè5äõåõêµå‹Ý\\œÙYYˆµå5åuåõç5é5å5äuå5éµèµå5ä5åõê5êˆˆNÂˆ[˜Ý[ÛˆYÙ[X“X\šÝ\
]Kš\ŠHÂˆ˜\ˆØMÂˆÛÛœÝÝ]HH

ØMH]KœØÚY[JHOH[È›ÚYˆØMœÝ]JHœÝÜY‹ˆH]K˜YÙ]ßK™\]Y\ÝÈH]Kœ™\]Y\ÝÈ×K™\ÜÈH]Kœ™\ÜÈ×K[ˆH]Kœ[ŽÂˆÛÛœÝÛÛ›ÛÌˆHÝ]HOOH˜XÝ]™HˆÈÖÈœ]\ÙH‹µèµéµåuê5åµçµè5æuêˆ—KÈœÝÜ‹µäuæ5ç5é5èµæuç5åuêˆ5æuåuçµæuêˆ—WHˆÝ]HOOHœ]\ÙYˆÈÖÈœ™\Ý[YH‹µå5çµêuæˆ—KÈœÝÜ‹µäuæ5ç5é5èµæuç5åuêˆ5æuåuçµæuêˆ—WHˆÖÈ™[˜X›H‹µå5é5èµç5äuäõæuéõå5æuåuçµæuêˆ—WNÂˆÛÛœÝÛÛœÙ[HÝ]HOOHœÝÜYˆÈ	ÏX™[Û\ÜÏH™Z[KXÛÛœÙ[[œ]\OH˜ÚXÚØ›Þˆ]KYZ[KXÛÛœÙ[ˆ5ä5è5æH5çµä5êuê5çµåõéõêRH5æuåuçµæH5äuêµêuç5åuçH5äuçµèuäµê5êˆ5êµéõê5êˆŒ8 ªˆ5äuåõåuäõêH5åuèµäÈH8 ªˆ5ç5å5ê5éµå5åuêuæuêµåuèÈ5è5êµåuè5æH5å5êµæõè5åuçÈ5å5äõê5åuêuæuçH5èµçH5èué5éÈ5å5¯RKˆ5ç5ä5æuêµäuéµèµåH5å5åµçµè5åuê‹5åõæuåuäuæuçH5ä5éµç5èué5éõæH5è5èuæuèµåuêˆ5ä5åH5çµêuç5åuåÈ5å5åuäõèµåuê‹ÛX™[‰ÈˆˆŽÂˆÛÛœÝXÝ]™HH[ˆ	‰ˆÈœ]Y]YY‹œ™\ÙX\˜Ú[™È‹œ™XYH—Kš[˜ÛY\Ê[‹œÝ]JNÂˆ™]\›ˆ	Ï]ˆÛ\ÜÏH˜YÙ[ZXˆÙXÝ[Û]ˆÛ\ÜÏHœ›ÝÈµå5èuåuæõçÈ5êuç5æOÚÝ›Û™ÈÛ\ÜÏHœ[‹\Ý]H‰È
ÈÝ]\ÖÜÝ]WH
ÈÜÝ›Û™ÏÙ]µäuäõæuéõå5æuåuçµæuêˆ5äuêuèµåÝ›Û™ÏŒŒ5ç5é5æH5êuèµåuçÈ5æuêuê5ä5çÜÝ›Û™Ïˆ
\ÚXKÒ™\\Ø[[JK5æõåuç5ç5å5êµä5çµå5ç5êuèµåuçÈ5éõæuéKˆ5ç5ä5åõê5å5å5é5èµç5åˆ5å5äuäõæuéõå5å5ê5ä5êuåuè5å5çµåõê5äu¯ŒŒˆ5åõæuäõåuêH5å5êuå5æuå5çµçµêuæuæˆ5å5ê5éµå5éõæuæuçµêŽÈ5äuäõæuéõåuêˆ5åõäõêuåuêˆ5æuåõç5åH5ç5çµåõê5ê‹Üµå5èuåuæõçÈ5äuåuäõéÈ5çµæuäõèˆ5éµæuäuåuê5æH5èµç5çµç5åuè5åuê‹5æ5æuèuåuê‹5å5êuæõê5êˆ5ä5åué5è5åuèˆ5åuêuä5ê5å5å5åµçµè5åuêˆ5å5é5êµåuåõåuê‹ˆ5æõç5äuäõæuéõå5çµæõèuå5èµäÈ5é5ê5æuæ5æuçH5äuèuäuäH5äuæuçÈ5éõæ5äµåuê5æuåuê‹5èµçH5é5æuê5åuæ5çµå5è5äuäõéÈ5åuçµå5è5êuä5êˆ5å5äuäõæuéõå5êµåõç5èuçµåuæˆ5ç5¯ŒŒ5äuå5êµä5çH5ç5åµçµæuè5åuêˆ5å5êuæuê5åuêˆ5åuå5êµéõéµæuäKÜÝ›Û™Ïµä5æuêuåuê5å5éµèµå5ä5æuè5åH5å5åµçµè5åÜÝ›Û™Ïˆ5å5å5åµçµè5å5åuå5êµêuç5åuçH5çµêµäuéµèµæuçH5æuäõè5æuêˆ5äuä5êµê5å5èué5éËˆ5å5çµåõæuê5æuçH5çµêuåuèµê5æuçH5åuå5åµçµæuè5åuêˆ5äõåuê5êuêˆ5ä5æuçµåuê‹ÜµêµéõéµæuäHRH5å5åõåuäõêNˆˆ
È›Ü›X][Û™^J
‹œÜ[YÛÜ›Ý
HÈL
H
Èˆ5è5åuéµç5åH0­Èˆ
È›Ü›X][Û™^J
‹œ™\Ù\™YYÛÜ›Ý
HÈL
H
Èˆ5êuçµåuê5æuçH0­Èˆ
È›Ü›X][Û™^JX]›X^
™LÈH
‹œÜ[YÛÜ›Ý
HH
‹œ™\Ù\™YYÛÜ›Ý
JHÈL
H
Èˆ5åµçµæuè5æuçKˆ5äuäõæuéõå5êuè5åõèuçµå5êµåué5æuèˆ5äuäõåuí5åË5ç5ç5ä5éõê5æuä5êˆRKÜˆˆ
È
Y]K˜˜\Ù[[™P]˜Z[X›HÈ	ÏÛ\ÜÏHœ[‹[›ÝXÙHµæuêH5ç5çµç5ä5åuç5ä5êuê5êµåõæuç5å5ä5êˆ5êuä5ç5åuçÈ5í5êµæõè5åuçÈ5æuèµäõí5æõäõæH5ç5êuçµåuê5å5èµäõé5åuêˆ5ç5çµåõéõê5å5æuåuçµæKÜ‰ÈˆˆŠH
ÈÛÛœÙ[
È	Ï]ˆÛ\ÜÏHœ›ÝÈ‰È
ÈÛÛ›ÛÌ‹›X\

ØXÝ[ÛŒ‹X™[JHOˆ	Ï]Ûˆ\OH˜]Ûˆˆ]KYZ[KXÛÛ›ÛH‰È
ÈXÝ[ÛŒˆ
È	Èˆ	È
È
XÝ[ÛŒˆOOH™[˜X›HˆXÝ[ÛŒˆOOHœ™\Ý[YHˆ	‰ˆ\[›š[™ÐØ\Xš[]J]KœXÚØYÙSÜ[ÛœËœ™\ÙX\˜ÚŠHÈ™\ØX›YˆˆˆŠH
Èˆˆ
ÈX™[
ÈØ]ÛˆŠKš›Ú[ŠˆŠH
È	Ï]Ûˆ\OH˜]Ûˆˆ]K\™Yœ™\ÚYZ[Oµê5èµè5çÈ5çµéµäH5åuäõåuí5åõåuêØ]ÛÙ]]KYZ[KY™YY˜XÚÈ›ÛOHœÝ]\Èˆ\šXK[]™OHœÛ]HÜÜÙXÝ[Û‰È
ÈÛÛ\][Û“X\šÝ\
š\‹š][\Ëš\‹œÙ][™ÜÊH
È
XÝ]™HÈ™[™\”[”›ÙÜ™\ÜÊ[ŠHˆˆŠH
È	ÏÙXÝ[Ûµäuéõêuåuêˆ5ä5æuêuåuê5åuå5éµèµåuêÚÛ\ÜÏH›]]Yµä5æuêuåuê5êuåuçµê5ä5êˆ5å5äuåõæuê5å5ç5éµåuê5æˆ5å5êµæõè5åuçÈ5åuçµé5è5å5ç5å5åµçµè5å5æuäõè5æuê‹ˆ5ä5åõê5æH5å5å5åµçµè5å5èµäõæõçÈ5ä5êˆ5ê5êuåuçµêˆ5å5å5åµçµè5å5ç5í5å5åuåµçµçõí5ä5åH5í5êuåuç5çuí5æõäõæH5ç5èµäõæõçÈ5ä5êˆ5å5å5êµéõäõçµåuê‹ˆ5êµåuéõèÈ5å5éµèµå5å5åuä5êuèµåuêˆ5çµçµåuèµäÈ5å5çµåõéõêÜ‰È
È
™\]Y\ÝË›[™ÝÈ™\]Y\ÝË›X\

JHOˆÂˆÛÛœÝ][HHš\‹š][\Ë™š[™

JHOˆKšYOOHK˜›ÛÚÚ[™×ÚY
Kœ™\ÚH][H	‰ˆ][K™\œÚ[ÛˆOOHK˜›ÛÚÚ[™×Ý™\œÚ[Ûˆ	‰ˆKš\Ý™\œÚ[ÛˆOOHš\‹™\œÚ[Û‹^\™YH]Kœ\œÙJK™^\™\×Ø]
HH]K››ÝÊ
K[™[™ÈHKœÝ]HOOHœ[™[™Èˆ	‰ˆœ™\Ú	‰ˆY^\™Y	‰ˆVÈµå5åuåµçµçÈ‹µêuåuç5çH—Kš[˜ÛY\Ê][HOH[È›ÚYˆ][Kœ^[ØYœÝ]\ÊKÈHK›Ù™™\ˆßNÂˆ™]\›ˆ	Ï\XÛHÛ\ÜÏH™Z[K[Ù™™\ˆ]ˆÛ\ÜÏHœ›ÝÈÏ‰È
È\ØØ\R[

][HOH[È›ÚYˆ][Kœ^[ØY›˜[YJHµå5éµèµêˆ5å5åµçµè5åŠH
ÈÚÏÝ›Û™Ïˆˆ
È›Ü›X][Û™^JËÝ[ÛÜÝ
H
ÈÜÝ›Û™ÏÙ]ˆˆ
È\ØØ\R[
ËœÝ\Y\ŠH
Èˆ0­Èˆ
È\ØØ\R[
Ë›X™[
H
ÈÜˆˆ
È\ØØ\R[
Ë™]Z[ÊH
ÈÜˆˆ
È\ØØ\R[
^\™YÈµé5äˆ5êµåuéõèÈˆˆYœ™\ÚÈµè5êµåuè5æH5å5å5åµçµè5å5å5êuêµè5åNÈ5è5äõê5êuêˆ5äuäõæuéõå5åõäõêuåˆˆXÚ\Ú[Û–ÜKœÝ]WHKœÝ]JH
Èˆ0­È5êµåuéõèÈ5èµäÈˆ
È\ØØ\R[
]M
K™^\™\×Ø]
JH
È	ÏÜ]ˆÛ\ÜÏHœ›ÝÈ‰È
È[šÊËœÛÝ\˜ÙU\›µçµéõåuê5å5çµåõéõêŠH
È
KœÝ]HOOH˜\›Ý™Yˆ	‰ˆœ™\Ú	‰ˆY^\™YÈ[šÊË\›µå5çµêuæˆ5ç5äuäõæuéõå5åuç5å5åµçµè5å5æuäõè5æuêˆ5ä5éµç5å5èué5éÈŠHˆˆŠH
È
[™[™ÈÈ	Ï]Ûˆ\OH˜]Ûˆˆ]K\™\]Y\ÝH‰È
È\ØØ\R[
KšY
H
È	Èˆ]K]™\œÚ[ÛH‰È
ÈK™\œÚ[Ûˆ
È	Èˆ]KYXÚ\Ú[ÛH˜\›Ý™Yµä5êuê5å5éµèµå5ç5äuæuéµåuèˆ5æuäõè5æOØ]Û]Ûˆ\OH˜]Ûˆˆ]K\™\]Y\ÝH‰È
È\ØØ\R[
KšY
H
È	Èˆ]K]™\œÚ[ÛH‰È
ÈK™\œÚ[Ûˆ
È	Èˆ]KYXÚ\Ú[ÛHœ™Z™XÝYµäõåõå5å5éµèµåØ]Û‰ÈˆˆŠH
ÈÙ]Ø\XÛOˆŽÂˆJKš›Ú[ŠˆŠHˆµèµäõæuæuçÈ5ä5æuçÈ5äuéõêuåuêˆ5ä5æuêuåuêˆ5å5çÈ5æuåué5æuèµåH5æõä5çÈ5ç5ä5åõê5äuäõæuéõå5æuåuçµæuêˆ5êuêµçµéµä5ä5é5êuê5åuæuåuêˆ5èµçH5çµéõåuê5åuê‹ÜˆŠH
ÈÜÙXÝ[ÛÙXÝ[Ûµäõåuí5åõåuêˆ5æuåuçµæuæuçOÚˆˆ
È
™\ÜË›[™ÝÈ™\ÜË›X\

ÊHOˆÂˆÛÛœÝˆHËœ™\ÜßKÛÝ™\˜YÙHH‹˜ÛÝ™\˜YÙNÂˆ™]\›ˆ	Ï]Z[ÈÛ\ÜÏH™Z[K\™\ÜÝ[[X\žO‰È
È\ØØ\R[
Ëœ™\ÜÙ]JH
Èˆ0­Èˆ
È\ØØ\R[
ËœÝ]HOOHœ]Y]YYˆÈµäuäõæuéõå5äuêµå5ç5æuæˆˆˆËœÝ]HOOH˜]ØZ][™×Ü™\Ý[YHˆÈµçµçµêµæuçÈ5ç5å5çµêuæˆˆˆËœÝ]HOOHœÚÚ\YˆÈµç5ä5å5åué5èµç5å5äuäõæuéõåˆˆµå5èuêµæuæuçHŠH
ÈÜÝ[[X\žOˆˆ
È\ØØ\R[
‹œÝ[[X\žHµçµçµêµæuçÈ5ç5êµåuéµä5åuêˆ5å5èuåuæõçÈŠH
ÈÜˆˆ
È
ÛÝ™\˜YÙHÈµè5äuäõéõåHˆ
È[X™\ŠÛÝ™\˜YÙK˜ÚXÚÙY
H
Èˆ5çµêµåuæˆˆ
È[X™\ŠÛÝ™\˜YÙK›Ý]Ý[™[™ÊH
Èˆ5å5åµçµè5åuêˆ5é5êµåuåõåuêŽÈˆ
È[X™\ŠÛÝ™\˜YÙK[˜ÚXÚÙY
H
Èˆ5æ5ê5çH5è5äuäõéõåH5äuèuäuäH5åµåˆ5äuéõêuåuêˆ5ä5æuêuåuê5êuè5åuéµê5åNˆˆ
È[X™\Š‹œ™\]Y\ÝÐÜ™X]Y
H
È‹ˆ5å5éµèµåuêˆ5êuç5ä5é5åuê5èuçµåH5æõæH5å5è5êµåuè5æuçH5å5êuêµè5åNˆˆ
È[X™\Š‹œÝ[P›ÛÚÚ[™ÜÈ
H
È‹ˆ5å5éµèµåuêˆ5êuå5êµæuæuêuè5åH5ç5é5è5æH5å5é5ê5èuåuçNˆˆ
È[X™\Š‹™^\™YÙ™™\œÈ
H
È‹ÜˆˆˆˆŠH
È
‹˜ÛÛ\][ÛˆÈµå5æõè5åuêˆ5äuåµçµçÈ5å5äuäõæuéõåˆˆ
È
‹˜ÛÛ\][Û‹œ\˜Ù[OOH[Èµæ5ê5çH5å5åuäµäõê5åHˆˆ‹˜ÛÛ\][Û‹œ\˜Ù[
È‰HŠH
Èˆ0­Èˆ
È‹˜ÛÛ\][Û‹˜ÛÛ\]Y
Èˆ5çµêµåuæˆˆ
È‹˜ÛÛ\][Û‹Ý[
ÈÜˆˆˆˆŠH
È
‹˜ÚXÚÜÈ×JK›X\

Ú
HOˆÂˆ˜\ˆØMNÂˆ™]\›ˆÝ›Û™Ïˆˆ
È\ØØ\R[


ØMHHš\‹š][\Ë™š[™

JHOˆKšYOOHÚ˜›ÛÚÚ[™ÒY
JHOH[È›ÚYˆØMKœ^[ØY›˜[YJHÚ˜Ø]YÛÜžJH
ÈÜÝ›Û™ÏŽˆˆ
È\ØØ\R[
Ú™^[˜][ÛŠH
ÈÜˆŽÂˆJKš›Ú[ŠˆŠH
È
‹Ø\›š[™ÜÈ×JK›X\

ÊHOˆ	ÏÛ\ÜÏH›]]Y‰È
È\ØØ\R[
ÊH
ÈÜˆŠKš›Ú[ŠˆŠH
È

‹œÛÝ\˜Ù\È×JK›[™ÝÈ[ˆˆ
È‹œÛÝ\˜Ù\Ë›X\

ÊHOˆOˆˆ
È[šÊË\›Ë]JH
ÈÛOˆŠKš›Ú[ŠˆŠH
ÈÝ[ˆˆˆˆŠH
È
‹œÜ[YÛÜ›ÝOOH›ÚYÈµèµç5åuêˆRH5çµä5åuçµêµêŽˆˆ
È›Ü›X][Û™^J‹œÜ[YÛÜ›ÝÈL
H
È
‹œ™\Ù\™YYÛÜ›ÝÈˆ0­È5æuêµê5å5êuçµåuê5å5ç5äuæuê5åuêˆˆ
È›Ü›X][Û™^J‹œ™\Ù\™YYÛÜ›ÝÈL
HˆˆŠH
ÈÜˆˆˆˆŠH
ÈÙ]Z[ÏˆŽÂˆJKš›Ú[ŠˆŠHˆµèµäõæuæuçÈ5ä5æuçÈ5äõåuí5åõåuê‹ˆ5äµçH5äuäõæuéõå5êuè5åõèuçµå5äuäµç5ç5êµéõéµæuäH5ä5åH5åõåuèuê5äuè5êµåuè5æuçH5êµêµåuèµäÈ5æõä5çËÜˆŠH
ÈÜÙXÝ[ÛÙ]ˆŽÂˆBˆ[˜Ý[Ûˆ[Ý[YÙ[XŠÈÛÛZ[™\‹š\ˆš\‹\KšY]ÔÝ]HHßHJHÂˆ]ÛÜÙYH˜[ÙKØY[™ÈH˜[ÙK\ÞLˆH˜[ÙK]HH[ÚYÛ˜]\™HHˆ‹\ÝÞ[˜ÈHÂˆÛÛZ[™\‹š[›™\’SH	ÏÙXÝ[Ûµå5èuåuæõçÈ5êuç5æOÚ›ÛOHœÝ]\Èµæ5åuèµçÈ5çµéµäH5åuäõåuí5åõåuê¸ )ÜÜÙXÝ[Û‰ÎÂˆÛÛœÝ™YY˜XÚÈH
Y\ÜØYÙJHOˆÂˆÛÛœÝ[HÛÛZ[™\‹œ]Y\žTÙ[XÝÜŠ–Ù]KYZ[KY™YY˜XÚ×HŠNÂˆYˆ
[
H[^ÛÛ[HY\ÜØYÙNÂˆNÂˆÛÛœÝš[™H

HOˆÂˆÛÛœÝÛÛœÙ[HÛÛZ[™\‹œ]Y\žTÙ[XÝÜŠ–Ù]KYZ[KXÛÛœÙ[HŠNÂˆYˆ
ÛÛœÙ[
HÛÛœÙ[›Û˜Ú[™ÙHH

HOˆÂˆÛÛZ[™\‹œ]Y\žTÙ[XÝÜŠ	ÖÙ]KYZ[KXÛÛ›ÛH™[˜X›H—IÊK™\ØX›YHXÛÛœÙ[˜ÚXÚÙYY]K˜˜\Ù[[™P]˜Z[X›H\[›š[™ÐØ\Xš[]J]KœXÚØYÙSÜ[ÛœËœ™\ÙX\˜ÚŠNÂˆNÂˆÛÛZ[™\‹œ]Y\žTÙ[XÝÜŠ–Ù]K\™Yœ™\ÚYZ[WHŠK›Û˜ÛXÚÈH

HOˆ™Yœ™\Ú
YJNÂˆ›Üˆ
ÛÛœÝˆÙˆÛÛZ[™\‹œ]Y\žTÙ[XÝÜ[
–Ù]KYZ[KXÛÛ›ÛHŠJH‹›Û˜ÛXÚÈH

HOˆÂˆYˆ
È™[˜X›H‹œ™\Ý[YH—Kš[˜ÛY\Ê‹™]\Ù]™Z[PÛÛ›Û
H	‰ˆ\[›š[™ÐØ\Xš[]J]KœXÚØYÙSÜ[ÛœËœ™\ÙX\˜ÚŠJH™]\›ŽÂˆXÝ


HOˆ\K™Z[PÛÛ›Û
š\‹šY‹™]\Ù]™Z[PÛÛ›Ûš\‹™\œÚ[ÛŠJNÂˆNÂˆ›Üˆ
ÛÛœÝˆÙˆÛÛZ[™\‹œ]Y\žTÙ[XÝÜ[
–Ù]KYXÚ\Ú[Û—HŠJH‹›Û˜ÛXÚÈH

HOˆXÝ


HOˆ\Kœ™]šY]ÑZ[J‹™]\Ù]œ™\]Y\Ý[X™\Š‹™]\Ù]™\œÚ[ÛŠK‹™]\Ù]™XÚ\Ú[ÛŠJNÂˆÛÛœÝ™Yœ™\Ú]ÛˆHÛÛZ[™\‹œ]Y\žTÙ[XÝÜŠ–Ù]K\™Yœ™\Ú\[—HŠNÂˆYˆ
™Yœ™\Ú]ÛŠH™Yœ™\Ú]Û‹›Û˜ÛXÚÈH

HOˆ™Yœ™\Ú
YJNÂˆ›Üˆ
ÛÛœÝÜÙ[XÝÜ‹ÛÛ›Û—HÙˆÖÈ–Ù]K\]\ÙK\[—H‹œ]\ÙH—KÈ–Ù]K\™\Ý[YK\[—H‹œ™\Ý[YH—KÈ–Ù]KXØ[˜Ù[\[—H‹œÝÜ—WJHÂˆÛÛœÝ]ÛˆHÛÛZ[™\‹œ]Y\žTÙ[XÝÜŠÙ[XÝÜŠNÂˆYˆ
]ÛŠHÂˆYˆ
ÛÛ›ÛˆOOHœ™\Ý[YHŠH]Û‹™\ØX›YH\[›š[™ÐØ\Xš[]J]KœXÚØYÙSÜ[ÛœËœ™\ÙX\˜ÚŠNÂˆ]Û‹›Û˜ÛXÚÈH

HOˆÂˆYˆ
ÛÛ›ÛˆOOHœ™\Ý[YHˆ	‰ˆ\[›š[™ÐØ\Xš[]J]KœXÚØYÙSÜ[ÛœËœ™\ÙX\˜ÚŠJH™]\›ŽÂˆXÝ


HOˆ\K™Z[PÛÛ›Û
š\‹šYÛÛ›Û‹š\‹™\œÚ[ÛŠJNÂˆNÂˆBˆBˆNÂˆÛÛœÝ˜]ÈH
™^
HOˆÂˆ˜\ˆØMÂˆYˆ
ÛÜÙY
H™]\›ŽÂˆ]HH™^Âˆ\ÝÞ[˜ÈH]K››ÝÊ
NÂˆÛÛœÝÙ^HH”ÓÓ‹œÝš[™ÚYžJ™^
NÂˆYˆ
Ù^HOOHÚYÛ˜]\™JHÂˆÚYÛ˜]\™HHÙ^NÂˆÛÛœÝ›ØÝ\ÙYHÛÛZ[™\‹›ÝÛ™\‘ØÝ[Y[˜XÝ]™Q[[Y[›ØÝ\ÙYXˆHÛÛZ[™\‹˜ÛÛZ[œÊ›ØÝ\ÙY
HÈ›ØÝ\ÙY™]\Ù]œÙXÝ[Û•Xˆ
›ØÝ\ÙY˜ÛÜÙ\Ý
‹š][K\YÙ\ÈŠHÈšY]ÔÝ]KœÙ[XÝYˆ[
Hˆ[ÂˆÛÛœÝÜ[™YHË‹‹˜ÛÛZ[™\‹œ]Y\žTÙ[XÝÜ[
‹™Z[K\™\ÜŠWK›X\

JHOˆ›Ü[ˆÈHˆLJNÂˆÛÛZ[™\‹š[›™\’SHYÙ[X“X\šÝ\
™^š\ŠNÂˆÜ[™Y™›Ü‘XXÚ

JHOˆÂˆYˆ
HH	‰ˆÛÛZ[™\‹œ]Y\žTÙ[XÝÜ[
‹™Z[K\™\ÜŠVÚWJHÛÛZ[™\‹œ]Y\žTÙ[XÝÜ[
‹™Z[K\™\ÜŠVÚWK›Ü[ˆHYNÂˆJNÂˆš[™

NÂˆ[š[˜ÙPYÙ[
ÛÛZ[™\‹šY]ÔÝ]JNÂˆYˆ
›ØÝ\ÙYXˆ	‰ˆÛÛZ[™\‹›ÝÛ™\‘ØÝ[Y[˜XÝ]™Q[[Y[OOHÛÛZ[™\‹›ÝÛ™\‘ØÝ[Y[˜›ÙJH
ØMHÛÛZ[™\‹œ]Y\žTÙ[XÝÜŠ	ÖÙ]K\ÙXÝ[Û‹]XH‰È
È›ØÝ\ÙYXˆ
È	È—IÊJHOH[È›ÚYˆØM™›ØÝ\ÊÈ™]™[ØÜ›ÛˆYHJNÂˆBˆNÂˆ[˜Ý[Ûˆ™XYÜ[ÛœÊ
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆžHÂˆ™]\›ˆ\KœXÚØYÙSÜ[ÛœÈÈZY[\KœXÚØYÙSÜ[ÛœÊš\‹šY
Hˆ[ÂˆHØ]Ú
JHÂˆ™]\›ˆ[ÂˆBˆJNÂˆBˆ[˜Ý[Ûˆ™Yœ™\Ú
X[X[H˜[ÙJHÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆYˆ
ÛÜÙYØY[™È\ÞLŠH™]\›ŽÂˆØY[™ÈHYNÂˆžHÂˆÛÛœÝÛÝ™\šY]ËÜ[Ûœ×HHZY[›ÛZ\ÙK˜[
Ø\K™Z[SÝ™\šY]Êš\‹šY
K™XYÜ[ÛœÊ
WJNÂˆ˜]Ê×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßKÝ™\šY]ÊKÈXÚØYÙSÜ[ÛœÎˆÜ[ÛœÈJJNÂˆYˆ
X[X[
H™YY˜XÚÊµå5çµéµäH5èµåuäõæõçÈ5çµå5êuê5êˆŠNÂˆHØ]Ú
\œŠHÂˆYˆ
XÛÜÙY
HÂˆYˆ
Y]JHÂˆÛÛZ[™\‹š[›™\’SH	ÏÙXÝ[Ûµå5èuåuæõçÈ5êuç5æOÚ›ÛOH˜[\‰È
È\ØØ\R[
\œ‹›Y\ÜØYÙJH
È	ÏÜ]Ûˆ\OH˜]Ûˆˆ]K\™]žOµè5èuå5êuåuäOØ]ÛÜÙXÝ[Û‰ÎÂˆÛÛZ[™\‹œ]Y\žTÙ[XÝÜŠ–Ù]K\™]žWHŠK›Û˜ÛXÚÈH

HOˆ™Yœ™\Ú
YJNÂˆH[ÙHÂˆ]KœXÚØYÙSÜ[ÛœÈH[Âˆ›Üˆ
ÛÛœÝ]ÛˆÙˆÛÛZ[™\‹œ]Y\žTÙ[XÝÜ[
–Ù]KYZ[KXÛÛ›ÛY[˜X›WKÙ]KYZ[KXÛÛ›Û\™\Ý[YWKÙ]K\™\Ý[YK\[—HŠJH]Û‹™\ØX›YHYNÂˆ™YY˜XÚÊ\œ‹›Y\ÜØYÙJNÂˆBˆBˆHš[˜[HÂˆØY[™ÈH˜[ÙNÂˆBˆJNÂˆBˆ[˜Ý[ÛˆXÝ
›ŠHÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆ˜\ˆØMÂˆYˆ
ÛÜÙY\ÞLˆØY[™ÊH™]\›ŽÂˆ\ÞLˆHYNÂˆÛÛœÝÛÛ›ÛÌˆHË‹‹˜ÛÛZ[™\‹œ]Y\žTÙ[XÝÜ[
˜]Û‹[œ]ŠWK›X\

›ÙJHOˆ
È›ÙK\ØX›Yˆ›ÙK™\ØX›YJJNÂˆÛÛ›ÛÌ‹™›Ü‘XXÚ

È›ÙHJHOˆ›ÙK™\ØX›YHYJNÂˆžHÂˆÛÛœÝ™\Ý[HZY[›Š
NÂˆÛÛœÝÜ[ÛœÈHZY[™XYÜ[ÛœÊ
NÂˆ˜]Ê×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßK™\Ý[
KÈXÚØYÙSÜ[ÛœÎˆÜ[ÛœÈJJNÂˆ™YY˜XÚÊµå5é5èµåuç5å5è5êuçµê5åˆ5ç5ä5äuåuéµèµå5å5åµçµè5å5ä5éµç5èué5éËˆŠNÂˆHØ]Ú
\œŠHÂˆ™YY˜XÚÊ\œ‹›Y\ÜØYÙJNÂˆHš[˜[HÂˆ\ÞLˆH˜[ÙNÂˆYˆ
XÛÜÙY
HÂˆÛÛ›ÛÌ‹™›Ü‘XXÚ

È›ÙK\ØX›YJHOˆÂˆYˆ
ÛÛZ[™\‹˜ÛÛZ[œÊ›ÙJJH›ÙK™\ØX›YH\ØX›YÂˆJNÂˆÛÛœÝ[˜X›HHÛÛZ[™\‹œ]Y\žTÙ[XÝÜŠ	ÖÙ]KYZ[KXÛÛ›ÛH™[˜X›H—IÊNÂˆYˆ
[˜X›JH[˜X›K™\ØX›YHJ
ØMHÛÛZ[™\‹œ]Y\žTÙ[XÝÜŠ–Ù]KYZ[KXÛÛœÙ[HŠJHOH[È›ÚYˆØM˜ÚXÚÙY
HY]K˜˜\Ù[[™P]˜Z[X›H\[›š[™ÐØ\Xš[]J]KœXÚØYÙSÜ[ÛœËœ™\ÙX\˜ÚŠNÂˆBˆBˆJNÂˆBˆ™Yœ™\Ú

NÂˆÛÛœÝÛHÙ][\˜[


HOˆ™Yœ™\Ú

KYLÊKÛØÚÈHÙ][\˜[


HOˆÂˆYˆ

]HOH[È›ÚYˆ]Kœ[ŠH	‰ˆXÛÜÙY
H\]T[ÛØÚÜÊÛÛZ[™\‹]Kœ[‹\ÝÞ[˜ÊNÂˆKYLÊNÂˆ™]\›ˆ

HOˆÂˆÛÜÙYHYNÂˆÛX\’[\˜[
Û
NÂˆÛX\’[\˜[
ÛØÚÊNÂˆNÂˆB‚ˆËÈÜ˜ËØYÙ[\[™[šœÂˆ˜\ˆ\ØÌŒˆH
˜[YLŠHOˆÝš[™Ê˜[YLˆOH[È˜[YLˆˆˆŠKœ™\XÙJÖÉˆ‰×KÙË
ÊHOˆ
È‰ˆŽˆ‰˜[\È‹Žˆ‰›È‹ˆŽˆ‰™ÝÈ‹	È‰Îˆ‰œ][ÝÈ‹‰ÈŽˆ‰ˆÌÎNÈˆJVØ×JNÂˆ˜\ˆ[Û™^MˆH
YÛÜ›Ý
HOˆ™]È[“[X™\‘›Ü›X]
šKRS‹ÈÝ[Nˆ˜Ý\œ™[˜ÞH‹Ý\œ™[˜ÞNˆ’SÈˆJK™›Ü›X]

YÛÜ›Ý
HÈL
NÂˆ˜\ˆÛÛÙÛSX\Ò™YˆH
˜[YLŠHOˆÂˆžHÂˆÛÛœÝ\›H™]ÈT“
Ýš[™Ê˜[YLŠJNÂˆYˆ
\›œ›ÝØÛÛOOHšÎˆˆ\›\Ù\›˜[YH\›œ\ÜÝÛÜ™
H™]\›ˆ[ÂˆÛÛœÝÜÝH\›šÜÝ˜[YKÓÝÙ\Ø\ÙJ
NÂˆ™]\›ˆÜÝOOH›X\Ë™ÛÛÙÛK˜ÛÛHˆÜÝOOH›X\Ë˜\™ÛÛË™Ûˆ
ÜÝOOHÝÝË™ÛÛÙÛK˜ÛÛHˆÜÝOOH™ÛÛÙÛK˜ÛÛHŠH	‰ˆ\›œ]˜[YKœÝ\ÕÚ]
‹ÛX\ÈŠHÈ\›š™Yˆˆ[ÂˆHØ]Ú
JHÂˆ™]\›ˆ[ÂˆBˆNÂˆ[˜Ý[ÛˆYÙ[[™[X\šÝ\
ÈÛÛ^H[›ÜÜØ[H[›ØÚÙY™X\ÛÛˆHˆ‹Ü[ˆH˜[ÙHHHßJHÂˆÛÛœÝ›ØÚÙYHXÛÛ^›ÛÛX[Š›ØÚÙY™X\ÛÛŠK]HHÛÛ^ÈµèuåuæõçÈ5å5æ5æuåuçˆˆ
ÈÛÛ^™\Ý[˜][Û“˜[YHˆµèuåuæõçÈ5å5æ5æuåuçŽÂˆÛÛœÝ›ÙHHÜ[ˆ	‰ˆÛÛ^È]ˆ]KXYÙ[[Ü[‹XÛÛ\ÜÙ\Ù]ˆˆˆ›ØÚÙYÈ	ÏÛ\ÜÏH˜YÙ[X›ØÚÙYˆ›ÛOHœÝ]\È‰È
È\ØÌŒŠ›ØÚÙY™X\ÛÛˆµæuêH5ç5äuåõåuê5æ5æuåuç5ç5é5è5æH5é5èµåuç5å5åµåHŠH
ÈÜˆˆˆˆŽÂˆÛÛœÝXÝ[ÛŒˆH›ÜÜØ[È\XÛH]KXYÙ[\›ÜÜØ[Ïˆˆ
È\ØÌŒŠ›ÜÜØ[]JH
ÈÚÏµê5çµêˆ5ä5æuêuåuêˆˆ
È\ØÌŒŠ›ÜÜØ[˜\›Ý˜[]™[
H
ÈÜµèµç5åuêˆ5çµêuåuèµê5êŽˆˆ
È[Û™^MŠ›ÜÜØ[˜ÛÜÝYÛÜ›Ý
H
È	ÏÜ]Ûˆ\OH˜]Ûˆˆ]KXYÙ[X\›Ý™H	È
È
›ØÚÙYÈ™\ØX›YˆˆˆŠH
Èµä5æuêuåuê5é5èµåuç5åØ]ÛØ\XÛOˆˆˆ	Ï]Ûˆ\OH˜]Ûˆˆ]KXYÙ[\Ý\	È
È
›ØÚÙYÜ[ˆÈ™\ØX›YˆˆˆŠH
Èµå5êµåõç5êˆ5é5èµåuç5åØ]ÛˆŽÂˆ™]\›ˆ	ÏÙXÝ[Ûˆ\HœˆÛ\ÜÏH˜YÙ[\[™[ˆ\šXK[X™[YžOH˜YÙ[]]HXY\ˆYH˜YÙ[]]H‰È
È\ØÌŒŠ]JH
ÈÚÚXY\ˆˆ
È›ÙH
ÈXÝ[ÛŒˆ
ÈÜÙXÝ[ÛˆŽÂˆBˆ[˜Ý[ÛˆÜ[ÛÛ\ÜÙ\Š›ÛÝÈÛ”Ý\Û”™\]Y\ÝÛ“˜]šYØ]KÛ\›Ý™KÛØ[˜Ù[JHÂˆÛÛœÝÝ\H›ÛÝœ]Y\žTÙ[XÝÜŠ–Ù]KXYÙ[\Ý\HŠKXÙZÛ\ˆH›ÛÝœ]Y\žTÙ[XÝÜŠ–Ù]KXYÙ[[Ü[‹XÛÛ\ÜÙ\—HŠNÂˆYˆ
\Ý\	‰ˆ\XÙZÛ\ŠH™]\›ŽÂˆÛÛœÝ™YY˜XÚÈH›ÛÝ›ÝÛ™\‘ØÝ[Y[˜Ü™X]Q[[Y[
™]ˆŠNÂˆ™YY˜XÚËš[›™\’SH	Ï]ˆ]KXYÙ[]˜[œØÜš\›ÛOH›ÙÈˆ\šXK[]™OHœÛ]HÙ]]ˆÛ\ÜÏH˜YÙ[XÛÛ\ÜÙ\‹[X™[]ˆÛ\ÜÏH˜YÙ[XÛÛ\ÜÙ\ˆ^\™XH]KXYÙ[\™\]Y\Ý›ÝÜÏHŒˆˆXÙZÛ\Hµç5äõåuäµçµåˆ5äuäõåuéÈ5ä5é5êuê5åuæuåuêˆ5ç5æuè5å5äuæ5æuåuçÝ^\™XO]Ûˆ\OH˜]Ûˆˆ]KXYÙ[\ÝX›Z]\šXK[X™[Hµêuç5åÈ5äuéõêuå¸¡¤OØ]ÛÙ]Ù]‰ÎÂˆ
Ý\XÙZÛ\ŠKœ™\XÙUÚ]
™YY˜XÚÊNÂˆÛ”Ý\

NÂˆÛÛœÝ˜[œØÜš\H™YY˜XÚËœ]Y\žTÙ[XÝÜŠ–Ù]KXYÙ[]˜[œØÜš\HŠK™\]Y\ÝH™YY˜XÚËœ]Y\žTÙ[XÝÜŠ–Ù]KXYÙ[\™\]Y\ÝHŠKÙ[™H™YY˜XÚËœ]Y\žTÙ[XÝÜŠ–Ù]KXYÙ[\ÝX›Z]HŠNÂˆÛÛœÝ™[™\”™\HH
™\JHOˆÂˆ˜\ˆØMØ‹ØÎÂˆÛÛœÝYÙ[H™YY˜XÚË›ÝÛ™\‘ØÝ[Y[˜Ü™X]Q[[Y[
œŠNÂˆYÙ[™]\Ù]˜YÙ[Y\ÜØYÙHH˜YÙ[ŽÂˆYÙ[˜\[™
µèuåuæõçÎˆˆ
È
\[Ùˆ™\HOOHœÝš[™ÈˆÈ™\Hˆ
™\HOH[È›ÚYˆ™\K^
Hµå5äuéõêuå5å5êµéõäuç5å5ç5äuäõæuéõåˆŠJNÂˆÛÛœÝ™YˆH
ØMH™\HOH[È›ÚYˆ™\K›[šÊHOH[È›ÚYˆØMš™YŽÂˆYˆ
™YˆOH[È›ÚYˆ™Y‹œÝ\ÕÚ]
ˆÈŠJHÂˆÛÛœÝ[šÌÈH™YY˜XÚË›ÝÛ™\‘ØÝ[Y[˜Ü™X]Q[[Y[
˜HŠNÂˆ[šÌËš™YˆH™YŽÂˆ[šÌË^ÛÛ[H™\K›[šË]Hµé5êµæuåõêˆ5å5çµèuæˆŽÂˆ[šÌË˜Û\ÜÓ˜[YHH˜YÙ[X[œÝÙ\‹[[šÈŽÂˆ[šÌË›Û˜ÛXÚÈH
]™[
HOˆÂˆ]™[œ™]™[Y˜][

NÂˆÛ“˜]šYØ]J™Y‹œÛXÙJJJNÂˆNÂˆYÙ[˜\[™
ˆ‹[šÌÊNÂˆBˆYˆ

™\HOH[È›ÚYˆ™\KšÚ[™
HOOH˜XÝ[Ûˆˆ	‰ˆ

ØˆH™\K˜XÝ[ÛŠHOH[È›ÚYˆØ‹šY
JHÂˆÛÛœÝ\Õ\ÚÈH™\K˜XÝ[Û‹šYOOH˜Ü™X]WÝ\ÚÈŽÂˆ]\ÚÒ[œ]H[ÂˆYˆ
\Õ\ÚÊHÂˆÛÛœÝ\ÚÓX™[H™YY˜XÚË›ÝÛ™\‘ØÝ[Y[˜Ü™X]Q[[Y[
›X™[ŠNÂˆ\ÚÓX™[^ÛÛ[Hµæõåuêµê5êˆ5å5çµêuæuçµåŽÂˆ\ÚÒ[œ]H™YY˜XÚË›ÝÛ™\‘ØÝ[Y[˜Ü™X]Q[[Y[
š[œ]ŠNÂˆ\ÚÒ[œ]\HH^ŽÂˆ\ÚÒ[œ]›X^[™ÝHŒÂˆ\ÚÒ[œ]™]\Ù]˜YÙ[\ÚÕ]HHˆŽÂˆ\ÚÓX™[˜\[™
\ÚÒ[œ]
NÂˆYÙ[˜\[™
ˆ‹\ÚÓX™[
NÂˆBˆÛÛœÝXÝ[ÛŒˆH™YY˜XÚË›ÝÛ™\‘ØÝ[Y[˜Ü™X]Q[[Y[
˜]ÛˆŠNÂˆXÝ[ÛŒ‹\HH˜]ÛˆŽÂˆXÝ[ÛŒ‹™]\Ù]˜YÙ[XÝ[ÛˆH™\K˜XÝ[Û‹šYÂˆXÝ[ÛŒ‹^ÛÛ[Hµä5êuêˆ
È
™\K˜XÝ[Û‹›X™[µé5èµåuç5åŠNÂˆXÝ[ÛŒ‹›Û˜ÛXÚÈH

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆ˜\ˆØMNÂˆ]™\\™YXÝ[ÛˆH™\K˜XÝ[ÛŽÂˆYˆ
\Õ\ÚÊHÂˆÛÛœÝ]HH\ÚÒ[œ]˜[YKš[J
NÂˆYˆ
]]H]K›[™ÝˆŒ
HÂˆ\ÚÒ[œ]œÙ]Ý\ÝÛU˜[Y]JµæuêH5ç5å5åµæuçÈ5æõåuêµê5êˆ5çµêuæuçµå5èµäÈŒ5êµåuåuæuçHŠNÂˆ\ÚÒ[œ]œ™\Ü˜[Y]J
NÂˆ™]\›ŽÂˆBˆ\ÚÒ[œ]œÙ]Ý\ÝÛU˜[Y]JˆŠNÂˆ™\\™YXÝ[ÛˆH×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßK™\K˜XÝ[ÛŠKÈ\™ÜÎˆÈ]HHJNÂˆBˆXÝ[ÛŒ‹™\ØX›YHYNÂˆXÝ[ÛŒ‹^ÛÛ[Hµæuåuéµê5äuéõêuêˆ5ä5æuêuåuê8 )ˆŽÂˆžHÂˆÛÛœÝ\›Ý˜[HZY[Û”Ý\
ÈXÝ[ÛŽˆ™\\™YXÝ[ÛˆJNÂˆYˆ


ØMHH\›Ý˜[OH[È›ÚYˆ\›Ý˜[˜\›Ý˜[
HOH[È›ÚYˆØMKšY
H
\›Ý˜[OH[È›ÚYˆ\›Ý˜[šY
JHÂˆÛÛœÝ™XÛÜ™H\›Ý˜[˜\›Ý˜[\›Ý˜[ÂˆÛÛœÝØ\™H™YY˜XÚË›ÝÛ™\‘ØÝ[Y[˜Ü™X]Q[[Y[
™]ˆŠNÂˆØ\™™]\Ù]˜YÙ[\›Ý˜[H™XÛÜ™šYÂˆØ\™š[›™\’SH\Õ\ÚÈÈÝ›Û™Ïµäuéõêuêˆ5ä5æuêuåuê5çµåuæõè5åÜÝ›Û™ÏœÜ[µå5æ5æuåuç5ç5ä5êuåuè5åˆ5å5ä5æuêuåuê5æuæuéµåuê5ä5êˆ5å5çµêuæuçµå5å5çµåuéµäµê‹ÜÜ[ˆˆˆÝ›Û™Ïµäuéõêuêˆ5ä5æuêuåuê5çµåuæõè5åÜÝ›Û™ÏœÜ[µå5æ5æuåuç5ç5ä5êuåuè5åˆ5ä5æuêuåuê5å5äuéõêuå5ä5æuè5åH5çµäuéµèˆ5ä5êˆ5å5é5èµåuç5åÜÜ[ˆŽÂˆYˆ
\Õ\ÚÊHØ\™˜\[™
™YY˜XÚË›ÝÛ™\‘ØÝ[Y[˜Ü™X]Q[[Y[
˜œˆŠKµçµêuæuçµåˆˆ
È™XÛÜ™]JNÂˆÛÛœÝ\›Ý˜[Ý]\ÈH™YY˜XÚË›ÝÛ™\‘ØÝ[Y[˜Ü™X]Q[[Y[
œŠNÂˆ\›Ý˜[Ý]\Ë™]\Ù]˜YÙ[\›Ý˜[Ý]\ÈHˆŽÂˆ\›Ý˜[Ý]\ËœÙ]]šX]Jœ›ÛH‹œÝ]\ÈŠNÂˆÛÛœÝš[˜[H™YY˜XÚË›ÝÛ™\‘ØÝ[Y[˜Ü™X]Q[[Y[
˜]ÛˆŠNÂˆš[˜[\HH˜]ÛˆŽÂˆš[˜[™]\Ù]˜YÙ[š[˜[\›Ý™HHˆŽÂˆš[˜[^ÛÛ[H\Õ\ÚÈÈµä5êuê5åuéµåuê5çµêuæuçµåˆˆµä5êuê5äuéõêuå5äuç5äuäÈŽÂˆÛÛœÝØ[˜Ù[H™YY˜XÚË›ÝÛ™\‘ØÝ[Y[˜Ü™X]Q[[Y[
˜]ÛˆŠNÂˆØ[˜Ù[\HH˜]ÛˆŽÂˆØ[˜Ù[™]\Ù]˜YÙ[Ø[˜Ù[HˆŽÂˆØ[˜Ù[^ÛÛ[Hµäuæ5ç5äuéõêuåŽÂˆš[˜[›Û˜ÛXÚÈH

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆš[˜[™\ØX›YHYNÂˆØ[˜Ù[™\ØX›YHYNÂˆ\›Ý˜[Ý]\Ë^ÛÛ[Hµçµä5êuê5äuéõêuå8 )ˆŽÂˆžHÂˆÛÛœÝ™\Ý[HZY[Û\›Ý™J™XÛÜ™
NÂˆYˆ
\Õ\ÚÈ	‰ˆ
™\Ý[OH[È›ÚYˆ™\Ý[œÝ]JHOOHœÝXØÙYYYŠHÂˆ\›Ý˜[Ý]\Ë^ÛÛ[Hµå5çµêuæuçµå5è5åuéµê5å5äuæ5æuåuçˆŽÂˆš[˜[^ÛÛ[Hµå5çµêuæuçµå5è5åuéµê5åŽÂˆH[ÙHYˆ
Z\Õ\ÚÈ	‰ˆ
™\Ý[OH[È›ÚYˆ™\Ý[œÝ]JHOOH˜\›Ý™YŠHÂˆ\›Ý˜[Ý]\Ë^ÛÛ[Hµå5äuéõêuå5ä5åuêuê5åˆ5ç5ä5äuåuéµèˆ5êuæuè5åuæH5äuæ5æuåuçˆŽÂˆš[˜[^ÛÛ[Hµå5äuéõêuå5ä5åuêuê5åŽÂˆH[ÙHÂˆ\›Ý˜[Ý]\Ë^ÛÛ[H\Õ\ÚÈÈµç5ä5è5æuêµçÈ5ç5ä5çµêˆ5ä5êˆ5æuéµæuê5êˆ5å5çµêuæuçµåˆ5ê5èµè5çÈ5ä5êˆ5ê5êuæuçµêˆ5å5çµêuæuçµåuêˆ5ç5é5è5æH5è5æuèuæuåuçÈ5è5åuèuèËˆˆˆµç5ä5è5æuêµçÈ5ç5ä5êuê5ä5êˆ5å5äuéõêuåˆ5ç5ä5äuåuéµèˆ5êuæuè5åuæKˆŽÂˆš[˜[™\ØX›YH˜[ÙNÂˆØ[˜Ù[™\ØX›YH˜[ÙNÂˆBˆHØ]Ú
JHÂˆ\›Ý˜[Ý]\Ë^ÛÛ[H\Õ\ÚÈÈµç5ä5è5æuêµçÈ5ç5ä5çµêˆ5ä5êˆ5æuéµæuê5êˆ5å5çµêuæuçµåˆ5ê5èµè5çÈ5ä5êˆ5ê5êuæuçµêˆ5å5çµêuæuçµåuêˆ5ç5é5è5æH5è5æuèuæuåuçÈ5è5åuèuèËˆˆˆµç5ä5è5æuêµçÈ5ç5ä5êuê5ä5êˆ5å5äuéõêuåˆ5ç5ä5äuåuéµèˆ5êuæuè5åuæKˆŽÂˆš[˜[™\ØX›YH˜[ÙNÂˆØ[˜Ù[™\ØX›YH˜[ÙNÂˆBˆJNÂˆØ[˜Ù[›Û˜ÛXÚÈH

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆØ[˜Ù[™\ØX›YHYNÂˆš[˜[™\ØX›YHYNÂˆ\›Ý˜[Ý]\Ë^ÛÛ[Hµçµäuæ5ç5äuéõêuå8 )ˆŽÂˆžHÂˆÛÛœÝ™\Ý[HZY[ÛØ[˜Ù[
™XÛÜ™
NÂˆYˆ

™\Ý[OH[È›ÚYˆ™\Ý[œÝ]JHOOH˜Ø[˜Ù[YŠHÂˆ\›Ý˜[Ý]\Ë^ÛÛ[Hµå5äuéõêuå5äuåuæ5ç5åˆ5ç5ä5äuåuéµèˆ5êuæuè5åuæH5äuæ5æuåuçˆŽÂˆØ[˜Ù[^ÛÛ[Hµå5äuéõêuå5äuåuæ5ç5åŽÂˆH[ÙHÂˆ\›Ý˜[Ý]\Ë^ÛÛ[Hµç5ä5è5æuêµçÈ5ç5äuæ5ç5ä5êˆ5å5äuéõêuåˆŽÂˆØ[˜Ù[™\ØX›YH˜[ÙNÂˆš[˜[™\ØX›YH˜[ÙNÂˆBˆHØ]Ú
JHÂˆ\›Ý˜[Ý]\Ë^ÛÛ[Hµç5ä5è5æuêµçÈ5ç5äuæ5ç5ä5êˆ5å5äuéõêuåˆŽÂˆØ[˜Ù[™\ØX›YH˜[ÙNÂˆš[˜[™\ØX›YH˜[ÙNÂˆBˆJNÂˆØ\™˜\[™
ˆ‹š[˜[ˆ‹Ø[˜Ù[\›Ý˜[Ý]\ÊNÂˆ˜[œØÜš\˜\[™
Ø\™
NÂˆH[ÙHÂˆXÝ[ÛŒ‹™\ØX›YH˜[ÙNÂˆXÝ[ÛŒ‹^ÛÛ[Hµä5êuêˆ
È
™\K˜XÝ[Û‹›X™[µé5èµåuç5åŠNÂˆBˆHØ]Ú
JHÂˆXÝ[ÛŒ‹™\ØX›YH˜[ÙNÂˆXÝ[ÛŒ‹^ÛÛ[Hµè5èuå5êuåuäHŽÂˆBˆJNÂˆYÙ[˜\[™
ˆ‹XÝ[ÛŒŠNÂˆBˆ˜[œØÜš\˜\[™
YÙ[
NÂˆYˆ

™\HOH[È›ÚYˆ™\KšÚ[™
HOOHX›Hˆ	‰ˆ

ØÈH™\KX›JHOH[È›ÚYˆØË˜ÛÛ[[œÊH	‰ˆ\œ˜^Kš\Ð\œ˜^J™\KX›Kœ›ÝÜÊJHÂˆÛÛœÝÜ˜\\ˆH™YY˜XÚË›ÝÛ™\‘ØÝ[Y[˜Ü™X]Q[[Y[
™]ˆŠNÂˆÜ˜\\‹˜Û\ÜÓ˜[YHH˜YÙ[X[œÝÙ\‹]X›K]Ü˜\ŽÂˆÛÛœÝX›HH™YY˜XÚË›ÝÛ™\‘ØÝ[Y[˜Ü™X]Q[[Y[
X›HŠNÂˆX›K˜Û\ÜÓ˜[YHH˜YÙ[X[œÝÙ\‹]X›HŽÂˆX›KœÙ]]šX]J˜\šXK[X™[‹™\KX›K˜Ø\[Ûˆµæ5äuç5êˆ5êµåuéµä5åuêˆŠNÂˆÛÛœÝØ\[ÛˆHX›K˜Ü™X]PØ\[ÛŠ
NÂˆØ\[Û‹^ÛÛ[H™\KX›K˜Ø\[Ûˆµêµåuéµä5åuêˆŽÂˆÛÛœÝXYˆHX›K˜Ü™X]UXY

Kš[œÙ\›ÝÊ
NÂˆ™\KX›K˜ÛÛ[[œË™›Ü‘XXÚ

ÛÛ[[ŠHOˆÂˆÛÛœÝÙ[H™YY˜XÚË›ÝÛ™\‘ØÝ[Y[˜Ü™X]Q[[Y[
ŠNÂˆÙ[œØÛÜHH˜ÛÛŽÂˆÙ[^ÛÛ[HÛÛ[[ŽÂˆXY‹˜\[™
Ù[
NÂˆJNÂˆÛÛœÝ›ÙHHX›K˜Ü™X]U›ÙJ
NÂˆ™\KX›Kœ›ÝÜË™›Ü‘XXÚ

›ÝÊHOˆÂˆÛÛœÝˆH›ÙKš[œÙ\›ÝÊ
NÂˆ›ÝË™›Ü‘XXÚ

˜[YL‹[™^
HOˆÂˆ˜\ˆØMNÂˆÛÛœÝÙ[H‹š[œÙ\Ù[

NÂˆÛÛœÝÙ[^HÝš[™Ê˜[YLˆ	‰ˆ\[Ùˆ˜[YLˆOOH›Øš™XÝˆÈ
ØMHH˜[YL‹^
HOH[ÈØMHˆˆˆˆ˜[YLˆOH[È˜[YLˆˆˆŠNÂˆÙ[^ÛÛ[HÙ[^ÂˆÛÛœÝ™YŒˆH˜[YLˆ	‰ˆ\[Ùˆ˜[YLˆOOH›Øš™XÝˆÈÛÛÙÛSX\Ò™YŠ˜[YL‹š™YŠHˆ[ÂˆYˆ
™YŒŠHÂˆÛÛœÝ[šÌÈH™YY˜XÚË›ÝÛ™\‘ØÝ[Y[˜Ü™X]Q[[Y[
˜HŠNÂˆ[šÌËš™YˆH™YŒŽÂˆ[šÌË^ÛÛ[HÙ[^Âˆ[šÌË\™Ù]H—Ø›[šÈŽÂˆ[šÌËœ™[H››ÛÜ[™\ˆ›Ü™Y™\œ™\ˆŽÂˆÙ[œ™\XÙPÚ[™[Š[šÌÊNÂˆBˆYˆ
[™^OOH›ÝË›[™ÝHJHÙ[˜Û\ÜÓ˜[YHH˜YÙ[X[œÝÙ\‹\Ý]\ÈŽÂˆYˆ
Ù[^š[˜ÛY\Êµçµä5åuçµêˆŠJHÙ[™]\Ù]œÝ]\ÈH™\šYšYYŽÂˆ[ÙHYˆ
Ù[^š[˜ÛY\Êµå5èµê5æõåŠJHÙ[™]\Ù]œÝ]\ÈH™\Ý[X]YŽÂˆ[ÙHYˆ
Ù[^š[˜ÛY\ÊµäuäõæuéõåŠHÙ[^š[˜ÛY\Êµç5ä5åµåuå5åŠJHÙ[™]\Ù]œÝ]\ÈH›™YYË\™]šY]ÈŽÂˆJNÂˆJNÂˆÜ˜\\‹˜\[™
X›JNÂˆ˜[œØÜš\˜\[™
Ü˜\\ŠNÂˆBˆNÂˆÛÛœÝÝX›Z]H

HOˆÂˆÛÛœÝ˜[YLˆH™\]Y\Ý˜[YKš[J
NÂˆYˆ
]˜[YLŠH™]\›ŽÂˆÛÛœÝ\Ù\ˆH™YY˜XÚË›ÝÛ™\‘ØÝ[Y[˜Ü™X]Q[[Y[
œŠNÂˆ\Ù\‹™]\Ù]˜YÙ[Y\ÜØYÙHH\Ù\ˆŽÂˆ\Ù\‹^ÛÛ[Hµä5êµåˆˆ
È˜[YLŽÂˆ˜[œØÜš\˜\[™
\Ù\ŠNÂˆÛÛœÝ[™[™ÈH™YY˜XÚË›ÝÛ™\‘ØÝ[Y[˜Ü™X]Q[[Y[
œŠNÂˆ[™[™Ë™]\Ù]˜YÙ[Y\ÜØYÙHH˜YÙ[ŽÂˆ[™[™Ë^ÛÛ[HµèuåuæõçÎˆ5äuåuäõéÈ5ä5êˆ5å5è5êµåuè5æuçx )ˆŽÂˆ˜[œØÜš\˜\[™
[™[™ÊNÂˆ™\]Y\Ý˜[YHHˆŽÂˆ™\]Y\Ý™›ØÝ\Ê
NÂˆžHÂˆÛÛœÝ™\Ý[HÛ”™\]Y\Ý
˜[YLŠNÂˆYˆ
™\Ý[	‰ˆ\[Ùˆ™\Ý[[ˆOOH™[˜Ý[ÛˆŠH™\Ý[[Š
™\JHOˆÂˆ[™[™Ëœ™[[Ý™J
NÂˆ™[™\”™\J™\JNÂˆJK˜Ø]Ú


HOˆÂˆ[™[™Ë^ÛÛ[HµèuåuæõçÎˆ5ç5ä5è5æuêµçÈ5ç5å5êuç5æuçH5ä5êˆ5å5äuäõæuéõå5æõê5äµè‹ˆŽÂˆJNÂˆ[ÙHÂˆ[™[™Ëœ™[[Ý™J
NÂˆ™[™\”™\J™\Ý[
NÂˆBˆHØ]Ú
JHÂˆ[™[™Ë^ÛÛ[HµèuåuæõçÎˆ5ç5ä5è5æuêµçÈ5ç5å5êuç5æuçH5ä5êˆ5å5äuäõæuéõå5æõê5äµè‹ˆŽÂˆBˆNÂˆÙ[™›Û˜ÛXÚÈHÝX›Z]Âˆ™\]Y\Ý˜Y]™[\Ý[™\ŠšÙ^YÝÛˆ‹
]™[
HOˆÂˆYˆ
]™[šÙ^HOOH‘[\ˆˆ	‰ˆY]™[œÚYÙ^JHÂˆ]™[œ™]™[Y˜][

NÂˆÝX›Z]

NÂˆBˆJNÂˆ™\]Y\Ý™›ØÝ\Ê
NÂˆBˆ[˜Ý[Ûˆ[Ý[YÙ[[™[
È›ÛÝÛÛ^H[›ÜÜØ[H[›ØÚÙY™X\ÛÛˆHˆ‹Ü[ˆH˜[ÙKÛ\›Ý™HH

HOˆÂˆKÛØ[˜Ù[H

HOˆÂˆKÛ”Ý\H

HOˆÂˆKÛ”™\]Y\ÝH

HOˆÂˆKÛ“˜]šYØ]HH

HOˆÂˆHHHßJHÂˆ›ÛÝš[›™\’SHYÙ[[™[X\šÝ\
ÈÛÛ^›ÜÜØ[›ØÚÙY™X\ÛÛ‹Ü[ˆJNÂˆ]\ÞLˆH˜[ÙNÂˆÛÛœÝ\›Ý˜[H›ÛÝœ]Y\žTÙ[XÝÜŠ–Ù]KXYÙ[X\›Ý™WHŠNÂˆYˆ
\›Ý˜[
H\›Ý˜[›Û˜ÛXÚÈH

HOˆÂˆYˆ
\ÞLˆ\›Ý˜[™\ØX›Y
H™]\›ŽÂˆ\ÞLˆHYNÂˆ\›Ý˜[™\ØX›YHYNÂˆÛ\›Ý™J
NÂˆNÂˆÛÛœÝÝ\H›ÛÝœ]Y\žTÙ[XÝÜŠ–Ù]KXYÙ[\Ý\HŠNÂˆYˆ
Ý\
HÝ\›Û˜ÛXÚÈH

HOˆÂˆYˆ
\ÞLˆÝ\™\ØX›Y
H™]\›ŽÂˆ\ÞLˆHYNÂˆÝ\™\ØX›YHYNÂˆÜ[ÛÛ\ÜÙ\Š›ÛÝÈÛ”Ý\Û”™\]Y\ÝÛ“˜]šYØ]KÛ\›Ý™KÛØ[˜Ù[JNÂˆNÂˆYˆ
Ü[ŠHÜ[ÛÛ\ÜÙ\Š›ÛÝÈÛ”Ý\Û”™\]Y\ÝÛ“˜]šYØ]KÛ\›Ý™KÛØ[˜Ù[JNÂˆ™]\›ˆ

HOˆÂˆ›ÛÝ^ÛÛ[HˆŽÂˆNÂˆB‚ˆËÈÜ˜ËØYÙ[[Ý™\›^KšœÂˆ[˜Ý[Ûˆ[Ý[YÙ[Ý™\›^JÈØÝ[Y[ˆØÝ[Y[‹ÛÛ[Hˆ‹ÛÛÜÙHH

HOˆÂˆHHHßJHÂˆÛÛœÝ›ÛÝHØÝ[Y[‹˜Ü™X]Q[[Y[
™]ˆŠNÂˆ›ÛÝ˜Û\ÜÓ˜[YHH˜YÙ[[Ý™\›^HŽÂˆ›ÛÝš[›™\’SH	Ï]ˆÛ\ÜÏH˜YÙ[[Ý™\›^KX˜XÚÙ›Üˆ]KXYÙ[[Ý™\›^KXÛÜÙOÙ]ÙXÝ[ÛˆÛ\ÜÏH˜YÙ[[Ý™\›^K]Ú[™ÝÈˆ›ÛOH™X[ÙÈˆ\šXK[[Ù[HYHˆ\šXK[X™[HµèuåuæõçÈ5å5æ5æuåuç]Ûˆ\OH˜]ÛˆˆÛ\ÜÏH˜YÙ[[Ý™\›^KXÛÜÙHˆ]KXYÙ[[Ý™\›^KXÛÜÙH\šXK[X™[Hµèuäµæuê5êˆ5èuåuæõçÈ°åÏØ]Û]ˆ]KXYÙ[[Ý™\›^KXÛÛ[Ù]ÜÙXÝ[Û‰ÎÂˆ›ÛÝœ]Y\žTÙ[XÝÜŠ–Ù]KXYÙ[[Ý™\›^KXÛÛ[HŠKš[›™\’SHÛÛ[ÂˆÛÛœÝÛÜÙHH

HOˆÂˆYˆ
\›ÛÝš\ÐÛÛ›™XÝY
H™]\›ŽÂˆ›ÛÝœ™[[Ý™J
NÂˆÛÛÜÙJ
NÂˆNÂˆ›ÛÝœ]Y\žTÙ[XÝÜ[
–Ù]KXYÙ[[Ý™\›^KXÛÜÙWHŠK™›Ü‘XXÚ

]ÛŠHOˆ]Û‹›Û˜ÛXÚÈHÛÜÙJNÂˆØÝ[Y[‹˜›ÙK˜\[™
›ÛÝ
NÂˆ™]\›ˆÈ›ÛÝÛÜÙHNÂˆB‚ˆËÈÜ˜ËØYÙ[YØ]]Ø^KšœÂˆ˜\ˆœÑ\œ›ÜœÈHÂˆYÙ[ØÛÛ™\œØ][Û—ÛÜ[Žˆµç5ä5è5æuêµçÈ5ç5é5êµåuåÈ5êuæuåõêˆ5èuåuæõçÈ5æõê5äµè‹ˆ‹ˆYÙ[Ø\›Ý˜[ØÜ™X]Nˆµç5ä5è5æuêµçÈ5ç5æuéµåuê5äuéõêuêˆ5ä5æuêuåuê5æõê5äµè‹ˆ‹ˆYÙ[Ø\›Ý˜[Ø\›Ý™Nˆµç5ä5è5æuêµçÈ5ç5ä5êuê5ä5êˆ5å5é5èµåuç5åˆ5æuæuêµæõçÈ5êuå5æ5æuåuç5å5êuêµè5åˆ‹ˆYÙ[Ø\›Ý˜[ØØ[˜Ù[ˆµç5ä5è5æuêµçÈ5ç5äuæ5ç5ä5êˆ5å5ä5æuêuåuê5æõê5äµè‹ˆ‹ˆYÙ[Ý\Ú×Ù^XÝ]Nˆµç5ä5è5æuêµçÈ5ç5ä5çµêˆ5ä5êˆ5æuéµæuê5êˆ5å5çµêuæuçµå5æõê5äµè‹ˆ‹ˆYÙ[Ø]Y]Ü™XÛÜ™ˆµç5ä5è5æuêµçÈ5ç5ê5êuåuçH5ä5êˆ5êµåuéµä5êˆ5å5é5èµåuç5åˆ‚ˆNÂˆ[˜Ý[ÛˆÜ™X]PYÙ[Ø]]Ø^JÛY[
HÂˆÛÛœÝ[›ÚÙHH
˜[YK\˜[\ÊHOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆYˆ
JÛY[OH[È›ÚYˆÛY[œœÊJH›ÝÈ\œ›ÜŠµêuæuê5åuêˆ5å5èuåuæõçÈ5ä5æuè5åH5åµçµæuçÈ5æõê5äµè‹ˆŠNÂˆÛÛœÝÈ]K\œ›ÜˆHHZY[ÛY[œœÊ˜[YK\˜[\ÊNÂˆYˆ
\œ›ÜŠH›ÝÈ\œ›ÜŠœÑ\œ›ÜœÖÛ˜[YWHµç5ä5è5æuêµçÈ5ç5å5êuç5æuçH5ä5êˆ5é5èµåuç5êˆ5å5èuåuæõçËˆŠNÂˆ™]\›ˆ]NÂˆJNÂˆ™]\›ˆÂˆÜ[ÛÛ™\œØ][ÛŽˆ
š\Y
HOˆ[›ÚÙJ˜YÙ[ØÛÛ™\œØ][Û—ÛÜ[ˆ‹ÈÝš\ˆš\YOH[Èš\Yˆ[JKˆÜ™X]P\›Ý˜[ˆ
\˜[\ÊHOˆ[›ÚÙJ˜YÙ[Ø\›Ý˜[ØÜ™X]H‹ÈØÛÛ™\œØ][ÛŽˆ\˜[\Ë˜ÛÛ™\œØ][Û’YÝš\ˆ\˜[\Ëš\YÝš\Ý™\œÚ[ÛŽˆ\˜[\Ëš\™\œÚ[Û‹Ü™\]Y\ÝÚYˆ\˜[\Ëœ™\]Y\ÝYØÛÛ[X[™ÚÚ[™ˆ\˜[\Ë˜ÛÛ[X[™Ú[™Ü^[ØYÚ\Úˆ\˜[\Ëœ^[ØY\ÚÙ^\™\×Ø]ˆ\˜[\Ë™^\™\Ð]JKˆ\›Ý™Nˆ
\˜[\ÊHOˆ[›ÚÙJ˜YÙ[Ø\›Ý˜[Ø\›Ý™H‹ÈØ\›Ý˜[ˆ\˜[\Ë˜\›Ý˜[YÝš\Ý™\œÚ[ÛŽˆ\˜[\Ëš\™\œÚ[Û‹Ü^[ØYÚ\Úˆ\˜[\Ëœ^[ØY\ÚJKˆ^XÝ]U\ÚÎˆ
\˜[\ÊHOˆ[›ÚÙJ˜YÙ[Ý\Ú×Ù^XÝ]H‹ÈØ\›Ý˜[ˆ\˜[\Ë˜\›Ý˜[YÝš\Ý™\œÚ[ÛŽˆ\˜[\Ëš\™\œÚ[Û‹Ü^[ØYÝ^ˆ\˜[\Ëœ^[ØY^JKˆØ[˜Ù[ˆ
\›Ý˜[Y
HOˆ[›ÚÙJ˜YÙ[Ø\›Ý˜[ØØ[˜Ù[‹ÈØ\›Ý˜[ˆ\›Ý˜[YJKˆ]Y]ˆ
\˜[\ÊHOˆÂˆ˜\ˆØMØ‹ØËÙÙKÙŽÂˆ™]\›ˆ[›ÚÙJ˜YÙ[Ø]Y]Ü™XÛÜ™‹ÈØÛÛ™\œØ][ÛŽˆ
ØMH\˜[\Ë˜ÛÛ™\œØ][Û’Y
HOH[ÈØMˆ[Ýš\ˆ
ØˆH\˜[\Ëš\Y
HOH[ÈØˆˆ[ØÛÛ[X[™ÚÚ[™ˆ\˜[\Ë˜ÛÛ[X[™Ú[™ØXÝ[ÛŽˆ\˜[\Ë˜XÝ[Û‹Ø\›Ý˜[ˆ
ØÈH\˜[\Ë˜\›Ý˜[Y
HOH[ÈØÈˆ[Ýš\Ý™\œÚ[ÛŽˆ
ÙH\˜[\Ëš\™\œÚ[ÛŠHOH[ÈÙˆ[ØÛÜÝØYÛÜ›Ýˆ
ÙHH\˜[\Ë˜ÛÜÝYÛÜ›Ý
HOH[ÈÙHˆ[Ü™\Ý[ÜÝ]Nˆ\˜[\Ëœ™\Ý[Ý]KÛY]Y]Nˆ
ÙˆH\˜[\Ë›Y]Y]JHOH[ÈÙˆˆßHJNÂˆBˆNÂˆB‚ˆËÈÜ˜ËØYÙ[X\›Ý˜[Y›ÝËšœÂˆ[˜Ý[ÛˆÜ™X]PYÙ[™\]Y\Ý
Ì
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë\™Ý[Y[Ë[˜Ý[ÛŠˆ
ÈØ]]Ø^KXÝ[ÛŽˆXÝ[ÛŒ‹š\ˆš\‹ÛÛ™\œØ][Û’YJHÂˆ˜\ˆØMØŽÂˆYˆ
JXÝ[ÛŒˆOH[È›ÚYˆXÝ[ÛŒ‹šY
HJš\ˆOH[È›ÚYˆš\‹šY
HS[X™\‹š\Ò[YÙ\Šš\‹™\œÚ[ÛŠHXÛÛ™\œØ][Û’Y
H›ÝÈ\œ›ÜŠ“Z\ÜÚ[™È\›Ý˜[ÛÛ^ŠNÂˆÛÛœÝ™\]Y\ÝYHÜž\Ëœ˜[™ÛUURQ

NÂˆÛÛœÝ]HHXÝ[ÛŒ‹šYOOH˜Ü™X]WÝ\ÚÈˆÈÝš[™Ê
ØˆH
ØMHXÝ[ÛŒ‹˜\™ÜÊHOH[È›ÚYˆØM]JHOH[ÈØˆˆˆŠKš[J
Hˆ[ÂˆYˆ
XÝ[ÛŒ‹šYOOH˜Ü™X]WÝ\ÚÈˆ	‰ˆ
]]H]K›[™ÝˆŒ
JH›ÝÈ\œ›ÜŠ’[˜[Y\ÚÈ]HŠNÂˆÛÛœÝ^[ØYH×ÜÜ™XY˜[Y\ÊÈXÝ[ÛŽˆXÝ[ÛŒ‹šYš\Yˆš\‹šYš\™\œÚ[ÛŽˆš\‹™\œÚ[ÛˆK]HÈÈ\™ÜÎˆÈ]HHHˆßJNÂˆÛÛœÝ^[ØY^H”ÓÓ‹œÝš[™ÚYžJ^[ØY
NÂˆÛÛœÝYÙ\ÝHZY[Üž\ËœÝXK™YÙ\Ý
”ÒKLMˆ‹™]È^[˜ÛÙ\Š
K™[˜ÛÙJ^[ØY^
JNÂˆÛÛœÝ^[ØY\ÚHË‹‹›™]ÈZ[\œ˜^JYÙ\Ý
WK›X\

ž]JHOˆž]KÔÝš[™ÊMŠKœYÝ\
‹ŒŠJKš›Ú[ŠˆŠNÂˆÛÛœÝ™\Ý[HZY[Ø]]Ø^K˜Ü™X]P\›Ý˜[
ÈÛÛ™\œØ][Û’Yš\Yˆš\‹šYš\™\œÚ[ÛŽˆš\‹™\œÚ[Û‹™\]Y\ÝYÛÛ[X[™Ú[™ˆ›]]][Ûˆ‹^[ØY\Ú^\™\Ð]ˆ™]È]J]K››ÝÊ
H
ÈMH
ˆŒ
ˆYLÊKÒTÓÔÝš[™Ê
HJNÂˆYˆ
J™\Ý[OH[È›ÚYˆ™\Ý[˜\›Ý˜[Y
H™\Ý[œÝ]HOOHœ[™[™ÈŠH›ÝÈ\œ›ÜŠ\›Ý˜[Ø\È›ÝÜ™X]YŠNÂˆ™]\›ˆÈ\›Ý˜[ˆ×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊÈYˆ™\Ý[˜\›Ý˜[Yš\™\œÚ[ÛŽˆš\‹™\œÚ[Û‹^[ØY\Ú^[ØY^XÝ[Û’YˆXÝ[ÛŒ‹šYK]HÈÈ]HHˆßJKÈ^\™\Ð]ˆ™\Ý[™^\™\Ð]JHNÂˆJNÂˆBˆ[˜Ý[Ûˆ\›Ý™PYÙ[™\]Y\Ý
Ì
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë\™Ý[Y[Ë[˜Ý[ÛŠˆ
ÈØ]]Ø^K™XÛÜ™š\ˆš\‹ÛÛ™\œØ][Û’YJHÂˆ˜\ˆØMÂˆÛÛœÝ™\Ý[HZY[Ø]]Ø^K˜\›Ý™JÈ\›Ý˜[Yˆ™XÛÜ™šYš\™\œÚ[ÛŽˆ
ØMH™XÛÜ™š\™\œÚ[ÛŠHOH[ÈØMˆš\‹™\œÚ[Û‹^[ØY\Úˆ™XÛÜ™œ^[ØY\ÚJNÂˆYˆ

™\Ý[OH[È›ÚYˆ™\Ý[œÝ]JHOOH˜\›Ý™YŠH™]\›ˆ™\Ý[ÂˆžHÂˆZY[Ø]]Ø^K˜]Y]
ÈÛÛ™\œØ][Û’Yš\Yˆš\‹šYÛÛ[X[™Ú[™ˆ›]]][Ûˆ‹XÝ[ÛŽˆ˜YÙ[Ø\›Ý˜[Ø\›Ý™Y‹\›Ý˜[Yˆ™XÛÜ™šYš\™\œÚ[ÛŽˆš\‹™\œÚ[Û‹™\Ý[Ý]Nˆ[œ™\ÛÛ™Y‹Y]Y]NˆÈ™X\ÛÛŽˆ™^XÝ][Û—ÙØ]]Ø^WÛ›ÝØÛÛ›™XÝYˆHJNÂˆHØ]Ú
JHÂˆBˆ™]\›ˆ™\Ý[ÂˆJNÂˆB‚ˆËÈÜ˜ËØYÙ[\›ÛÝ]šœÂˆ˜\ˆQÑS•Ô“ÓÕUÓSÑTÈHØš™XÝ™œ™Y^™JÈÑ‘Žˆ›Ù™ˆ‹SÕˆœ[Ý‹ÓŽˆ›ÛˆˆJNÂˆ[˜Ý[ÛˆYÙ[›ÛÝ]XÚ\Ú[ÛŠÈ[ÙHHQÑS•Ô“ÓÕUÓSÑTË“Ñ‘‹ÝÛ™\’YHˆ‹XÝ]™HH˜[ÙK\ÓX[˜YÙ[Y[H˜[ÙK[ÝÛ\ÝH×HHHßJHÂˆYˆ
XXÝ]™H\ÓX[˜YÙ[Y[
H™]\›ˆÈ[˜X›Yˆ˜[ÙK™X\ÛÛŽˆQÑS•Ô“ÓÕUÐPÐÓÕS•Ð“ÐÒÑQˆNÂˆYˆ
[ÙHOOHQÑS•Ô“ÓÕUÓSÑTË“ÓŠH™]\›ˆÈ[˜X›YˆYK™X\ÛÛŽˆQÑS•Ô“ÓÕUÑSP“QˆNÂˆYˆ
[ÙHOOHQÑS•Ô“ÓÕUÓSÑTË”SÕ	‰ˆ[ÝÛ\Ýš[˜ÛY\ÊÝÛ™\’Y
JH™]\›ˆÈ[˜X›YˆYK™X\ÛÛŽˆQÑS•Ô“ÓÕUÔSÕˆNÂˆ™]\›ˆÈ[˜X›Yˆ˜[ÙK™X\ÛÛŽˆ[ÙHOOHQÑS•Ô“ÓÕUÓSÑTË”SÕÈQÑS•Ô“ÓÕUÓ“ÕÒS—ÔSÕˆˆQÑS•Ô“ÓÕUÑTÐP“QˆNÂˆB‚ˆËÈÜ˜ËÚXœšYXYÙ[\Ù\ÜÚ[Û‹šœÂˆ[˜Ý[ÛˆÜ[’XœšYYÙ[Ù\ÜÚ[ÛŠ
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë\™Ý[Y[Ë[˜Ý[ÛŠˆ
ÈØ]]Ø^K›ÛÝ]HßKš\YH[HHßJHÂˆÛÛœÝXÚ\Ú[ÛŒˆHYÙ[›ÛÝ]XÚ\Ú[ÛŠÈ[ÙNˆ›ÛÝ]›[ÙHQÑS•Ô“ÓÕUÓSÑTË“Ñ‘‹ÝÛ™\’Yˆ›ÛÝ]›ÝÛ™\’YXÝ]™Nˆ›ÛÝ]˜XÝ]™K\ÓX[˜YÙ[Y[ˆ›ÛÝ]š\ÓX[˜YÙ[Y[[ÝÛ\Ýˆ›ÛÝ]˜[ÝÛ\Ý×HJNÂˆYˆ
YXÚ\Ú[ÛŒ‹™[˜X›Y
H™]\›ˆÈÚÎˆ˜[ÙK›ØÚÙYˆYK™X\ÛÛŽˆXÚ\Ú[ÛŒ‹œ™X\ÛÛˆNÂˆYˆ
]š\Y
H™]\›ˆÈÚÎˆ˜[ÙK›ØÚÙYˆYK™X\ÛÛŽˆQÑS•ÐÓÓ•VÔ‘TURT‘QˆNÂˆYˆ
JØ]]Ø^HOH[È›ÚYˆØ]]Ø^K›Ü[ÛÛ™\œØ][ÛŠJH™]\›ˆÈÚÎˆ˜[ÙK›ØÚÙYˆYK™X\ÛÛŽˆQÑS•ÑÐUUÐVWÕSURSP“HˆNÂˆžHÂˆ™]\›ˆÈÚÎˆYKÛÛ™\œØ][ÛŽˆZY[Ø]]Ø^K›Ü[ÛÛ™\œØ][ÛŠš\Y
HNÂˆHØ]Ú
JHÂˆ™]\›ˆÈÚÎˆ˜[ÙK›ØÚÙYˆYK™X\ÛÛŽˆQÑS•ÔÑTÔÒSÓ—ÕSURSP“HˆNÂˆBˆJNÂˆB‚ˆËÈÜ˜ËÝš\X[˜[\Ú\ËšœÂˆ˜\ˆ^ˆH
˜[YLŠHOˆÝš[™Ê˜[YLˆOH[È˜[YLˆˆˆŠKš[J
NÂˆ˜\ˆ[X™\ˆH
˜[YLŠHOˆ\[Ùˆ˜[YLˆOOH›[X™\ˆˆ	‰ˆ[X™\‹š\Ñš[š]J˜[YLŠHÈ˜[YLˆˆ[Âˆ˜\ˆXÙRÙ^HH
˜[YLŠHOˆ^Š˜[YLŠKÓØØ[SÝÙ\Ø\ÙJšHŠKœ™\XÙJÖ××LŒ—LŒWJËÙËˆŠNÂˆ[˜Ý[Ûˆ[˜[^™Uš\
š\ˆHßKÝ[[X\žHHßJHÂˆ˜\ˆØMØ‹ØËÙÙKÙŽÂˆÛÛœÝÙ][™ÜÌˆHš\‹œÙ][™ÜÈßNÂˆÛÛœÝ][\ÈH\œ˜^Kš\Ð\œ˜^Jš\‹š][\ÊHÈš\‹š][\Èˆ×NÂˆÛÛœÝš[™[™ÜÈH×NÂˆÛÛœÝÝÜÈH][\Ë™š[\Š
][JHOˆ
][HOH[È›ÚYˆ][KšÚ[™
HOOHœÝÜŠNÂˆÛÛœÝžQ^HHÊˆ×ÔT‘W×È
‹È™]ÈX\

NÂˆ›Üˆ
ÛÛœÝÝÜÙˆÝÜÊHÂˆÛÛœÝ^HH[X™\Š
ØMHÝÜœ^[ØY
HOH[È›ÚYˆØM™^JNÂˆYˆ
S[X™\‹š\Ò[YÙ\Š^JH^HJHÛÛ[YNÂˆYˆ
XžQ^Kš\Ê^JJHžQ^KœÙ]
^K×JNÂˆžQ^K™Ù]
^JKœ\Ú
ÝÜ
NÂˆBˆ›Üˆ
ÛÛœÝÙ^K^TÝÜ×HÙˆžQ^JHÂˆYˆ
^TÝÜË›[™ÝˆŠHš[™[™ÜËœ\Ú
ÈYˆ›Ý™\›ØYYY^H‹Ù]™\š]NˆØ\›š[™È‹^K^ˆ5æuåuçH	Ù^_H5æõåuç5ç	Ù^TÝÜË›[™ÝH5èµéµæuê5åuêŽÈ5æõäõä5æH5ç5äuäõåuéÈ5çµê5åuåuåõæuçK5åµçµè5æH5è5èuæuèµå5åuçµè5åuåõå˜JNÂˆBˆÛÛœÝÙY[ˆHÊˆ×ÔT‘W×È
‹È™]ÈX\

NÂˆ›Üˆ
ÛÛœÝÝÜÙˆÝÜÊHÂˆÛÛœÝÙ^HHXÙRÙ^J

ØˆHÝÜœ^[ØY
HOH[È›ÚYˆØ‹œXÙJH

ØÈHÝÜœ^[ØY
HOH[È›ÚYˆØË›˜[YJJNÂˆYˆ
ZÙ^JHÛÛ[YNÂˆÛÛœÝ^HH[X™\Š
ÙHÝÜœ^[ØY
HOH[È›ÚYˆÙ™^JH[ÂˆÛÛœÝ™]š[Ý\ÈHÙY[‹™Ù]
Ù^JNÂˆYˆ
™]š[Ý\ÊHš[™[™ÜËœ\Ú
ÈYˆ™\XØ]K\ÝÜ‹Ù]™\š]NˆØ\›š[™È‹^K^ˆ5å5èµéµæuê5å8 '‰Ý^Š

ÙHHÝÜœ^[ØY
HOH[È›ÚYˆÙKœXÙJH

ÙˆHÝÜœ^[ØY
HOH[È›ÚYˆÙ‹›˜[YJJ_x 'H5çµåué5æuèµå5æuåuêµê5çµé5èµçH5ä5åõê‰Ü™]š[Ý\Ë™^H	‰ˆ^H	‰ˆ™]š[Ý\Ë™^HOOH^HÈ
5æuçµæuçH	Ü™]š[Ý\Ë™^_H5åu¯‰Ù^_JXˆˆŸK˜JNÂˆ[ÙHÙY[‹œÙ]
Ù^KÈ^HJNÂˆBˆÛÛœÝÜ[•\ÚÜÈH][\Ë™š[\Š
][JHOˆÂˆ˜\ˆØMNÂˆ™]\›ˆ
][HOH[È›ÚYˆ][KšÚ[™
HOOH\ÚÈˆ	‰ˆ

ØMHH][Kœ^[ØY
HOH[È›ÚYˆØMK™Û™JHOOHYNÂˆJNÂˆYˆ
Ü[•\ÚÜË›[™Ý
Hš[™[™ÜËœ\Ú
ÈYˆ›Ü[‹]\ÚÈ‹Ù]™\š]Nˆš[™›È‹^ˆ5è5êuä5ê5åH	ÛÜ[•\ÚÜË›[™ÝH5çµêuæuçµåuêˆ5é5êµåuåõåuêˆ5ç5äuäõæuéõå˜JNÂˆÛÛœÝYÙ]H[X™\ŠÙ][™ÜÌ‹˜YÙ]
KÜ[H[X™\ŠÝ[[X\žKœÜ[
NÂˆYˆ
YÙ]OOH[	‰ˆYÙ]ˆ	‰ˆÜ[OOH[	‰ˆÜ[ˆYÙ]
HÂˆš[™[™ÜË[œÚY
ÈYˆ˜YÙ][Ý™\œ[ˆ‹Ù]™\š]NˆØ\›š[™È‹^ˆ5å5å5åuéµä5åuêˆ5å5æuäõåuèµåuêˆ5åõåuê5äµåuêˆ5äu¯‰ÊÜ[HYÙ]
KÑš^Y
Š_H8 ªˆ5çµå5êµéõéµæuäH5êuå5åuäµäõê˜JNÂˆBˆ™]\›ˆÈš[™[™ÜË\ÕØ\›š[™ÜÎˆš[™[™ÜËœÛÛYJ

HOˆœÙ]™\š]HOOHØ\›š[™ÈŠHNÂˆB‚ˆËÈÜ˜ËÜ›ÝšY\‹Y]šY[˜ÙKšœÂˆ˜\ˆ˜[Y]LˆH
˜[YLŠHOˆ\[Ùˆ˜[YLˆOOHœÝš[™Èˆ	‰ˆ[X™\‹š\Ñš[š]J]Kœ\œÙJ˜[YLŠJNÂˆ[˜Ý[Ûˆ™\šYšYY]šY[˜ÙJ˜[YL‹È›ÝÈH]K››ÝÊ
KX^YÙS\ÈH
ˆŒ
ˆŒ
ˆYLÈHHßJHÂˆYˆ
]˜[YLˆ˜[YL‹œÝ]\ÈOOH™\šYšYYˆ\[Ùˆ˜[YL‹œÛÝ\˜ÙHOOHœÝš[™Èˆ]˜[YL‹œÛÝ\˜ÙKš[J
H]˜[Y]LŠ˜[YL‹˜ÚXÚÙY]
JH™]\›ˆ[ÂˆÛÛœÝYÙHH›ÝÈH]Kœ\œÙJ˜[YL‹˜ÚXÚÙY]
NÂˆYˆ
YÙHJMH
ˆŒ
ˆYLÊHYÙHˆX^YÙS\ÊH™]\›ˆ[Âˆ™]\›ˆ˜[YLŽÂˆBˆ˜\ˆ]šY[˜ÙTÛXÞHHÈÙX]\Žˆˆ
ˆŒ
ˆŒ
ˆYLËÜ[š[™ÒÝ\œÎˆ
ˆŒ
ˆŒ
ˆYLË›Ý]NˆŒ
ˆŒ
ˆYLÈNÂ‚ˆËÈÜ˜ËØYÙ[\Ú]KZÛ›ÝÛYÙKšœÂˆ˜\ˆ›Ü›X[^™LˆH
˜[YLŠHOˆÝš[™Ê˜[YLˆˆŠKš[J
KÓØØ[SÝÙ\Ø\ÙJšHŠNÂˆ˜\ˆÚ]RÛ›ÝÛYÙHHÂˆÈYˆ™\Ú›Ø\™‹]Nˆµèuéõæuê5å‹™YŽˆˆÙ\Ú›Ø\™‹\›\ÎˆÈµèuéõæuê5å‹µç5åuåÈ5äuéõê5å‹µäõêuäuåuê5äÈ‹µçµéµäH5å5æ5æuåuç—K\ØÜš\[ÛŽˆµèuæuæõåuçH5çµéµäH5å5æ5æuåuç5åuå5å5æõè5åuê‹ˆˆKˆÈYˆ˜YÙ[‹]NˆµèuåuæõçË5ä5æuêuåuê5æuçH5åuäõåuí5åõåuêˆ‹™YŽˆˆØYÙ[‹\›\ÎˆÈµèuåuæõçÈ‹µä5æuêuåuê5æuçH‹µäõåuí5åõåuêˆ‹µèµåµê5å5åuêµæõè5åuçÈ—K\ØÜš\[ÛŽˆµêuä5ç5åuê‹5å5éµèµåuêˆ5åuä5æuêuåuê5æuçH5êuç5å5èuåuæõçËˆˆKˆÈYˆ™^[œÙ\È‹]NˆµêµéõéµæuäH5åuå5åuéµä5åuêˆ‹™YŽˆˆÙ^[œÙ\È‹\›\ÎˆÈµêµéõéµæuäH‹µå5åuéµä5åuêˆ‹µæõçµå5è5êuä5ê‹µæuêµê5å—K\ØÜš\[ÛŽˆµêµéõéµæuäH5å5æ5æuåuç5å5åuéµä5åuêˆ5åuæuêµê5åˆˆKˆÈYˆ˜›ÛÚÚ[™È‹]Nˆµå5åµçµè5åuêˆ‹™YŽˆˆØ›ÛÚÚ[™È‹\›\ÎˆÈµå5åµçµè5å‹µå5åµçµè5åuêˆ‹µçµç5åuçÈ‹µæ5æuèuå—K\ØÜš\[ÛŽˆµå5åµçµè5åuêˆ5åuèuæ5æ5åuèuæH5æ5æué5åuçˆˆKˆÈYˆœÝÜ‹]Nˆµçµèuç5åuç5åuæuçµæuçH‹™YŽˆˆÜÝÜ‹\›\ÎˆÈµçµèuç5åuç‹µêµæõè5åuçÈ5çµèuç5åuç‹µêµæõè5åuçÈ5å5æ5æuåuç‹µèµéµæuê5å‹µèµéµæuê5åuêˆ‹µæuçµæuçH—K\ØÜš\[ÛŽˆµêµæõè5åuçÈ5å5çµèuç5åuç5ç5é5æH5æuçµæuçH5åuèµéµæuê5åuê‹ˆˆKˆÈYˆœXÙH‹]Nˆµçµéõåuçµåuêˆ5åuêuæuê5åuêµæuçH‹™YŽˆˆÜXÙH‹\›\ÎˆÈµçµéõåuçµåuêˆ‹µêuæuê5åuêµæuçH‹µæuèµäÈ—K\ØÜš\[ÛŽˆµçµéõåuçµåuêˆ5åuêuæuê5åuêµæuçH5å5éõêuåuê5æuçH5ç5æ5æuåuçˆˆKˆÈYˆ™ÙX\ˆ‹]NˆµéµæuåuäÈ5åuå5äõê5æõåuêˆ‹™YŽˆˆÙÙX\ˆ‹\›\ÎˆÈµéµæuåuäÈ‹µå5äõê5æõå‹µéµæuåuäÈ5ç5æ5æuåuç—K\ØÜš\[ÛŽˆµéµæuåuäË5éõæ5äµåuê5æuåuêˆ5åuå5äõê5æõåuêˆ5êuæuçµåuêKˆˆKˆÈYˆ\ÚÈ‹]Nˆµçµêuæuçµåuêˆ‹™YŽˆˆÝ\ÚÈ‹\›\ÎˆÈµçµêuæuçµå‹µçµêuæuçµåuêˆ‹µçµæ5ç5åuêˆ—K\ØÜš\[ÛŽˆµçµêuæuçµåuêˆ5é5êµåuåõåuêˆ5åuçµéµäH5å5æ5æué5åuç5äuå5çËˆˆKˆÈYˆ™ØÝ[Y[È‹]Nˆµä5æuêuåuê5æH5ç5æuè5å‹™YŽˆˆÙØÝ[Y[È‹\›\ÎˆÈµä5æuêuåuê5æH5ç5æuè5å‹µçµèuçµæõæuçH‹µä5æuêuåuê—K\ØÜš\[ÛŽˆµçµèuçµæõæuçH5åuä5æuêuåuê5æuçH5êuå5åuèµç5åH5ç5æ5æuåuçˆˆBˆNÂˆ˜\ˆÚ]PXÝ[ÛœÈHÞÈYˆ˜Y\ÝÜ‹X™[ˆµå5åuèué5êˆ5èµéµæuê5å5ç5çµèuç5åuç‹\›\ÎˆÈµå5åuèuèÈ5èµéµæuê5å‹µå5åuèué5êˆ5èµéµæuê5å‹µéµåuê5èµéµæuê5å—K\™Ù]ˆœÝÜ‹\›Ý˜[ˆœ™\]Z\™YˆKÈYˆ˜Ü™X]WÝ\ÚÈ‹X™[ˆµå5åuèué5êˆ5çµêuæuçµå‹\›\ÎˆÈµå5åuèuèÈ5çµêuæuçµå‹µå5åuèué5êˆ5çµêuæuçµå‹µéµåuê5çµêuæuçµå—K\™Ù]ˆ\ÚÈ‹\›Ý˜[ˆœ™\]Z\™YˆWNÂˆ˜\ˆÙX\˜ÚÚ]RÛ›ÝÛYÙHH
]Y\žJHOˆÂˆÛÛœÝHH›Ü›X[^™LŠ]Y\žJNÂˆYˆ
\JH™]\›ˆ×NÂˆ™]\›ˆÚ]RÛ›ÝÛYÙK›X\

[žK[™^
HOˆÂˆÛÛœÝ]ÈH[žK\›\Ë™š[\Š
\›JHOˆKš[˜ÛY\Ê›Ü›X[^™LŠ\›JJJNÂˆ™]\›ˆ]Ë›[™ÝÈ×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßK[žJKÈØÛÜ™Nˆ]Ë›[™Ý
ˆL
È
Kš[˜ÛY\Ê›Ü›X[^™LŠ[žK]JJHÈHˆ
HH[™^ÈLJHˆ[ÂˆJK™š[\Š›ÛÛX[ŠKœÛÜ

KŠHOˆ‹œØÛÜ™HHKœØÛÜ™JNÂˆNÂˆ˜\ˆ[šÌˆH
Y
HOˆÚ]RÛ›ÝÛYÙK™š[™


HOˆšYOOHY
H[Âˆ˜\ˆ›Ý]P[œÝÙ\ˆH
Û˜\ÚÝHßJHOˆÂˆ˜\ˆØMÂˆÛÛœÝÝÜÈH


ØMHÛ˜\ÚÝš\
HOH[È›ÚYˆØMš][\ÊH×JK™š[\Š

HOˆšÚ[™OOHœÝÜŠKœÛÜ

KŠHOˆÂˆ˜\ˆØMKØŽÂˆ™]\›ˆ
[X™\Š
ØMHHKœ^[ØY
HOH[È›ÚYˆØMK™^JH
HH
[X™\Š
ØˆH‹œ^[ØY
HOH[È›ÚYˆØ‹™^JH
NÂˆJNÂˆÛÛœÝ™]šY]ÌˆHÝÜËœÛXÙJJK›X\


HOˆÂˆ˜\ˆØMKØ‹ØÎÂˆ™]\›ˆ5æuåuçH	Ê
ØMHHœ^[ØY
HOH[È›ÚYˆØMK™^JHÈŸNˆ	Ê
ØˆHœ^[ØY
HOH[È›ÚYˆØ‹œXÙJH

ØÈHœ^[ØY
HOH[È›ÚYˆØË›˜[YJHµèµéµæuê5åŸXÂˆJKš›Ú[Šˆ0­ÈŠNÂˆ™]\›ˆÈÚ[™ˆ™]H‹^ˆ5ä5êˆ5êµæõè5åuçÈ5å5çµèuç5åuç5å5çµç5ä5ê5åuä5æuçH5äuç5êuåuè5æuêˆ8 'µçµèuç5åuç5åuæuçµæuçx 'K‰ÜÝÜË›[™ÝÈ5è5çµéµä5åH	ÜÝÜË›[™ÝH5èµéµæuê5åuê‰Ü™]šY]ÌˆÈˆ	Ü™]šY]ÌŸIÜÝÜË›[™ÝˆHÈˆ5åuèµåuäÈˆˆˆŸK˜ˆ‹ˆŸXˆˆŸX[šÎˆ[šÌŠœÝÜŠHNÂˆNÂˆ˜\ˆÛÝ[^H
‹Ú[™Ý[\‹\˜[
HOˆˆOOHHÈÚ[™Ý[\ˆˆ	ÛŸH	Ü\˜[XÂˆ˜\ˆÝ]\Ð[œÝÙ\ˆH
Û˜\ÚÝHßJHOˆÂˆ˜\ˆØMÂˆÛÛœÝ][\ÈH

ØMHÛ˜\ÚÝš\
HOH[È›ÚYˆØMš][\ÊH×NÂˆÛÛœÝÜ[•\ÚÜÈH][\Ë™š[\Š

HOˆÂˆ˜\ˆØMNÂˆ™]\›ˆšÚ[™OOH\ÚÈˆ	‰ˆ

ØMHHœ^[ØY
HOH[È›ÚYˆØMK™Û™JHOOHYNÂˆJK›[™ÝÂˆÛÛœÝÜ[›ÛÚÚ[™ÜÈH][\Ë™š[\Š

HOˆÂˆ˜\ˆØMNÂˆ™]\›ˆšÚ[™OOH˜›ÛÚÚ[™Èˆ	‰ˆVÈµå5åuåµçµçÈ‹µêuåuç5çH—Kš[˜ÛY\Ê
ØMHHœ^[ØY
HOH[È›ÚYˆØMKœÝ]\ÊNÂˆJK›[™ÝÂˆ™]\›ˆÈÚ[™ˆ™]H‹^ˆ5è5çµéµä5åH	ØÛÝ[^
Ü[•\ÚÜËµçµêuæuçµå5ä5åõêˆ5é5êµåuåõå‹µçµêuæuçµåuêˆ5é5êµåuåõåuêˆŠ_H5åu¯‰ØÛÝ[^
Ü[›ÛÚÚ[™ÜËµå5åµçµè5å5ä5åõêˆ5é5êµåuåõå‹µå5åµçµè5åuêˆ5é5êµåuåõåuêˆŠ_K˜[šÎˆ[šÌŠ™\Ú›Ø\™ŠHNÂˆNÂˆ˜\ˆZ\ÜÚ[™Ð[œÝÙ\ˆH
Û˜\ÚÝHßJHOˆÂˆ˜\ˆØMÂˆÛÛœÝ][\ÈH

ØMHÛ˜\ÚÝš\
HOH[È›ÚYˆØMš][\ÊH×KZ\ÜÚ[™ÈH][\Ë™š[\Š

HOˆÂˆ˜\ˆØMNÂˆ™]\›ˆšÚ[™OOH\ÚÈˆ	‰ˆ

ØMHHœ^[ØY
HOH[È›ÚYˆØMK™Û™JHOOHYNÂˆJK›X\


HOˆÂˆ˜\ˆØMKØŽÂˆ™]\›ˆ

ØMHHœ^[ØY
HOH[È›ÚYˆØMK]JH

ØˆHœ^[ØY
HOH[È›ÚYˆØ‹›˜[YJHµçµêuæuçµå5ç5ç5ä5êuçHŽÂˆJNÂˆ™]\›ˆÈÚ[™ˆ™]H‹^ˆZ\ÜÚ[™Ë›[™ÝÈ5èµäõæuæuçÈ5åõèuê5ç5å5êuç5æuçNˆ	ÛZ\ÜÚ[™Ëš›Ú[Šˆ0­ÈŠ_K˜ˆµç5é5æH5å5è5êµåuè5æuçH5å5êuçµåuê5æuçH5ä5æuçÈ5çµêuæuçµåuêˆ5é5êµåuåõåuêˆ5æõê5äµè‹ˆ‹[šÎˆ[šÌŠ\ÚÈŠHNÂˆNÂˆ˜\ˆ\˜][Û[œÝÙ\ˆH
Û˜\ÚÝHßJHOˆÂˆ˜\ˆØMØ‹ØËÙÂˆÛÛœÝ][\ÈH

ØMHÛ˜\ÚÝš\
HOH[È›ÚYˆØMš][\ÊH×K^\ÈH[X™\Š
ØÈH
ØˆHÛ˜\ÚÝš\
HOH[È›ÚYˆØ‹œÙ][™ÜÊHOH[È›ÚYˆØË™^\ÊKÛÝ[ÈHÊˆ×ÔT‘W×È
‹È™]ÈX\

NÂˆ›Üˆ
ÛÛœÝ][HÙˆ][\ÊHÂˆYˆ
][KšÚ[™OOHœÝÜŠHÛÛ[YNÂˆÛÛœÝ^HH[X™\Š
ÙH][Kœ^[ØY
HOH[È›ÚYˆÙ™^JNÂˆYˆ
[X™\‹š\Ò[YÙ\Š^JH	‰ˆ^Hˆ
HÛÝ[ËœÙ]
^K
ÛÝ[Ë™Ù]
^JH
H
ÈJNÂˆBˆÛÛœÝÝ[H[X™\‹š\Ò[YÙ\Š^\ÊH	‰ˆ^\ÈˆÈ^\ÈˆÛÝ[ËœÚ^™HÈX]›X^
‹‹˜ÛÝ[ËšÙ^\Ê
JHˆÂˆÛÛœÝ]Z[HË‹‹˜ÛÝ[Ë™[šY\Ê
WKœÛÜ

KŠHOˆVÌHH–ÌJK›X\

Ù^KÛÝ[JHOˆ5æuåuçH	Ù^_Nˆ	ØÛÝ[X
Kš›Ú[Šˆ0­ÈŠNÂˆ™]\›ˆÈÚ[™ˆ™]H‹^ˆ5å5æ5æuåuç5çµêµåuæõè5çÈ5ç5¯‰ÝÝ[H5æuçµæuçK˜
È
]Z[È5çµèué5ê5å5èµéµæuê5åuêˆ5ç5é5æH5æuåuçNˆ	Ù]Z[K˜ˆˆŠK[šÎˆ[šÌŠœÝÜŠHNÂˆNÂˆ˜\ˆÙÚ[™Ð[œÝÙ\ˆH
Û˜\ÚÝHßJHOˆÂˆ˜\ˆØMÂˆÛÛœÝÝ^\ÈH


ØMHÛ˜\ÚÝš\
HOH[È›ÚYˆØMš][\ÊH×JK™š[\Š

HOˆÂˆ˜\ˆØMKØŽÂˆ™]\›ˆšÚ[™OOH˜›ÛÚÚ[™Èˆ	‰ˆõç5æuè5å5çµç5åuçßÝ[ÙËÚK\Ý
Ýš[™Ê

ØMHHœ^[ØY
HOH[È›ÚYˆØMK\JH

ØˆHœ^[ØY
HOH[È›ÚYˆØ‹˜Ø]YÛÜžJHˆŠJNÂˆJK›X\


HOˆÂˆÛÛœÝHœ^[ØYßNÂˆ™]\›ˆ	ÜœXÙH›˜[YHµçµéõåuçH5ç5æuè5å5ç5ä5éµåuæuçÈŸIÜ™^HÈ
5æuåuçH	Ü™^_JXˆˆŸXÂˆJNÂˆ™]\›ˆÈÚ[™ˆ™]H‹^ˆÝ^\Ë›[™ÝÈ5çµéõåuçµåuêˆ5å5ç5æuè5å5êuè5êuçµê5åH5äuæ5æuåuçˆ	ÜÝ^\Ëš›Ú[Šˆ0­ÈŠ_K˜ˆµç5ä5è5êuçµê5åH5èµäõæuæuçÈ5çµéõåuçµåuêˆ5ç5æuè5å5äuæ5æuåuçˆ‹[šÎˆ[šÌŠ˜›ÛÚÚ[™ÈŠHNÂˆNÂˆ˜\ˆ[˜[\Ú\Ð[œÝÙ\ˆH
Û˜\ÚÝHßJHOˆÂˆÛÛœÝ™\Ý[H[˜[^™Uš\
Û˜\ÚÝš\ßKÈÜ[ˆÛ˜\ÚÝœÜ[JNÂˆYˆ
\™\Ý[™š[™[™ÜË›[™Ý
H™]\›ˆÈÚ[™ˆ™]H‹^ˆµç5ä5è5çµéµä5åH5æõê5äµèˆ5äuèµæuåuêˆ5çµä5åuçµêµåuêˆ5äuè5êµåuè5æH5å5æ5æuåuç5êuè5êuçµê5åKˆ‹[šÎˆ[šÌŠ˜YÙ[ŠHNÂˆ™]\›ˆÈÚ[™ˆ™]H‹^ˆ5äuäõæuéõêˆ5å5æ5æuåuç5çµéµä5åˆ	Ü™\Ý[™š[™[™ÜË›X\


HOˆ^
Kš›Ú[ŠˆŠ_X[šÎˆ[šÌŠ˜YÙ[ŠHNÂˆNÂˆ˜\ˆ™XY[™\ÜÐ[œÝÙ\ˆH
Û˜\ÚÝHßJHOˆÂˆÛÛœÝš\ˆHÛ˜\ÚÝš\ßK™\ÜHØ[Ý[]T™XY[™\ÜÊÈš\ˆš\‹][\Îˆš\‹š][\È×HJNÂˆYˆ
\™\Üœ™\]Z\™[Y[ËÝ[
H™]\›ˆÈÚ[™ˆ™]H‹^ˆµç5ä5å5åuäµäõê5åH5èµäõæuæuçÈ5äõê5æuêuåuêˆ5çµåuæõè5åuêˆ5ê5êuçµæuåuêˆ5ç5æ5æuåuçÈ5ç5æõçÈ5å5èuåuæõçÈ5ç5ä5çµèuçµçÈ5ä5êˆ5å5æ5æuåuç5æõçµåuæõçËˆ‹[šÎˆ[šÌŠ˜YÙ[ŠHNÂˆÛÛœÝÜ[ˆH™\Üœ™\]Z\™[Y[›ÝÜË™š[\Š

HOˆœÝ]\ÈOOH˜ÛÛ\]Yˆ	‰ˆœÝ]\ÈOOH™^ÛYYŠK™›]X\


HOˆÞ]K‹‹žœ™X\ÛÛœÈ×WJNÂˆ™]\›ˆÈÚ[™ˆ™]H‹^ˆÜ[‹›[™ÝÈ5å5æ5æuåuç5èµäõæuæuçÈ5ä5æuè5åH5çµåuæõçÈ5ç5é5æH5å5äõê5æuêuåuêˆ5êuè5êuçµê5åNˆ	ÛÜ[‹š›Ú[Šˆ0­ÈŠ_K˜ˆ5æõç5äõê5æuêuåuêˆ5å5çµåuæõè5åuêˆ5êuè5êuçµê5åH5å5åuêuç5çµåH
	Ü™\Üœ™\]Z\™[Y[Ë˜ÛÛ\]YKÉÜ™\Üœ™\]Z\™[Y[ËÝ[JNÈ5åµåH5ä5æuè5å5äuäõæuéõêˆ5èué5éÈ5ä5åH5äuæ5æuåõåuêˆ5åõæuéµåuè5æuê‹˜[šÎˆ[šÌŠ˜YÙ[ŠHNÂˆNÂˆ˜\ˆ›Ý™[˜[˜ÙP[œÝÙ\ˆH

HOˆ
ÈÚ[™ˆ™]H‹^ˆµå5èuåuæõçÈ5çµé5ê5æuäÈ5äuæuçÈ5è5êµåuè5æuçH5êuè5êuçµê5åH5äuæ5æuåuç5åõæuêuåuäuæuçH5çµéõåuçµæuæuçK5çµæuäõèˆ5êuè5çµèuê5èµç5æuäõæH5å5çµêuêµçµêH5åuçµåõéõê5åõæuéµåuè5æKˆ5è5êµåuçÈ5çµéõåuçµæH5çµèuåuçµçÈ5æõçµä5åuçµêˆ5ç5é5æH5å5ê5êuåuçµåÈ5çµê5åõéÈ5çµèuåuçµçÈ5çµä5åuçµêˆ5ê5éÈ5ç5ä5åõê5êµêuåuäuêˆ5èué5éÈ5çµé5åuêŽÈ5çµåõæuê5åµçµæuè5åuê‹5êuèµåuêˆ5é5êµæuåõå5åuçµåµäˆ5ä5åuåuæuê5äõåuê5êuæuçH5çµéõåuê5åuêµä5ê5æuæˆ5äuäõæuéõåˆ5å5èuåuæõçÈ5ç5ä5çµéµæuäˆ5å5éµèµå5éõæuêuåuê5ä5åH5äõæuåuåuåÈ5çµêuêµçµêH5æõå5åµçµè5å5ä5åH5æõêµêuç5åuçH5êuäuåuéµèµåKˆ‹[šÎˆ[šÌŠ˜YÙ[ŠHJNÂˆ˜\ˆ›ÝšY\•[˜]˜Z[X›P[œÝÙ\ˆH
Ú[™
HOˆ
ÈÚ[™ˆ™]H‹^ˆ5å5êuä5ç5å5äõåuê5êuêˆ5èué5éÈ5åõæuéµåuè5æH
	ÚÚ[™JK5ä5æˆ5ä5æuçÈ5æõê5äµèˆ5êµåuéµä5êˆ5èué5éÈ5çµä5åuçµêˆ5åµçµæuè5åˆ5æuêH5ç5å5äµäõæuê5åuç5äuäõåuéÈ5ä5êˆ5å5èué5éÈ5äuçµèuæˆ5å5è5æuå5åuç5ç5é5è5æH5êuä5éµæuäˆ5êµåõåµæuêˆ5ä5åH5êuèµåuêˆ5é5êµæuåõåˆ5ç5ä5å5åuçµéµä5çµæuäõè‹˜[šÎˆ[JNÂˆ˜\ˆÙX]\[œÝÙ\ˆH
Û˜\ÚÝHßJHOˆÂˆ˜\ˆØMØ‹ØËÙÙKÙŽÂˆÛÛœÝÙX]\ˆH™\šYšYY]šY[˜ÙJÛ˜\ÚÝÙX]\‹ÈX^YÙS\Îˆ]šY[˜ÙTÛXÞKÙX]\ˆJNÂˆYˆ
]ÙX]\ˆP\œ˜^Kš\Ð\œ˜^JÙX]\‹™›Ü™XØ\Ý^\ÊH]ÙX]\‹™›Ü™XØ\Ý^\Ë›[™Ý
H™]\›ˆ›ÝšY\•[˜]˜Z[X›P[œÝÙ\Šµçµåµäˆ5ä5åuåuæuêŠNÂˆÛÛœÝš\œÝHÙX]\‹™›Ü™XØ\Ý^\ÖÌHßKX™[Hš\œÝ™\Ü^Q]HÈ	Ùš\œÝ™\Ü^Q]K™^_KÉÙš\œÝ™\Ü^Q]K›[ÛXˆµå5æuåuçH‹ÛÛ™][Û•˜[YHH

ØˆH
ØMHš\œÝ™^][YQ›Ü™XØ\Ý
HOH[È›ÚYˆØMÙX]\ÛÛ™][ÛŠHOH[È›ÚYˆØ‹™\ØÜš\[ÛŠH

ÙH
ØÈHš\œÝ™^][YQ›Ü™XØ\Ý
HOH[È›ÚYˆØËÙX]\ÛÛ™][ÛŠHOH[È›ÚYˆÙ\JH

ÙHHš\œÝÙX]\ÛÛ™][ÛŠHOH[È›ÚYˆÙK™\ØÜš\[ÛŠH

ÙˆHš\œÝÙX]\ÛÛ™][ÛŠHOH[È›ÚYˆÙ‹\JKÛÛ™][ÛˆH\[ÙˆÛÛ™][Û•˜[YHOOHœÝš[™ÈˆÈÛÛ™][Û•˜[YHˆ
ÛÛ™][Û•˜[YHOH[È›ÚYˆÛÛ™][Û•˜[YK^
H
ÛÛ™][Û•˜[YHOH[È›ÚYˆÛÛ™][Û•˜[YK›˜[YJHµêµè5ä5æH5çµåµäˆ5å5ä5åuåuæuê5å5êµéõäuç5åH5ç5ç5ä5êµæuä5åuêŽÂˆ™]\›ˆÈÚ[™ˆ™]H‹^ˆ5êµåõåµæuêˆ5çµä5åuçµêµêˆ5ç5¯‰ÛX™[Nˆ	ØÛÛ™][ÛŸKˆ5çµéõåuêˆ	ÝÙX]\‹œÛÝ\˜ÙHµèué5éÈ5çµåµäˆ5å5ä5åuåuæuêŸNÈ5è5äuäõéÈ5äu¯‰ÝÙX]\‹˜ÚXÚÙY]µçµåuèµäÈ5ç5ä5æuäõåuèˆŸK˜[šÎˆ[šÌŠ˜YÙ[ŠHNÂˆNÂˆ˜\ˆ[œÝÙ\•ÙX]\”]Y\Ý[ÛˆH
]Y\žKÛ˜\ÚÝHßJHOˆõçµåµä—Êµåõä5åuåOõæuê5êµåõåµæuêŸ5äµêuç_5æ5çµé5ê5æ5åuê5åË\Ý
›Ü›X[^™LŠ]Y\žJJHÈÙX]\[œÝÙ\ŠÛ˜\ÚÝ
Hˆ[Âˆ˜\ˆÜ[š[™ÒÝ\œÐ[œÝÙ\ˆH
Û˜\ÚÝHßJHOˆÂˆ˜\ˆØMÂˆÛÛœÝÝ\œÈH™\šYšYY]šY[˜ÙJÛ˜\ÚÝ›Ü[š[™ÒÝ\œËÈX^YÙS\Îˆ]šY[˜ÙTÛXÞK›Ü[š[™ÒÝ\œÈJNÂˆYˆ
ZÝ\œÊH™]\›ˆ›ÝšY\•[˜]˜Z[X›P[œÝÙ\Šµêuèµåuêˆ5é5êµæuåõåŠNÂˆÛÛœÝ\ØÜš\[ÛœÈHÝ\œËÙYZÙ^Q\ØÜš\[ÛœÈ

ØMHÝ\œËœ™YÝ[\“Ü[š[™ÒÝ\œÊHOH[È›ÚYˆØMÙYZÙ^Q\ØÜš\[ÛœÊNÂˆYˆ
P\œ˜^Kš\Ð\œ˜^J\ØÜš\[ÛœÊHY\ØÜš\[ÛœË›[™Ý
H™]\›ˆ›ÝšY\•[˜]˜Z[X›P[œÝÙ\Šµêuèµåuêˆ5é5êµæuåõåŠNÂˆ™]\›ˆÈÚ[™ˆ™]H‹^ˆ5êuèµåuêˆ5å5é5êµæuåõå5å5çµä5åuçµêµåuêˆ5êuç	ÚÝ\œËœXÙS˜[YHµå5çµéõåuçHŸNˆ	Ù\ØÜš\[ÛœËš›Ú[Šˆ0­ÈŠ_Kˆ5çµéõåuêˆ	ÚÝ\œËœÛÝ\˜ÙH‘ÛÛÙÛHXÙ\ÈTHŸNÈ5è5äuäõéÈ5äu¯‰ÚÝ\œË˜ÚXÚÙY]µçµåuèµäÈ5ç5ä5æuäõåuèˆŸK˜[šÎˆ[šÌŠ˜YÙ[ŠHNÂˆNÂˆ˜\ˆ[œÝÙ\“Ü[š[™ÒÝ\œÔ]Y\Ý[ÛˆH
]Y\žKÛ˜\ÚÝHßJHOˆõêuèµåuê‹Šµé5êµæuåõå5é5êµåuåÈ5å5æuåuç_5çµêµæH5é5êµåuåß5ä5æuê5åuèµæuçKË\Ý
›Ü›X[^™LŠ]Y\žJJHÈÜ[š[™ÒÝ\œÐ[œÝÙ\ŠÛ˜\ÚÝ
Hˆ[Âˆ[˜Ý[Ûˆ[œÝÙ\”Ú]T]Y\Ý[ÛŠ]Y\žKÛ˜\ÚÝHßJHÂˆÛÛœÝHH›Ü›X[^™LŠ]Y\žJNÂˆÛÛœÝXÝ[ÛŒˆHÚ]PXÝ[ÛœË™š[™


HOˆ\›\ËœÛÛYJ
\›JHOˆKš[˜ÛY\Ê›Ü›X[^™LŠ\›JJJJNÂˆYˆ
XÝ[ÛŒŠH™]\›ˆÈÚ[™ˆ˜XÝ[Ûˆ‹^ˆ5ä5é5êuê5ç5äuéµèˆ5ä5êˆ5å5é5èµåuç5å8 '‰ØXÝ[ÛŒ‹›X™[x 'K5ä5æˆ5è5äõê5êH5ä5æuêuåuê5çµé5åuê5êH5ç5é5è5æH5êuæuè5åuæH5å5æ5æuåuç˜XÝ[ÛŽˆXÝ[ÛŒ‹[šÎˆ[šÌŠXÝ[ÛŒ‹\™Ù]
HNÂˆYˆ
Kš[˜ÛY\Êµçµä5äõæuçHŠJH™]\›ˆÈÚ[™ˆ[šÛ›ÝÛˆ‹^ˆµç5ä5çµéµä5êµæH5êµêuåuäuå5çµä5åuçµêµêˆ5ç5êuä5ç5å5å5åµåH5äuæuæõåuç5åuêˆ5å5èuåuæõçËˆ‹[šÎˆ[NÂˆYˆ
õçµåµä‹õå5ä5åuåuæuê5çµåµäˆ5ä5åuåuæuê5êµåõåµæuêŸ5äµêuç_5æ5çµé5ê5æ5åuê5åË\Ý
JJH™]\›ˆ›ÝšY\•[˜]˜Z[X›P[œÝÙ\Šµçµåµäˆ5ä5åuåuæuêŠNÂˆYˆ
õêuèµåuê‹Šµé5êµæuåõå5é5êµåuåÈ5å5æuåuç_5çµêµæH5é5êµåuåß5ä5æuê5åuèµæuçKË\Ý
JJH™]\›ˆ›ÝšY\•[˜]˜Z[X›P[œÝÙ\Šµêuèµåuêˆ5é5êµæuåõåŠNÂˆYˆ
õêµè5åuèµå5é5éõéõæuç_5èµåuçµèH5äuæõäuæuê_5åµçµçÈ5è5èuæuèµå5èµæõêuæuåKË\Ý
JJH™]\›ˆ›ÝšY\•[˜]˜Z[X›P[œÝÙ\Šµêµè5åuèµåŠNÂˆYˆ
õä5çµæuè5åuêŸ5çµéõåuê5åuêŸ5çµä5åuçµêŸ5çµä5åuçµêµæuç_5çµå5äuäõåuéËË\Ý
JJH™]\›ˆ›Ý™[˜[˜ÙP[œÝÙ\Š
NÂˆYˆ
õçµåuæõçß5çµåuæõè5åuêŸ5çµåuæõè5æuç_5å5æõè5å5ç5æuéµæuä5å5åõèuê5éµæuåuäËË\Ý
JJH™]\›ˆ™XY[™\ÜÐ[œÝÙ\ŠÛ˜\ÚÝ
NÂˆYˆ
õçµå5å5äuèµæuåuêŸ5äuèµæuåuêˆ5äuæ5æuåuç5äuèµæuåuêˆ5äuêµæõè5åuçß5å5êµæõè5åuçÈ5çµä5åuåµçß5æuêH5æõé5æuç5åuæuåuêŸ5äuäõåuéÈ5ä5êˆ5å5æ5æuåuç5è5æuêµåuåÈ5å5æ5æuåuçË\Ý
JJH™]\›ˆ[˜[\Ú\Ð[œÝÙ\ŠÛ˜\ÚÝ
NÂˆYˆ
õçµå5åõèuê5çµå5è5êuä5ê5ç5å5êuç5æuç_5çµå5èµåuäÈ5éµê5æuæ‹Ë\Ý
JJH™]\›ˆZ\ÜÚ[™Ð[œÝÙ\ŠÛ˜\ÚÝ
NÂˆYˆ
õä5æué5å5æuêuè5æuç_5çµéõåuçµåuêˆ5ç5æuè5å5ç5æuè5å5çµç5åuçËË\Ý
JJH™]\›ˆÙÚ[™Ð[œÝÙ\ŠÛ˜\ÚÝ
NÂˆYˆ
õæõçµåŠµæuçµæuç_5çµêuæˆ5å5æ5æuåuç5èµéµæuê5åuêˆ5äuæõç5æuåuçKË\Ý
JJH™]\›ˆ\˜][Û[œÝÙ\ŠÛ˜\ÚÝ
NÂˆYˆ
õæõçµåŠŠ5çµêuæuçµåuêŸ5å5åµçµè5åuêŠ_5çµéµäKŠŠ5çµêuæuçµåuêŸ5å5åµçµè5åuêŠ_5é5êµåuåõåuê‹Ë\Ý
JJH™]\›ˆÝ]\Ð[œÝÙ\ŠÛ˜\ÚÝ
NÂˆÛÛœÝØ[Ó˜]šYØ][ÛˆHõä5æué5å5é5êµåß5èµäuåuê5êµèµäuæuê5ç5å5äµæuè‹Ë\Ý
JNÂˆYˆ
Ø[Ó˜]šYØ][ÛŠHÂˆÛÛœÝX]Ú\ÌÈHÙX\˜ÚÚ]RÛ›ÝÛYÙJJNÂˆYˆ
X]Ú\ÌË›[™Ý
H™]\›ˆÈÚ[™ˆ›˜]šYØ]H‹^ˆ5ä5é5êuê5ç5èµäuåuê5ç5çµèuæˆ8 '‰ÛX]Ú\ÌÖÌK]_x 'K˜[šÎˆX]Ú\ÌÖÌHNÂˆBˆYˆ
õêµéõéµæuä_5è5êuä5ê5æuêµê5åË\Ý
JJHÂˆÛÛœÝYÙ]H[X™\ŠÛ˜\ÚÝ˜YÙ]
KÜ[H[X™\ŠÛ˜\ÚÝœÜ[
NÂˆ™]\›ˆ[X™\‹š\Ñš[š]JYÙ]
H	‰ˆ[X™\‹š\Ñš[š]JÜ[
HÈÈÚ[™ˆ™]H‹^ˆ5æuêµê5êˆ5å5êµéõéµæuäH5ç5ä5åõê5å5åuéµä5åuêŽˆ	ÊYÙ]HÜ[
KÑš^Y
Š_H8 ª‹˜[šÎˆ[šÌŠ™^[œÙ\ÈŠHHˆÈÚ[™ˆ™]H‹^ˆµç5ä5å5åuäµäõê5êµéõéµæuäH5çµèué5æuéÈ5æõäõæH5ç5åõêuäH5æuêµê5åˆ‹[šÎˆ[šÌŠ™^[œÙ\ÈŠHNÂˆBˆYˆ
õçµèuç5åuç5êµæõè5åuçÈ5å5çµèuç5åuç5êµæõè5åuçÈ5å5æ5æuåuç5èµéµæuê5åuêŸ5ä5æuæ‹Šµê5åuä5åË\Ý
JJH™]\›ˆ›Ý]P[œÝÙ\ŠÛ˜\ÚÝ
NÂˆÛÛœÝX]Ú\ÌˆHÙX\˜ÚÚ]RÛ›ÝÛYÙJJNÂˆYˆ
X]Ú\Ì‹›[™Ý
H™]\›ˆÈÚ[™ˆ›[šÈ‹^ˆ5å5çµèuæˆ5å5çµêµä5æuçH5å5åuä8 '‰ÛX]Ú\Ì–ÌK]_x 'H8 %	ÛX]Ú\Ì–ÌK™\ØÜš\[ÛŸX[šÎˆX]Ú\Ì–ÌHNÂˆ™]\›ˆÈÚ[™ˆ[šÛ›ÝÛˆ‹^ˆµç5ä5çµéµä5êµæH5êµêuåuäuå5çµä5åuçµêµêˆ5ç5êuä5ç5å5å5åµåH5äuæuæõåuç5åuêˆ5å5èuåuæõçËˆ‹[šÎˆ[NÂˆB‚ˆËÈÜ˜ËØYÙ[]š\]ÛÛËšœÂˆ˜\ˆÙÚ[™ÈH
][JHOˆÂˆ˜\ˆØMØŽÂˆ™]\›ˆ
][HOH[È›ÚYˆ][KšÚ[™
HOOH˜›ÛÚÚ[™Èˆ	‰ˆõç5æuè5å5çµç5åuçßÝ[ÙËÚK\Ý
Ýš[™Ê

ØMH][Kœ^[ØY
HOH[È›ÚYˆØM\JH

ØˆH][Kœ^[ØY
HOH[È›ÚYˆØ‹˜Ø]YÛÜžJHˆŠJNÂˆNÂˆ˜\ˆX™[ˆH
][JHOˆÂˆ˜\ˆØMØ‹ØÎÂˆ™]\›ˆ

ØMH][HOH[È›ÚYˆ][Kœ^[ØY
HOH[È›ÚYˆØMœXÙJH

ØˆH][HOH[È›ÚYˆ][Kœ^[ØY
HOH[È›ÚYˆØ‹›˜[YJH

ØÈH][HOH[È›ÚYˆ][Kœ^[ØY
HOH[È›ÚYˆØË]JHµç5ç5ä5êuçHŽÂˆNÂˆ˜\ˆ^SÙˆH
][JHOˆÂˆ˜\ˆØMÂˆ™]\›ˆ[X™\Š
ØMH][HOH[È›ÚYˆ][Kœ^[ØY
HOH[È›ÚYˆØM™^JNÂˆNÂˆ˜\ˆ]MHH
˜[YLŠHOˆ\[Ùˆ˜[YLˆOOHœÝš[™Èˆ	‰ˆ×—ÍKWÌŸKWÌŸIË\Ý
˜[YLŠHÈ˜[YLˆˆµç5ä5å5åuäµäõêŽÂˆ˜\ˆšYÚÈH
œ›ÛKÊHOˆÂˆÛÛœÝHH]Kœ\œÙJœ›ÛH
È•ŒŒˆŠKˆH]Kœ\œÙJÈ
È•ŒŒˆŠNÂˆ™]\›ˆ[X™\‹š\Ñš[š]JJH	‰ˆ[X™\‹š\Ñš[š]JŠH	‰ˆˆˆHÈ
ˆHJHÈMHˆ[ÂˆNÂˆ˜\ˆÙX\˜Ú^H
˜[YLŠHOˆÝš[™Ê˜[YLˆˆŠKÓØØ[SÝÙ\Ø\ÙJšHŠKœ™\XÙJÖø $ø %0­ß

V×^ßWKÙËˆŠKœ™\XÙJ×ÊËÙËˆŠKš[J
NÂˆ˜\ˆÙÚ[™ÓX]Ú\ÈH
]Y\žK][JHOˆÂˆÛÛœÝHHÙX\˜Ú^
]Y\žJK˜]ÈHÝš[™ÊX™[Š][JHˆŠK[HÙX\˜Ú^
˜]ÊKÚÜHÙX\˜Ú^
˜]ËœÜ]
×ÊËWÊßÊø $×ÊßÊø %ÊËÊVÌJNÂˆ™]\›ˆ›ÛÛX[ŠH	‰ˆ
[	‰ˆKš[˜ÛY\Ê[
HÚÜ	‰ˆKš[˜ÛY\ÊÚÜ
H[	‰ˆ[š[˜ÛY\ÊJJJNÂˆNÂˆ[˜Ý[Ûˆ[œÝÙ\•š\ÛÛ
ÛÛÈš\ˆš\ˆHßKÝ[[X\žHHßK]Y\žHHˆˆHHßJHÂˆ˜\ˆØMÂˆÛÛœÝ][\ÈH\œ˜^Kš\Ð\œ˜^Jš\‹š][\ÊHÈš\‹š][\Èˆ×KÙ][™ÜÌˆHš\‹œÙ][™ÜÈßNÂˆYˆ
ÛÛOOH™Ù]Ýš\Ù]Z[ÈŠH™]\›ˆÈÚ[™ˆ™]H‹^ˆ5æuèµäÈ5å5æ5æuåuçˆ	Ýš\‹™\Ý[˜][Û—Û˜[YHš\‹™\Ý[˜][Ûˆš\‹™\Ý[˜][Û“˜[YHµç5ä5å5åuäµäõêŸKˆ5êµä5ê5æuæˆ5æuéµæuä5åˆ	Ù]MJÙ][™ÜÌ‹œÝ\
_Kˆ5çµêuæŽˆ	Ó[X™\ŠÙ][™ÜÌ‹™^\ÊHˆÈÙ][™ÜÌ‹™^\È
Èˆ5æuçµæuçHˆˆµç5ä5å5åuäµäõêŸK˜NÂˆYˆ
ÛÛOOH™Ù]Ù^WÜ[ˆŠHÂˆÛÛœÝX]ÚHÝš[™Ê]Y\žJK›X]Ú
õæuåuçWÊŠ
ÊKÊK^HHX]ÚÈ[X™\ŠX]ÚÌWJHˆ[ÂˆYˆ
Y^JH™]\›ˆÈÚ[™ˆ™]H‹^ˆµæuêH5ç5éµæuæuçÈ5çµèué5ê5æuåuçH5æõäõæH5ç5å5éµæuäˆ5ä5êˆ5å5êµåuæõè5æuêˆ5êuç5åKˆˆNÂˆÛÛœÝ›ÝÜÈH][\Ë™š[\Š

HOˆšÚ[™OOHœÝÜˆ	‰ˆ^SÙŠ
HOOH^JK›X\
X™[ŠNÂˆ™]\›ˆÈÚ[™ˆ™]H‹^ˆ›ÝÜË›[™ÝÈ5êµåuæõè5æuêˆ5æuåuçH	Ù^_Nˆ	Ü›ÝÜËš›Ú[Šˆ0­ÈŠ_K˜ˆ5ç5ä5è5êuçµê5åH5èµéµæuê5åuêˆ5ç5æuåuçH	Ù^_K˜NÂˆBˆYˆ
ÛÛOOH™Ù]ÜÝÜ×ØžWÙ^HŠHÂˆÛÛœÝÜ›Ý\ÈHÊˆ×ÔT‘W×È
‹È™]ÈX\

NÂˆ][\Ë™š[\Š

HOˆšÚ[™OOHœÝÜŠK™›Ü‘XXÚ


HOˆÂˆÛÛœÝ^HH^SÙŠ
HÈŽÂˆYˆ
YÜ›Ý\Ëš\Ê^JJHÜ›Ý\ËœÙ]
^K×JNÂˆÜ›Ý\Ë™Ù]
^JKœ\Ú
X™[Š
JNÂˆJNÂˆÛÛœÝ^ÈHË‹‹™Ü›Ý\×KœÛÜ

KŠHOˆ[X™\ŠVÌJHH[X™\Š–ÌJJK›X\

Ù^K˜[Y\×JHOˆ5æuåuçH	Ù^_Nˆ	Ý˜[Y\Ëš›Ú[Šˆ0­ÈŠ_X
Kš›Ú[ŠˆŠNÂˆ™]\›ˆÈÚ[™ˆ™]H‹^ˆ^Èµç5ä5è5êuçµê5åH5èµéµæuê5åuêˆ5äuçµèuç5åuçˆˆNÂˆBˆYˆ
ÛÛOOH™Ù]ÛÙÚ[™×ÜÝ[[X\žHŠHÂˆÛÛœÝÝ^\ÈH][\Ë™š[\ŠÙÚ[™ÊK›X\
X™[ŠNÂˆ™]\›ˆÈÚ[™ˆ™]H‹^ˆÝ^\Ë›[™ÝÈ5çµéõåuçµåuêˆ5å5ç5æuè5å5êuè5êuçµê5åNˆ	ÜÝ^\Ëš›Ú[Šˆ0­ÈŠ_K˜ˆµç5ä5è5êuçµê5åH5çµéõåuçµåuêˆ5ç5æuè5å5äuæ5æuåuçˆˆNÂˆBˆYˆ
ÛÛOOH™Ù]ÛÙÚ[™×Ù]\ÈŠHÂˆÛÛœÝ[H][\Ë™š[\ŠÙÚ[™ÊNÂˆÛÛœÝ™\]Y\ÝYH[™š[\Š

HOˆÙÚ[™ÓX]Ú\Ê]Y\žK
JNÂˆÛÛœÝÝ^\ÈH
™\]Y\ÝY›[™ÝÈ™\]Y\ÝYˆ[
K›X\


HOˆÂˆÛÛœÝHœ^[ØYßKÚXÚÒ[ˆH˜ÚXÚÒ[‘]HœÝ\]KÚXÚÓÝ]H˜ÚXÚÓÝ]]H™[™]KÚXÚÒ[•[YHH˜ÚXÚÒ[•[YH˜\œš]˜[[YKÚXÚÓÝ][YHH˜ÚXÚÓÝ][YH™\\\™U[YNÂˆ™]\›ˆ	ÛX™[Š
_H8 %5æõè5æuèuå	Ù]MJÚXÚÒ[Š_IØÚXÚÒ[•[YHÈ5äuêuèµå	ØÚXÚÒ[•[Y_Xˆˆ
5êuèµêˆ5æõè5æuèuå5ç5ä5å5åuåµè5å
HŸK5æuéµæuä5å	Ù]MJÚXÚÓÝ]
_IØÚXÚÓÝ][YHÈ5äuêuèµå	ØÚXÚÓÝ][Y_XˆˆŸXÂˆJNÂˆ™]\›ˆÈÚ[™ˆ™]H‹^ˆÝ^\Ë›[™ÝÈ™\]Y\ÝY›[™ÝÈ5é5ê5æ5æH5å5ç5æuè5å5èµäuåuê	ÛX™[Š™\]Y\ÝYÌJ_Nˆ	ÜÝ^\ÖÌ_K˜ˆ5êµä5ê5æuæõæH5å5ç5æuè5å5êuè5êuçµê5åNˆ	ÜÝ^\Ëš›Ú[Šˆ0­ÈŠ_K˜ˆµç5ä5è5êuçµê5åH5êµä5ê5æuæõæH5ç5æuè5å5äuæ5æuåuçˆˆNÂˆBˆYˆ
ÛÛOOH™Ù]ÛÙÚ[™×ØÚXÚÚ[ˆŠHÂˆÛÛœÝX]ÚH][\Ë™š[\ŠÙÚ[™ÊK™š[™


HOˆÙÚ[™ÓX]Ú\Ê]Y\žK
JNÂˆYˆ
[X]Ú
H™]\›ˆÈÚ[™ˆ™]H‹^ˆµæuêH5ç5éµæuæuçÈ5ä5êˆ5êuçH5å5çµç5åuçÈ5æõäõæH5ç5äuäõåuéÈ5ä5êˆ5åµçµçÈ5å5æõè5æuèuåˆˆNÂˆÛÛœÝHX]Úœ^[ØYßK[YHH˜ÚXÚÒ[•[YH˜\œš]˜[[YNÂˆ™]\›ˆÈÚ[™ˆ™]H‹^ˆ[YHÈ5åµçµçÈ5å5æõè5æuèuå5ç5çµç5åuçÈ	ÛX™[ŠX]Ú
_Nˆ	Ý[Y_K˜ˆ5ç5ä5è5êuçµê5åµçµçÈ5æõè5æuèuå5ç5çµç5åuçÈ	ÛX™[ŠX]Ú
_H5äuå5åµçµè5å˜NÂˆBˆYˆ
ÛÛOOH˜Ø[Ý[]WÛÙÚ[™×ÛšYÚÈŠHÂˆÛÛœÝ˜[Y\ÈH][\Ë™š[\ŠÙÚ[™ÊK›X\


HOˆÂˆÛÛœÝHœ^[ØYßKˆHšYÚÊ˜ÚXÚÒ[‘]HœÝ\]Hˆ‹˜ÚXÚÓÝ]]H™[™]HˆŠNÂˆ™]\›ˆ	ÛX™[Š
_H8 %	ÛˆOOH[Èµçµèué5ê5ç5æuç5åuêˆ5ç5ä5è5æuêµçÈ5ç5åõæuêuåuäHˆˆˆ
Èˆ5ç5æuç5åuêˆŸXÂˆJNÂˆ™]\›ˆÈÚ[™ˆ™]H‹^ˆ˜[Y\Ë›[™ÝÈ5çµèué5ê5å5ç5æuç5åuêŽˆ	Ý˜[Y\Ëš›Ú[Šˆ0­ÈŠ_K˜ˆµç5ä5è5êuçµê5åH5êµä5ê5æuæõæH5ç5æuè5åˆˆNÂˆBˆYˆ
ÛÛOOH™Ù]ÜØ]™YÛÙÚ[™×ÜšXÙ\ÈŠHÂˆÛÛœÝ˜[Y\ÈH][\Ë™š[\ŠÙÚ[™ÊK›X\


HOˆÂˆ˜\ˆØMKØŽÂˆÛÛœÝHœ^[ØYßKšXÙLˆH
ØˆH
ØMHHœšXÙJHOH[ÈØMHˆ˜ÛÜÝ
HOH[ÈØˆˆÝ[Âˆ™]\›ˆ	ÛX™[Š
_H8 %	ÜšXÙLˆOOH›ÚYÈµçµåõæuê5ç5ä5è5êuçµêˆˆšXÙLˆ
Èˆˆ
È
˜Ý\œ™[˜ÞH¸ ªˆŠ_XÂˆJNÂˆ™]\›ˆÈÚ[™ˆ™]H‹^ˆ˜[Y\Ë›[™ÝÈ5çµåõæuê5æH5å5ç5æuè5å5å5êuçµåuê5æuçNˆ	Ý˜[Y\Ëš›Ú[Šˆ0­ÈŠ_K˜ˆµç5ä5è5êuçµê5åH5å5åµçµè5åuêˆ5ç5æuè5åˆˆNÂˆBˆYˆ
ÛÛOOH™Ù]Ø›ÛÚÚ[™×ÜÝ]\ÈŠHÂˆÛÛœÝ›ÛÚÚ[™ÜÈH][\Ë™š[\Š

HOˆšÚ[™OOH˜›ÛÚÚ[™ÈŠNÂˆÛÛœÝÜ[ˆH›ÛÚÚ[™ÜË™š[\Š

HOˆÂˆ˜\ˆØMNÂˆ™]\›ˆVÈµå5åuåµçµçÈ‹µêuåuç5çH‹µçµä5åuêuê—Kš[˜ÛY\ÊÝš[™Ê

ØMHHœ^[ØY
HOH[È›ÚYˆØMKœÝ]\ÊHœÝ]\ÈˆŠJNÂˆJK›[™ÝÂˆ™]\›ˆÈÚ[™ˆ™]H‹^ˆ5è5çµéµä5åH	Ø›ÛÚÚ[™ÜË›[™ÝH5å5åµçµè5åuêˆ5äuæ5æuåuçÈ	ÛÜ[ŸH5èµäõæuæuçÈ5äõåuê5êuåuêˆ5æ5æué5åuçˆ5å5è5êµåuçÈ5çµäuåuèuèH5èµç5å5ê5êuåuçµåuêˆ5å5çµéõåuçµæuåuêˆ5äuç5äuäË˜NÂˆBˆYˆ
ÛÛOOH™Ù]ØYÙ]ÜÝ[[X\žHŠHÂˆÛÛœÝYÙ]H[X™\ŠÙ][™ÜÌ‹˜YÙ]
KÜ[H[X™\ŠÝ[[X\žKœZY
NÂˆYˆ
S[X™\‹š\Ñš[š]JYÙ]
HS[X™\‹š\Ñš[š]JÜ[
JH™]\›ˆÈÚ[™ˆ™]H‹^ˆµç5ä5å5åuäµäõê5åH5çµèué5æuéÈ5è5êµåuè5æH5êµéõéµæuäH5æõäõæH5ç5åõêuäH5æuêµê5åˆˆNÂˆ™]\›ˆÈÚ[™ˆ™]H‹^ˆ5êµéõéµæuäH5å5æ5æuåuçˆ	ØYÙ]Ñš^Y
Š_H8 ª‹ˆ5å5åuéµä5åuêˆ5êuè5èué5ê5åNˆ	ÜÜ[Ñš^Y
Š_H8 ª‹ˆ5æuêµê5å5çµåõåuêuäuêŽˆ	ÊYÙ]HÜ[
KÑš^Y
Š_H8 ª‹˜NÂˆBˆYˆ
ÛÛOOH™Ù]Ý\Ú×ÜÝ]\ÈŠHÂˆÛÛœÝ\ÚÜÈH][\Ë™š[\Š

HOˆšÚ[™OOH\ÚÈŠKÜ[ˆH\ÚÜË™š[\Š

HOˆÂˆ˜\ˆØMNÂˆ™]\›ˆ

ØMHHœ^[ØY
HOH[È›ÚYˆØMK™Û™JHOOHYNÂˆJK›X\
X™[ŠNÂˆ™]\›ˆÈÚ[™ˆ™]H‹^ˆÜ[‹›[™ÝÈ5çµêuæuçµåuêˆ5é5êµåuåõåuêŽˆ	ÛÜ[‹š›Ú[Šˆ0­ÈŠ_K˜ˆµä5æuçÈ5çµêuæuçµåuêˆ5é5êµåuåõåuêˆ5äuê5êuåuçµåuêˆ5å5çµéõåuçµæuåuê‹ˆˆNÂˆBˆYˆ
ÛÛOOH™Ù]ÛZ\ÜÚ[™×Ù]HŠHÂˆÛÛœÝZ\ÜÚ[™ÈH×NÂˆYˆ
\Ù][™ÜÌ‹œÝ\
HZ\ÜÚ[™Ëœ\Ú
µêµä5ê5æuæˆ5æuéµæuä5åŠNÂˆYˆ
S[X™\ŠÙ][™ÜÌ‹™^\ÊJHZ\ÜÚ[™Ëœ\Ú
µçµêuæˆ5å5æ5æuåuçŠNÂˆYˆ
Z][\ËœÛÛYJÙÚ[™ÊJHZ\ÜÚ[™Ëœ\Ú
µçµéõåuçH5ç5æuè5åŠNÂˆ™]\›ˆÈÚ[™ˆ™]H‹^ˆZ\ÜÚ[™Ë›[™ÝÈ5çµæuäõèˆ5êuèµäõæuæuçÈ5åõèuêˆ	ÛZ\ÜÚ[™Ëš›Ú[Šˆ0­ÈŠ_K˜ˆµç5ä5åµåuå5å5çµæuäõèˆ5äuèuæuèuæH5åõèuê5äuê5êuåuçµåuêˆ5å5çµéõåuçµæuåuê‹ˆˆNÂˆBˆYˆ
ÛÛOOH™Ù]ÜÛÝ\˜ÙWÜÝ]\ÈŠH™]\›ˆÈÚ[™ˆ™]H‹^ˆµå5èuåuæõçÈ5çµé5ê5æuäÈ5äuæuçÈ5è5êµåuè5æuçH5êuè5êuçµê5åH5äuæ5æuåuç5åõæuêuåuäuæuçH5çµéõåuçµæuæuçH5åuçµæuäõèˆ5åõæuéµåuè5æKˆ5çµåõæuê5åµçµæuè5åuê‹5çµåµäˆ5ä5åuåuæuê5åuêuèµåuêˆ5é5êµæuåõå5çµåuéµäµæuçH5æõçµä5åuçµêµæuçH5ê5éÈ5ç5ä5åõê5éõäuç5êˆ5çµéõåuê5åuêµä5ê5æuæˆ5äuäõæuéõåˆˆNÂˆYˆ
ÛÛOOH™Ù]ÝÙX]\—ÜÝ]\ÈŠHÂˆÛÛœÝÙX]\ˆH
ØMHš\‹œÙ][™ÜÊHOH[È›ÚYˆØMÙX]\‹\ÈHÙX]\ˆ	‰ˆ\œ˜^Kš\Ð\œ˜^JÙX]\‹™›Ü™XØ\Ý^\ÊH	‰ˆÙX]\‹™›Ü™XØ\Ý^\Ë›[™ÝˆÂˆ™]\›ˆÈÚ[™ˆ™]H‹^ˆ\ÈÈµéõæuæuçµêˆ5êµåõåµæuêˆ5êuçµåuê5å5äuæ5æuåuçÈ5æuêH5ç5äuäõåuéÈ5ä5êˆ5åµçµçÈ5å5äuäõæuéõå5ç5é5è5æH5êuæuçµåuêKˆˆˆµä5æuçÈ5æõê5äµèˆ5êµåõåµæuêˆ5êuçµåuê5å5åuçµä5åuçµêµêˆ5äuæ5æuåuçˆ5êµåõåµæuêˆ5çµèµäuê5ç5¯ŒL5æuçµæuçH5ä5æuè5å5åµçµæuè5åˆˆNÂˆBˆYˆ
ÛÛOOH˜ÚXÚ×Ú[™›Ü›X][Û—Ùœ™\Ú™\ÜÈŠHÂˆÛÛœÝÛÝ\˜Ù\ÈH][\Ë™›]X\


HOˆÂˆ˜\ˆØMNÂˆ™]\›ˆ\œ˜^Kš\Ð\œ˜^J
ØMHHœ^[ØY
HOH[È›ÚYˆØMKœÛÝ\˜Ù\ÊHÈœ^[ØYœÛÝ\˜Ù\Èˆ×NÂˆJK›ÝÈH]K››ÝÊ
NÂˆYˆ
\ÛÝ\˜Ù\Ë›[™Ý
H™]\›ˆÈÚ[™ˆ™]H‹^ˆµç5ä5è5êuçµê5åH5çµéõåuê5åuêˆ5åõæuéµåuè5æuæuçH5êuè5æuêµçÈ5ç5äuäõåuéÈ5ä5êˆ5ê5èµè5è5åuêµçKˆˆNÂˆÛÛœÝÝ[HHÛÝ\˜Ù\Ë™š[\Š

HOˆ^œ™]šY]™Y]S[X™\‹š\Ñš[š]J]Kœ\œÙJœ™]šY]™Y]
JH›ÝÈH]Kœ\œÙJœ™]šY]™Y]
HˆÈ
ˆMJK›[™ÝÂˆ™]\›ˆÈÚ[™ˆ™]H‹^ˆÝ[HÈ5è5çµéµä5åH	ÜÝ[_H5çµéõåuê5åuêˆ5æuêuè5æuçH5ä5åH5åõèuê5æH5åµçµçÈ5äuäõæuéõåÈ5æuêH5ç5äuéµèˆ5çµåõéõê5åõåuåµê˜ˆµå5çµéõåuê5åuêˆ5êuè5êuçµê5åH5è5äuäõéõåH5äuçµå5ç5æˆ5êuäuèµêˆ5å5æuçµæuçH5å5ä5åõê5åuè5æuçKˆˆNÂˆBˆYˆ
ÛÛOOH™Ù]Ù›YÚÙ]Z[ÈŠHÂˆÛÛœÝ›YÚÈH][\Ë™š[\Š

HOˆÂˆ˜\ˆØMKØ‹ØÎÂˆ™]\›ˆšÚ[™OOH˜›ÛÚÚ[™Èˆ	‰ˆõæ5æuè_›YÚZ\œÜÚK\Ý
Ýš[™Ê

ØMHHœ^[ØY
HOH[È›ÚYˆØMK\JH

ØˆHœ^[ØY
HOH[È›ÚYˆØ‹›˜[YJH

ØÈHœ^[ØY
HOH[È›ÚYˆØË››Ý\ÊHˆŠJNÂˆJNÂˆ™]\›ˆÈÚ[™ˆ™]H‹^ˆ›YÚË›[™ÝÈ5æ5æuèuåuêˆ5êuè5êuçµê5åNˆ	Ù›YÚË›X\


HOˆX™[Š
H
Èˆ8 %5æuåuçHˆ
È
^SÙŠ
HÈŠJKš›Ú[Šˆ0­ÈŠ_K˜ˆµç5ä5è5êuçµê5åH5é5ê5æ5æH5æ5æuèuå5äuæ5æuåuçˆˆNÂˆBˆYˆ
ÛÛOOH™Ù]Ý˜[œÙ™\—Ù^\ÈŠHÂˆÛÛœÝ^\ÈH][\Ë™š[\Š

HOˆÂˆ˜\ˆØMKØ‹ØÎÂˆ™]\›ˆšÚ[™OOH˜›ÛÚÚ[™Èˆ	‰ˆõæ5æuè_›YÚZ\œÜ5çµèµäuêÚK\Ý
Ýš[™Ê

ØMHHœ^[ØY
HOH[È›ÚYˆØMK\JH

ØˆHœ^[ØY
HOH[È›ÚYˆØ‹›˜[YJH

ØÈHœ^[ØY
HOH[È›ÚYˆØË››Ý\ÊHˆŠJNÂˆJK›X\
^SÙŠK™š[\Š[X™\‹š\Ò[YÙ\ŠNÂˆ™]\›ˆÈÚ[™ˆ™]H‹^ˆ^\Ë›[™ÝÈ5æuçµæH5çµèµäuê5ä5åuåuæuê5æH5êuè5çµéµä5åNˆ	ÖË‹‹›™]ÈÙ]
^\ÊWKœÛÜ

KŠHOˆHHŠKš›Ú[Š‹Š_K˜ˆµç5ä5åµåuå5åH5æuçµæH5çµèµäuê5ä5åuåuæuê5æH5äuê5êuåuçµåuê‹ˆˆNÂˆBˆYˆ
ÛÛOOH˜[Y]WÙ›YÚÜÙ\]Y[˜ÙHŠHÂˆÛÛœÝ^\ÈH][\Ë™š[\Š

HOˆÂˆ˜\ˆØMKØ‹ØÎÂˆ™]\›ˆšÚ[™OOH˜›ÛÚÚ[™Èˆ	‰ˆõæ5æuè_›YÚZ\œÜÚK\Ý
Ýš[™Ê

ØMHHœ^[ØY
HOH[È›ÚYˆØMK\JH

ØˆHœ^[ØY
HOH[È›ÚYˆØ‹›˜[YJH

ØÈHœ^[ØY
HOH[È›ÚYˆØË››Ý\ÊHˆŠJNÂˆJK›X\
^SÙŠK™š[\Š[X™\‹š\Ò[YÙ\ŠKœÛÜ

KŠHOˆHHŠNÂˆÛÛœÝÛÛœÙXÝ]]™HH^\Ë™š[\Š
^KJHOˆH	‰ˆ^HOOH^\ÖÚHHWH
ÈJNÂˆ™]\›ˆÈÚ[™ˆ™]H‹^ˆÛÛœÙXÝ]]™K›[™ÝÈ5è5äõê5êuêˆ5äuäõæuéõåˆ5è5çµéµä5åH5æuçµæH5æ5æuèuå5ê5éµåué5æuçH	ÖË‹‹›™]ÈÙ]
ÛÛœÙXÝ]]™JWKš›Ú[Š‹Š_K˜ˆµç5ä5è5çµéµä5å5æ5æuèuå5äuêuç5åuêuå5æuçµæuçH5ê5éµåué5æuçH5ç5é5æH5å5ê5êuåuçµåuêˆ5å5çµéõåuçµæuåuê‹ˆˆNÂˆBˆYˆ
ÛÛOOH˜[Y]WÜÝÜÜÙ\]Y[˜ÙHŠHÂˆÛÛœÝÝÜÈH][\Ë™š[\Š

HOˆšÚ[™OOHœÝÜŠKZ\ÜÚ[™ÈHÝÜË™š[\Š

HOˆ[X™[Š
HS[X™\‹š\Ò[YÙ\Š^SÙŠ
JJNÂˆ™]\›ˆÈÚ[™ˆ™]H‹^ˆZ\ÜÚ[™Ë›[™ÝÈ5è5çµéµä5åH	ÛZ\ÜÚ[™Ë›[™ÝH5èµéµæuê5åuêˆ5êuåõèuê5æuçH5äuå5çÈ5æuåuçH5ä5åH5êuçK˜ˆ5ê5éµèÈ	ÜÝÜË›[™ÝH5å5èµéµæuê5åuêˆ5æõåuç5ç5æuåuçH5åuêuçH5äuæõç5ê5êuåuçµå˜NÂˆBˆYˆ
ÛÛOOH˜Ø[Ý[]WÝš\Ù\Ý[X]HŠHÂˆÛÛœÝÛ›ÝÛˆH][\Ëœ™YXÙJ
Ý[K
HOˆÂˆ˜\ˆØMKØ‹ØËÙÙKÙŽÂˆ™]\›ˆÝ[H
È[X™\Š
ÙˆH
ÙHH
ØÈH
ØMHHœ^[ØY
HOH[È›ÚYˆØMKœšXÙJHOH[ÈØÈˆ
ØˆHœ^[ØY
HOH[È›ÚYˆØ‹˜ÛÜÝ
HOH[ÈÙHˆ
ÙHœ^[ØY
HOH[È›ÚYˆÙœZY
HOH[ÈÙˆˆ
NÂˆK
NÂˆ™]\›ˆÈÚ[™ˆ™]H‹^ˆ5èuæõåuçH5æuäõåuèˆ5çµêµåuæˆ5å5ê5êuåuçµåuêŽˆ	ÚÛ›ÝÛ‹Ñš^Y
Š_H8 ª‹ˆ5åµåH5ä5æuè5å5èµç5åuêˆ5çµç5ä5åÈ5çµåõæuê5æuçH5åõèuê5æuçH5ç5ä5å5åuçµéµä5åK˜NÂˆBˆ™]\›ˆ[ÂˆB‚ˆËÈÜ˜ËÝš\\™XY[™\ÜË]ZKšœÂˆ˜\ˆ\ØÌŒÈH

HOˆÝš[™ÊOH[ÈˆˆŠKœ™\XÙJÖÉˆ‰×KÙË
ÊHOˆ
È‰ˆŽˆ‰˜[\È‹Žˆ‰›È‹ˆŽˆ‰™ÝÈ‹	È‰Îˆ‰œ][ÝÈ‹‰ÈŽˆ‰ˆÌÎNÈˆJVØ×JNÂˆ˜\ˆX™[ÌÈHÈ[šÛ›ÝÛŽˆµåõèuê5çµæuäõèˆ‹Ü[Žˆµç5äuæuéµåuèˆ‹Ý™\™YNˆµäuä5æuåõåuê‹ÛÛ\]Yˆµå5åuêuç5çHˆNÂˆ˜\ˆÚ[™ÈHÈ\ÚÎˆµçµêuæuçµåuêˆ‹ÙX\ŽˆµéµæuåuäÈ‹›ÛÚÚ[™Îˆµå5åµçµè5åuêˆ‹›Ý]Nˆµêµåuæõè5æuêˆ5æuåuçµæuêˆ‹ÙÚ[™ÎˆµæõæuèuåuæH5ç5æuè5åˆNÂˆ[˜Ý[Ûˆ[Ý[š\™XY[™\ÜÊÈ›ÛÝX[ÙËš\ˆš\‹Ý]HHßK›ÝËÛ‘Y]H

HOˆÂˆKÛ”Ø]™T™\]Z\™[Y[ÈH

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆJKÛ”™Yœ™\ÚH

HOˆÂˆKÛ”Ø]™YH

HOˆÂˆHJHÂˆ][]™HHYKY][™ÈH˜[ÙK™\ÜHØ[Ý[]T™XY[™\ÜÊÈš\ˆš\‹][\Îˆš\‹š][\Ë›ÝÈJNÂˆÛÛœÝØÈH›ÛÝ›ÝÛ™\‘ØÝ[Y[Âˆ[˜Ý[Ûˆ˜]Ê
HÂˆÛÛœÝÈH™\Üœ™\]Z\™[Y[ÎÂˆ›ÛÝš[›™\’SH	Ï]ˆÛ\ÜÏHœ›ÝÈµäõåuåÈ5çµåuæõè5åuêˆ5ç5æ5æuåuçÚ]Ûˆ\OH˜]Ûˆˆ]K\™XY[™\ÜËXÛÛ™šYÏµå5äµäõê5êˆ5äõê5æuêuåuêØ]Û]Ûˆ\OH˜]Ûˆˆ]K\™XY[™\ÜË\™Yœ™\Úµê5èµè5åuçÈ5çµå5êuê5êØ]ÛÙ]‰È
È
ËÝ[ÈË˜ÛÛ\]Y
Èˆ5çµêµåuæˆˆ
ÈËÝ[
Èˆ5äõê5æuêuåuêˆ5êuå5äµäõê5êˆ5å5åuêuç5çµåHˆˆµæ5ê5çH5å5åuäµäõê5çµå5è5äõê5êH5ç5æ5æuåuçˆ5å5ê5êuåuçµåuêˆ5å5éõæuæuçµåuêˆ5çµåuéµäµåuêˆ5äuè5é5ê5äËˆŠH
È
Ë™^ÛYYÈˆ0­Èˆ
ÈË™^ÛYY
Èˆ5ç5ä5ê5ç5åuåuè5æ5æuåuêˆˆˆˆŠH
È	ÏÜÛ\ÜÏH›]]Yµç5é5æH5å5è5êµåuè5æuçH5å5êuçµåuê5æuçH5äuç5äuäÎÈ5ä5æuè5åH5ä5æuêuåuê5èué5éÈ5ä5åH5äuäõæuéõêˆ5äuæ5æuåõåuê‹ˆ5èµåuäõæõçÎˆ	È
È\ØÌŒÊ™]È]J™\Ü˜\ÓÙŠKÓØØ[TÝš[™ÊšKRS‹È[YV›Û™Nˆ™\Ü[YV›Û™HJJH
Èˆ0­Èˆ
È\ØÌŒÊ™\Ü[YV›Û™JH
È
™\Ü[YV›Û™P\ÜÝ[YYÈˆ8 %5äuê5æuê5êˆ5çµåõäõç5ç5åõæuêuåuäH5äuç5äuäË5è5æuêµçÈ5ç5êuè5åuêˆ5äuå5äµäõê5åuêˆ5å5äõåuåÈˆˆˆŠH
È	ÏÜX™[µå5éµäÙ[XÝ]K\™XY[™\ÜË\ØÛÜOÜ[Ûˆ˜[YOHš][\Èµê5êuåuçµåuêˆ5å5æ5æuåuçÛÜ[ÛÜ[Ûˆ˜[YOHœ™\]Z\™[Y[Èµå5äõê5æuêuåuêˆ5êuå5äµäõê5êÛÜ[ÛÜÙ[XÝÛX™[]ˆ]K\™XY[™\ÜË[\ÝÏÙ]‰ÎÂˆÛÛœÝÙ[XÝÜˆH›ÛÝœ]Y\žTÙ[XÝÜŠ–Ù]K\™XY[™\ÜË\ØÛÜWHŠNÂˆÙ[XÝÜ‹˜[YHHÝ]KœØÛÜHš][\ÈŽÂˆÙ[XÝÜ‹›Û˜Ú[™ÙHH

HOˆÂˆÝ]KœØÛÜHHÙ[XÝÜ‹˜[YNÂˆ\ÝÊ
NÂˆNÂˆ›ÛÝœ]Y\žTÙ[XÝÜŠ–Ù]K\™XY[™\ÜËXÛÛ™šY×HŠK›Û˜ÛXÚÈHÛÛ™šYÝ\™NÂˆ›ÛÝœ]Y\žTÙ[XÝÜŠ–Ù]K\™XY[™\ÜË\™Yœ™\ÚHŠK›Û˜ÛXÚÈHÛ”™Yœ™\ÚÂˆ\ÝÊ
NÂˆBˆ[˜Ý[Ûˆ\ÝÊ
HÂˆÛÛœÝÛ\ˆH›ÛÝœ]Y\žTÙ[XÝÜŠ–Ù]K\™XY[™\ÜË[\Ý×HŠNÂˆÛ\‹š[›™\’SHˆŽÂˆÛÛœÝ›ÝÜÈH
Ý]KœØÛÜHOOHœ™\]Z\™[Y[ÈˆÈ™\Üœ™\]Z\™[Y[›ÝÜÈˆ™\Üš][\ÊK™š[\Š

HOˆœÝ]\ÈOOH™^ÛYYŠNÂˆÛÛœÝÜ›Ý\ÈHØš™XÝ™[šY\ÊX™[ÌÊK›X\

ÚYX™[JHOˆÂˆ˜\ˆØMÂˆÛÛœÝÙXÝ[ÛˆHØË˜Ü™X]Q[[Y[
œÙXÝ[ÛˆŠK\ÝH›ÝÜË™š[\Š

HOˆœÝ]\ÈOOHY
NÂˆÙXÝ[Û‹š[›™\’SHÏˆˆ
È\ØÌŒÊX™[
H
ÈÚÏˆˆ
È
[\Ý›[™ÝÈµä5æuçÈ5é5ê5æuæ5æuçH5ç5å5éµäµåÜˆˆˆ\Ý›X\


HOˆ	Ï\XÛHÝ[OHœY[™ÎŽØ›Ü™\‹X›ÝÛNŒ\ÛÛY˜\ŠKX›Ü™\‹ÍMLÊHÝ›Û™Ï‰È
È\ØÌŒÊ]JH
È	ÏÜÝ›Û™ÏÝ[OH›X\™Ú[Ž‰È
Èœ™X\ÛÛœË›X\
\ØÌŒÊKš›Ú[Šˆ0­ÈŠH
ÈÜˆˆ
È
Ý]KœØÛÜHOOHœ™\]Z\™[Y[ÈˆÈ	Ï]Ûˆ\OH˜]Ûˆˆ]K\™XY[™\ÜËYY]H‰È
È\ØÌŒÊšY
H
È	Èµé5êµåÈ5ê5êuåuçµåØ]Û‰Èˆš][RYË™š[\Š
YŠHOˆš\‹š][\ËœÛÛYJ
][JHOˆ][KšYOOHYŠJK›X\

YŠHOˆÂˆ˜\ˆØMKØ‹ØËÙÂˆ™]\›ˆ	Ï]Ûˆ\OH˜]Ûˆˆ]K\™XY[™\ÜËYY]H‰È
È\ØÌŒÊYŠH
È	È‰È
È\ØÌŒÊ

ØˆH
ØMHHš\‹š][\Ë™š[™

][JHOˆ][KšYOOHYŠJHOH[È›ÚYˆØMKœ^[ØY
HOH[È›ÚYˆØ‹]JH

ÙH
ØÈHš\‹š][\Ë™š[™

][JHOˆ][KšYOOHYŠJHOH[È›ÚYˆØËœ^[ØY
HOH[È›ÚYˆÙ›˜[YJHµé5êµåÈ5ê5êuåuçµåŠH
ÈØ]ÛˆŽÂˆJKš›Ú[ŠˆŠJH
ÈØ\XÛOˆŠKš›Ú[ŠˆŠJNÂˆÛÛœÝÚ[™[ˆHË‹‹œÙXÝ[Û‹œ]Y\žTÙ[XÝÜ[
˜\XÛHŠWNÂˆYˆ
Ú[™[‹›[™Ý
H[Ý[][TYÙ\ÊÈÛÛZ[™\ŽˆÙXÝ[Û‹][\ÎˆÚ[™[‹Ý]NˆÝ]V×ØMHœYÙKHˆ
ÈYH
Ý]V×ØMHHßJHJNÂˆÛ\‹˜\[™
ÙXÝ[ÛŠNÂˆ™]\›ˆÈYX™[ˆX™[
Èˆ
ˆ
È\Ý›[™Ý
ÈŠH‹›Ù\ÎˆÜÙXÝ[Û—HNÂˆJNÂˆ[Ý[ÙXÝ[Û•XœÊÈ›ÛÝˆÛ\‹Ü›Ý\ËÝ]NˆÝ]KXœÈ
Ý]KXœÈHßJK™Yš^ˆœ™XY[™\ÜÈ‹X™[ˆµçµéµäuæH5çµåuæõè5åuêˆˆJNÂˆÛ\‹œ]Y\žTÙ[XÝÜ[
–Ù]K\™XY[™\ÜËYY]HŠK™›Ü‘XXÚ

ŠHOˆ‹›Û˜ÛXÚÈH

HOˆÂˆÛÛœÝ][HHš\‹š][\Ë™š[™


HOˆšYOOH‹™]\Ù]œ™XY[™\ÜÑY]
NÂˆYˆ
[]™H	‰ˆ][JHÛ‘Y]
][JNÂˆJNÂˆBˆ[˜Ý[ÛˆÛÛ™šYÝ\™J
HÂˆ˜\ˆØMØŽÂˆYˆ
X[]™HYX[ÙÊH™]\›ŽÂˆY][™ÈHYNÂˆ]˜YHÝXÝ\™YÛÛ™Jš\‹œÙ][™ÜËœ™XY[™\ÜÔ™\]Z\™[Y[È×JKÚÜÙ[ˆH
ØˆH
ØMH˜YÌJHOH[È›ÚYˆØMšY
HOH[ÈØˆˆ[[™[™ÈH˜[ÙNÂˆÛÛœÝš[Ü‘›ØÝ\ÈHØË˜XÝ]™Q[[Y[ÂˆÛÛœÝÝÛ™YˆH

HOˆ[]™H	‰ˆY][™È	‰ˆX[ÙË›Ü[ˆ	‰ˆX[ÙËœ]Y\žTÙ[XÝÜŠ–Ù]K\™XY[™\ÜËYY]Ü—HŠHOOH›Ü›NÂˆX[ÙËš[›™\’SH	Ï›Ü›H]K\™XY[™\ÜËYY]Üµäõê5æuêuåuêˆ5å5çµåuæõè5åuêˆ5ç5æ5æuåuçÚµäuåõê5çµå5è5äõê5êH5åuéõêuê5ç5ê5êuåuçµåuêˆ5éõæuæuçµåuê‹ˆ5ê5êuæuçµå5åµåH5ä5æuè5å5êµäuè5æuêˆ5äuæ5æuåõåuêˆ5çµåõæuæuäuê‹ÜX™[µä5åµåuê5åµçµçÈ5ç5åõæuêuåuäH5çµåuèµäõæuçO[œ]˜[YOHœ™XY[™\ÜÕ[YV›Û™Hˆ˜[YOH‰È
È\ØÌŒÊš\‹œÙ][™ÜË[YV›Û™H\ÚXKÒ™\\Ø[[HŠH
È	ÈˆXÙZÛ\H\ÚXKÐ˜[™ÚÛÚÈˆ™\]Z\™YÛX™[]ˆÛ\ÜÏHœ›ÝÈÙ[XÝ\šXK[X™[Hµäuåõê5äõê5æuêuåˆ]K\™\]Z\™[Y[\XÚÙ\ÜÙ[XÝ]Ûˆ\OH˜]Ûˆˆ]KXY\™\]Z\™[Y[µå5åuèuèÈ5äõê5æuêuåØ]ÛÙ]]ˆ]K\™\]Z\™[Y[YšY[ÏÙ]]ˆÛ\ÜÏHœ›ÝÈ]Ûˆ\OH˜]Ûˆˆ]K\Ø]™K\™\]Z\™[Y[Ïµêuçµåuê5äõê5æuêuåuêØ]Û]Ûˆ\OH˜]Ûˆˆ]KXØ[˜Ù[\™\]Z\™[Y[Ïµäuæuæ5åuçØ]ÛÙ]]K\™XY[™\ÜËY\œ›Üˆ›ÛOHœÝ]\ÈÜÙ›Ü›O‰ÎÂˆÛÛœÝ›Ü›HHX[ÙËœ]Y\žTÙ[XÝÜŠ™›Ü›HŠKXÚÙ\ˆH›Ü›Kœ]Y\žTÙ[XÝÜŠ–Ù]K\™\]Z\™[Y[\XÚÙ\—HŠKšY[ÌÈH›Ü›Kœ]Y\žTÙ[XÝÜŠ–Ù]K\™\]Z\™[Y[YšY[×HŠK™YY˜XÚÈH›Ü›Kœ]Y\žTÙ[XÝÜŠ–Ù]K\™XY[™\ÜËY\œ›Ü—HŠNÂˆ[˜Ý[Ûˆ™XYŠ
HÂˆÛÛœÝˆH˜Y™š[™


HOˆšYOOHÚÜÙ[ŠNÂˆYˆ
\ˆYšY[ÌËœ]Y\žTÙ[XÝÜŠ–Û˜[YO\™\]Z\™[Y[]WHŠJH™]\›ŽÂˆ‹]HHšY[ÌËœ]Y\žTÙ[XÝÜŠ–Û˜[YO\™\]Z\™[Y[]WHŠK˜[YNÂˆ‹šÚ[™HšY[ÌËœ]Y\žTÙ[XÝÜŠ–Û˜[YO\™\]Z\™[Y[Ú[™HŠK˜[YNÂˆ‹˜\XØX›HHšY[ÌËœ]Y\žTÙ[XÝÜŠ–Û˜[YO\™\]Z\™[Y[\XØX›WHŠK˜ÚXÚÙYÂˆ‹š][RYÈHË‹‹™šY[ÌËœ]Y\žTÙ[XÝÜ[
–Û˜[YO[[šÒ][WN˜ÚXÚÙYŠWK›X\


HOˆ˜[YJNÂˆBˆ[˜Ý[Ûˆ™[™\‘Y]ÜŠ
HÂˆXÚÙ\‹š[›™\’SH˜Y›X\


HOˆ	ÏÜ[Ûˆ˜[YOH‰È
È\ØÌŒÊšY
H
È	È‰È
È\ØÌŒÊ]Hµäõê5æuêuå5åõäõêuåŠH
ÈÛÜ[ÛˆŠKš›Ú[ŠˆŠNÂˆXÚÙ\‹™\ØX›YHY˜Y›[™ÝÂˆXÚÙ\‹˜[YHHÚÜÙ[ˆˆŽÂˆÛÛœÝˆH˜Y™š[™


HOˆšYOOHÚÜÙ[ŠNÂˆYˆ
\ŠHÂˆšY[ÌËš[›™\’SHµä5æuçÈ5äõê5æuêuåuê‹ˆ5ä5é5êuê5ç5å5åuèuæuèÈ5äõê5æuêuå5ä5åH5ç5êuçµåuê5ê5êuæuçµå5ê5æuéõåÜˆŽÂˆ™]\›ŽÂˆBˆÛÛœÝÚ[™H‹šÚ[™OOH›ÙÚ[™ÈˆÈ˜›ÛÚÚ[™Èˆˆ‹šÚ[™][\ÈHš\‹š][\Ë™š[\Š

HOˆšÚ[™OOHÚ[™
NÂˆšY[ÌËš[›™\’SH	ÏX™[µêuçH5å5äõê5æuêuå[œ]˜[YOHœ™\]Z\™[Y[]HˆX^[™ÝHŒŒˆ˜[YOH‰È
È\ØÌŒÊ‹]JH
È	ÈÛX™[X™[µêµåõåuçOÙ[XÝ˜[YOHœ™\]Z\™[Y[Ú[™‰È
ÈØš™XÝ™[šY\ÊÚ[™ÊK›X\

ÚY˜[YWJHOˆ	ÏÜ[Ûˆ˜[YOH‰È
ÈY
È	Èˆ	È
È
YOOH‹šÚ[™ÈœÙ[XÝYˆˆˆŠH
Èˆˆ
È˜[YH
ÈÛÜ[ÛˆŠKš›Ú[ŠˆŠH
È	ÏÜÙ[XÝÛX™[X™[[œ]\OH˜ÚXÚØ›Þˆ˜[YOHœ™\]Z\™[Y[\XØX›Hˆ	È
È
‹˜\XØX›HÈ˜ÚXÚÙYˆˆˆŠH
Èˆ5ê5ç5åuåuè5æ5æuêˆ5ç5æ5æuåuçÛX™[ˆˆ
È
‹šÚ[™OOHœ›Ý]HˆÈµäuåuäõéÈ5êuæuêH5êµåõè5å5ç5æõç5æuåuçH5äuæ5æuåuçÈ5ä5æuè5åH5çµä5çµêˆ5äõê5æˆ5ä5åH5äuæ5æuåõåuê‹ÜˆˆˆšY[Ù]YÙ[™µê5êuåuçµåuêˆ5è5äõê5êuåuêˆ8 %5æõåuç5çÈ5éµê5æuæõåuêˆ5ç5å5æuåuêˆ5çµåuæõè5åuêÛYÙ[™ˆˆ
È][\Ë›X\

][JHOˆ	ÏX™[[œ]\OH˜ÚXÚØ›Þˆ˜[YOH›[šÒ][Hˆ˜[YOH‰È
È\ØÌŒÊ][KšY
H
È	Èˆ	È
È
‹š][RYËš[˜ÛY\Ê][KšY
HÈ˜ÚXÚÙYˆˆˆŠH
Èˆˆ
È\ØÌŒÊ][Kœ^[ØY]H][Kœ^[ØY›˜[YJH
ÈÛX™[ˆŠKš›Ú[ŠˆŠH
È‹š][RYË™š[\Š
Y
HOˆZ][\ËœÛÛYJ
][JHOˆ][KšYOOHY
JK›X\

Y
HOˆ	ÏX™[[œ]\OH˜ÚXÚØ›Þˆ˜[YOH›[šÒ][Hˆ˜[YOH‰È
È\ØÌŒÊY
H
È	ÈˆÚXÚÙYˆ5ê5êuåuçµå5çµéõåuêuê5êˆ5ç5ä5åµçµæuè5å8 %5å5èuê5èuæuçµåuçÈ5ê5éÈ5ä5çH5äuê5éµåuè5æˆ5ç5å5èuæuê5å5çµå5äõê5æuêuåÛX™[‰ÊKš›Ú[ŠˆŠH
È
Z][\Ë›[™ÝÈµä5æuçÈ5ê5êuåuçµåuêˆ5çµêµä5æuçµåuê‹ˆ5å5äõê5æuêuå5êµæuêuä5ê5èµçH5çµæuäõèˆ5åõèuêÜˆˆˆˆŠH
ÈÙšY[Ù]ˆŠH
È	Ï]Ûˆ\OH˜]Ûˆˆ]K\™[[Ý™K\™\]Z\™[Y[µå5èuê5çµå5äõê5æuêuåuêØ]Û‰ÎÂˆÛÛœÝ[šÓ\ÝHšY[ÌËœ]Y\žTÙ[XÝÜŠ™šY[Ù]ŠNÂˆYˆ
[šÓ\Ý
H[Ý[][TYÙ\ÊÈÛÛZ[™\Žˆ[šÓ\Ý][\ÎˆË‹‹›[šÓ\Ýœ]Y\žTÙ[XÝÜ[
ŽœØÛÜHˆX™[ŠWKYÙTÚ^™NˆØË™Y˜][šY]Ëš[›™\•ÚYŒÈˆˆËÝ]NˆßHJNÂˆšY[ÌËœ]Y\žTÙ[XÝÜŠ–Û˜[YO\™\]Z\™[Y[Ú[™HŠK›Û˜Ú[™ÙHH
JHOˆÂˆ™XYŠ
NÂˆ‹šÚ[™HK\™Ù]˜[YNÂˆ‹š][RYÈH×NÂˆ™[™\‘Y]ÜŠ
NÂˆNÂˆšY[ÌËœ]Y\žTÙ[XÝÜŠ–Ù]K\™[[Ý™K\™\]Z\™[Y[HŠK›Û˜ÛXÚÈH

HOˆÂˆ˜\ˆØMKØŒŽÂˆ˜YH˜Y™š[\Š

HOˆšYOOHÚÜÙ[ŠNÂˆÚÜÙ[ˆH
ØŒˆH
ØMHH˜YÌJHOH[È›ÚYˆØMKšY
HOH[ÈØŒˆˆ[Âˆ™[™\‘Y]ÜŠ
NÂˆNÂˆBˆXÚÙ\‹›Û˜Ú[™ÙHH

HOˆÂˆ™XYŠ
NÂˆÚÜÙ[ˆHXÚÙ\‹˜[YNÂˆ™[™\‘Y]ÜŠ
NÂˆNÂˆ›Ü›Kœ]Y\žTÙ[XÝÜŠ–Ù]KXY\™\]Z\™[Y[HŠK›Û˜ÛXÚÈH

HOˆÂˆYˆ
˜Y›[™ÝHL
HÂˆ™YY˜XÚË^ÛÛ[HµèµäÈL5äõê5æuêuåuêˆ5ç5æ5æuåuçŽÂˆ™]\›ŽÂˆBˆ™XYŠ
NÂˆÛÛœÝˆHÈYˆØË™Y˜][šY]Ë˜Üž\Ëœ˜[™ÛUURQ

K]Nˆµäõê5æuêuå5åõäõêuå‹Ú[™ˆ\ÚÈ‹\XØX›NˆYK][RYÎˆ×HNÂˆ˜Yœ\Ú
ŠNÂˆÚÜÙ[ˆH‹šYÂˆ™[™\‘Y]ÜŠ
NÂˆNÂˆÛÛœÝØ[˜Ù[H

HOˆÂˆ˜\ˆØMNÂˆYˆ
[™[™ÊH™]\›ŽÂˆY][™ÈH˜[ÙNÂˆX[ÙË˜ÛÜÙJ
NÂˆ
ØMHHš[Ü‘›ØÝ\ÈOH[È›ÚYˆš[Ü‘›ØÝ\Ë™›ØÝ\ÊHOH[È›ÚYˆØMK˜Ø[
š[Ü‘›ØÝ\ÊNÂˆNÂˆ›Ü›Kœ]Y\žTÙ[XÝÜŠ–Ù]KXØ[˜Ù[\™\]Z\™[Y[×HŠK›Û˜ÛXÚÈHØ[˜Ù[ÂˆÛÛœÝØ]™HH

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆ˜\ˆØMNÂˆYˆ
[™[™È[ÝÛ™YŠ
JH™]\›ŽÂˆžHÂˆ™XYŠ
NÂˆÛÛœÝ™\]Z\™[Y[ÈH˜[Y]T™XY[™\ÜÔ™\]Z\™[Y[Ê˜Y
K[YV›Û™HH›Ü›K™[[Y[Ëœ™XY[™\ÜÕ[YV›Û™K˜[YKš[J
NÂˆYˆ
]˜[Y[YV›Û™J[YV›Û™JJH›ÝÈ\œ›ÜŠµæuêH5ç5å5åµæuçÈ5ä5åµåuê5åµçµçÈ5êµéõæuçË5ç5äõåuäµçµå\ÚXKÐ˜[™ÚÛÚÈŠNÂˆ[™[™ÈHYNÂˆ›Ü›Kœ]Y\žTÙ[XÝÜ[
š[œ]Ù[XÝ]ÛˆŠK™›Ü‘XXÚ


HOˆ™\ØX›YHYJNÂˆZY[Û”Ø]™T™\]Z\™[Y[ÊÈ™\]Z\™[Y[Ë[YV›Û™HJNÂˆYˆ
[ÝÛ™YŠ
JH™]\›ŽÂˆY][™ÈH˜[ÙNÂˆX[ÙË˜ÛÜÙJ
NÂˆ
ØMHHš[Ü‘›ØÝ\ÈOH[È›ÚYˆš[Ü‘›ØÝ\Ë™›ØÝ\ÊHOH[È›ÚYˆØMK˜Ø[
š[Ü‘›ØÝ\ÊNÂˆÛ”Ø]™Y

NÂˆHØ]Ú
JHÂˆYˆ
ÝÛ™YŠ
JHÂˆ™YY˜XÚË^ÛÛ[HK›Y\ÜØYÙNÂˆ[™[™ÈH˜[ÙNÂˆ›Ü›Kœ]Y\žTÙ[XÝÜ[
š[œ]Ù[XÝ]ÛˆŠK™›Ü‘XXÚ


HOˆ™\ØX›YH˜[ÙJNÂˆBˆBˆJNÂˆ›Ü›K›ÛœÝX›Z]H
JHOˆÂˆKœ™]™[Y˜][

NÂˆØ]™J
NÂˆNÂˆ›Ü›Kœ]Y\žTÙ[XÝÜŠ–Ù]K\Ø]™K\™\]Z\™[Y[×HŠK›Û˜ÛXÚÈHØ]™NÂˆ™[™\‘Y]ÜŠ
NÂˆX[ÙËœÚÝÓ[Ù[

NÂˆBˆ˜]Ê
NÂˆ™]\›ˆ

HOˆÂˆ[]™HH˜[ÙNÂˆYˆ
Y][™È	‰ˆ
X[ÙÈOH[È›ÚYˆX[ÙËœ]Y\žTÙ[XÝÜŠ–Ù]K\™XY[™\ÜËYY]Ü—HŠJJHÂˆY][™ÈH˜[ÙNÂˆX[ÙË˜ÛÜÙJ
NÂˆBˆNÂˆB‚ˆËÈÜ˜ËÜ[›š[™ËY\œ›ÜœËšœÂˆ˜\ˆ[›š[™Ñ˜Z[\™Q^[˜][ÛœÈHÂˆ[˜[YÚœÛÛŽˆµå5èué5éÈ5å5åõåµæuê5êµêuåuäuå5êuä5æuè5å5äuçµäuè5å5å5è5äõê5êK5åuç5æõçÈ5ç5ä5è5æuêµçÈ5ç5éõê5åuä5ä5êˆ5å5êµæõè5åuçËˆ5çµåuçµç5éH5ç5é5è5åuêˆ5ç5äuäõæuéõå5ç5é5è5æH5è5æuèuæuåuçÈ5è5åuèuèËˆ‹ˆ[˜[YÜÝ[[X\žNˆµå5èuåuæõçÈ5å5åõåµæuê5èuæuæõåuçH5åõèuê5ä5åH5ä5ê5åuæˆ5çµå5çµåuêµêˆ5çµåuçµç5éH5ç5äuéõêH5êµæuéõåuçÈ5êuç5å5êµåuéµä5åˆ‹ˆ[˜[YÝØ\›š[™Îˆµå5èuåuæõçÈ5å5åõåµæuê5å5èµê5å5åõèuê5å5ä5åH5ä5ê5åuæõå5çµå5çµåuêµêˆ5çµåuçµç5éH5ç5äuéõêH5êµæuéõåuçÈ5êuç5å5êµåuéµä5åˆ‹ˆ[˜[YÝØ\›š[™ÜÎˆµê5êuæuçµêˆ5å5ä5åµå5ê5åuêˆ5åõèuê5å5ä5åH5ä5æuè5å5êµéõæuè5åˆ5çµåuçµç5éH5ç5äuéõêH5êµæuéõåuçÈ5êuç5å5êµåuéµä5åˆ‹ˆ[˜[YÜ™XÛÜ™Îˆµê5êuæuçµêˆ5é5ê5æuæ5æH5å5êµæõè5åuçÈ5åõèuê5å5ä5åH5åõåuê5äµêˆ5çµå5äµåuäõç5å5çµåuêµêˆ5çµåuçµç5éH5ç5äuäõåuéÈ5ä5êˆ5å5æuéõèÈ5å5êµæõè5åuçÈ5äuêuä5ç5åuçËˆ‹ˆ[˜[YÜ™XÛÜ™ÚÚ[™ˆµå5èuåuæõçÈ5å5éµæuèˆ5èuåuäˆ5é5ê5æuæ5êuå5çµèµê5æõêˆ5ä5æuè5å5êµåuçµæõêˆ5äuåKˆ5çµåuçµç5éH5ç5é5è5åuêˆ5ç5äuäõæuéõåˆ‹ˆ[œØY™WØ›ÛÚÚ[™×ÜÝ]Nˆµå5èuåuæõçÈ5èuæuçµçÈ5å5éµèµå5æõå5åµçµè5å5ä5åH5æõêµêuç5åuçH5êuäuåuéµèµåK5ç5ç5ä5ä5æuêuåuê5èué5éËˆ5å5êµåuéµä5å5è5äõåõêµåÈ5çµåuçµç5éH5ç5äuäõåuéÈ5æuäõè5æuêˆ5ä5éµç5èué5éÈ5å5è5èuæuèµåuê‹ˆ‹ˆ[œØY™WÝÛÜšÙ›Ý×ÜÝ]Nˆµå5èuåuæõçÈ5èuæuçµçÈ5é5èµåuç5å5æõå5åuêuç5çµå5ç5ç5ä5ê5ä5æuæuêˆ5äuæuéµåuè‹ˆ5å5êµåuéµä5å5è5äõåõêµåÈ5çµåuçµç5éH5ç5äuäõåuéÈ5ä5êˆ5å5é5èµåuç5å5æuäõè5æuê‹ˆ‹ˆ[˜[YÝ\›ˆµä5åõäÈ5å5éõæuêuåuê5æuçH5äuêµåuéµä5å5ä5æuè5åH5êµéõæuçËˆ5çµåuçµç5éH5ç5äuäõåuéÈ5ä5êˆ5çµéõåuê5åuêˆ5å5êµæõè5åuçËˆ‹ˆ[œØY™WÝ\›ˆµä5åõäÈ5å5éõæuêuåuê5æuçH5ä5æuè5åH5æõêµåuäuêˆ5éµæuäuåuê5æuêˆ5çµä5åuäuæ5åõêˆ5å5çµåuêµê5êˆ5ç5çµåõéõêˆ5çµåuçµç5éH5ç5äuäõåuéÈ5ä5êˆ5çµéõåuê5åuêˆ5å5êµæõè5åuçËˆ‹ˆÛÝ\˜ÙWÛZ\ÛX]Úˆµçµéõåuê5êuå5èuåuæõçÈ5éµæuæuçÈ5ä5æuè5åH5êµåuä5çH5ç5çµéõåuê5åuêˆ5êuå5êµéõäuç5åH5äuçµåõéõê5ä5åH5êuå5çµåõæuê5å5åuéµäˆ5æõçµä5åuçµêˆ5ç5ç5ä5ê5ä5æuåˆ5çµåuçµç5éH5ç5äuäõåuéÈ5ä5êˆ5å5çµéõåuê5åuêˆ5åuå5çµåõæuê5æuçH5æuäõè5æuê‹ˆ‹ˆ[˜[YÙ]\Îˆµå5êµä5ê5æuæõæuçH5ä5åH5çµèué5ê5å5æuçµæuçH5ä5æuè5çH5êµåuä5çµæuçH5ç5ä5æuêuåuê5ä5åH5êuåõèuê5æuçH5æuçµæuçH5äuçµèuç5åuçˆ5çµåuçµç5éH5ç5äuäõåuéÈ5ä5êˆ5å5êuä5ç5åuçÈ5åuç5äuéõêH5êµæõè5åuçÈ5êuçµæõèuå5ä5êˆ5æõç5å5æuçµæuçH5äuæ5åuåuåÈ5êuä5åuêuêˆ‹ˆ[˜[YØYÙ]ˆµè5êµåuçÈ5æõèué5æH5äuêµåuéµä5å5ä5æuè5åH5êµéõæuçÈ5ä5åH5ä5æuè5åH5êµåuä5çH5ç5êµéõéµæuäKˆ5çµåuçµç5éH5ç5äuäõåuéÈ5ä5êˆ5èuæõåuçµæH5å5å5éµèµåuêˆ5åuå5å5åuéµä5åuêˆ5å5éõæuæuçµåuêˆ5ç5é5è5æH5è5æuèuæuåuçÈ5è5åuèuèËˆ‹ˆ[˜[YÜ™XÛÜ™ˆµä5åõäÈ5çµé5ê5æuæ5æH5å5êµæõè5åuçÈ5çµæõæuç5è5êµåuçÈ5åõèuê5ä5åH5ç5ä5êµéõæuçËˆ5çµåuçµç5éH5ç5é5è5åuêˆ5ç5äuäõæuéõå5êuç5å5êµåuéµä5åˆ‹ˆ[˜[YÜ[Žˆµå5êµåuéµä5å5ç5ä5èµåuçµäõêˆ5äuçµäuè5å5å5êµæõè5åuçÈ5å5è5äõê5êKˆ5å5èuæuäuå5å5çµäõåuæuéõêˆ5ä5æuè5å5åµçµæuè5åˆ5çµåuçµç5éH5ç5é5è5åuêˆ5ç5äuäõæuéõå5èµçH5çµåuèµäÈ5å5å5ê5éµåˆ‚ˆNÂˆ[˜Ý[Ûˆ[›š[™Ô[“Y\ÜØYÙJ[ŠHÂˆÛÛœÝY\ÜØYÙHHÝš[™Ê[‹›Y\ÜØYÙHˆŠNÂˆÛÛœÝYØXÞHHY\ÜØYÙK›X]Ú
×µå5êµæõè5åuçÈ5ç5ä5èµäuê5ä5æuçµåuêˆÊØK^—×JÊWWˆ5ç5ä5êuåuè5åH5è5êµåuè5æH5å5æ5æuåuç‰ÊNÂˆYˆ
[YØXÞJH™]\›ˆY\ÜØYÙNÂˆÛÛœÝ^[˜][ÛˆH[›š[™Ñ˜Z[\™Q^[˜][ÛœÖÛYØXÞVÌWWH[›š[™Ñ˜Z[\™Q^[˜][ÛœËš[˜[YÜ[ŽÂˆ™]\›ˆ^[˜][Ûˆ
Èˆ5äuå5ê5éµå5æuêuè5å5åµåH5ç5ä5è5êuçµê5å5é5æuê5åuæ5êuçµä5é5êuê5ç5åµå5åuêˆ5ä5êˆ5å5èuæuäuå5å5çµäõåuæuéõê‹ˆ5ç5ä5êuåuè5åH5è5êµåuè5æH5å5æ5æuåuçˆÈˆ
ÈYØXÞVÌWH
È—HŽÂˆB‚ˆËÈÜ˜ËÜ[›š[™Ë]ZKšœÂˆ˜\ˆ\ØÌH
ŠHOˆÝš[™ÊˆOH[ÈˆˆˆŠKœ™\XÙJÖÉˆ‰×KÙË
ÊHOˆ
È‰ˆŽˆ‰˜[\È‹Žˆ‰›È‹ˆŽˆ‰™ÝÈ‹	È‰Îˆ‰œ][ÝÈ‹‰ÈŽˆ‰ˆÌÎNÈˆJVØ×JNÂˆ˜\ˆ[ÈH
ŠHOˆ™]È[“[X™\‘›Ü›X]
šKRS‹ÈÝ[Nˆ˜Ý\œ™[˜ÞH‹Ý\œ™[˜ÞNˆ’SÈ‹X^[][Qœ˜XÝ[Û‘YÚ]ÎˆˆJK™›Ü›X]
ŠNÂˆ˜\ˆ˜[œÜÜÌˆHÈ[ÝÜ˜ÞXÛNˆµä5åué5è5åuèˆ‹Ø\Žˆµê5æõäH‹X›XÎˆµêµåõäuåuê5å5éµæuäuåuê5æuêˆ‹Z^Yˆµêuæuç5åuäH5ä5çµéµèµæuçHˆNÂˆ[˜Ý[ÛˆÜ[”[›š[™ÊÈX[ÙË\Ý[˜][Û‹\KÛ˜XÚÈH

HOˆX[ÙË˜ÛÜÙJ
KÛ”X›\ÚYH

HOˆÂˆK™]šY]ÓÛ›HH˜[ÙKÛ‘Y]H[JHÂˆÛÛœÝØÈHX[ÙË›ÝÛ™\‘ØÝ[Y[Ú[ˆHØË™Y˜][šY]ÎÂˆ][]™HHYK[™[™ÈH˜[ÙK™XYHH˜[ÙK[Y\ˆH[Ý™\šY]ÈH[ÝYÙHHš[œ]‹Ø]™Y˜YH[›š[™Ñ˜Y
\Ý[˜][Û‹œÙ][™ÜÊK[œ]H×ÜÜ™XY˜[Y\ÊßKØ]™Y˜Yš[œ]
NÂˆ]Ù^HHÛØ˜[\Ë˜Üž\Ëœ˜[™ÛUURQ

K™Y™\™[˜ÙPÚÚXÙ\ÈHØ]™Y˜Y˜ÚÚXÙ\Ë™Y™\™[˜ÙQœ™YU^HØ]™Y˜Y™œ™YU^˜YÝXÚYH˜[ÙK\ÝÞ[˜ÈH[ÛÙ[™\˜][ÛˆH™[™\™Y[ˆHˆ‹XÚØYÙSÜ[ÛœÈH[\]R[œÝXÝ[ÛœÈHˆŽÂˆÛÛœÝÛØÚÕ[Y\ˆHÚ[‹œÙ][\˜[


HOˆÂˆ˜\ˆØMÂˆYˆ
[]™H	‰ˆÝYÙHOOH›[Ûš]Üˆˆ	‰ˆÈœ]Y]YY‹œ™\ÙX\˜Ú[™È—Kš[˜ÛY\Ê
ØMHÝ™\šY]ÈOH[È›ÚYˆÝ™\šY]Ëœ[ŠHOH[È›ÚYˆØMœÝ]JJH\]T[ÛØÚÜÊX[ÙËÝ™\šY]Ëœ[‹\ÝÞ[˜ÊNÂˆKYLÊNÂˆ[˜Ý[ÛˆÛX[\

HÂˆ[]™HH˜[ÙNÂˆÚ[‹˜ÛX\•[Y[Ý]
[Y\ŠNÂˆÚ[‹˜ÛX\’[\˜[
ÛØÚÕ[Y\ŠNÂˆÛÙ[™\˜][ÛŠÊÎÂˆBˆX[ÙË˜Y]™[\Ý[™\Š˜ÛÜÙH‹ÛX[\ÈÛ˜ÙNˆYHJNÂˆ[˜Ý[Ûˆ]Y\žJÊHÂˆ™]\›ˆX[ÙËœ]Y\žTÙ[XÝÜŠÊNÂˆBˆ[˜Ý[Ûˆ™YY˜XÚÊY\ÜØYÙJHÂˆYˆ
[]™H	‰ˆ]Y\žJ–Ù]K\[›™\‹\Ý]\×HŠJH]Y\žJ–Ù]K\[›™\‹\Ý]\×HŠK^ÛÛ[HY\ÜØYÙNÂˆBˆ[˜Ý[ÛˆÚ[
›ÙJHÂˆYˆ
X[]™JH™]\›ŽÂˆX[ÙËš[›™\’SH	Ï]ˆÛ\ÜÏHœ[›™\ˆ]ˆÛ\ÜÏHœ›ÝÈ[›™\‹ZXY[™È]Ü[ˆÛ\ÜÏHœ[›™\‹Y^YXœ›ÝÈµêµæõè5åuçÈ5äuèµåµê5êˆ5èuåuæõçÏÜÜ[‰È
È\ØÌ
\Ý[˜][Û‹™\Ý[˜][Û—Û˜[YJH
È	ÏÚÙ]]Ûˆ\OH˜]Ûˆˆ]K\[›™\‹X˜XÚÏµåõåµê5å5ç5èµê5æuæõêˆ5æuèµäÏØ]ÛÙ]]ˆ]KXYÙ[XYÙ]Û\ÜÏHœ[›™\‹XYÙ]Ù]]K\[›™\‹\Ý]\È›ÛOHœÝ]\Èˆ\šXK[]™OHœÛ]HÜ]ˆ]K\[‹\™\Ý[YOÙ]]ˆ]K\XÚØYÙKXÛÛ›ÛÏÙ]‰È
È›ÙH
ÈÙ]ˆŽÂˆ]Y\žJ–Ù]K\[›™\‹X˜XÚ×HŠK›Û˜ÛXÚÈH

HOˆÂˆÛX[\

NÂˆÛ˜XÚÊ
NÂˆNÂˆYÙ]

NÂˆXÚØYÙPÛÛ›ÛÊ
NÂˆBˆ[˜Ý[Ûˆ[ÝÙY
XÚÙ]
HÂˆ™]\›ˆ™XYH	‰ˆ[›š[™ÐØ\Xš[]JXÚØYÙSÜ[ÛœËXÚÙ]
NÂˆBˆ[˜Ý[ÛˆXÚØYÙPÛÛ›ÛÊ
HÂˆÛÛœÝ[H]Y\žJ–Ù]K\XÚØYÙKXÛÛ›Û×HŠNÂˆYˆ
Y[
H™]\›ŽÂˆ[š[›™\’SHµçµæõèuåuêˆ5å5åõäuæuç5åˆˆ
È

XÚØYÙSÜ[ÛœÈOH[È›ÚYˆXÚØYÙSÜ[ÛœËš[š\š]Y
HOOHYHÈµäµæuêuå5å5æuèuæ5åuê5æuêˆ0­È5êµéõê5åuêˆ5èµç5åuêˆ5å5èuåuæõçÈ5è5êuçµê5åuêˆˆˆ
XÚØYÙSÜ[ÛœÈOH[È›ÚYˆXÚØYÙSÜ[ÛœËœ™[XZ[š[™ÊHÈµêµæõè5åuçÈˆ
È\ØÌ
XÚØYÙSÜ[ÛœËœ™[XZ[š[™Ëš[š]X[
H
Èˆ0­È5èµäõæõåuçÈˆ
È\ØÌ
XÚØYÙSÜ[ÛœËœ™[XZ[š[™Ë\]JH
Èˆ0­È5çµåõéõêˆ
È\ØÌ
XÚØYÙSÜ[ÛœËœ™[XZ[š[™Ëœ™\ÙX\˜Ú
Hˆµç5ä5åµçµæuè5åuêŽÈ5æuêH5ç5ê5èµè5çÈ5ä5êˆ5è5êµåuè5æH5å5åõäuæuç5åŠH
È	ÏÜ]Ûˆ\OH˜]Ûˆˆ]K[™]Ë]\]H	È
È
X[ÝÙY
\]HŠHJXÚØYÙSÜ[ÛœÈOH[È›ÚYˆXÚØYÙSÜ[ÛœË˜\›Ý™Y[œ]
HÈ™\ØX›YˆˆˆŠH
ÈµèµäõæõåuçÈ5çµèuç5åuç5éõæuæuçOØ]ÛˆŽÂˆ]Y\žJ–Ù]K[™]Ë]\]WHŠK›Û˜ÛXÚÈH

HOˆÂˆYˆ
[ÝÙY
\]HŠH	‰ˆ
XÚØYÙSÜ[ÛœÈOH[È›ÚYˆXÚØYÙSÜ[ÛœË˜\›Ý™Y[œ]
JHÂˆÙ^HHÛØ˜[\Ë˜Üž\Ëœ˜[™ÛUURQ

NÂˆ\]Q›Ü›J
NÂˆBˆNÂˆBˆ[˜Ý[ÛˆYÙ]

HÂˆÛÛœÝ[H]Y\žJ–Ù]KXYÙ[XYÙ]HŠNÂˆYˆ
Y[
H™]\›ŽÂˆÛÛœÝ\ÙYH

Ý™\šY]ÈOH[È›ÚYˆÝ™\šY]ËœÜ[YÛÜ›Ý
H
H
È

Ý™\šY]ÈOH[È›ÚYˆÝ™\šY]Ëœ™\Ù\™YYÛÜ›Ý
H
NÂˆ[š[›™\’SHÝ›Û™ÏµêµéõéµæuäH5å5èuåuæõçÎˆŒ8 ªˆ5äuåõåuäõêOÜÝ›Û™ÏÜ[µè5é5ê5äÈ5çµêµéõéµæuäH5å5æ5æuåuç0­È5ç5ç5ä5åõæuåuäH5ç5éõåuåÏÜÜ[Ü[µè5åuéµçˆˆ
È[Ê

Ý™\šY]ÈOH[È›ÚYˆÝ™\šY]ËœÜ[YÛÜ›Ý
H
HÈL
H
Èˆ0­È5êuçµåuê5ç5é5èµåuç5åuêŽˆˆ
È[Ê

Ý™\šY]ÈOH[È›ÚYˆÝ™\šY]Ëœ™\Ù\™YYÛÜ›Ý
H
HÈL
H
Èˆ0­È5æuêµê5åˆˆ
È[ÊX]›X^
™LÈH\ÙY
HÈL
H
È	ÏÜÜ[›ÙÜ™\ÜÈX^HŒŒˆ˜[YOH‰È
È\ÙY
È	Èˆ\šXK[X™[Hµè5æuéµåuç5êµéõéµæuäH5å5èuåuæõçÈÜ›ÙÜ™\ÜÏ‰È
È
\ÙYHMŒÈÝ›Û™Ïµè5åuéµç5åH5ç5é5åõåuêˆ	H5çµå5êµéõéµæuäH5å5åõåuäõêuæOÜÝ›Û™ÏˆˆˆˆŠNÂˆYˆ
[Ý™\šY]ÊH[š[›™\’SHÝ›Û™ÏµêµéõéµæuäH5å5èuåuæõçÎˆŒ8 ªˆ5äuåõåuäõêOÜÝ›Û™ÏÜ[µè5é5ê5äÈ5çµêµéõéµæuäH5å5æ5æuåuç0­È5ç5ç5ä5åõæuåuäH5ç5éõåuåÏÜÜ[Ü[µæ5åuèµçÈ5æuêµê5å5çµå5êuê5ê¸ )ÜÜ[ˆŽÂˆÛÛœÝ™\Ý[YHH]Y\žJ–Ù]K\[‹\™\Ý[YWHŠNÂˆYˆ
™\Ý[YH	‰ˆ
Ý™\šY]ÈOH[È›ÚYˆÝ™\šY]Ëœ[ŠH	‰ˆÝYÙHOOH›[Ûš]ÜˆŠHÂˆ™\Ý[YKš[›™\’SH	Ï]Ûˆ\OH˜]Ûˆˆ]K]šY]Ë\[µé5êµåÈ5êµæõè5åuçÈ5ä5åõê5åuçÎˆ	È
È\ØÌ
Ý™\šY]Ëœ[‹œ]\ÙYØ]Èµå5å5ê5éµå5çµåuêuå5æuêˆˆˆ[›š[™ÔÝ]\Ù\ÖÛÝ™\šY]Ëœ[‹œÝ]WHµçµèµéõäHŠH
ÈØ]ÛˆŽÂˆ]Y\žJ–Ù]K]šY]Ë\[—HŠK›Û˜ÛXÚÈH[Ûš]ÜŽÂˆBˆBˆ[˜Ý[Ûˆ[X™\ŒŠ˜[YKX™[Z[‹X^Ý\HJHÂˆ™]\›ˆX™[ˆˆ
ÈX™[
È	Ï[œ]˜[YOH‰È
È˜[YH
È	Èˆ\OH›[X™\ˆˆZ[H‰È
ÈZ[ˆ
È	ÈˆX^H‰È
ÈX^
È	ÈˆÝ\H‰È
ÈÝ\
È	Èˆ™\]Z\™Y˜[YOH‰È
È\ØÌ
[œ]Û˜[YWJH
È	ÈÛX™[‰ÎÂˆBˆ[˜Ý[Ûˆ™XYŠ›Ü›LŠHÂˆÛÛœÝH™]ÈÚ[‹‘›Ü›Q]J›Ü›LŠK˜]ÈH×ÜÜ™XY˜[Y\ÊßK[œ]
NÂˆ›Üˆ
ÛÛœÝÈÙˆÈ™^\È‹™X\›Y\‘^\È‹›]\‘^\È‹œÚÜ\‘^\È‹›Û™Ù\‘^\È‹˜YÙ]‹˜YÙ]]šX][Û”Ý‹˜]™[\œÈ‹œ›ÛÛ\È—JH˜]ÖÚ×HH[X™\Š™Ù]
ÊJNÂˆ›Üˆ
ÛÛœÝÈÙˆÈœÝ\‹™\\\™H‹˜[œÜÜ—JH˜]ÖÚ×HH™Ù]
ÊNÂˆÛÛœÝÙ[XÝ[ÛˆH™XY™Y™\™[˜Ù\Ê
NÂˆ™Y™\™[˜ÙPÚÚXÙ\ÈHÙ[XÝ[Û‹˜ÚÚXÙ\ÎÂˆ™Y™\™[˜ÙQœ™YU^HÙ[XÝ[Û‹™œ™YU^Âˆ˜]Ëœ™Y™\™[˜Ù\ÈHÙ[XÝ[Û‹œ™Y™\™[˜Ù\ÎÂˆ˜]Ëš[˜ÛY\ÈH™Ù][
š[˜ÛY\ÈŠNÂˆ˜]Ëœ[“[Z]YÛÜ›ÝHX]œ›Ý[™
[X™\Š™Ù]
œ[“[Z]ŠJH
ˆL
NÂˆ™]\›ˆ˜[Y]T[›š[™Ò[œ]
˜]ÊNÂˆBˆ[˜Ý[Ûˆ›Ü›J
HÂˆÝYÙHHš[œ]ŽÂˆÚ[
	Ï›Ü›HYHœ[›š[™ËZ[œ]µå5æuèµäÈ5éõäuåuè‹ˆ5è5ä5êuê5æuåõäÈ5ä5êˆ5å5ä5æuç5åuéµæuçH5ç5é5è5æH5êuå5èuåuæõçÈ5çµêµåõæuçÜšY[Ù]YÙ[™µêµä5ê5æuæõæuçH5åuçµêuæÛYÙ[™]ˆÛ\ÜÏHœ[›™\‹YÜšYX™[µêµä5ê5æuæˆ5å5êµåõç5å[œ]˜[YOHœÝ\ˆ\OH™]Hˆ™\]Z\™Y˜[YOH‰È
È\ØÌ
[œ]œÝ\
H
È	ÈÛX™[‰È
È[X™\ŒŠ™^\È‹µçµèué5ê5æuçµæH5å5æ5æuåuç‹KL
H
È[X™\ŒŠ™X\›Y\‘^\È‹µä5é5êuê5ç5å5éõäõæuçH5èµäÈ5æõçµå5æuçµæuçOÈ‹Œ
H
È[X™\ŒŠ›]\‘^\È‹µä5é5êuê5ç5ä5åõê5èµäÈ5æõçµå5æuçµæuçOÈ‹Œ
H
È[X™\ŒŠœÚÜ\‘^\È‹µä5é5êuê5ç5éõéµê5èµäÈ5æõçµå5æuçµæuçOÈ‹Ì
H
È[X™\ŒŠ›Û™Ù\‘^\È‹µä5é5êuê5ç5å5ä5ê5æuæˆ5èµäÈ5æõçµå5æuçµæuçOÈ‹Ì
H
È	ÏÙ]ÙšY[Ù]šY[Ù]YÙ[™µêµéõéµæuäH5å5æ5æuåuçÛYÙ[™]ˆÛ\ÜÏHœ[›™\‹YÜšY‰È
È[X™\ŒŠ˜YÙ]‹µêµéõéµæuäH5æõåuç5ç5äuêuí5åÈ‹KYM‹JH
È[X™\ŒŠ˜YÙ]]šX][Û”Ý‹µåõê5æuäµå5çµåuêµê5êˆ5äuä5åõåuåµæuçH‹LJH
È	ÏÙ]µçµå5æõç5åuç5äuêµéõéµæuäOÏÜ]ˆÛ\ÜÏHœ[›™\‹XÚXÚÜÈ‰È
ÈØš™XÝ™[šY\Ê[˜Û\Ú[Û“X™[ÊK›X\

ÚYX™[JHOˆ	ÏX™[[œ]˜[YOHš[˜ÛY\Èˆ˜[YOH‰È
ÈY
È	Èˆ\OH˜ÚXÚØ›Þˆ	È
È
[œ]š[˜ÛY\Ëš[˜ÛY\ÊY
HÈ˜ÚXÚÙYˆˆˆŠH
Èˆˆ
ÈX™[
ÈÛX™[ˆŠKš›Ú[ŠˆŠH
È	ÏÙ]ÙšY[Ù]šY[Ù]YÙ[™µçµæ5æuæuç5æuçH5åuèuäµè5åuçÏÛYÙ[™]ˆÛ\ÜÏHœ[›™\‹YÜšY‰È
È[X™\ŒŠ˜]™[\œÈ‹µçµèué5ê5çµæ5æuæuç5æuçH‹KŒ
H
È[X™\ŒŠœ›ÛÛ\È‹µçµèué5ê5åõäõê5æuçH‹KŒ
H
È	ÏX™[µèµæuêÈ5êuäõå5æuéµæuä5å[œ]˜[YOH™\\\™HˆX^[™ÝHŒLˆ™\]Z\™Y˜[YOH‰È
È\ØÌ
[œ]™\\\™JH
È	ÈÛX™[X™[µä5çµéµèµæH5êµåõäuåuê5åÙ[XÝ˜[YOH˜[œÜÜ‰È
ÈØš™XÝ™[šY\Ê˜[œÜÜÌŠK›X\

ÚYX™[JHOˆ	ÏÜ[Ûˆ˜[YOH‰È
ÈY
È	Èˆ	È
È
[œ]˜[œÜÜOOHYÈœÙ[XÝYˆˆˆŠH
Èˆˆ
ÈX™[
ÈÛÜ[ÛˆŠKš›Ú[ŠˆŠH
ÈÜÙ[XÝÛX™[Ù]ÙšY[Ù]ˆˆ
È™[™\”™Y™\™[˜Ù\Ê™Y™\™[˜ÙPÚÚXÙ\Ë™Y™\™[˜ÙQœ™YU^\ØÌ
H
È	Ï]Z[ÈÛ\ÜÏHœ[›™\‹\ØY™]HÝ[[X\žOµäuæ5æuåõåuêˆ5åuêµéõéµæuäH5å5èuåuæõçÏÜÝ[[X\žO[Oµçµåuêµê5ç5åõéõåuê5çµæuäõèˆ5éµæuäuåuê5æH5åuç5æuéµåuê5å5éµèµåuêˆ5ç5çµèuç5åuç5å5åµçµè5åuêˆ5åuçµêuæuçµåuê‹ÛOOµä5èuåuê5ç5ê5æõåuêK5ç5êuç5çK5ç5êuç5åuåÈ5å5åuäõèµåuêˆ5ä5åH5ç5êuè5åuêˆ5ä5æuêuåuê5æH5çµäõæuè5æuåuê‹ÛOOµä5æuçÈ5çµåõæuéõå5ä5åH5å5åõç5é5å5ä5åuæ5åuçµæ5æuêˆ5êuç5çµæuäõèˆ5éõæuæuçKˆ5å5åuèué5å5ç5æuèµäÈ5éõæuæuçH5äõåuê5êuêˆ5äuäõæuéõå5åuä5æuêuåuêÛOOµêuæuè5åuæH5êµä5ê5æuæˆ5çµåõåuéH5ç5æ5åuåuåÈ5êuä5åuêuê5äõåuê5êH5ä5æuêuåuê5è5åuèuèËˆ5åõæuèuæõåuçÈ5çµèµçMIH5æuåuéµäˆ5èµçH5å5èuäuê5åuçµéõåuê5åuêˆ5äuä5æuæõåuêˆ5äõåuçµåÛOOµå5çµäµäuç5å5å5åõåuäõêuæuêˆ5åõç5å5èµç5æõç5å5æuèµäõæuçH5æuåõäÎÈ5è5æuèuæuåuè5åuêˆ5åõåuåµê5æuçH5æõç5åuç5æuçKÛOOµèµéµæuê5å5çµåuè5èµêˆ5é5èµåuç5åuêˆ5åõäõêuåuêŽÈ5é5èµåuç5å5êuæõäuê5è5êuç5åõå5æuæõåuç5å5ç5éµê5åuæˆ5ä5êˆ5å5êµéõéµæuäH5êuêuåuê5æuæuçËÛOÝ[X™[µêµéõê5êˆ5èµç5åuêˆ5ç5å5ê5éµå5äuêuí5åÏ[œ]˜[YOHœ[“[Z]ˆ\OH›[X™\ˆˆZ[HŒŒHˆX^HHˆÝ\HŒŒHˆ˜[YOH‰È
È\ØÌ
[œ]œ[“[Z]YÛÜ›ÝÈL
H
È	Èˆ™\]Z\™YÛX™[Ù]Z[Ï]Ûˆ\OHœÝX›Z]ˆÛ\ÜÏHœš[X\žHµå5çµêuæˆ5ç5èuæuæõåuçH5åuç5ä5æuêuåuêØ]ÛÙ›Ü›O‰ÊNÂˆ]Y\žJˆÜ[›š[™ËZ[œ]ŠK˜Y]™[\Ý[™\Šš[œ]‹

HOˆÂˆ˜YÝXÚYHYNÂˆJNÂˆ]Y\žJˆÜ[›š[™ËZ[œ]ŠK˜Y]™[\Ý[™\Š˜Ú[™ÙH‹

HOˆÂˆ˜YÝXÚYHYNÂˆJNÂˆ]Y\žJˆÜ[›š[™ËZ[œ]ŠK›ÛœÝX›Z]H
JHOˆÂˆKœ™]™[Y˜][

NÂˆžHÂˆ[œ]H™XYŠK\™Ù]
NÂˆÝ[[X\žJ
NÂˆHØ]Ú
\œŠHÂˆ™YY˜XÚÊ\œ‹›Y\ÜØYÙJNÂˆBˆNÂˆYˆ
Ý™\šY]È	‰ˆ\™XYJH™YY˜XÚÊµå5èuåuæõçÈ5èµäõæuæuçÈ5ä5æuè5åH5çµåõåuäuê5ç5èué5éÈRKˆ5ä5é5êuê5ç5å5æõæuçÈ5ä5êˆ5è5êµåuè5æH5å5êµæõè5åuçË5ä5æˆ5å5å5ê5éµå5åõèuåuçµåˆŠNÂˆBˆ[˜Ý[ÛˆÝ[[X\žJ
HÂˆÝYÙHHœÝ[[X\žHŽÂˆÚ[
	ÏÏµäuäõæuéõêˆ5å5è5êµåuè5æuçH5ç5é5è5æH5êµåõæuç5êˆ5êµæõè5åuçÏÚÏÛ\ÜÏHœ[›™\‹\Ý[[X\žHµæuèµäÏÙ‰È
È\ØÌ
\Ý[˜][Û‹™\Ý[˜][Û—Û˜[YJH
ÈÙµæuéµæuä5å5åuçµêuæÙˆˆ
È\ØÌ
[œ]œÝ\
H
Èˆ0­Èˆ
È[œ]™^\È
Èˆ5æuçµæuçOÙµäµçµæuêuåuêˆ5äuêµä5ê5æuæÙµå5éõäõçµå5èµäÈˆ
È[œ]™X\›Y\‘^\È
Èˆ5æuçµæuçK5ä5æuåõåuê5èµäÈˆ
È[œ]›]\‘^\È
Èˆ5æuçµæuçOÙµäµçµæuêuåuêˆ5äuçµêuæÙµéõæuéµåuê5èµäÈˆ
È[œ]œÚÜ\‘^\È
Èˆ5æuçµæuçK5å5ä5ê5æõå5èµäÈˆ
È[œ]›Û™Ù\‘^\È
Èˆ5æuçµæuçOÙµêµéõéµæuäH5å5æ5æuåuçÙˆˆ
È[Ê[œ]˜YÙ]
H
Èˆ0­È5åõê5æuäµå5çµåuêµê5êˆˆ
È[œ]˜YÙ]]šX][Û”Ý
È‰OÙµæõç5åuç5äuêµéõéµæuäOÙˆˆ
È[œ]š[˜ÛY\Ë›X\

ÊHOˆ[˜Û\Ú[Û“X™[ÖÚ×JKš›Ú[Š‹ŠH
ÈÙµçµæ5æuæuç5æuçOÙˆˆ
È[œ]˜]™[\œÈ
Èˆ0­Èˆ
È[œ]œ›ÛÛ\È
Èˆ5åõäõê5æuçH0­È5æuéµæuä5å5çµ¯ˆˆ
È\ØÌ
[œ]™\\\™JH
Èˆ0­Èˆ
È\ØÌ
˜[œÜÜÌ–Ú[œ]˜[œÜÜJH
È	ÏÙµå5èµäõé5åuêˆ5åuä5æuç5åuéµæuçOÙÛ\ÜÏHœ™Y™\™[˜ÙK\Ý[[X\žH‰È
È\ØÌ
[œ]œ™Y™\™[˜Ù\Èµç5ç5ä5êµåuèué5êˆŠH
ÈÙµèµç5åuêˆ5èuåuæõçÈ5çµê5äuæuêˆ5ç5å5ê5éµåÙˆˆ
È[Ê[œ]œ[“[Z]YÛÜ›ÝÈL
H
È	È0­È5ç5ç5ä5åõæuåuäH5ç5éõåuåÏÙÙµä5æuêuåuê5å5è5êµåuè5æuçH5çµêµæuê5çµåõéõê5åuêµæõè5åuçÈ5äuç5äuäËˆ5é5ê5æ5æH5å5êµæõè5åuçÈ5å5è5åõåuéµæuçH5æuåuèµäuê5åH5ç5èué5éÈ5å5äuæuè5å5å5çµç5ä5æõåuêµæuê‹ˆ5å5åµçµè5åuêˆ5åuêµêuç5åuçµæuçH5ä5æuè5çH5çµäuåuéµèµæuçKÜ]ˆÛ\ÜÏHœ›ÝÈ]Ûˆ]KX\›Ý™KZ[œ]ÈÛ\ÜÏHœš[X\žHˆ	È
È
X[ÝÙY
š[š]X[ŠHÈ™\ØX›YˆˆˆŠH
Èµçµä5êuê5è5êµåuè5æuçH5åuå5êµåõç5êˆ5êµæõè5åuçÏØ]Û]Ûˆ]KYY]Z[œ]Ïµåõåµåuê5ç5êuä5ç5åuçÏØ]ÛÙ]ˆŠNÂˆ]Y\žJ–Ù]KYY]Z[œ]×HŠK›Û˜ÛXÚÈH

HOˆÂˆYˆ
Û‘Y]
HÂˆÛX[\

NÂˆÛ‘Y]

NÂˆH[ÙH›Ü›J
NÂˆNÂˆ]Y\žJ–Ù]KX\›Ý™KZ[œ]×HŠK›Û˜ÛXÚÈH

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆYˆ
[™[™ÈX[ÝÙY
š[š]X[ŠJH™]\›ŽÂˆ[™[™ÈHYNÂˆ]Y\žJ–Ù]KX\›Ý™KZ[œ]×HŠK™\ØX›YHYNÂˆ™YY˜XÚÊµêuåuç5åÈ5äuéõêuêˆ5êµæõè5åuçÈ5ç5êuê5ê¸ )ˆŠNÂˆžHÂˆÛÛœÝ[ˆHZY[\KœÝ\
\Ý[˜][Û‹šY\Ý[˜][Û‹™\œÚ[Û‹[œ]Ù^JNÂˆYˆ
[]™JHÂˆÝ™\šY]ÈH×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßKÝ™\šY]ÊKÈ[ˆJNÂˆ[Ûš]ÜŠ
NÂˆÛ

NÂˆBˆHØ]Ú
JHÂˆ™YY˜XÚÊK›Y\ÜØYÙJNÂˆYˆ
[]™JH]Y\žJ–Ù]KX\›Ý™KZ[œ]×HŠK™\ØX›YHX[ÝÙY
š[š]X[ŠNÂˆHš[˜[HÂˆ[™[™ÈH˜[ÙNÂˆBˆJNÂˆYˆ
\™XYJH™YY˜XÚÊµå5èuåuæõçÈ5èµäõæuæuçÈ5ä5æuè5åH5çµåõåuäuê5ç5èué5éÈRKˆ5å5å5ê5éµå5åõèuåuçµå5èµäÈ5ç5å5êuç5çµêˆ5å5åõæuäuåuê5å5çµä5åuäuæ5åËˆŠNÂˆBˆ[˜Ý[Ûˆ\]Q›Ü›J
HÂˆÝYÙHH\]HŽÂˆÚ[
	ÏÏµäuéõêuêˆ5èµäõæõåuçÈ5ç5çµèuç5åuç5çµä5åuêuêÚÏµå5èµäõæõåuçÈ5çµêuêµçµêH5äuêµä5ê5æuæõæuçK5äuêµéõéµæuäH5åuäuä5æuç5åuéµæuçH5å5çµä5åuêuê5æuçKˆ5å5èuåuæõçÈ5æuéµæuèˆ5êuæuè5åuæuæuçH5äuç5äuäÎÈ5æuêH5ç5ä5êuê5ä5åuêµçH5äuè5é5ê5äËÜ›Ü›H]K]\]KY›Ü›OX™[µçµå5ç5êuè5åuêÏ^\™XH˜[YOH\]R[œÝXÝ[ÛœÈˆ™\]Z\™YX^[™ÝHŒŒ‰È
È\ØÌ
\]R[œÝXÝ[ÛœÊH
È	ÏÝ^\™XOÛX™[]Ûˆ\OHœÝX›Z]µå5çµêuæˆ5ç5äuäõæuéõêˆ5å5äuéõêuåØ]ÛÙ›Ü›O‰ÊNÂˆ]Y\žJ–Ù]K]\]KY›Ü›WHŠK›ÛœÝX›Z]H
JHOˆÂˆKœ™]™[Y˜][

NÂˆ\]R[œÝXÝ[ÛœÈH]Y\žJ–Û˜[YO]\]R[œÝXÝ[Ûœ×HŠK˜[YKš[J
NÂˆYˆ
]\]R[œÝXÝ[ÛœÈ\]R[œÝXÝ[ÛœË›[™Ýˆ™LÊHÂˆ™YY˜XÚÊµæuêH5ç5æõêµåuäH5äuéõêuêˆ5èµäõæõåuçÈ5äuä5åuê5æˆx $ÌŒ5êµåuåuæuçHŠNÂˆ™]\›ŽÂˆBˆ\]TÝ[[X\žJ
NÂˆNÂˆBˆ[˜Ý[Ûˆ\]TÝ[[X\žJ
HÂˆÝYÙHH\]K\™]šY]ÈŽÂˆÚ[
Ïµä5æuêuåuê5çµåõéõê5ç5èµäõæõåuçÈ5çµèuç5åuçÚÏˆˆ
È\ØÌ
\]R[œÝXÝ[ÛœÊH
ÈÜµå5é5èµåuç5å5éµåuê5æõêˆ5çµæõèuêˆ5èµäõæõåuçÈ5åuæõé5åué5å5ç5êµéõê5åuêˆ5èµç5åuêˆ5å5èuåuæõçÎˆ5èµäÈH8 ªˆ5ç5å5ê5éµå5åu¯ŒŒ8 ªˆ5ç5åõåuäõêKˆ5êµêµéõäuç5å5éµèµå5äuç5äuäÈ5ç5ç5ä5å5åµçµè5å5ä5åH5êµêuç5åuçKÜ]Ûˆ]KX\›Ý™K]\]Hˆ
È
X[ÝÙY
\]HŠHJXÚØYÙSÜ[ÛœÈOH[È›ÚYˆXÚØYÙSÜ[ÛœË˜\›Ý™Y[œ]
HÈ™\ØX›YˆˆˆŠH
Èµçµä5êuê5å5êµåõç5êˆ5çµåõéõê5ç5èµäõæõåuçÏØ]Û]Ûˆ]KYY]]\]Oµèµê5æuæõêˆ5å5äuéõêuåØ]ÛˆŠNÂˆ]Y\žJ–Ù]KYY]]\]WHŠK›Û˜ÛXÚÈH\]Q›Ü›NÂˆ]Y\žJ–Ù]KX\›Ý™K]\]WHŠK›Û˜ÛXÚÈH

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆYˆ
[™[™ÈX[ÝÙY
\]HŠHJXÚØYÙSÜ[ÛœÈOH[È›ÚYˆXÚØYÙSÜ[ÛœË˜\›Ý™Y[œ]
JH™]\›ŽÂˆ[™[™ÈHYNÂˆ]Y\žJ–Ù]KX\›Ý™K]\]WHŠK™\ØX›YHYNÂˆžHÂˆÛÛœÝ[ˆHZY[\K\]TÝ\
\Ý[˜][Û‹šY\Ý[˜][Û‹™\œÚ[Û‹XÚØYÙSÜ[ÛœË˜\›Ý™Y[œ]Ù^K\]R[œÝXÝ[ÛœÊNÂˆYˆ
[]™JHÂˆÝ™\šY]ÈH×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßKÝ™\šY]ÊKÈ[ˆJNÂˆ[Ûš]ÜŠ
NÂˆÛ

NÂˆBˆHØ]Ú
\œŠHÂˆ™YY˜XÚÊ\œ‹›Y\ÜØYÙJNÂˆYˆ
[]™JH]Y\žJ–Ù]KX\›Ý™K]\]WHŠK™\ØX›YHX[ÝÙY
\]HŠNÂˆHš[˜[HÂˆ[™[™ÈH˜[ÙNÂˆBˆJNÂˆBˆ[˜Ý[Ûˆ[Ûš]ÜŠ
HÂˆ˜\ˆØMØ‹ØÎÂˆÝYÙHH›[Ûš]ÜˆŽÂˆÛÛœÝˆHÝ™\šY]ÈOH[È›ÚYˆÝ™\šY]Ëœ[ŽÂˆYˆ
\ŠHÂˆ›Ü›J
NÂˆ™]\›ŽÂˆBˆÛÛœÝHH‹˜\Y˜XÝÂˆ]›ÙHH™[™\”[”›ÙÜ™\ÜÊŠH
Èˆˆ
È\ØÌ
[›š[™Ô[“Y\ÜØYÙJŠJH
ÈÜµèµç5åuêˆ5êuè5ê5êuçµåˆˆ
È[Ê
‹œÜ[ØYÛÜ›Ý
HÈL
H
Èˆ0­È5êuçµåuêˆˆ
È[Ê
‹œ™\Ù\™YØYÛÜ›Ý
HÈL
H
ÈÜˆŽÂˆYˆ

HOH[È›ÚYˆKšÚ[™
HOOHœ[—Ý\]HŠHÂˆ›ÙH
ÏHÏµèµäõæõåuçÈ5çµåuéµèˆ5ç5çµèuç5åuç5å5éõæuæuçOÚÏˆˆ
È\ØÌ
KœÝ[[X\žJH
ÈÜ[ˆˆ
È
KØ\›š[™ÜÈ×JK›X\

ÊHOˆOˆˆ
È\ØÌ
ÊH
ÈÛOˆŠKš›Ú[ŠˆŠH
È	ÏÝ[]ˆÛ\ÜÏHœ[›™\‹\™]šY]È‰È
ÈK˜Ú[™Ù\Ë›X\


HOˆ\XÛOˆˆ
È\ØÌ
œ^[ØY›˜[YHœ^[ØY]Hœ^[ØYœXÙHšÚ[™
H
ÈÚµê5êuåuçµåˆ
È\ØÌ
šY
H
Èˆ0­È5äµê5èuåˆ
È\ØÌ
™\œÚ[ÛŠH
ÈÜˆˆ
ÈØš™XÝ™[šY\Êœ^[ØY
K›X\

ÙšY[‹˜[YL—JHOˆˆˆ
È\ØÌ
È˜[YNˆµêuçH‹]Nˆµæõåuêµê5êˆ‹XÙNˆµçµéõåuçH‹^NˆµæuåuçH‹Ú[™ˆµèuåuäˆ‹\›ˆµéõæuêuåuê‹›Ý\Îˆµå5èµê5åuêˆ‹]ˆµéõåH5ê5åuåõäH‹™ÎˆµéõåH5ä5åuê5æˆ‹Ø]YÛÜžNˆµéõæ5äµåuê5æuå‹\Nˆµèuåuäˆ‹\™XNˆµä5åµåuê‹ÝZYNˆµçµäõê5æuæˆ‹Û™Nˆµå5åuêuç5çH‹ÛÜšÙ›ÝÔÝ]\ÎˆµçµéµäHˆVÙšY[—HšY[ŠH
ÈÙˆˆ
È\ØÌ
\[Ùˆ˜[YLˆOOH›Øš™XÝˆÈ”ÓÓ‹œÝš[™ÚYžJ˜[YLŠHˆ˜[YLŠH
ÈÙˆŠKš›Ú[ŠˆŠH
ÈÙØ\XÛOˆŠKš›Ú[ŠˆŠH
ÈÙ]]Z[ÏÝ[[X\žOµçµéõåuê5åuêˆ5å5çµåõéõêÜÝ[[X\žOˆˆ
È
KœÛÝ\˜Ù\È×JK›X\

ÛÝ\˜ÙJHOˆÂˆžHÂˆ™]\›ˆ	ÏH™YH‰È
È\ØÌ
X›XÕ\›
ÛÝ\˜ÙK\›
JH
È	Èˆ\™Ù]H—Ø›[šÈˆ™[H››ÛÜ[™\ˆ›Ü™Y™\œ™\ˆ‰È
È\ØÌ
ÛÝ\˜ÙK]JH
ÈØOœˆˆ
È\ØÌ
ÛÝ\˜ÙK™^Ù\œ
H
ÈÜˆŽÂˆHØ]Ú
JHÂˆ™]\›ˆˆŽÂˆBˆJKš›Ú[ŠˆŠH
ÈÙ]Z[Ïµå5ä5æuêuåuê5æuåõæuç5ê5éÈ5ä5êˆ5å5êuæuè5åuæuæuçH5å5çµåuéµäµæuçH5èµç5å5é5ê5æuæ5æuçH5å5éõæuæuçµæuçKˆ5ä5æuçÈ5å5åµçµè5å5ä5åH5êµêuç5åuçKˆ5êuæuè5åuæH5äuè5êµåuè5æuçH5çµä5åˆ5å5å5éµèµå5æuåõæuæuäH5ê5èµè5åuçËÜˆŽÂˆYˆ
‹œÝ]HOOHœ™XYHŠH›ÙH
ÏH	Ï]Ûˆ]K\X›\Ú\[ˆÛ\ÜÏHœš[X\žHˆ	È
È
‹œ]\ÙYØ]XK˜Ú[™Ù\Ë›[™ÝÈ™\ØX›YˆˆˆŠH
Èµçµä5êuê5ä5êˆ5å5êuæuè5åuæuæuçH5å5çµåuéµäµæuçH5ç5çµèuç5åuçØ]ÛˆŽÂˆH[ÙHYˆ
JHÂˆ›ÙH
ÏHÏµå5êµæõè5åuçÈ5å5çµåuéµèÚÏˆˆ
È\ØÌ
KœÝ[[X\žJH
ÈÜˆˆ
È\ØÌ
KœÝ\
H
Èˆ0­Èˆ
ÈK™^\È
Èˆ5æuçµæuçH0­È5èµç5åuêˆ5çµêuåuèµê5êˆˆ
È[ÊK™\Ý[X]YÝ[
H
ÈÜ[ˆˆ
ÈKØ\›š[™ÜË›X\

ÊHOˆOˆˆ
È\ØÌ
ÊH
ÈÛOˆŠKš›Ú[ŠˆŠH
ÈÝ[ˆˆ
ÈK™]P[\›˜]]™\Ë›X\


HOˆ	Ï\ÚYHÛ\ÜÏHœ[›™\‹XYÙ]Ý›Û™Ïµå5éµèµêˆ5êuæuè5åuæH5êµä5ê5æuæŽˆ	È
È\ØÌ
œÝ\
H
Èˆ0­È5åõæuèuæõåuçÈ5çµêuåuèµêˆ
ÈœØ]š[™ÜÔÝ
È‰OÜÝ›Û™Ïˆˆ
È\ØÌ
œ™X\ÛÛŠH
Èˆ0­È5äõåuê5êH5ä5æuêuåuê5åuêuæuè5åuæH5è5êµåuè5æuçH5ç5é5è5æH5êµæõè5åuçÈ5çµåõäõêOÜØ\ÚYOˆŠKš›Ú[ŠˆŠH
È	Ï]ˆÛ\ÜÏHœ[›™\‹\™]šY]È‰È
ÈKœ™XÛÜ™Ë›X\


HOˆ	Ï\XÛOÜ[ˆÛ\ÜÏH˜˜YÙH‰È
È\ØÌ
ÈÝÜˆµçµèuç5åuç‹›ÛÚÚ[™Îˆµå5éµèµêˆ5å5åµçµè5å‹\ÚÎˆµçµêuæuçµå‹XÙNˆµçµéõåuçH5åuêuæuê5åuêˆ‹ÙX\ŽˆµéµæuåuäÈˆVÞšÚ[™JH
ÈÜÜ[ˆˆ
È\ØÌ
œ^[ØY›˜[YHœ^[ØY]Hœ^[ØYœXÙJH
ÈÚˆˆ
È\ØÌ
œ^[ØY››Ý\ÈˆŠH
ÈÜˆˆ
È
šÚ[™OOH˜›ÛÚÚ[™ÈˆÈÝ›Û™Ïµçµåõæuê5æõåuç5ç5çµêuåuèµêˆˆ
È[Êœ^[ØY˜ÛÜÝ
H
ÈÜÝ›Û™ÏÜµèué5éÎˆˆ
È\ØÌ
œ^[ØYœÝ\Y\ˆµæ5ê5çH5è5äuåõêŠH
ÈÜˆˆ
È
œ^[ØY\›È	ÏH™YH‰È
È\ØÌ
œ^[ØY\›
H
È	Èˆ\™Ù]H—Ø›[šÈˆ™[H››ÛÜ[™\ˆ›Ü™Y™\œ™\ˆµé5ê5æ5æH5å5å5éµèµå8¡¥ÏØO‰ÈˆˆŠHˆˆŠH
È
šÚ[™OOHœÝÜˆÈÛX[µæuåuçHˆ
Èœ^[ØY™^H
ÈÜÛX[ˆˆˆˆŠH
ÈØ\XÛOˆŠKš›Ú[ŠˆŠH
ÈÙ]]Z[ÏÝ[[X\žOµçµéõåuê5åuêˆ5å5çµåõéõêÜÝ[[X\žOˆˆ
ÈKœÛÝ\˜Ù\Ë›X\

ÊHOˆ	ÏH\™Ù]H—Ø›[šÈˆ™[H››ÛÜ[™\ˆ›Ü™Y™\œ™\ˆˆ™YH‰È
È\ØÌ
Ë\›
H
È	È‰È
È\ØÌ
Ë]JH
ÈØOœˆˆ
È\ØÌ
Ë™^Ù\œ
H
ÈœÛX[µçµåõæuê5çµêuåuèµêÈ5ä5æuè5äõæuéõéµæuå0­Èˆ
È\ØÌ
Ëœ™]šY]™Y]ˆŠH
ÈÜÛX[ÜˆŠKš›Ú[ŠˆŠH
ÈÙ]Z[ÏˆŽÂˆYˆ
‹œÝ]HOOHœ™XYHŠH›ÙH
ÏHµå5é5èµåuç5å5êµåuèuæuèÈˆ
ÈKœ™XÛÜ™Ë›[™Ý
È	È5ê5êuåuçµåuê‹ˆ5äuäõåuéÈ5æõé5æuç5åuæuåuêˆ5çµåuç5å5êµæõè5åuçÈ5å5éõæuæuçNÈ5çµæuäõèˆ5éõæuæuçH5ç5ä5æuæuçµåõéÈ5ä5åH5æuåuåõç5èËˆ5êµä5ê5æuæˆ5åuçµêuæˆ5å5æ5æuåuç5æuèµåuäõæõè5åH5ç5é5æH5å5êµæõè5åuçÈ5å5çµåuéµä‹Ü]Ûˆ]K\X›\Ú\[ˆÛ\ÜÏHœš[X\žHˆ	È
È
‹œ]\ÙYØ]È™\ØX›YˆˆˆŠH
Èµçµä5êuê5ä5êˆ5å5êµæõè5åuçÈ5å5çµåuéµäˆ5åuå5åuèué5êµåH5ç5ä5êµêØ]ÛˆŽÂˆBˆYˆ
VÈœ]Y]YY‹œ™\ÙX\˜Ú[™È‹œ™XYH—Kš[˜ÛY\Ê‹œÝ]JJH›ÙH
ÏH]Ûˆ]K[™]Ë\[µêµæõè5åuçÈ5è5åuèuèÏØ]ÛˆŽÂˆÚ[
›ÙJNÂˆ™[™\™Y[ˆH”ÓÓ‹œÝš[™ÚYžJŠNÂˆ\]T[ÛØÚÜÊX[ÙË‹\ÝÞ[˜ÊNÂˆ]Y\žJ–Ù]K\™Yœ™\Ú\[—HŠK›Û˜ÛXÚÈH
JHOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆÛÛœÝ]ÛˆHK˜Ý\œ™[\™Ù]Âˆ]Û‹™\ØX›YHYNÂˆ]Û‹^ÛÛ[HµäuåuäõéÈ5çµéµäx )ˆŽÂˆžHÂˆZY[Û

NÂˆHš[˜[HÂˆYˆ
[]™H	‰ˆ]Û‹š\ÐÛÛ›™XÝY
HÂˆ]Û‹™\ØX›YH˜[ÙNÂˆ]Û‹^ÛÛ[Hµê5èµè5çÈ5çµéµäH5èµæõêuæuåHŽÂˆBˆBˆJNÂˆ
ØMH]Y\žJ–Ù]K[™]Ë\[—HŠJHOH[È›ÚYˆØM˜Y]™[\Ý[™\Š˜ÛXÚÈ‹

HOˆÂˆYˆ
Û‘Y]
HÂˆÛX[\

NÂˆÛ‘Y]

NÂˆH[ÙHÂˆÙ^HHÛØ˜[\Ë˜Üž\Ëœ˜[™ÛUURQ

NÂˆ›Ü›J
NÂˆBˆJNÂˆ›Üˆ
ÛÛœÝXÝ[ÛŒˆÙˆÈœ]\ÙH‹œ™\Ý[YH‹˜Ø[˜Ù[—JH
ØˆH]Y\žJ–Ù]KHˆ
ÈXÝ[ÛŒˆ
È‹\[—HŠJHOH[È›ÚYˆØ‹˜Y]™[\Ý[™\Š˜ÛXÚÈ‹
JHOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆYˆ
[™[™ÊH™]\›ŽÂˆYˆ
XÝ[ÛŒˆOOH˜Ø[˜Ù[ˆ	‰ˆ]Ú[‹˜ÛÛ™š\›Jµç5äuæ5ç5ä5êˆ5å5å5ê5éµåÈ5ä5æH5ä5é5êuê5ç5å5çµêuæuæˆ5å5ê5éµå5êuäuåuæ5ç5åˆ5é5èµåuç5å5êuæõäuê5è5êuç5åõå5ç5èué5éÈ5èµêuåuæuå5ç5éµê5åuæˆ5êµéõéµæuäKˆŠJH™]\›ŽÂˆ[™[™ÈHYNÂˆÛÛœÝ]ÛˆHK˜Ý\œ™[\™Ù]Âˆ]Û‹™\ØX›YHYNÂˆ™YY˜XÚÊÈ]\ÙNˆµçµêuå5å5ä5êˆ5å5å5ê5éµå8 )ˆ‹™\Ý[YNˆµçµçµêuæuæˆ5ä5êˆ5ä5åuêµå5å5ê5éµå8 )ˆ‹Ø[˜Ù[ˆµçµäuæ5ç5ä5êˆ5å5å5ê5éµå8 )ˆˆVØXÝ[ÛŒ—JNÂˆžHÂˆÛÛœÝ\]YHZY[\VØXÝ[ÛŒ—J‹šY
NÂˆYˆ
X[]™JH™]\›ŽÂˆYˆ
\]Y
HÂˆÝ™\šY]ÈH×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßKÝ™\šY]ÊKÈ[Žˆ\]YJNÂˆ[Ûš]ÜŠ
NÂˆBˆZY[Û

NÂˆHØ]Ú
\œŠHÂˆ™YY˜XÚÊ\œ‹›Y\ÜØYÙJNÂˆHš[˜[HÂˆ[™[™ÈH˜[ÙNÂˆYˆ
[]™H	‰ˆ]Û‹š\ÐÛÛ›™XÝY
H]Û‹™\ØX›YH˜[ÙNÂˆBˆJJNÂˆ
ØÈH]Y\žJ–Ù]K\X›\Ú\[—HŠJHOH[È›ÚYˆØË˜Y]™[\Ý[™\Š˜ÛXÚÈ‹
JHOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆK\™Ù]™\ØX›YHYNÂˆžHÂˆZY[
‹œ\œÜÙHOOH\]Hˆ
HOH[È›ÚYˆKšÚ[™
HOOHœ[—Ý\]HˆÈ\K\]TX›\Úˆ\KœX›\Ú
J‹šY‹š\Ý™\œÚ[ÛŠNÂˆYˆ
[]™JHÂˆÛX[\

NÂˆX[ÙË˜ÛÜÙJ
NÂˆZY[Û”X›\ÚY

NÂˆBˆHØ]Ú
\œŠHÂˆ™YY˜XÚÊ\œ‹›Y\ÜØYÙJNÂˆYˆ
[]™JHK\™Ù]™\ØX›YH˜[ÙNÂˆBˆJJNÂˆBˆ[˜Ý[ÛˆÛ

HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆÚ[‹˜ÛX\•[Y[Ý]
[Y\ŠNÂˆÛÛœÝÙ[™\˜][ÛˆH
ÊÜÛÙ[™\˜][ÛŽÂˆžHÂˆÛÛœÝÙ]KÜ[Ûœ×HHZY[›ÛZ\ÙK˜[
Ø\K›Ý™\šY]Ê\Ý[˜][Û‹šY
K\KœXÚØYÙSÜ[ÛœÈÈ\KœXÚØYÙSÜ[ÛœÊ\Ý[˜][Û‹šY
K˜Ø]Ú


HOˆ[
Hˆ›ÛZ\ÙKœ™\ÛÛ™J[
WJNÂˆYˆ
X[]™HÙ[™\˜][ÛˆOOHÛÙ[™\˜][ÛŠH™]\›ŽÂˆ\ÝÞ[˜ÈH]K››ÝÊ
NÂˆ™YY˜XÚÊˆŠNÂˆÝ™\šY]ÈH]NÂˆXÚØYÙSÜ[ÛœÈHÜ[ÛœÎÂˆ™XYHH]Kœ™XYHOOHYNÂˆYÙ]

NÂˆXÚØYÙPÛÛ›ÛÊ
NÂˆYˆ
ÝYÙHOOH›[Ûš]ÜˆŠHÂˆYˆ
™[™\™Y[ˆOOH”ÓÓ‹œÝš[™ÚYžJ]Kœ[ŠJH[Ûš]ÜŠ
NÂˆ[ÙH\]T[ÛØÚÜÊX[ÙË]Kœ[‹\ÝÞ[˜ÊNÂˆH[ÙHYˆ
ÝYÙHOOHš[œ]ˆ	‰ˆY˜YÝXÚY	‰ˆ]Kœ[ˆ	‰ˆ
Èœ]Y]YY‹œ™\ÙX\˜Ú[™È—Kš[˜ÛY\Ê]Kœ[‹œÝ]JH]Kœ[‹œ]\ÙYØ]
JH[Ûš]ÜŠ
NÂˆ[ÙHYˆ
ÝYÙHOOH\]K\™]šY]ÈŠH]Y\žJ–Ù]KX\›Ý™K]\]WHŠK™\ØX›YHX[ÝÙY
\]HŠHJXÚØYÙSÜ[ÛœÈOH[È›ÚYˆXÚØYÙSÜ[ÛœË˜\›Ý™Y[œ]
NÂˆ[ÙHYˆ
ÝYÙHOOHœÝ[[X\žHŠH]Y\žJ–Ù]KX\›Ý™KZ[œ]×HŠK™\ØX›YHX[ÝÙY
š[š]X[ŠNÂˆYˆ
\™XYH	‰ˆÝYÙHOOH›[Ûš]ÜˆŠH™YY˜XÚÊµå5èuåuæõçÈ5èµäõæuæuçÈ5ä5æuè5åH5çµåõåuäuê5ç5èué5éÈRKˆ5ä5é5êuê5ç5çµç5ä5ä5êˆ5å5êuä5ç5åuçÎÈ5å5å5ê5éµå5åõèuåuçµåˆŠNÂˆYˆ
]Kœ[ˆ	‰ˆ
Èœ]Y]YY‹œ™\ÙX\˜Ú[™È—Kš[˜ÛY\Ê]Kœ[‹œÝ]JH]Kœ[‹œ]\ÙYØ]]Kœ[‹œÝ]HOOH˜Ø[˜Ù[Yˆ	‰ˆ]Kœ[‹œ™\Ù\™YØYÛÜ›Ýˆ
JH[Y\ˆHÚ[‹œÙ][Y[Ý]
ÛYLÊNÂˆHØ]Ú
JHÂˆYˆ
[]™H	‰ˆÙ[™\˜][ÛˆOOHÛÙ[™\˜][ÛŠHÂˆXÚØYÙSÜ[ÛœÈH[ÂˆXÚØYÙPÛÛ›ÛÊ
NÂˆYˆ
]Y\žJ–Ù]KX\›Ý™KZ[œ]×HŠJH]Y\žJ–Ù]KX\›Ý™KZ[œ]×HŠK™\ØX›YHYNÂˆYˆ
]Y\žJ–Ù]KX\›Ý™K]\]WHŠJH]Y\žJ–Ù]KX\›Ý™K]\]WHŠK™\ØX›YHYNÂˆ™YY˜XÚÊµç5ä5è5æuêµçÈ5ç5èµäõæõçÈ5ä5êˆ5çµéµäH5å5å5ê5éµå5æõê5äµè‹ˆˆ
ÈK›Y\ÜØYÙH
Èˆ0­È5äuäõæuéõå5è5åuèué5êˆ5äuèµåuäÈL5êuè5æuåuêŽÈ5ä5æuçÈ5éµåuê5æˆ5ç5å5êµåõæuç5å5ê5éµå5åõäõêuåˆŠNÂˆ[Y\ˆHÚ[‹œÙ][Y[Ý]
ÛYM
NÂˆBˆBˆJNÂˆBˆYˆ
™]šY]ÓÛ›JHÂˆžHÂˆ[œ]H˜[Y]T[›š[™Ò[œ]
[œ]
NÂˆÝ[[X\žJ
NÂˆHØ]Ú
JHÂˆ›Ü›J
NÂˆBˆH[ÙH›Ü›J
NÂˆYˆ
YX[ÙË›Ü[ŠHX[ÙËœÚÝÓ[Ù[

NÂˆÛ

NÂˆ™]\›ˆÛX[\ÂˆB‚ˆËÈÜ˜ËÜ[›š[™ËX\KšœÂˆ[˜Ý[ÛˆÜ™X]T[›š[™Ð\JÛY[
HÂˆ[˜Ý[ÛˆØ[ŠÌ
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë\™Ý[Y[Ë[˜Ý[ÛŠˆ
XÝ[ÛŒ‹\˜[\ÈHßJHÂˆ˜\ˆØMØŽÂˆYˆ
XÛY[™[˜Ý[ÛœÊH›ÝÈ\œ›ÜŠµêuæuê5åuêˆ5å5èuåuæõçÈ5ä5æuè5åH5åµçµæuçÈ5æõê5äµèˆŠNÂˆÛÛœÝÈ]K\œ›ÜˆHHZY[ÛY[™[˜Ý[ÛœËš[›ÚÙJš\\[›™\ˆ‹È›ÙNˆ×ÜÜ™XY˜[Y\ÊÈXÝ[ÛŽˆXÝ[ÛŒˆK\˜[\ÊHJNÂˆYˆ
\œ›Üˆ
]HOH[È›ÚYˆ]K™\œ›ÜŠJHÂˆ]Y\ÜØYÙHH]HOH[È›ÚYˆ]K™\œ›ÜŽÂˆYˆ
[Y\ÜØYÙH	‰ˆ

ØMH\œ›ÜˆOH[È›ÚYˆ\œ›Ü‹˜ÛÛ^
HOH[È›ÚYˆØM˜ÛÛ™JJHžHÂˆY\ÜØYÙHH
ØˆHZY[\œ›Ü‹˜ÛÛ^˜ÛÛ™J
KšœÛÛŠ
JHOH[È›ÚYˆØ‹™\œ›ÜŽÂˆHØ]Ú
JHÂˆBˆ›ÝÈ\œ›ÜŠ\[ÙˆY\ÜØYÙHOOHœÝš[™Èˆ	‰ˆY\ÜØYÙK›[™ÝHLÈY\ÜØYÙHˆµç5ä5è5æuêµçÈ5ç5å5êuç5æuçH5ä5êˆ5å5é5èµåuç5å5çµåuç5êuæuê5åuêˆ5å5èuåuæõçËˆ5è5èuå5ç5ê5èµè5çËˆŠNÂˆBˆ™]\›ˆ]NÂˆJNÂˆBˆÛÛœÝ›Ý]Q\Ý[˜ÙHH
š\Yš\™\œÚ[Û‹˜]™[[ÙHH‘’U‘HŠHOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆÛÛœÝ™\Ý[HZY[Ø[Šœ›Ý]Q\Ý[˜ÙH‹Èš\Yš\™\œÚ[Û‹˜]™[[ÙHJNÂˆYˆ
\™\Ý[\[Ùˆ™\Ý[OOH›Øš™XÝŠH™]\›ˆÈÝ]\Îˆ[œ™\ÛÛ™Y‹ÛÝ\˜ÙNˆš\\[›™\ˆ‹ÚXÚÙY]ˆ[^\Îˆ×KÝ[ˆÈ\Ý[˜ÙSY]\œÎˆ[\˜][Û”ÙXÛÛ™Îˆ[K[œ™\ÛÛ™YˆÞÈÝÜYˆ[™X\ÛÛŽˆµêuæuê5åuêˆ5å5èuåuæõçÈ5å5åõåµæuê5êµêuåuäuêˆ5çµèuç5åuç5ê5æuéõåˆˆWHNÂˆYˆ

™\Ý[OH[È›ÚYˆ™\Ý[œÝ]\ÊHOOHœÝXØÙ\ÜÈˆ	‰ˆ]™\šYšYY]šY[˜ÙJÈÝ]\Îˆ™\šYšYY‹ÛÝ\˜ÙNˆ™\Ý[œÛÝ\˜ÙKÚXÚÙY]ˆ™\Ý[˜ÚXÚÙY]KÈX^YÙS\Îˆ]šY[˜ÙTÛXÞKœ›Ý]HJJH™]\›ˆÈÝ]\Îˆ[œ™\ÛÛ™Y‹ÛÝ\˜ÙNˆ™\Ý[œÛÝ\˜ÙH™ÛÛÙÛWÜ›Ý]\È‹ÚXÚÙY]ˆ™\Ý[˜ÚXÚÙY][^\Îˆ×KÝ[ˆÈ\Ý[˜ÙSY]\œÎˆ[\˜][Û”ÙXÛÛ™Îˆ[K[œ™\ÛÛ™YˆÞÈÝÜYˆ[™X\ÛÛŽˆµêµåuéµä5êˆ5å5çµèuç5åuç5ä5æuè5å5æ5ê5æuæuå5çµèué5æuéËˆˆWHNÂˆYˆ
™\Ý[œÝ]\ÈOOHœÝXØÙ\ÜÈˆ	‰ˆP\œ˜^Kš\Ð\œ˜^J™\Ý[[œ™\ÛÛ™Y
JH™]\›ˆ×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßK™\Ý[
KÈÝ]\Îˆ[œ™\ÛÛ™Y‹[œ™\ÛÛ™YˆÞÈÝÜYˆ[™X\ÛÛŽˆµêuæuê5åuêˆ5å5çµèuç5åuç5å5åõåµæuê5çµäuè5å5êµêuåuäuå5ç5ä5êµéõæuçËˆˆWHJNÂˆ™]\›ˆ™\Ý[ÂˆJNÂˆ™]\›ˆÈXÚØYÙSÜ[ÛœÎˆ
š\Y
HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆÛÛœÝÈ]K\œ›ÜˆHHZY[ÛY[œœÊ˜XØÛÝ[ÜXÚØYÙWÛÜ[ÛœÈ‹ÈÝš\ˆš\YJNÂˆYˆ
\œ›ÜŠH›ÝÈ\œ›ÜŠµç5ä5è5æuêµçÈ5ç5èµäõæõçÈ5ä5êˆ5åµæõä5åuêˆ5å5åõäuæuç5åˆ5è5èuå5ç5ê5èµè5çËˆŠNÂˆ™]\›ˆ]NÂˆJK›Ý]Q\Ý[˜ÙK\]TÝ\ˆ
š\Y™\œÚ[ÛK[œ]Ù^K[œÝXÝ[ÛœÊHOˆØ[Š\]TÝ\‹Èš\Y™\œÚ[ÛŽˆ™\œÚ[ÛK[œ]Ù^K[œÝXÝ[ÛœÈJK\]TX›\Úˆ
[’Y™\œÚ[ÛJHOˆØ[Š\]TX›\Ú‹È[’Y™\œÚ[ÛŽˆ™\œÚ[ÛHJKZ[SÝ™\šY]Îˆ
š\Y
HOˆØ[Š™Z[SÝ™\šY]È‹Èš\YJKZ[PÛÛ›Ûˆ
š\YÛÛ›Û‹™\œÚ[ÛJHOˆØ[Š™Z[PÛÛ›Û‹Èš\YÛÛ›ÛˆÛÛ›Û‹™\œÚ[ÛŽˆ™\œÚ[ÛHJK™]šY]ÑZ[Nˆ
™\]Y\ÝY™\œÚ[ÛKXÚ\Ú[ÛŒŠHOˆØ[Šœ™]šY]ÑZ[H‹È™\]Y\ÝY™\œÚ[ÛŽˆ™\œÚ[ÛKXÚ\Ú[ÛŽˆXÚ\Ú[ÛŒˆJKÝ™\šY]Îˆ
š\Y
HOˆØ[Š›Ý™\šY]È‹Èš\YJKÝ\ˆ
š\Y™\œÚ[ÛK[œ]Ù^JHOˆØ[ŠœÝ\‹Èš\Y™\œÚ[ÛŽˆ™\œÚ[ÛK[œ]Ù^HJK]\ÙNˆ
[’Y
HOˆØ[Šœ]\ÙH‹È[’YJK™\Ý[YNˆ
[’Y
HOˆØ[Šœ™\Ý[YH‹È[’YJKØ[˜Ù[ˆ
[’Y
HOˆØ[Š˜Ø[˜Ù[‹È[’YJKX›\Úˆ
[’Y™\œÚ[ÛJHOˆØ[ŠœX›\Ú‹È[’Y™\œÚ[ÛŽˆ™\œÚ[ÛHJHNÂˆB‚ˆËÈÜ˜ËØYÙ[\Ù[XÝ[Û‹X\KšœÂˆ[˜Ý[ÛˆÙ[XÝYÙ[ÛÛ
Ì
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë\™Ý[Y[Ë[˜Ý[ÛŠˆ
ÛY[Èš\Yš\™\œÚ[Û‹]Y\žHHHßJHÂˆYˆ
JÛY[OH[È›ÚYˆÛY[™[˜Ý[ÛœÊJH›ÝÈ\œ›ÜŠµêuæuê5åuêˆ5å5èuåuæõçÈ5ä5æuè5åH5åµçµæuçÈ5æõê5äµèˆŠNÂˆÛÛœÝ›Ü›X[^™Y™\œÚ[ÛˆH[X™\Šš\™\œÚ[ÛŠNÂˆÛÛœÝ›Ü›X[^™Y]Y\žHHÝš[™Ê]Y\žHOH[È]Y\žHˆˆŠKš[J
NÂˆYˆ
\[Ùˆš\YOOHœÝš[™Èˆ]š\Yš[J
HS[X™\‹š\ÔØY™R[YÙ\Š›Ü›X[^™Y™\œÚ[ÛŠH›Ü›X[^™Y™\œÚ[ÛˆH[›Ü›X[^™Y]Y\žJH›ÝÈ\œ›ÜŠµåõèuê5å5éõêuê5êµéõæuçÈ5ç5äuåõæuê5êˆ5æuæõåuç5êˆ5å5èuåuæõçÈŠNÂˆÛÛœÝÈ]K\œ›ÜˆHHZY[ÛY[™[˜Ý[ÛœËš[›ÚÙJš\\[›™\ˆ‹È›ÙNˆÈXÝ[ÛŽˆ˜YÙ[ÛÛÙ[XÝ‹š\Yˆš\Yš[J
Kš\™\œÚ[ÛŽˆ›Ü›X[^™Y™\œÚ[Û‹]Y\žNˆ›Ü›X[^™Y]Y\žHHJNÂˆYˆ
\œ›Üˆ
]HOH[È›ÚYˆ]K™\œ›ÜŠJHÂˆÛÛœÝY\ÜØYÙHH\[Ùˆ
]HOH[È›ÚYˆ]K™\œ›ÜŠHOOHœÝš[™ÈˆÈ]K™\œ›Üˆˆ\[Ùˆ
\œ›ÜˆOH[È›ÚYˆ\œ›Ü‹›Y\ÜØYÙJHOOHœÝš[™ÈˆÈ\œ›Ü‹›Y\ÜØYÙHˆµç5ä5è5æuêµçÈ5ç5äuåõåuê5æuæõåuç5êˆ5èuåuæõçÈ5æõê5äµèˆŽÂˆ›ÝÈ\œ›ÜŠY\ÜØYÙJNÂˆBˆ™]\›ˆ]NÂˆJNÂˆB‚ˆËÈÜ˜ËØYÙ[\™\ÙX\˜Ú\›Ý][™ËšœÂˆ˜\ˆÙÚ[™ÌˆH
][JHOˆÂˆ˜\ˆØMØŽÂˆ™]\›ˆ
][HOH[È›ÚYˆ][KšÚ[™
HOOH˜›ÛÚÚ[™Èˆ	‰ˆõç5æuè5å5çµç5åuçßÝ[ÙËÚK\Ý
Ýš[™Ê

ØMH][Kœ^[ØY
HOH[È›ÚYˆØM\JH

ØˆH][Kœ^[ØY
HOH[È›ÚYˆØ‹˜Ø]YÛÜžJHˆŠJNÂˆNÂˆ˜\ˆX™[ÈH
][JHOˆÂˆ˜\ˆØMØ‹ØÎÂˆ™]\›ˆ

ØMH][HOH[È›ÚYˆ][Kœ^[ØY
HOH[È›ÚYˆØMœXÙJH

ØˆH][HOH[È›ÚYˆ][Kœ^[ØY
HOH[È›ÚYˆØ‹›˜[YJH

ØÈH][HOH[È›ÚYˆ][Kœ^[ØY
HOH[È›ÚYˆØË]JHˆŽÂˆNÂˆ˜\ˆ›Ü›X[^™LÈH
˜[YLŠHOˆÝš[™Ê˜[YLˆˆŠKÓØØ[SÝÙ\Ø\ÙJšHŠKœ™\XÙJÖø $ø %KÙË‹HŠKœ™\XÙJ×ÊËÙËˆŠKš[J
NÂˆ[˜Ý[ÛˆX]Ú\Ê]Y\žK][JHÂˆÛÛœÝHH›Ü›X[^™LÊ]Y\žJNÂˆÛÛœÝ[H›Ü›X[^™LÊX™[Ê][JJNÂˆÛÛœÝÚÜH›Ü›X[^™LÊ[œÜ]
×ÊËWÊËÊVÌJNÂˆ™]\›ˆ›ÛÛX[ŠH	‰ˆ
[	‰ˆKš[˜ÛY\Ê[
HÚÜ	‰ˆKš[˜ÛY\ÊÚÜ
H[	‰ˆ[š[˜ÛY\ÊJJJNÂˆBˆ[˜Ý[ÛˆÝ[™\ÙX\˜Ú[[
]Y\žKš\ˆHßJHÂˆÛÛœÝ][\ÈH\œ˜^Kš\Ð\œ˜^Jš\‹š][\ÊHÈš\‹š][\Èˆ×NÂˆÛÛœÝÝ^\ÈH][\Ë™š[\ŠÙÚ[™ÌŠNÂˆÛÛœÝX]ÚHÝ^\Ë™š[™

][JHOˆX]Ú\Ê]Y\žK][JJNÂˆYˆ
[X]Ú
H™]\›ˆÈ[ÙNˆ›™YY×ØÛ\šYšXØ][Ûˆ‹ÛÛˆ™Ù]ÛÙÚ[™×ØÚXÚÚ[ˆ‹Ý[ˆ[NÂˆÛÛœÝ^[ØYHX]Úœ^[ØYßNÂˆÛÛœÝØ]™YH^[ØY˜ÚXÚÒ[•[YH^[ØY˜\œš]˜[[YNÂˆYˆ
Ø]™Y
H™]\›ˆÈ[ÙNˆ›ØØ[‹ÛÛˆ™Ù]ÛÙÚ[™×ØÚXÚÚ[ˆ‹Ý[ˆX™[ÊX]Ú
K˜[YNˆØ]™YNÂˆÛÛœÝÚXÚÒ[‘]HH^[ØY˜ÚXÚÒ[‘]H^[ØYœÝ\]H[ÂˆÛÛœÝÚXÚÓÝ]]HH^[ØY˜ÚXÚÓÝ]]H^[ØY™[™]H[ÂˆÛÛœÝXÙRYH\[Ùˆ^[ØYœXÙRYOOHœÝš[™Èˆ	‰ˆ^[ØYœXÙRYš[J
HÈ^[ØYœXÙRYš[J
Hˆ[Âˆ™]\›ˆÂˆ[ÙNˆœ™\ÙX\˜Ú‹ˆÛÛˆœ™\ÙX\˜ÚÙ^\›˜[Ú[™›Ü›X][Ûˆ‹ˆÝ[ˆX™[ÊX]Ú
Kˆ\™Ý[Y[ÎˆÂˆÛXZ[ŽˆšÝ[‹ˆ[]NˆX™[ÊX]Ú
Kˆ]Y\Ý[ÛŽˆÝš[™Ê]Y\žHˆŠKš[J
KˆÛÝ\˜ÙR[ˆ^[ØYÙXœÚ]H^[ØY\›^[ØYœÛÝ\˜ÙU\›[ˆXÙRYˆÚXÚÒ[‘]KˆÚXÚÓÝ]]BˆBˆNÂˆB‚ˆËÈÜ˜ËØYÙ[XÛÛ˜XÝËšœÂˆ˜\ˆQÑS•ÐÓÓSPS‘ÒÒS‘ÈHØš™XÝ™œ™Y^™JÂˆ‘PQˆœ™XY‹ˆÓÓ•Vˆ˜ÛÛ^‹ˆ“ÔÔÐSˆœ›ÜÜØ[‹ˆUUUSÓŽˆ›]]][Ûˆ‹ˆVS”ÒU‘Nˆ™^[œÚ]™H‹ˆTÕ•PÕU‘Nˆ™\ÝXÝ]™H‹ˆ“ÒP’UQˆœ›ÚXš]Y‹ˆSP’QÕSÕTÎˆ˜[XšYÝ[Ý\È‚ˆJNÂˆ˜\ˆQÑS•ÐT“ÕSÓU‘SÈHØš™XÝ™œ™Y^™JÈ‘PQˆ“ÔÔÐSˆKUUUSÓŽˆ‹VS”ÒU‘NˆËTÕ•PÕU‘Nˆ“ÒP’UQˆHJNÂˆ˜\ˆQÑS•ÑT”“Ô—ÐÓÑTÈHØš™XÝ™œ™Y^™JÂˆSP’QÕSÕT×ÐÓÓ•VˆQÑS•ÐSP’QÕSÕT×ÐÓÓ•V‹ˆ“ÒP’UQÐPÕSÓŽˆQÑS•Ô“ÒP’UQÐPÕSÓˆ‹ˆS•SQÐÓÓSPS‘ˆQÑS•ÒS•SQÐÓÓSPS‘‹ˆS•SQÔ‘TÔÓ”ÑNˆQÑS•ÒS•SQÔ‘TÔÓ”ÑH‹ˆ“Õ’QT—ÕSÑT•RSŽˆQÑS•Ô“Õ’QT—ÕSÑT•RSˆ‚ˆJNÂˆ˜\ˆ‘TÑPTÒÑÓPRS”ÈHØš™XÝ™œ™Y^™JÈÕSˆšÝ[‹“QÒˆ™›YÚ‹ÑPUTŽˆÙX]\ˆ‹“ÕUNˆœ›Ý]H‹UPÕSÓŽˆ˜]˜XÝ[Ûˆ‹‘TÕUTS•ˆœ™\Ý]\˜[‹ÑPŽˆÙXˆˆJNÂˆ˜\ˆ‘TÑPTÒÔÕUTÑTÈHØš™XÝ™œ™Y^™JÈ‘T’Q’QQˆ™\šYšYY‹TÕSPUQˆ™\Ý[X]Y‹S”‘TÓÓ‘Qˆ[œ™\ÛÛ™YˆJNÂˆ˜\ˆ™\ÙX\˜ÚÛXZ[œÈH™]ÈÙ]
Øš™XÝ˜[Y\Ê‘TÑPTÒÑÓPRS”ÊJNÂˆ˜\ˆ™\ÙX\˜ÚÝ]\Ù\ÈH™]ÈÙ]
Øš™XÝ˜[Y\Ê‘TÑPTÒÔÕUTÑTÊJNÂˆ˜\ˆÚ[™ÌˆH™]ÈÙ]
Øš™XÝ˜[Y\ÊQÑS•ÐÓÓSPS‘ÒÒS‘ÊJNÂˆ˜\ˆ]™[ÈHÂˆÐQÑS•ÐÓÓSPS‘ÒÒS‘Ë”‘PQNˆQÑS•ÐT“ÕSÓU‘SË”‘PQˆÐQÑS•ÐÓÓSPS‘ÒÒS‘ËÓÓ•VNˆQÑS•ÐT“ÕSÓU‘SË”‘PQˆÐQÑS•ÐÓÓSPS‘ÒÒS‘ËSP’QÕSÕT×NˆQÑS•ÐT“ÕSÓU‘SË”‘PQˆÐQÑS•ÐÓÓSPS‘ÒÒS‘Ë”“ÔÔÐSNˆQÑS•ÐT“ÕSÓU‘SË”“ÔÔÐSˆÐQÑS•ÐÓÓSPS‘ÒÒS‘Ë“UUUSÓ—NˆQÑS•ÐT“ÕSÓU‘SË“UUUSÓ‹ˆÐQÑS•ÐÓÓSPS‘ÒÒS‘Ë‘VS”ÒU‘WNˆQÑS•ÐT“ÕSÓU‘SË‘VS”ÒU‘KˆÐQÑS•ÐÓÓSPS‘ÒÒS‘Ë‘TÕ•PÕU‘WNˆQÑS•ÐT“ÕSÓU‘SË‘TÕ•PÕU‘KˆÐQÑS•ÐÓÓSPS‘ÒÒS‘Ë”“ÒP’UQNˆQÑS•ÐT“ÕSÓU‘SË”“ÒP’UQˆNÂ‚ˆËÈÜ˜ËØYÙ[]ÛÛËšœÂˆ˜\ˆ™XYH
˜[YK\ØÜš\[Û‹™\]Z\™Y\™Ý[Y[ÈH×K™\Ý[Ú\HH™]HŠHOˆ
È˜[YK\ØÜš\[Û‹Ú[™ˆQÑS•ÐÓÓSPS‘ÒÒS‘Ë”‘PQ\›Ý˜[]™[ˆQÑS•ÐT“ÕSÓU‘SË”‘PQ™\]Z\™YÛÛ^ˆÈ›ÝÛ™\’Y‹š\Y‹š\™\œÚ[Ûˆ—K™\]Z\™Y\™Ý[Y[Ë™\Ý[Ú\HJNÂˆ˜\ˆQÑS•ÕÓÓÈHØš™XÝ™œ™Y^™JÂˆ™XY
™Ù]ÝÙX]\ˆ‹µêµåõåµæuêˆ5çµåµäˆ5ä5åuåuæuê5ç5é5æH5çµæuéõåuçH5åuêµä5ê5æuæˆ‹È™^H—K™›Ü™XØ\ÝŠKˆ™XY
™Ù]Ü›Ý]WÙ\Ý[˜ÙH‹µçµê5åõéÈ5åuåµçµçÈ5è5èuæuèµå5ç5é5æH5æuçµæH5å5çµèuç5åuç‹×Kœ›Ý]K]X›HŠKˆ™XY
™Ù]ÛÜ[š[™×ÚÝ\œÈ‹µêuèµåuêˆ5é5êµæuåõå5êuç5çµéõåuçH5äuèµçXÙHQ‹ÈœXÙRY—K›Ü[š[™ËZÝ\œÈŠKˆ™XY
™Ù]Ýš\Ü™XY[™\ÜÈ‹µäuäõæuéõêˆ5çµåuæõè5åuêˆ5å5æ5æuåuç‹×Kœ™XY[™\ÜÈŠKˆ™XY
™Ù]Ýš\Ù]Z[È‹µé5ê5æ5æH5å5æ5æuåuç5æuèµäË5êµä5ê5æuæõæuçH5åuçµêuæˆ‹×Kš\Y]Z[ÈŠKˆ™XY
™Ù]Ù^WÜ[ˆ‹µêµåuæõè5æuêˆ5å5æuåuçH5åuå5èµéµæuê5åuêˆ5äuæuåuçH5çµèuåuæuçH‹È™^H—K™^K\[ˆŠKˆ™XY
™Ù]ÜÝÜ×ØžWÙ^H‹µæõç5å5èµéµæuê5åuêˆ5ç5é5æH5æuçµæuçH‹×KœÝÜËXžKY^HŠKˆ™XY
™Ù]ÛÙÚ[™×ÜÝ[[X\žH‹µèuæuæõåuçH5çµéõåuçµåuêˆ5å5ç5æuè5å‹×K›ÙÚ[™Ë\Ý[[X\žHŠKˆ™XY
™Ù]ÛÙÚ[™×Ù]\È‹µçµéõåuçµåuêˆ5ç5æuè5å5åuêµä5ê5æuæõæH5ç5æuè5å‹×K›ÙÚ[™ËY]\ÈŠKˆ™XY
™Ù]ÛÙÚ[™×ØÚXÚÚ[ˆ‹µêuèµêˆ5å5æõè5æuèuå5ç5çµéõåuçH5ç5æuè5å5çµèuåuæuçH‹×K›ÙÚ[™ËXÚXÚÚ[ˆŠKˆ™XY
˜Ø[Ý[]WÛÙÚ[™×ÛšYÚÈ‹µåõæuêuåuäH5çµèué5ê5ç5æuç5åuêˆ5ç5é5æH5êµä5ê5æuæõæH5ç5æuè5å‹×K›ÙÚ[™Ë[šYÚÈŠKˆ™XY
™Ù]ÜØ]™YÛÙÚ[™×ÜšXÙ\È‹µçµåõæuê5æH5ç5æuè5å5êuæõäuê5è5êuçµê5åH5äuå5åµçµè5åuêˆ‹×KœØ]™Y[ÙÚ[™Ë\šXÙ\ÈŠKˆ™XY
™Ù]Ø›ÛÚÚ[™×ÜÝ]\È‹µèuæ5æ5åuèH5å5å5åµçµè5åuêˆ5åuå5ä5æuêuåuê5æuçH‹×K˜›ÛÚÚ[™Ë\Ý]\ÈŠKˆ™XY
™Ù]ØYÙ]ÜÝ[[X\žH‹µêµéõéµæuäK5å5åuéµä5åuêˆ5åuæuêµê5å‹×K˜YÙ]\Ý[[X\žHŠKˆ™XY
™Ù]Ý\Ú×ÜÝ]\È‹µçµêuæuçµåuêˆ5é5êµåuåõåuêˆ5åuèuäµåuê5åuêˆ‹×K\ÚË\Ý]\ÈŠKˆ™XY
™Ù]ÛZ\ÜÚ[™×Ù]H‹µçµæuäõèˆ5åõèuê5äuæ5æuåuç‹×K›Z\ÜÚ[™ËY]HŠKˆ™XY
™Ù]ÜÛÝ\˜ÙWÜÝ]\È‹µçµéµäH5çµéõåuê5åuêˆ5åuä5æuçµåuêˆ‹×KœÛÝ\˜ÙK\Ý]\ÈŠKˆ™XY
œ™\ÙX\˜ÚÙ^\›˜[Ú[™›Ü›X][Ûˆ‹µçµåõéõê5çµæuäõèˆ5åõæuéµåuè5æH5ç5é5æH5êµåõåuçH5åuçµéõåuê‹È™ÛXZ[ˆ‹œ]Y\Ý[Ûˆ—Kœ™\ÙX\˜ÚŠKˆ™XY
™Ù]ÚÝ[ÜšXÙ\È‹µçµåõæuê5æH5çµç5åuè5åuêˆ5ç5é5æH5êµä5ê5æuæõæuçH8 %5äõåuê5êH5çµéõåuê5åõæuéµåuè5æH‹×KšÝ[\šXÙ\ÈŠKˆ™XY
œÙX\˜ÚÚÝ[ÜšXÙ\È‹µåõæué5åuêH5çµåõæuê5æH5çµç5åuè5åuêˆ5çµèué5éÈ5åõæuéµåuè5æH‹×KšÝ[\ÙX\˜ÚŠKˆ™XY
œÙX\˜ÚÚÝ[Ø]˜Z[Xš[]H‹µäuäõæuéõêˆ5åµçµæuè5åuêˆ5çµç5åuçÈ‹×KšÝ[X]˜Z[Xš[]HŠKˆ™XY
˜ÛÛ\\™WÚÝ[ÜšXÙ\È‹µå5êuåuåuä5êˆ5çµåõæuê5æH5çµç5åuè5åuêˆ‹×KšÝ[XÛÛ\\š\ÛÛˆŠKˆ™XY
œ™\ÛÛ™WÜXÙWÚY‹µçµéµæuä5êˆXÙHQ5åuéõåuä5åuê5äõæuè5æ5åuêˆ‹×KœXÙK\™\ÛÛ][ÛˆŠKˆ™XY
™Ù]ÜXÙWÙ]Z[È‹µé5ê5æ5æH5çµéõåuçH5åuæõêµåuäuêˆ‹×KœXÙKY]Z[ÈŠKˆ™XY
™Ù]Ü›Ý]WÛX]š^‹µå5êuåuåuä5êˆ5çµê5åõéõæuçH5åuåµçµè5æH5è5èuæuèµå‹×Kœ›Ý]K[X]š^ŠKˆ™XY
˜[Y]WÜ›Ý]H‹µäuäõæuéõêˆ5êµéõæuè5åuêˆ5çµê5åõéõæuçH5åuåµçµè5æuçH‹×Kœ›Ý]K]˜[Y][ÛˆŠKˆ™XY
™Ù]ÝÙX]\—ÜÝ]\È‹µçµéµäH5åµçµæuè5åuêˆ5åuê5èµè5è5åuêˆ5êµåõåµæuêˆ‹×KÙX]\‹\Ý]\ÈŠKˆ™XY
œÙX\˜ÚØ]˜XÝ[ÛœÈ‹µåõæué5åuêH5ä5æ5ê5éõéµæuåuêˆ‹×K˜]˜XÝ[ÛœÈŠKˆ™XY
™Ù]Ø]˜XÝ[Û—Ù]Z[È‹µé5ê5æ5æH5ä5æ5ê5éõéµæuå‹×K˜]˜XÝ[Û‹Y]Z[ÈŠKˆ™XY
™Ù]Ø]˜XÝ[Û—ÚÝ\œÈ‹µêuèµåuêˆ5é5èµæuç5åuêˆ5êuç5ä5æ5ê5éõéµæuå‹×K˜]˜XÝ[Û‹ZÝ\œÈŠKˆ™XY
™Ù]Ø]˜XÝ[Û—ÜšXÙ\È‹µçµåõæuê5æH5æõè5æuèuå5ç5ä5æ5ê5éõéµæuå‹×K˜]˜XÝ[Û‹\šXÙ\ÈŠKˆ‹‹–È™Ù]ØÝ\œ™[ÝÙX]\ˆ‹™Ù]ÚÝ\›WÝÙX]\ˆ‹™Ù]ÝÙX]\—Ø[\È‹™Ù]Ù›YÚÙ]Z[È‹™Ù]Ù›YÚÙ\˜][Ûˆ‹™Ù]Ù›YÚÙ\Ý[˜ÙH‹™Ù]Ý˜[œÙ™\—Ù^\È‹˜[Y]WÙ›YÚÜÙ\]Y[˜ÙH‹œÙX\˜ÚÙ›YÚÛÜ[ÛœÈ‹™Ù]ÙÜ›Ý[™Ý˜[œÙ™\ˆ‹œÙX\˜ÚÜ™\Ý]\˜[È‹œÙX\˜ÚÛ[ÝÜ˜ÞXÛWÜ›Ý]\È‹˜[Y]WÜÝÜÜÙ\]Y[˜ÙH‹œÝYÙÙ\ÝÛ™X\˜žWÜÝÜÈ‹œÙX\˜ÚÝÙX—ÜÛÝ\˜Ù\È‹œÝ[[X\š^™WÜÛÝ\˜Ù\È‹˜ÛÛ\\™WÛÜ[ÛœÈ‹˜Ø[Ý[]WÝš\Ù\Ý[X]H‹˜ÚXÚ×Ú[™›Ü›X][Û—Ùœ™\Ú™\ÜÈ‹œ™]žWÝ[œ™\ÛÛ™YÜ™\ÙX\˜Ú—K›X\

˜[YJHOˆ
È˜[YK\ØÜš\[ÛŽˆµæõç5æH5éõê5æuä5å5ä5åH5çµåõéõê5åõæuéµåuè5æH‹Ú[™ˆQÑS•ÐÓÓSPS‘ÒÒS‘Ë”‘PQ\›Ý˜[]™[ˆQÑS•ÐT“ÕSÓU‘SË”‘PQ™\]Z\™YÛÛ^ˆÈ›ÝÛ™\’Y‹š\Y‹š\™\œÚ[Ûˆ—K™\]Z\™Y\™Ý[Y[Îˆ×K™\Ý[Ú\Nˆ™^\›˜[ˆJJKˆ×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßK™XY
›˜]šYØ]WÝ×ÜØÜ™Y[ˆ‹µé5êµæuåõêˆ5çµèuæˆ5çµêµä5æuçH5äuä5é5ç5æuéõéµæuå‹ÈœØÜ™Y[ˆ—K›˜]šYØ][ÛˆŠJKÈÚ[™ˆQÑS•ÐÓÓSPS‘ÒÒS‘ËÓÓ•VJKˆÈ˜[YNˆ˜Ü™X]WÜÝÜ‹\ØÜš\[ÛŽˆµå5åuèué5êˆ5èµéµæuê5å5ç5çµèuç5åuç5ç5ä5åõê5ä5æuêuåuê5çµé5åuê5êH‹Ú[™ˆQÑS•ÐÓÓSPS‘ÒÒS‘Ë“UUUSÓ‹\›Ý˜[]™[ˆQÑS•ÐT“ÕSÓU‘SË“UUUSÓ‹™\]Z\™YÛÛ^ˆÈ›ÝÛ™\’Y‹š\Y‹š\™\œÚ[Ûˆ—K™\]Z\™Y\™Ý[Y[ÎˆÈ™^H‹œXÙH—K™\Ý[Ú\Nˆ›]]][ÛˆˆKˆ‹‹–È\]WÝš\Ù]Z[È‹\]WÛÙÚ[™È‹\]WÜÝÜ‹œ™[[Ý™WÜÝÜ‹˜Ü™X]WÝ\ÚÈ‹\]WÝ\ÚÈ‹\]WØ›ÛÚÚ[™×ÜÝ]\È‹œØ]™WÜXÙWÚY‹œ™Yœ™\ÚÝš\Ü™\ÙX\˜Ú—K›X\

˜[YJHOˆ
È˜[YK\ØÜš\[ÛŽˆµé5èµåuç5êˆ5êuæuè5åuæH5å5äõåuê5êuêˆ5ä5æuêuåuê5çµé5åuê5êH‹Ú[™ˆQÑS•ÐÓÓSPS‘ÒÒS‘Ë“UUUSÓ‹\›Ý˜[]™[ˆQÑS•ÐT“ÕSÓU‘SË“UUUSÓ‹™\]Z\™YÛÛ^ˆÈ›ÝÛ™\’Y‹š\Y‹š\™\œÚ[Ûˆ—K™\]Z\™Y\™Ý[Y[Îˆ×K™\Ý[Ú\Nˆ›]]][ÛˆˆJJBˆJNÂˆ˜\ˆžS˜[YHH™]ÈX\
QÑS•ÕÓÓË›X\

ÛÛ
HOˆÝÛÛ›˜[YKÛÛJJNÂˆ[˜Ý[ÛˆÛÛÙ[XÝ[Û‘›Ü”]Y\žJ]Y\žJHÂˆÛÛœÝHHÝš[™Ê]Y\žHˆŠKš[J
KÓØØ[SÝÙ\Ø\ÙJšHŠNÂˆYˆ
õæõçµåŠŠ5æuèµç5å5èµåuç5å5çµåõæuê5èµç5åuêŠ_5çµåõæuêŠµçµç5åuçß5èµç5åuê‹Šµçµç5åuçËË\Ý
JJH™]\›ˆÈÛÛˆ™Ù]ÚÝ[ÜšXÙ\È‹\™Ý[Y[ÎˆßHNÂˆYˆ
õåµçµæuè5åuêŸ5é5è5åuæ_5ä5é5êuê5ç5å5åµçµæuçËË\Ý
JH	‰ˆõçµç5åuçß5ç5æuè5å5åõäõêË\Ý
JJH™]\›ˆÈÛÛˆœÙX\˜ÚÚÝ[Ø]˜Z[Xš[]H‹\™Ý[Y[ÎˆßHNÂˆYˆ
õå5êuåuåuå5å5êuåuåuä5êŸ5ç5å5êuåuåuê‹Ë\Ý
JH	‰ˆõçµç5åuçß5ç5æuè5å5çµåõæuêË\Ý
JJH™]\›ˆÈÛÛˆ˜ÛÛ\\™WÚÝ[ÜšXÙ\È‹\™Ý[Y[ÎˆßHNÂˆYˆ
ÜXÙKÚY5çµåµå5å5çµéõåuç_5éõåuä5åuê5äõæuè5æ5åuêŸ5åµæuå5åuæH5çµéõåuçKË\Ý
JJH™]\›ˆÈÛÛˆœ™\ÛÛ™WÜXÙWÚY‹\™Ý[Y[ÎˆßHNÂˆYˆ
õé5ê5æ5æH5å5çµéõåuç_5æõêµåuäuêŸ5æ5ç5é5åuçËŠµçµéõåuçKË\Ý
JJH™]\›ˆÈÛÛˆ™Ù]ÜXÙWÙ]Z[È‹\™Ý[Y[ÎˆßHNÂˆYˆ
õçµæ5ê5æuéõè_5å5êuåuåuä5ê‹Šµçµê5åõéß5å5êuåuåuåŠµçµèuç5åuç5æuçKË\Ý
JJH™]\›ˆÈÛÛˆ™Ù]Ü›Ý]WÛX]š^‹\™Ý[Y[ÎˆßHNÂˆYˆ
õäuäõåuéËŠµçµèuç5åuç5çµê5åõéõæuçKŠµèuäuæuê5åµçµè5æuçKŠµèuäuæuêË\Ý
JJH™]\›ˆÈÛÛˆ˜[Y]WÜ›Ý]H‹\™Ý[Y[ÎˆßHNÂˆYˆ
õçµéµäKŠµêµåõåµæuêŸ5ê5èµè5è5åuê‹ŠµçµåµäŸ5å5ä5çKŠµêµåõåµæuê‹Šµåµçµæuè5åË\Ý
JJH™]\›ˆÈÛÛˆ™Ù]ÝÙX]\—ÜÝ]\È‹\™Ý[Y[ÎˆßHNÂˆYˆ
õä5æ5ê5éõéµæuåuêŸ5çµå5ç5èµêuåuêŸ5çµéõåuçµåuêˆ5çµèµè5æuæuè5æuçKË\Ý
JJH™]\›ˆÈÛÛˆœÙX\˜ÚØ]˜XÝ[ÛœÈ‹\™Ý[Y[ÎˆßHNÂˆYˆ
õçµåµä‹Šµèµæõêuæuå_5æ5çµé5ê5æ5åuê5å5èµæõêuæuåKË\Ý
JJH™]\›ˆÈÛÛˆ™Ù]ØÝ\œ™[ÝÙX]\ˆ‹\™Ý[Y[ÎˆßHNÂˆYˆ
õêµåõåµæuêˆ5ç5é5æH5êuèµåuêŸ5çµåµä‹Šµêuèµåuê‹Ë\Ý
JJH™]\›ˆÈÛÛˆ™Ù]ÚÝ\›WÝÙX]\ˆ‹\™Ý[Y[ÎˆßHNÂˆYˆ
õä5åµå5ê5åuêˆ5çµåµäŸ5å5êµê5ä5êˆ5çµåµä‹Ë\Ý
JJH™]\›ˆÈÛÛˆ™Ù]ÝÙX]\—Ø[\È‹\™Ý[Y[ÎˆßHNÂˆYˆ
õæ5æuèuå5æ5æuèuåuê‹Ë\Ý
JH	‰ˆõé5ê5æ5æuç_5çµêµæ_5çµèué5êË\Ý
JJH™]\›ˆÈÛÛˆ™Ù]Ù›YÚÙ]Z[È‹\™Ý[Y[ÎˆßHNÂˆYˆ
õåµçµçÈ5æ5æuèuåË\Ý
JJH™]\›ˆÈÛÛˆ™Ù]Ù›YÚÙ\˜][Ûˆ‹\™Ý[Y[ÎˆßHNÂˆYˆ
õçµê5åõéËŠµæ5æuèuå5çµê5åõéÈ5ä5åuåuæuê5æKË\Ý
JJH™]\›ˆÈÛÛˆ™Ù]Ù›YÚÙ\Ý[˜ÙH‹\™Ý[Y[ÎˆßHNÂˆYˆ
õæuçµæH5çµèµäuê5æuåuçH5çµèµäuê5çµèµäuê5äuæuçÈ5æuèµäõæuçKË\Ý
JJH™]\›ˆÈÛÛˆ™Ù]Ý˜[œÙ™\—Ù^\È‹\™Ý[Y[ÎˆßHNÂˆYˆ
õê5éµèÈ5æ5æuèuåuêŸ5äuäõåuéËŠµæ5æuèuåuê‹Ë\Ý
JJH™]\›ˆÈÛÛˆ˜[Y]WÙ›YÚÜÙ\]Y[˜ÙH‹\™Ý[Y[ÎˆßHNÂˆYˆ
õçµèuèµäõåuêŸ5ä5æué5å5ç5ä5æõåuçË\Ý
JJH™]\›ˆÈÛÛˆœÙX\˜ÚÜ™\Ý]\˜[È‹\™Ý[Y[ÎˆßHNÂˆYˆ
õçµèuç5åuçŠµä5åué5è5åuèŸ5çµèuç5åuç5æH5ê5æõæuäuåË\Ý
JJH™]\›ˆÈÛÛˆœÙX\˜ÚÛ[ÝÜ˜ÞXÛWÜ›Ý]\È‹\™Ý[Y[ÎˆßHNÂˆYˆ
õèuäõê5å5èµéµæuê5åuêŸ5ê5éµèÈ5å5èµéµæuê5åuê‹Ë\Ý
JJH™]\›ˆÈÛÛˆ˜[Y]WÜÝÜÜÙ\]Y[˜ÙH‹\™Ý[Y[ÎˆßHNÂˆYˆ
õçµå5æuêH5ç5æuäß5çµéõåuçµåuêˆ5ç5æuäß5éõê5åuäH5çË\Ý
JJH™]\›ˆÈÛÛˆœÝYÙÙ\ÝÛ™X\˜žWÜÝÜÈ‹\™Ý[Y[ÎˆßHNÂˆYˆ
õçµåõéõê5çµéõåuê5åuêŸ5åõé5êH5äuê5êuêŸ5äuäõåuéÈ5äuä5æuè5æ5ê5è5æË\Ý
JJH™]\›ˆÈÛÛˆœÙX\˜ÚÝÙX—ÜÛÝ\˜Ù\È‹\™Ý[Y[ÎˆßHNÂˆYˆ
õå5êuåuåuå5ä5é5êuê5åuæuåuêŸ5å5êuåuåuä5åË\Ý
JJH™]\›ˆÈÛÛˆ˜ÛÛ\\™WÛÜ[ÛœÈ‹\™Ý[Y[ÎˆßHNÂˆYˆ
õå5èµê5æõå5æõåuç5ç5êŸ5æõçµå5æuèµç5å5å5æ5æuåuçË\Ý
JJH™]\›ˆÈÛÛˆ˜Ø[Ý[]WÝš\Ù\Ý[X]H‹\™Ý[Y[ÎˆßHNÂˆYˆ
õå5ä5çKŠµèµäõæõè5æ_5ê5èµè5è5åuêˆ5çµæuäõèŸ5çµêµæH5è5äuäõéËË\Ý
JJH™]\›ˆÈÛÛˆ˜ÚXÚ×Ú[™›Ü›X][Û—Ùœ™\Ú™\ÜÈ‹\™Ý[Y[ÎˆßHNÂˆYˆ
õè5èuå5êuåuäKŠµçµåõéõê5ê5èµè5çËŠµçµéõåuê5åuê‹Ë\Ý
JJH™]\›ˆÈÛÛˆœ™]žWÝ[œ™\ÛÛ™YÜ™\ÙX\˜Ú‹\™Ý[Y[ÎˆßHNÂˆYˆ
õåµç–õçõåWKŠµæõè5æuèuåŠŠ5çµç5åuçß5ç5æuè5å
_5çµêµæKŠµè5æõè5èuæuçKŠŠ5çµç5åuçß5ç5æuè5å
_
5çµç5åuçß5ç5æuè5å
KŠµåµç–õçõåWKŠµæõè5æuèuå5é‰õéËõä5æuçËË\Ý
JJH™]\›ˆÈÛÛˆ™Ù]ÛÙÚ[™×ØÚXÚÚ[ˆ‹\™Ý[Y[ÎˆßHNÂˆYˆ
õäuä5æuç5åH5êµä5ê5æuæõæuçKŠŠ5çµç5åuçß5ç5æuè5å
_5êµä5ê5æuæõæKŠŠ5ç5æuè5å5çµç5åuçÊ_5ä5æué5å5æuêuè5æuç_5åµç–õçõåWKŠµæuéµæuä5åŠŠ5çµç5åuçß5ç5æuè5å
_
5çµç5åuçß5ç5æuè5å
KŠµåµç–õçõåWKŠµæuéµæuä5å5çµêµæKŠµæuåuéµä5æuçKŠŠ5çµç5åuçß5ç5æuè5å
KË\Ý
JJH™]\›ˆÈÛÛˆ™Ù]ÛÙÚ[™×Ù]\È‹\™Ý[Y[ÎˆßHNÂˆYˆ
õæõçµå5ç5æuç5åuêŸ5çµèué5ê5ç5æuç5åuê‹Ë\Ý
JJH™]\›ˆÈÛÛˆ˜Ø[Ý[]WÛÙÚ[™×ÛšYÚÈ‹\™Ý[Y[ÎˆßHNÂˆYˆ
õçµåõæuêŠŠ5êuçµåuê5å5åµçµè5å
_5èµç5åuê‹Šµå5åµçµè5å5æõçµå5êuæuç5çµêµæKŠµçµç5åuçËË\Ý
JJH™]\›ˆÈÛÛˆ™Ù]ÜØ]™YÛÙÚ[™×ÜšXÙ\È‹\™Ý[Y[ÎˆßHNÂˆYˆ
õê5êuæuçµê‹ŠŠ5ç5æuè5å5çµç5åuè5åuêŠ_5çµéõåuçµåuê‹Šµç5æuè5åË\Ý
JJH™]\›ˆÈÛÛˆ™Ù]ÛÙÚ[™×ÜÝ[[X\žH‹\™Ý[Y[ÎˆßHNÂˆYˆ
õèµéµæuê5åuê‹Šµç5é5æH5æuåuç_5æõç5å5èµéµæuê5åuêŸ5ä5æuç5åH5èµéµæuê5åuê‹Ë\Ý
JJH™]\›ˆÈÛÛˆ™Ù]ÜÝÜ×ØžWÙ^H‹\™Ý[Y[ÎˆßHNÂˆYˆ
õçµå5æuêH5äuæuåuçWÊ—
ß5êµåuæõè5æuê‹Šµæuåuç_5æuåuçWÊ—
ËŠŠ5çµèuç5åuç5èµéµæuê5åuêŠKË\Ý
JJH™]\›ˆÈÛÛˆ™Ù]Ù^WÜ[ˆ‹\™Ý[Y[ÎˆßHNÂˆYˆ
õêµéõéµæuä_5æõçµå5è5êuä5ê5æuêµê5å5å5åuéµä5åuê‹Ë\Ý
JJH™]\›ˆÈÛÛˆ™Ù]ØYÙ]ÜÝ[[X\žH‹\™Ý[Y[ÎˆßHNÂˆYˆ
õèuæ5æ5åuèKŠŠ5å5åµçµè5åuêŸ5ä5æuêuåuê5æuçJ_5çµå5å5åuåµçµçß5çµå5èµäõæuæuçÈ5ç5ä5ä5åuêuêË\Ý
JJH™]\›ˆÈÛÛˆ™Ù]Ø›ÛÚÚ[™×ÜÝ]\È‹\™Ý[Y[ÎˆßHNÂˆYˆ
õçµêuæuçµåuêŸ5çµæ5ç5åuê‹Ë\Ý
JJH™]\›ˆÈÛÛˆ™Ù]Ý\Ú×ÜÝ]\È‹\™Ý[Y[ÎˆßHNÂˆYˆ
õçµå5åõèuê5çµæuäõèˆ5åõèuê5çµå5è5êuä5ê5ç5å5êuç5æuçKË\Ý
JJH™]\›ˆÈÛÛˆ™Ù]ÛZ\ÜÚ[™×Ù]H‹\™Ý[Y[ÎˆßHNÂˆYˆ
õçµéõåuê5åuêŸ5çµå5çµä5åuçµêŸ5ä5çµæuè5åuê‹Ë\Ý
JJH™]\›ˆÈÛÛˆ™Ù]ÜÛÝ\˜ÙWÜÝ]\È‹\™Ý[Y[ÎˆßHNÂˆYˆ
õé5ê5æ5æH5å5æ5æuåuç5çµêµæH5å5æ5æuåuç5çµå5å5æuèµäß5æõçµå5æuçµæuçKË\Ý
JJH™]\›ˆÈÛÛˆ™Ù]Ýš\Ù]Z[È‹\™Ý[Y[ÎˆßHNÂˆYˆ
õçµåµä—Êµåõä5åuåOõæuê5êµåõåµæuêŸ5äµêuç_5æ5çµé5ê5æ5åuê5åË\Ý
JJH™]\›ˆÈÛÛˆ™Ù]ÝÙX]\ˆ‹\™Ý[Y[ÎˆßHNÂˆYˆ
õêuèµåuê‹Šµé5êµæuåõå5é5êµåuåÈ5å5æuåuç_5çµêµæH5é5êµåuåß5ä5æuê5åuèµæuçKË\Ý
JJH™]\›ˆÈÛÛˆ™Ù]ÛÜ[š[™×ÚÝ\œÈ‹\™Ý[Y[ÎˆßHNÂˆYˆ
õä5åuê5æŸ5çµê5åõéß5éõæuç5åuçµæ5ê5éÖõí‰×OõçŸ5åµçµçÈ5è5èuæuèµå5æõçµåŠµè5åuèuè‹Ë\Ý
JJH™]\›ˆÈÛÛˆ™Ù]Ü›Ý]WÙ\Ý[˜ÙH‹\™Ý[Y[ÎˆßHNÂˆYˆ
õçµåuæõçß5çµåuæõè5åuêŸ5å5æõè5å5ç5æuéµæuä5å5åõèuê5éµæuåuäËË\Ý
JJH™]\›ˆÈÛÛˆ™Ù]Ýš\Ü™XY[™\ÜÈ‹\™Ý[Y[ÎˆßHNÂˆYˆ
õå5åuèuèÈ5èµéµæuê5å5å5åuèué5êˆ5èµéµæuê5å5éµåuê5èµéµæuê5åË\Ý
JJH™]\›ˆÈÛÛˆ˜Ü™X]WÜÝÜ‹\™Ý[Y[ÎˆßHNÂˆYˆ
õêuè5åŠŠ5êµä5ê5æuæŸ5é5ê5æ5æH5å5æ5æuåuç
_5èµäõæõçËŠµêµä5ê5æuæõæuçKË\Ý
JJH™]\›ˆÈÛÛˆ\]WÝš\Ù]Z[È‹\™Ý[Y[ÎˆßHNÂˆYˆ
õêuè5åŠŠ5çµç5åuçß5ç5æuè5å
_5èµäõæõçËŠµç5æuè5åË\Ý
JJH™]\›ˆÈÛÛˆ\]WÛÙÚ[™È‹\™Ý[Y[ÎˆßHNÂˆYˆ
õêuè5åŠµèµéµæuê5å5èµäõæõçËŠµèµéµæuê5åË\Ý
JJH™]\›ˆÈÛÛˆ\]WÜÝÜ‹\™Ý[Y[ÎˆßHNÂˆYˆ
õçµåõéËŠµèµéµæuê5å5å5èuêŠµèµéµæuê5åË\Ý
JJH™]\›ˆÈÛÛˆœ™[[Ý™WÜÝÜ‹\™Ý[Y[ÎˆßHNÂˆYˆ
õå5åuèuèËŠµçµêuæuçµå5éµåuêŠµçµêuæuçµåË\Ý
JJH™]\›ˆÈÛÛˆ˜Ü™X]WÝ\ÚÈ‹\™Ý[Y[ÎˆßHNÂˆYˆ
õèµäõæõçËŠµçµêuæuçµå5èuäµåuêŠµçµêuæuçµåË\Ý
JJH™]\›ˆÈÛÛˆ\]WÝ\ÚÈ‹\™Ý[Y[ÎˆßHNÂˆYˆ
õèµäõæõçËŠµèuæ5æ5åuèKŠµå5åµçµè5å5èuçµçËŠµå5åuåµçµçß5èuçµçËŠµêuåuç5çKË\Ý
JJH™]\›ˆÈÛÛˆ\]WØ›ÛÚÚ[™×ÜÝ]\È‹\™Ý[Y[ÎˆßHNÂˆYˆ
õêuçµåuêŠœXÙKÚY5êuçµåuêŠµçµåµå5å5çµéõåuçKË\Ý
JJH™]\›ˆÈÛÛˆœØ]™WÜXÙWÚY‹\™Ý[Y[ÎˆßHNÂˆYˆ
õê5èµè5çËŠµçµåõéõê5äuäõåuéÈ5êuåuäKŠµè5êµåuè5æuçKË\Ý
JJH™]\›ˆÈÛÛˆœ™Yœ™\ÚÝš\Ü™\ÙX\˜Ú‹\™Ý[Y[ÎˆßHNÂˆ™]\›ˆÈÛÛˆ[\™Ý[Y[ÎˆßHNÂˆBˆ[˜Ý[Ûˆ[™›Ü˜ÙUÛÛ[[
]Y\žKÙ[XÝ[ÛˆHßJHÂˆÛÛœÝ˜[YLˆHÝš[™Ê]Y\žHˆŠNÂˆÛÛœÝHH˜[YL‹ÓØØ[SÝÙ\Ø\ÙJšHŠNÂˆYˆ
õêuèµåuê‹Šµé5êµæuåõå5é5êµåuåÈ5å5æuåuç_5çµêµæH5é5êµåuåß5ä5æuê5åuèµæuçKË\Ý
JJH™]\›ˆ×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßKÙ[XÝ[ÛŠKÈÛÛˆ™Ù]ÛÜ[š[™×ÚÝ\œÈ‹\™Ý[Y[ÎˆßHJNÂˆYˆ
õçµç5åuçß5ç5æuè5å5åõäõêË\Ý
JH	‰ˆÊ5çµåõæuê5èµç5åuêŸ5æuèµç5å5èµåuç5å5æõçµåŠµæõèuèß5æõçµåŠµç5êuç5çJKË\Ý
JJH™]\›ˆ×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßKÙ[XÝ[ÛŠKÈÛÛˆ™Ù]ÚÝ[ÜšXÙ\È‹\™Ý[Y[ÎˆßHJNÂˆYˆ
õçµç5åuçß5ç5æuè5å5åõäõêË\Ý
JH	‰ˆÊ5æõè5æuèuå5æuéµæuä5å5åµç–õçõåWH5å5êŸ5êµä5ê5æuæŸ5çµêµæ_5é‰õéËõä5æuçß5é‰õéËõä5ä5åuæ
KË\Ý
JJH™]\›ˆ×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßKÙ[XÝ[ÛŠKÈÛÛˆõæõè5æuèuå5é‰õéËõä5æuçËË\Ý
JHÈ™Ù]ÛÙÚ[™×ØÚXÚÚ[ˆˆˆ™Ù]ÛÙÚ[™×Ù]\È‹\™Ý[Y[ÎˆßHJNÂˆYˆ
ÊÎµçµê5åõéß5éõæuç5åuçµæ5ê5éÖõí‰×OõçŸ5åµçµçÈ5è5èuæuèµå5æõçµåŠŠÎµè5åuèuèŸ5çµê5åõéß5éÖõí‰×OõçŠ_ÛÛÙÛH›Ý]\ÊKÚK\Ý
˜[YLŠJH™]\›ˆ×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßKÙ[XÝ[ÛŠKÈÛÛˆ™Ù]Ü›Ý]WÙ\Ý[˜ÙH‹\™Ý[Y[ÎˆßHJNÂˆ™]\›ˆÙ[XÝ[ÛŽÂˆB‚ˆËÈÜ˜ËÚXY\‹\[™[šœÂˆ[˜Ý[Ûˆ[Ý[XY\”[™[
ØËÚ[ŠHÂˆÛÛœÝXY\ˆHØËœ]Y\žTÙ[XÝÜŠ‹œÚ]KZXY\ˆŠKXØÛÝ[ˆHØËœ]Y\žTÙ[XÝÜŠˆØXØÛÝ[ŠK˜]šYØ][ÛŒˆHØËœ]Y\žTÙ[XÝÜŠˆÝXœÈŠNÂˆYˆ
ZXY\ˆXXØÛÝ[ŠH™]\›ŽÂˆÛÛœÝ[™[HØË˜Ü™X]Q[[Y[
™]ˆŠK\Ý[˜][ÛÛÛ›ÛÈHØË˜Ü™X]Q[[Y[
™]ˆŠNÂˆ[™[šYH™›Ø][™ËZXY\ˆŽÂˆ\Ý[˜][ÛÛÛ›ÛËšYH™\Ý[˜][Û‹XÛÛ›ÛÈŽÂˆXY\‹˜™Y›Ü™J[™[
NÂˆ[™[˜\[™
XY\‹\Ý[˜][ÛÛÛ›ÛË‹‹›˜]šYØ][ÛŒˆÈÛ˜]šYØ][ÛŒ—Hˆ×KXØÛÝ[ŠNÂˆ[™[š[™\H˜[ÙNÂˆÛÛœÝYX\Ý\™HH

HOˆÂˆÛÛœÝZYÚHX]˜ÙZ[
[™[™Ù]›Ý[™[™ÐÛY[™XÝ

KšZYÚ
NÂˆYˆ
ZYÚˆ
HØË™ØÝ[Y[[[Y[œÝ[KœÙ]›Ü\J‹KXÛY[ZXY\‹\ÜXÙH‹ZYÚ
ÈœŠNÂˆNÂˆYˆ
Ú[‹”™\Ú^™SØœÙ\™\ŠH™]ÈÚ[‹”™\Ú^™SØœÙ\™\ŠYX\Ý\™JK›ØœÙ\™J[™[
NÂˆYX\Ý\™J
NÂˆB‚ˆËÈÜ˜ËØ]]šœÂˆ˜\ˆ›ÝšY\“˜[Y\ÈHÊˆ×ÔT‘W×È
‹È™]ÈÙ]
È™ÛÛÙÛH‹™˜XÙX›ÛÚÈ—JNÂˆ˜\ˆÛØÚX[\œ›ÜˆH

HOˆ\œ›ÜŠµç5ä5è5æuêµçÈ5ç5å5êuç5æuçH5ä5êˆ5å5æõè5æuèuåˆ5æuêH5ç5è5èuåuêˆ5êuåuäH5ä5åH5ç5é5è5åuêˆ5ç5êµçµæuæõåˆŠNÂˆ[˜Ý[ÛˆÜ™X]T›ÝšY\”ØY™TÝÜ˜YÙJÝÜ˜YÙJHÂˆÛÛœÝÛX[ˆH
˜[YLŠHOˆÂˆYˆ
\[Ùˆ˜[YLˆOOHœÝš[™ÈŠH™]\›ˆ˜[YLŽÂˆžHÂˆÛÛœÝ\œÙYH”ÓÓ‹œ\œÙJ˜[YLŠNÂˆYˆ
\œÙY	‰ˆ\[Ùˆ\œÙYOOH›Øš™XÝˆ	‰ˆP\œ˜^Kš\Ð\œ˜^J\œÙY
JHÂˆ[]H\œÙYœ›ÝšY\—ÝÚÙ[ŽÂˆ[]H\œÙYœ›ÝšY\—Ü™Yœ™\ÚÝÚÙ[ŽÂˆ™]\›ˆ”ÓÓ‹œÝš[™ÚYžJ\œÙY
NÂˆBˆHØ]Ú
JHÂˆBˆ™]\›ˆ˜[YLŽÂˆNÂˆ™]\›ˆÂˆÙ]][JÙ^JHÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆÛÛœÝ˜[YLˆHZY[ÝÜ˜YÙK™Ù]][JÙ^JKØY™HHÛX[Š˜[YLŠNÂˆYˆ
ØY™HOOH˜[YLŠHZY[ÝÜ˜YÙKœÙ]][JÙ^KØY™JNÂˆ™]\›ˆØY™NÂˆJNÂˆKˆÙ]][Nˆ
Ù^K˜[YLŠHOˆÝÜ˜YÙKœÙ]][JÙ^KÛX[Š˜[YLŠJKˆ™[[Ý™R][Nˆ
Ù^JHOˆÝÜ˜YÙKœ™[[Ý™R][JÙ^JBˆNÂˆBˆ[˜Ý[ÛˆÜ™X]P]]
ÛY[™Y\™XÝÊHÂˆ]Ø[˜XÚÒ[‘›YÚÂˆÛÛœÝ\ÝYT“H

HOˆÂˆÛÛœÝ\›H™]ÈT“
™Y\™XÝÊNÂˆYˆ
\›\Ù\›˜[YH\›œ\ÜÝÛÜ™J\›œ›ÝØÛÛOOHšÎˆˆ\›œ›ÝØÛÛOOHšˆˆ	‰ˆÈ›ØØ[ÜÝ‹ŒLËŒŒŒH—Kš[˜ÛY\Ê\›šÜÝ˜[YJJJH›ÝÈÛØÚX[\œ›ÜŠ
NÂˆ\›œÙX\˜ÚHˆŽÂˆ\›š\ÚHˆŽÂˆ™]\›ˆ\›ÂˆNÂˆÛÛœÝØ[˜XÚÕT“H

HOˆÂˆÛÛœÝ\›H\ÝYT“

NÂˆ\›œÙX\˜Ú\˜[\ËœÙ]
˜]]ØØ[˜XÚÈ‹ŒHŠNÂˆ™]\›ˆ\›š™YŽÂˆNÂˆÛÛœÝœÈH
˜[YJHOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆžHÂˆÛÛœÝÈ]K\œ›ÜˆHHZY[ÛY[œœÊ˜[YJNÂˆYˆ
\œ›ÜˆY]H\[Ùˆ]HOOH›Øš™XÝŠH›ÝÈÛØÚX[\œ›ÜŠ
NÂˆ™]\›ˆ]NÂˆHØ]Ú
JHÂˆ›ÝÈÛØÚX[\œ›ÜŠ
NÂˆBˆJNÂˆÛÛœÝÙÚ[“Ü[ÛœÈH

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆÛÛœÝ]HHZY[œÊ˜Ý\ÝÛY\—ÛÙÚ[—ÛÜ[ÛœÈŠNÂˆYˆ
VÈ›YØXÞH‹œÛØÚX[—Kš[˜ÛY\Ê]K›[ÙJJH›ÝÈÛØÚX[\œ›ÜŠ
NÂˆ™]\›ˆÈ[ÙNˆ]K›[ÙK›ÝšY\œÎˆ]K›[ÙHOOHœÛØÚX[ˆ	‰ˆ\œ˜^Kš\Ð\œ˜^J]Kœ›ÝšY\œÊHÈË‹‹›™]ÈÙ]
]Kœ›ÝšY\œË™š[\Š

HOˆ›ÝšY\“˜[Y\Ëš\Ê
JJWHˆ×HNÂˆJNÂˆÛÛœÝÙÐØ[H
›ŠHOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆžHÂˆÛÛœÝ™\Ý[HZY[›Š
NÂˆYˆ
™\Ý[OH[È›ÚYˆ™\Ý[™\œ›ÜŠH›ÝÈÛØÚX[\œ›ÜŠ
NÂˆ™]\›ˆ™\Ý[OH[È›ÚYˆ™\Ý[™]NÂˆHØ]Ú
JHÂˆ›ÝÈÛØÚX[\œ›ÜŠ
NÂˆBˆJNÂˆ™]\›ˆÂˆÙÚ[“Ü[ÛœËˆÝ\ÝÛY\]]Ý]\Ê
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆÛÛœÝ]HHZY[œÊ˜Ý\ÝÛY\—Ø]]ÜÝ]\ÈŠNÂˆYˆ
VÈ›YØXÞH‹œÛØÚX[—Kš[˜ÛY\Ê]K›[ÙJHVÈ˜[ÝÙY‹›ZYÜ˜][Û—Ü™\]Z\™Y‹›Ø]]Ü™\]Z\™Y‹˜›ØÚÙY—Kš[˜ÛY\Ê]K˜XØÙ\ÜÊJH›ÝÈÛØÚX[\œ›ÜŠ
NÂˆ™]\›ˆ×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßK]JKÈZYÜ˜][Û”[™[™Îˆ]K›ZYÜ˜][Û”[™[™ÈOOHYKØ[“[šÑÛÛÙÛNˆ]K˜Ø[“[šÑÛÛÙÛHOOHYHJNÂˆJNÂˆKˆÚYÛ’[”›ÝšY\Š›ÝšY\ŠHÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆYˆ
\›ÝšY\“˜[Y\Ëš\Ê›ÝšY\ŠJH›ÝÈÛØÚX[\œ›ÜŠ
NÂˆÛÛœÝÜ[ÛœÈHZY[ÙÚ[“Ü[ÛœÊ
NÂˆYˆ
Ü[ÛœË›[ÙHOOHœÛØÚX[ˆ[Ü[ÛœËœ›ÝšY\œËš[˜ÛY\Ê›ÝšY\ŠJH›ÝÈÛØÚX[\œ›ÜŠ
NÂˆZY[ÙÐØ[


HOˆÛY[˜]]œÚYÛ’[•Ú]Ð]]
È›ÝšY\‹Ü[ÛœÎˆÈ™Y\™XÝÎˆØ[˜XÚÕT“

HHJJNÂˆJNÂˆKˆ™YÚ[‘ÛÛÙÛS[šÊ
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆÛÛœÝ\›HØ[˜XÚÕT“

NÂˆZY[œÊ˜Ý\ÝÛY\—Û[š×Ø™YÚ[ˆŠNÂˆZY[ÙÐØ[


HOˆÛY[˜]]›[šÒY[]JÈ›ÝšY\Žˆ™ÛÛÙÛH‹Ü[ÛœÎˆÈ™Y\™XÝÎˆ\›HJJNÂˆJNÂˆKˆ™\Ý[YQÛÛÙÛS[šÊ
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆZY[œÊ˜Ý\ÝÛY\—Û[š×Ü™\Ý[YHŠNÂˆÛÛœÝÜ[ÛœÈHZY[ÙÚ[“Ü[ÛœÊ
NÂˆYˆ
Ü[ÛœË›[ÙHOOHœÛØÚX[ˆ[Ü[ÛœËœ›ÝšY\œËš[˜ÛY\Ê™ÛÛÙÛHŠJH›ÝÈÛØÚX[\œ›ÜŠ
NÂˆZY[ÙÐØ[


HOˆÛY[˜]]œÚYÛ’[•Ú]Ð]]
È›ÝšY\Žˆ™ÛÛÙÛH‹Ü[ÛœÎˆÈ™Y\™XÝÎˆØ[˜XÚÕT“

HHJJNÂˆJNÂˆKˆÛÛ\]QÛÛÙÛS[šÊ
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆÛÛœÝ™\Ý[HZY[œÊ˜Ý\ÝÛY\—Û[š×ØÛÛ\]HŠNÂˆZY[ÙÐØ[


HOˆÛY[˜]]œ™Yœ™\ÚÙ\ÜÚ[ÛŠ
JNÂˆ™]\›ˆ™\Ý[ÂˆJNÂˆKˆÛÛ\]SÐ]]Ø[˜XÚÊ
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë\™Ý[Y[Ë[˜Ý[ÛŠˆ
È\›H

ØŠHOˆ
ØˆHÛØ˜[\Ë›ØØ][ÛŠHOH[È›ÚYˆØ‹š™YŠJ
K\ÝÜžHHÛØ˜[\Ëš\ÝÜžHHHßJHÂˆÛÛœÝÝ\œ™[H™]ÈT“
\›
NÂˆÛÛœÝœ˜YÛY[H™]ÈT“ÙX\˜Ú\˜[\ÊÝ\œ™[š\ÚœÛXÙJJJNÂˆÛÛœÝ]]Ù^\ÈHÈ˜ÛÙH‹œÝ]H‹™\œ›Üˆ‹™\œ›Ü—ØÛÙH‹™\œ›Ü—Ù\ØÜš\[Ûˆ‹˜]]ØØ[˜XÚÈ‹˜XØÙ\Ü×ÝÚÙ[ˆ‹œ™Yœ™\ÚÝÚÙ[ˆ‹œ›ÝšY\—ÝÚÙ[ˆ‹œ›ÝšY\—Ü™Yœ™\ÚÝÚÙ[ˆ‹ÚÙ[—Ý\H‹™^\™\×Ú[ˆ‹™^\™\×Ø]‹\H‹œØ—Ù›Ý×ÚY—NÂˆÛÛœÝ[™YH]]Ù^\ËœÛÛYJ
Ù^JHOˆÝ\œ™[œÙX\˜Ú\˜[\Ëš\ÊÙ^JHœ˜YÛY[š\ÊÙ^JJNÂˆYˆ
Z[™Y
H™]\›ˆÈ[™Yˆ˜[ÙHNÂˆÛÛœÝ\ÝYH\ÝYT“

NÂˆÛÛœÝ[˜[YØØ][ÛˆHÝ\œ™[›ÜšYÚ[ˆOOH\ÝY›ÜšYÚ[ˆÝ\œ™[œ]˜[YHOOH\ÝYœ]˜[YHHXÝ\œ™[\Ù\›˜[YHHXÝ\œ™[œ\ÜÝÛÜ™ÂˆÛÛœÝÛÙHHÝ\œ™[œÙX\˜Ú\˜[\Ë™Ù]
˜ÛÙHŠKÛÝ[HÝ\œ™[œÙX\˜Ú\˜[\Ë™Ù][
˜ÛÙHŠK›[™ÝÂˆÛÛœÝ›ÝÒYHÝ\œ™[œÙX\˜Ú\˜[\Ë™Ù]
œØ—Ù›Ý×ÚYŠNÂˆÛÛœÝ\Ñ\œ›ÜˆHÈ™\œ›Üˆ‹™\œ›Ü—ØÛÙH‹™\œ›Ü—Ù\ØÜš\[Ûˆ—KœÛÛYJ
Ù^JHOˆÝ\œ™[œÙX\˜Ú\˜[\Ëš\ÊÙ^JHœ˜YÛY[š\ÊÙ^JJNÂˆÛÛœÝYZ[ˆHÝ\œ™[œÙX\˜Ú\˜[\Ë™Ù]
›[ÙHŠHOOH˜YZ[ˆŽÂˆÛÛœÝ™XÛÝ™\žHHZ[˜[YØØ][Ûˆ	‰ˆXYZ[ˆ	‰ˆZ\Ñ\œ›Üˆ	‰ˆXÝ\œ™[œÙX\˜Ú\˜[\Ëš\Ê˜]]ØØ[˜XÚÈŠH	‰ˆXÝ\œ™[œÙX\˜Ú\˜[\Ëš\Ê˜ÛÙHŠH	‰ˆYœ˜YÛY[š\Ê˜ÛÙHŠH	‰ˆœ˜YÛY[™Ù]
\HŠHOOHœ™XÛÝ™\žHˆ	‰ˆœ˜YÛY[™Ù][
\HŠK›[™ÝOOHH	‰ˆœ˜YÛY[™Ù][
˜XØÙ\Ü×ÝÚÙ[ˆŠK›[™ÝOOHH	‰ˆHYœ˜YÛY[™Ù]
˜XØÙ\Ü×ÝÚÙ[ˆŠH	‰ˆœ˜YÛY[™Ù][
œ™Yœ™\ÚÝÚÙ[ˆŠK›[™ÝOOHH	‰ˆHYœ˜YÛY[™Ù]
œ™Yœ™\ÚÝÚÙ[ˆŠH	‰ˆVÈ˜XØÙ\Ü×ÝÚÙ[ˆ‹œ™Yœ™\ÚÝÚÙ[ˆ‹œ›ÝšY\—ÝÚÙ[ˆ‹œ›ÝšY\—Ü™Yœ™\ÚÝÚÙ[ˆ—KœÛÛYJ
Ù^JHOˆÝ\œ™[œÙX\˜Ú\˜[\Ëš\ÊÙ^JJH	‰ˆYœ˜YÛY[š\Êœ›ÝšY\—ÝÚÙ[ˆŠH	‰ˆYœ˜YÛY[š\Êœ›ÝšY\—Ü™Yœ™\ÚÝÚÙ[ˆŠH	‰ˆYœ˜YÛY[š\Ê˜]]ØØ[˜XÚÈŠNÂˆÛÛœÝ™XÛÝ™\žTÙ\ÜÚ[ÛˆH™XÛÝ™\žHÈÈXØÙ\Ü×ÝÚÙ[Žˆœ˜YÛY[™Ù]
˜XØÙ\Ü×ÝÚÙ[ˆŠK™Yœ™\ÚÝÚÙ[Žˆœ˜YÛY[™Ù]
œ™Yœ™\ÚÝÚÙ[ˆŠHHˆ[ÂˆÛÛœÝ[˜[YH[˜[YØØ][ÛˆYZ[ˆ\Ñ\œ›Üˆœ˜YÛY[š\Ê˜XØÙ\Ü×ÝÚÙ[ˆŠHÝ\œ™[œÙX\˜Ú\˜[\Ëš\Ê˜XØÙ\Ü×ÝÚÙ[ˆŠHÝ\œ™[œÙX\˜Ú\˜[\Ëš\Êœ™Yœ™\ÚÝÚÙ[ˆŠHœ˜YÛY[š\Êœ™Yœ™\ÚÝÚÙ[ˆŠNÂˆ›Üˆ
ÛÛœÝÙ^HÙˆ]]Ù^\ÊHÂˆÝ\œ™[œÙX\˜Ú\˜[\Ë™[]JÙ^JNÂˆœ˜YÛY[™[]JÙ^JNÂˆBˆÝ\œ™[š\ÚHœ˜YÛY[ÔÝš[™Ê
HÈˆÈˆ
Èœ˜YÛY[ÔÝš[™Ê
HˆˆŽÂˆ\ÝÜžHOH[È›ÚYˆ\ÝÜžKœ™\XÙTÝ]J[ˆ‹Ý\œ™[š™YŠNÂˆYˆ
\™XÛÝ™\žH	‰ˆ
[˜[YXÛÙHÛÝ[OOHJHØ[˜XÚÒ[‘›YÚ
H›ÝÈÛØÚX[\œ›ÜŠ
NÂˆØ[˜XÚÒ[‘›YÚH™XÛÝ™\žHÈÙÐØ[


HOˆÛY[˜]]œÙ]Ù\ÜÚ[ÛŠ™XÛÝ™\žTÙ\ÜÚ[ÛŠJHˆÙÐØ[


HOˆ›ÝÒYÈÛY[˜]]™^Ú[™ÙPÛÙQ›Ü”Ù\ÜÚ[ÛŠÛÙKÈ›ÝÒYJHˆÛY[˜]]™^Ú[™ÙPÛÙQ›Ü”Ù\ÜÚ[ÛŠÛÙJJNÂˆžHÂˆÛÛœÝ™\Ý[HZY[Ø[˜XÚÒ[‘›YÚÂˆYˆ
™XÛÝ™\žH	‰ˆJ™\Ý[OH[È›ÚYˆ™\Ý[œÙ\ÜÚ[ÛŠJH›ÝÈÛØÚX[\œ›ÜŠ
NÂˆ™]\›ˆ™XÛÝ™\žH
™\Ý[OH[È›ÚYˆ™\Ý[œ™Y\™XÝ\JHOOHœ™XÛÝ™\žHˆÈÈ[™YˆYK™XÛÝ™\žNˆYHHˆÈ[™YˆYHNÂˆHš[˜[HÂˆØ[˜XÚÒ[‘›YÚH[ÂˆBˆJNÂˆKˆ™\]Y\Ý[šÊ[XZ[
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆ[XZ[H[XZ[š[J
NÂˆYˆ
K×–×—ÐJÐ×—ÐJ×–×—ÐJÉË\Ý
[XZ[
JH›ÝÈ\œ›ÜŠµæõêµåuäuêˆ5çµæuæuç5ç5ä5êµéõæuè5åŠNÂˆÛÛœÝÈ\œ›ÜˆHHZY[ÛY[˜]]œÚYÛ’[•Ú]Ý
È[XZ[Ü[ÛœÎˆÈÚÝ[Ü™X]U\Ù\Žˆ˜[ÙK[XZ[™Y\™XÝÎˆ™Y\™XÝÈHJNÂˆYˆ
\œ›ÜŠH›ÝÈ\œ›ÜŠ\œ›Ü‹›Y\ÜØYÙJNÂˆJNÂˆKˆÚYÛ•\
[XZ[\ÜÝÛÜ™›Ùš[JHÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆYˆ
\ÜÝÛÜ™›[™ÝLŠH›ÝÈ\œ›ÜŠµè5äõê5êuêˆ5èuæuèuçµå5äuä5åuê5æˆLˆ5êµåuåuæuçH5ç5é5åõåuêˆŠNÂˆÛÛœÝÈ\œ›ÜˆHHZY[ÛY[˜]]œÚYÛ•\
È[XZ[ˆ[XZ[š[J
K\ÜÝÛÜ™Ü[ÛœÎˆÈ[XZ[™Y\™XÝÎˆ™Y\™XÝË]NˆÈ›Ùš[HHHJNÂˆYˆ
\œ›ÜŠH›ÝÈ\œ›ÜŠ\œ›Ü‹›Y\ÜØYÙJNÂˆJNÂˆKˆÚYÛ“Ý]ØØ[

HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆÛÛœÝÈ\œ›ÜˆHHZY[ÛY[˜]]œÚYÛ“Ý]
ÈØÛÜNˆ›ØØ[ˆJNÂˆYˆ
\œ›ÜŠH›ÝÈ\œ›ÜŠ\œ›Ü‹›Y\ÜØYÙJNÂˆJNÂˆKˆÚYÛ’[YZ[Š\Ù\›˜[YK\ÜÝÛÜ™
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆÛÛœÝÈ]K\œ›ÜˆHHZY[ÛY[™[˜Ý[ÛœËš[›ÚÙJ˜YZ[‹X]]‹È›ÙNˆÈXÝ[ÛŽˆœÚYÛš[ˆ‹\Ù\›˜[YNˆ\Ù\›˜[YKš[J
KÓÝÙ\Ø\ÙJ
K\ÜÝÛÜ™HJNÂˆYˆ
\œ›Üˆ
]HOH[È›ÚYˆ]K™\œ›ÜŠHJ]HOH[È›ÚYˆ]K˜XØÙ\Ü×ÝÚÙ[ŠHJ]HOH[È›ÚYˆ]Kœ™Yœ™\ÚÝÚÙ[ŠJH›ÝÈ\œ›ÜŠµêuçH5å5çµêuêµçµêH5ä5åH5å5èuæuèuçµå5êuäµåuæuæuçK5å5åõêuäuåuçÈ5ä5æuè5åH5é5èµæuç5ä5åH5êuæuêH5ç5å5çµêµæuçÈ5ç5é5è5æH5è5æuèuæuåuçÈ5è5åuèuèÈŠNÂˆÛÛœÝ™\Ý[HZY[ÛY[˜]]œÙ]Ù\ÜÚ[ÛŠÈXØÙ\Ü×ÝÚÙ[Žˆ]K˜XØÙ\Ü×ÝÚÙ[‹™Yœ™\ÚÝÚÙ[Žˆ]Kœ™Yœ™\ÚÝÚÙ[ˆJNÂˆYˆ
™\Ý[™\œ›ÜŠH›ÝÈ\œ›ÜŠµç5ä5è5æuêµçÈ5ç5å5êuç5æuçH5æõè5æuèuêˆ5çµè5å5çŠNÂˆJNÂˆKˆ™\]Y\ÝYZ[”™\Ù]
\Ù\›˜[YJHÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆÛÛœÝÈ\œ›ÜˆHHZY[ÛY[™[˜Ý[ÛœËš[›ÚÙJ˜YZ[‹X]]‹È›ÙNˆÈXÝ[ÛŽˆœ™\Ù]‹\Ù\›˜[YNˆ\Ù\›˜[YKš[J
KÓÝÙ\Ø\ÙJ
HHJNÂˆYˆ
\œ›ÜŠH›ÝÈ\œ›ÜŠµç5ä5è5æuêµçÈ5ç5êuç5åuåÈ5éõæuêuåuê5æõê5äµèˆŠNÂˆJNÂˆKˆÚYÛ’[Š[XZ[\ÜÝÛÜ™
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆÛÛœÝÈ\œ›ÜˆHHZY[ÛY[˜]]œÚYÛ’[•Ú]\ÜÝÛÜ™
È[XZ[ˆ[XZ[š[J
K\ÜÝÛÜ™JNÂˆYˆ
\œ›ÜŠH›ÝÈ\œ›ÜŠ\œ›Ü‹›Y\ÜØYÙJNÂˆJNÂˆKˆÚ[™ÙT\ÜÝÛÜ™
\ÜÝÛÜ™
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆÛÛœÝÈ\œ›ÜˆHHZY[ÛY[˜]]\]U\Ù\ŠÈ\ÜÝÛÜ™JNÂˆYˆ
\œ›ÜŠH›ÝÈ\œ›ÜŠ\œ›Ü‹›Y\ÜØYÙJNÂˆJNÂˆKˆ™\]Y\Ý™\Ù]
[XZ[
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆÛÛœÝÈ\œ›ÜˆHHZY[ÛY[˜]]œ™\Ù]\ÜÝÛÜ™›Ü‘[XZ[
[XZ[š[J
KÈ™Y\™XÝÈJNÂˆYˆ
\œ›ÜŠH›ÝÈ\œ›ÜŠ\œ›Ü‹›Y\ÜØYÙJNÂˆJNÂˆKˆÙ\ÜÚ[ÛŠ
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆÛÛœÝÈ]K\œ›ÜˆHHZY[ÛY[˜]]™Ù]Ù\ÜÚ[ÛŠ
NÂˆYˆ
\œ›ÜŠH›ÝÈ\œ›ÜŠ\œ›Ü‹›Y\ÜØYÙJNÂˆ™]\›ˆ]KœÙ\ÜÚ[ÛŽÂˆJNÂˆKˆÚYÛ“Ý]

HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆÛÛœÝÈ\œ›ÜˆHHZY[ÛY[˜]]œÚYÛ“Ý]

NÂˆYˆ
\œ›ÜŠH›ÝÈ\œ›ÜŠ\œ›Ü‹›Y\ÜØYÙJNÂˆJNÂˆKˆÛÚ[™ÙJØ[˜XÚÊHÂˆ™]\›ˆÛY[˜]]›Û]]Ý]PÚ[™ÙJ
]™[Ù\ÜÚ[ÛŒŠHOˆÂˆÙ][Y[Ý]


HOˆØ[˜XÚÊÙ\ÜÚ[ÛŒ‹]™[
K
NÂˆJK™]KœÝXœØÜš\[ÛŽÂˆBˆNÂˆB‚ˆËÈÜ˜ËØÝ\ÝÛY\‹\ÛØÚX[X]]šœÂˆ˜\ˆX™[ÍHÈÛÛÙÛNˆµå5çµêuæˆ5èµçHÛÛÙÛH‹˜XÙX›ÛÚÎˆµå5çµêuæˆ5èµçH˜XÙX›ÛÚÈˆNÂˆ˜\ˆ˜Z[\™HHµç5ä5è5æuêµçÈ5ç5å5êuç5æuçH5ä5êˆ5å5é5èµåuç5åˆ5è5èuåH5êuåuäH5ä5åH5é5è5åH5ç5êµçµæuæõåˆŽÂˆ[˜Ý[ÛˆØÜ™Y[Š›ÛÝ]KÛ”Ý]\ÊHÂˆ]\ÜÜÙYH˜[ÙK\ÞLˆH˜[ÙNÂˆ›ÛÝš[›™\’SHˆŽÂˆÛÛœÝØÈH›ÛÝ›ÝÛ™\‘ØÝ[Y[Ø\™HØË˜Ü™X]Q[[Y[
œÙXÝ[ÛˆŠNÂˆØ\™˜Û\ÜÓ˜[YHH˜Ý\ÝÛY\‹\ÛØÚX[X]]ŽÂˆØ\™™\ˆHœŽÂˆØ\™œÙ]]šX]J˜\šXK[X™[‹]JNÂˆÛÛœÝXY[™ÈHØË˜Ü™X]Q[[Y[
šHŠNÂˆXY[™Ë^ÛÛ[H]NÂˆØ\™˜\[™
XY[™ÊNÂˆÛÛœÝY\ÜØYÙHHØË˜Ü™X]Q[[Y[
œŠNÂˆY\ÜØYÙK˜Û\ÜÓ˜[YHHœÛØÚX[X]]\Ý]\ÈŽÂˆY\ÜØYÙKœÙ]]šX]Jœ›ÛH‹œÝ]\ÈŠNÂˆY\ÜØYÙKœÙ]]šX]J˜\šXK[]™H‹œÛ]HŠNÂˆØ\™˜\[™
Y\ÜØYÙJNÂˆ›ÛÝ˜\[™
Ø\™
NÂˆÛÛœÝÝ]\ÌˆH
^
HOˆÂˆYˆ
Y\ÜÜÙY
HÂˆY\ÜØYÙK^ÛÛ[H^ÂˆÛ”Ý]\ÈOH[È›ÚYˆÛ”Ý]\Ê^
NÂˆBˆNÂˆÛÛœÝ^ÈH
˜[YLŠHOˆÂˆÛÛœÝHØË˜Ü™X]Q[[Y[
œŠNÂˆ^ÛÛ[H˜[YLŽÂˆØ\™š[œÙ\™Y›Ü™JY\ÜØYÙJNÂˆ™]\›ˆÂˆNÂˆÛÛœÝ]ÛˆH
X™[XÝ[ÛŒ‹X\šÙ\ŠHOˆÂˆÛÛœÝˆHØË˜Ü™X]Q[[Y[
˜]ÛˆŠNÂˆ‹\HH˜]ÛˆŽÂˆ‹^ÛÛ[HX™[ÂˆYˆ
X\šÙ\ŠH‹œÙ]]šX]JX\šÙ\‹ˆŠNÂˆ‹˜Y]™[\Ý[™\Š˜ÛXÚÈ‹

HOˆÂˆYˆ
Y\ÜÜÙY	‰ˆX\ÞLŠHXÝ[ÛŒŠ
NÂˆJNÂˆØ\™š[œÙ\™Y›Ü™J‹Y\ÜØYÙJNÂˆ™]\›ˆŽÂˆNÂˆÛÛœÝ[ˆH
XÝ[ÛŒŠHOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆYˆ
\ÜÜÙY\ÞLŠH™]\›ŽÂˆ\ÞLˆHYNÂˆØ\™œÙ]]šX]J˜\šXKX\ÞH‹YHŠNÂˆØ\™œ]Y\žTÙ[XÝÜ[
˜]Û‹[œ]ŠK™›Ü‘XXÚ

[
HOˆ[™\ØX›YHYJNÂˆÝ]\ÌŠµäuêµå5ç5æuæ¸ )ˆŠNÂˆžHÂˆZY[XÝ[ÛŒŠ
NÂˆYˆ
Y\ÜÜÙY
HÝ]\ÌŠˆŠNÂˆHØ]Ú
JHÂˆÝ]\ÌŠ˜Z[\™JNÂˆHš[˜[HÂˆYˆ
Y\ÜÜÙY
HÂˆ\ÞLˆH˜[ÙNÂˆØ\™œ™[[Ý™P]šX]J˜\šXKX\ÞHŠNÂˆØ\™œ]Y\žTÙ[XÝÜ[
˜]Û‹[œ]ŠK™›Ü‘XXÚ

[
HOˆ[™\ØX›YH˜[ÙJNÂˆBˆBˆJNÂˆ™]\›ˆÈØ\™ØË^ˆ^Ë]Û‹Ý]\ÎˆÝ]\Ì‹[‹[]™Nˆ

HOˆY\ÜÜÙY\ÜÜÙNˆ

HOˆÂˆ\ÜÜÙYHYNÂˆØ\™œ™[[Ý™J
NÂˆHNÂˆBˆ[˜Ý[Ûˆ[Ý[Ý\ÝÛY\”ÛØÚX[ÙÚ[ŠÈ›ÛÝ]]ˆ]]‹ÛYZ[‹Û“YØXÞSZYÜ˜][Û‹Û”Ý]\ÈJHÂˆÛÛœÝZHHØÜ™Y[Š›ÛÝµæõè5æuèuêˆ5ç5éõåuåõåuêˆ‹Û”Ý]\ÊNÂˆZK^
µå5êµåõäuê5åuêˆ5ç5åõêuäuåuçÈ5éõæuæuçH5äuä5çµéµèµåuêˆ5èué5éÈ5åµå5åuêˆ5çµä5åuêuêˆ5å5ê5êuçµå5éµæuäuåuê5æuêˆ5ä5æuè5å5åµçµæuè5åˆŠNÂˆZKœÝ]\ÊµäuåuäõéõæuçH5ä5é5êuê5åuæuåuêˆ5æõè5æuèuå8 )ˆŠNÂˆYˆ
ÛYZ[ŠHZK˜]ÛŠµæõè5æuèuêˆ5çµè5å5ç‹ÛYZ[‹™]KXYZ[‹[ÙÚ[ˆŠNÂˆÛÛœÝÜ[“ZYÜ˜][ÛˆH
Ý\
HOˆÂˆYˆ
]ZK˜[]™J
HZK˜Ø\™œ]Y\žTÙ[XÝÜŠ™›Ü›HŠJH™]\›ŽÂˆÝ\šY[ˆHYNÂˆZK^
µçµèµäuê5åõäõ¯µé5èµçµæH5ç5æõè5æuèuå5èµçHÛÛÙÛHŠNÂˆZK^
µç5ç5éõåuåÈ5éõæuæuçH5äuç5äuäÎˆ5æuêH5ç5å5åµäõå5åuêˆ5äuäõåuä5ê5åuäuèuæuèuçµå5å5éõæuæuçµæuçH5æõäõæH5ç5éõêuêÛÛÙÛH5ç5ä5åuêµåH5åõêuäuåuçËˆŠNÂˆÛÛœÝ›Ü›HHZK™ØË˜Ü™X]Q[[Y[
™›Ü›HŠNÂˆÛÛœÝ[XZ[X™[HZK™ØË˜Ü™X]Q[[Y[
›X™[ŠNÂˆ[XZ[X™[^ÛÛ[Hµäõåuä5ê5ä5ç5éõæ5ê5åuè5æH5êuç5å5åõêuäuåuçÈ5å5éõæuæuçHŽÂˆÛÛœÝ[XZ[HZK™ØË˜Ü™X]Q[[Y[
š[œ]ŠNÂˆ[XZ[\HH™[XZ[ŽÂˆ[XZ[›˜[YHH™[XZ[ŽÂˆ[XZ[˜]]ØÛÛ\]HH\Ù\›˜[YHŽÂˆ[XZ[œ™\]Z\™YHYNÂˆ[XZ[™\ˆH›ˆŽÂˆ[XZ[X™[˜\[™
[XZ[
NÂˆÛÛœÝ\ÜÝÛÜ™X™[HZK™ØË˜Ü™X]Q[[Y[
›X™[ŠNÂˆ\ÜÝÛÜ™X™[^ÛÛ[Hµå5èuæuèuçµå5å5éõæuæuçµêˆ5ç5éµåuê5æˆ5å5çµèµäuêŽÂˆÛÛœÝ\ÜÝÛÜ™HZK™ØË˜Ü™X]Q[[Y[
š[œ]ŠNÂˆ\ÜÝÛÜ™\HHœ\ÜÝÛÜ™ŽÂˆ\ÜÝÛÜ™›˜[YHHœ\ÜÝÛÜ™ŽÂˆ\ÜÝÛÜ™˜]]ØÛÛ\]HH˜Ý\œ™[\\ÜÝÛÜ™ŽÂˆ\ÜÝÛÜ™œ™\]Z\™YHYNÂˆ\ÜÝÛÜ™™\ˆH›ˆŽÂˆ\ÜÝÛÜ™X™[˜\[™
\ÜÝÛÜ™
NÂˆÛÛœÝÝX›Z]HZK™ØË˜Ü™X]Q[[Y[
˜]ÛˆŠNÂˆÝX›Z]\HHœÝX›Z]ŽÂˆÝX›Z]^ÛÛ[Hµä5æuçµåuêˆ5å5åõêuäuåuçÈ5ç5éõê5ä5êˆ5éõæuêuåuêÛÛÙÛHŽÂˆ›Ü›K˜\[™
[XZ[X™[\ÜÝÛÜ™X™[ÝX›Z]
NÂˆZK˜Ø\™˜\[™
›Ü›JNÂˆ[XZ[™›ØÝ\Ê
NÂˆ›Ü›K˜Y]™[\Ý[™\ŠœÝX›Z]‹
]™[
HOˆÂˆ]™[œ™]™[Y˜][

NÂˆZKœ[Š

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆÛÛœÝÙXÜ™]H\ÜÝÛÜ™˜[YNÂˆ\ÜÝÛÜ™˜[YHHˆŽÂˆZY[]]‹œÚYÛ’[Š[XZ[˜[YKÙXÜ™]
NÂˆYˆ
ZK˜[]™J
JHZY[Û“YØXÞSZYÜ˜][ÛˆOH[È›ÚYˆÛ“YØXÞSZYÜ˜][ÛŠ
NÂˆJJNÂˆJNÂˆNÂˆ›ÛZ\ÙKœ™\ÛÛ™J
K[Š

HOˆ]]‹›ÙÚ[“Ü[ÛœÊ
JK[Š
Ü[ÛœÊHOˆÂˆYˆ
]ZK˜[]™J
JH™]\›ŽÂˆZKœÝ]\ÊˆŠNÂˆÛÛœÝ›ÝšY\œÌˆH
Ü[ÛœÈOH[È›ÚYˆÜ[ÛœË›[ÙJHOOHœÛØÚX[ˆ	‰ˆ\œ˜^Kš\Ð\œ˜^JÜ[ÛœËœ›ÝšY\œÊHÈÜ[ÛœËœ›ÝšY\œË™š[\Š

HOˆØš™XÝš\ÓÝÛŠX™[Í
JHˆ×NÂˆ›Üˆ
ÛÛœÝ›ÝšY\ˆÙˆ™]ÈÙ]
›ÝšY\œÌŠJHZK˜]ÛŠX™[ÍÜ›ÝšY\—K

HOˆZKœ[Š

HOˆ]]‹œÚYÛ’[”›ÝšY\Š›ÝšY\ŠJK]K\›ÝšY\‹IÜ›ÝšY\ŸX
NÂˆYˆ
›ÝšY\œÌ‹š[˜ÛY\Ê™ÛÛÙÛHŠJHÂˆ]Ý\ÂˆÝ\HZK˜]ÛŠµçµèµäuê5åõäõ¯µé5èµçµæH5ç5æõè5æuèuå5èµçHÛÛÙÛH‹

HOˆÜ[“ZYÜ˜][ÛŠÝ\
K™]K[ZYÜ˜][Û‹\Ý\ŠNÂˆBˆYˆ
\›ÝšY\œÌ‹›[™Ý
HZKœÝ]\Êµæõè5æuèuå5åõäuê5êµæuêˆ5èµäõæuæuçÈ5ä5æuè5å5åµçµæuè5åˆ5æuêH5ç5é5è5åuêˆ5ç5êµçµæuæõåˆŠNÂˆJK˜Ø]Ú


HOˆZKœÝ]\Êµç5ä5è5æuêµçÈ5ç5æ5èµåuçÈ5ä5é5êuê5åuæuåuêˆ5æõè5æuèuåˆ5è5èuåH5ç5ê5èµè5çÈ5ä5êˆ5å5äõèËˆŠJNÂˆ™]\›ˆZK™\ÜÜÙNÂˆBˆ[˜Ý[Ûˆ[Ý[Ý\ÝÛY\“ZYÜ˜][ÛŠÈ›ÛÝ]]ˆ]]‹Ý]\ÎˆÝ]\Ì‹Û”™Yœ™\ÚÛ”Ý]\ËÛ”ÚYÛ“Ý]JHÂˆÛÛœÝZHHØÜ™Y[Š›ÛÝµå5êuç5çµêˆ5å5çµèµäuê5ç5æõè5æuèuå5èµçHÛÛÙÛH‹Û”Ý]\ÊNÂˆYˆ

Ý]\ÌˆOH[È›ÚYˆÝ]\Ì‹˜XØÙ\ÜÊHOOH›ZYÜ˜][Û—Ü™\]Z\™YŠHÂˆZK^
µæuêH5ç5å5êuç5æuçH5éõæuêuåuêÛÛÙÛH5ç5åõêuäuåuçÈ5å5éõæuæuçH5ç5é5è5æH5å5çµêuæˆ5å5êuæuçµåuêKˆ5è5êµåuè5æH5å5åõêuäuåuçÈ5è5êuä5ê5æuçH5äuä5åuêµåH5åõêuäuåuçËˆŠNÂˆYˆ
Ý]\Ì‹˜Ø[”™\Ý[YQÛÛÙÛHOOHYJHÂˆZK^
‘ÛÛÙÛH5æõäuê5éõåuêuê5ç5åõêuäuåuçËˆ5æuêH5ç5ä5çµêˆ5êuåuäH5ä5êˆ5å5æõè5æuèuå5æõäõæH5ç5å5êuç5æuçH5ä5êˆ5å5çµèµäuêˆŠNÂˆZK˜]ÛŠµå5çµêuæˆ5ä5æuçµåuêˆ5èµçHÛÛÙÛH‹

HOˆZKœ[Š

HOˆ]]‹œ™\Ý[YQÛÛÙÛS[šÊ
JK™]K\™\Ý[YKYÛÛÙÛHŠNÂˆH[ÙHYˆ
Ý]\Ì‹˜Ø[“[šÑÛÛÙÛHOOHYJHZK˜]ÛŠµéõæuêuåuê5åõêuäuåuçÈÛÛÙÛH‹

HOˆZKœ[Š

HOˆ]]‹˜™YÚ[‘ÛÛÙÛS[šÊ
JK™]K[[šËYÛÛÙÛHŠNÂˆ[ÙHYˆ
Ý]\Ì‹™ÛÛÙÛS[šÙYOOHYH	‰ˆÝ]\Ì‹›[šÔÝ\YOOHYH	‰ˆÝ]\Ì‹š[[˜[YOOHYH	‰ˆ\Ý]\Ì‹˜Ø[ÛÛ\]QÛÛÙÛJHÂˆZK^
‘ÛÛÙÛH5éõåuêuê5äuå5éµç5åõåˆ5è5äõê5êuêˆ5æõè5æuèuå5åõäõêuå5èµçHÛÛÙÛH5æõäõæH5ç5å5êuç5æuçH5ä5êˆ5å5ä5æuçµåuê‹ˆŠNÂˆZK˜]ÛŠµæõè5æuèuå5çµåõäõêH5èµçHÛÛÙÛH‹

HOˆZKœ[Š

HOˆ]]‹œÚYÛ’[”›ÝšY\Š™ÛÛÙÛHŠJK™]K\™X]]YÛÛÙÛHŠNÂˆH[ÙHYˆ
\Ý]\Ì‹˜Ø[ÛÛ\]QÛÛÙÛJHZK^
µè5äõê5êuêˆ5æõè5æuèuå5æ5ê5æuæuå5ç5éµåuê5æˆ5å5éõæuêuåuêˆ5æuêH5ç5éµä5êˆ5åuç5å5êµåõæuç5ä5êˆ5å5çµèµäuê5å5åõäõ¯µé5èµçµæH5èµçH5å5èuæuèuçµå5å5éõæuæuçµê‹ˆŠNÂˆYˆ
Ý]\Ì‹˜Ø[ÛÛ\]QÛÛÙÛHOOHYJHZK˜]ÛŠµäuäõæuéõêˆ5å5êuç5çµêˆ5å5éõæuêuåuê‹

HOˆZKœ[Š

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆZY[]]‹˜ÛÛ\]QÛÛÙÛS[šÊ
NÂˆYˆ
ZK˜[]™J
JHZY[Û”™Yœ™\ÚOH[È›ÚYˆÛ”™Yœ™\Ú

NÂˆJJK™]K[ZYÜ˜][Û‹XÛÛ\]HŠNÂˆH[ÙHYˆ

Ý]\ÌˆOH[È›ÚYˆÝ]\Ì‹˜XØÙ\ÜÊHOOH›Ø]]Ü™\]Z\™YŠHÂˆZK^
µè5äõê5êuêˆ5æõè5æuèuå5èµçHÛÛÙÛH5ä5åH5èué5éÈ5çµä5åuêuê5æõäõæH5ç5å5çµêuæuæ‹ˆ5æuêH5ç5éµä5êˆ5åuç5å5êµåõäuê5äuä5çµéµèµåuêˆ5å5èué5éËˆŠNÂˆH[ÙHZK^
µå5äµæuêuå5ç5åõêuäuåuçÈ5ä5æuè5å5åµçµæuè5åˆ5æuêH5ç5é5è5åuêˆ5ç5êµçµæuæõåˆŠNÂˆZK˜]ÛŠµäuäõæuéõêˆ5çµéµäH5çµåõäõêH‹

HOˆZKœ[Š

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆYˆ
ZK˜[]™J
JHZY[Û”™Yœ™\ÚOH[È›ÚYˆÛ”™Yœ™\Ú

NÂˆJJK™]K[ZYÜ˜][Û‹\™Yœ™\ÚŠNÂˆYˆ
Û”ÚYÛ“Ý]
HZK˜]ÛŠµæuéµæuä5å‹

HOˆZKœ[ŠÛ”ÚYÛ“Ý]
K™]K[ZYÜ˜][Û‹\ÚYÛ›Ý]ŠNÂˆ™]\›ˆZK™\ÜÜÙNÂˆB‚ˆËÈÜ˜ËÝš\\™\ÜÚ]ÜžKšœÂˆ[˜Ý[ÛˆÚXÚÙY
™\Ý[
HÂˆYˆ
™\Ý[™\œ›ÜŠH›ÝÈ\œ›ÜŠ™\Ý[™\œ›Ü‹›Y\ÜØYÙJNÂˆ™]\›ˆ™\Ý[™]NÂˆBˆ[˜Ý[ÛˆÚ[™ÙY
™\Ý[
HÂˆÛÛœÝ›ÝÜÈHÚXÚÙY
™\Ý[
NÂˆYˆ
J›ÝÜÈOH[È›ÚYˆ›ÝÜË›[™Ý
JH›ÝÈ\œ›ÜŠ•™\œÚ[ÛˆÛÛ™›XÝˆ5å5é5ê5æuæ5å5êuêµè5å5äuçµæõêuæuê5ä5åõêˆ5ê5èµè5çÈ5ç5é5è5æH5è5æuèuæuåuçÈ5è5åuèuèËˆŠNÂˆ™]\›ˆ›ÝÜÖÌNÂˆBˆ[˜Ý[ÛˆÜ™X]T™\ÜÚ]ÜžJÛY[
HÂˆ™]\›ˆÂˆ\Ý\Ý[˜][ÛœÊ
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆ™]\›ˆÚXÚÙY
ZY[ÛY[™œ›ÛJš\ÈŠKœÙ[XÝ
ŠˆŠK›Ü™\Š˜Ü™X]YØ]ŠK›[Z]
L
JNÂˆJNÂˆKˆÜ™X]Q\Ý[˜][ÛŠÌÌKÌŠHÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë\™Ý[Y[Ë[˜Ý[ÛŠˆ
ÝÛ™\’Y˜[YKXÝ]™KÙ][™ÜÌˆHÈÝ\ˆˆ‹^\ÎˆŒKYÙ]ˆÝ\œ™[˜ÞNˆ’SÈˆJHÂˆ˜[YHHÝš[™Ê˜[YJKš[J
NÂˆYˆ
[˜[YH˜[YK›[™ÝˆL
H›ÝÈ\œ›ÜŠµêuçH5æuèµäÈ5è5äõê5êH5åuèµäÈL5êµåuåuæuçHŠNÂˆ™]\›ˆÚ[™ÙY
ZY[ÛY[™œ›ÛJš\ÈŠKš[œÙ\
ÈYˆÜž\Ëœ˜[™ÛUURQ

KÝÛ™\—ÚYˆÝÛ™\’Y]Nˆ˜[YK\Ý[˜][Û—Û˜[YNˆ˜[YK\×ØXÝ]™NˆXÝ]™KÙ][™ÜÎˆ˜[Y]TÙ][™ÜÊÙ][™ÜÌŠHJKœÙ[XÝ

JNÂˆJNÂˆKˆ\]Q\Ý[˜][ÛŠY™\œÚ[ÛK˜[YKXÝ]™KÙ][™ÜÌŠHÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆ˜[YHHÝš[™Ê˜[YJKš[J
NÂˆYˆ
[˜[YH˜[YK›[™ÝˆL
H›ÝÈ\œ›ÜŠµêuçH5æuèµäÈ5è5äõê5êH5åuèµäÈL5êµåuåuæuçHŠNÂˆ™]\›ˆÚ[™ÙY
ZY[ÛY[œœÊÙ][™ÜÌˆOOH›ÚYÈ\]WÝš\Ù\Ý[˜][Ûˆˆˆ\]WÝš\Ù\Ý[˜][Û—Ù]Z[È‹×ÜÜ™XY˜[Y\ÊÈÚYˆYÙ^XÝYÝ™\œÚ[ÛŽˆ™\œÚ[ÛKÙ\Ý[˜][Û—Û˜[YNˆ˜[YKÚ\×ØXÝ]™NˆXÝ]™HKÙ][™ÜÌˆOOH›ÚYÈßHˆÈÜÙ][™ÜÎˆ˜[Y]TÙ][™ÜÊÙ][™ÜÌŠHJJJNÂˆJNÂˆKˆÙ]š\
Y
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆYˆ
ZY
H›ÝÈ\œ›ÜŠµæuêH5ç5äuåõåuê5æuèµäÈŠNÂˆÛÛœÝš\ÈHÚXÚÙY
ZY[ÛY[™œ›ÛJš\ÈŠKœÙ[XÝ
ŠˆŠK™\JšY‹Y
K›Ü™\Š˜Ü™X]YØ]ŠK›[Z]
ŠJNÂˆYˆ
š\Ë›[™ÝOOHJH›ÝÈ\œ›ÜŠš\Ë›[™ÝÈµæuåuêµê5çµæuèµäÈ5ä5åõäÈ5êµåuä5çH5ç5äuåõæuê5åˆˆµå5æuèµäÈ5ç5ä5è5çµéµä5ä5åH5ä5æuè5åH5çµêuåuæuæˆ5ç5åõêuäuåuçËˆŠNÂˆÛÛœÝš\ˆHš\ÖÌK][\ÈH×NÂˆ›Üˆ
]Ù™œÙ]HÈÈÙ™œÙ]
ÏHYLÊHÂˆÛÛœÝYÙHHÚXÚÙY
ZY[ÛY[™œ›ÛJš\Ú][\ÈŠKœÙ[XÝ
ŠˆŠK™\Jš\ÚY‹š\‹šY
K›Ü™\ŠšYŠKœ˜[™ÙJÙ™œÙ]Ù™œÙ]
ÈNNJJNÂˆ][\Ëœ\Ú
‹‹œYÙJNÂˆYˆ
YÙK›[™ÝYLÊHœ™XZÎÂˆBˆ™]\›ˆ×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßKš\ŠKÈ][\ÈJNÂˆJNÂˆKˆÜ™X]R][Jš\Y][JHÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆ˜\ˆØMNÂˆÛÛœÝ^[ØYH˜[Y]T^[ØY
][KšÚ[™][Kœ^[ØY
NÂˆÛÛœÝ™XÛÜ™HÈYˆ][KšYš\ÚYˆš\YÚ[™ˆ][KšÚ[™YØXÞWÚYˆ
ØMHH][K›YØXÞWÚY
HOH[ÈØMHˆ[^[ØYNÂˆÛÛœÝ™\Ý[HZY[ÛY[™œ›ÛJš\Ú][\ÈŠKš[œÙ\
™XÛÜ™
KœÙ[XÝ

NÂˆYˆ
\™\Ý[™\œ›ÜŠH™]\›ˆÚ[™ÙY
™\Ý[
NÂˆYˆ
™\Ý[™\œ›Ü‹˜ÛÙHOOHŒŒÍLHŠH™]\›ˆÚ[™ÙY
™\Ý[
NÂˆÛÛœÝ›Ý[™HÚXÚÙY
ZY[ÛY[™œ›ÛJš\Ú][\ÈŠKœÙ[XÝ
ŠˆŠK™\JšY‹][KšY
K›X^X™TÚ[™ÛJ
JNÂˆYˆ
›Ý[™	‰ˆ›Ý[™š\ÚYOOHš\Y	‰ˆ›Ý[™šÚ[™OOH][KšÚ[™	‰ˆ”ÓÓ‹œÝš[™ÚYžJ˜[Y]T^[ØY
][KšÚ[™›Ý[™œ^[ØY
JHOOH”ÓÓ‹œÝš[™ÚYžJ^[ØY
JH™]\›ˆ›Ý[™Âˆ›ÝÈ\œ›ÜŠ•™\œÚ[ÛˆÛÛ™›XÝˆ5å5é5ê5æuæ5æõäuê5éõæuæuçKˆ5ê5èµè5çÈ5ç5é5è5æH5è5æuèuæuåuçÈ5è5åuèuèËˆŠNÂˆJNÂˆKˆ\]R][JY™\œÚ[ÛKÚ[™^[ØY
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆ™]\›ˆÚ[™ÙY
ZY[ÛY[œœÊ\]WÝš\Ú][H‹ÈÚYˆYÙ^XÝYÝ™\œÚ[ÛŽˆ™\œÚ[ÛKÜ^[ØYˆ˜[Y]T^[ØY
Ú[™^[ØY
HJJNÂˆJNÂˆKˆ[]R][JY™\œÚ[ÛJHÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆ™]\›ˆÚ[™ÙY
ZY[ÛY[œœÊ™[]WÝš\Ú][H‹ÈÚYˆYÙ^XÝYÝ™\œÚ[ÛŽˆ™\œÚ[ÛHJJNÂˆJNÂˆKˆ™]šY]ÔÛXÞJš\Y™\œÚ[ÛK›ÜÜØ[YYËXÚ\Ú[ÛŒŠHÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆ™]\›ˆÚ[™ÙY
ZY[ÛY[œœÊœ™]šY]×Ø›ÛÚÚ[™×ÜÛXÞH‹ÈÝš\ÚYˆš\YÙ^XÝYÝ™\œÚ[ÛŽˆ™\œÚ[ÛKÜ›ÜÜØ[ÚYˆ›ÜÜØ[YÜÙ[XÝYÚYÎˆYËÙXÚ\Ú[ÛŽˆXÚ\Ú[ÛŒˆJJNÂˆJNÂˆKˆ\]TÙ][™ÜÊY™\œÚ[ÛKÙ][™ÜÌŠHÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆ™]\›ˆÚ[™ÙY
ZY[ÛY[œœÊ\]WÝš\ÜÙ][™ÜÈ‹ÈÚYˆYÙ^XÝYÝ™\œÚ[ÛŽˆ™\œÚ[ÛKÜÙ][™ÜÎˆ˜[Y]TÙ][™ÜÊÙ][™ÜÌŠHJJNÂˆJNÂˆKˆ[\Ü][\Êš\Y][\ÊHÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆÛÛœÝ›ÝÜÈH][\Ë›X\


HOˆ
ÈYˆÜž\Ëœ˜[™ÛUURQ

Kš\ÚYˆš\YÚ[™ˆšÚ[™YØXÞWÚYˆ›YØXÞWÚY^[ØYˆ˜[Y]T^[ØY
šÚ[™œ^[ØY
HJJNÂˆYˆ
\›ÝÜË›[™Ý
H™]\›ˆ×NÂˆ™]\›ˆÚXÚÙY
ZY[ÛY[™œ›ÛJš\Ú][\ÈŠK\Ù\
›ÝÜËÈÛÛÛ™›XÝˆš\ÚYÚ[™YØXÞWÚY‹YÛ›Ü™Q\XØ]\ÎˆYHJKœÙ[XÝ

JNÂˆJNÂˆBˆNÂˆB‚ˆËÈÜ˜ËÙZ[K[˜]šYØ][Û‹šœÂˆ[˜Ý[ÛˆÙÚ[™Ñ›Ü‘^JÝÜ][\Ë\Ý[˜][ÛˆH•Z[[™ŠHÂˆ˜\ˆØMÂˆÛÛœÝX]ÚHÝš[™ÊÝÜœ^[ØY››Ý\ÈˆŠK›X]Ú
ÊÎ—ŸŠuç5æuè5å—ÊŠ×—‹—JÊJÎ—Ÿ	
KÊNÂˆYˆ
[X]Ú×µç5ç5äŸµç5ç5äËË\Ý
X]ÚÌWKš[J
JJH™]\›ˆ[ÂˆÛÛœÝX™[HX]ÚÌWKš[J
K˜[YHHX™[œÜ]
×ÊÖø $ø %WÊËÊVÌKš[J
NÂˆÛÛœÝ›ÛÚÚ[™ÈH][\Ë™š[™


HOˆÂˆ˜\ˆØMNÂˆ™]\›ˆšÚ[™OOH˜›ÛÚÚ[™Èˆ	‰ˆœ^[ØY\HOOHµçµç5åuçÈˆ	‰ˆ
œ^[ØYœÝ\Y\ˆOOH˜[YH

ØMHHœ^[ØY›˜[YJHOH[È›ÚYˆØMKœÝ\ÕÚ]
˜[YH
Èˆ8 $ÈŠJJNÂˆJNÂˆ™]\›ˆÈX™[ˆX™[]Y\žNˆ˜[YH
Èˆˆ
È


ØMH›ÛÚÚ[™ÈOH[È›ÚYˆ›ÛÚÚ[™Ëœ^[ØY›˜[YJHOH[È›ÚYˆØMœÜ]
×ÊÖø $ø %WÊËÊKœÛXÙJJKš›Ú[ŠˆŠJHÝÜœ^[ØYœXÙJH
Èˆˆ
ÈÛÝ[žS˜[YJ\Ý[˜][ÛŠKÝ]\Îˆ
›ÛÚÚ[™ÈOH[È›ÚYˆ›ÛÚÚ[™Ëœ^[ØYœÝ]\ÊHµç5äuäõæuéõåˆNÂˆBˆ[˜Ý[ÛˆÙÚ[™ÓX\šÝ\
ÝÜ][\Ë\Ý[˜][ÛˆH•Z[[™ŠHÂˆÛÛœÝÙÚ[™ÌÈHÙÚ[™Ñ›Ü‘^JÝÜ][\Ë\Ý[˜][ÛŠNÂˆYˆ
[ÙÚ[™ÌÊH™]\›ˆˆŽÂˆÛÛœÝ[šÜÈH˜]šYØ][Û“[šÜÊ×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßKÙÚ[™ÌÊKÈ™XÚ\Ú[ÛŽˆ[šÛ›ÝÛˆˆJJNÂˆ™]\›ˆ	Ï]ˆÛ\ÜÏH™Z[K[ÙÚ[™Èµç5æuè5å5äuèuæuåuçH5å5æuåuçOÚ‰È
È\ØØ\R[
ÙÚ[™ÌË›X™[
H
È	ÈÜ[ˆÛ\ÜÏH˜˜YÙH‰È
È\ØØ\R[
ÙÚ[™ÌËœÝ]\ÊH
È	ÏÜÜ[Ü]ˆÛ\ÜÏHœ›ÝÈ‰È
ÈÖÈ™ÛÛÙÛH‹‘ÛÛÙÛHX\È—KÈØ^™H‹•Ø^™H—WK›X\

ÚÙ^K˜[YWJHOˆ	ÏHÛ\ÜÏH˜ˆˆ]K[ÙÚ[™Ë[˜]šYØ][ÛH‰È
ÈÙ^H
È	Èˆ™YH‰È
È\ØØ\R[
[šÜÖÚÙ^WJH
È	Èˆ\™Ù]H—Ø›[šÈˆ™[H››ÛÜ[™\ˆ›Ü™Y™\œ™\ˆµè5æuåuåuæ5ç5ç5æuè5å5äu¯‰È
È˜[YH
ÈØOˆŠKš›Ú[ŠˆŠH
ÈÙ]ÛX[µåõæué5åuêH5çµéõåuçH5å5ç5æuè5å5å5ê5êuåuçH5äuêµæõè5åuçÎÈ5æuêH5ç5ä5çµêˆ5ä5êˆ5å5è5æõèH5åuå5æõêµåuäuêˆ5ç5é5è5æH5æuéµæuä5åÜÛX[Ù]ˆŽÂˆB‚ˆËÈÜ˜ËÜ›Ý]K[X\šœÂˆ˜\ˆ[\ÜÛXY›]H×ÝÑTÓJ™\]Z\™WÛXY›]ÜÜ˜Ê
KJNÂ‚ˆËÈÜ˜ËÛX\\Ü\[^[Ý]šœÂˆ[˜Ý[ÛˆÜ\[Y[œÚ[ÛœÊÚYZYÚ
HÂˆÛÛœÝX^ÚYHX]›X^
X]›Z[ŠÍ
ÚYÌŒ
HHÌ
JKX^ZYÚHX]›X^

ZYÚÍ
HHLL
NÂˆ™]\›ˆÈX^ÚYX^ZYÚZ[•ÚYˆX]›Z[ŠLŒX^ÚY
HNÂˆB‚ˆËÈÜ˜ËÜ›Ý]K[X\šœÂˆ[˜Ý[Ûˆ[[Y[
YË^ËÛ\ÜÓ˜[YJHÂˆÛÛœÝ›ÙHHØÝ[Y[˜Ü™X]Q[[Y[
YÊNÂˆYˆ
^ÈOOH›ÚY
H›ÙK^ÛÛ[H^ÎÂˆYˆ
Û\ÜÓ˜[YJH›ÙK˜Û\ÜÓ˜[YHHÛ\ÜÓ˜[YNÂˆ™]\›ˆ›ÙNÂˆBˆ[˜Ý[Ûˆ˜]šYØ][ÛŠÚ[
HÂˆÛÛœÝ›ÝÈH[[Y[
™]ˆ‹›ÚYœ›ÝÈX\[˜]šYØ][ÛˆŠNÂˆÛÛœÝ\›ÈH˜]šYØ][Û“[šÜÊÚ[
NÂˆ›Üˆ
ÛÛœÝÜ›ÝšY\‹X™[HÙˆÖÈ™ÛÛÙÛH‹‘ÛÛÙÛHX\È—KÈØ^™H‹•Ø^™H—WJHÂˆÛÛœÝHH[[Y[
˜H‹µè5æuåuåuæ5äu¯ˆˆ
ÈX™[˜ˆŠNÂˆKš™YˆH\›ÖÜ›ÝšY\—NÂˆK\™Ù]H—Ø›[šÈŽÂˆKœ™[H››ÛÜ[™\ˆ›Ü™Y™\œ™\ˆŽÂˆK™]\Ù]›˜]šYØ][ÛˆH›ÝšY\ŽÂˆ›ÝË˜\[™
JNÂˆBˆ™]\›ˆ›ÝÎÂˆBˆ[˜Ý[ÛˆÝÜÝ[[X\žJÚ[Û“Ü[‘^JHÂˆ˜\ˆØMÂˆÛÛœÝ›ÙHH[[Y[
™]ˆ‹›ÚY›X\\ÝÜŠNÂˆ›ÙK˜\[™
[[Y[
œÝ›Û™È‹µæuåuçHˆ
ÈÚ[™^H
Èˆ0­Èˆ
ÈÚ[›X™[
JNÂˆ›ÙK˜\[™
[[Y[
œ‹µæuèµäÈ5äuêµåuæõè5æuêˆ5å5æuåuçµæuêŽˆˆ
È


ØMHÚ[™\Ý[˜][ÛŠHOH[È›ÚYˆØMœ]Y\žJHÚ[›X™[
JJNÂˆYˆ
Ú[œ™XÚ\Ú[ÛˆOOH™^XÝŠH›ÙK˜\[™
[[Y[
œÛX[‹µèuæuæõêˆ5å5çµé5å5çµéµæuæuè5êˆ5ä5åµåuêÈ5å5è5æuåuåuæ5çµåõé5êH5ä5êˆ5æuèµäÈ5å5æuåuçKˆ5æuêH5ç5ä5çµêˆ5æõêµåuäuêˆ5ç5é5è5æH5æuéµæuä5åˆ‹›]]YŠJNÂˆ›ÙK˜\[™
˜]šYØ][ÛŠÚ[
JNÂˆÛÛœÝÜ[ˆH[[Y[
˜]Ûˆ‹µé5êµåÈ5êµåuæõè5æuêˆ5ç5æuåuçHˆ
ÈÚ[™^K˜ˆŠNÂˆÜ[‹\HH˜]ÛˆŽÂˆÜ[‹™]\Ù]›Ü[‘^HHÚ[šYÂˆÜ[‹›Û˜ÛXÚÈH

HOˆÛ“Ü[‘^HOH[È›ÚYˆÛ“Ü[‘^JÚ[šY
NÂˆ›ÙK˜\[™
Ü[ŠNÂˆ™]\›ˆ›ÙNÂˆBˆ[˜Ý[Ûˆ[Ý[›Ý]SX\
›ÛÝ][\ËÛ“Ü[‘^K\Ý[˜][ÛˆH•Z[[™ŠHÂˆ˜\ˆØMÂˆÛÛœÝÝÜÈH][\Ë™š[\Š

HOˆšÚ[™OOHœÝÜŠKœÛÜ

KŠHOˆKœ^[ØY™^HH‹œ^[ØY™^JKÚ[ÈH›Ý]TÚ[ÊÝÜË\Ý[˜][ÛŠKÜ›Ý\ÈHÜ›Ý\›Ý]TÚ[ÊÚ[ÊKX\YH™]ÈÙ]
Ú[Ë›X\


HOˆšY
JNÂˆÛÛœÝÝ[[X\žHH[[Y[
œ‹Ü›Ý\Ë›[™Ý
Èˆ5è5éõåuäõåuêˆ5èµç5å5çµé5å0­Èˆ
ÈÚ[Ë›[™Ý
Èˆ5èµéµæuê5åuêˆ5çµçµåuéõçµåuêˆ5çµêµåuæˆˆ
ÈÝÜË›[™Ý
NÂˆ›ÛÝ˜\[™
Ý[[X\žJNÂˆÛÛœÝÛÛZ[™\ˆH[[Y[
™]ˆŠNÂˆÛÛZ[™\‹šYHœ›Ý]K[X\ŽÂˆÛÛZ[™\‹œÙ]]šX]J˜\šXK[X™[‹µçµé5å5ä5æuè5æ5ê5ä5éõæ5æuäuæuêˆ5êuç5è5éõåuäõåuêˆ5å5çµèuç5åuçŠNÂˆ›ÛÝ˜\[™
ÛÛZ[™\ŠNÂˆÛÛœÝØ\›š[™ÈH[[Y[
œ‹µê5éõèˆ5å5çµé5å5ç5ä5è5æ5èµçËˆ5ä5é5êuê5ç5å5êuêµçµêH5äuæõé5êµåuê5æH5å5è5æuåuåuæ5äuê5êuæuçµêˆ5å5è5éõåuäõåuêˆ5ç5çµæ5åˆ‹›X\]Ø\›š[™ÈŠNÂˆØ\›š[™ËšY[ˆHYNÂˆ›ÛÝ˜\[™
Ø\›š[™ÊNÂˆÛÛœÝ[›X\YHÝÜË™š[\Š

HOˆ[X\Yš\ÊšY
JNÂˆYˆ
[›X\Y›[™Ý
HÂˆÛÛœÝZ\ÜÚ[™ÈH[[Y[
™]ˆŠNÂˆZ\ÜÚ[™ËšYH[›X\Y\ÝÜÈŽÂˆZ\ÜÚ[™Ë˜\[™
[[Y[
šÈ‹µèµéµæuê5åuêˆ5ç5ç5ä5çµæuéõåuçH5äuçµé5åŠJNÂˆZ\ÜÚ[™Ë˜\[™
[[Y[
œ‹µä5é5êuê5ç5å5åuèuæuèÈ5éõåH5ê5åuåõäH5åuéõåH5ä5åuê5æˆ5äuèµê5æuæõêˆ5å5èµéµæuê5å5äuêµåuæõè5æuêˆ5å5æuåuçµæuê‹ˆŠJNÂˆ›Üˆ
ÛÛœÝ][HÙˆ[›X\Y
HZ\ÜÚ[™Ë˜\[™
ÝÜÝ[[X\žJÈYˆ][KšY^Nˆ][Kœ^[ØY™^KX™[ˆ][Kœ^[ØYœXÙK\Ý[˜][ÛŽˆZ[Q\Ý[˜][ÛŠ][Kœ^[ØY\Ý[˜][ÛŠK™XÚ\Ú[ÛŽˆ[šÛ›ÝÛˆˆKÛ“Ü[‘^JJNÂˆ›ÛÝ˜\[™
Z\ÜÚ[™ÊNÂˆBˆÛÛœÝ\ÝH[[Y[
™]Z[ÈŠNÂˆ\Ý˜\[™
[[Y[
œÝ[[X\žH‹µæõç5è5éõåuäõåuêˆ5å5çµèuç5åuç
ˆ
ÈÝÜË›[™Ý
ÈŠHŠJNÂˆ›Üˆ
ÛÛœÝ][HÙˆÝÜÊH\Ý˜\[™
ÝÜÝ[[X\žJ
ØMHÚ[Ë™š[™


HOˆšYOOH][KšY
JHOH[ÈØMˆÈ^Nˆ][Kœ^[ØY™^KX™[ˆ][Kœ^[ØYœXÙK\Ý[˜][ÛŽˆZ[Q\Ý[˜][ÛŠ][Kœ^[ØY\Ý[˜][ÛŠK™XÚ\Ú[ÛŽˆ[šÛ›ÝÛˆˆKÛ“Ü[‘^JJNÂˆ›ÛÝ˜\[™
\Ý
NÂˆ›ÛÝ˜\[™
[[Y[
œ‹µäuè5éõåuäõåuêˆ5êuç5êuæuæ5ä5åH5æ5æuèuå5æuêH5ç5äuåõåuê5ä5êˆ5å5ê5éµæuèÈ5ä5åH5êuäõå5å5êµèµåué5å5å5ê5ç5åuåuè5æ5æKˆ‹›]]YŠJNÂˆYˆ
YÜ›Ý\Ë›[™Ý
HÂˆÛÛZ[™\‹˜\[™
[[Y[
œ‹µæõäõæH5ç5å5éµæuäˆ5è5éõåuäõåuêˆ5äuçµé5å5å5åuèuèÈ5èµéµæuê5åuêˆ5èµçH5çµæuéõåuçH5äuêµåuæõè5æuêˆ5å5æuåuçµæuê‹ˆŠJNÂˆ™]\›ˆ

HOˆÂˆNÂˆBˆÛÛœÝX\H[\ÜÛXY›]™Y˜][›X\
ÛÛZ[™\‹ÈØÜ›ÛÚY[›ÛÛNˆ˜[ÙHJNÂˆX\˜]šX][ÛÛÛ›ÛœÙ]™Yš^
˜[ÙJNÂˆ]Ü[™YÜ\H[ÂˆÛÛœÝ\]TÜ\[Z]ÈH

HOˆÂˆÛÛœÝÚ^™HHX\™Ù]Ú^™J
K[Z]ÈHÜ\[Y[œÚ[ÛœÊÚ^™KžÚ^™KžJNÂˆÛÛZ[™\‹œÝ[KœÙ]›Ü\J‹K\›Ý]K\Ü\]ÚY‹[Z]Ë›X^ÚY
ÈœŠNÂˆÛÛZ[™\‹œÝ[KœÙ]›Ü\J‹K\›Ý]K\Ü\ZZYÚ‹[Z]Ë›X^ZYÚ
ÈœŠNÂˆÛÛœÝÜ[ˆHÜ[™YÜ\ÂˆYˆ
Ü[ŠHÂˆØš™XÝ˜\ÜÚYÛŠÜ[‹›Ü[ÛœË[Z]ÊNÂˆÜ[‹\]J
NÂˆBˆ™]\›ˆ[Z]ÎÂˆNÂˆ\]TÜ\[Z]Ê
NÂˆX\›ÛŠœ™\Ú^™H‹\]TÜ\[Z]ÊNÂˆX\›ÛŠœÜ\Ü[ˆ‹
]™[
HOˆÂˆÜ[™YÜ\H]™[œÜ\Âˆ\]TÜ\[Z]Ê
NÂˆJNÂˆX\›ÛŠœÜ\ÛÜÙH‹

HOˆÂˆÜ[™YÜ\H[ÂˆJNÂˆ[\ÜÛXY›]™Y˜][[S^Y\ŠšÎ‹ËÝ[K›Ü[œÝ™Y]X\›Ü™ËÞÞŸKÞÞKÞÞ_Kœ™È‹ÈX^›ÛÛNˆNK]šX][ÛŽˆ	É˜ÛÜNÈH™YHšÎ‹ËÝÝÝË›Ü[œÝ™Y]X\›Ü™ËØÛÜ\šYÚˆ\™Ù]H—Ø›[šÈˆ™[H››ÛÜ[™\ˆ›Ü™Y™\œ™\ˆ“Ü[”Ý™Y]X\ØOˆÛÛšX]ÜœÉÈJK›ÛŠ[Y\œ›Üˆ‹

HOˆÂˆØ\›š[™ËšY[ˆH˜[ÙNÂˆJK˜YÊX\
NÂˆ›Üˆ
ÛÛœÝÜ›Ý\ÙˆÜ›Ý\ÊHÂˆÛÛœÝš\œÝHÜ›Ý\œÚ[ÖÌK˜YÙHH[[Y[
œÜ[ˆ‹Ýš[™Êš\œÝ™^JH
È
Ü›Ý\œÚ[Ë›[™ÝˆHÈŠÈˆˆˆŠJNÂˆÛÛœÝXÛÛŒˆH[\ÜÛXY›]™Y˜][™]’XÛÛŠÈÛ\ÜÓ˜[YNˆœ›Ý]K[X\šÙ\ˆ‹[ˆ˜YÙKXÛÛ”Ú^™NˆÍKXÛÛ[˜ÚÜŽˆÌŒ‹Œ—HJNÂˆÛÛœÝÜ\H[[Y[
™]ˆŠNÂˆÜ\™\ˆHœŽÂˆ›Üˆ
ÛÛœÝÚ[ÙˆÜ›Ý\œÚ[ÊHÜ\˜\[™
ÝÜÝ[[X\žJÚ[Û“Ü[‘^JJNÂˆ[\ÜÛXY›]™Y˜][›X\šÙ\ŠÙÜ›Ý\›]Ü›Ý\›™×KÈXÛÛŽˆXÛÛŒ‹]NˆÜ›Ý\œÚ[Ë›X\


HOˆµæuåuçHˆ
È™^H
Èˆ0­Èˆ
È›X™[
Kš›Ú[ŠˆÈŠHJK˜š[™Ü\
Ü\×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßKÜ\[Y[œÚ[ÛœÊX\™Ù]Ú^™J
KžX\™Ù]Ú^™J
KžJJKÈÛ\ÜÓ˜[YNˆœ›Ý]K\Ü\‹]]Ô[”Y[™ÎˆÌM‹M—KÙY\[•šY]ÎˆYHJJK˜YÊX\
NÂˆBˆX\™š]›Ý[™ÊÜ›Ý\Ë›X\


HOˆÞ›]›™×JKÈY[™ÎˆÌÌÌKX^›ÛÛNˆLˆJNÂˆÛÛœÝ[Y\ˆHÙ][Y[Ý]


HOˆÂˆ˜\ˆØMNÂˆX\š[˜[Y]TÚ^™J
NÂˆ
ØMHHÛÛZ[™\‹œØÜ›Û[ÕšY]ÊHOH[È›ÚYˆØMK˜Ø[
ÛÛZ[™\‹È›ØÚÎˆœÝ\‹™Z]š[ÜŽˆš[œÝ[ˆJNÂˆK
KØœÙ\™\ˆH\[Ùˆ™\Ú^™SØœÙ\™\ˆOOH™[˜Ý[ÛˆˆÈ™]È™\Ú^™SØœÙ\™\Š

HOˆX\š[˜[Y]TÚ^™J
JHˆ[ÂˆØœÙ\™\ˆOH[È›ÚYˆØœÙ\™\‹›ØœÙ\™JÛÛZ[™\ŠNÂˆ™]\›ˆ

HOˆÂˆÛX\•[Y[Ý]
[Y\ŠNÂˆØœÙ\™\ˆOH[È›ÚYˆØœÙ\™\‹™\ØÛÛ›™XÝ

NÂˆX\œ™[[Ý™J
NÂˆNÂˆB‚ˆËÈÜ˜ËØÛY[Y\Ú›Ø\™šœÂˆ˜\ˆÝ]\ÓX™[ÈHÈÝ™\™YNˆµäuä5æuåõåuê‹[šÛ›ÝÛŽˆµåõèuê5çµæuäõèˆ‹Ü[Žˆµç5äuæuéµåuèˆˆNÂˆ˜\ˆ˜[šÌˆHÈÝ™\™YNˆ[šÛ›ÝÛŽˆKÜ[ŽˆˆNÂˆ˜\ˆÚÜÝ]ÈHÖÈœÝÜ‹œ›Ý]H‹µçµé5å5åuçµèuç5åuç—KÈ™Z[H‹˜›ÛÚÚ[™È‹µêµåuæõè5æuêˆ5æuåuçµæuêˆ—KÈ™^[œÙ\È‹Ø[]‹µêµéõéµæuäH5åuå5åuéµä5åuêˆ—KÈ™ØÝ[Y[È‹˜›ÛÚÚ[™È‹µä5æuêuåuê5æH5ç5æuè5å—KÈ™Ü›Ý\‹\Ù\ˆ‹µå5éõäuåuéµå5êuç5æH—KÈ™šY[‹™ÙX\ˆ‹µèµê5æõêˆ5êuæ5åÈ5åu¯‘Ô—WNÂˆ[˜Ý[Ûˆ\Ú›Ø\™[Ù[
š\‹È›ÝÈHÊˆ×ÔT‘W×È
‹È™]È]J
HHHßJHÂˆÛÛœÝÙY[ˆHÊˆ×ÔT‘W×È
‹È™]ÈÙ]

K][\ÈH
š\‹š][\È×JK™š[\Š

HOˆÂˆYˆ
^šYÙY[‹š\ÊšY
Hš\ÚY	‰ˆš\ÚYOOHš\‹šY
H™]\›ˆ˜[ÙNÂˆÙY[‹˜Y
šY
NÂˆ™]\›ˆYNÂˆJNÂˆÛÛœÝÙ][™ÜÌˆHš\‹œÙ][™ÜÈßK›ÝÜÈH^[œÙT›ÝÜÊ][\ËÙ][™ÜÌŠK™\ÜHØ[Ý[]T™XY[™\ÜÊÈš\ˆš\‹][\Ë›ÝÈJNÂˆÛÛœÝ][[ÛˆH™\Üš][\Ë™š[\Š

HOˆœÝ]\ÈOOH˜ÛÛ\]YŠKœÛÜ

KŠHOˆ˜[šÌ–ØKœÝ]\×HH˜[šÌ–Ø‹œÝ]\×H
K™XY[™HŽNNNHŠK›ØØ[PÛÛ\\™J‹™XY[™HŽNNNHŠJNÂˆ™]\›ˆÈÛÛ\][ÛŽˆš\ÛÛ\][ÛŠ][\ËÙ][™ÜÌŠK^[œÙ\Îˆ^[œÙTÝ]\ÝXÜÊ›ÝÜËÙ][™ÜÌ‹˜YÙ]
K[šÛ›ÝÛ”^[Y[Îˆ›ÝÜËœÛÛYJ

HOˆœZYOOH[
K][[ÛŽˆ][[Û‹œÛXÙJJK][[Û[ˆ][[Û‹][[ÛÛÝ[ˆ][[Û‹›[™ÝNÂˆBˆ˜\ˆ˜[YHH
ŠHOˆˆOOH[Èµæ5ê5çH5è5éõäuèˆˆˆ›Ü›X][Û™^JŠNÂˆ[˜Ý[Ûˆ›ÙÜ™\ÜÊX™[\˜Ù[]Z[
HÂˆ™]\›ˆ	Ï\XÛHÛ\ÜÏH™\Ú›Ø\™\›ÙÜ™\ÜÈ]ˆÛ\ÜÏHœ›ÝÈÏ‰È
ÈX™[
ÈÚÏÝ›Û™Ïˆˆ
È
\˜Ù[OOH[Èµæ5ê5çH5å5åuäµäõêˆˆ\ØØ\R[
\˜Ù[
H
È‰HŠH
ÈÜÝ›Û™ÏÙ]ˆˆ
È
\˜Ù[OOH[Èˆˆˆ	Ï›ÙÜ™\ÜÈX^HŒLˆ˜[YOH‰È
È\ØØ\R[
\˜Ù[
H
È	Èˆ\šXK[X™[H‰È
ÈX™[
È	ÈÜ›ÙÜ™\ÜÏ‰ÊH
Èˆˆ
È]Z[
ÈÜØ\XÛOˆŽÂˆBˆ[˜Ý[Ûˆ[Ý[ÛY[\Ú›Ø\™
È›ÛÝš\ˆš\‹Ý]HHßK›ÝËÛ“˜]šYØ]HH

HOˆÂˆKÛ‘Y]H

HOˆÂˆKÛÚ[™ÙQ\Ý[˜][ÛˆH

HOˆÂˆHJHÂˆ˜\ˆØMÂˆÛÛœÝHH\Ú›Ø\™[Ù[
š\‹È›ÝÈJKÈHK˜ÛÛ\][Û‹ÈHK™^[œÙ\ÎÂˆ›ÛÝš[›™\’SH	Ï]ˆÛ\ÜÏH˜ÛY[Y\Ú›Ø\™\Ú›Ø\™Yš\œÝˆ]KXÛY[Y\Ú›Ø\™]ˆÛ\ÜÏHÛÜšÜÜXÙKZ\›È\Ú›Ø\™Z\›Èˆ›ÛOHœ™YÚ[Ûˆˆ\šXK[X™[YžOHÛÜšÜÜXÙK]]HˆYHÛÜšÜÜXÙK]]HˆÛ\ÜÏHš\Y\Ú›Ø\™]]Hµç5åuåÈ5äuéõê5å5ç5æ5æuåuçÚ]ˆ]K]š\Y]Z[ÏÙ]Ù]]ˆÛ\ÜÏH™\Ú›Ø\™\Ý[[X\žH]ˆÛ\ÜÏH™\Ú›Ø\™[XZ[ˆÙXÝ[ÛˆÛ\ÜÏH™\Ú›Ø\™\[™[]ˆÛ\ÜÏH™\Ú›Ø\™\[™[ZXY[™ÈÏµçµåuæõè5åuêˆ5åuçµèuç5åuçÚÏ]Ûˆ\OH˜]Ûˆˆ]KY\Ú›Ø\™\™XY[™\ÜÏµäõåuåÈ5çµåuæõè5åuêˆ8¡¤Ø]ÛÙ]]ˆÛ\ÜÏH™\Ú›Ø\™\›ÙÜ™\ÜËYÜšY‰È
È›ÙÜ™\ÜÊµé5ê5æuæ5æH5å5æõè5å‹Ëœ\˜Ù[Ë˜ÛÛ\]Y
Èˆ5çµêµåuæˆˆ
ÈËÝ[
Èˆ5å5åuêuç5çµåHŠH
È›ÙÜ™\ÜÊµæõæuèuåuæH5æuçµæH5çµèuç5åuç‹Ëœ›Ý]Kœ\˜Ù[Ëœ›Ý]K˜ÛÝ™\™Y
Èˆ5çµêµåuæˆˆ
ÈËœ›Ý]K™^\È
Èˆ5æuçµæuçH5çµêµåuæõè5è5æuçHŠH
È	ÏÙ]Û\ÜÏH™\Ú›Ø\™[›ÝHµç5é5æH5å5ê5êuåuçµåuêˆ5å5êuçµåuê5åuêŽÈ5ä5æuè5åH5ä5æuçµåuêˆ5å5åµçµè5å5êµêuç5åuçH5ä5åH5äuæ5æuåõåuêˆ5çµèuç5åuçÜÜÙXÝ[ÛÙXÝ[ÛˆÛ\ÜÏH™\Ú›Ø\™\[™[]ˆÛ\ÜÏH™\Ú›Ø\™\[™[ZXY[™ÈÏµêµéõéµæuäH5å5æ5æuåuçÚÏ]Ûˆ\OH˜]Ûˆˆ]KY\Ú›Ø\™YÛÏH™^[œÙ\Èµé5æuê5åuæ5å5åuéµä5åuêˆ8¡¤Ø]ÛÙ]]Z[ÈÛ\ÜÏH™\Ú›Ø\™XYÙ]Y]Z[È‰È
È


ØMHÝ]K˜YÙ]Ü[ŠHOH[ÈØMˆ›ÛÝ›ÝÛ™\‘ØÝ[Y[™Y˜][šY]Ëš[›™\•ÚYˆÌ
HÈˆÜ[ˆˆˆˆŠH
ÈÝ[[X\žOµêµéõéµæuäNˆˆ
È\ØØ\R[
˜[YJË˜YÙ]
JH
È	È0­È5é5æuê5åuæÜÝ[[X\žOÛ\ÜÏH™\Ú›Ø\™[[Û™^H]µêµéõéµæuäOÙ‰È
È\ØØ\R[
˜[YJË˜YÙ]
JH
ÈÙÙ]]µå5åuéµä5åuêˆ5æuäõåuèµåuêÙˆˆ
È\ØØ\R[
˜[YJËœ[›™Y
JH
ÈÙÙ]]µêµêuç5åuçµæuçH5çµäõåuåuåõæuçOÙˆˆ
È\ØØ\R[
˜[YJËœZY
JH
È	ÏÙÙ]]µæuêµê5å5ç5ä5åõê5êµêuç5åuçµæuçOÙÛ\ÜÏH‰È
È
Ëœ™[XZ[š[™ÐYÙ]È™\Ú›Ø\™[™YØ]]™HˆˆˆŠH
È	È‰È
È\ØØ\R[
˜[YJËœ™[XZ[š[™ÐYÙ]
JH
ÈÙÙ]ÙÙ]Z[Ïˆˆ
È
Ë[šÛ›ÝÛˆK[šÛ›ÝÛ”^[Y[ÈÈ	ÏÛ\ÜÏH™\Ú›Ø\™]Ø\›š[™ÈµèuæuæõåuçH5åõç5éõæNˆ	È
È
Ë[šÛ›ÝÛˆÈ\ØØ\R[
Ë[šÛ›ÝÛŠH
Èˆ5å5åuéµä5åuêˆ5ç5ç5ä5çµåõæuêˆˆˆˆŠH
È
K[šÛ›ÝÛ”^[Y[ÈÈµæuêH5êµêuç5åuçµæuçH5äuèuæõåuçH5ç5ä5æuäõåuè‹ˆˆˆˆŠH
ÈµæuêH5ç5å5êuç5æuçH5è5êµåuè5æuçH5äuêµéõéµæuäKÜˆˆˆˆŠH
È	ÏÛ\ÜÏH™\Ú›Ø\™[›ÝHµèuæõåuçµæuçH5äuêuéõç5æuçH5ç5é5æH5äõæuåuåuåõæH5å5ê5êuåuçµåuêŽÈ5ä5æuè5çH5ä5æuçµåuêˆ5èué5éËˆ5êµéõéµæuäHRH5è5é5ê5äËÜÜÙXÝ[ÛÙXÝ[ÛˆÛ\ÜÏH™\Ú›Ø\™\[™[\Ú›Ø\™[™^Ïµç5æ5æué5åuç5äuæ5æuåuçÚÏ‰È
È\ØØ\R[
K˜][[ÛÛÝ[
H
È	È5é5ê5æuæ5æuçH5é5êµåuåõæuçH5ä5åH5èµçH5çµæuäõèˆ5åõèuêÜ]Ûˆ\OH˜]Ûˆˆ]KY\Ú›Ø\™X][[Ûµç5ê5êuæuçµå5ç5é5æH5éõæ5äµåuê5æuå8¡¤Ø]ÛÜÙXÝ[Û]Z[ÈÛ\ÜÏH™\Ú›Ø\™\]ZXÚÈÝ[[X\žOµé5èµåuç5åuêˆ5çµå5æuê5åuêÜÝ[[X\žO˜]ˆÛ\ÜÏH™\Ú›Ø\™\ÚÜÝ]Èˆ\šXK[X™[Hµéõæuéµåuê5æH5äõê5æˆ5ç5æ5æuåuç]Ûˆ\OH˜]Ûˆˆ]KY\Ú›Ø\™XÚ[™ÙOµè5æuå5åuç5æuèµäõæuçOØ]Û‰È
ÈÚÜÝ]Ë›X\

ÚÙ^KÞ[X›ÛX™[JHOˆ	Ï]Ûˆ\OH˜]Ûˆˆ]KY\Ú›Ø\™YÛÏH‰È
ÈÙ^H
È	È‰È
ÈXÛÛŠÞ[X›Û
H
ÈÜ[ˆˆ
ÈX™[
ÈÜÜ[Ø]ÛˆŠKš›Ú[ŠˆŠH
È	ÏÛ˜]Ù]Z[ÏÙ]Ù]ÙXÝ[ÛˆÛ\ÜÏH™\Ú›Ø\™\[™[\Ú›Ø\™X][[Ûˆˆ\šXK[X™[YžOH™\Ú›Ø\™X][[Û‹]]HÈYH™\Ú›Ø\™X][[Û‹]]Hµäõåuê5êH5êµêuåuçµêˆ5ç5äOÚÏ]ˆÛ\ÜÏH™\Ú›Ø\™X][[Û‹Yš[\œÈX™[µéõæ5äµåuê5æuåÙ[XÝ]KX][[Û‹ZÚ[™Ü[Ûˆ˜[YOHˆµæõç5å5éõæ5äµåuê5æuåuêÛÜ[ÛÜ[Ûˆ˜[YOH\ÚÈµçµêuæuçµåuêÛÜ[ÛÜ[Ûˆ˜[YOH™ÙX\ˆµéµæuåuäÏÛÜ[ÛÜ[Ûˆ˜[YOH˜›ÛÚÚ[™Èµå5åµçµè5åuêÛÜ[ÛÜÙ[XÝÛX™[X™[µçµéµäOÙ[XÝ]KX][[Û‹\Ý]\ÏÜ[Ûˆ˜[YOHˆµæõç5å5çµéµäuæuçOÛÜ[Û‰È
ÈØš™XÝ™[šY\ÊÝ]\ÓX™[ÊK›X\

ÚÙ^KX™[JHOˆ	ÏÜ[Ûˆ˜[YOH‰È
ÈÙ^H
È	È‰È
ÈX™[
ÈÛÜ[ÛˆŠKš›Ú[ŠˆŠH
È	ÏÜÙ[XÝÛX™[Ù]]KX][[Û‹XÛÝ[›ÛOHœÝ]\ÈÜ]ˆÛ\ÜÏH™\Ú›Ø\™X][[Û‹[\ÝÙ]ÜÙXÝ[ÛÙXÝ[ÛˆÛ\ÜÏHš\XÛÛ\][Ûˆˆ\šXK[X™[HµäõåuåÈ5çµåuæõè5åuêˆ5ç5æ5æuåuçÜÙXÝ[ÛÙ]‰ÎÂˆÛÛœÝYÙHH›ÛÝœ]Y\žTÙ[XÝÜŠ‹˜ÛY[Y\Ú›Ø\™ŠK\ÝHYÙKœ]Y\žTÙ[XÝÜŠ‹™\Ú›Ø\™X][[Û‹[\ÝŠNÂˆÛÛœÝÙ[XÝH[Ý[ÙXÝ[Û•XœÊÈ›ÛÝˆYÙK™Yš^ˆ›Ý™\šY]È‹X™[ˆµä5åµåuê5æH5ç5åuåÈ5å5çµèuèˆ‹Ý]KÜ›Ý\ÎˆÞÈYˆœÝ[[X\žH‹X™[ˆµêµçµåuè5êˆ5çµéµäH‹›Ù\ÎˆÜYÙKœ]Y\žTÙ[XÝÜŠ‹™\Ú›Ø\™\Ý[[X\žHŠWHKÈYˆ˜][[Ûˆ‹X™[ˆµç5æ5æué5åuç
ˆ
ÈK˜][[ÛÛÝ[
ÈŠH‹›Ù\ÎˆÜYÙKœ]Y\žTÙ[XÝÜŠ‹™\Ú›Ø\™X][[ÛˆŠWHKÈYˆœ™\\˜][Ûˆ‹X™[ˆµçµåuæõè5åuêˆ‹›Ù\ÎˆÜYÙKœ]Y\žTÙ[XÝÜŠ‹š\XÛÛ\][ÛˆŠWHWHJNÂˆ][]™HHYNÂˆÛÛœÝYÙ]HYÙKœ]Y\žTÙ[XÝÜŠ‹™\Ú›Ø\™XYÙ]Y]Z[ÈŠNÂˆYÙ]›ÛÙÙÛHH

HOˆÂˆYˆ
[]™JHÝ]K˜YÙ]Ü[ˆHYÙ]›Ü[ŽÂˆNÂˆÛÛœÝš[\œÈHÝ]K˜][[Ûˆ
Ý]K˜][[ÛˆHÈÚ[™ˆˆ‹Ý]\Îˆˆ‹YÙ\ÎˆßHJNÂˆÛÛœÝÚ[™HYÙKœ]Y\žTÙ[XÝÜŠ–Ù]KX][[Û‹ZÚ[™HŠKÝ]\ÌˆHYÙKœ]Y\žTÙ[XÝÜŠ–Ù]KX][[Û‹\Ý]\×HŠNÂˆÚ[™˜[YHHš[\œËšÚ[™ÂˆÝ]\Ì‹˜[YHHš[\œËœÝ]\ÎÂˆ[˜Ý[Ûˆ˜]Ð][[ÛŠ
HÂˆ\Ýœ]Y\žTÙ[XÝÜ[
–Ù]KY\Ú›Ø\™YY]HŠK™›Ü‘XXÚ

ŠHOˆ‹›Û˜ÛXÚÈH[
NÂˆÛÛœÝ›ÝÜÈHK˜][[Û[™š[\Š

HOˆ
ZÚ[™˜[YHšÚ[™OOHÚ[™˜[YJH	‰ˆ
\Ý]\Ì‹˜[YHœÝ]\ÈOOHÝ]\Ì‹˜[YJJNÂˆYÙKœ]Y\žTÙ[XÝÜŠ–Ù]KX][[Û‹XÛÝ[HŠK^ÛÛ[H›ÝÜË›[™Ý
Èˆ5çµêµåuæˆˆ
ÈK˜][[ÛÛÝ[
Èˆ5é5ê5æuæ5æuçHŽÂˆ\Ýš[›™\’SH›ÝÜË›X\


HOˆ	Ï\XÛO]Ü[ˆÛ\ÜÏH™\Ú›Ø\™\Ý]H	È
ÈœÝ]\È
È	È‰È
ÈÝ]\ÓX™[ÖÞœÝ]\×H
ÈÜÜ[ˆˆ
È\ØØ\R[
]JH
ÈÚ]Z[ÏÝ[[X\žOµé5ê5æ5æuçOÜÝ[[X\žOˆˆ
Èœ™X\ÛÛœË›X\
\ØØ\R[
Kš›Ú[Šˆ0­ÈŠH
È	ÏÜÙ]Z[ÏÙ]]Ûˆ\OH˜]Ûˆˆ]KY\Ú›Ø\™YY]H‰È
È\ØØ\R[
šY
H
È	Èµé5êµåÈ5ê5êuåuçµå8¡¤Ø]ÛØ\XÛO‰ÊKš›Ú[ŠˆŠHµä5æuçÈ5é5ê5æuæ5æuçH5äuèuæuè5åuçÈ5å5è5äuåõêÜˆŽÂˆ[Ý[][TYÙ\ÊÈÛÛZ[™\Žˆ\Ý][\ÎˆË‹‹›\Ýœ]Y\žTÙ[XÝÜ[
˜\XÛHŠWKÝ]Nˆš[\œËœYÙ\ËYÙTÚ^™Nˆ›ÛÝ›ÝÛ™\‘ØÝ[Y[™Y˜][šY]Ëš[›™\•ÚYŒÈˆˆÈJNÂˆ\Ýœ]Y\žTÙ[XÝÜ[
–Ù]KY\Ú›Ø\™YY]HŠK™›Ü‘XXÚ

ŠHOˆ‹›Û˜ÛXÚÈH

HOˆÂˆYˆ
X[]™JH™]\›ŽÂˆÛÛœÝ][HH
š\‹š][\È×JK™š[™


HOˆšYOOH‹™]\Ù]™\Ú›Ø\™Y]	‰ˆ
^š\ÚYš\ÚYOOHš\‹šY
JNÂˆYˆ
][JHÛ‘Y]
][JNÂˆJNÂˆBˆ›Üˆ
ÛÛœÝš[\ˆÙˆÚÚ[™Ý]\Ì—JHš[\‹›Û˜Ú[™ÙHH

HOˆÂˆš[\œËšÚ[™HÚ[™˜[YNÂˆš[\œËœÝ]\ÈHÝ]\Ì‹˜[YNÂˆš[\œËœYÙ\ÈHßNÂˆ˜]Ð][[ÛŠ
NÂˆNÂˆ˜]Ð][[ÛŠ
NÂˆÛÛœÝ]ÛœÈHË‹‹œYÙKœ]Y\žTÙ[XÝÜ[
–Ù]KY\Ú›Ø\™YÛ×KÙ]KY\Ú›Ø\™XÚ[™ÙWKÙ]KY\Ú›Ø\™\™XY[™\Ü×KÙ]KY\Ú›Ø\™X][[Û—HŠWNÂˆ›Üˆ
ÛÛœÝˆÙˆ]ÛœÊH‹›Û˜ÛXÚÈH

HOˆÂˆYˆ
X[]™JH™]\›ŽÂˆYˆ
‹š\Ð]šX]J™]KY\Ú›Ø\™YÛÈŠJH™]\›ˆÛ“˜]šYØ]J‹™]\Ù]™\Ú›Ø\™ÛÊNÂˆYˆ
‹š\Ð]šX]J™]KY\Ú›Ø\™XÚ[™ÙHŠJH™]\›ˆÛÚ[™ÙQ\Ý[˜][ÛŠ
NÂˆÛÛœÝYH‹š\Ð]šX]J™]KY\Ú›Ø\™X][[ÛˆŠHÈ˜][[Ûˆˆˆœ™\\˜][ÛˆŽÂˆÙ[XÝ
Y
NÂˆYÙKœ]Y\žTÙ[XÝÜŠˆÛÝ™\šY]Ë]X‹Hˆ
ÈY
K™›ØÝ\Ê
NÂˆNÂˆ™]\›ˆ

HOˆÂˆ[]™HH˜[ÙNÂˆ]ÛœË™›Ü‘XXÚ

ŠHOˆ‹›Û˜ÛXÚÈH[
NÂˆ\Ýœ]Y\žTÙ[XÝÜ[
˜]ÛˆŠK™›Ü‘XXÚ

ŠHOˆ‹›Û˜ÛXÚÈH[
NÂˆÚ[™›Û˜Ú[™ÙHHÝ]\Ì‹›Û˜Ú[™ÙHH[ÂˆYÙ]›ÛÙÙÛHH[ÂˆNÂˆB‚ˆËÈÜ˜ËÜ›Ý]K\XÙKXÛÛ^šœÂˆ˜\ˆ^T˜[™ÙHH
^ÊHOˆÂˆÛÛœÝHHÝš[™Ê^ÈˆŠK›X]Ú
ÊÎµæõè5æuèuå5é‰õéËõä5æuçÊWÊŠ
ÊWÊ‹ÊŠÎµæuéµæuä5å5é‰õéËõä5ä5åuæ
WÊŠ
ÊKÚJNÂˆ™]\›ˆHÈÈÝ\ˆ[X™\ŠVÌWJK[™ˆ[X™\ŠVÌ—JHHˆ[ÂˆNÂˆ[˜Ý[ÛˆÙÚ[™ÐÛÛ^›Ü‘^J][\ÈH×K^JHÂˆÛÛœÝˆH[X™\Š^JNÂˆYˆ
S[X™\‹š\Ò[YÙ\ŠŠHˆJH™]\›ˆ[ÂˆÛÛœÝØ[™Y]\ÈH][\Ë™š[\Š
][JHOˆÂˆ˜\ˆØMÂˆ™]\›ˆ
][HOH[È›ÚYˆ][KšÚ[™
HOOH˜›ÛÚÚ[™Èˆ	‰ˆõçµç5åuçß5ç5æuè5åÝ[™\ÛÜš[YÙKÚK\Ý
Ýš[™Ê

ØMH][Kœ^[ØY
HOH[È›ÚYˆØM\JHˆŠJNÂˆJNÂˆ›Üˆ
ÛÛœÝ][HÙˆØ[™Y]\ÊHÂˆÛÛœÝH][Kœ^[ØYßK˜[™ÙHH^T˜[™ÙJ››Ý\ÊK˜[YHH›˜[YHœXÙHœÝ\Y\ŽÂˆYˆ
˜[™ÙH	‰ˆˆH˜[™ÙKœÝ\	‰ˆˆ˜[™ÙK™[™	‰ˆ˜[YJH™]\›ˆÈ˜[YK›Ý\ÎˆÝš[™Ê››Ý\ÈˆŠKÛÝ\˜ÙRYˆ][KšYÝ\^Nˆ˜[™ÙKœÝ\[™^Nˆ˜[™ÙK™[™NÂˆBˆ™]\›ˆ[ÂˆB‚ˆËÈÜ˜ËÝš\X˜XÚÙÜ›Ý[™ËšœÂˆ˜\ˆ’TÐPÒÑÔ“ÕS‘ÐÓÕS•HÎÂˆ[˜Ý[Ûˆš\˜XÚÙÜ›Ý[™ÝÜ˜YÙRÙ^J\Ù\’Yš\Y
HÂˆ™]\›ˆ[ÝÜ‹]š\\ÝY[Î˜˜XÚÙÜ›Ý[™‰ÔÝš[™Ê\Ù\’Y˜[›Ûž[[Ý\ÈŠ_N‰ÔÝš[™Êš\Y[šÛ›ÝÛˆŠ_XÂˆBˆ[˜Ý[ÛˆÝX›Q˜[˜XÚÊ\Ù\’Yš\YÛÝ[
HÂˆÛÛœÝ^ÈH	Ý\Ù\’YˆŸN‰Ýš\YˆŸXÂˆ]\ÚHŒMŒLÍŒŒNÂˆ›Üˆ
]HHÈH^Ë›[™ÝÈJÊÊHÂˆ\ÚH^Ë˜Ú\ÛÙP]
JNÂˆ\ÚHX]š[][
\ÚMÍÍÍŒNJNÂˆBˆ™]\›ˆX]˜XœÊ\Ú
H	HÛÝ[ÂˆBˆ[˜Ý[ÛˆÙ[XÝš\˜XÚÙÜ›Ý[™
È\Ù\’Yš\YÝÜ˜YÙHHÛØ˜[\Ë›ØØ[ÝÜ˜YÙK˜[™ÛHHX]œ˜[™ÛKÛÝ[H’TÐPÒÑÔ“ÕS‘ÐÓÕS•HHßJHÂˆÛÛœÝÝ[HX]›X^
K[X™\ŠÛÝ[
H’TÐPÒÑÔ“ÕS‘ÐÓÕS•
KÙ^HHš\˜XÚÙÜ›Ý[™ÝÜ˜YÙRÙ^J\Ù\’Yš\Y
NÂˆ]ÝÜ™YÂˆžHÂˆÝÜ™YHÝÜ˜YÙHOH[È›ÚYˆÝÜ˜YÙK™Ù]][JÙ^JNÂˆHØ]Ú
JHÂˆBˆÛÛœÝ\œÙYH[X™\ŠÝÜ™Y
NÂˆYˆ
ÝÜ™YOOH[	‰ˆÝÜ™YOOHˆˆ	‰ˆ[X™\‹š\Ò[YÙ\Š\œÙY
H	‰ˆ\œÙYH	‰ˆ\œÙYÝ[
H™]\›ˆÈ[™^ˆ\œÙYÙ^HNÂˆ][™^ÂˆžHÂˆÛÛœÝ˜[YLˆH[X™\Š˜[™ÛJ
JNÂˆ[™^H[X™\‹š\Ñš[š]J˜[YLŠHÈX]™›ÛÜŠX]›X^
X]›Z[ŠŽNNNNNK˜[YLŠJH
ˆÝ[
HˆÝX›Q˜[˜XÚÊ\Ù\’Yš\YÝ[
NÂˆHØ]Ú
JHÂˆ[™^HÝX›Q˜[˜XÚÊ\Ù\’Yš\YÝ[
NÂˆBˆžHÂˆÝÜ˜YÙHOH[È›ÚYˆÝÜ˜YÙKœÙ]][JÙ^KÝš[™Ê[™^
JNÂˆHØ]Ú
JHÂˆBˆ™]\›ˆÈ[™^Ù^HNÂˆB‚ˆËÈÜ˜ËØ\šœÂˆ˜\ˆ[™[™ÑÜ›Ý\[š]HH\œÙUš\[š]JÚ[™ÝË›ØØ][Û‹š\Ú
NÂˆ˜\ˆ[š]PÛX[\H[ÂˆYˆ
Ú[™ÝË›ØØ][Û‹š\ÚœÝ\ÕÚ]
ˆÝš\[š]OHŠJHÂˆÛÛœÝÛX[ˆH™]ÈT“
Ú[™ÝË›ØØ][Û‹š™YŠNÂˆÛX[‹š\ÚHˆŽÂˆÚ[™ÝËš\ÝÜžKœ™\XÙTÝ]J[ˆ‹ÛX[ŠNÂˆBˆ˜\ˆÛY[ÈHÜ™X]PÛY[
ÛÝYÛÛ™šYË\›ÛÝYÛÛ™šYËœX›\ÚX›RÙ^KÈ]]ˆÈ\œÚ\ÝÙ\ÜÚ[ÛŽˆYK]]Ô™Yœ™\ÚÚÙ[ŽˆYK›ÝÕ\NˆœØÙH‹]XÝÙ\ÜÚ[Û’[•\›ˆ˜[ÙKÝÜ˜YÙNˆÜ™X]T›ÝšY\”ØY™TÝÜ˜YÙJÚ[™ÝË›ØØ[ÝÜ˜YÙJKÝÜ˜YÙRÙ^NˆZ[[™XÛÝYX]]ˆHJNÂˆ˜\ˆXØÛÝ[\HHÜ™X]PXØÛÝ[\JÛY[ÊNÂˆ˜\ˆÜ›Ý\\HHÜ™X]Uš\Ü›Ý\\JÛY[ÊNÂˆ˜\ˆØÝ[Y[\HHÜ™X]P›ÛÚÚ[™ÑØÝ[Y[Ð\JÛY[ÊNÂˆ˜\ˆšY[^Ü\HHÜ™X]QšY[^Ü\JÛY[ÊNÂˆ˜\ˆÛÝ\˜Ù\Ð\HHÜ™X]P›ÛÚÚ[™ÔÛÝ\˜Ù\Ð\JÛY[ÊNÂˆ˜\ˆXØÛÝ[Ý]HH[Âˆ˜\ˆXØÛÝ[ÚXÚÈHÂˆ˜\ˆ]]ØÜ™Y[ÛX[\H[Âˆ˜\ˆÙÚ[‘Ù[™\˜][ÛˆHÂˆ˜\ˆØ[˜XÚÔ[™[™ÈHYNÂˆ˜\ˆ™XÛÝ™\žT[™[™ÈH˜[ÙNÂˆ˜\ˆ]]HÜ™X]P]]
ÛY[Ë™]ÈT“
‹‹È‹Ú[™ÝË›ØØ][Û‹š™YŠKš™YŠNÂˆ˜\ˆ™\ÈHÜ™X]T™\ÜÚ]ÜžJÛY[ÊNÂˆ˜\ˆ	H
ÊHOˆØÝ[Y[œ]Y\žTÙ[XÝÜŠÊNÂˆ˜\ˆ\ØÌHH
ÊHOˆÝš[™ÊÈOH[ÈÈˆˆŠKœ™\XÙJÖÉˆ‰×KÙË
ÊHOˆ
È‰ˆŽˆ‰˜[\È‹Žˆ‰›È‹ˆŽˆ‰™ÝÈ‹	È‰Îˆ‰œ][ÝÈ‹‰ÈŽˆ‰ˆÌÎNÈˆJVØ×JNÂˆ˜\ˆXœÈHÖÈ™\Ú›Ø\™‹µèuéõæuê5å—KÈ˜YÙ[‹µèuåuæõçË5ä5æuêuåuê5æuçH5åuäõåuí5åõåuêˆ—KÈ™^[œÙ\È‹µêµéõéµæuäH5åuå5åuéµä5åuêˆ—KÈ˜›ÛÚÚ[™È‹µå5åµçµè5åuêˆ—KÈœÝÜ‹µçµèuç5åuç—KÈœXÙH‹µçµéõåuçµåuêˆ5åuêuæuê5åuêµæuçH—KÈ™ÙX\ˆ‹µéµæuåuäÈ5åuå5äõê5æõåuêˆ—KÈ\ÚÈ‹µçµêuæuçµåuêˆ—KÈ™Ü›Ý\‹µå5éõäuåuéµå5êuç5æH—KÈ™ØÝ[Y[È‹µä5æuêuåuê5æH5ç5æuè5å—KÈ™šY[‹µèµê5æõêˆ5êuæ5åÈ5åu¯‘Ô—KÈœÛÝ\˜Ù\È‹µçµéõåuê5åuêˆ5åuäõæuåuåuåõæH5å5åµçµè5å—KÈœÙ][™ÜÈ‹µäµæuäuåuæH5åuè5êµåuè5æuçH—WNÂˆ˜\ˆXÙRYšY[HÈœXÙRY‹‘ÛÛÙÛHXÙHQ8 %5çµêµéõäuç5çµäuåõæuê5êˆ5çµéõåuçH5äu¯‘ÛÛÙÛHX\È—NÂˆ˜\ˆšY[ÌˆHÈ›ÛÚÚ[™ÎˆÖÈ›˜[YH‹µêµæuä5åuê5å5åµçµè5å—KÈ\H‹µèuåuäˆ—KÈœÝ]\È‹µçµéµäH5å5åµçµè5åÈ5êµêuç5åuçH—KÈÛÜšÙ›ÝÔÝ]\È‹µèuæ5æ5åuèH5æ5æué5åuç‹ÛÜšÙ›ÝÈ—KÈœÝ\Y\ˆ‹µèué5éÈ—KÈ˜XÝ[Û‘YQ]H‹µçµåuèµäÈ5ä5åõê5åuçÈ5ç5æ5æué5åuç8 %5ä5åué5éµæuåuè5ç5æH‹™]H—KÈ˜ÚXÚÒ[‘]H‹µêµåõæuç5êˆ5ç5æuè5å8 %5ä5åué5éµæuåuè5ç5æH‹™]H—KÈ˜ÚXÚÓÝ]]H‹µèuæuåuçH5ç5æuè5å8 %5ä5åué5éµæuåuè5ç5æH‹™]H—KÈ˜ÛÜÝ‹µçµåõæuê5æõåuç5ç8 ªˆ‹›[X™\ˆ—KÈœZY‹µêuåuç5çH8 ªˆ‹›[X™\ˆ—KÈœ™Yˆ‹µçµèué5ê5ä5æuêuåuêÈ5å5åµçµè5å—KÈ\›‹µéõæuêuåuê5ç5å5åµçµè5å‹\›—KÈ››Ý\È‹µå5èµê5åuêˆ‹^\™XH—WKÝÜˆÖÈ™^H‹µæuåuçH5äuæ5æuåuç‹›[X™\ˆ—KÈœXÙH‹µçµéõåuçHÈ5æuèµäÈ—KÈšÚ[™‹µèuåuäˆ5èµéµæuê5å—KXÙRYšY[È\›‹µéõæuêuåuê5ç5è5æuåuåuæ‹\›—KÈ››Ý\È‹µêµæõè5åuçÈ5åuå5èµê5åuêˆ‹^\™XH—KÈ›]‹µéõåH5ê5åuåõäH
]]YJH8 $È5ä5åué5éµæuåuè5ç5æH—KÈ›™È‹µéõåH5ä5åuê5æˆ
Û™Ú]YJH8 $È5ä5åué5éµæuåuè5ç5æH—WKXÙNˆÖÈ›˜[YH‹µêuçH5å5çµéõåuçH—KÈ\H‹µèuåuäˆ—KXÙRYšY[È˜\™XH‹µä5åµåuê—KÈ\›‹µéõæuêuåuê5ç5çµé5åuêˆÈ5ä5êµê‹\›—KÈ››Ý\È‹µå5èµê5åuêˆÈ5æ5ç5é5åuçÈÈ5êuèµåuêˆ‹^\™XH—WKÙX\ŽˆÖÈ›˜[YH‹µé5ê5æuæ—KÈ˜Ø]YÛÜžH‹µéõæ5äµåuê5æuå—KÈœÝ]\È‹µèuæ5æ5åuèH—KÈ\›‹µéõæuêuåuê5ç5ê5æõæuêuå‹\›—KÈ™ÝZYH‹µéõæuêuåuê5ç5å5äõê5æõêˆ5êuæuçµåuêH‹\›—KÈ››Ý\È‹µå5èµê5åuêˆ‹^\™XH—WK\ÚÎˆÖÈ]H‹µçµêuæuçµå—KÈ˜Ø]YÛÜžH‹µéõæ5äµåuê5æuå—KÈ™YQ]H‹µçµåuèµäÈ5ä5åõê5åuçÈ8 %5ä5åué5éµæuåuè5ç5æH‹™]H—KÈÛÜšÙ›ÝÔÝ]\È‹µèuæ5æ5åuèH5æ5æué5åuç‹ÛÜšÙ›ÝÈ—WHNÂˆ˜\ˆÛY[ÛÛ›ÛÐÛX[\H[Âˆ˜\ˆ\Ý[˜][Û‘š[\œÈHÈ]Y\žNˆˆ‹Ý]\ÎˆˆˆNÂˆ˜\ˆ›ØÝ\Ñ\Ý[˜][Û”ÙX\˜ÚH˜[ÙNÂˆ˜\ˆš\ÙXÝ[Û”Ý]HHßNÂˆ˜\ˆÙXÝ[Û”Ý]HH
Ù^JHOˆÂˆ˜\ˆØMÂˆ™]\›ˆš\ÙXÝ[Û”Ý]V×ØMH

š\OH[È›ÚYˆš\šY
HˆŠH
ÈŽˆˆ
ÈÙ^WH
š\ÙXÝ[Û”Ý]V×ØMHHßJNÂˆNÂˆ˜\ˆ\ØYÙU˜XÚÚ[™ÈH[Âˆ˜\ˆ˜XÚÙYÙ\ÜÚ[Û•\Ù\ˆH[Âˆ˜\ˆÙ\ÜÚ[ÛˆH[Âˆ˜\ˆš\H[Âˆ˜\ˆXˆHœÝÜŽÂˆ˜\ˆØ]YÛÜšY\ÈHÈXÙNˆ[›ÛÚÚ[™Îˆ[\ÚÎˆ[ÙX\Žˆ[NÂˆ˜\ˆ›Ý]UšY]ÈH›X\ŽÂˆ˜\ˆ›Ý]Q^HH[Âˆ˜\ˆ›Ý]PÛX[\H[Âˆ˜\ˆYZ[“˜]šYØ][ÛÛX[\H[Âˆ˜\ˆ\ÞHH˜[ÙNÂˆ˜\ˆ\ØÚHÂˆ˜\ˆšY]Ñ\ØÚHÂˆ˜\ˆ]]™\œÚ[ÛˆHÂˆ˜\ˆÚ\™Yš\YH[Âˆ˜\ˆ[š]X[\Ý[˜][Û”[™[™ÈHYNÂˆ˜\ˆÙ[XÝYš\YH[Âˆ˜\ˆ\Ý[˜][ÛœÌˆH×NÂˆ˜\ˆÛXÞT™]šY]Ñ\HH˜[ÙNÂˆ˜\ˆ^[œÙPØ]YÛÜžHHˆŽÂˆ˜\ˆÛÜšÕšY]ÜÈHÈ›ÛÚÚ[™ÎˆœÝ]È‹\ÚÎˆœÝ]ÈˆNÂˆ˜\ˆÝ]\Ñš[\œÈHÈ›ÛÚÚ[™Îˆˆ‹\ÚÎˆˆˆNÂˆ˜\ˆš\˜XÚÙÜ›Ý[™ÈHÈ›[Ý[Z[‹\›ØYœ™È‹šÜ˜XšKXÛØ\Ýœ™È‹›Z\ÝK\›ØYœ™È—NÂˆ˜\ˆš\˜XÚÙÜ›Ý[™\›H
˜[YJHOˆ™]ÈT“
‹Ù\ÝØ˜XÚÙÜ›Ý[™ËÉÛ˜[Y_XÚ[™ÝË›ØØ][Û‹š™YŠKš™YŽÂˆ[˜Ý[ÛˆÛX\•š\˜XÚÙÜ›Ý[™

HÂˆØÝ[Y[˜›ÙK˜Û\ÜÓ\Ýœ™[[Ý™Jš\X˜XÚÙÜ›Ý[™XXÝ]™HŠNÂˆØÝ[Y[™ØÝ[Y[[[Y[œÝ[Kœ™[[Ý™T›Ü\J‹K]š\X˜XÚÙÜ›Ý[™Z[XYÙHŠNÂˆBˆ[˜Ý[Ûˆ\Uš\˜XÚÙÜ›Ý[™

HÂˆ˜\ˆØMÂˆYˆ
J
ØMHÙ\ÜÚ[ÛˆOH[È›ÚYˆÙ\ÜÚ[Û‹\Ù\ŠHOH[È›ÚYˆØMšY
HJš\OH[È›ÚYˆš\šY
JHÂˆÛX\•š\˜XÚÙÜ›Ý[™

NÂˆ™]\›ŽÂˆBˆÛÛœÝÙ[XÝYHÙ[XÝš\˜XÚÙÜ›Ý[™
È\Ù\’YˆÙ\ÜÚ[Û‹\Ù\‹šYš\Yˆš\šYÛÝ[ˆš\˜XÚÙÜ›Ý[™Ë›[™ÝJNÂˆØÝ[Y[™ØÝ[Y[[[Y[œÝ[KœÙ]›Ü\J‹K]š\X˜XÚÙÜ›Ý[™Z[XYÙH‹\›
	Ýš\˜XÚÙÜ›Ý[™\›
š\˜XÚÙÜ›Ý[™ÖÜÙ[XÝYš[™^J_JX
NÂˆØÝ[Y[˜›ÙK˜Û\ÜÓ\Ý˜Y
š\X˜XÚÙÜ›Ý[™XXÝ]™HŠNÂˆBˆ[Ý[XY\”[™[
ØÝ[Y[Ú[™ÝÊNÂˆ[˜Ý[ÛˆÝ]\Ê^ÊHÂˆ	
ˆÛY\ÜØYÙHŠK^ÛÛ[H^ÎÂˆ	
ˆÛY\ÜØYÙHŠK™]\Ù]œ\ÜÚ]™HHÝš[™Ê×µè5æ5èµçÈ5çµå5èµè5çßµè5êuçµê5äuèµè5çËË\Ý
^ÊJNÂˆÛÛœÝ™YY˜XÚÈH	
ˆÙY]ÜˆŠKœ]Y\žTÙ[XÝÜŠ–Ù]KYX[ÙË\Ý]\×HŠNÂˆYˆ
™YY˜XÚÊH™YY˜XÚË^ÛÛ[H^ÎÂˆBˆ˜\ˆ[˜]˜Z[X›PÛÛ›Û™X\ÛÛˆH
ÛÛ›ÛŠHOˆ
ÛÛ›ÛˆOH[È›ÚYˆÛÛ›Û‹™]\Ù]™\ØX›Y™X\ÛÛŠH
ÛÛ›ÛˆOH[È›ÚYˆÛÛ›Û‹]JHµå5é5èµåuç5å5ä5æuè5å5åµçµæuè5å5æõê5äµèˆ5ç5é5æH5çµéµäH5å5åõêuäuåuçÈ5ä5åH5å5è5êµåuè5æuçH5å5è5äõê5êuæuçKˆŽÂˆ˜\ˆ[˜]˜Z[X›SY\ÜØYÙU[Y\ˆH[Âˆ˜\ˆ^Z[•[˜]˜Z[X›PÛÛ›ÛH
]™[
HOˆÂˆ˜\ˆØMØ‹ØÎÂˆÛÛœÝÛÛ›ÛˆH
ØˆH
ØMH]™[\™Ù]
HOH[È›ÚYˆØM˜ÛÜÙ\Ý
HOH[È›ÚYˆØ‹˜Ø[
ØM	Ø]Û‹[œ]Ù[XÝ^\™XKÜ›ÛOH˜]Ûˆ—IÊNÂˆYˆ
XÛÛ›ÛˆJÛÛ›Û‹™\ØX›YÛÛ›Û‹™Ù]]šX]J˜\šXKY\ØX›YŠHOOHYHŠJH™]\›ŽÂˆÛÛœÝ™X\ÛÛˆH[˜]˜Z[X›PÛÛ›Û™X\ÛÛŠÛÛ›ÛŠNÂˆÛÛ›Û‹]HH™X\ÛÛŽÂˆÛÛ›Û‹œÙ]]šX]J˜\šXK[X™[‹
ÛÛ›Û‹™Ù]]šX]J˜\šXK[X™[ŠH

ØÈHÛÛ›Û‹^ÛÛ[
HOH[È›ÚYˆØËš[J
JHµé5éõäÈŠH
Èˆ8 %ˆ
È™X\ÛÛŠNÂˆYˆ
]™[\HOOHœÚ[\™ÝÛˆˆ]™[\HOOH˜ÛXÚÈŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆBˆYˆ
ÈœÚ[\›Ý™\ˆ‹œÚ[\™ÝÛˆ‹˜ÛXÚÈ—Kš[˜ÛY\Ê]™[\JJHÂˆÝ]\Ê™X\ÛÛŠNÂˆÛX\•[Y[Ý]
[˜]˜Z[X›SY\ÜØYÙU[Y\ŠNÂˆ[˜]˜Z[X›SY\ÜØYÙU[Y\ˆHÙ][Y[Ý]


HOˆÝ]\ÊˆŠKÍL
NÂˆBˆNÂˆØÝ[Y[˜Y]™[\Ý[™\ŠœÚ[\›Ý™\ˆ‹^Z[•[˜]˜Z[X›PÛÛ›ÛYJNÂˆØÝ[Y[˜Y]™[\Ý[™\ŠœÚ[\™ÝÛˆ‹^Z[•[˜]˜Z[X›PÛÛ›ÛYJNÂˆØÝ[Y[˜Y]™[\Ý[™\Š˜ÛXÚÈ‹^Z[•[˜]˜Z[X›PÛÛ›ÛYJNÂˆ[˜Ý[ÛˆšY[
ËX™[˜[YLˆHˆ‹\HH^ŠHÂˆYˆ
\HOOHÛÜšÙ›ÝÈŠH™]\›ˆX™[ˆˆ
È\ØÌJX™[
H
È	ÏÙ[XÝ˜[YOH‰È
ÈÈ
È	È‰È
ÈÛÜšÙ›ÝÔÝ]\Ù\Ë›X\

ÚY^×JHOˆ	ÏÜ[Ûˆ˜[YOH‰È
ÈY
È	Èˆ	È
È
YOOH˜[YLˆÈœÙ[XÝYˆˆˆŠH
Èˆˆ
È^È
ÈÛÜ[ÛˆŠKš›Ú[ŠˆŠH
ÈÜÙ[XÝÛX™[ˆŽÂˆ™]\›ˆX™[ˆˆ
È\ØÌJX™[
H
È
\HOOH^\™XHˆÈ	Ï^\™XH˜[YOH‰È
ÈÈ
È	È‰È
È\ØÌJ˜[YLŠH
ÈÝ^\™XOˆˆˆ	Ï[œ]]]ØÛÛ\]OH›Ù™ˆˆ˜[YOH‰È
ÈÈ
È	Èˆ\OH‰È
È\H
È	Èˆ˜[YOH‰È
È\ØÌJ˜[YLŠH
È	Èˆ	È
È
È›]‹›™È—Kš[˜ÛY\ÊÊHÈ	Ú[œ][ÙOH™XÚ[X[ˆ	ÈˆˆŠH
È
\HOOH›[X™\ˆˆÈ	ÛZ[HŒˆÝ\H˜[žH‰ÈˆˆŠH
ÈˆŠH
ÈÛX™[ˆŽÂˆBˆ[˜Ý[ÛˆØÚÊ˜[YLŠHÂˆ\ÞHH˜[YLŽÂˆØÝ[Y[œ]Y\žTÙ[XÝÜ[
˜]ÛˆŠK™›Ü‘XXÚ


HOˆ™\ØX›YH˜[YLˆ™Ù]]šX]J˜\šXKY\ØX›YŠHOOHYHŠNÂˆBˆ[˜Ý[ÛˆÚ\J
HÂˆ˜\ˆØMØ‹ØÎÂˆÛX\•š\˜XÚÙÜ›Ý[™

NÂˆÛY[ÛÛ›ÛÐÛX[\OH[È›ÚYˆÛY[ÛÛ›ÛÐÛX[\

NÂˆÛY[ÛÛ›ÛÐÛX[\H[Âˆ\Ý[˜][Û‘š[\œÈHÈ]Y\žNˆˆ‹Ý]\ÎˆˆˆNÂˆ›ØÝ\Ñ\Ý[˜][Û”ÙX\˜ÚH˜[ÙNÂˆÙÚ[‘Ù[™\˜][ÛŠÊÎÂˆ]]ØÜ™Y[ÛX[\OH[È›ÚYˆ]]ØÜ™Y[ÛX[\

NÂˆ]]ØÜ™Y[ÛX[\H[Âˆ[š]PÛX[\OH[È›ÚYˆ[š]PÛX[\

NÂˆ[š]PÛX[\H[ÂˆÚ\™Yš\YH[Âˆ\ØYÙU˜XÚÚ[™ÈOH[È›ÚYˆ\ØYÙU˜XÚÚ[™Ë™\ÜÜÙJ
NÂˆ\ØYÙU˜XÚÚ[™ÈH[Âˆ˜XÚÙYÙ\ÜÚ[Û•\Ù\ˆH[Âˆ
ØMHØÝ[Y[œ]Y\žTÙ[XÝÜŠ–Ù]KYÛØ˜[Xš[[™Ë[[ÙWHŠJHOH[È›ÚYˆØMœ™[[Ý™J
NÂˆÛÜÙPXØÛÝ[YZ[Š	
ˆÙY]ÜˆŠJNÂˆš\ÙXÝ[Û”Ý]HHßNÂˆYZ[“˜]šYØ][ÛÛX[\OH[È›ÚYˆYZ[“˜]šYØ][ÛÛX[\

NÂˆYZ[“˜]šYØ][ÛÛX[\H[Âˆ
ØˆHØÝ[Y[œ]Y\žTÙ[XÝÜŠ	ÖÙ]KXYZ[‹[˜]šYØ][Û‹[ØØ][ÛHœYÙH—IÊJHOH[È›ÚYˆØ‹œ™[[Ý™J
NÂˆXØÛÝ[ÚXÚÊÊÎÂˆXØÛÝ[Ý]HH[ÂˆÛÛœÝÛÛ^HØÝ[Y[œ]Y\žTÙ[XÝÜŠ‹œÚ]KZXY\ˆ˜œ˜[™ŠNÂˆYˆ
ÛÛ^
HÂˆÛÛ^^ÛÛ[HˆŽÂˆÛÛ^šY[ˆHYNÂˆBˆØÝ[Y[˜›ÙK™]\Ù]œØÜ™Y[ˆH›ÙÚ[ˆŽÂˆ^[œÙPØ]YÛÜžHHˆŽÂˆ›Ý]PÛX[\OH[È›ÚYˆ›Ý]PÛX[\

NÂˆ›Ý]PÛX[\H[Âˆ›Ý]UšY]ÈH›X\ŽÂˆ›Ý]Q^HH[Âˆ\ØÚ
ÊÎÂˆšY]Ñ\ØÚ
ÊÎÂˆÙ\ÜÚ[ÛˆH[Âˆš\H[Âˆ[š]X[\Ý[˜][Û”[™[™ÈHYNÂˆÙ[XÝYš\YH[Âˆ\Ý[˜][ÛœÌˆH×NÂˆÛÜšÕšY]ÜÈHÈ›ÛÚÚ[™ÎˆœÝ]È‹\ÚÎˆœÝ]ÈˆNÂˆÝ]\Ñš[\œÈHÈ›ÛÚÚ[™Îˆˆ‹\ÚÎˆˆˆNÂˆØ]YÛÜšY\ÈHÈXÙNˆ[›ÛÚÚ[™Îˆ[\ÚÎˆ[ÙX\Žˆ[NÂˆ\ÞHH˜[ÙNÂˆ	
ˆÙY]ÜˆŠK˜ÛÜÙJ
NÂˆ	
ˆÙY]ÜˆŠKš[›™\’SHˆŽÂˆ	
ˆÝXœÈŠKš[›™\’SHˆŽÂˆ	
ˆØXØÛÝ[ŠKš[›™\’SHˆŽÂˆ
ØÈH	
ˆÙ\Ý[˜][Û‹XÛÛ›ÛÈŠJHOH[È›ÚYˆØËœ™\XÙPÚ[™[Š
NÂˆ	
ˆÝšY]ÈŠKš[›™\’SHˆŽÂˆÝ]\ÊˆŠNÂˆBˆ˜\ˆYZ[“[ÙHH

HOˆ™]ÈT“
Ú[™ÝË›ØØ][Û‹š™YŠKœÙX\˜Ú\˜[\Ë™Ù]
›[ÙHŠHOOH˜YZ[ˆŽÂˆ[˜Ý[ÛˆÚ[™ÙS[ÙJYZ[ŠHÂˆYˆ
Ù\ÜÚ[Ûˆ	‰ˆ
XØÛÝ[Ý]HOH[È›ÚYˆXØÛÝ[Ý]Kš\ÔÝ\\\Ù\ŠJHYZ[ˆHYNÂˆÛÛœÝ\›H™]ÈT“
Ú[™ÝË›ØØ][Û‹š™YŠNÂˆYˆ
YZ[ŠH\›œÙX\˜Ú\˜[\ËœÙ]
›[ÙH‹˜YZ[ˆŠNÂˆ[ÙH\›œÙX\˜Ú\˜[\Ë™[]J›[ÙHŠNÂˆÚ[™ÝËš\ÝÜžKœ™\XÙTÝ]J[ˆ‹\›
NÂˆÛÛœÝ™^HÙ\ÜÚ[ÛŽÂˆÚ\J
NÂˆYˆ
™^
H\TÙ\ÜÚ[ÛŠ™^
K˜Ø]Ú

JHOˆÝ]\ÊK›Y\ÜØYÙJJNÂˆ[ÙHÙÚ[Š
NÂˆBˆ[˜Ý[ÛˆÙÚ[Š
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆÛÛœÝÙ[™\˜][ÛˆH
ÊÛÙÚ[‘Ù[™\˜][ÛŽÂˆ]]ØÜ™Y[ÛX[\OH[È›ÚYˆ]]ØÜ™Y[ÛX[\

NÂˆ]]ØÜ™Y[ÛX[\H[ÂˆYˆ
YZ[“[ÙJ
JHÂˆYZ[“ÙÚ[Š
NÂˆ™]\›ŽÂˆBˆ	
ˆÝšY]ÈŠK^ÛÛ[HµäuåuäõéõæuçH5ä5é5êuê5åuæuåuêˆ5æõè5æuèuå8 )ˆŽÂˆ]Ü[ÛœÎÂˆžHÂˆÜ[ÛœÈHZY[]]›ÙÚ[“Ü[ÛœÊ
NÂˆHØ]Ú
JHÂˆYˆ
Ù[™\˜][ÛˆOOHÙÚ[‘Ù[™\˜][ÛŠHÝ]\Êµç5ä5è5æuêµçÈ5ç5äuäõåuéÈ5ä5é5êuê5åuæuåuêˆ5æõè5æuèuåˆ5æuêH5ç5ê5èµè5çÈ5åuç5è5èuåuêˆ5êuåuäKˆŠNÂˆ™]\›ŽÂˆBˆYˆ
Ù[™\˜][ÛˆOOHÙÚ[‘Ù[™\˜][ÛŠH™]\›ŽÂˆYˆ
Ü[ÛœË›[ÙHOOHœÛØÚX[ŠHÂˆ]]ØÜ™Y[ÛX[\H[Ý[Ý\ÝÛY\”ÛØÚX[ÙÚ[ŠÈ›ÛÝˆ	
ˆÝšY]ÈŠK]]ÛYZ[Žˆ

HOˆÚ[™ÙS[ÙJYJKÛ“YØXÞSZYÜ˜][ÛŽˆ

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆ™]\›ˆ\TÙ\ÜÚ[ÛŠZY[]]œÙ\ÜÚ[ÛŠ
JNÂˆJKÛ”Ý]\ÎˆÝ]\ÈJNÂˆ™]\›ŽÂˆBˆØÝ[Y[˜›ÙK™]\Ù]œØÜ™Y[ˆH›ÙÚ[ˆŽÂˆ	
ˆÝšY]ÈŠKš[›™\’SH	ÏÙXÝ[ÛˆÛ\ÜÏH›ÙÚ[ˆ]ˆÛ\ÜÏH›ÙÚ[‹Z[›ÈÜ[ˆÛ\ÜÏH›ÙÚ[‹\Þ[X›Û‰È
ÈXÛÛŠœ›Ý]HŠH
È	ÏÜÜ[µæõè5æuèuå5ç5¯“[ÝÜˆš\ÝY[ÏÚµæõç5å5æuèµäõæuçH5åuå5æ5æuåuç5æuçH5êuç5æˆ5äuçµéõåuçH5ä5åõäË5çµèuåuè5æõê5è5æuçH5äuæuçÈ5å5ä5æuæué5åuçÈ5ç5çµåõêuäKÜÙ]›Ü›HYH›ÙÚ[ˆ‰È
ÈšY[
™[XZ[‹µæõêµåuäuêˆ5çµæuæuç‹ˆ‹™[XZ[ŠH
ÈšY[
œ\ÜÝÛÜ™‹µèuæuèuçµå‹ˆ‹œ\ÜÝÛÜ™ŠH
È	Ï]Ûˆ\OHœÝX›Z]µæõè5æuèuå5èµçH5èuæuèuçµåØ]Û]Ûˆ\OH˜]ÛˆˆYH›Ü[‹XYZ[‹[ÙÚ[ˆˆÛ\ÜÏHœÙXÛÛ™\žHµæõè5æuèuêˆ5çµè5å5çØ]Û]Ûˆ\OH˜]ÛˆˆYH›Ü[‹\™YÚ\Ý˜][ÛˆˆÛ\ÜÏHœÙXÛÛ™\žHµæuéµæuê5êˆ5åõêuäuåuçÈ5åõäõêOØ]Û]Ûˆ\OH˜]ÛˆˆYHœ™\Ù]\ÜÝÛÜ™µå5äµäõê5êˆ5èuæuèuçµå5ê5ä5êuåuè5åÈ5êuæõåõêµæH5èuæuèuçµåØ]ÛÙ›Ü›O]ˆÛ\ÜÏH›ÙÚ[‹\š]˜XÞH‰È
ÈXÛÛŠœÚY[ŠH
ÈÜ[µå5äµæuêuå5ç5æ5æuåuç5æuçH5åuç5èuåuæõçÈ5åµçµæuè5å5ç5åõêuäuåuè5åuêˆ5é5èµæuç5æuçH5äuç5äuäËˆ5åõêuäuåuçÈ5åõäõêH5çµåué5èµç5ä5åõê5æH5ä5æuçµåuêˆ5çµæuæuç5åuä5æuêuåuê5êµêuç5åuçKÜÜ[Ù]ÜÙXÝ[ÛˆŽÂˆ	
ˆÛÙÚ[ˆ[œ]Û˜[YOY[XZ[HŠK˜]]ØÛÛ\]HH\Ù\›˜[YHŽÂˆ	
ˆÛÙÚ[ˆ[œ]Û˜[YOY[XZ[HŠKœÜ[ÚXÚÈH˜[ÙNÂˆ	
ˆÛÙÚ[ˆ[œ]Û˜[YOY[XZ[HŠKœÙ]]šX]J˜]]ØØ\][^™H‹››Û™HŠNÂˆ	
ˆÛÙÚ[ˆ[œ]Û˜[YO\\ÜÝÛÜ™HŠK˜]]ØÛÛ\]HH˜Ý\œ™[\\ÜÝÛÜ™ŽÂˆ	
ˆÛÙÚ[ˆŠKœ]Y\žTÙ[XÝÜ[
š[œ]ŠK™›Ü‘XXÚ


HOˆœ™\]Z\™YHYJNÂˆ	
ˆÛÙÚ[ˆŠK›ÛœÝX›Z]H
JHOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆKœ™]™[Y˜][

NÂˆÛÛœÝ›Ü›HHK\™Ù][XZ[H›Ü›K™[[Y[Ë™[XZ[˜[YK\ÜÝÛÜ™H›Ü›K™[[Y[Ëœ\ÜÝÛÜ™˜[YNÂˆ›Ü›K™[[Y[Ëœ\ÜÝÛÜ™˜[YHHˆŽÂˆØÚÊYJNÂˆÝ]\Êµçµêµåõäuê8 )ˆŠNÂˆžHÂˆZY[]]œÚYÛ’[Š[XZ[\ÜÝÛÜ™
NÂˆÝ]\Êµå5æõè5æuèuå5å5éµç5æuåõåŠNÂˆHØ]Ú
\œŠHÂˆÝ]\Êµå5æõè5æuèuå5è5æõêuç5åˆˆ
È\œ‹›Y\ÜØYÙJNÂˆHš[˜[HÂˆØÚÊ˜[ÙJNÂˆBˆJNÂˆ	
ˆÛÜ[‹XYZ[‹[ÙÚ[ˆŠK›Û˜ÛXÚÈH

HOˆÚ[™ÙS[ÙJYJNÂˆ	
ˆÛÜ[‹\™YÚ\Ý˜][ÛˆŠK›Û˜ÛXÚÈH™YÚ\Ý\ŽÂˆ	
ˆÜ™\Ù]\ÜÝÛÜ™ŠK›Û˜ÛXÚÈH

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆÛÛœÝ[œ]H	
ˆÛÙÚ[ˆ[œ]Û˜[YOY[XZ[HŠNÂˆYˆ
Z[œ]œ™\Ü˜[Y]J
JH™]\›ŽÂˆØÚÊYJNÂˆžHÂˆZY[]]œ™\]Y\Ý™\Ù]
[œ]˜[YJNÂˆÝ]\Êµä5çH5å5åõêuäuåuçÈ5éõæuæuçH5åuçµåuêµê5ç5êuç5åuåÈ5ä5ç5æuåH5çµæuæuç5æuæuêuç5åÈ5éõæuêuåuê5ç5å5äµäõê5êˆ5èuæuèuçµåˆ5é5êµåÈ5ê5éÈ5ä5êˆ5å5å5åuäõèµå5å5åõäõêuå5äuæuåuêµêˆŠNÂˆHØ]Ú
JHÂˆÝ]\Êµç5ä5è5æuêµçÈ5ç5êuç5åuåÈ5éõæuêuåuê5ç5å5äµäõê5êˆ5èuæuèuçµåˆˆ
ÈK›Y\ÜØYÙJNÂˆHš[˜[HÂˆØÚÊ˜[ÙJNÂˆBˆJNÂˆJNÂˆBˆ[˜Ý[ÛˆYZ[“ÙÚ[Š
HÂˆØÝ[Y[˜›ÙK™]\Ù]œØÜ™Y[ˆH›ÙÚ[ˆŽÂˆ	
ˆÝšY]ÈŠKš[›™\’SH	ÏÙXÝ[ÛˆÛ\ÜÏH›ÙÚ[ˆYZ[‹[ÙÚ[ˆÜ[ˆÛ\ÜÏH˜XØÛÝ[Y^YXœ›ÝÈ“SÕÔˆ’TÕQSÈ0­ÈQRSÜÜ[µæõè5æuèuå5ç5è5æuå5åuç5å5çµèµê5æõêÚµæõè5æuèuå5äuêuçH5å5çµêuêµçµêHYZ[ˆ5åuäuèuæuèuçµêˆ5å5çµè5å5çˆ5åõêuäuåuçÈ5å5è5æuå5åuç5è5é5ê5äÈ5çµåõêuäuåuçÈ5å5ç5éõåuåÈ5åué5åuèµç5ç5ç5ä5æõêµåuäuêˆ5çµæuæuçˆ5ä5æuçÈ5êuåõåµåuê5èuæuèuçµå5äuçµæuæuçÜ›Ü›HYH˜YZ[‹[ÙÚ[ˆ‰È
ÈšY[
\Ù\›˜[YH‹µêuçH5çµêuêµçµêH‹˜YZ[ˆŠH
ÈšY[
œ\ÜÝÛÜ™‹µèuæuèuçµêˆ5çµè5å5ç‹ˆ‹œ\ÜÝÛÜ™ŠH
È	Ï]Ûˆ\OHœÝX›Z]µæõè5æuèuå5ç5çµçµêuéÈ5å5è5æuå5åuçØ]Û]Ûˆ\OH˜]ÛˆˆYH˜Ý\ÝÛY\‹[ÙÚ[ˆˆÛ\ÜÏHœÙXÛÛ™\žHµæõè5æuèuêˆ5ç5éõåuåÏØ]ÛÙ›Ü›OÜÙXÝ[Û‰ÎÂˆÛÛœÝˆH	
ˆØYZ[‹[ÙÚ[ˆŠNÂˆ‹™[[Y[Ë\Ù\›˜[YKœ™\]Z\™YHYNÂˆ‹™[[Y[Ë\Ù\›˜[YK˜]]ØÛÛ\]HH\Ù\›˜[YHŽÂˆ‹™[[Y[Ëœ\ÜÝÛÜ™œ™\]Z\™YHYNÂˆ‹™[[Y[Ëœ\ÜÝÛÜ™˜]]ØÛÛ\]HH˜Ý\œ™[\\ÜÝÛÜ™ŽÂˆ	
ˆØÝ\ÝÛY\‹[ÙÚ[ˆŠK›Û˜ÛXÚÈH

HOˆÚ[™ÙS[ÙJ˜[ÙJNÂˆ‹›ÛœÝX›Z]H
JHOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆKœ™]™[Y˜][

NÂˆÛÛœÝ\Ù\›˜[YHH‹™[[Y[Ë\Ù\›˜[YK˜[YK\ÜÝÛÜ™H‹™[[Y[Ëœ\ÜÝÛÜ™˜[YNÂˆ‹™[[Y[Ëœ\ÜÝÛÜ™˜[YHHˆŽÂˆØÚÊYJNÂˆÝ]\ÊµäuåuäõéÈ5æõè5æuèuêˆ5çµè5å5ç8 )ˆŠNÂˆžHÂˆZY[]]œÚYÛ’[YZ[Š\Ù\›˜[YK\ÜÝÛÜ™
NÂˆHØ]Ú
LŠHÂˆÝ]\ÊL‹›Y\ÜØYÙJNÂˆHš[˜[HÂˆØÚÊ˜[ÙJNÂˆBˆJNÂˆBˆ[˜Ý[ÛˆYZ[’ÛYJ
HÂˆ˜\ˆØMØŽÂˆYˆ
	
ˆÝšY]ÈÙ]KXYZ[‹]ÛÜšÜÜXÙWHŠJH™]\›ŽÂˆÛX\•š\˜XÚÙÜ›Ý[™

NÂˆ›Ý]PÛX[\OH[È›ÚYˆ›Ý]PÛX[\

NÂˆ›Ý]PÛX[\H[Âˆ\ØÚ
ÊÎÂˆšY]Ñ\ØÚ
ÊÎÂˆš\H[ÂˆÙ[XÝYš\YH[Âˆ\Ý[˜][ÛœÌˆH×NÂˆ	
ˆÙY]ÜˆŠK˜ÛÜÙJ
NÂˆ	
ˆÙY]ÜˆŠKš[›™\’SHˆŽÂˆ	
ˆÝXœÈŠKš[›™\’SHˆŽÂˆØÝ[Y[˜›ÙK™]\Ù]œØÜ™Y[ˆH˜YZ[ˆŽÂˆÛÛœÝÛÛ^HØÝ[Y[œ]Y\žTÙ[XÝÜŠ‹œÚ]KZXY\ˆ˜œ˜[™ŠNÂˆYˆ
ÛÛ^
HÂˆÛÛ^^ÛÛ[Hµè5æuå5åuç5å5çµèµê5æõêˆŽÂˆÛÛ^šY[ˆH˜[ÙNÂˆBˆ
ØMH	
ˆÙ\Ý[˜][Û‹XÛÛ›ÛÈŠJHOH[È›ÚYˆØMœ™\XÙPÚ[™[Š
NÂˆ	
ˆØXØÛÝ[ŠKš[›™\’SH	Ï]Ûˆ\OH˜]ÛˆˆYH˜YZ[‹\\ÜÝÛÜ™µêuæuè5åuæH5èuæuèuçµêˆ5çµè5å5çØ]Û]Ûˆ\OH˜]ÛˆˆYH˜YZ[‹\ÚYÛ›Ý]µæuéµæuä5åØ]Û‰ÎÂˆÛÛœÝÙÛÝ]H

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆžHÂˆZY[XØÛÝ[\KœÙ\ÜÚ[ÛXÝ]š]JœÙ\ÜÚ[Û—Ù[™ŠK˜Ø]Ú


HOˆÂˆJNÂˆZY[]]œÚYÛ“Ý]

NÂˆÚ\J
NÂˆÙÚ[Š
NÂˆHØ]Ú
JHÂˆÝ]\ÊK›Y\ÜØYÙJNÂˆBˆJNÂˆ	
ˆØYZ[‹\ÚYÛ›Ý]ŠK›Û˜ÛXÚÈHÙÛÝ]Âˆ	
ˆØYZ[‹\\ÜÝÛÜ™ŠK›Û˜ÛXÚÈH\ÜÝÛÜ™Y]ÜŽÂˆÛÛœÝÛ\ÔÙ][™ÜÈH

HOˆÂˆ›Ý]PÛX[\OH[È›ÚYˆ›Ý]PÛX[\

NÂˆ›Ý]PÛX[\H[Ý[YZ[”Ù][™ÜÊÈ›ÛÝˆ	
ˆÝšY]ÈŠK\NˆXØÛÝ[\KÙXÝ[ÛŽˆœÛ\È‹˜XÚÎˆYZ[’ÛYKÙ[™Û\Îˆ

HOˆÂˆ›Ý]PÛX[\OH[È›ÚYˆ›Ý]PÛX[\

NÂˆ›Ý]PÛX[\H[Ý[YZ[”Û\ÊÈ›ÛÝˆ	
ˆÝšY]ÈŠK\NˆXØÛÝ[\K˜XÚÎˆÛ\ÔÙ][™ÜÈJNÂˆHJNÂˆNÂˆÛÛœÝYZ[”\ÜÝÛÜ™H

HOˆÂˆÛÜÙPXØÛÝ[YZ[Š	
ˆÙY]ÜˆŠJNÂˆ	
ˆÙY]ÜˆŠKš[›™\’SHˆŽÂˆ\ÜÝÛÜ™Y]ÜŠ
NÂˆNÂˆÛÛœÝX[˜YÙHH
[™[
HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆØÝ[Y[œ]Y\žTÙ[XÝÜ[
–Ù]KXYZ[‹Y\Ý[˜][Û—HŠK™›Ü‘XXÚ

]ÛŠHOˆÂˆÛÛœÝXÝ]™HH[™[OOHœÙ[™Û\ÈˆÈœÛ\È‹›X\È‹˜š[[™È‹šÝ[Y\™XÝÜžH‹™Y™™[—Kš[˜ÛY\Ê[™[
HÈœ›ÝšY\œÈˆˆ[™[ÂˆYˆ
]Û‹™]\Ù]˜YZ[‘\Ý[˜][ÛˆOOHXÝ]™JH]Û‹œÙ]]šX]J˜\šXKXÝ\œ™[‹œYÙHŠNÂˆ[ÙH]Û‹œ™[[Ý™P]šX]J˜\šXKXÝ\œ™[ŠNÂˆJNÂˆXØÛÝ[\K˜YZ[•šY]Ê[™[
K˜Ø]Ú


HOˆÂˆJNÂˆÛÜÙPXØÛÝ[YZ[Š	
ˆÙY]ÜˆŠJNÂˆ	
ˆÙY]ÜˆŠKš[›™\’SHˆŽÂˆYˆ
[™[OOHšÛYHŠHÂˆYZ[’ÛYJ
NÂˆ™]\›ŽÂˆBˆYˆ
[™[OOHœ›ÝšY\œÈŠHÂˆ›Ý]PÛX[\OH[È›ÚYˆ›Ý]PÛX[\

NÂˆ›Ý]PÛX[\H[Ý[YZ[”›ÝšY\œÊÈ›ÛÝˆ	
ˆÝšY]ÈŠK˜]šYØ]Nˆ
Ù^JHOˆX[˜YÙJÙ^JHJNÂˆ™]\›ŽÂˆBˆYˆ
[™[OOHšÝ[Y\™XÝÜžHŠHÂˆ›Ý]PÛX[\OH[È›ÚYˆ›Ý]PÛX[\

NÂˆ›Ý]PÛX[\H[Ý[YZ[’Ý[\™XÝÜžJÈ›ÛÝˆ	
ˆÝšY]ÈŠHJNÂˆ™]\›ŽÂˆBˆYˆ
[™[OOH™Y™™[ŠHÂˆ›Ý]PÛX[\OH[È›ÚYˆ›Ý]PÛX[\

NÂˆ›Ý]PÛX[\H[Ý[YZ[‘Y™™[
È›ÛÝˆ	
ˆÝšY]ÈŠHJNÂˆ™]\›ŽÂˆBˆYˆ
ÈœXÙ\È‹˜Y™šXÈ—Kš[˜ÛY\Ê[™[
JHÂˆ›Ý]PÛX[\OH[È›ÚYˆ›Ý]PÛX[\

NÂˆ›Ý]PÛX[\H[Ý[^\›˜[›ÝšY\”Ù][™ÜÊÈ›ÛÝˆ	
ˆÝšY]ÈŠK›ÝšY\’Yˆ[™[JNÂˆ™]\›ŽÂˆBˆYˆ
[™[OOH›X\ÈŠHÂˆ›Ý]PÛX[\H[Ý[X\Ô›ÝšY\”Ù][™ÜÊÈ›ÛÝˆ	
ˆÝšY]ÈŠK\NˆXØÛÝ[\HJNÂˆ™]\›ŽÂˆBˆYˆ
[™[OOH˜]Y]ˆ[™[OOH\ØYÙHŠHÂˆ›Ý]PÛX[\OH[È›ÚYˆ›Ý]PÛX[\

NÂˆ›Ý]PÛX[\H[Ý[XÝ]š]T™XÛÜ™ÊÈ›ÛÝˆ	
ˆÝšY]ÈŠK\NˆXØÛÝ[\K[ÙNˆ[™[OOH\ØYÙHˆÈ\ØYÙHˆˆš›Ý\›˜[ˆJNÂˆ™]\›ŽÂˆBˆYˆ
[™[OOH˜š[[™ÈŠHÂˆ›Ý]PÛX[\OH[È›ÚYˆ›Ý]PÛX[\

NÂˆ›Ý]PÛX[\H[Ý[^[Y[Ú[][]ÜŠÈ›ÛÝˆ	
ˆÝšY]ÈŠK˜XÚÎˆYZ[’ÛYKÝ]NˆXØÛÝ[Ý]K\NˆXØÛÝ[\HJNÂˆ™]\›ŽÂˆBˆYˆ
[™[OOHœÙ[™Û\ÈŠHÂˆ›Ý]PÛX[\OH[È›ÚYˆ›Ý]PÛX[\

NÂˆ›Ý]PÛX[\H[Ý[YZ[”Û\ÊÈ›ÛÝˆ	
ˆÝšY]ÈŠK\NˆXØÛÝ[\K˜XÚÎˆYZ[’ÛYHJNÂˆ™]\›ŽÂˆBˆYˆ
[™[OOHœÛ\ÈŠHÂˆÛ\ÔÙ][™ÜÊ
NÂˆ™]\›ŽÂˆBˆYˆ
[™[OOH\›\ÈŠHÂˆ›Ý]PÛX[\OH[È›ÚYˆ›Ý]PÛX[\

NÂˆ›Ý]PÛX[\H[Ý[YZ[”Ù][™ÜÊÈ›ÛÝˆ	
ˆÝšY]ÈŠK\NˆXØÛÝ[\KÙXÝ[ÛŽˆ[™[˜XÚÎˆYZ[’ÛYHJNÂˆ™]\›ŽÂˆBˆžHÂˆZY[Ü[XØÛÝ[YZ[ŠÈX[ÙÎˆ	
ˆÙY]ÜˆŠK\NˆXØÛÝ[\KÝ]NˆXØÛÝ[Ý]K[X™YYˆYK[š]X[[™[ˆ[™[Ú[™ÙYˆ

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆXØÛÝ[Ý]HHZY[XØÛÝ[\KœÝ]J
NÂˆJHJNÂˆHØ]Ú
JHÂˆÝ]\ÊK›Y\ÜØYÙJNÂˆBˆJNÂˆYZ[“˜]šYØ][ÛÛX[\OH[È›ÚYˆYZ[“˜]šYØ][ÛÛX[\

NÂˆ
ØˆHØÝ[Y[œ]Y\žTÙ[XÝÜŠ	ÖÙ]KXYZ[‹[˜]šYØ][Û‹[ØØ][ÛHœYÙH—IÊJHOH[È›ÚYˆØ‹œ™[[Ý™J
NÂˆÛÛœÝ˜]šYØ][ÛŒˆHØÝ[Y[˜Ü™X]Q[[Y[
™]ˆŠNÂˆ˜]šYØ][ÛŒ‹™]\Ù]˜YZ[“˜]šYØ][Û“ØØ][ÛˆHœYÙHŽÂˆ	
ˆÝšY]ÈŠK˜™Y›Ü™J˜]šYØ][ÛŒŠNÂˆYZ[“˜]šYØ][ÛÛX[\H[Ý[YZ[“˜]šYØ][ÛŠÈ›ÛÝˆ˜]šYØ][ÛŒ‹˜]šYØ]NˆX[˜YÙKÙÛÝ]\ÜÝÛÜ™ˆYZ[”\ÜÝÛÜ™JNÂˆ›Ý]PÛX[\H[Ý[YZ[’ÛYJÈ›ÛÝˆ	
ˆÝšY]ÈŠK\NˆXØÛÝ[\KÙÛÝ]X[˜YÙHJNÂˆÝ]\ÊˆŠNÂˆÛÛœÝ™]\›•\›H™]ÈT“
Ú[™ÝË›ØØ][Û‹š™YŠKÝ\ÝÛY\’YH™]\›•\›œÙX\˜Ú\˜[\Ë™Ù]
˜YZ[—ØÝ\ÝÛY\ˆŠKÙ]\YH™]\›•\›œÙX\˜Ú\˜[\Ë™Ù]
˜YZ[—ØØ\™Ü™]\›ˆŠKšY]ÈHšY]Ñ\ØÚ\Ù\ˆHÙ\ÜÚ[Û‹\Ù\‹šYÂˆYˆ
×–ØKYŒNKW^ÌÍŸIÚK\Ý
Ý\ÝÛY\’YˆŠH	‰ˆ×–ØKYŒNKW^ÌÍŸIÚK\Ý
Ù]\YˆŠJHXØÛÝ[\K˜Ý\ÝÛY\XÝ[ÛŠÈXÝ[ÛŽˆœ™XÛÛ˜Ú[PØ\™‹Ý\ÝÛY\’YÙ]\YJK[Š

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆYˆ
šY]ÈOOHšY]Ñ\ØÚ
Ù\ÜÚ[ÛˆOH[È›ÚYˆÙ\ÜÚ[Û‹\Ù\‹šY
HOOH\Ù\ˆJXØÛÝ[Ý]HOH[È›ÚYˆXØÛÝ[Ý]Kš\ÔÝ\\\Ù\ŠJH™]\›ŽÂˆ™]\›•\›œÙX\˜Ú\˜[\Ë™[]J˜YZ[—ØÝ\ÝÛY\ˆŠNÂˆ™]\›•\›œÙX\˜Ú\˜[\Ë™[]J˜YZ[—ØØ\™Ü™]\›ˆŠNÂˆÚ[™ÝËš\ÝÜžKœ™\XÙTÝ]J[ˆ‹™]\›•\›
NÂˆZY[Ü[XØÛÝ[YZ[ŠÈX[ÙÎˆ	
ˆÙY]ÜˆŠK\NˆXØÛÝ[\KÝ]NˆXØÛÝ[Ý]K[X™YYˆYKÝ\ÝÛY\’YÚ[™ÙYˆ

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆXØÛÝ[Ý]HHZY[XØÛÝ[\KœÝ]J
NÂˆJHJNÂˆJJK˜Ø]Ú

JHOˆÂˆYˆ
šY]ÈOOHšY]Ñ\ØÚ
HÝ]\ÊK›Y\ÜØYÙJNÂˆJNÂˆBˆ[˜Ý[Ûˆ™YÚ\Ý\Š
HÂˆ	
ˆÝšY]ÈŠKš[›™\’SH™YÚ\Ý˜][Û“X\šÝ\

NÂˆ	
ˆØ˜XÚË]Ë[ÙÚ[ˆŠK›Û˜ÛXÚÈHÙÚ[ŽÂˆ	
ˆÜ™YÚ\Ý˜][ÛˆŠK›ÛœÝX›Z]H
JHOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆKœ™]™[Y˜][

NÂˆÛÛœÝˆHK\™Ù]\ÙÈH‹œ]Y\žTÙ[XÝÜŠ–Ù]KXXØÛÝ[[Y\ÜØYÙWHŠNÂˆYˆ
‹™[[Y[Ëœ\ÜÝÛÜ™˜[YHOOH‹™[[Y[Ë˜ÛÛ™š\›K˜[YJHÂˆ\ÙË^ÛÛ[Hµå5èuæuèuçµä5åuêˆ5ä5æuè5çÈ5åµå5åuêˆŽÂˆ™]\›ŽÂˆBˆÛÛœÝ›Ùš[HHØš™XÝ™œ›ÛQ[šY\ÊÈ›˜[YH‹œÛ™H‹œÝ™Y]‹˜Ú]H‹œÜÝÛÙH‹˜ÛÝ[žH—K›X\

ÊHOˆÚË‹™[[Y[ÖÚ×K˜[YKš[J
WJJK\ÜÝÛÜ™H‹™[[Y[Ëœ\ÜÝÛÜ™˜[YK[XZ[H‹™[[Y[Ë™[XZ[˜[YNÂˆ‹™[[Y[Ëœ\ÜÝÛÜ™˜[YHHˆŽÂˆ‹™[[Y[Ë˜ÛÛ™š\›K˜[YHHˆŽÂˆØÚÊYJNÂˆžHÂˆZY[]]œÚYÛ•\
[XZ[\ÜÝÛÜ™›Ùš[JNÂˆ‹œ™\Ù]

NÂˆ\ÙË^ÛÛ[Hµä5çH5å5å5ê5êuçµå5åµçµæuè5å5è5êuç5åÈ5éõæuêuåuê5ä5æuçµåuêˆ5ç5çµæuæuçˆ5é5êµåÈ5ä5åuêµåH5åuåõåµåuê5ç5æõä5çÈ5ç5å5êuç5çµêˆ5å5åõäuæuç5åˆ5ç5ä5äuåuéµèˆ5åõæuåuäKˆŽÂˆHØ]Ú
\œŠHÂˆ\ÙË^ÛÛ[HÙ\ØX›Y›Ý[ÝÙYÚK\Ý
\œ‹›Y\ÜØYÙJHÈµå5ê5êuçµå5åõäõêuå5èµäõæuæuçÈ5èuäµåuê5å5äuå5äµäõê5åuêˆ5å5çµèµê5æõê‹ˆ5ç5ä5è5åuéµê5åõæuåuäKˆˆˆ\œ‹›Y\ÜØYÙNÂˆHš[˜[HÂˆØÚÊ˜[ÙJNÂˆBˆJNÂˆBˆ[˜Ý[ÛˆXØÛÝ[YÙJ
HÂˆÛÛœÝX[ÙÈH	
ˆÙY]ÜˆŠNÂˆX[ÙËš[›™\’SH	Ï]ˆ]KXXØÛÝ[\YÙOÙ]]Ûˆ\OH˜]Ûˆˆ]KXÛÜÙKXXØÛÝ[µèuäµæuê5åØ]Û‰ÎÂˆ[Ý[Û˜›Ø\™[™ÊÈ›ÛÝˆX[ÙËœ]Y\žTÙ[XÝÜŠ–Ù]KXXØÛÝ[\YÙWHŠKÝ]NˆXØÛÝ[Ý]K\NˆXØÛÝ[\Kš\Yˆ
š\OH[È›ÚYˆš\šY
H[\Ý[˜][Û“˜[YNˆ
š\OH[È›ÚYˆš\™\Ý[˜][Û—Û˜[YJHˆ‹™Yœ™\Úˆ

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆZY[™Yœ™\ÚXØÛÝ[XØÙ\ÜÊ
NÂˆYˆ
Ù\ÜÚ[Ûˆ	‰ˆ
XØÛÝ[Ý]HOH[È›ÚYˆXØÛÝ[Ý]KœÝ]\ÊHOOH˜XÝ]™HŠHÂˆXØÛÝ[YÙJ
NÂˆBˆJKÚYÛ“Ý]ˆ

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆZY[XØÛÝ[\KœÙ\ÜÚ[ÛXÝ]š]JœÙ\ÜÚ[Û—Ù[™ŠK˜Ø]Ú


HOˆÂˆJNÂˆZY[]]œÚYÛ“Ý]

NÂˆÚ\J
NÂˆÙÚ[Š
NÂˆJHJNÂˆÛÛœÝÛÜÙPXØÛÝ[HX[ÙËœ]Y\žTÙ[XÝÜŠ–Ù]KXÛÜÙKXXØÛÝ[HŠNÂˆÛÛœÝXØÛÝ[XÝ[ÛœÈHX[ÙËœ]Y\žTÙ[XÝÜŠ–Ù]KXXØÛÝ[XXÝ[Ûœ×HŠNÂˆYˆ
XØÛÝ[XÝ[ÛœÈ	‰ˆÛÜÙPXØÛÝ[
HÂˆÛÜÙPXØÛÝ[^ÛÛ[H°åÈŽÂˆÛÜÙPXØÛÝ[˜Û\ÜÓ˜[YHH˜XÝ[Û‹XÛÜÙHŽÂˆÛÜÙPXØÛÝ[œ™[[Ý™P]šX]J™]KXÛÜÙKXXØÛÝ[ŠNÂˆÛÜÙPXØÛÝ[™]\Ù]˜XØÛÝ[ÛÜÙHHˆŽÂˆÛÜÙPXØÛÝ[›Û˜ÛXÚÈH

HOˆX[ÙË˜ÛÜÙJ
NÂˆXØÛÝ[XÝ[ÛœË˜\[™Ú[
ÛÜÙPXØÛÝ[
NÂˆX[ÙË˜\[™Ú[
ÛÜÙPXØÛÝ[
NÂˆH[ÙHÛÜÙPXØÛÝ[›Û˜ÛXÚÈH

HOˆX[ÙË˜ÛÜÙJ
NÂˆYˆ
YX[ÙË›Ü[ŠHX[ÙËœÚÝÓ[Ù[

NÂˆBˆ[˜Ý[Ûˆ\ÜÝÛÜ™Y]ÜŠ
HÂˆšY]Ñ\ØÚ
ÊÎÂˆ	
ˆÙY]ÜˆŠKš[›™\’SH	Ï›Ü›HYHœ\ÜÝÛÜ™›Ü›Hµå5äµäõê5êˆ5èuæuèuçµå5åõäõêuåÚ‰È
ÈšY[
œ\ÜÝÛÜ™‹µèuæuèuçµå5åõäõêuå‹ˆ‹œ\ÜÝÛÜ™ŠH
ÈšY[
˜ÛÛ™š\›H‹µä5æuçµåuêˆ5èuæuèuçµå‹ˆ‹œ\ÜÝÛÜ™ŠH
È	Ï]Ûˆ\OHœÝX›Z]µêuçµåuê5èuæuèuçµå5åõäõêuåØ]Û]Ûˆ\OH˜]ÛˆˆYH˜Ø[˜Ù[\ÜÝÛÜ™µäuæuæ5åuçØ]ÛYHœ\ÜÝÛÜ™\œ›Üˆˆ›ÛOHœÝ]\ÈÜÙ›Ü›O‰ÎÂˆÛÛœÝ›Ü›HH	
ˆÜ\ÜÝÛÜ™›Ü›HŠNÂˆ	
ˆÙY]ÜˆŠK˜Y]™[\Ý[™\Š˜ÛÜÙH‹

HOˆ›Ü›Kœ™\Ù]

KÈÛ˜ÙNˆYHJNÂˆ›Ü›Kœ]Y\žTÙ[XÝÜ[
š[œ]ŠK™›Ü‘XXÚ


HOˆÂˆœ™\]Z\™YHYNÂˆ›Z[“[™ÝHLŽÂˆ˜]]ØÛÛ\]HH›™]Ë\\ÜÝÛÜ™ŽÂˆJNÂˆ	
ˆØØ[˜Ù[\ÜÝÛÜ™ŠK›Û˜ÛXÚÈH

HOˆ	
ˆÙY]ÜˆŠK˜ÛÜÙJ
NÂˆ›Ü›K›ÛœÝX›Z]H
JHOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆKœ™]™[Y˜][

NÂˆYˆ
›Ü›K™[[Y[Ëœ\ÜÝÛÜ™˜[YHOOH›Ü›K™[[Y[Ë˜ÛÛ™š\›K˜[YJHÂˆ	
ˆÜ\ÜÝÛÜ™\œ›ÜˆŠK^ÛÛ[Hµå5èuæuèuçµä5åuêˆ5ä5æuè5çÈ5åµå5åuêˆŽÂˆ™]\›ŽÂˆBˆÛÛœÝ\ÜÝÛÜ™H›Ü›K™[[Y[Ëœ\ÜÝÛÜ™˜[YNÂˆØÚÊYJNÂˆžHÂˆZY[]]˜Ú[™ÙT\ÜÝÛÜ™
\ÜÝÛÜ™
NÂˆ›Ü›Kœ™\Ù]

NÂˆ	
ˆÙY]ÜˆŠK˜ÛÜÙJ
NÂˆÝ]\Êµå5èuæuèuçµå5èµåuäõæõè5åŠNÂˆHØ]Ú
\œŠHÂˆ›Ü›Kœ™\Ù]

NÂˆ	
ˆÜ\ÜÝÛÜ™\œ›ÜˆŠK^ÛÛ[Hµå5èµäõæõåuçÈ5è5æõêuçˆˆ
È\œ‹›Y\ÜØYÙNÂˆHš[˜[HÂˆØÚÊ˜[ÙJNÂˆBˆJNÂˆYˆ
ØÝ[Y[˜›ÙK™]\Ù]œØÜ™Y[ˆOOH˜YZ[ˆŠH	
ˆÙY]ÜˆŠKœÚÝÊ
NÂˆ[ÙH	
ˆÙY]ÜˆŠKœÚÝÓ[Ù[

NÂˆBˆ[˜Ý[ÛˆØØ[YÙ[[œÝÙ\Š˜[YL‹Ù[XÝ[ÛˆH[
HÂˆ˜\ˆØMØ‹ØËÙÙKÙ‹ÙËÚÚKÚ‹ÚËÛÛKÛ‹ÛËÜÜNÂˆÛÛœÝÝ[[X\žHH^[œÙTÝ]\ÝXÜÊ^[œÙT›ÝÜÊš\š][\Ëš\œÙ][™ÜÊKš\œÙ][™ÜË˜YÙ]
NÂˆÛÛœÝÙ[XÝYÛÛH
Ù[XÝ[ÛˆOH[È›ÚYˆÙ[XÝ[Û‹ÛÛ
H

ØMHÙ[XÝ[ÛˆOH[È›ÚYˆÙ[XÝ[Û‹œÙ[XÝ[ÛŠHOH[È›ÚYˆØMÛÛ
H[ÂˆYˆ
Ù[XÝYÛÛOOH™Ù]ÛÙÚ[™×ØÚXÚÚ[ˆŠHÂˆÛÛœÝ[[HÝ[™\ÙX\˜Ú[[
˜[YL‹š\
NÂˆYˆ
[[›[ÙHOOHœ™\ÙX\˜ÚŠHÂˆYˆ
J
ØˆHÛY[Ë™[˜Ý[ÛœÊHOH[È›ÚYˆØ‹š[›ÚÙJJH™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™JÈ^ˆ5ç5ä5è5êuçµê5åµçµçÈ5æõè5æuèuå5ç5çµç5åuçÈ	Ú[[šÝ[Kˆ5è5äõê5êH5çµåõéõê5åõæuéµåuè5æH5çµä5åuçµêŽÈ5ç5ä5å5åuéµäˆ5è5êµåuçÈ5çµêuåuèµê˜\œ›ÜÛÙNˆ’ÕSÔ‘TÑPTÒÔ‘TURT‘Q‹™\ÙX\˜ÚˆÈÛÛˆ[[ÛÛ\™Ý[Y[Îˆ[[˜\™Ý[Y[ÈHJNÂˆ™]\›ˆÛY[Ë™[˜Ý[ÛœËš[›ÚÙJšÝ[Z[™›Ü›X][Ûˆ‹È›ÙNˆÈš\Yˆš\šYš\™\œÚ[ÛŽˆš\™\œÚ[Û‹[]Nˆ[[˜\™Ý[Y[Ë™[]K]Y\Ý[ÛŽˆ[[˜\™Ý[Y[Ëœ]Y\Ý[Û‹ÛÝ\˜ÙR[ˆ[[˜\™Ý[Y[ËœÛÝ\˜ÙR[XÙRYˆ[[˜\™Ý[Y[ËœXÙRYÚXÚÒ[‘]Nˆ[[˜\™Ý[Y[Ë˜ÚXÚÒ[‘]KÚXÚÓÝ]]Nˆ[[˜\™Ý[Y[Ë˜ÚXÚÓÝ]]HHJK[Š
È]K\œ›ÜˆJHOˆÂˆYˆ
\œ›Üˆ
]HOH[È›ÚYˆ]KœÝ]\ÊHOOH[œ™\ÛÛ™Yˆ
]HOH[È›ÚYˆ]K™\œ›ÜŠJH™]\›ˆÈ^ˆ
]HOH[È›ÚYˆ]K˜[œÝÙ\ŠHµç5ä5è5æuêµçÈ5ç5ä5çµêˆ5æõê5äµèˆ5ä5êˆ5é5ê5æ5æH5å5çµç5åuçËˆ‹\œ›ÜÛÙNˆ
]HOH[È›ÚYˆ]K™\œ›ÜÛÙJH’ÕSÔ‘TÑPTÒÕS”‘TÓÓ‘QˆNÂˆ™]\›ˆÈ^ˆ
]HOH[È›ÚYˆ]K˜[œÝÙ\ŠHµç5ä5å5êµéõäuç5å5êµêuåuäuå5çµä5åuçµêµêˆ5çµçµéõåuê5å5çµç5åuçËˆ‹Ú[™ˆ™]H‹™\ÙX\˜Úˆ]HNÂˆJK˜Ø]Ú


HOˆ
È^ˆµç5ä5è5æuêµçÈ5ç5ä5çµêˆ5æõê5äµèˆ5ä5êˆ5é5ê5æ5æH5å5çµç5åuçËˆ‹\œ›ÜÛÙNˆ’ÕSÔ‘TÑPTÒÕSURSP“HˆJJNÂˆBˆBˆÛÛœÝ]]][Û•ÛÛÈHÈ˜Ü™X]WÜÝÜ‹\]WÝš\Ù]Z[È‹\]WÛÙÚ[™È‹\]WÜÝÜ‹œ™[[Ý™WÜÝÜ‹˜Ü™X]WÝ\ÚÈ‹\]WÝ\ÚÈ‹\]WØ›ÛÚÚ[™×ÜÝ]\È‹œØ]™WÜXÙWÚY‹œ™Yœ™\ÚÝš\Ü™\ÙX\˜Ú—NÂˆYˆ
]]][Û•ÛÛËš[˜ÛY\ÊÙ[XÝYÛÛ
JH™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™JÈÚ[™ˆ˜XÝ[Ûˆ‹^ˆµå5èuåuæõçÈ5åµæuå5å5é5èµåuç5å5êuçµêuè5å5ä5êˆ5å5æ5æuåuçˆ5å5åuä5æuæõæuçÈ5äuéõêuêˆ5ä5æuêuåuê5ä5æˆ5ç5ä5æuäuéµèˆ5êuæuè5åuæH5äuç5æH5ä5æuêuåuê5çµé5åuê5êKˆ‹XÝ[ÛŽˆÈYˆÙ[XÝYÛÛX™[ˆÙ[XÝYÛÛOOH˜Ü™X]WÝ\ÚÈˆÈµæuéµæuê5êˆ5çµêuæuçµåˆˆµä5æuêuåuêˆ
ÈÙ[XÝYÛÛK\œ›ÜÛÙNˆ‘VPÒUÐT“ÕSÔ‘TURT‘QˆJNÂˆYˆ
È™Ù]ÚÝ[ÜšXÙ\È‹œÙX\˜ÚÚÝ[ÜšXÙ\È‹œÙX\˜ÚÚÝ[Ø]˜Z[Xš[]H‹˜ÛÛ\\™WÚÝ[ÜšXÙ\È—Kš[˜ÛY\ÊÙ[XÝYÛÛ
JH™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™JÈ^ˆµå5èuåuæõçÈ5åµæuå5å5ä5êˆ5äuéõêuêˆ5å5çµç5åuè5åuê‹5ä5æˆ5èué5éÈ5çµåõæuê5æH5çµç5åuè5åuêˆ5åuåµçµæuè5åuêˆ5èµäõæuæuçÈ5ç5ä5çµåõåuäuêˆ5ç5ä5å5åuéµäˆ5çµåõæuê5ä5åH5åµçµæuè5åuêˆ5çµåuçµéµä5æuçKˆ‹\œ›ÜÛÙNˆ’ÕSÔ“Õ’QT—ÕSURSP“HˆJNÂˆYˆ
ÈœÙX\˜ÚÙ›YÚÛÜ[ÛœÈ—Kš[˜ÛY\ÊÙ[XÝYÛÛ
JH™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™JÈ^ˆµå5èuåuæõçÈ5åµæuå5å5äuéõêuêˆ5åõæué5åuêH5æ5æuèuåuê‹ˆ5èué5éÈ5å5æ5æuèuåuêˆ5êuè5äuåõê5å5åuäY™™[5ä5æˆ5åõèuê5èµäõæuæuçÈ\ÝÚÙ[ˆ5çµä5åuçµêŽÈ5ç5ä5å5åuéµäµåH5çµåõæuê5æuçH5ä5åH5åµçµæuè5åuêˆ5çµåuçµéµä5æuçKˆ‹\œ›ÜÛÙNˆ‘“QÒÔ“Õ’QT—Ó“ÕÐÓÓ‘’QÕT‘QˆJNÂˆYˆ
ÈœÙX\˜ÚØ]˜XÝ[ÛœÈ‹œÙX\˜ÚÜ™\Ý]\˜[È—Kš[˜ÛY\ÊÙ[XÝYÛÛ
H	‰ˆ

ØÈHÛY[Ë™[˜Ý[ÛœÊHOH[È›ÚYˆØËš[›ÚÙJJHÂˆÛÛœÝÛXZ[ˆHÙ[XÝYÛÛOOHœÙX\˜ÚÜ™\Ý]\˜[ÈˆÈœ™\Ý]\˜[ˆˆ˜]˜XÝ[ÛˆŽÂˆÛÛœÝ]Y\žHHÝš[™Ê˜[YLˆˆŠKœ™\XÙJ×Š5åõé5ê_5äuäõåuéß5å5çµç5é_5êµçÈ5ç5æ_5ä5æué5å5æuê_5ä5æué5å5ç5ä5æõåuç
WÊ‹ËˆŠKš[J
H
ÛXZ[ˆOOHœ™\Ý]\˜[ˆÈµçµèuèµäõåuêˆ5çµåuçµç5éµåuêˆˆˆµä5æ5ê5éõéµæuåuêˆ5çµåuçµç5éµåuêˆŠNÂˆ™]\›ˆÛY[Ë™[˜Ý[ÛœËš[›ÚÙJœXÙ\Ë\ÙX\˜Ú‹È›ÙNˆÈš\Yˆš\šYš\™\œÚ[ÛŽˆš\™\œÚ[Û‹ÛXZ[‹]Y\žK\Ý[˜][ÛŽˆš\™\Ý[˜][Û—Û˜[YHš\™\Ý[˜][ÛˆˆˆHJK[Š
È]K\œ›ÜˆJHOˆÂˆYˆ
\œ›Üˆ
]HOH[È›ÚYˆ]KœÝ]\ÊHOOH[œ™\ÛÛ™Yˆ
]HOH[È›ÚYˆ]K™\œ›ÜŠJH™]\›ˆÈ^ˆµç5ä5è5æuêµçÈ5ç5åõé5êH5æõê5äµèˆ5çµéõåuçµåuêˆ5çµä5åuçµêµæuçH5äu¯‘ÛÛÙÛHXÙ\Ëˆ‹\œ›ÜÛÙNˆ
]HOH[È›ÚYˆ]K™\œ›ÜÛÙJH”PÑT×ÔÑPTÒÕSURSP“HˆNÂˆÛÛœÝ›ÝÜÈH
]Kœ™\Ý[È×JK›X\

][JHOˆÚ][KœXÙS˜[YHµç5ä5æuäõåuèˆ‹][K˜Y™\ÜÈµæõêµåuäuêˆ5ç5ä5è5çµèuê5å‹][Kœ˜][™ÈÈÝš[™Ê][Kœ˜][™ÊHˆ¸ %‹][K›X\Õ\›ÈÈ^ˆµé5êµåÈ5çµé5å‹™YŽˆ][K›X\Õ\›Hˆ¸ %—JNÂˆ™]\›ˆÈÚ[™ˆX›H‹^ˆ5è5çµéµä5åH	Ü›ÝÜË›[™ÝH5êµåuéµä5åuêˆ5çµ¯‘ÛÛÙÛHXÙ\Ëˆ5ä5ç5åH5å5éµèµåuêˆ5çµåõéõê5äuç5äuäË5ç5ä5å5åµçµè5åuê‹˜X›NˆÈØ\[ÛŽˆÛXZ[ˆOOHœ™\Ý]\˜[ˆÈµçµèuèµäõåuêˆ5êuè5çµéµä5åHˆˆµä5æ5ê5éõéµæuåuêˆ5êuè5çµéµä5åH‹ÛÛ[[œÎˆÈµêuçH‹µæõêµåuäuêˆ‹µäõæuê5åuäˆ‹µçµé5å—K›ÝÜÈHNÂˆJK˜Ø]Ú


HOˆ
È^ˆµç5ä5è5æuêµçÈ5ç5åõé5êH5æõê5äµèˆ5çµéõåuçµåuêˆ5çµä5åuçµêµæuçH5äu¯‘ÛÛÙÛHXÙ\Ëˆ‹\œ›ÜÛÙNˆ”PÑT×ÔÑPTÒÕSURSP“HˆJJNÂˆBˆÛÛœÝ^\›˜[ÛÛÈHÈœ™\ÛÛ™WÜXÙWÚY‹™Ù]ÜXÙWÙ]Z[È‹œÙX\˜ÚØ]˜XÝ[ÛœÈ‹™Ù]Ø]˜XÝ[Û—Ù]Z[È‹™Ù]Ø]˜XÝ[Û—ÚÝ\œÈ‹™Ù]Ø]˜XÝ[Û—ÜšXÙ\È‹™Ù]ØÝ\œ™[ÝÙX]\ˆ‹™Ù]ÚÝ\›WÝÙX]\ˆ‹™Ù]ÝÙX]\—Ø[\È‹™Ù]Ù›YÚÙ\˜][Ûˆ‹™Ù]Ù›YÚÙ\Ý[˜ÙH‹œÙX\˜ÚÙ›YÚÛÜ[ÛœÈ‹™Ù]ÙÜ›Ý[™Ý˜[œÙ™\ˆ‹œÙX\˜ÚÜ™\Ý]\˜[È‹œÙX\˜ÚÛ[ÝÜ˜ÞXÛWÜ›Ý]\È‹œÝYÙÙ\ÝÛ™X\˜žWÜÝÜÈ‹œÙX\˜ÚÝÙX—ÜÛÝ\˜Ù\È‹œÝ[[X\š^™WÜÛÝ\˜Ù\È‹˜ÛÛ\\™WÛÜ[ÛœÈ‹œ™]žWÝ[œ™\ÛÛ™YÜ™\ÙX\˜Ú—NÂˆYˆ
^\›˜[ÛÛËš[˜ÛY\ÊÙ[XÝYÛÛ
JH™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™JÈ^ˆµå5èuåuæõçÈ5åµæuå5å5ä5êˆ5å5äuéõêuå5ä5æˆ5èué5éÈ5å5çµæuäõèˆ5å5çµêµä5æuçH5èµäõæuæuçÈ5ç5ä5å5åõåµæuê5êµåuéµä5å5çµä5åuçµêµê‹ˆ5ç5ä5å5åuéµäˆ5çµæuäõèˆ5çµåuçµéµäˆ‹\œ›ÜÛÙNˆ‘VT“SÔ“Õ’QT—ÕSURSP“HˆJNÂˆÛÛœÝ[\›˜[H[œÝÙ\•š\ÛÛ
Ù[XÝYÛÛÈš\Ý[[X\žK]Y\žNˆ˜[YLˆJNÂˆYˆ
[\›˜[
H™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™J[\›˜[
NÂˆÛÛœÝÙX]\”]Y\Ý[ÛˆHÙ[XÝYÛÛOOH™Ù]ÝÙX]\ˆˆ[œÝÙ\•ÙX]\”]Y\Ý[ÛŠ˜[YL‹ßJNÂˆYˆ
ÙX]\”]Y\Ý[Ûˆ	‰ˆ

ÙHÛY[Ë™[˜Ý[ÛœÊHOH[È›ÚYˆÙš[›ÚÙJJHÂˆÛÛœÝ^SX]ÚHÝš[™Ê˜[YLˆˆŠK›X]Ú
õæuåuçWÊŠ
ÊKÊNÂˆÛÛœÝ^HH^SX]ÚÈ[X™\Š^SX]ÚÌWJHˆ›ÚYÂˆÛÛœÝÝ\H
ÙHHš\OH[È›ÚYˆš\œÙ][™ÜÊHOH[È›ÚYˆÙKœÝ\ÂˆYˆ
Ý\
HÂˆÛÛœÝÝ\\ÈH]Kœ\œÙJÝ\
È•ŒŒˆŠKÙ^S\ÈH]Kœ\œÙJ
Êˆ×ÔT‘W×È
‹È™]È]J
JKÒTÓÔÝš[™Ê
KœÛXÙJL
H
È•ŒŒˆŠNÂˆÛÛœÝÙ™œÙ]H
Ý\\ÈHÙ^S\ÊHÈMH
È
^HÈ^HHHˆ
NÂˆYˆ
[X™\‹š\Ñš[š]JÙ™œÙ]
H	‰ˆÙ™œÙ]ˆJH™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™JÈ^ˆµä5æuçÈ5êµåõåµæuêˆ5ä5çµæuè5å5èµäõæuæuçÈ‹\œ›ÜÛÙNˆ•ÑPUT—Ñ“Ô‘PÐTÕÓÕUÓÑ—ÔS‘ÑHˆJNÂˆBˆÛÛœÝ™XY˜Z[\™HH
\œ›Ü‹]JHOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆYˆ
Y\œ›Üˆ	‰ˆ
]HOH[È›ÚYˆ]KœÝ]\ÊHOOH™\šYšYYŠH™]\›ˆ[ÂˆYˆ
]HOH[È›ÚYˆ]K™\œ›ÜŠH™]\›ˆ]NÂˆÛÛœÝÛÛ^H\œ›ÜˆOH[È›ÚYˆ\œ›Ü‹˜ÛÛ^ÂˆYˆ
ÛÛ^OH[È›ÚYˆÛÛ^˜ÛÛ™JHžHÂˆ™]\›ˆZY[ÛÛ^˜ÛÛ™J
KšœÛÛŠ
NÂˆHØ]Ú
JHÂˆBˆYˆ
\[Ùˆ
ÛÛ^OH[È›ÚYˆÛÛ^šœÛÛŠHOOH™[˜Ý[ÛˆŠHžHÂˆ™]\›ˆZY[ÛÛ^šœÛÛŠ
NÂˆHØ]Ú
JHÂˆBˆ™]\›ˆÈ\œ›ÜŽˆ
\œ›ÜˆOH[È›ÚYˆ\œ›Ü‹›Y\ÜØYÙJHµêuæuê5åuêˆ5çµåµäˆ5å5ä5åuåuæuê5ç5ä5å5åõåµæuê5êµêuåuäuåˆ‹\œ›ÜÛÙNˆ
\œ›ÜˆOH[È›ÚYˆ\œ›Ü‹›˜[YJH•ÑPUT—Ô‘TUQTÕÑRSQˆNÂˆJNÂˆ™]\›ˆÛY[Ë™[˜Ý[ÛœËš[›ÚÙJ™ÛÛÙÛK]ÙX]\ˆ‹È›ÙNˆ×ÜÜ™XY˜[Y\ÊÈš\Yˆš\šYš\™\œÚ[ÛŽˆš\™\œÚ[ÛˆK^HÈÈ^HHˆßJHJK[Š
Ì
HOˆ×Ø\Þ[˜Ê[×ÌK[˜Ý[ÛŠˆ
È]K\œ›ÜˆJHÂˆÛÛœÝ˜Z[\™LˆHZY[™XY˜Z[\™J\œ›Ü‹]JNÂˆYˆ
\œ›Üˆ
˜Z[\™LˆOH[È›ÚYˆ˜Z[\™L‹™\œ›ÜŠJH™]\›ˆÈ^ˆ
˜Z[\™LˆOH[È›ÚYˆ˜Z[\™L‹™\œ›ÜŠHµêuæuê5åuêˆ5çµåµäˆ5å5ä5åuåuæuê5ç5ä5å5åõåµæuê5êµêuåuäuåˆ‹\œ›ÜÛÙNˆ
˜Z[\™LˆOH[È›ÚYˆ˜Z[\™L‹™\œ›ÜÛÙJH•ÑPUT—Ô‘TUQTÕÑRSQˆNÂˆÛÛœÝ[œÝÙ\ˆH[œÝÙ\•ÙX]\”]Y\Ý[ÛŠ˜[YL‹ÈÙX]\Žˆ]HJNÂˆ™]\›ˆ
[œÝÙ\ˆOH[È›ÚYˆ[œÝÙ\‹›[šÊHÈ[œÝÙ\ˆˆÈ^ˆ
[œÝÙ\ˆOH[È›ÚYˆ[œÝÙ\‹^
Hµç5ä5è5çµéµä5å5êµåõåµæuêˆ5çµä5åuçµêµê‹ˆˆNÂˆJJK˜Ø]Ú

\œ›ÜŠHOˆ
È^ˆ
\œ›ÜˆOH[È›ÚYˆ\œ›Ü‹›Y\ÜØYÙJHµêuæuê5åuêˆ5çµåµäˆ5å5ä5åuåuæuê5ç5ä5å5åõåµæuê5êµêuåuäuåˆ‹\œ›ÜÛÙNˆ
\œ›ÜˆOH[È›ÚYˆ\œ›Ü‹›˜[YJH•ÑPUT—Ô‘TUQTÕÑRSQˆJJNÂˆBˆÛÛœÝÜ[š[™Ô]Y\Ý[ÛˆHÙ[XÝYÛÛOOH™Ù]ÛÜ[š[™×ÚÝ\œÈˆõêuèµåuê‹Šµé5êµæuåõå5é5êµåuåÈ5å5æuåuç_5çµêµæH5é5êµåuåß5ä5æuê5åuèµæuçKË\Ý
Ýš[™Ê˜[YLˆˆŠJNÂˆYˆ
Ü[š[™Ô]Y\Ý[ÛŠHÂˆÛÛœÝ]Y\žHHÝš[™Ê˜[YLˆˆŠKÓØØ[SÝÙ\Ø\ÙJ
NÂˆÛÛœÝ[˜[YYH
š\š][\È×JK™š[\Š
][JHOˆÈœXÙH‹œÝÜ‹˜›ÛÚÚ[™È—Kš[˜ÛY\Ê][KšÚ[™
JK™š[\Š
][JHOˆÂˆÛÛœÝ^[ØYH][Kœ^[ØYßK˜[YHHÝš[™Ê^[ØY›˜[YH^[ØYœXÙH^[ØYšÝ[˜[YHˆŠKÓØØ[SÝÙ\Ø\ÙJ
KÚÜH˜[YKœÜ]
×ÊËWÊßÊø $×ÊßÊø %ÊËÊVÌKš[J
NÂˆ™]\›ˆ›ÛÛX[Š˜[YH	‰ˆ
]Y\žKš[˜ÛY\Ê˜[YJHÚÜ	‰ˆ]Y\žKš[˜ÛY\ÊÚÜ
JJNÂˆJKœÛÜ

KŠHOˆ[X™\Š‹šÚ[™OOH˜›ÛÚÚ[™ÈŠHH[X™\ŠKšÚ[™OOH˜›ÛÚÚ[™ÈŠJNÂˆÛÛœÝØ[™Y]\ÈH[˜[YY˜ÛÛ˜Ø]

š\š][\È×JK™š[\Š
][JHOˆÂˆYˆ
VÈœXÙH‹œÝÜ‹˜›ÛÚÚ[™È—Kš[˜ÛY\Ê][KšÚ[™
JH™]\›ˆ˜[ÙNÂˆÛÛœÝ^[ØYH][Kœ^[ØYßNÂˆ™]\›ˆ\[Ùˆ
^[ØYœXÙRY^[ØYœXÙWÚY
HOOHœÝš[™Èˆ	‰ˆX[˜[YYš[˜ÛY\Ê][JNÂˆJJNÂˆÛÛœÝXÙHHØ[™Y]\ÖÌNÂˆYˆ
[˜[YY›[™Ý	‰ˆJ

ÙˆHXÙHOH[È›ÚYˆXÙKœ^[ØY
HOH[È›ÚYˆÙ‹œXÙRY
H

ÙÈHXÙHOH[È›ÚYˆXÙKœ^[ØY
HOH[È›ÚYˆÙËœXÙWÚY
JJHÂˆÛÛœÝÝ[˜[YHH

ÚHXÙHOH[È›ÚYˆXÙKœ^[ØY
HOH[È›ÚYˆÚ›˜[YJH

ÚHHXÙHOH[È›ÚYˆXÙKœ^[ØY
HOH[È›ÚYˆÚKœXÙJH

ÚˆHXÙHOH[È›ÚYˆXÙKœ^[ØY
HOH[È›ÚYˆÚ‹šÝ[˜[YJHˆŽÂˆYˆ


ÚÈHÛY[Ë™[˜Ý[ÛœÊHOH[È›ÚYˆÚËš[›ÚÙJH	‰ˆ
XÙHOH[È›ÚYˆXÙKšÚ[™
HOOH˜›ÛÚÚ[™ÈŠH™]\›ˆÛY[Ë™[˜Ý[ÛœËš[›ÚÙJœXÙ\Ë\ÙX\˜Ú‹È›ÙNˆÈš\Yˆš\šYš\™\œÚ[ÛŽˆš\™\œÚ[Û‹][RYˆXÙKšYÛXZ[ŽˆšÝ[‹]Y\žNˆÝ[˜[YK\Ý[˜][ÛŽˆš\™\Ý[˜][Û—Û˜[YHˆˆHJK[Š
È]K\œ›ÜˆJHOˆÂˆYˆ
\œ›Üˆ
]HOH[È›ÚYˆ]KœÝ]\ÊHOOH[œ™\ÛÛ™Yˆ
]HOH[È›ÚYˆ]K™\œ›ÜŠJH™]\›ˆÈ^ˆ5ç5ä5è5æuêµçÈ5ç5åµå5åuêˆ5ä5êˆ5å5çµç5åuçÈ	ÚÝ[˜[Y_H5äu¯‘ÛÛÙÛHXÙ\Ë˜\œ›ÜÛÙNˆ
]HOH[È›ÚYˆ]K™\œ›ÜÛÙJH”PÑT×ÒÕSÔÑPTÒÑRSQˆNÂˆÛÛœÝX]Ú\ÌˆH\œ˜^Kš\Ð\œ˜^J]Kœ™\Ý[ÊHÈ]Kœ™\Ý[Ë™š[\Š

HOˆœXÙRY
Hˆ×NÂˆYˆ
X]Ú\Ì‹›[™ÝOOHJH™]\›ˆÈ^ˆ5è5çµéµä5åH	ÛX]Ú\Ì‹›[™ÝµæõçµåŸH5å5êµä5çµåuêˆ5ç5¯‰ÚÝ[˜[Y_Kˆ5æuêH5ç5äuåõåuê5ä5êˆ5å5çµç5åuçÈ5å5çµêµä5æuçH5ç5é5è5æH5äuäõæuéõêˆ5êuèµåuêˆ5å5é5êµæuåõå˜\œ›ÜÛÙNˆ”PÑT×ÒÕSÐSP’QÕSÕTÈ‹Ø[™Y]\ÎˆX]Ú\ÌˆNÂˆ™]\›ˆÛY[Ë™[˜Ý[ÛœËš[›ÚÙJœXÙ\Ë[Ü[š[™ËZÝ\œÈ‹È›ÙNˆÈš\Yˆš\šYš\™\œÚ[ÛŽˆš\™\œÚ[Û‹XÙRYˆX]Ú\Ì–ÌKœXÙRY^XÝY˜[YNˆÝ[˜[YHHJK[Š
È]NˆÝ\œË\œ›ÜŽˆÝ\œÑ\œ›ÜˆJHOˆÂˆYˆ
Ý\œÑ\œ›Üˆ
Ý\œÈOH[È›ÚYˆÝ\œË™\œ›ÜŠJH™]\›ˆÈ^ˆ
Ý\œÈOH[È›ÚYˆÝ\œË™\œ›ÜŠH5ç5ä5è5æuêµçÈ5ç5ä5çµêˆ5ä5êˆ5êuèµåuêˆ5å5é5êµæuåõå5êuç	ÚÝ[˜[Y_K˜\œ›ÜÛÙNˆ
Ý\œÈOH[È›ÚYˆÝ\œË™\œ›ÜÛÙJH”PÑT×ÓÔS’S‘×ÒÕT”×ÑRSQˆNÂˆÛÛœÝ[œÝÙ\ˆH[œÝÙ\“Ü[š[™ÒÝ\œÔ]Y\Ý[ÛŠ˜[YL‹ÈÜ[š[™ÒÝ\œÎˆÝ\œÈJNÂˆ™]\›ˆ
[œÝÙ\ˆOH[È›ÚYˆ[œÝÙ\‹›[šÊHÈ[œÝÙ\ˆˆÈ^ˆ
[œÝÙ\ˆOH[È›ÚYˆ[œÝÙ\‹^
Hµç5ä5è5çµéµä5å5êµêuåuäuêˆ5êuèµåuêˆ5é5êµæuåõå5çµä5åuçµêµê‹ˆˆNÂˆJK˜Ø]Ú


HOˆ
È^ˆ5ç5ä5è5æuêµçÈ5ç5ä5çµêˆ5ä5êˆ5êuèµåuêˆ5å5é5êµæuåõå5êuç	ÚÝ[˜[Y_K˜\œ›ÜÛÙNˆ”PÑT×ÓÔS’S‘×ÒÕT”×ÑRSQˆJJNÂˆJK˜Ø]Ú


HOˆ
È^ˆ5ç5ä5è5æuêµçÈ5ç5åµå5åuêˆ5ä5êˆ5å5çµç5åuçÈ	ÚÝ[˜[Y_H5äu¯‘ÛÛÙÛHXÙ\Ë˜\œ›ÜÛÙNˆ”PÑT×ÒÕSÔÑPTÒÑRSQˆJJNÂˆ™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™JÈ^ˆ5ç5¯‰ÚÝ[˜[YHµå5çµéõåuçH5êuäuæuéõêuêˆŸH5èµäõæuæuçÈ5ç5ä5è5êuçµêÛÛÙÛHXÙHQˆ5æuêH5ç5åµå5åuêˆ5ä5êˆ5å5çµç5åuçÈ5ç5é5è5æH5äuäõæuéõêˆ5êuèµåuêˆ5å5é5êµæuåõå˜\œ›ÜÛÙNˆ”PÑT×ÔPÑWÒQÔ‘TURT‘QˆJNÂˆBˆÛÛœÝXÙRYH

ÛHXÙHOH[È›ÚYˆXÙKœ^[ØY
HOH[È›ÚYˆÛœXÙRY
H

ÛHHXÙHOH[È›ÚYˆXÙKœ^[ØY
HOH[È›ÚYˆÛKœXÙWÚY
NÂˆYˆ
\XÙRYJ
ÛˆHÛY[Ë™[˜Ý[ÛœÊHOH[È›ÚYˆÛ‹š[›ÚÙJJH™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™J[œÝÙ\“Ü[š[™ÒÝ\œÔ]Y\Ý[ÛŠ˜[YL‹ßJJNÂˆÛÛœÝ^XÝY˜[YHH

ÛÈHXÙHOH[È›ÚYˆXÙKœ^[ØY
HOH[È›ÚYˆÛË›˜[YJH

ÜHXÙHOH[È›ÚYˆXÙKœ^[ØY
HOH[È›ÚYˆÜœXÙJH

ÜHHXÙHOH[È›ÚYˆXÙKœ^[ØY
HOH[È›ÚYˆÜKšÝ[˜[YJHˆŽÂˆ™]\›ˆÛY[Ë™[˜Ý[ÛœËš[›ÚÙJœXÙ\Ë[Ü[š[™ËZÝ\œÈ‹È›ÙNˆÈš\Yˆš\šYš\™\œÚ[ÛŽˆš\™\œÚ[Û‹XÙRY^XÝY˜[YHHJK[Š
È]K\œ›ÜˆJHOˆÂˆYˆ
\œ›Üˆ
]HOH[È›ÚYˆ]K™\œ›ÜŠJH™]\›ˆÈ^ˆ
]HOH[È›ÚYˆ]K™\œ›ÜŠHµç5ä5è5æuêµçÈ5ç5ä5çµêˆ5æõê5äµèˆ5ä5êˆ5êuèµåuêˆ5å5é5êµæuåõåˆ‹\œ›ÜÛÙNˆ
]HOH[È›ÚYˆ]K™\œ›ÜÛÙJH”PÑT×ÓÔS’S‘×ÒÕT”×ÑRSQˆNÂˆÛÛœÝ[œÝÙ\ˆH[œÝÙ\“Ü[š[™ÒÝ\œÔ]Y\Ý[ÛŠ˜[YL‹ÈÜ[š[™ÒÝ\œÎˆ]HJNÂˆ™]\›ˆ
[œÝÙ\ˆOH[È›ÚYˆ[œÝÙ\‹›[šÊHÈ[œÝÙ\ˆˆÈ^ˆ
[œÝÙ\ˆOH[È›ÚYˆ[œÝÙ\‹^
Hµç5ä5è5çµéµä5å5êµêuåuäuêˆ5êuèµåuêˆ5é5êµæuåõå5çµä5åuçµêµê‹ˆˆNÂˆJK˜Ø]Ú


HOˆ
È^ˆµç5ä5è5æuêµçÈ5ç5ä5çµêˆ5æõê5äµèˆ5ä5êˆ5êuèµåuêˆ5å5é5êµæuåõåˆ‹\œ›ÜÛÙNˆ”PÑT×ÓÔS’S‘×ÒÕT”×ÑRSQˆJJNÂˆBˆÛÛœÝ›Ý]T]Y\Ý[ÛˆHÈ™Ù]Ü›Ý]WÙ\Ý[˜ÙH‹™Ù]Ü›Ý]WÛX]š^‹˜[Y]WÜ›Ý]H—Kš[˜ÛY\ÊÙ[XÝYÛÛ
HÊÎµä5åuê5æŸ5çµê5åõéß5éÖõí‰×OõçŸ5éõæuç5åuçµæ5ê5åµçµçÈ5è5èuæuèµå5æõçµåŠŠÎµè5åuèuèŸ5çµê5åõéß5éÖõí‰×OõçŠJKÚK\Ý
Ýš[™Ê˜[YLˆˆŠJNÂˆYˆ
\›Ý]T]Y\Ý[ÛŠHÂˆÛÛœÝÛ˜\ÚÝHÈš\YÙ]ˆš\œÙ][™ÜË˜YÙ]Ü[ˆÝ[[X\žKœZYÙX]\Žˆš\œÙ][™ÜËÙX]\‹Ü[š[™ÒÝ\œÎˆš\œÙ][™ÜË›Ü[š[™ÒÝ\œÈNÂˆÛÛœÝ[œÝÙ\ˆH[œÝÙ\•ÙX]\”]Y\Ý[ÛŠ˜[YL‹Û˜\ÚÝ
H[œÝÙ\“Ü[š[™ÒÝ\œÔ]Y\Ý[ÛŠ˜[YL‹Û˜\ÚÝ
H[œÝÙ\”Ú]T]Y\Ý[ÛŠ˜[YL‹Û˜\ÚÝ
NÂˆ™]\›ˆ[œÝÙ\‹›[šÈÈ[œÝÙ\ˆˆÈ^ˆ[œÝÙ\‹^NÂˆBˆ™]\›ˆÜ™X]T[›š[™Ð\JÛY[ÊKœ›Ý]Q\Ý[˜ÙJš\šYš\™\œÚ[Û‹‘’U‘HŠK[Š
™\Ý[
HOˆÂˆ˜\ˆØMKØŒ‹ØÌ‹Ù‹ÙLŽÂˆYˆ

™\Ý[OH[È›ÚYˆ™\Ý[œÝ]\ÊHOOHœÝXØÙ\ÜÈŠHÂˆÛÛœÝ™X\ÛÛˆH

ØŒˆH
ØMHH™\Ý[OH[È›ÚYˆ™\Ý[[œ™\ÛÛ™Y
HOH[È›ÚYˆØMVÌJHOH[È›ÚYˆØŒ‹œ™X\ÛÛŠHµêuæuê5åuêˆ5å5çµèuç5åuç5ç5ä5å5åõåµæuê5êµåuéµä5êˆ5ä5æuçµåuê‹ˆŽÂˆ™]\›ˆÈ^ˆµç5ä5è5æuêµçÈ5ç5ä5çµêˆ5æõê5äµèˆ5ä5êˆ5çµê5åõéõæH5å5çµèuç5åuçˆ5èuæuäuêˆ5å5èué5éÎˆˆ
È™X\ÛÛˆNÂˆBˆÛÛœÝ™\]Y\ÝY^HH
ØÌˆHÝš[™Ê˜[YLˆˆŠK›X]Ú
õæuåuçWÊŠ
ÊKÚJJHOH[È›ÚYˆØÌ–ÌWNÂˆÛÛœÝÛÝ\˜ÙQ^\ÈH™\]Y\ÝY^HÈ
™\Ý[™^\È×JK™š[\Š
^JHOˆÝš[™Ê^K™^JHOOH™\]Y\ÝY^JHˆ™\Ý[™^\È×NÂˆÛÛœÝÝ[H
ÛÝ\˜ÙQ^\Ëœ™YXÙJ
Ý[K^JHOˆÝ[H
È[X™\Š^K™\Ý[˜ÙSY]\œÈ
K
HÈYLÊKÑš^Y
JNÂˆÛÛœÝ˜Y™šXÈH\™\]Y\ÝY^H	‰ˆ

ÙLˆH
ÙˆH™\Ý[Ý[
HOH[È›ÚYˆÙ‹˜Y™šXÊHOH[È›ÚYˆÙL‹œÝ]\ÊHOOH™\šYšYYˆÈ5åµçµçÈ5êµè5åuèµå5çµä5åuçµêŽˆ	ÓX]œ›Ý[™
[X™\Š™\Ý[Ý[˜Y™šXË™\˜][Û”ÙXÛÛ™È
HÈŒ
_H5äõéõåuê‹˜ˆˆŽÂˆÛÛœÝ›ÝÜÈHÛÝ\˜ÙQ^\Ë›X\

^JHOˆÂˆ˜\ˆØMŽÂˆÛÛœÝ\Ý[˜ÙHH[X™\Š^K™\Ý[˜ÙSY]\œÈ
K\˜][ÛŒˆH[X™\Š^K™\˜][Û”ÙXÛÛ™È
KØØ[HY\Ý[˜ÙH	‰ˆY\˜][ÛŒŽÂˆÛÛœÝÝ]\ÌˆH^K›[ÙHOOH˜Z\ˆˆÈµæ5æuèuåÈ5çµèµäuê5ä5åuåuæuê5æHˆˆØØ[ÈµæuåuçH5çµéõåuçµæHÈ5çµè5åuåõåˆˆ^K˜ÛÛ™šY[˜ÙHOOH™\Ý[X]YˆÈµå5èµê5æõå5äuç5äuäÈˆˆ

ØMˆH^K˜Y™šXÊHOH[È›ÚYˆØM‹œÝ]\ÊHOOH™\šYšYYˆÈµçµä5åuçµêˆˆˆµäõåuê5êH5äuäõæuéõåŽÂˆÛÛœÝ\˜][Û“X™[H^K›[ÙHOOH˜Z\ˆˆÈ^K™\˜][Û”ÙXÛÛ™ÈOOH[^K™\˜][Û”ÙXÛÛ™ÈOOH›ÚYÈµåµçµçÈ5æ5æuèuå5ç5ä5å5åuåµçÈˆˆ	ÓX]œ›Ý[™
\˜][ÛŒˆÈŒ
_H5äõéõåuêˆ5æ5æuèuåˆ	ÓX]œ›Ý[™
\˜][ÛŒˆÈŒ
_H5äõéõåuê˜Âˆ™]\›ˆÈ^Nˆ5æuåuçH	Ù^K™^_X\Ý[˜ÙNˆ	Ê\Ý[˜ÙHÈYLÊKÑš^Y
J_H5éõí5ç˜\˜][ÛŽˆ\˜][Û“X™[˜Y™šXÎˆÝ]\ÌˆNÂˆJNÂˆYˆ
™\]Y\ÝY^H	‰ˆ\›ÝÜË›[™Ý
H™]\›ˆÈ^ˆ5ç5ä5è5çµéµä5åH5è5êµåuè5æH›Ý]\È5ç5æuåuçH	Ü™\]Y\ÝY^_K˜NÂˆÛÛœÝZ\“Û›HH™\]Y\ÝY^H	‰ˆ›ÝÜË›[™Ýˆ	‰ˆ›ÝÜË™]™\žJ
›ÝÊHOˆ›ÝË˜Y™šXÈOOHµæ5æuèuåÈ5çµèµäuê5ä5åuåuæuê5æHŠNÂˆÛÛœÝ\Ý[X]Y^HH›ÝÜËœÛÛYJ
›ÝÊHOˆ›ÝË˜Y™šXÈOOHµå5èµê5æõå5äuç5äuäÈŠNÂˆÛÛœÝ[ÙHHZ\“Û›HÈµåµå5åH5çµèµäuê5ä5åuåuæuê5æNÈ5ç5ä5åõåuêuäH5åµçµçÈ5ê5æõæuäuåˆˆˆ\Ý[X]Y^HÈµå5æuåuçH5æõåuç5ç5å5èµê5æõå5äuç5äuäÈ8 %5è5äõê5êH5ä5æuçµåuêˆ5çµèuç5åuç5æõäuæuêKˆˆˆ™\Ý[œÛÝ\˜ÙHOOH›Z^YÜ›Ý]\×Ù\Ý[X]HˆÈµå5çµèuç5åuç5æõåuç5ç5äµçH5å5èµê5æõåuêˆ5äuç5äuäËˆˆˆµå5çµê5åõéõæuçH5å5åµçµæuè5æuçH5ä5åuçµêµåH5çµåuçÛÛÙÛH›Ý]\ËˆŽÂˆ™]\›ˆÈÚ[™ˆX›H‹^ˆ™\]Y\ÝY^HÈ5æuåuçH	Ü™\]Y\ÝY^_Nˆ	ÝÝ[H5éõí5ç‹ˆ	Û[Ù_Xˆ5ä5åuê5æˆ5éõæ5èµæH5å5ê5æõæuäuå5åuå5è5èuæuèµåˆ	ÝÝ[H5éõí5ç‹ˆ	Û[Ù_X
È˜Y™šXËX›NˆÈØ\[ÛŽˆ™\]Y\ÝY^HÈ5é5æuê5åuæ›Ý]\È8 %5æuåuçH	Ü™\]Y\ÝY^_Xˆµé5æuê5åuæ5å5çµèuç5åuç5ç5é5æH5æuåuçH‹ÛÛ[[œÎˆÈµæuåuçH‹µçµê5åõéÈ‹µåµçµçÈ5è5èuæuèµå‹µèuæ5æ5åuèH—K›ÝÜÎˆ›ÝÜË›X\

›ÝÊHOˆÜ›ÝË™^K›ÝË™\Ý[˜ÙK›ÝË™\˜][Û‹›ÝË˜Y™šX×JHHNÂˆJK˜Ø]Ú

\œ›ÜŠHOˆ
È^ˆ
\œ›ÜˆOH[È›ÚYˆ\œ›Ü‹›Y\ÜØYÙJHµåõæuêuåuäH5å5çµèuç5åuç5åõèuåuçH5èµäÈ5ç5åõæuäuåuê5èué5éÈ5çµé5åuêˆ5çµä5åuçµê‹ˆˆJJNÂˆBˆ[˜Ý[ÛˆYÙ[[œÝÙ\Š˜[YLŠHÂˆÛÛœÝ˜[˜XÚÈH

HOˆÂˆÛÛœÝÙ[XÝYHÛÛÙ[XÝ[Û‘›Ü”]Y\žJ˜[YLŠNÂˆ™]\›ˆÙ[XÝYÛÛÈØØ[YÙ[[œÝÙ\Š˜[YL‹Ù[XÝY
HˆÈ^ˆµç5ä5è5æuêµçÈ5ç5äuåõåuê5æuæõåuç5êˆ5èuåuæõçÈ5æõê5äµè‹ˆ5è5èuå5ç5è5èuåÈ5ä5êˆ5å5êuä5ç5å5çµåõäõêKˆ‹\œ›ÜÛÙNˆQÑS•ÕÓÓÕSURSP“HˆNÂˆNÂˆ™]\›ˆÙ[XÝYÙ[ÛÛ
ÛY[ËÈš\Yˆš\OH[È›ÚYˆš\šYš\™\œÚ[ÛŽˆš\OH[È›ÚYˆš\™\œÚ[Û‹]Y\žNˆ˜[YLˆJK[Š
Ù[XÝ[ÛŠHOˆÂˆ˜\ˆØMÂˆÙ[XÝ[ÛˆH[™›Ü˜ÙUÛÛ[[
˜[YL‹Ù[XÝ[ÛŠNÂˆÛÛœÝÙ[XÝYÛÛH
Ù[XÝ[ÛˆOH[È›ÚYˆÙ[XÝ[Û‹ÛÛ
H

ØMHÙ[XÝ[ÛˆOH[È›ÚYˆÙ[XÝ[Û‹œÙ[XÝ[ÛŠHOH[È›ÚYˆØMÛÛ
NÂˆYˆ
\Ù[XÝYÛÛ
Ù[XÝ[ÛˆOH[È›ÚYˆÙ[XÝ[Û‹œÝ]\ÊHOOH˜›ØÚÙYˆ
Ù[XÝ[ÛˆOH[È›ÚYˆÙ[XÝ[Û‹™\œ›ÜŠH
Ù[XÝ[ÛˆOH[È›ÚYˆÙ[XÝ[Û‹™\œ›ÜÛÙJJH™]\›ˆ˜[˜XÚÊ
NÂˆ™]\›ˆØØ[YÙ[[œÝÙ\Š˜[YL‹Ù[XÝ[ÛŠNÂˆJK˜Ø]Ú


HOˆ˜[˜XÚÊ
JNÂˆBˆ[˜Ý[Ûˆ™\]Y\ÝYÙ[\›Ý˜[
XÝ[ÛŒ‹ÛÛ™\œØ][Û’Y
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆYˆ
XXÝ[ÛŒˆXÛÛ™\œØ][Û’Y]š\
H™]\›ˆÝ]\Êµåõèuê5å5éõêuê5ç5ä5æuêuåuê5å5é5èµåuç5åˆ5ç5ä5äuåuéµèˆ5êuæuè5åuæKˆŠNÂˆžHÂˆÛÛœÝ\›Ý˜[HZY[Ü™X]PYÙ[™\]Y\Ý
ÈØ]]Ø^NˆÜ™X]PYÙ[Ø]]Ø^JÛY[ÊKXÝ[ÛŽˆXÝ[ÛŒ‹š\ÛÛ™\œØ][Û’YJNÂˆÝ]\ÊXÝ[ÛŒ‹šYOOH˜Ü™X]WÝ\ÚÈˆÈµäuéõêuêˆ5å5çµêuæuçµå5è5åuéµê5åˆ5å5çµêuæuçµå5êµæuåuåuéµê5ê5éÈ5ç5ä5åõê5ä5æuêuåuê5å5æõåuêµê5ê‹ˆˆˆµäuéõêuêˆ5å5ä5æuêuåuê5è5åuéµê5åˆ5ä5æuêuåuê5å5äuéõêuå5èµäõæuæuçÈ5ä5æuè5åH5çµäuéµèˆ5êuæuè5åuæH5äuæ5æuåuçˆŠNÂˆ™]\›ˆ\›Ý˜[ÂˆHØ]Ú
JHÂˆÝ]\Êµç5ä5è5æuêµçÈ5ç5æuéµåuê5äuéõêuêˆ5ä5æuêuåuê5æõê5äµè‹ˆ5ç5ä5äuåuéµèˆ5êuæuè5åuæKˆŠNÂˆ™]\›ˆ[ÂˆBˆJNÂˆBˆ[˜Ý[Ûˆ\›Ý™PYÙ[XÝ[ÛŠ™XÛÜ™ÛÛ™\œØ][Û’Y
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆYˆ
J™XÛÜ™OH[È›ÚYˆ™XÛÜ™šY
H]š\
H™]\›ˆÝ]\Êµåõèuê5çµåµå5å5ä5æuêuåuê5ä5åH5æ5æuåuçˆ5ç5ä5äuåuéµèˆ5êuæuè5åuæKˆŠNÂˆYˆ
™XÛÜ™˜XÝ[Û’YOOH˜Ü™X]WÝ\ÚÈŠHÂˆ]™\Ý[ÂˆžHÂˆ™\Ý[HZY[Ü™X]PYÙ[Ø]]Ø^JÛY[ÊK™^XÝ]U\ÚÊÈ\›Ý˜[Yˆ™XÛÜ™šYš\™\œÚ[ÛŽˆ™XÛÜ™š\™\œÚ[Û‹^[ØY^ˆ™XÛÜ™œ^[ØY^JNÂˆHØ]Ú
JHÂˆÝ]\Êµç5ä5è5æuêµçÈ5ç5ä5çµêˆ5ä5êˆ5æuéµæuê5êˆ5å5çµêuæuçµåˆ5ê5èµè5çÈ5ä5êˆ5ê5êuæuçµêˆ5å5çµêuæuçµåuêˆ5ç5é5è5æH5è5æuèuæuåuçÈ5è5åuèuèËˆŠNÂˆ™]\›ˆ[ÂˆBˆYˆ

™\Ý[OH[È›ÚYˆ™\Ý[œÝ]JHOOHœÝXØÙYYYŠHÂˆÝ]\Êµæuéµæuê5êˆ5å5çµêuæuçµå5ç5ä5ä5åuêuê5åˆ5ê5èµè5çÈ5ä5êˆ5å5æ5æuåuç5ç5é5è5æH5è5æuèuæuåuçÈ5è5åuèuèËˆŠNÂˆ™]\›ˆ™\Ý[ÂˆBˆÝ]\Êµå5çµêuæuçµå5è5åuéµê5å5äuæ5æuåuçˆŠNÂˆžHÂˆZY[ØY

NÂˆHØ]Ú
JHÂˆÝ]\Êµå5çµêuæuçµå5è5åuéµê5å5ä5æˆ5ê5èµè5åuçÈ5å5æ5æuåuç5è5æõêuçˆ5ê5èµè5çÈ5æuäõè5æuê‹ˆŠNÂˆBˆ™]\›ˆ™\Ý[ÂˆBˆžHÂˆÛÛœÝ™\Ý[HZY[\›Ý™PYÙ[™\]Y\Ý
ÈØ]]Ø^NˆÜ™X]PYÙ[Ø]]Ø^JÛY[ÊK™XÛÜ™š\ÛÛ™\œØ][Û’YJNÂˆÝ]\Ê
™\Ý[OH[È›ÚYˆ™\Ý[œÝ]JHOOH˜\›Ý™YˆÈµå5äuéõêuå5ä5åuêuê5å5ä5æˆ5êuèµê5å5äuæuéµåuèˆ5èµäõæuæuçÈ5ç5ä5çµåõåuäuêˆ5ç5ä5äuåuéµèˆ5êuæuè5åuæH5äuæ5æuåuçˆˆˆµå5ä5æuêuåuê5ç5ä5å5åuêuç5çKˆ5ç5ä5äuåuéµèˆ5êuæuè5åuæKˆŠNÂˆ™]\›ˆ™\Ý[ÂˆHØ]Ú
JHÂˆÝ]\Êµç5ä5è5æuêµçÈ5ç5ä5êuê5ä5êˆ5å5é5èµåuç5åˆ5æuæuêµæõçÈ5êuå5æ5æuåuç5å5êuêµè5åˆ5ç5ä5äuåuéµèˆ5êuæuè5åuæKˆŠNÂˆ™]\›ˆ[ÂˆBˆJNÂˆBˆ[˜Ý[ÛˆØ[˜Ù[YÙ[XÝ[ÛŠ™XÛÜ™
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆYˆ
J™XÛÜ™OH[È›ÚYˆ™XÛÜ™šY
JH™]\›ˆ[ÂˆžHÂˆ™]\›ˆZY[Ü™X]PYÙ[Ø]]Ø^JÛY[ÊK˜Ø[˜Ù[
™XÛÜ™šY
NÂˆHØ]Ú
JHÂˆÝ]\Êµç5ä5è5æuêµçÈ5ç5äuæ5ç5ä5êˆ5äuéõêuêˆ5å5ä5æuêuåuê5æõê5äµè‹ˆŠNÂˆ™]\›ˆ[ÂˆBˆJNÂˆBˆ[˜Ý[ÛˆÜ[YÙ[Ý™\›^J
HÂˆYˆ
]š\\Ù\ÜÚ[ÛŠH™]\›ŽÂˆØÝ[Y[œ]Y\žTÙ[XÝÜ[
ˆØXØÛÝ[]Z[ËÙ\Ý[˜][Û‹XÛÛ›ÛÈ]Z[ËÝXœÈ]Z[ÈŠK™›Ü‘XXÚ


HOˆ›Ü[ˆH˜[ÙJNÂˆÛÛœÝÝ™\›^HH[Ý[YÙ[Ý™\›^JÈØÝ[Y[ÛÛ[ˆ]ˆ]KXYÙ[[Ý™\›^K\[™[Ù]ˆˆJNÂˆÛÛœÝ[™[HÝ™\›^Kœ›ÛÝœ]Y\žTÙ[XÝÜŠ–Ù]KXYÙ[[Ý™\›^K\[™[HŠNÂˆ]ÛÜÙYH˜[ÙKÛX[\H[Ý[YÙ[[™[
È›ÛÝˆ[™[›ØÚÙY™X\ÛÛŽˆµçµä5çµêˆ5å5ê5êuä5êˆ5èuåuæõçø )ˆˆJNÂˆÛÛœÝÛÜÙHH

HOˆÂˆYˆ
ÛÜÙY
H™]\›ŽÂˆÛÜÙYHYNÂˆÛX[\OH[È›ÚYˆÛX[\

NÂˆÝ™\›^K˜ÛÜÙJ
NÂˆNÂˆÝ™\›^Kœ›ÛÝœ]Y\žTÙ[XÝÜŠ–Ù]KXYÙ[[Ý™\›^KXÛÜÙWHŠK›Û˜ÛXÚÈHÛÜÙNÂˆÜ[’XœšYYÙ[Ù\ÜÚ[ÛŠÈØ]]Ø^NˆÜ™X]PYÙ[Ø]]Ø^JÛY[ÊK›ÛÝ]ˆÈ[ÙNˆ›Ûˆ‹ÝÛ™\’YˆÙ\ÜÚ[Û‹\Ù\‹šYXÝ]™Nˆ
XØÛÝ[Ý]HOH[È›ÚYˆXØÛÝ[Ý]KœÝ]\ÊHOOH˜XÝ]™H‹\ÓX[˜YÙ[Y[ˆ
XØÛÝ[Ý]HOH[È›ÚYˆXØÛÝ[Ý]Kš\ÔÝ\\\Ù\ŠHOOHYHKš\Yˆš\šYJK[Š
™\Ý[
HOˆÂˆ˜\ˆØMÂˆYˆ
ÛÜÙY
H™]\›ŽÂˆÛX[\OH[È›ÚYˆÛX[\

NÂˆÛX[\H[Ý[YÙ[[™[
È›ÛÝˆ[™[ÛÛ^ˆ™\Ý[›ÚÈÈÈ\Ý[˜][Û“˜[YNˆ

ØMH™\Ý[˜ÛÛ™\œØ][ÛŠHOH[È›ÚYˆØM™\Ý[˜][Û“˜[YJHš\™\Ý[˜][Û—Û˜[YHHˆ[Ü[Žˆ™\Ý[›ÚË›ØÚÙY™X\ÛÛŽˆ™\Ý[›ÚÈÈˆˆˆ™\Ý[œ™X\ÛÛ‹Û”Ý\ˆ
^[ØY
HOˆÂˆ˜\ˆØMKØŽÂˆ™]\›ˆ
^[ØYOH[È›ÚYˆ^[ØY˜XÝ[ÛŠHÈ™\]Y\ÝYÙ[\›Ý˜[
^[ØY˜XÝ[Û‹

ØMHH™\Ý[˜ÛÛ™\œØ][ÛŠHOH[È›ÚYˆØMK˜ÛÛ™\œØ][Û’Y
H

ØˆH™\Ý[˜ÛÛ™\œØ][ÛŠHOH[È›ÚYˆØ‹šY
JHˆÝ]\Êµå5é5èµåuç5å5êµåué5èµç5ç5ä5åõê5äuåõæuê5êˆ5é5éõåuäõå5åuä5æuêuåuê5çµé5åuê5êKˆŠNÂˆKÛ\›Ý™Nˆ
™XÛÜ™
HOˆÂˆ˜\ˆØMKØŽÂˆ™]\›ˆ\›Ý™PYÙ[XÝ[ÛŠ™XÛÜ™

ØMHH™\Ý[˜ÛÛ™\œØ][ÛŠHOH[È›ÚYˆØMK˜ÛÛ™\œØ][Û’Y
H

ØˆH™\Ý[˜ÛÛ™\œØ][ÛŠHOH[È›ÚYˆØ‹šY
JNÂˆKÛØ[˜Ù[ˆØ[˜Ù[YÙ[XÝ[Û‹Û“˜]šYØ]Nˆ
Ù^JHOˆÂˆÛÜÙJ
NÂˆYˆ
XØ[“X]™Uš\˜Y

JH™]\›ŽÂˆXˆHÙ^HOOH™Z[HˆÈœÝÜˆˆÙ^NÂˆYˆ
Ù^HOOH™Z[HˆÙ^HOOHœÝÜŠHÂˆ›Ý]UšY]ÈHÙ^HOOH™Z[HˆÈ›\Ýˆˆ›X\ŽÂˆ›Ý]Q^HH[ÂˆBˆ™[™\Š
NÂˆ›ØÝ\ÕšY]Ê
NÂˆKÛ”™\]Y\ÝˆYÙ[[œÝÙ\ˆJNÂˆJK˜Ø]Ú


HOˆÂˆYˆ
ÛÜÙY
H™]\›ŽÂˆÛX[\OH[È›ÚYˆÛX[\

NÂˆÛX[\H[Ý[YÙ[[™[
È›ÛÝˆ[™[›ØÚÙY™X\ÛÛŽˆµå5èuåuæõçÈ5ä5æuè5åH5åµçµæuçÈ5æõê5äµè‹ˆ5è5èuå5ç5ê5èµè5çÈ5ä5åH5ç5é5è5åuêˆ5ç5êµçµæuæõåˆˆJNÂˆJNÂˆBˆ[˜Ý[ÛˆXØÛÝ[

HÂˆØÝ[Y[˜›ÙK™]\Ù]œØÜ™Y[ˆHš\Èš\ˆˆ™\Ý[˜][ÛœÈŽÂˆ\Uš\˜XÚÙÜ›Ý[™

NÂˆÛÛœÝÛÛ^HØÝ[Y[œ]Y\žTÙ[XÝÜŠ‹œÚ]KZXY\ˆ˜œ˜[™ŠNÂˆYˆ
ÛÛ^
HÂˆÛÛ^^ÛÛ[Hš\	‰ˆXˆOOH™\Ú›Ø\™ˆÈµèuæ5æ5åuèNˆˆ
ÈÝ]\ÓX™[
š\œÙ][™ÜÊHˆˆŽÂˆÛÛ^šY[ˆH]š\XˆOOH™\Ú›Ø\™ŽÂˆBˆÛY[ÛÛ›ÛÐÛX[\OH[È›ÚYˆÛY[ÛÛ›ÛÐÛX[\

NÂˆÛY[ÛÛ›ÛÐÛX[\H[Ý[ÛY[ÛÛ›ÛÊÈXØÛÝ[›ÛÝˆ	
ˆØXØÛÝ[ŠK\Ý[˜][Û”›ÛÝˆ	
ˆÙ\Ý[˜][Û‹XÛÛ›ÛÈŠKš\\Ý[˜][ÛœÎˆ\Ý[˜][ÛœÌ‹ÛYPXÝ]™Nˆ]š\	‰ˆ\Ú\™Yš\Y	‰ˆ\Ù[XÝYš\Y[XZ[ˆÙ\ÜÚ[Û‹\Ù\‹™[XZ[\ÐYZ[Žˆ
XØÛÝ[Ý]HOH[È›ÚYˆXØÛÝ[Ý]Kš\ÔÝ\\\Ù\ŠHOOHYHJNÂˆYˆ
]š\
H™[™\•š\˜]šYØ][ÛŠ˜[ÙJNÂˆÛÛœÝÛÜÙSY[\ÈH

HOˆØÝ[Y[œ]Y\žTÙ[XÝÜ[
ˆØXØÛÝ[]Z[ËÙ\Ý[˜][Û‹XÛÛ›ÛÈ]Z[ËÝXœÈ]Z[ÈŠK™›Ü‘XXÚ


HOˆ›Ü[ˆH˜[ÙJNÂˆÛÛœÝXÚÙ\ˆH	
ˆØÛY[Y\Ý[˜][Û‹\XÚÙ\ˆŠNÂˆYˆ
XÚÙ\ŠHÂˆXÚÙ\‹™\ØX›YH\ÞNÂˆXÚÙ\‹›Û˜Ú[™ÙHH

HOˆÂˆYˆ
XÚÛÜÙQ\Ý[˜][ÛŠXÚÙ\‹˜[YJJHXÚÙ\‹˜[YHH
š\OH[È›ÚYˆš\šY
HˆŽÂˆNÂˆBˆÛÛœÝÚÝÑ\Ý[˜][Û’ÛYHH
›ØÝ\ÔÙX\˜ÚH˜[ÙJHOˆÂˆYˆ
\ÞHXØ[“X]™Uš\˜Y

JH™]\›ŽÂˆ›ØÝ\Ñ\Ý[˜][Û”ÙX\˜ÚH›ØÝ\ÔÙX\˜ÚOOHYNÂˆ	
ˆÙY]ÜˆŠK˜ÛÜÙJ
NÂˆ›Ý]PÛX[\OH[È›ÚYˆ›Ý]PÛX[\

NÂˆ›Ý]PÛX[\H[Âˆ[š]X[\Ý[˜][Û”[™[™ÈH˜[ÙNÂˆÙ[XÝYš\YH[ÂˆÚ\™Yš\YH[Âˆš\H[Âˆ\ØÚ
ÊÎÂˆšY]Ñ\ØÚ
ÊÎÂˆØY

K˜Ø]Ú
ÚÝÓØY\œ›ÜŠNÂˆNÂˆÛÛœÝÛYHH	
ˆÙ\Ý[˜][ÛœËZÛYHŠNÂˆYˆ
ÛYJHÛYK›Û˜ÛXÚÈH

HOˆÚÝÑ\Ý[˜][Û’ÛYJ
NÂˆÛÛœÝÙX\˜ÚH	
ˆÜÙX\˜ÚY\Ý[˜][ÛœÈŠNÂˆYˆ
ÙX\˜Ú
HÙX\˜Ú›Û˜ÛXÚÈH

HOˆÂˆYˆ
\ÞH	
ˆÙY]ÜˆŠK›Ü[ŠH™]\›ŽÂˆÚÝÑ\Ý[˜][Û’ÛYJYJNÂˆNÂˆ	
ˆØYY\Ý[˜][ÛˆŠK›Û˜ÛXÚÈH

HOˆÂˆYˆ
\ÞJH™]\›ŽÂˆÛÜÙSY[\Ê
NÂˆ\Ý[˜][Û‘Y]ÜŠ
NÂˆNÂˆÛÛœÝYÙ[][˜Ú\ˆH	
ˆØYÙ[[][˜Ú\ˆŠNÂˆYˆ
YÙ[][˜Ú\ŠHYÙ[][˜Ú\‹›Û˜ÛXÚÈH

HOˆÂˆYˆ
]š\
HÂˆÝ]\ÊµæuêH5ç5äuåõåuê5æ5æuåuç5ç5é5è5æH5é5êµæuåõêˆ5å5èuåuæõçËˆŠNÂˆ™]\›ŽÂˆBˆÜ[YÙ[Ý™\›^J
NÂˆNÂˆ	
ˆÜ™Yœ™\ÚŠK›Û˜ÛXÚÈH

HOˆÂˆYˆ
	
ˆÝšY]ÈÙ]K]š\YY]Y›Ü›WHŠJHÂˆÝ]\ÊµæuêH5ç5êuçµåuê5ä5åH5ç5äuæ5ç5ä5êˆ5èµê5æuæõêˆ5é5ê5æ5æH5å5æ5æuåuç5ç5é5è5æH5ê5èµè5åuçËˆŠNÂˆ™]\›ŽÂˆBˆYˆ
ÛXÞT™]šY]Ñ\H	‰ˆXÛÛ™š\›Jµê5èµè5åuçÈ5æuåõç5æuèÈ5äuåõæuê5åuêˆ5êuæ5ê5çH5ä5åuêuê5åKˆ5ç5å5çµêuæuæÈŠJH™]\›ŽÂˆÛXÞT™]šY]Ñ\HH˜[ÙNÂˆØY

K˜Ø]Ú
ÚÝÓØY\œ›ÜŠNÂˆNÂˆØÝ[Y[œ]Y\žTÙ[XÝÜ[
ˆØXØÛÝ[Ù]KY\Ý[˜][Û‹YY]KÙ\Ý[˜][Û‹XÛÛ›ÛÈÙ]KY\Ý[˜][Û‹YY]HŠK™›Ü‘XXÚ

ŠHOˆ‹›Û˜ÛXÚÈH

HOˆÂˆÛÜÙSY[\Ê
NÂˆ\Ý[˜][Û‘Y]ÜŠ\Ý[˜][ÛœÌ‹™š[™


HOˆšYOOH‹™]\Ù]™\Ý[˜][Û‘Y]
JNÂˆJNÂˆÛÛœÝY]Ý\œ™[H	
ˆÙY]XÝ\œ™[Y\Ý[˜][ÛˆŠNÂˆYˆ
Y]Ý\œ™[
HY]Ý\œ™[›Û˜ÛXÚÈH

HOˆÂˆÛÜÙSY[\Ê
NÂˆ\Ý[˜][Û‘Y]ÜŠš\
NÂˆNÂˆ	
ˆØš[[™ËXXØÛÝ[ŠK›Û˜ÛXÚÈH

HOˆÂˆÛÜÙSY[\Ê
NÂˆXØÛÝ[YÙJ
NÂˆNÂˆÛÛœÝ]HH	
ˆØXØÛÝ[Y]HŠNÂˆYˆ
]JH]K›Û˜ÛXÚÈH

HOˆÂˆYˆ
\ÞH]š\XØ[“X]™Uš\˜Y

JH™]\›ŽÂˆÛÜÙSY[\Ê
NÂˆXˆHœÙ][™ÜÈŽÂˆ™[™\Š
NÂˆ›ØÝ\ÕšY]Ê
NÂˆNÂˆÛÛœÝYZ[ˆH	
ˆØYZ[‹XXØÛÝ[ÈŠNÂˆYˆ
YZ[ŠHYZ[‹›Û˜ÛXÚÈH

HOˆÂˆÛÜÙSY[\Ê
NÂˆÚ[™ÙS[ÙJYJNÂˆNÂˆ	
ˆØÚ[™Ù\\ÜÝÛÜ™ŠK›Û˜ÛXÚÈH

HOˆÂˆÛÜÙSY[\Ê
NÂˆ\ÜÝÛÜ™Y]ÜŠ
NÂˆNÂˆ	
ˆÜÚYÛ›Ý]ŠK›Û˜ÛXÚÈH

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆØÚÊYJNÂˆžHÂˆZY[XØÛÝ[\KœÙ\ÜÚ[ÛXÝ]š]JœÙ\ÜÚ[Û—Ù[™ŠK˜Ø]Ú


HOˆÂˆJNÂˆZY[]]œÚYÛ“Ý]

NÂˆÚ\J
NÂˆÙÚ[Š
NÂˆÝ]\Êµæuéµä5êˆ5çµå5åõêuäuåuçÈŠNÂˆHØ]Ú
JHÂˆÝ]\Êµå5æuéµæuä5å5ç5ä5å5åuêuç5çµåˆˆ
ÈK›Y\ÜØYÙJNÂˆHš[˜[HÂˆØÚÊ˜[ÙJNÂˆBˆJNÂˆ	
ˆØXØÛÝ[ŠKœ]Y\žTÙ[XÝÜ[
œÝ[[X\žHŠK™›Ü‘XXÚ

Ý[[X\žJHOˆÝ[[X\žK›Û˜ÛXÚÈH

HOˆ	
ˆØXØÛÝ[ŠKœ]Y\žTÙ[XÝÜ[
™]Z[ÈŠK™›Ü‘XXÚ

Ý\ŠHOˆÂˆYˆ
Ý\ˆOOHÝ[[X\žKœ\™[[[Y[
HÝ\‹›Ü[ˆH˜[ÙNÂˆJJNÂˆØÝ[Y[œ]Y\žTÙ[XÝÜ[
ˆÙ\Ý[˜][Û‹XÛÛ›ÛÈ]Û‹ØXØÛÝ[]ÛˆŠK™›Ü‘XXÚ

ŠHOˆ‹™\ØX›YH\ÞH‹™Ù]]šX]J˜\šXKY\ØX›YŠHOOHYHŠNÂˆYˆ
š\
H™[™\•š\˜]šYØ][ÛŠ
NÂˆBˆ[˜Ý[ÛˆÚÝÓØY\œ›ÜŠ\œŠHÂˆš\H[ÂˆYˆ
Ù\ÜÚ[Ûˆ	‰ˆ
XØÛÝ[Ý]HOH[È›ÚYˆXØÛÝ[Ý]KœÝ]\ÊHOOH˜XÝ]™Hˆ	‰ˆJXØÛÝ[Ý]HOH[È›ÚYˆXØÛÝ[Ý]Kš\ÔÝ\\\Ù\ŠJHXØÛÝ[

NÂˆ[ÙH	
ˆÝXœÈŠKš[›™\’SHˆŽÂˆ	
ˆÝšY]ÈŠKš[›™\’SHÙXÝ[Ûµç5ä5è5æuêµçÈ5ç5æ5èµåuçÈ5ä5êˆ5å5æ5æuåuçÚˆˆ
È\ØÌJ\œ‹›Y\ÜØYÙJH
È	ÏÜ]ÛˆYHœ™]žHµè5èuå5êuåuäOØ]ÛÜÙXÝ[Û‰ÎÂˆ	
ˆÜ™]žHŠK›Û˜ÛXÚÈH

HOˆØY

K˜Ø]Ú
ÚÝÓØY\œ›ÜŠNÂˆÝ]\Êµå5çµæuäõèˆ5çµå5èµè5çÈ5ç5ä5è5æ5èµçËˆŠNÂˆBˆ[˜Ý[ÛˆØY

HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆYˆ
YZ[“[ÙJ
H
XØÛÝ[Ý]HOH[È›ÚYˆXØÛÝ[Ý]Kš\ÔÝ\\\Ù\ŠH\Ù\ÜÚ[Ûˆ
XØÛÝ[Ý]HOH[È›ÚYˆXØÛÝ[Ý]KœÝ]\ÊHOOH˜XÝ]™Hˆ\ÞH	
ˆÙY]ÜˆŠK›Ü[ˆ	
ˆÝšY]ÈÙ]K]š\YY]Y›Ü›WHŠJH™]\›ŽÂˆÛÛœÝ[ˆH
ÊÙ\ØÚšY]ÈHšY]Ñ\ØÚ\Ù\ˆHÙ\ÜÚ[Û‹\Ù\‹šYÂˆÛÛœÝÝ\œ™[H

HOˆ[ˆOOH\ØÚ	‰ˆšY]ÈOOHšY]Ñ\ØÚ	‰ˆ
Ù\ÜÚ[ÛˆOH[È›ÚYˆÙ\ÜÚ[Û‹\Ù\‹šY
HOOH\Ù\ˆ	‰ˆX\ÞH	‰ˆI
ˆÝšY]ÈÙ]K]š\YY]Y›Ü›WHŠNÂˆÝ]\Êµæ5åuèµçÈ5çµå5èµè5çø )ˆŠNÂˆžHÂˆYˆ
Ú\™Yš\Y
HÂˆÜ[”Ú\™Yš\šY]ÊÚ\™Yš\Y
NÂˆH[ÙHYˆ
\Ù[XÝYš\Y
HÂˆÛÛœÝ›ÝÜÈHZY[™\Ë›\Ý\Ý[˜][ÛœÊ
NÂˆYˆ
XÝ\œ™[

JH™]\›ŽÂˆ\Ý[˜][ÛœÌˆH›ÝÜÎÂˆÛÛœÝ\™Ù]H[š]X[\Ý[˜][Û”[™[™ÈÈ[š]X[\Ý[˜][ÛŠ›ÝÜÊHˆ[ÂˆYˆ
\™Ù]
HÂˆÛÛœÝØYYHZY[™\Ë™Ù]š\
\™Ù]šY
NÂˆYˆ
XÝ\œ™[

JH™]\›ŽÂˆ[š]X[\Ý[˜][Û”[™[™ÈH˜[ÙNÂˆÙ[XÝYš\YH\™Ù]šYÂˆš\HØYYÂˆXˆH™\Ú›Ø\™ŽÂˆ™[™\Š
NÂˆXØÛÝ[

NÂˆH[ÙHÂˆ[š]X[\Ý[˜][Û”[™[™ÈH˜[ÙNÂˆš\H[Âˆ\Ý[˜][Û’ÛYJ
NÂˆXØÛÝ[

NÂˆBˆH[ÙHÂˆÛÛœÝ›ÝÜÈHZY[™\Ë›\Ý\Ý[˜][ÛœÊ
NÂˆYˆ
XÝ\œ™[

JH™]\›ŽÂˆÛÛœÝØYYHZY[™\Ë™Ù]š\
Ù[XÝYš\Y
NÂˆYˆ
XÝ\œ™[

JH™]\›ŽÂˆ\Ý[˜][ÛœÌˆH›ÝÜÎÂˆš\HØYYÂˆ™[™\Š
NÂˆXØÛÝ[

NÂˆBˆÝ]\Êµè5æ5èµçÈ5çµå5èµè5çÈ8 (ˆˆ
È
Êˆ×ÔT‘W×È
‹È™]È]J
JKÓØØ[U[YTÝš[™ÊšKRSŠJNÂˆHØ]Ú
JHÂˆYˆ
Ý\œ™[

JH›ÝÈNÂˆBˆJNÂˆBˆ[˜Ý[ÛˆÚÛÜÙQ\Ý[˜][ÛŠY
HÂˆYˆ
\ÞH	
ˆÙY]ÜˆŠK›Ü[ˆY\Ý[˜][ÛœÌ‹œÛÛYJ

HOˆšYOOHY
HXØ[“X]™Uš\˜Y

JH™]\›ˆ˜[ÙNÂˆ›Ý]PÛX[\OH[È›ÚYˆ›Ý]PÛX[\

NÂˆ›Ý]PÛX[\H[ÂˆÚ\™Yš\YH[ÂˆÙ[XÝYš\YHYÂˆ[š]X[\Ý[˜][Û”[™[™ÈH˜[ÙNÂˆš\H[ÂˆÛX\•š\˜XÚÙÜ›Ý[™

NÂˆ^[œÙPØ]YÛÜžHHˆŽÂˆXˆH™\Ú›Ø\™ŽÂˆš\ÙXÝ[Û”Ý]HHßNÂˆØ]YÛÜšY\ÈHÈXÙNˆ[›ÛÚÚ[™Îˆ[\ÚÎˆ[ÙX\Žˆ[NÂˆÛÜšÕšY]ÜÈHÈ›ÛÚÚ[™ÎˆœÝ]È‹\ÚÎˆœÝ]ÈˆNÂˆÝ]\Ñš[\œÈHÈ›ÛÚÚ[™Îˆˆ‹\ÚÎˆˆˆNÂˆ›Ý]UšY]ÈH›X\ŽÂˆ›Ý]Q^HH[Âˆ\ØÚ
ÊÎÂˆšY]Ñ\ØÚ
ÊÎÂˆ	
ˆÝšY]ÈŠK^ÛÛ[Hµæ5åuèµçÈ5ä5êˆ5å5æuèµäÈ5êuè5äuåõê8 )ˆŽÂˆXØÛÝ[

NÂˆØY

K˜Ø]Ú
ÚÝÓØY\œ›ÜŠNÂˆ™]\›ˆYNÂˆBˆ[˜Ý[ÛˆØ]™SÜ\˜][ÛŠÜ\˜][ÛŠHÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆYˆ
\ÞJH™]\›ˆ˜[ÙNÂˆÛÛœÝ[ˆH\ØÚÂˆØÚÊYJNÂˆÝ]\Êµêuåuçµê5äuèµè5çø )ˆŠNÂˆžHÂˆZY[Ü\˜][ÛŠ
NÂˆYˆ
[ˆOOH\ØÚ\Ù\ÜÚ[ÛŠH™]\›ˆ˜[ÙNÂˆÝ]\Êµè5êuçµê5äuèµè5çÈŠNÂˆ™]\›ˆYNÂˆHØ]Ú
JHÂˆYˆ
[ˆOOH\ØÚ
HÂˆÝ]\Êµç5ä5è5êuçµêˆˆ
ÈK›Y\ÜØYÙJNÂˆXØÛÝ[\KœÙ\ÜÚ[ÛXÝ]š]J˜XÝ[Û—Ù˜Z[YŠK˜Ø]Ú


HOˆÂˆJNÂˆBˆ™]\›ˆ˜[ÙNÂˆHš[˜[HÂˆØÚÊ˜[ÙJNÂˆBˆJNÂˆBˆ[˜Ý[Ûˆ]]Ô™\ÛÛ™TÝÜÊ
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë\™Ý[Y[Ë[˜Ý[ÛŠˆ
^\ÈH×JHÂˆ˜\ˆØMØ‹ØËÙÂˆYˆ
]š\J
ØMHÛY[Ë™[˜Ý[ÛœÊHOH[È›ÚYˆØMš[›ÚÙJJH™]\›ŽÂˆÛÛœÝØ[YH™]ÈÙ]
^\Ë›X\
[X™\ŠK™š[\Š[X™\‹š\Ò[YÙ\ŠJNÂˆÛÛœÝÝÜÈHš\š][\Ë™š[\Š
][JHOˆÂˆ˜\ˆØMKØŒ‹ØÌ‹Ù‹ÙKÙŽÂˆ™]\›ˆ][KšÚ[™OOHœÝÜˆ	‰ˆ
]Ø[YœÚ^™HØ[Yš\Ê[X™\Š
ØMHH][Kœ^[ØY
HOH[È›ÚYˆØMK™^JJJH	‰ˆJ
ØŒˆH][Kœ^[ØY
HOH[È›ÚYˆØŒ‹œXÙRY
H	‰ˆJ
ØÌˆH][Kœ^[ØY
HOH[È›ÚYˆØÌ‹œXÙWÚY
H	‰ˆJ[X™\‹š\Ñš[š]J[X™\Š
ÙˆH][Kœ^[ØY
HOH[È›ÚYˆÙ‹›]
JH	‰ˆ[X™\‹š\Ñš[š]J[X™\Š
ÙHH][Kœ^[ØY
HOH[È›ÚYˆÙK›™ÊJJH	‰ˆKÊÎ¸¡¤ŸOŸ5è5èuæuèµå5äuäõê5æŸ5ä5åµåuê5ä5æuåµåuê5è5åué5æuêŸØÙ[šXß›Ý]JKÚK\Ý
Ýš[™Ê

ÙˆH][Kœ^[ØY
HOH[È›ÚYˆÙ‹œXÙJHˆŠJNÂˆJNÂˆ›Üˆ
ÛÛœÝ][HÙˆÝÜÊHÂˆÛÛœÝÙÚ[™ÌÈHÙÚ[™ÐÛÛ^›Ü‘^Jš\š][\Ë
ØˆH][Kœ^[ØY
HOH[È›ÚYˆØ‹™^JNÂˆžHÂˆÝ]\ÊµçµèµäõæõçÈ5ä5åuæ5åuçµæ5æuêˆ5çµéõåuçH5åu¯”XÙHQ5ç5æuåuçHˆ
È

ØÈH][Kœ^[ØY
HOH[È›ÚYˆØË™^JH
È¸ )ˆŠNÂˆZY[ÛY[Ë™[˜Ý[ÛœËš[›ÚÙJœXÙ\Ë\›Ý]K\™\ÛÛ™\ˆ‹È›ÙNˆÈš\Yˆš\šYš\™\œÚ[ÛŽˆš\™\œÚ[Û‹][RYˆ][KšYXÙNˆ

ÙH][Kœ^[ØY
HOH[È›ÚYˆÙœXÙJHˆ‹\Ý[˜][ÛŽˆš\™\Ý[˜][Û—Û˜[YKÙÚ[™Îˆ
ÙÚ[™ÌÈOH[È›ÚYˆÙÚ[™ÌË›˜[YJHˆˆHJNÂˆHØ]Ú
JHÂˆBˆBˆJNÂˆBˆ[˜Ý[ÛˆY\”Ø]™J
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë\™Ý[Y[Ë[˜Ý[ÛŠˆ
Ü[ÛœÈHßJHÂˆ˜\ˆØMÂˆžHÂˆYˆ
Ü[ÛœË˜]]Ô™\ÛÛ™P[
HZY[]]Ô™\ÛÛ™TÝÜÊ
NÂˆ[ÙHYˆ

ØMHÜ[ÛœË˜]]Ô™\ÛÛ™Q^\ÊHOH[È›ÚYˆØM›[™Ý
HZY[]]Ô™\ÛÛ™TÝÜÊÜ[ÛœË˜]]Ô™\ÛÛ™Q^\ÊNÂˆZY[ØY

NÂˆÝ]\Êµè5êuçµê5äuèµè5çÈŠNÂˆHØ]Ú
JHÂˆÚÝÓØY\œ›ÜŠJNÂˆÝ]\Êµå5êuæuè5åuæH5è5êuçµê5äuèµè5çË5ä5æˆ5å5ê5èµè5åuçÈ5è5æõêuçˆ5è5èuå5ç5ê5èµè5çÈ5êuåuäKˆŠNÂˆBˆJNÂˆBˆ[˜Ý[ÛˆÜ[”Ú\™Yš\šY]ÊY
HÂˆ›Ý]PÛX[\OH[È›ÚYˆ›Ý]PÛX[\

NÂˆš\H[ÂˆÙ[XÝYš\YH[ÂˆÚ\™Yš\YHYÂˆšY]Ñ\ØÚ
ÊÎÂˆ	
ˆÝXœÈŠKš[›™\’SHˆŽÂˆ›Ý]PÛX[\H[Ý[Ú\™Yš\
È›ÛÝˆ	
ˆÝšY]ÈŠKX[ÙÎˆ	
ˆÙY]ÜˆŠK\NˆÜ›Ý\\Kš\YˆYÝ]NˆÙXÝ[Û”Ý]JœÚ\™Yˆˆ
ÈY
KÛ˜XÚÎˆ

HOˆÂˆÚ\™Yš\YH[ÂˆØY

K˜Ø]Ú
ÚÝÓØY\œ›ÜŠNÂˆHJNÂˆXØÛÝ[

NÂˆBˆ[˜Ý[Ûˆ\Ý[˜][Û’ÛYJ
HÂˆ˜\ˆØMÂˆÚ\™Yš\YH[ÂˆÛX\•š\˜XÚÙÜ›Ý[™

NÂˆ›Ý]PÛX[\OH[È›ÚYˆ›Ý]PÛX[\

NÂˆ›Ý]PÛX[\H[ÂˆÚ[™ÝË™\Ü]Ú]™[
™]È]™[
œØÜ›ÛŠJNÂˆ	
ˆÝXœÈŠKš[›™\’SHˆŽÂˆØÝ[Y[™ØÝ[Y[[[Y[œÝ[KœÙ]›Ü\J‹K[˜]šYØ][Û‹\ÜXÙH‹ŒŠNÂˆ	
ˆÝšY]ÈŠKš[›™\’SH	ÏÙXÝ[ÛˆÛ\ÜÏH™\Ý[˜][Û‹ZÛYHˆ\šXK[X™[YžOH™\Ý[˜][Û‹ZÛYK]]H]ˆÛ\ÜÏH™\Ý[˜][Û‹ZÛYKZXY[™ÈˆYH™\Ý[˜][Û‹ZÛYK]]Hµäuåõæuê5êˆ5æuèµäÏÚ]ˆÛ\ÜÏH™\Ý[˜][Û‹\Ý\XØ\™ˆ]K[™]ËY\Ý[˜][Û]Ý›Û™Ïµçµêµåõæuç5æuçH5æõä5çÎˆ5æuèµäÈ5åõäõêOÜÝ›Û™Ïµéµê5åH5æuèµäÈ5åõäõêH5æõäõæH5ç5å5êµåõæuç5ç5êµæõè5çÈ5ä5êˆ5å5æ5æuåuç5êuç5æõçKÜÙ]]Ûˆ\OH˜]ÛˆˆÛ\ÜÏHœš[X\žHˆ]K[™]ËY\Ý[˜][Û‹XXÝ[Ûµæuéµæuê5êˆ5æuèµäÈ5åõäõêOØ]ÛÙ]Ù]]ˆ]KY\Ý[˜][Û‹\ÙX\˜ÚÙ]‰È
È
Y\Ý[˜][ÛœÌ‹œÛÛYJ

HOˆš\×ØXÝ]™HOOHYJH	‰ˆ\Ý[˜][ÛœÌ‹›[™ÝÈ	ÏÛ\ÜÏH›]]Yµä5æuçÈ5æõê5äµèˆ5æ5æuåuç5é5èµæuçˆ5ä5é5êuê5ç5äuåõåuê5æuèµäÈ5çµå5ê5êuæuçµå5ä5åH5ç5å5åuèuæuèÈ5æuèµäÈ5äõê5æˆ5è5æuå5åuç5æuèµäõæuçKÜ‰ÈˆˆŠH
È	Ï]ˆÛ\ÜÏH™\Ý[˜][Û‹YÜšY‰È
È\Ý[˜][ÛœÌ‹›X\


HOˆ	Ï\XÛHÛ\ÜÏH™\Ý[˜][Û‹XØ\™	È
È
š\×ØXÝ]™HOOH˜[ÙHÈ™\Ý[˜][Û‹Z[˜XÝ]™HˆˆˆŠH
È	È]Ûˆ\OH˜]Ûˆˆ]KY\Ý[˜][Û‹[Ü[H‰È
È\ØÌJšY
H
È	ÈˆÛ\ÜÏH™\Ý[˜][Û‹XÚÚXÙHˆ\šXK[X™[Hµé5êµåÈ5êµæõè5åuçÎˆ	È
È\ØÌJ™\Ý[˜][Û—Û˜[YH]JH
È	ÈÜ[ˆÛ\ÜÏH™\Ý[˜][Û‹XÚÚXÙKZXÛÛˆ‰È
ÈXÛÛŠœ›Ý]HŠH
È	ÏÜÜ[Ü[ˆÛ\ÜÏH™\Ý[˜][Û‹XÚÚXÙKXÛÛ[Ý›Û™Ï‰È
È\ØÌJ™\Ý[˜][Û—Û˜[YH]JH
È	ÏÜÝ›Û™ÏÜ[ˆÛ\ÜÏH™\Ý[˜][Û‹[Y]H‰È
È\ØÌJœÙ][™ÜË™^\ÊH
Èˆ5æuçµæuçHˆ
È
œÙ][™ÜËœÝ\Èˆ0­Èˆ
È\ØÌJœÙ][™ÜËœÝ\
Hˆˆ0­È5êµä5ê5æuæˆ5æ5ê5çH5è5éõäuèˆŠH
È	ÏÜÜ[Ü[ˆÛ\ÜÏH™\Ý[˜][Û‹]š\\Ý]\È‰È
È\ØÌJÝ]\ÓX™[
œÙ][™ÜÊJH
ÈÜÜ[ˆˆ
È
š\×ØXÝ]™HOOH˜[ÙHÈ	ÏÜ[ˆÛ\ÜÏH™\Ý[˜][Û‹\Ý]Hµç5ä5é5èµæuçÜÜ[‰ÈˆˆŠH
È	ÏÜÜ[Ü[ˆÛ\ÜÏH™\Ý[˜][Û‹XÚÚXÙKX\œ›ÝÈ‰È
ÈXÛÛŠ˜Ú]œ›ÛˆŠH
ÈÜÜ[Ø]ÛØ\XÛOˆŠKš›Ú[ŠˆŠH
ÈÙ]ˆˆ
È
\Ý[˜][ÛœÌ‹›[™ÝÈˆˆˆ	ÏÛ\ÜÏH™\Ý[˜][Û‹Y[\Hµä5æuçÈ5èµäõæuæuçÈ5æuèµäõæuçH5êuçµåuê5æuçKˆ5å5êµåõæuç5åH5æõä5çÈ5èµçH5æuéµæuê5êˆ5æuèµäÈ5åõäõêKÜ‰ÊH
ÈÜÙXÝ[ÛˆŽÂˆ	
ˆÝšY]ÈÙ]K[™]ËY\Ý[˜][Û‹XXÝ[Û—HŠK›Û˜ÛXÚÈH

HOˆÂˆYˆ
\ÞJH™]\›ŽÂˆØÝ[Y[œ]Y\žTÙ[XÝÜ[
ˆØXØÛÝ[]Z[ËÙ\Ý[˜][Û‹XÛÛ›ÛÈ]Z[ËÝXœÈ]Z[ÈŠK™›Ü‘XXÚ


HOˆ›Ü[ˆH˜[ÙJNÂˆ\Ý[˜][Û‘Y]ÜŠ
NÂˆNÂˆÛÛœÝ\ÜÜÙTÙX\˜ÚH[Ý[\Ý[˜][Û”ÙX\˜Ú
È›ÛÝˆ	
ˆÝšY]ÈÙ]KY\Ý[˜][Û‹\ÙX\˜ÚHŠK\Ý[˜][ÛœÎˆ\Ý[˜][ÛœÌ‹Ý]Nˆ\Ý[˜][Û‘š[\œËÛ‘š[\Žˆ
›ÝÜÊHOˆÂˆÛÛœÝYÈH™]ÈÙ]
›ÝÜË›X\

›ÝÊHOˆ›ÝËšY
JNÂˆ	
ˆÝšY]ÈŠKœ]Y\žTÙ[XÝÜ[
–Ù]KY\Ý[˜][Û‹[Ü[—HŠK™›Ü‘XXÚ

]ÛŠHOˆ]Û‹˜ÛÜÙ\Ý
‹™\Ý[˜][Û‹XØ\™ŠKšY[ˆHZYËš\Ê]Û‹™]\Ù]™\Ý[˜][Û“Ü[ŠJNÂˆHJNÂˆYˆ
›ØÝ\Ñ\Ý[˜][Û”ÙX\˜Ú
HÂˆ›ØÝ\Ñ\Ý[˜][Û”ÙX\˜ÚH˜[ÙNÂˆ
ØMH	
ˆÝšY]ÈÙ]KY\Ý[˜][Û‹[˜[YK\ÙX\˜ÚHŠJHOH[È›ÚYˆØM™›ØÝ\Ê
NÂˆBˆ	
ˆÝšY]ÈŠKœ]Y\žTÙ[XÝÜ[
–Ù]KY\Ý[˜][Û‹[Ü[—HŠK™›Ü‘XXÚ

ŠHOˆ‹›Û˜ÛXÚÈH

HOˆÚÛÜÙQ\Ý[˜][ÛŠ‹™]\Ù]™\Ý[˜][Û“Ü[ŠJNÂˆÛÛœÝÚ\™Y›ÛÝHØÝ[Y[˜Ü™X]Q[[Y[
œÙXÝ[ÛˆŠNÂˆÚ\™Y›ÛÝ™]\Ù]œÚ\™Yš\ÛYHHˆŽÂˆ	
ˆÝšY]ÈŠK˜\[™
Ú\™Y›ÛÝ
NÂˆÛÛœÝ\ÜÜÙTÚ\™YH[Ý[Ú\™Yš\\Ý
È›ÛÝˆÚ\™Y›ÛÝ\NˆÜ›Ý\\KÛ“Ü[ŽˆÜ[”Ú\™Yš\šY]ÈJNÂˆ›Ý]PÛX[\H

HOˆÂˆ\ÜÜÙTÙX\˜Ú

NÂˆ\ÜÜÙTÚ\™YOH[È›ÚYˆ\ÜÜÙTÚ\™Y

NÂˆNÂˆBˆ[˜Ý[Ûˆ\Ý[˜][Û‘Y]ÜŠ^\Ý[™ÊHÂˆYˆ
	
ˆÝšY]ÈÙ]K]š\YY]Y›Ü›WHŠJHÂˆÝ]\ÊµæuêH5ç5êuçµåuê5ä5åH5ç5äuæ5ç5ä5êˆ5èµê5æuæõêˆ5é5ê5æ5æH5å5æ5æuåuç5ç5é5è5æH5é5êµæuåõêˆ5èµåuê5æˆ5å5æuèµäõæuçKˆŠNÂˆ™]\›ŽÂˆBˆšY]Ñ\ØÚ
ÊÎÂˆÛÛœÝ\Ù\ˆHÙ\ÜÚ[ÛˆOH[È›ÚYˆÙ\ÜÚ[Û‹\Ù\‹šYÂˆÜ[‘\Ý[˜][Û•Ú^˜\™
ÂˆX[ÙÎˆ	
ˆÙY]ÜˆŠKˆ\Ý[˜][ÛŽˆ^\Ý[™Ëˆ\NˆÜ™X]T[›š[™Ð\JÛY[ÊKˆÛ”Ø]™Nˆ
Ì
HOˆ×Ø\Þ[˜Ê[×ÌK[˜Ý[ÛŠˆ
È˜[YKXÝ]™KÙ][™ÜÎˆÙ][™ÜÌ‹^\Ý[™ÎˆÝ\œ™[JHÂˆÛÛœÝšY]ÈH
ÊÝšY]Ñ\ØÚÂˆ]Ø]™YÂˆYˆ
Ý\œ™[	‰ˆ˜[YHOOHÝ\œ™[™\Ý[˜][Û—Û˜[YH	‰ˆXÝ]™HOOHÝ\œ™[š\×ØXÝ]™H	‰ˆ”ÓÓ‹œÝš[™ÚYžJÙ][™ÜÌŠHOOH”ÓÓ‹œÝš[™ÚYžJÝ\œ™[œÙ][™ÜÊJH™]\›ˆÝ\œ™[ÂˆÛÛœÝÚØ^HHZY[Ø]™SÜ\˜][ÛŠ

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆØ]™YHZY[Ý\œ™[È™\Ë\]Q\Ý[˜][ÛŠÝ\œ™[šYÝ\œ™[™\œÚ[Û‹˜[YKXÝ]™KÙ][™ÜÌŠHˆ™\Ë˜Ü™X]Q\Ý[˜][ÛŠ\Ù\‹˜[YKXÝ]™KÙ][™ÜÌŠNÂˆJJNÂˆYˆ
[ÚØ^JH›ÝÈ\œ›ÜŠ	
ˆÛY\ÜØYÙHŠK^ÛÛ[µå5êuçµæuê5å5è5æõêuç5åŠNÂˆYˆ

Ù\ÜÚ[ÛˆOH[È›ÚYˆÙ\ÜÚ[Û‹\Ù\‹šY
HOOH\Ù\ˆšY]ÈOOHšY]Ñ\ØÚ
H›ÝÈ\œ›ÜŠµå5åõêuäuåuçÈ5ä5åH5å5æuèµäÈ5å5êuêµè5åKˆ5æuêH5ç5é5êµåuåÈ5ä5êˆ5å5èµê5æuæõå5çµåõäõêKˆŠNÂˆYˆ

š\OH[È›ÚYˆš\šY
HOOHØ]™YšY
Hš\H×ÜÜ™XY˜[Y\Ê×ÜÜ™XY˜[Y\ÊßKš\
KØ]™Y
NÂˆ\Ý[˜][ÛœÌˆH\Ý[˜][ÛœÌ‹œÛÛYJ

HOˆšYOOHØ]™YšY
HÈ\Ý[˜][ÛœÌ‹›X\


HOˆšYOOHØ]™YšYÈØ]™Yˆ
HˆË‹‹™\Ý[˜][ÛœÌ‹Ø]™YNÂˆ™]\›ˆØ]™YÂˆJKˆÛ”[Žˆ
Ø]™Y
HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆÛÛœÝšY]ÈHšY]Ñ\ØÚ\Ý[˜][ÛˆHZY[™\Ë™Ù]š\
Ø]™YšY
NÂˆYˆ

Ù\ÜÚ[ÛˆOH[È›ÚYˆÙ\ÜÚ[Û‹\Ù\‹šY
HOOH\Ù\ˆšY]ÈOOHšY]Ñ\ØÚ
H›ÝÈ\œ›ÜŠµå5åõêuäuåuçÈ5ä5åH5å5æuèµäÈ5å5êuêµè5åHŠNÂˆÜ[”[›š[™ÊÈX[ÙÎˆ	
ˆÙY]ÜˆŠK\Ý[˜][Û‹\NˆÜ™X]T[›š[™Ð\JÛY[ÊK™]šY]ÓÛ›NˆYKÛ‘Y]ˆ

HOˆ\Ý[˜][Û‘Y]ÜŠ\Ý[˜][ÛŠKÛ˜XÚÎˆ

HOˆ\Ý[˜][Û‘Y]ÜŠ\Ý[˜][ÛŠKÛ”X›\ÚYˆ

HOˆY\”Ø]™JÈ]]Ô™\ÛÛ™P[ˆYHJHJNÂˆJKˆÛ”XÚØYÙNˆ

HOˆÂˆYˆ

Ù\ÜÚ[ÛˆOH[È›ÚYˆÙ\ÜÚ[Û‹\Ù\‹šY
HOOH\Ù\ŠHÂˆ	
ˆÙY]ÜˆŠK˜ÛÜÙJ
NÂˆXØÛÝ[YÙJ
NÂˆBˆKˆÛÛÜÙNˆ

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆYˆ

Ù\ÜÚ[ÛˆOH[È›ÚYˆÙ\ÜÚ[Û‹\Ù\‹šY
HOOH\Ù\ŠHžHÂˆZY[ØY

NÂˆHØ]Ú
\œŠHÂˆÚÝÓØY\œ›ÜŠ\œŠNÂˆBˆJBˆJNÂˆBˆ[˜Ý[ÛˆY]^[œÙJ^\Ý[™ÊHÂˆ˜\ˆØMÂˆšY]Ñ\ØÚ
ÊÎÂˆÛÛœÝš\YHš\šY™\œÚ[ÛHHš\™\œÚ[Û‹Ù][™ÜÌˆHÝXÝ\™YÛÛ™Jš\œÙ][™ÜÊK[žHH^\Ý[™ÈÈYˆÜž\Ëœ˜[™ÛUURQ

K˜[YNˆˆ‹Ø]YÛÜžNˆˆ‹ÛÜÝˆ[ZYˆ›Ý\ÎˆˆˆNÂˆÛÛœÝØ]YÛÜšY\ÌˆHË‹‹‹Êˆ×ÔT‘W×È
‹È™]ÈÙ]
Èµçµç5åuçÈ‹µæ5æuèuåuêˆ‹µä5åué5è5åuèˆ‹µä5åuæõç‹µäõç5éÈ‹µé5èµæuç5åuæuåuêˆ‹µäuæuæ5åuåÈ‹µéµæuåuäÈ‹‹‹™^[œÙT›ÝÜÊš\š][\ËÙ][™ÜÌŠK›X\


HOˆ˜Ø]YÛÜžJWJWNÂˆ	
ˆÙY]ÜˆŠKš[›™\’SH	Ï›Ü›HYH™^[œÙKY›Ü›H‰È
È
^\Ý[™ÈÈµèµê5æuæõêˆ5å5åuéµä5åˆˆµå5åuéµä5å5åõäõêuåŠH
ÈÚˆˆ
ÈšY[
›˜[YH‹µèµç5çµå5å5å5åuéµä5åÈ‹[žK›˜[YJH
ÈšY[
˜Ø]YÛÜžH‹µéõæ5äµåuê5æuå‹[žK˜Ø]YÛÜžJH
È	Ï][\ÝYH™^[œÙKXØ]YÛÜšY\È‰È
ÈØ]YÛÜšY\Ì‹›X\


HOˆ	ÏÜ[Ûˆ˜[YOH‰È
È\ØÌJ
H
È	È‰ÊKš›Ú[ŠˆŠH
ÈÙ][\Ýˆˆ
ÈšY[
˜ÛÜÝ‹µèuæõåuçH5çµêµåuæõè5çÈ5äuêuí5åÈ8 %5ä5é5êuê5ç5å5êuä5æuê5ê5æuéÈ5ä5çH5èµäõæuæuçÈ5ç5ä5æuäõåuèˆ‹
ØMH[žK˜ÛÜÝ
HOH[ÈØMˆˆ‹›[X™\ˆŠH
ÈšY[
œZY‹µæõçµå5êuåuç5çH5èµäÈ5èµæõêuæuåH5äuêuí5åÈ‹[žKœZY›[X™\ˆŠH
ÈšY[
››Ý\È‹µå5èµê5åuêˆ‹[žK››Ý\Ë^\™XHŠH
È	ÏÛ\ÜÏH›]]Yµå5åµçµè5åuêˆ5éõæuæuçµåuêˆ5æõäuê5è5æõç5ç5åuêˆ5äuèuæuæõåuçKˆ5å5åuèuèÈ5æõä5çÈ5ê5éÈ5å5åuéµä5åuêˆ5è5åuèué5åuêˆ5æõäõæH5ç5çµè5åuèˆ5èué5æuê5å5æõé5åuç5åˆ5èuæõåuçH5ê5æuéÈ5é5æuê5åuêuåH5çµåõæuê5åõèuêÈ5ä5é5èH5å5åuä5å5åuéµä5å5ç5ç5ä5èµç5åuê‹Ü]ˆÛ\ÜÏHœ›ÝÈ]Ûˆ\OHœÝX›Z]µêuçµåuê5å5åuéµä5åØ]Û]Ûˆ\OH˜]Ûˆˆ]KXØ[˜Ù[Y^[œÙOµäuæuæ5åuçØ]ÛÙ]]KYX[ÙË\Ý]\È›ÛOHœÝ]\Èˆ\šXK[]™OHœÛ]HÜÙ›Ü›O‰ÎÂˆÛÛœÝ›Ü›HH	
ˆÙ^[œÙKY›Ü›HŠNÂˆ›Ü›K™[[Y[Ë›˜[YKœ™\]Z\™YHYNÂˆ›Ü›K™[[Y[Ë›˜[YK›X^[™ÝHÌÂˆ›Ü›K™[[Y[Ë˜Ø]YÛÜžKœ™\]Z\™YHYNÂˆ›Ü›K™[[Y[Ë˜Ø]YÛÜžK›X^[™ÝHLÂˆ›Ü›K™[[Y[Ë˜Ø]YÛÜžKœÙ]]šX]J›\Ý‹™^[œÙKXØ]YÛÜšY\ÈŠNÂˆ›Ü›K™[[Y[ËœZYœ™\]Z\™YHYNÂˆ›Ü›K™[[Y[Ë˜ÛÜÝœÝ\HŒŒHŽÂˆ›Ü›K™[[Y[ËœZYœÝ\HŒŒHŽÂˆ›Ü›K™[[Y[Ë››Ý\Ë›X^[™ÝH™LÎÂˆ	
–Ù]KXØ[˜Ù[Y^[œÙWHŠK›Û˜ÛXÚÈH

HOˆ	
ˆÙY]ÜˆŠK˜ÛÜÙJ
NÂˆ›Ü›K›ÛœÝX›Z]H
JHOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆKœ™]™[Y˜][

NÂˆ]^[ØYÂˆžHÂˆ^[ØYH˜[Y]Q^[œÙ\ÊÞÈYˆ[žKšY˜[YNˆ›Ü›K™[[Y[Ë›˜[YK˜[YKØ]YÛÜžNˆ›Ü›K™[[Y[Ë˜Ø]YÛÜžK˜[YKÛÜÝˆ›Ü›K™[[Y[Ë˜ÛÜÝ˜[YHOOHˆˆÈ[ˆ[X™\Š›Ü›K™[[Y[Ë˜ÛÜÝ˜[YJKZYˆ[X™\Š›Ü›K™[[Y[ËœZY˜[YJK›Ý\Îˆ›Ü›K™[[Y[Ë››Ý\Ë˜[YHWJVÌNÂˆHØ]Ú
\œŠHÂˆÝ]\Ê\œ‹›Y\ÜØYÙJNÂˆ™]\›ŽÂˆBˆÛÛœÝ^[œÙ\ÈH˜[Y]Q^[œÙ\Ê^\Ý[™ÈÈ
Ù][™ÜÌ‹™^[œÙ\È×JK›X\


HOˆšYOOH[žKšYÈ^[ØYˆ
HˆË‹‹œÙ][™ÜÌ‹™^[œÙ\È×K^[ØYJNÂˆYˆ
ZY[Ø]™SÜ\˜][ÛŠ

HOˆ™\Ë\]TÙ][™ÜÊš\Y™\œÚ[ÛK×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßKÙ][™ÜÌŠKÈ^[œÙ\ÈJJJJHÂˆ	
ˆÙY]ÜˆŠK˜ÛÜÙJ
NÂˆZY[Y\”Ø]™J
NÂˆBˆJNÂˆ	
ˆÙY]ÜˆŠKœÚÝÓ[Ù[

NÂˆBˆ[˜Ý[Ûˆ™[™\•š\˜]šYØ][ÛŠ]˜Z[X›HH›ÛÛX[Šš\
JHÂˆ˜\ˆØMØŽÂˆ	
ˆÝXœÈŠKš[›™\’SH˜]šYØ][Û“X\šÝ\
XœË]˜Z[X›HÈXˆˆ[È\ØX›YˆX]˜Z[X›HJNÂˆÛÛœÝšY]ÜÜÚYHØÝ[Y[™ØÝ[Y[[[Y[˜ÛY[ÚYÂˆÛÛœÝ[Øš[UÚYH

ØMHÚ[™ÝË›X]ÚYYXJHOH[È›ÚYˆØM˜Ø[
Ú[™ÝËŠX^]ÚYˆÌ
HŠK›X]Ú\ÊHšY]ÜÜÚYˆ	‰ˆšY]ÜÜÚYHÌÂˆYˆ
[Øš[UÚY
HÂˆÛÛœÝ˜]ˆH	
ˆÝXœÈŠK[Ü™HH˜]‹œ]Y\žTÙ[XÝÜŠˆÛ˜]‹[[Ü™HŠKY[HH[Ü™HOH[È›ÚYˆ[Ü™Kœ]Y\žTÙ[XÝÜŠ‹›˜]‹[Y[HŠNÂˆYˆ
[Ü™H	‰ˆY[H	‰ˆ[˜]‹œ]Y\žTÙ[XÝÜŠˆÛ˜]‹[[Øš[K[[Ü™HŠJHÂˆÛÛœÝ[Øš[S[Ü™HHØÝ[Y[˜Ü™X]Q[[Y[
™]Z[ÈŠNÂˆ[Øš[S[Ü™KšYH›˜]‹[[Øš[K[[Ü™HŽÂˆ[Øš[S[Ü™K˜Û\ÜÓ˜[YHH›˜]‹[[Ü™H˜]‹[[Øš[K[[Ü™HŽÂˆ[Øš[S[Ü™Kš[›™\’SH	ÏÝ[[X\žH\šXK[X™[HµèµåuäÈ‰È
ÈXÛÛŠ›[Ü™HŠH
È	ÏÜ[µèµåuäÏÜÜ[ÜÝ[[X\žO]ˆÛ\ÜÏH›˜]‹[Y[HÙ]‰ÎÂˆÛÛœÝ\™Ù]H[Øš[S[Ü™Kœ]Y\žTÙ[XÝÜŠ‹›˜]‹[Y[HŠNÂˆÛÛœÝš[X\žHHØÝ[Y[˜Ü™X]Q[[Y[
™]ˆŠNÂˆš[X\žK˜Û\ÜÓ˜[YHH›˜]‹[[Øš[K\š[X\žHŽÂˆÈ˜YÙ[‹œÝÜ‹™\Ú›Ø\™—K™›Ü‘XXÚ

Y
HOˆÂˆÛÛœÝ]ÛˆH˜]‹œ]Y\žTÙ[XÝÜŠ	ÎœØÛÜHˆ›˜]‹Z][VÙ]K]XH‰È
ÈY
È	È—IÊNÂˆYˆ
]ÛŠHš[X\žK˜\[™
]ÛŠNÂˆJNÂˆ
ØˆHØÝ[Y[œ]Y\žTÙ[XÝÜŠˆØXØÛÝ[˜XØÛÝ[]ÛÛÈˆ˜YÙ[[][˜Ú\ˆŠJHOH[È›ÚYˆØ‹œ™[[Ý™J
NÂˆÛÛœÝYÙ[][˜Ú\ˆHØÝ[Y[˜Ü™X]Q[[Y[
˜]ÛˆŠNÂˆYÙ[][˜Ú\‹\HH˜]ÛˆŽÂˆYÙ[][˜Ú\‹šYH›[Øš[KXYÙ[[][˜Ú\ˆŽÂˆYÙ[][˜Ú\‹˜Û\ÜÓ˜[YHHšXY\‹XÛÛ›Û[Øš[K[[Ü™KXÛÛ›ÛŽÂˆYÙ[][˜Ú\‹œÙ]]šX]J˜\šXK[X™[‹µèuåuæõçÈ5å5æ5æuåuçŠNÂˆYÙ[][˜Ú\‹š[›™\’SHXÛÛŠ˜YÙ[ÛÛ\\ÜÈŠH
È	ÏÜ[ˆÛ\ÜÏH˜ÛÛ›Û[X™[µèuåuæõçÈ5å5æ5æuåuçÜÜ[‰ÎÂˆYÙ[][˜Ú\‹›Û˜ÛXÚÈH

HOˆÂˆYˆ
]š\
HÂˆÝ]\ÊµæuêH5ç5äuåõåuê5æ5æuåuç5ç5é5è5æH5é5êµæuåõêˆ5å5èuåuæõçËˆŠNÂˆ™]\›ŽÂˆBˆÜ[YÙ[Ý™\›^J
NÂˆNÂˆÛÛœÝ\Ý[˜][ÛÛÛ›ÛÈHØÝ[Y[œ]Y\žTÙ[XÝÜŠˆÙ\Ý[˜][Û‹XÛÛ›ÛÈŠNÂˆYˆ
\Ý[˜][ÛÛÛ›ÛÊH\Ý[˜][ÛÛÛ›ÛË˜\[™
YÙ[][˜Ú\ŠNÂˆÈ˜›ÛÚÚ[™È‹™^[œÙ\È—K™›Ü‘XXÚ

Y
HOˆÂˆÛÛœÝ]ÛˆH˜]‹œ]Y\žTÙ[XÝÜŠ	ÎœØÛÜHˆ›˜]‹Z][VÙ]K]XH‰È
ÈY
È	È—IÊNÂˆYˆ
]ÛŠH\™Ù]˜\[™
]ÛŠNÂˆJNÂˆÛÛœÝ™\H˜]‹œ]Y\žTÙ[XÝÜŠˆÛ˜]‹\™\\˜][ÛˆŠNÂˆYˆ
™\
HÂˆ\œ˜^K™œ›ÛJ™\œ]Y\žTÙ[XÝÜ[
‹›˜]‹[Y[Hˆ›˜]‹]ÛÛYÜ›Ý\ˆ›˜]‹Z][HŠJK™›Ü‘XXÚ

]ÛŠHOˆ\™Ù]˜\[™
]ÛŠJNÂˆ™\œ™[[Ý™J
NÂˆBˆ\œ˜^K™œ›ÛJY[Kœ]Y\žTÙ[XÝÜ[
‹›˜]‹]ÛÛYÜ›Ý\ˆ›˜]‹Z][HŠJK™›Ü‘XXÚ

]ÛŠHOˆ\™Ù]˜\[™
]ÛŠJNÂˆ[Ü™Kœ™[[Ý™J
NÂˆ˜]‹˜\[™
š[X\žK[Øš[S[Ü™JNÂˆÛÛœÝXY\“Y[HH[Øš[S[Ü™Kœ]Y\žTÙ[XÝÜŠ‹›˜]‹[Y[HŠNÂˆÛÛœÝÙXÛÛ™\žRXY\ÛÛ›ÛÈHÂˆØÝ[Y[œ]Y\žTÙ[XÝÜŠˆÙ\Ý[˜][Û‹XÛÛ›ÛÈ™\Ý[˜][Û‹[Y[HŠKˆØÝ[Y[œ]Y\žTÙ[XÝÜŠˆØXØÛÝ[˜XØÛÝ[]ÛÛÈˆÜ™Yœ™\ÚŠKˆØÝ[Y[œ]Y\žTÙ[XÝÜŠˆØXØÛÝ[˜XØÛÝ[]ÛÛÈˆ˜XØÛÝ[[Y[HŠBˆK™š[\Š›ÛÛX[ŠNÂˆYˆ
XY\“Y[H	‰ˆZXY\“Y[Kœ]Y\žTÙ[XÝÜŠ‹›[Øš[KZXY\‹XXÝ[ÛœÈŠJHÂˆÛÛœÝÙXÝ[ÛˆHØÝ[Y[˜Ü™X]Q[[Y[
™]ˆŠNÂˆÙXÝ[Û‹˜Û\ÜÓ˜[YHH›˜]‹]ÛÛYÜ›Ý\[Øš[KZXY\‹XXÝ[ÛœÈŽÂˆÙXÝ[Û‹œÙ]]šX]Jœ›ÛH‹™Ü›Ý\ŠNÂˆÙXÝ[Û‹œÙ]]šX]J˜\šXK[X™[‹µæõç5æuçH5è5åuèué5æuçHŠNÂˆÛÛœÝXY[™ÈHØÝ[Y[˜Ü™X]Q[[Y[
œŠNÂˆXY[™Ë˜Û\ÜÓ˜[YHH˜ÛÛ›Û[Y[KZXY[™ÈŽÂˆXY[™Ë^ÛÛ[Hµæõç5æuçH5è5åuèué5æuçHŽÂˆÙXÝ[Û‹˜\[™
XY[™ÊNÂˆÙXÛÛ™\žRXY\ÛÛ›ÛË™›Ü‘XXÚ

ÛÛ›ÛŠHOˆÂˆÛÛ›Û‹˜Û\ÜÓ\Ý˜Y
›[Øš[K[[Ü™KXÛÛ›ÛŠNÂˆÙXÝ[Û‹˜\[™
ÛÛ›ÛŠNÂˆJNÂˆYˆ
ÙXÝ[Û‹˜Ú[™[‹›[™ÝˆJHXY\“Y[K˜\[™
ÙXÝ[ÛŠNÂˆBˆBˆBˆ	
ˆÝXœÈŠKœ]Y\žTÙ[XÝÜ[
˜]Û–Ù]K]X—HŠK™›Ü‘XXÚ

ŠHOˆ‹›Û˜ÛXÚÈH

HOˆÂˆYˆ
X]˜Z[X›H]š\\ÞHXØ[“X]™Uš\˜Y

JH™]\›ŽÂˆXˆH‹™]\Ù]XŽÂˆ™[™\Š
NÂˆ›ØÝ\ÕšY]Ê
NÂˆJNÂˆBˆ[˜Ý[ÛˆØ[“X]™Uš\˜Y

HÂˆ™]\›ˆI
ˆÝšY]ÈÙ]K]š\YY]Y›Ü›WHŠHÛÛ™š\›JµæuêH5èµê5æuæõêˆ5é5ê5æ5æH5æ5æuåuç5é5êµåuåõåˆ5ç5èµåµåuäH5ç5ç5ä5êuçµæuê5åÈŠNÂˆBˆ[˜Ý[Ûˆ›ØÝ\ÕšY]Ê
HÂˆÛÛœÝXY[™ÈH	
ˆÝšY]ÈˆŠNÂˆYˆ
XY[™ÊHÂˆXY[™ËX’[™^HLNÂˆXY[™Ë™›ØÝ\Ê
NÂˆBˆBˆ[˜Ý[Ûˆ™[™\Š
HÂˆ˜\ˆØMÂˆÛXÞT™]šY]Ñ\HH˜[ÙNÂˆ›Ý]PÛX[\OH[È›ÚYˆ›Ý]PÛX[\

NÂˆ›Ý]PÛX[\H[ÂˆYˆ
]š\\Ù\ÜÚ[ÛŠH™]\›ŽÂˆ\Uš\˜XÚÙÜ›Ý[™

NÂˆšY]Ñ\ØÚ
ÊÎÂˆÛÛœÝÛÛ^HØÝ[Y[œ]Y\žTÙ[XÝÜŠ‹œÚ]KZXY\ˆ˜œ˜[™ŠNÂˆYˆ
ÛÛ^
HÂˆÛÛ^^ÛÛ[HXˆOOH™\Ú›Ø\™ˆÈµèuæ5æ5åuèNˆˆ
ÈÝ]\ÓX™[
š\œÙ][™ÜÊHˆˆŽÂˆÛÛ^šY[ˆHXˆOOH™\Ú›Ø\™ŽÂˆBˆ™[™\•š\˜]šYØ][ÛŠ
NÂˆYˆ
XˆOOHœÛÝ\˜Ù\ÈŠHÂˆ	
ˆÝšY]ÈŠKš[›™\’SHÙXÝ[Ûˆ]KX›ÛÚÚ[™Ë\ÛÝ\˜Ù\ÏÜÙXÝ[ÛˆŽÂˆ›Ý]PÛX[\H[Ý[›ÛÚÚ[™ÔÛÝ\˜Ù\ÊÈ›ÛÝˆ	
ˆÝšY]ÈÙ]KX›ÛÚÚ[™Ë\ÛÝ\˜Ù\×HŠKX[ÙÎˆ	
ˆÙY]ÜˆŠKš\\NˆÛÝ\˜Ù\Ð\KÛ”™Yœ™\Úˆ

HOˆØY

K˜Ø]Ú
ÚÝÓØY\œ›ÜŠHJNÂˆ™]\›ŽÂˆBˆYˆ
XˆOOH™šY[ŠHÂˆ	
ˆÝšY]ÈŠKš[›™\’SHÙXÝ[Ûˆ]KYšY[Y^ÜÜÙXÝ[ÛˆŽÂˆ›Ý]PÛX[\H[Ý[šY[^Ü
È›ÛÝˆ	
ˆÝšY]ÈÙ]KYšY[Y^ÜHŠK\NˆšY[^Ü\Kš\Yˆš\šYJNÂˆ™]\›ŽÂˆBˆYˆ
XˆOOH™ØÝ[Y[ÈŠHÂˆ	
ˆÝšY]ÈŠKš[›™\’SHÙXÝ[Ûˆ]KX›ÛÚÚ[™ËYØÝ[Y[ÏÜÙXÝ[ÛˆŽÂˆ›Ý]PÛX[\H[Ý[›ÛÚÚ[™ÑØÝ[Y[ÊÈ›ÛÝˆ	
ˆÝšY]ÈÙ]KX›ÛÚÚ[™ËYØÝ[Y[×HŠKX[ÙÎˆ	
ˆÙY]ÜˆŠKš\\NˆØÝ[Y[\KÛÚ[™ÙYˆ

HOˆØY

K˜Ø]Ú
ÚÝÓØY\œ›ÜŠHJNÂˆ™]\›ŽÂˆBˆYˆ
XˆOOH™Ü›Ý\ŠHÂˆ	
ˆÝšY]ÈŠKš[›™\’SHÙXÝ[Ûˆ]K[ÝÛ™\‹YÜ›Ý\ÜÙXÝ[ÛˆŽÂˆ›Ý]PÛX[\H[Ý[š\Ü›Ý\
È›ÛÝˆ	
ˆÝšY]ÈÙ]K[ÝÛ™\‹YÜ›Ý\HŠKX[ÙÎˆ	
ˆÙY]ÜˆŠKš\\NˆÜ›Ý\\KÝ]NˆÙXÝ[Û”Ý]J™Ü›Ý\ŠKÛÚ[™ÙYˆ

HOˆØY

K˜Ø]Ú
ÚÝÓØY\œ›ÜŠHJNÂˆ™]\›ŽÂˆBˆYˆ
XˆOOH˜YÙ[ŠHÂˆ	
ˆÝšY]ÈŠKœ™\XÙPÚ[™[Š
NÂˆÛÛœÝX”›ÛÝHØÝ[Y[˜Ü™X]Q[[Y[
™]ˆŠNÂˆX”›ÛÝ™]\Ù]˜YÙ[X”›ÛÝHˆŽÂˆ	
ˆÝšY]ÈŠK˜\[™
X”›ÛÝ
NÂˆÛÛœÝXÛX[\H[Ý[YÙ[XŠÈÛÛZ[™\ŽˆX”›ÛÝš\\NˆÜ™X]T[›š[™Ð\JÛY[ÊKšY]ÔÝ]NˆÙXÝ[Û”Ý]J˜YÙ[ŠHJNÂˆÛÛœÝXœšY›ÛÝHØÝ[Y[˜Ü™X]Q[[Y[
™]ˆŠNÂˆXœšY›ÛÝ™]\Ù]šXœšYYÙ[HˆŽÂˆ	
ˆÝšY]ÈŠKœ™\[™
XœšY›ÛÝ
NÂˆ]ÛÜÙYH˜[ÙKXœšYÛX[\H[Ý[YÙ[[™[
È›ÛÝˆXœšY›ÛÝ›ØÚÙY™X\ÛÛŽˆµçµä5çµêˆ5å5ê5êuä5êˆ5èuåuæõçø )ˆˆJNÂˆÜ[’XœšYYÙ[Ù\ÜÚ[ÛŠÈØ]]Ø^NˆÜ™X]PYÙ[Ø]]Ø^JÛY[ÊK›ÛÝ]ˆÈ[ÙNˆ›Ûˆ‹ÝÛ™\’YˆÙ\ÜÚ[Û‹\Ù\‹šYXÝ]™Nˆ
XØÛÝ[Ý]HOH[È›ÚYˆXØÛÝ[Ý]KœÝ]\ÊHOOH˜XÝ]™H‹\ÓX[˜YÙ[Y[ˆ
XØÛÝ[Ý]HOH[È›ÚYˆXØÛÝ[Ý]Kš\ÔÝ\\\Ù\ŠHOOHYHKš\Yˆš\šYJK[Š
™\Ý[
HOˆÂˆ˜\ˆØMNÂˆYˆ
ÛÜÙY
H™]\›ŽÂˆXœšYÛX[\OH[È›ÚYˆXœšYÛX[\

NÂˆXœšYÛX[\H[Ý[YÙ[[™[
È›ÛÝˆXœšY›ÛÝÛÛ^ˆ™\Ý[›ÚÈÈÈ\Ý[˜][Û“˜[YNˆ

ØMHH™\Ý[˜ÛÛ™\œØ][ÛŠHOH[È›ÚYˆØMK™\Ý[˜][Û“˜[YJHš\™\Ý[˜][Û—Û˜[YHHˆ[›ØÚÙY™X\ÛÛŽˆ™\Ý[›ÚÈÈˆˆˆ™\Ý[œ™X\ÛÛ‹Û”Ý\ˆ
^[ØY
HOˆÂˆ˜\ˆØM‹ØŽÂˆ™]\›ˆ
^[ØYOH[È›ÚYˆ^[ØY˜XÝ[ÛŠHÈ™\]Y\ÝYÙ[\›Ý˜[
^[ØY˜XÝ[Û‹

ØMˆH™\Ý[˜ÛÛ™\œØ][ÛŠHOH[È›ÚYˆØM‹˜ÛÛ™\œØ][Û’Y
H

ØˆH™\Ý[˜ÛÛ™\œØ][ÛŠHOH[È›ÚYˆØ‹šY
JHˆÝ]\Êµå5é5èµåuç5å5êµåué5èµç5ç5ä5åõê5äuåõæuê5êˆ5é5éõåuäõå5åuä5æuêuåuê5çµé5åuê5êKˆŠNÂˆKÛ\›Ý™Nˆ
™XÛÜ™
HOˆÂˆ˜\ˆØM‹ØŽÂˆ™]\›ˆ\›Ý™PYÙ[XÝ[ÛŠ™XÛÜ™

ØMˆH™\Ý[˜ÛÛ™\œØ][ÛŠHOH[È›ÚYˆØM‹˜ÛÛ™\œØ][Û’Y
H

ØˆH™\Ý[˜ÛÛ™\œØ][ÛŠHOH[È›ÚYˆØ‹šY
JNÂˆKÛØ[˜Ù[ˆØ[˜Ù[YÙ[XÝ[Û‹Û“˜]šYØ]Nˆ
Ù^JHOˆÂˆYˆ
XØ[“X]™Uš\˜Y

JH™]\›ŽÂˆXˆHÙ^HOOH™Z[HˆÈœÝÜˆˆÙ^NÂˆYˆ
Ù^HOOH™Z[HˆÙ^HOOHœÝÜŠHÂˆ›Ý]UšY]ÈHÙ^HOOH™Z[HˆÈ›\Ýˆˆ›X\ŽÂˆ›Ý]Q^HH[ÂˆBˆ™[™\Š
NÂˆ›ØÝ\ÕšY]Ê
NÂˆKÛ”™\]Y\ÝˆYÙ[[œÝÙ\ˆJNÂˆJK˜Ø]Ú


HOˆÂˆYˆ
ÛÜÙY
H™]\›ŽÂˆXœšYÛX[\OH[È›ÚYˆXœšYÛX[\

NÂˆXœšYÛX[\H[Ý[YÙ[[™[
È›ÛÝˆXœšY›ÛÝ›ØÚÙY™X\ÛÛŽˆµå5èuåuæõçÈ5ä5æuè5åH5åµçµæuçÈ5æõê5äµè‹ˆ5è5èuå5ç5ê5èµè5çÈ5ä5åH5ç5é5è5åuêˆ5ç5êµçµæuæõåˆˆJNÂˆJNÂˆ›Ý]PÛX[\H

HOˆÂˆÛÜÙYHYNÂˆXœšYÛX[\OH[È›ÚYˆXœšYÛX[\

NÂˆXÛX[\OH[È›ÚYˆXÛX[\

NÂˆNÂˆ™]\›ŽÂˆBˆYˆ
XˆOOH™^[œÙ\ÈŠHÂˆÛÛœÝ›ÝÜÈH^[œÙT›ÝÜÊš\š][\Ëš\œÙ][™ÜÊNÂˆYˆ
\›ÝÜËœÛÛYJ
ŠHOˆ‹˜Ø]YÛÜžHOOH^[œÙPØ]YÛÜžJJH^[œÙPØ]YÛÜžHHˆŽÂˆ	
ˆÝšY]ÈŠKš[›™\’SH^[œÙ\ÓX\šÝ\
š\^[œÙPØ]YÛÜžJNÂˆ	
–Ù]KXYY^[œÙWHŠK›Û˜ÛXÚÈH

HOˆY]^[œÙJ
NÂˆ	
–Ù]KY^[œÙKYš[\—HŠK›Û˜Ú[™ÙHH
JHOˆÂˆ˜\ˆØMNÂˆ^[œÙPØ]YÛÜžHHK\™Ù]˜[YNÂˆ™[™\Š
NÂˆ
ØMHH	
ˆÝšY]ÈÙ]KY^[œÙKYš[\—HŠJHOH[È›ÚYˆØMK™›ØÝ\ÊÈ™]™[ØÜ›ÛˆYHJNÂˆNÂˆ	
ˆÝšY]ÈŠKœ]Y\žTÙ[XÝÜ[
–Ù]KY^[œÙKYY]HŠK™›Ü‘XXÚ

ŠHOˆ‹›Û˜ÛXÚÈH

HOˆÂˆYˆ
‹™]\Ù]™^[œÙTÛÝ\˜ÙHOOH˜›ÛÚÚ[™ÈŠHÂˆÛÛœÝ][HHš\š][\Ë™š[™

JHOˆKšÚ[™OOH˜›ÛÚÚ[™Èˆ	‰ˆKšYOOH‹™]\Ù]™^[œÙQY]
NÂˆYˆ
][JHY]
˜›ÛÚÚ[™È‹][JNÂˆH[ÙHÂˆÛÛœÝ][HH
š\œÙ][™ÜË™^[œÙ\È×JK™š[™


HOˆšYOOH‹™]\Ù]™^[œÙQY]
NÂˆYˆ
][JHY]^[œÙJ][JNÂˆBˆJNÂˆ	
ˆÝšY]ÈŠKœ]Y\žTÙ[XÝÜ[
–Ù]KY^[œÙKY[]WHŠK™›Ü‘XXÚ

ŠHOˆ‹›Û˜ÛXÚÈH

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆYˆ
\ÞHXÛÛ™š\›Jµç5çµåõåuéÈ5å5åuéµä5å5åµåOÈ5èuæõåuçµæH5å5êµæõè5åuçÈ5åuå5êµêuç5åuçµæuçH5äuäõåuí5åÈ5æuêuêµè5åH5äuå5êµä5çKˆŠJH™]\›ŽÂˆÛÛœÝÙ][™ÜÌˆH×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßKš\œÙ][™ÜÊKÈ^[œÙ\Îˆ
š\œÙ][™ÜË™^[œÙ\È×JK™š[\Š

HOˆšYOOH‹™]\Ù]™^[œÙQ[]JHJNÂˆYˆ
ZY[Ø]™SÜ\˜][ÛŠ

HOˆ™\Ë\]TÙ][™ÜÊš\šYš\™\œÚ[Û‹Ù][™ÜÌŠJJHZY[Y\”Ø]™J
NÂˆJJNÂˆ[š[˜ÙQ^[œÙ\Ê	
ˆÝšY]ÈŠKÙXÝ[Û”Ý]J™^[œÙ\ÈŠJNÂˆ™]\›ŽÂˆBˆYˆ
XˆOOH™\Ú›Ø\™ŠHÂˆÛÛœÝ\ÜÜÙQ\Ú›Ø\™H[Ý[ÛY[\Ú›Ø\™
È›ÛÝˆ	
ˆÝšY]ÈŠKš\Ý]NˆÙXÝ[Û”Ý]J›Ý™\šY]ÈŠKÛ“˜]šYØ]Nˆ
Ù^JHOˆÂˆYˆ
XØ[“X]™Uš\˜Y

JH™]\›ŽÂˆXˆHÙ^HOOH™Z[HˆÈœÝÜˆˆÙ^NÂˆYˆ
Ù^HOOH™Z[HˆÙ^HOOHœÝÜŠHÂˆ›Ý]UšY]ÈHÙ^HOOH™Z[HˆÈ›\Ýˆˆ›X\ŽÂˆ›Ý]Q^HH[ÂˆBˆ™[™\Š
NÂˆ›ØÝ\ÕšY]Ê
NÂˆKÛ‘Y]ˆ
][JHOˆY]
][KšÚ[™][JKÛÚ[™ÙQ\Ý[˜][ÛŽˆ

HOˆÂˆ˜\ˆØMNÂˆ™]\›ˆ
ØMHH	
ˆÙ\Ý[˜][ÛœËZÛYHŠJHOH[È›ÚYˆØMK˜ÛXÚÊ
NÂˆHJNÂˆÛÛœÝ]Z[Õš\Hš\]Z[Õ\Ù\ˆHÙ\ÜÚ[Û‹\Ù\‹šYÂˆÛÛœÝ\ÜÜÙQ]Z[ÈH[Ý[š\]Z[ÊÈ›ÛÝˆ	
ˆÝšY]ÈÙ]K]š\Y]Z[×HŠKš\ˆ]Z[Õš\Ý]NˆÙXÝ[Û”Ý]Jš\Y]Z[ÈŠKÛ”Ø]™Nˆ
Ù][™ÜÌŠHOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆ˜\ˆØMNÂˆYˆ

Ù\ÜÚ[ÛˆOH[È›ÚYˆÙ\ÜÚ[Û‹\Ù\‹šY
HOOH]Z[Õ\Ù\ˆ
š\OH[È›ÚYˆš\šY
HOOH]Z[Õš\šY
XØÛÝ[Ý]HOH[È›ÚYˆXØÛÝ[Ý]KœÝ]\ÊHOOH˜XÝ]™HŠH›ÝÈ\œ›ÜŠµå5æ5æuåuç5ä5åH5å5åõêuäuåuçÈ5å5êuêµè5åKˆ5æuêH5ç5é5êµåuåÈ5çµåõäõêH5ä5êˆ5å5èµê5æuæõåˆŠNÂˆ]Ø]™YÂˆÛÛœÝÚØ^HHZY[Ø]™SÜ\˜][ÛŠ

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆØ]™YHZY[™\Ë\]TÙ][™ÜÊ]Z[Õš\šY]Z[Õš\™\œÚ[Û‹Ù][™ÜÌŠNÂˆJJNÂˆYˆ

Ù\ÜÚ[ÛˆOH[È›ÚYˆÙ\ÜÚ[Û‹\Ù\‹šY
HOOH]Z[Õ\Ù\ˆ
š\OH[È›ÚYˆš\šY
HOOH]Z[Õš\šY
H›ÝÈ\œ›ÜŠµå5æ5æuåuç5ä5åH5å5åõêuäuåuçÈ5å5êuêµè5åKˆŠNÂˆYˆ
[ÚØ^JH›ÝÈ\œ›ÜŠ	
ˆÛY\ÜØYÙHŠK^ÛÛ[µå5êuçµæuê5å5ç5ä5å5åuêuç5çµåŠNÂˆš\H×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\Ê×ÜÜ™XY˜[Y\ÊßKš\
KØ]™Y
KÈ][\Îˆš\š][\ÈJNÂˆ\Ý[˜][ÛœÌˆH\Ý[˜][ÛœÌ‹›X\


HOˆšYOOHØ]™YšYÈ×ÜÜ™XY˜[Y\Ê×ÜÜ™XY˜[Y\ÊßK
KØ]™Y
Hˆ
NÂˆ™[™\Š
NÂˆXØÛÝ[

NÂˆ	
ˆÝšY]ÈÙ]K]š\Y™YY˜XÚ×HŠK^ÛÛ[Hµé5ê5æ5æH5å5æ5æuåuç5è5êuçµê5åKˆŽÂˆ
ØMHH	
ˆÝšY]ÈÙ]K]š\YY]HŠJHOH[È›ÚYˆØMK™›ØÝ\ÊÈ™]™[ØÜ›ÛˆYHJNÂˆJKÛ‘Y]Y˜[˜ÙYˆ

HOˆÂˆYˆ
Ø[“X]™Uš\˜Y

JH\Ý[˜][Û‘Y]ÜŠ]Z[Õš\
NÂˆHJNÂˆÛÛœÝ™XY[™\ÜÕš\Hš\ÂˆÛÛœÝ\ÜÜÙT™XY[™\ÜÈH[Ý[š\™XY[™\ÜÊÈ›ÛÝˆ	
ˆÝšY]Èš\XÛÛ\][ÛˆŠKX[ÙÎˆ	
ˆÙY]ÜˆŠKš\ˆ™XY[™\ÜÕš\Ý]NˆÙXÝ[Û”Ý]Jœ™XY[™\ÜÈŠKÛ‘Y]ˆ
][JHOˆY]
][KšÚ[™][JKÛ”™Yœ™\Úˆ

HOˆØY

K˜Ø]Ú
ÚÝÓØY\œ›ÜŠKÛ”Ø]™T™\]Z\™[Y[Îˆ
Ì
HOˆ×Ø\Þ[˜Ê[×ÌK[˜Ý[ÛŠˆ
È™\]Z\™[Y[Ë[YV›Û™HJHÂˆYˆ

š\OH[È›ÚYˆš\šY
HOOH™XY[™\ÜÕš\šY
H›ÝÈ\œ›ÜŠµå5æ5æuåuç5å5êuêµè5åˆ5é5êµåÈ5çµåõäõêH5ä5êˆ5å5å5äµäõê5åuê‹ˆŠNÂˆYˆ
JZY[Ø]™SÜ\˜][ÛŠ

HOˆ™\Ë\]TÙ][™ÜÊ™XY[™\ÜÕš\šY™XY[™\ÜÕš\™\œÚ[Û‹×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßK™XY[™\ÜÕš\œÙ][™ÜÊKÈ[YV›Û™K™XY[™\ÜÔ™\]Z\™[Y[Îˆ™\]Z\™[Y[ÈJJJJJH›ÝÈ\œ›ÜŠµå5å5äµäõê5åuêˆ5ç5ä5è5êuçµê5åKˆ5äuäõåuéÈ5ä5êˆ5å5å5åuäõèµå5åuè5èuå5êuåuäKˆŠNÂˆJKÛ”Ø]™YˆY\”Ø]™HJNÂˆ›Ý]PÛX[\H

HOˆÂˆ\ÜÜÙQ]Z[Ê
NÂˆ\ÜÜÙQ\Ú›Ø\™

NÂˆ\ÜÜÙT™XY[™\ÜÊ
NÂˆNÂˆ™]\›ŽÂˆBˆYˆ
XˆOOHœÙ][™ÜÈŠHÂˆÙ][™ÜÊ
NÂˆ™]\›ŽÂˆBˆ]][\ÈHš\š][\Ë™š[\Š

HOˆšÚ[™OOHXŠNÂˆYˆ
XˆOOHœÝÜŠH][\ËœÛÜ

KŠHOˆKœ^[ØY™^HH‹œ^[ØY™^JNÂˆ]Ø]YÛÜžSY[HHˆ‹Ø]YÛÜžSÜ[ÛœÈH×NÂˆYˆ
XˆOOHœÝÜŠHÂˆØ]YÛÜžSY[HH	Ï]ˆÛ\ÜÏHœ›ÝÈˆ›ÛOH™Ü›Ý\ˆ\šXK[X™[Hµêµéµåuäµêˆ5çµèuç5åuçˆÝ[OH›X\™Ú[ŽŒLœ‰È
ÈÖÈ›X\‹µçµé5å—KÈ›\Ý‹µêµåuæõè5æuêˆ5æuåuçµæuêˆ—WK›X\

ÚYX™[JHOˆ	Ï]Ûˆ\OH˜]Ûˆˆ]K\›Ý]K]šY]ÏH‰È
ÈY
È	Èˆ\šXK\™\ÜÙYH‰È
È
›Ý]UšY]ÈOOHY
H
È	ÈˆÛ\ÜÏH‰È
È
›Ý]UšY]ÈOOHYÈ˜XÝ]™HˆˆˆŠH
È	È‰È
ÈX™[
ÈØ]ÛˆŠKš›Ú[ŠˆŠH
ÈÙ]ˆŽÂˆYˆ
›Ý]UšY]ÈOOH›X\ŠHÂˆ	
ˆÝšY]ÈŠKš[›™\’SH	ÏÙXÝ[Û]ˆÛ\ÜÏHœ›ÝÈµçµèuç5åuçÚÙ]‰È
ÈØ]YÛÜžSY[H
È	Ï]ˆYHœ›Ý]K[X\\[™[Ù]ÜÙXÝ[Û‰ÎÂˆ	
ˆÝšY]ÈŠKœ]Y\žTÙ[XÝÜ[
–Ù]K\›Ý]K]šY]×HŠK™›Ü‘XXÚ

ŠHOˆ‹›Û˜ÛXÚÈH

HOˆÂˆ›Ý]UšY]ÈH‹™]\Ù]œ›Ý]UšY]ÎÂˆ›Ý]Q^HH[Âˆ™[™\Š
NÂˆ›ØÝ\ÕšY]Ê
NÂˆJNÂˆ›Ý]PÛX[\H[Ý[›Ý]SX\
	
ˆÜ›Ý]K[X\\[™[ŠK][\Ë
Y
HOˆÂˆ˜\ˆØMKØ‹ØÎÂˆ›Ý]Q^HH
ØˆH
ØMHH][\Ë™š[™


HOˆšYOOHY
JHOH[È›ÚYˆØMKœ^[ØY™^JHOH[ÈØˆˆ[Âˆ›Ý]UšY]ÈH›\ÝŽÂˆÛÛœÝZ[R][\ÈH][\Ë™š[\Š

HOˆÝš[™Êœ^[ØY™^JHOOHÝš[™Ê›Ý]Q^JJKZ[TÝ]HHÙXÝ[Û”Ý]JœÝÜ˜[˜[ˆˆ
È
›Ý]Q^HOH[È›Ý]Q^Hˆ˜[ŠJNÂˆZ[TÝ]K™^HHÝš[™Ê›Ý]Q^JNÂˆZ[TÝ]KœYÙ\ÈHÈYÙNˆX]™›ÛÜŠX]›X^
Z[R][\Ë™š[™[™^


HOˆšYOOHY
JHÈYÙTÚ^™Q›ÜŠ	
ˆÝšY]ÈŠJJHNÂˆ™[™\Š
NÂˆÛÛœÝØ\™HË‹‹‰
ˆÝšY]ÈŠKœ]Y\žTÙ[XÝÜ[
–Ù]KZYHŠWK™š[™


HOˆ™]\Ù]šYOOHY
NÂˆÛÛœÝXY[™ÈHØ\™OH[È›ÚYˆØ\™œ]Y\žTÙ[XÝÜŠšÈŠNÂˆYˆ
XY[™ÊHÂˆXY[™ËX’[™^HLNÂˆXY[™Ë™›ØÝ\Ê
NÂˆ
ØÈHXY[™ËœØÜ›Û[ÕšY]ÊHOH[È›ÚYˆØË˜Ø[
XY[™ËÈ›ØÚÎˆœÝ\ˆJNÂˆBˆKš\™\Ý[˜][Û—Û˜[YJNÂˆ™]\›ŽÂˆBˆYˆ
›Ý]Q^HOOH[
HÂˆ][\ÈH][\Ë™š[\Š

HOˆÝš[™Êœ^[ØY™^JHOOHÝš[™Ê›Ý]Q^JJNÂˆØ]YÛÜžSY[H
ÏH	Ï›ÛOHœÝ]\Èµêµåuæõè5æuêˆ5ç5æuåuçH	È
È\ØÌJ›Ý]Q^JH
Èˆ0­È5ç5éµé5æuæuå5äuæõç5å5æuçµæuçH5ç5åõéH5èµç5í5êµåuæõè5æuêˆ5æuåuçµæuêµíÜˆŽÂˆBˆBˆYˆ
ÈœXÙH‹˜›ÛÚÚ[™È‹\ÚÈ‹™ÙX\ˆ—Kš[˜ÛY\ÊXŠJHÂˆÛÛœÝØ]YÛÜžHH

HOˆÂˆ˜\ˆØMNÂˆ™]\›ˆ

ØMHHÈ\ÚÈ‹™ÙX\ˆ—Kš[˜ÛY\ÊXŠHÈœ^[ØY˜Ø]YÛÜžHˆœ^[ØY\JHOH[È›ÚYˆØMKš[J
JH
XˆOOH\ÚÈˆÈµæõç5ç5æHˆˆµç5ç5ä5éõæ5äµåuê5æuåŠNÂˆKÛÝ[ÈHÊˆ×ÔT‘W×È
‹È™]ÈX\

NÂˆ][\Ë™›Ü‘XXÚ


HOˆÛÝ[ËœÙ]
Ø]YÛÜžJ
K
ÛÝ[Ë™Ù]
Ø]YÛÜžJ
JH
H
ÈJJNÂˆYˆ
XˆOOH˜›ÛÚÚ[™ÈŠHÂˆ›Üˆ
ÛÛœÝÙˆË‹‹š\œÙ][™ÜË˜›ÛÚÚ[™ÔÛXÚY\È×K‹‹š\œÙ][™ÜË˜›ÛÚÚ[™ÔÛXÞT›ÜÜØ[È×WJHYˆ
XÛÝ[Ëš\Ê˜Ø]YÛÜžJJHÛÝ[ËœÙ]
˜Ø]YÛÜžK
NÂˆBˆYˆ
Ø]YÛÜšY\ÖÝX—HOOH[	‰ˆXÛÝ[Ëš\ÊØ]YÛÜšY\ÖÝX—JJHØ]YÛÜšY\ÖÝX—HH[ÂˆØ]YÛÜžSÜ[ÛœÈHÛ[‹‹–Ë‹‹˜ÛÝ[ËšÙ^\Ê
WKœÛÜ

KŠHOˆK›ØØ[PÛÛ\\™J‹šHŠJWNÂˆØ]YÛÜžSY[HH	Ï]ˆÛ\ÜÏHœXÙKYš[\‹X˜\ˆX™[›ÜHœXÙKXØ]YÛÜžHµéõæ5äµåuê5æuåÛX™[Ù[XÝYHœXÙKXØ]YÛÜžHˆ\šXK[X™[Hµéõæ5äµåuê5æuåuêˆ	È
È\ØÌJXœË™š[™


HOˆÌHOOHXŠVÌWJH
È	È‰È
ÈØ]YÛÜžSÜ[ÛœË›X\

˜[YK[™^
HOˆ	ÏÜ[Ûˆ˜[YOH‰È
È[™^
È	Èˆ	È
È
Ø]YÛÜšY\ÖÝX—HOOH˜[YHÈœÙ[XÝYˆˆˆŠH
Èˆˆ
È\ØÌJ˜[YHOH[È˜[YHˆµå5æõåuçŠH
Èˆ
ˆ
È
˜[YHOOH[È][\Ë›[™ÝˆÛÝ[Ë™Ù]
˜[YJJH
ÈŠOÛÜ[ÛˆŠKš›Ú[ŠˆŠH
ÈÜÙ[XÝÙ]ˆŽÂˆYˆ
Ø]YÛÜšY\ÖÝX—HOOH[
H][\ÈH][\Ë™š[\Š

HOˆØ]YÛÜžJ
HOOHØ]YÛÜšY\ÖÝX—JNÂˆBˆ]ÛÜšÙ›ÝÓY[HHˆ‹™XÛÜ™ÓX\šÝ\HˆŽÂˆÛÛœÝX[˜YÙYHÈ˜›ÛÚÚ[™È‹\ÚÈ—Kš[˜ÛY\ÊXŠKÝ]\ÝXÜÈHX[˜YÙY	‰ˆÛÜšÕšY]ÜÖÝX—HOOHœÝ]È‹ÛXÞUšY]ÈHXˆOOH˜›ÛÚÚ[™Èˆ	‰ˆÛÜšÕšY]ÜË˜›ÛÚÚ[™ÈOOHœÛXÚY\ÈŽÂˆYˆ
X[˜YÙY
HÂˆÛÜšÙ›ÝÓY[HH	Ï]ˆÛ\ÜÏHÛÜšÙ›ÝË]šY]ÜÈˆ›ÛOH™Ü›Ý\ˆ\šXK[X™[Hµêµéµåuäµêˆ	È
È\ØÌJXœË™š[™


HOˆÌHOOHXŠVÌWJH
È	È‰È
ÈÖÈ˜Ý\œ™[‹µçµéµäH5è5åuæõåõæH—KÈœÝ]È‹µèuæ5æ5æuèuæ5æuéõåuêˆ—K‹‹XˆOOH˜›ÛÚÚ[™ÈˆÈÖÈœÛXÚY\È‹µçµäõæuè5æuåuêˆ5å5åµçµè5å—WHˆ×WK›X\

ÚYX™[JHOˆ	Ï]Ûˆ\OH˜]Ûˆˆ]K]ÛÜšË]šY]ÏH‰È
ÈY
È	Èˆ\šXK\™\ÜÙYH‰È
È
ÛÜšÕšY]ÜÖÝX—HOOHY
H
È	ÈˆÛ\ÜÏH‰È
È
ÛÜšÕšY]ÜÖÝX—HOOHYÈ˜XÝ]™HˆˆˆŠH
È	È‰È
ÈX™[
ÈØ]ÛˆŠKš›Ú[ŠˆŠH
ÈÙ]ˆŽÂˆYˆ
ÛXÞUšY]ÊH™XÛÜ™ÓX\šÝ\HÛXÚY\ÓX\šÝ\
š\š][\Ëš\œÙ][™ÜË˜›ÛÚÚ[™ÔÛXÚY\È×KØ]YÛÜšY\Ë˜›ÛÚÚ[™Ëš\œÙ][™ÜÊNÂˆ[ÙHYˆ
Ý]\ÝXÜÊH™XÛÜ™ÓX\šÝ\HÝ]\ÝXÜÓX\šÝ\
][\ÊNÂˆ[ÙHÂˆÛÜšÙ›ÝÓY[H
ÏH	Ï]ˆÛ\ÜÏHœXÙKYš[\‹X˜\ˆX™[›ÜHÛÜšÙ›ÝËYš[\ˆµèuæ5æ5åuèOÛX™[Ù[XÝYHÛÜšÙ›ÝËYš[\ˆÜ[Ûˆ˜[YOHˆµæõç5å5èuæ5æ5åuèuæuçOÛÜ[Û‰È
ÈÛÜšÙ›ÝÔÝ]\Ù\Ë›X\

ÚYX™[JHOˆ	ÏÜ[Ûˆ˜[YOH‰È
ÈY
È	Èˆ	È
È
Ý]\Ñš[\œÖÝX—HOOHYÈœÙ[XÝYˆˆˆŠH
Èˆˆ
ÈX™[
Èˆ
ˆ
È][\Ë™š[\Š

HOˆÛÜšÙ›ÝÔÝ]\Ê
HOOHY
K›[™Ý
ÈŠOÛÜ[ÛˆŠKš›Ú[ŠˆŠH
ÈÜÙ[XÝÙ]ˆŽÂˆYˆ
Ý]\Ñš[\œÖÝX—JH][\ÈH][\Ë™š[\Š

HOˆÛÜšÙ›ÝÔÝ]\Ê
HOOHÝ]\Ñš[\œÖÝX—JNÂˆBˆBˆYˆ
\Ý]\ÝXÜÈ	‰ˆ\ÛXÞUšY]ÊH™XÛÜ™ÓX\šÝ\H	Ï]ˆÛ\ÜÏH˜Ø\™È‰È
È][\Ë›X\


HOˆÂˆ˜\ˆØMNÂˆ™]\›ˆ™XÛÜ™Ø\™
šY[Ì–ÝX—KXˆOOHœÝÜˆÈÙÚ[™ÓX\šÝ\
š\š][\Ëš\™\Ý[˜][Û—Û˜[YJHˆXˆOOH˜›ÛÚÚ[™ÈˆÈ	Ï]Ûˆ\OH˜]Ûˆˆ]KX›ÛÚÚ[™Ë\ÛXÞOH‰È
È\ØÌJ

ØMHHœ^[ØY\JHOH[È›ÚYˆØMKš[J
JHµç5ç5ä5éõæ5äµåuê5æuåŠH
È	Èµä5é5êuê5åuæuåuêˆ5çµäõæuè5æuåuêˆ5ç5ä5æuêuåuêØ]Û‰ÈˆˆŠNÂˆJKš›Ú[ŠˆŠH
ÈÙ]ˆˆ
È
][\Ë›[™ÝÈˆˆˆµä5æuçÈ5é5ê5æuæ5æuçH5ç5å5éµäµå5äuèuæuè5åuçÈ5å5è5åuæõåõæKÜˆŠNÂˆ	
ˆÝšY]ÈŠKš[›™\’SH	ÏÙXÝ[ÛXY\ˆÛ\ÜÏHœ™XÛÜ™Ë]ÛÛ˜\ˆ‰È
ÈXœË™š[™


HOˆÌHOOHXŠVÌWH
ÈÚˆˆ
ÈÛÜšÙ›ÝÓY[H
ÈØ]YÛÜžSY[H
È	Ï]ÛˆYH˜Y‰È
È
ÛXÞUšY]ÈÈŠÈ5å5è5åõæuåuêˆ5ç5éõæ5äµåuê5æuåˆˆŠÈ5å5åuèuèÈ5é5ê5æuæŠH
ÈØ]ÛÚXY\ˆˆ
È™XÛÜ™ÓX\šÝ\
ÈÜÙXÝ[ÛˆŽÂˆ	
ˆÝšY]ÈŠKœ]Y\žTÙ[XÝÜ[
–Ù]K\›Ý]K]šY]×HŠK™›Ü‘XXÚ

ŠHOˆ‹›Û˜ÛXÚÈH

HOˆÂˆ›Ý]UšY]ÈH‹™]\Ù]œ›Ý]UšY]ÎÂˆ›Ý]Q^HH[Âˆ™[™\Š
NÂˆ›ØÝ\ÕšY]Ê
NÂˆJNÂˆ	
ˆÝšY]ÈŠKœ]Y\žTÙ[XÝÜ[
–Ù]K\Ý]Yš[HŠK™›Ü‘XXÚ

ŠHOˆ‹›Û˜ÛXÚÈH

HOˆÂˆ˜\ˆØMKØŽÂˆYˆ
‹™]\Ù]™š[Ø]YÛÜžHOOH›ÚY
HØ]YÛÜšY\ÖÝX—HH‹™]\Ù]™š[Ø]YÛÜžNÂˆÝ]\Ñš[\œÖÝX—HH‹™]\Ù]™š[Ý]\ÈˆŽÂˆÛÜšÕšY]ÜÖÝX—HH˜Ý\œ™[ŽÂˆ™[™\Š
NÂˆ›ØÝ\ÕšY]Ê
NÂˆ
ØˆH
ØMHH	
ˆÝšY]ÈˆŠJHOH[È›ÚYˆØMKœØÜ›Û[ÕšY]ÊHOH[È›ÚYˆØ‹˜Ø[
ØMKÈ›ØÚÎˆœÝ\ˆJNÂˆJNÂˆ	
ˆÝšY]ÈŠKœ]Y\žTÙ[XÝÜ[
–Ù]K]ÛÜšË]šY]×HŠK™›Ü‘XXÚ

ŠHOˆ‹›Û˜ÛXÚÈH

HOˆÂˆ˜\ˆØMNÂˆÛÜšÕšY]ÜÖÝX—HH‹™]\Ù]ÛÜšÕšY]ÎÂˆ™[™\Š
NÂˆ
ØMHH	
ˆÝšY]ÈÙ]K]ÛÜšË]šY]×VØ\šXK\™\ÜÙY]YWHŠJHOH[È›ÚYˆØMK™›ØÝ\Ê
NÂˆJNÂˆÛÛœÝÝ]\ÔÙ[XÝH	
ˆÝÛÜšÙ›ÝËYš[\ˆŠNÂˆYˆ
Ý]\ÔÙ[XÝ
HÝ]\ÔÙ[XÝ›Û˜Ú[™ÙHH

HOˆÂˆ˜\ˆØMNÂˆÝ]\Ñš[\œÖÝX—HHÝ]\ÔÙ[XÝ˜[YNÂˆ™[™\Š
NÂˆ
ØMHH	
ˆÝÛÜšÙ›ÝËYš[\ˆŠJHOH[È›ÚYˆØMK™›ØÝ\Ê
NÂˆNÂˆÛÛœÝØ]YÛÜžTÙ[XÝH	
ˆÜXÙKXØ]YÛÜžHŠNÂˆYˆ
Ø]YÛÜžTÙ[XÝ
HØ]YÛÜžTÙ[XÝ›Û˜Ú[™ÙHH

HOˆÂˆ˜\ˆØMNÂˆØ]YÛÜšY\ÖÝX—HHØ]YÛÜžSÜ[ÛœÖÓ[X™\ŠØ]YÛÜžTÙ[XÝ˜[YJWNÂˆ™[™\Š
NÂˆ
ØMHH	
ˆÜXÙKXØ]YÛÜžHŠJHOH[È›ÚYˆØMK™›ØÝ\ÊÈ™]™[ØÜ›ÛˆYHJNÂˆNÂˆ	
ˆÝšY]ÈŠKœ]Y\žTÙ[XÝÜ[
–Ù]KX›ÛÚÚ[™Ë\ÛXÞWHŠK™›Ü‘XXÚ

ŠHOˆ‹›Û˜ÛXÚÈH

HOˆÂˆØ]YÛÜšY\Ë˜›ÛÚÚ[™ÈH‹™]\Ù]˜›ÛÚÚ[™ÔÛXÞNÂˆÛÜšÕšY]ÜË˜›ÛÚÚ[™ÈHœÛXÚY\ÈŽÂˆ™[™\Š
NÂˆ›ØÝ\ÕšY]Ê
NÂˆJNÂˆ	
ˆÝšY]ÈŠKœ]Y\žTÙ[XÝÜ[
–Ù]K\XÙK\™\ÛÛ™WHŠK™›Ü‘XXÚ

ŠHOˆ‹›Û˜ÛXÚÈH

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆ˜\ˆØMKØŽÂˆYˆ
\ÞJH™]\›ŽÂˆÛÛœÝ][HHš\š][\Ë™š[™


HOˆšYOOH‹™]\Ù]œXÙT™\ÛÛ™JNÂˆYˆ
Z][JH™]\›ŽÂˆÛÛœÝÙÚ[™ÌÈHÙÚ[™ÐÛÛ^›Ü‘^Jš\š][\Ë
ØMHH][Kœ^[ØY
HOH[È›ÚYˆØMK™^JNÂˆ‹™\ØX›YHYNÂˆÝ]\Êµçµåõé5êH5çµéõåuçH5ç5é5æH5å5çµç5åuçÈ5êuç5ä5åuêµåH5æuåuçx )ˆŠNÂˆžHÂˆÛÛœÝÈ]K\œ›ÜˆHHZY[ÛY[Ë™[˜Ý[ÛœËš[›ÚÙJœXÙ\Ë\›Ý]K\™\ÛÛ™\ˆ‹È›ÙNˆÈš\Yˆš\šYš\™\œÚ[ÛŽˆš\™\œÚ[Û‹][RYˆ][KšYXÙNˆ

ØˆH][Kœ^[ØY
HOH[È›ÚYˆØ‹œXÙJHˆ‹\Ý[˜][ÛŽˆš\™\Ý[˜][Û—Û˜[YKÙÚ[™Îˆ
ÙÚ[™ÌÈOH[È›ÚYˆÙÚ[™ÌË›˜[YJHˆˆHJNÂˆYˆ
\œ›Üˆ
]HOH[È›ÚYˆ]K™\œ›ÜŠJH›ÝÈ\œ›ÜŠ
]HOH[È›ÚYˆ]K™\œ›ÜŠHµç5ä5è5æuêµçÈ5ç5åµå5åuêˆ5ä5êˆ5å5çµéõåuçHŠNÂˆYˆ
]KœÝ]\ÈOOH˜[XšYÝ[Ý\ÈŠHÂˆÝ]\Êµè5çµéµä5åH5æõçµå5ä5é5êuê5åuæuåuê‹ˆ5æuêH5ç5äuåõåuê5çµéõåuçH5æuäõè5æuêŽˆˆ
È]K˜Ø[™Y]\Ë›X\


HOˆœXÙRY
Kš›Ú[Šˆ0­ÈŠJNÂˆ™]\›ŽÂˆBˆÝ]\Êµå5çµéõåuçH5åµåuå5å5åuè5êuçµêˆŠNÂˆZY[Y\”Ø]™J
NÂˆHØ]Ú
JHÂˆÝ]\ÊK›Y\ÜØYÙHµç5ä5è5æuêµçÈ5ç5åµå5åuêˆ5ä5êˆ5å5çµéõåuçHŠNÂˆHš[˜[HÂˆ‹™\ØX›YH˜[ÙNÂˆBˆJJNÂˆÛÛœÝ[Ô™\ÛÛ™HH	
ˆÝšY]ÈŠKœ]Y\žTÙ[XÝÜŠ–Ù]K\™\ÛÛ™K[ÙÚ[™×HŠNÂˆYˆ
[Ô™\ÛÛ™JH[Ô™\ÛÛ™K›Û˜ÛXÚÈH

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆ˜\ˆØMKØ‹ØËÙÙKÙ‹ÙËÚÚNÂˆYˆ
\ÞJH™]\›ŽÂˆÛÛœÝ[™[™ÈH

HOˆš\š][\Ë™š[\Š

HOˆÂˆ˜\ˆØM‹ØŒ‹ØÌŽÂˆ™]\›ˆšÚ[™OOHœÝÜˆ	‰ˆJ
ØMˆHœ^[ØY
HOH[È›ÚYˆØM‹œXÙRY
H	‰ˆJ
ØŒˆHœ^[ØY
HOH[È›ÚYˆØŒ‹œXÙWÚY
H	‰ˆS[X™\‹š\Ñš[š]J[X™\Š
ØÌˆHœ^[ØY
HOH[È›ÚYˆØÌ‹›]
JNÂˆJKœÛÜ

KŠHOˆÂˆ˜\ˆØM‹ØŒŽÂˆ™]\›ˆ[X™\Š

ØMˆHKœ^[ØY
HOH[È›ÚYˆØM‹™^JH
HH[X™\Š

ØŒˆH‹œ^[ØY
HOH[È›ÚYˆØŒ‹™^JH
NÂˆJNÂˆÛÛœÝÝ[H[™[™Ê
K›[™ÝÂˆYˆ
]Ý[
HÂˆÝ]\Êµç5æõç5å5èµéµæuê5åuêˆ5æõäuê5è5êuçµê5çµæuéõåuçH5ä5åHXÙHQˆŠNÂˆ™]\›ŽÂˆBˆ[Ô™\ÛÛ™K™\ØX›YHYNÂˆÛÛœÝ›ÝÜÈH×NÂˆžHÂˆ›Üˆ
ÛÛœÝÜšYÚ[˜[Ùˆ[™[™Ê
JHÂˆÛÛœÝ][HHš\š][\Ë™š[™


HOˆšYOOHÜšYÚ[˜[šY
NÂˆYˆ
Z][JHÛÛ[YNÂˆÛÛœÝÙÚ[™ÌÈHÙÚ[™ÐÛÛ^›Ü‘^Jš\š][\Ë
ØMHH][Kœ^[ØY
HOH[È›ÚYˆØMK™^JKX™[H
ÙÚ[™ÌÈOH[È›ÚYˆÙÚ[™ÌË›˜[YJHµç5ä5è5çµéµä5å5ç5æuè5åŽÂˆÝ]\Êµçµåµå5åˆ
È
›ÝÜË›[™Ý
ÈJH
Èˆ5çµêµåuæˆˆ
ÈÝ[
Èˆ5ç5é5æHˆ
ÈX™[
È¸ )ˆŠNÂˆžHÂˆÛÛœÝÈ]K\œ›ÜˆHHZY[ÛY[Ë™[˜Ý[ÛœËš[›ÚÙJœXÙ\Ë\›Ý]K\™\ÛÛ™\ˆ‹È›ÙNˆÈš\Yˆš\šYš\™\œÚ[ÛŽˆš\™\œÚ[Û‹][RYˆ][KšYXÙNˆX™[OOHµç5ä5è5çµéµä5å5ç5æuè5åˆÈX™[ˆ

ØˆH][Kœ^[ØY
HOH[È›ÚYˆØ‹œXÙJHˆ‹\Ý[˜][ÛŽˆš\™\Ý[˜][Û—Û˜[YKÙÚ[™Îˆ
ÙÚ[™ÌÈOH[È›ÚYˆÙÚ[™ÌË›˜[YJHˆˆHJNÂˆYˆ
\œ›Üˆ
]HOH[È›ÚYˆ]K™\œ›ÜŠJH›ÝÈ\œ›ÜŠ
]HOH[È›ÚYˆ]K™\œ›ÜŠHœ™\ÛÛ™\ˆŠNÂˆYˆ
]KœÝ]\ÈOOH˜[XšYÝ[Ý\ÈŠH›ÝÜËœ\Ú
È^Nˆ
ØÈH][Kœ^[ØY
HOH[È›ÚYˆØË™^KÝÜˆ

ÙH][Kœ^[ØY
HOH[È›ÚYˆÙœXÙJHˆ‹ÙÚ[™ÎˆX™[™\Ý[ˆµäõê5åuêuå5äuåõæuê5å‹XÙRYˆ

ÙHH]K˜Ø[™Y]\ÊHOH[È›ÚYˆÙK›X\


HOˆœXÙRY
Kš›Ú[Šˆ0­ÈŠJHˆˆJNÂˆ[ÙHÂˆ›ÝÜËœ\Ú
È^Nˆ
ÙˆH][Kœ^[ØY
HOH[È›ÚYˆÙ‹™^KÝÜˆ

ÙÈH][Kœ^[ØY
HOH[È›ÚYˆÙËœXÙJHˆ‹ÙÚ[™ÎˆX™[™\Ý[ˆµè5êuçµê‹XÙRYˆ]KœXÙRYˆˆJNÂˆZY[Y\”Ø]™J
NÂˆBˆHØ]Ú
JHÂˆ›ÝÜËœ\Ú
È^Nˆ
ÚH][Kœ^[ØY
HOH[È›ÚYˆÚ™^KÝÜˆ

ÚHH][Kœ^[ØY
HOH[È›ÚYˆÚKœXÙJHˆ‹ÙÚ[™ÎˆX™[™\Ý[ˆµç5ä5åµåuå5å‹XÙRYˆˆˆJNÂˆBˆBˆÛÛœÝ›ÞH	
ˆÝšY]ÈŠKœ]Y\žTÙ[XÝÜŠ–Ù]K\XÙK\™\ÛÛ][Û‹\™\Ý[×HŠNÂˆYˆ
›Þ
HÂˆ›ÞšY[ˆH˜[ÙNÂˆ›Þš[›™\’SH	ÏÏµêµåuéµä5åuêˆ5åµæuå5åuæH5çµéõåuçµåuêÚÏ]ˆÝ[OH›Ý™\™›ÝÎ˜]]ÈX›OXYµæuåuçOÝµèµéµæuê5åÝµçµéõåuçH5ç5æuè5åÝµêµåuéµä5åÝ”XÙHQÝÝÝXY›ÙO‰È
È›ÝÜË›X\

ŠHOˆˆˆ
È\ØÌJ‹™^HˆŠH
ÈÝˆˆ
È\ØÌJ‹œÝÜ
H
ÈÝˆˆ
È\ØÌJ‹›ÙÚ[™ÊH
ÈÝˆˆ
È\ØÌJ‹œ™\Ý[
H
È	ÏÝÝ[OH™›Û\Ú^™N‹Î[NÝÛÜ™Xœ™XZÎ˜œ™XZËX[‰È
È\ØÌJ‹œXÙRY¸ %ŠH
ÈÝÝˆŠKš›Ú[ŠˆŠH
ÈÝ›ÙOÝX›OÙ]ˆŽÂˆBˆÝ]\Êµå5åµæuå5åuæH5å5èuêµæuæuçKˆ5å5êµåuéµä5åuêˆ5çµåuéµäµåuêˆ5äuæ5äuç5åˆŠNÂˆHš[˜[HÂˆ[Ô™\ÛÛ™K™\ØX›YH˜[ÙNÂˆBˆJNÂˆYˆ
[Ô™\ÛÛ™JHÂˆ[Ô™\ÛÛ™Kš[œÙ\Y˜XÙ[S
˜Y\™[™‹	Ï]Ûˆ\OH˜]Ûˆˆ]K\™\Z\‹XÛÛÜ™[˜]\Ïµê5èµè5åuçÈ5éõåuä5åuê5äõæuè5æ5åuêˆ5ç5çµéõåuçµåuêˆ5çµåµåuå5æuçOØ]Û‰ÊNÂˆÛÛœÝ™\Z\ˆH	
ˆÝšY]ÈŠKœ]Y\žTÙ[XÝÜŠ–Ù]K\™\Z\‹XÛÛÜ™[˜]\×HŠNÂˆ™\Z\‹›Û˜ÛXÚÈH

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆ˜\ˆØMKØŽÂˆYˆ
\ÞJH™]\›ŽÂˆÛÛœÝÝÜÈHš\š][\Ë™š[\Š

HOˆšÚ[™OOHœÝÜŠNÂˆ™\Z\‹™\ØX›YHYNÂˆÝ]\Êµçµê5èµè5çÈ5éõåuä5åuê5äõæuè5æ5åuêˆ5ç5çµéõåuçµåuêˆ5êuæõäuê5åµåuå5åx )ˆŠNÂˆ]Ø]™YH˜Z[YHÂˆ›Üˆ
ÛÛœÝ][HÙˆÝÜÊHÂˆÛÛœÝÙÚ[™ÌÈHÙÚ[™ÐÛÛ^›Ü‘^Jš\š][\Ë
ØMHH][Kœ^[ØY
HOH[È›ÚYˆØMK™^JNÂˆžHÂˆÛÛœÝÈ]K\œ›ÜˆHHZY[ÛY[Ë™[˜Ý[ÛœËš[›ÚÙJœXÙ\Ë\›Ý]K\™\ÛÛ™\ˆ‹È›ÙNˆÈš\Yˆš\šYš\™\œÚ[ÛŽˆš\™\œÚ[Û‹][RYˆ][KšYXÙNˆ
ÙÚ[™ÌÈOH[È›ÚYˆÙÚ[™ÌË›˜[YJH

ØˆH][Kœ^[ØY
HOH[È›ÚYˆØ‹œXÙJHˆ‹\Ý[˜][ÛŽˆš\™\Ý[˜][Û—Û˜[YKÙÚ[™Îˆ
ÙÚ[™ÌÈOH[È›ÚYˆÙÚ[™ÌË›˜[YJHˆˆHJNÂˆYˆ
\œ›Üˆ
]HOH[È›ÚYˆ]K™\œ›ÜŠH]KœÝ]\ÈOOH™\šYšYYŠH›ÝÈ\œ›ÜŠ[œ™\ÛÛ™YŠNÂˆØ]™Y
ÊÎÂˆZY[Y\”Ø]™J
NÂˆHØ]Ú
JHÂˆ˜Z[Y
ÊÎÂˆBˆBˆÝ]\Êµê5èµè5åuçÈ5å5éõåuä5åuê5äõæuè5æ5åuêˆ5å5èuêµæuæuçNˆˆ
ÈØ]™Y
Èˆ5è5êuçµê5åKˆ
È˜Z[Y
Èˆ5ç5ä5èµåuäõæõè5åKˆŠNÂˆ™\Z\‹™\ØX›YH˜[ÙNÂˆJNÂˆBˆ	
ˆÝšY]ÈŠKœ]Y\žTÙ[XÝÜ[
–Ù]K\ÛXÞK\™]šY]×HŠK™›Ü‘XXÚ

›Ü›JHOˆÂˆ›Ü›K›Û˜Ú[™ÙHH

HOˆÂˆÛXÞT™]šY]Ñ\HHYNÂˆNÂˆÛÛœÝ™]šY]ÈH
XÚ\Ú[ÛŒŠHOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆÛÛœÝYÈHË‹‹™›Ü›Kœ]Y\žTÙ[XÝÜ[
š[œ]Û˜[YO[Ü[Û—N˜ÚXÚÙYŠWK›X\


HOˆ˜[YJNÂˆYˆ
XÚ\Ú[ÛŒˆOOH˜\›Ý™Yˆ	‰ˆZYË›[™Ý
HÂˆ›Ü›Kœ]Y\žTÙ[XÝÜŠ–Ù]K\ÛXÞKY™YY˜XÚ×HŠK^ÛÛ[Hµäuåõê5ç5é5åõåuêˆ5ä5é5êuê5åuêˆ5ä5åõêˆ5ç5ä5æuêuåuêŽÂˆ™]\›ŽÂˆBˆÛÛœÝÚØ^HHZY[Ø]™SÜ\˜][ÛŠ

HOˆ™\Ëœ™]šY]ÔÛXÞJš\šYš\™\œÚ[Û‹›Ü›K™]\Ù]œÛXÞT™]šY]ËYËXÚ\Ú[ÛŒŠJNÂˆYˆ
ÚØ^JHZY[Y\”Ø]™J
NÂˆ[ÙH›Ü›Kœ]Y\žTÙ[XÝÜŠ–Ù]K\ÛXÞKY™YY˜XÚ×HŠK^ÛÛ[H	
ˆÛY\ÜØYÙHŠK^ÛÛ[ÂˆJNÂˆ›Ü›K›ÛœÝX›Z]H
JHOˆÂˆKœ™]™[Y˜][

NÂˆ™]šY]Ê˜\›Ý™YŠNÂˆNÂˆÛÛœÝ™Z™XÝH›Ü›Kœ]Y\žTÙ[XÝÜŠ–Ù]K\™Z™XÝ\ÛXÞWHŠNÂˆYˆ
™Z™XÝ
H™Z™XÝ›Û˜ÛXÚÈH

HOˆ™]šY]Êœ™Z™XÝYŠNÂˆJNÂˆ	
ˆÝšY]ÈŠKœ]Y\žTÙ[XÝÜ[
–Ù]K\ÛXÞKXØ]YÛÜžWHŠK™›Ü‘XXÚ

ŠHOˆ‹›Û˜ÛXÚÈH

HOˆÛXÞQY]ÜŠ‹™]\Ù]œÛXÞPØ]YÛÜžJJNÂˆ	
ˆØYŠK›Û˜ÛXÚÈH

HOˆÛXÞUšY]ÈÈÛXÞQY]ÜŠ
HˆY]
XŠNÂˆ	
ˆÝšY]ÈŠKœ]Y\žTÙ[XÝÜ[
–Ù]KZYHŠK™›Ü‘XXÚ

Ø\™
HOˆÂˆÛÛœÝ][HH][\Ë™š[™


HOˆšYOOHØ\™™]\Ù]šY
NÂˆØ\™œ]Y\žTÙ[XÝÜŠ–Ù]KXXÝ[ÛYY]HŠK›Û˜ÛXÚÈH

HOˆY]
][KšÚ[™][JNÂˆØ\™œ]Y\žTÙ[XÝÜŠ–Ù]KXXÝ[ÛY[]WHŠK›Û˜ÛXÚÈH

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆYˆ
XÛÛ™š\›Jµç5çµåõåuéÈ5ä5êˆ5å5é5ê5æuæ5çµå5èµè5çÈ5åuçµæõç5å5çµæõêuæuê5æuçOÈŠJH™]\›ŽÂˆYˆ
ZY[Ø]™SÜ\˜][ÛŠ

HOˆ™\Ë™[]R][J][KšY][K™\œÚ[ÛŠJJHZY[Y\”Ø]™J
NÂˆJNÂˆÛÛœÝØˆHØ\™œ]Y\žTÙ[XÝÜŠš[œ]Ý\OXÚXÚØ›ÞHŠNÂˆYˆ
ØŠHØ‹›Û˜Ú[™ÙHH

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆÛÛœÝÛ™HHØ‹˜ÚXÚÙYÂˆYˆ
ZY[Ø]™SÜ\˜][ÛŠ

HOˆ™\Ë\]R][J][KšY][K™\œÚ[Û‹][KšÚ[™×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßK][Kœ^[ØY
KÈÛ™KÛÜšÙ›ÝÔÝ]\ÎˆÛ™HÈ˜ÛÛ\]Yˆˆ›Ü[™Y‹ÛÜšÙ›ÝÕ\]Y]ˆ
Êˆ×ÔT‘W×È
‹È™]È]J
JKÒTÓÔÝš[™Ê
KÛÜšÙ›ÝÕ\]YžNˆ\Ù\ˆˆJJJJHZY[Y\”Ø]™J
NÂˆ[ÙHØ‹˜ÚXÚÙYHÛÜšÙ›ÝÔÝ]\Ê][JHOOH˜ÛÛ\]YŽÂˆJNÂˆJNÂˆ[š[˜ÙT™XÛÜ™Ê	
ˆÝšY]ÈŠKÈÚ[™ˆX‹][\ËÝ]NˆÙXÝ[Û”Ý]JXˆ
ÈŽˆˆ
È

ØMHØ]YÛÜšY\ÖÝX—JHOH[ÈØMˆ˜[ŠH
ÈŽˆˆ
È
Ý]\Ñš[\œÖÝX—H˜[ŠH
ÈŽˆˆ
È
›Ý]Q^HOH[È›Ý]Q^Hˆ˜[ŠJHJNÂˆBˆ[˜Ý[ÛˆÛXÞQY]ÜŠØ]YÛÜžHHˆŠHÂˆšY]Ñ\ØÚ
ÊÎÂˆÛÛœÝ^\Ý[™ÈH
š\œÙ][™ÜË˜›ÛÚÚ[™ÔÛXÚY\È×JK™š[™


HOˆ˜Ø]YÛÜžHOOHØ]YÛÜžJNÂˆÛÛœÝš\YHš\šY™\œÚ[ÛHHš\™\œÚ[Û‹Ù][™ÜÌˆHÝXÝ\™YÛÛ™Jš\œÙ][™ÜÊNÂˆ	
ˆÙY]ÜˆŠKš[›™\’SH	Ï›Ü›HYHœÛXÞKY›Ü›Hµå5è5åõæuåuêˆ5ê5ä5êuåuè5æuåuêˆ5ç5èuåuæõçÏÚ‰È
ÈšY[
˜Ø]YÛÜžH‹µéõæ5äµåuê5æuå‹Ø]YÛÜžJH
È	Ï]ˆYHœÛXÞKYšY[È‰È
ÈÛXÞQ›Ü›SX\šÝ\
Ø]YÛÜžK^\Ý[™ÊH
È	ÏÙ]Û\ÜÏH›]]Yµå5èuåuæõçÈ5æuçµéµä5ä5é5êuê5åuæuåuêˆ5ç5é5æH5å5å5è5åõæuåuê‹5åuæuéµæuäˆ5ä5åuêµçÈ5ç5ä5æuêuåuê5æ‹ˆ5å5êµéõéµæuäH5è5äµåµê5çµêµéõéµæuäH5å5æ5æuåuç5å5æõåuç5çÜ]ˆÛ\ÜÏHœ›ÝÈ›Ü›KXXÝ[ÛœÈ]Ûˆ\OHœÝX›Z]µêuçµåuê5å5è5åõæuåuêØ]Û]Ûˆ\OH˜]ÛˆˆYH˜Ø[˜Ù[\ÛXÞHµäuæuæ5åuçØ]ÛÙ]]KYX[ÙË\Ý]\È›ÛOHœÝ]\Èˆ\šXK[]™OHœÛ]HÜÙ›Ü›O‰ÎÂˆÛÛœÝ›Ü›HH	
ˆÜÛXÞKY›Ü›HŠNÂˆ›Ü›K™[[Y[Ë˜Ø]YÛÜžKœ™\]Z\™YHYNÂˆ›Ü›K™[[Y[Ë˜Ø]YÛÜžK›X^[™ÝHLÂˆYˆ
^\Ý[™ÊH›Ü›K™[[Y[Ë˜Ø]YÛÜžKœ™XYÛ›HHYNÂˆÛÛœÝ™XYˆH

HOˆÂˆÛÛœÝ™H™]È›Ü›Q]J›Ü›JK[œ]HÈØ]YÛÜžNˆ™™Ù]
˜Ø]YÛÜžHŠKš[J
K\]Y]ˆ
Êˆ×ÔT‘W×È
‹È™]È]J
JKÒTÓÔÝš[™Ê
HNÂˆ›Üˆ
ÛÛœÝˆÙˆÛXÞQšY[Ê[œ]˜Ø]YÛÜžJJHÂˆÛÛœÝˆH™™Ù]
‹šÙ^JNÂˆ[œ]Ù‹šÙ^WHH‹\HOOH›[X™\ˆˆÈˆOOH[ˆOOHˆˆÈ[ˆ[X™\ŠŠHˆˆOH[ÈˆˆˆŽÂˆBˆ™]\›ˆ[œ]ÂˆNÂˆ›Ü›K™[[Y[Ë˜Ø]YÛÜžK›Û˜Ú[™ÙHH

HOˆÂˆÛÛœÝ˜[Y\ÈH™XYŠ
NÂˆ	
ˆÜÛXÞKYšY[ÈŠKš[›™\’SHÛXÞQ›Ü›SX\šÝ\
›Ü›K™[[Y[Ë˜Ø]YÛÜžK˜[YK˜[Y\ÊNÂˆNÂˆ	
ˆØØ[˜Ù[\ÛXÞHŠK›Û˜ÛXÚÈH

HOˆ	
ˆÙY]ÜˆŠK˜ÛÜÙJ
NÂˆ›Ü›K›ÛœÝX›Z]H
JHOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆKœ™]™[Y˜][

NÂˆ]ÛXÞNÂˆžHÂˆÛXÞHH˜[Y]TÛXÞJ™XYŠ
JNÂˆHØ]Ú
\œŠHÂˆÝ]\Ê\œ‹›Y\ÜØYÙJNÂˆ™]\›ŽÂˆBˆÛÛœÝÛXÚY\ÈHÝXÝ\™YÛÛ™JÙ][™ÜÌ‹˜›ÛÚÚ[™ÔÛXÚY\È×JNÂˆÛÛœÝX]ÚHÛXÚY\Ë™š[™[™^


HOˆ˜Ø]YÛÜžKÓÝÙ\Ø\ÙJ
HOOHÛXÞK˜Ø]YÛÜžKÓÝÙ\Ø\ÙJ
JNÂˆYˆ
Y^\Ý[™È	‰ˆX]ÚH
HÂˆÝ]\Êµæõäuê5éõæuæuçµêˆ5çµäõæuè5æuåuêˆ5ç5éõæ5äµåuê5æuå5åµåKˆ5é5êµåÈ5ä5åuêµå5ç5èµê5æuæõåˆŠNÂˆ™]\›ŽÂˆBˆYˆ
X]ÚH
HÛXÚY\ÖÛX]ÚHHÛXÞNÂˆ[ÙHÛXÚY\Ëœ\Ú
ÛXÞJNÂˆYˆ
ZY[Ø]™SÜ\˜][ÛŠ

HOˆ™\Ë\]TÙ][™ÜÊš\Y™\œÚ[ÛK×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßKÙ][™ÜÌŠKÈ›ÛÚÚ[™ÔÛXÚY\ÎˆÛXÚY\ÈJJJJHÂˆ	
ˆÙY]ÜˆŠK˜ÛÜÙJ
NÂˆZY[Y\”Ø]™J
NÂˆBˆJNÂˆ	
ˆÙY]ÜˆŠKœÚÝÓ[Ù[

NÂˆBˆ[˜Ý[ÛˆY]
Ú[™^\Ý[™ÊHÂˆšY]Ñ\ØÚ
ÊÎÂˆÛÛœÝ][HH^\Ý[™ÈÈÝXÝ\™YÛÛ™J^\Ý[™ÊHˆÈYˆÜž\Ëœ˜[™ÛUURQ

KÚ[™^[ØYˆÈœXÙH‹˜›ÛÚÚ[™È‹\ÚÈ‹™ÙX\ˆ—Kš[˜ÛY\ÊÚ[™
H	‰ˆØ]YÛÜšY\ÖÚÚ[™HOOH[ÈÈÖÈ\ÚÈ‹™ÙX\ˆ—Kš[˜ÛY\ÊÚ[™
HÈ˜Ø]YÛÜžHˆˆ\H—NˆØ]YÛÜšY\ÖÚÚ[™HOOHµç5ç5ä5éõæ5äµåuê5æuåˆÈˆˆˆØ]YÛÜšY\ÖÚÚ[™HHˆßHNÂˆ	
ˆÙY]ÜˆŠKš[›™\’SH›Ü›Oˆˆ
È
^\Ý[™ÈÈµèµê5æuæõêˆ5é5ê5æuæˆˆµå5åuèué5êˆ5é5ê5æuæŠH
ÈÚˆˆ
ÈšY[Ì–ÚÚ[™K›X\

ÚË\WJHOˆÂˆ˜\ˆØMÂˆ™]\›ˆšY[
Ë
ØMH][Kœ^[ØYÚ×HOOH[	‰ˆÈ˜ÛÜÝ‹œZY—Kš[˜ÛY\ÊÊHÈˆˆˆ][Kœ^[ØYÚ×JHOH[ÈØMˆ\HOOHÛÜšÙ›ÝÈˆÈÛÜšÙ›ÝÔÝ]\Ê][JHˆ\HOOH›[X™\ˆˆÈÈOOH™^HˆÈHˆˆˆ‹\JNÂˆJKš›Ú[ŠˆŠH
È	Ï]ˆÛ\ÜÏHœ›ÝÈ›Ü›KXXÝ[ÛœÈ]Ûˆ\OHœÝX›Z]µêuçµåuê5äuèµè5çÏØ]Û]Ûˆ\OH˜]ÛˆˆYH˜Ø[˜Ù[µäuæuæ5åuçØ]ÛÙ]]KYX[ÙË\Ý]\È›ÛOHœÝ]\Èˆ\šXK[]™OHœÛ]HÜÛ\ÜÏH™›Ü›KZ[µå5êuæuè5åuæuæuçH5æuæuêuçµê5åH5äuåõêuäuåuè5æˆ5äuèµè5çËÜÙ›Ü›O‰ÎÂˆ	
ˆØØ[˜Ù[ŠK›Û˜ÛXÚÈH

HOˆ	
ˆÙY]ÜˆŠK˜ÛÜÙJ
NÂˆ	
ˆÙY]Üˆ›Ü›HŠK›ÛœÝX›Z]H
JHOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆKœ™]™[Y˜][

NÂˆÛÛœÝ™H™]È›Ü›Q]JK\™Ù]
K^[ØYH×ÜÜ™XY˜[Y\ÊßK][Kœ^[ØY
NÂˆ›Üˆ
ÛÛœÝÚË\WHÙˆšY[Ì–ÚÚ[™JH^[ØYÚ×HH\HOOH›[X™\ˆˆÈ™™Ù]
ÊHOOHˆˆ	‰ˆÈ˜ÛÜÝ‹œZY—Kš[˜ÛY\ÊÊHÈ[ˆ[X™\Š™™Ù]
ÊJHˆ™™Ù]
ÊNÂˆYˆ
È˜›ÛÚÚ[™È‹\ÚÈ—Kš[˜ÛY\ÊÚ[™
JHÂˆYˆ
Y^\Ý[™È^[ØYÛÜšÙ›ÝÔÝ]\ÈOOHÛÜšÙ›ÝÔÝ]\Ê][JJHÂˆ^[ØYÛÜšÙ›ÝÕ\]Y]H
Êˆ×ÔT‘W×È
‹È™]È]J
JKÒTÓÔÝš[™Ê
NÂˆ^[ØYÛÜšÙ›ÝÕ\]YžHH\Ù\ˆŽÂˆBˆYˆ
Ú[™OOH\ÚÈŠH^[ØY™Û™HH^[ØYÛÜšÙ›ÝÔÝ]\ÈOOH˜ÛÛ\]YŽÂˆBˆÛÛœÝÚØ^HHZY[Ø]™SÜ\˜][ÛŠ

HOˆ^\Ý[™ÈÈ™\Ë\]R][J][KšY][K™\œÚ[Û‹Ú[™^[ØY
Hˆ™\Ë˜Ü™X]R][Jš\šY×ÜÜ™XY›ÜÊ×ÜÜ™XY˜[Y\ÊßK][JKÈ^[ØYJJJNÂˆYˆ
ÚØ^JHÂˆ	
ˆÙY]ÜˆŠK˜ÛÜÙJ
NÂˆZY[Y\”Ø]™JÚ[™OOHœÝÜˆÈÈ]]Ô™\ÛÛ™Q^\ÎˆÜ^[ØY™^WHHˆßJNÂˆBˆJNÂˆ	
ˆÙY]ÜˆŠKœÚÝÓ[Ù[

NÂˆBˆ[˜Ý[ÛˆÝÛ›ØY
^ÊHÂˆÛÛœÝ\›HT“˜Ü™X]SØš™XÝT“
™]È›ØŠÝ^×KÈ\Nˆ˜\XØ][Û‹ÚœÛÛˆˆJJKHHØÝ[Y[˜Ü™X]Q[[Y[
˜HŠNÂˆKš™YˆH\›ÂˆK™ÝÛ›ØYH›[ÝÜ‹]š\Hˆ
È

š\OH[È›ÚYˆš\™\Ý[˜][Û—Û˜[YJH™\Ý[˜][ÛˆŠH
È‹X˜XÚÝ\šœÛÛˆŽÂˆØÝ[Y[˜›ÙK˜\[™
JNÂˆK˜ÛXÚÊ
NÂˆKœ™[[Ý™J
NÂˆÙ][Y[Ý]


HOˆT“œ™]›ÚÙSØš™XÝT“
\›
KYLÊNÂˆBˆ[˜Ý[Ûˆ™]šY]Ê\œÙY
HÂˆÛÛœÝ[ˆH™]šY]Ò[\Ü
š\š][\Ë\œÙYš][\ÊNÂˆÛÛœÝš\YHš\šYÂˆ	
ˆÙY]ÜˆŠKš[›™\’SHµêµéµåuäµå5çµéõäõæuçµå5ç5æuæuäuåuäÚµé5ê5æuæ5æuçH5åõäõêuæuçNˆˆ
È[‹˜Y›[™Ý
Èˆ5é5ê5æuæ5æuçH5éõæuæuçµæuçH5êuæuæuêuä5ê5åH5ç5ç5ä5êuæuè5åuæNˆˆ
È[‹œÚÚ\›[™Ý
ÈÜµå5äµäõê5åuêˆ5å5æ5æuåuç5åuå5çµæuäõèˆ5å5éõæuæuçH5ç5ä5æuåuåõç5é5åKÜ[ˆˆ
È[‹˜Y›X\


HOˆÂˆ˜\ˆØMØŽÂˆ™]\›ˆOˆˆ
È\ØÌJ
ØˆH
ØMHœ^[ØYœXÙJHOH[ÈØMˆœ^[ØY›˜[YJHOH[ÈØˆˆœ^[ØY]JH
ÈÛOˆŽÂˆJKš›Ú[ŠˆŠH
È	ÏÝ[]ˆÛ\ÜÏHœ›ÝÈ]ÛˆYH˜ÛÛ™š\›Z[\Üµå5åuèuèÈ5é5ê5æuæ5æuçH5ç5èµè5çÏØ]Û]ÛˆYH˜Ø[˜Ù[[\Üµäuæuæ5åuçØ]ÛÙ]‰ÎÂˆ	
ˆØØ[˜Ù[[\ÜŠK›Û˜ÛXÚÈH

HOˆ	
ˆÙY]ÜˆŠK˜ÛÜÙJ
NÂˆ	
ˆØÛÛ™š\›Z[\ÜŠK›Û˜ÛXÚÈH

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆYˆ
ZY[Ø]™SÜ\˜][ÛŠ

HOˆ™\Ëš[\Ü][\Êš\Y[‹˜Y
JJHÂˆ	
ˆÙY]ÜˆŠK˜ÛÜÙJ
NÂˆZY[Y\”Ø]™J
NÂˆBˆJNÂˆ	
ˆÙY]ÜˆŠKœÚÝÓ[Ù[

NÂˆBˆ[˜Ý[ÛˆÙ][™ÜÊ
HÂˆ	
ˆÝšY]ÈŠKš[›™\’SH	ÏÙXÝ[ÛµäµæuäuåuæH5åuå5èµäuê5êˆ5è5êµåuè5æuçOÚµå5çµæuäõèˆ5è5êuçµê5äuåõêuäuåuè5æˆ5äuèµè5çËˆ5äµæuäuåuæH”ÓÓˆ5æõåuç5ç5é5ê5æuæ5æH5æ5æuåuç5åuå5äµäõê5åuêŽÈ5çµèuçµæõæH5çµéõåuê5êuæuêµåué5æuçH5åuçµéõåuê5åuêˆ5å5åµçµè5å5è5êuçµê5æuçH5äuè5é5ê5äÈ5äuêuê5ê‹ˆ5çµåuçµç5éH5ç5å5åuê5æuäÈ5äµæuäuåuæH5ç5é5è5æH5êuæuè5åuæuæuçH5äµäõåuç5æuçKÜ]ÛˆYH™^Üµæuéµåuä5äµæuäuåuæH”ÓÓØ]ÛX™[µæuäuåuä5äµæuäuåuæH”ÓÓ[œ]YHš[\Üˆ\OH™š[HˆXØÙ\H˜\XØ][Û‹ÚœÛÛ‹šœÛÛˆÛX™[]ÛˆYH›ØØ[[\Üµå5èµäuê5è5êµåuè5æuçH5çµå5äµê5èuå5å5çµéõåuçµæuêˆ5äuçµæõêuæuê5åµåØ]Ûµå5æuæuäuåuä5çµåuèuæuèÈ5é5ê5æuæ5æuçH5åõäõêuæuçH5ç5ä5åõê5êµéµåuäµå5çµéõäõæuçµåˆ5å5åuä5ä5æuè5åH5çµåuåõéÈ5ä5åH5çµåõç5æuèÈ5é5ê5æuæ5æuçH5éõæuæuçµæuçKÜÜÙXÝ[Û‰ÎÂˆ	
ˆÙ^ÜŠK›Û˜ÛXÚÈH

HOˆÝÛ›ØY
^Üš\
š\
JNÂˆ	
ˆÚ[\ÜŠK›Û˜Ú[™ÙHH
JHOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆÛÛœÝˆHK\™Ù]™š[\ÖÌNÂˆYˆ
YŠH™]\›ŽÂˆžHÂˆYˆ
‹œÚ^™HˆYMŠH›ÝÈ\œ›ÜŠµéõåuäuéH5äµäõåuç5çµäõæHŠNÂˆ™]šY]Ê\œÙP˜XÚÝ\
ZY[‹^

JJNÂˆHØ]Ú
\œŠHÂˆÝ]\Êµå5æuæuäuåuä5ç5ä5äuåuéµèŽˆˆ
È\œ‹›Y\ÜØYÙJNÂˆHš[˜[HÂˆK\™Ù]˜[YHHˆŽÂˆBˆJNÂˆ	
ˆÛØØ[[\ÜŠK›Û˜ÛXÚÈH

HOˆÂˆžHÂˆÛÛœÝÛHØØ[ÝÜ˜YÙK™Ù]][JZ[[™Û[Ý×Ýš\ÝŒHŠNÂˆYˆ
[Û
H›ÝÈ\œ›ÜŠµç5ä5è5çµéµä5åH5è5êµåuè5æuçH5çµéõåuçµæuæuçH5äuçµæõêuæuê5åµåŠNÂˆ™]šY]Ê\œÙP˜XÚÝ\
Û
JNÂˆHØ]Ú
JHÂˆÝ]\Êµå5æuæuäuåuä5ç5ä5äuåuéµèŽˆˆ
ÈK›Y\ÜØYÙJNÂˆBˆNÂˆ[š[˜ÙTÙ][™ÜÊ	
ˆÝšY]ÈŠKÙXÝ[Û”Ý]J˜˜XÚÝ\ŠJNÂˆBˆ[˜Ý[Ûˆ\TÙ\ÜÚ[ÛŠ™^
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆ˜\ˆØMÂˆÛÛœÝ™]š[Ý\ÈHÙ\ÜÚ[ÛˆOH[È›ÚYˆÙ\ÜÚ[Û‹\Ù\‹šYÂˆYˆ
[™^
HÂˆÚ\J
NÂˆÙÚ[Š
NÂˆ™]\›ŽÂˆBˆYˆ
™]š[Ý\ÈOOH™^\Ù\‹šY
HÂˆÚ\J
NÂˆXˆHœÝÜŽÂˆBˆÛÛœÝÚXÚÈH
ÊØXØÛÝ[ÚXÚÎÂˆ]Ý]NÂˆžHÂˆÛÛœÝXØÙ\ÜÈHZY[]]˜Ý\ÝÛY\]]Ý]\Ê
NÂˆYˆ
ÚXÚÈOOHXØÛÝ[ÚXÚÊH™]\›ŽÂˆYˆ
XØÙ\ÜË˜XØÙ\ÜÈOOH˜[ÝÙYŠHÂˆÚ\J
NÂˆÙ\ÜÚ[ÛˆH™^Âˆ]]ØÜ™Y[ÛX[\H[Ý[Ý\ÝÛY\“ZYÜ˜][ÛŠÈ›ÛÝˆ	
ˆÝšY]ÈŠK]]Ý]\ÎˆXØÙ\ÜËÛ”™Yœ™\Úˆ

HOˆ\TÙ\ÜÚ[ÛŠ™^
KÛ”Ý]\ÎˆÝ]\ËÛ”ÚYÛ“Ý]ˆ

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆZY[]]œÚYÛ“Ý]

NÂˆÚ\J
NÂˆÙÚ[Š
NÂˆJHJNÂˆ™]\›ŽÂˆBˆ]]ØÜ™Y[ÛX[\OH[È›ÚYˆ]]ØÜ™Y[ÛX[\

NÂˆ]]ØÜ™Y[ÛX[\H[ÂˆÝ]HHZY[XØÛÝ[\KœÝ]J
NÂˆÛÛœÝØ\™Ù]\YH™]ÈT“
Ú[™ÝË›ØØ][Û‹š™YŠKœÙX\˜Ú\˜[\Ë™Ù]
˜Ø\™ÜÙ]\Ü™]\›ˆŠNÂˆYˆ
\Ý]Kš\ÔÝ\\\Ù\ˆ	‰ˆÈœ[™[™È‹˜XÝ]™H—Kš[˜ÛY\ÊÝ]HOH[È›ÚYˆÝ]KœÝ]\ÊH	‰ˆ×–ØKYŒNKW^ÌÍŸIÚK\Ý
Ø\™Ù]\YˆŠJHÂˆžHÂˆÛÛœÝØ\™HZY[XØÛÝ[\Kœ™XÛÛ˜Ú[PØ\™
Ø\™Ù]\Y
NÂˆYˆ
Ø\™˜ÛÛ\]Y
HÂˆÛÛœÝ\›H™]ÈT“
Ú[™ÝË›ØØ][Û‹š™YŠNÂˆ\›œÙX\˜Ú\˜[\Ë™[]J˜Ø\™ÜÙ]\Ü™]\›ˆŠNÂˆÚ[™ÝËš\ÝÜžKœ™\XÙTÝ]J[ˆ‹\›
NÂˆBˆHØ]Ú
JHÂˆBˆBˆÛÛœÝÜ™\’YH™]ÈT“
Ú[™ÝË›ØØ][Û‹š™YŠKœÙX\˜Ú\˜[\Ë™Ù]
˜š[[™×Ü™]\›ˆŠNÂˆYˆ
\Ý]Kš\ÔÝ\\\Ù\ˆ	‰ˆÈœ[™[™È‹˜XÝ]™H—Kš[˜ÛY\ÊÝ]HOH[È›ÚYˆÝ]KœÝ]\ÊH	‰ˆ×–ØKYŒNKW^ÌÍŸIÚK\Ý
Ü™\’YˆŠJHÂˆžHÂˆÛÛœÝ^[Y[HZY[XØÛÝ[\Kœ™XÛÛ˜Ú[JÜ™\’Y
NÂˆYˆ
^[Y[œZY
HÂˆÛÛœÝ\›H™]ÈT“
Ú[™ÝË›ØØ][Û‹š™YŠNÂˆ\›œÙX\˜Ú\˜[\Ë™[]J˜š[[™×Ü™]\›ˆŠNÂˆÚ[™ÝËš\ÝÜžKœ™\XÙTÝ]J[ˆ‹\›
NÂˆÝ]HHZY[XØÛÝ[\KœÝ]J
NÂˆBˆHØ]Ú
JHÂˆBˆBˆHØ]Ú
JHÂˆYˆ
ÚXÚÈOOHXØÛÝ[ÚXÚÊH™]\›ŽÂˆÚ\J
NÂˆÙÚ[Š
NÂˆÝ]\Êµç5ä5è5æuêµçÈ5ç5ä5çµêˆ5å5ê5êuä5åuêˆ5åõêuäuåuçËˆ5å5êµåõäuê5êuåuäNˆˆ
ÈK›Y\ÜØYÙJNÂˆ™]\›ŽÂˆBˆYˆ
ÚXÚÈOOHXØÛÝ[ÚXÚÊH™]\›ŽÂˆYˆ
VÈ˜XÝ]™H‹œ[™[™È—Kš[˜ÛY\ÊÝ]HOH[È›ÚYˆÝ]KœÝ]\ÊJHÂˆÚ\J
NÂˆÙÚ[Š
NÂˆÛÛœÝ^ÈH
Ý]HOH[È›ÚYˆÝ]KœÝ]\ÊHOOHœÝ\Ü[™YˆÈµå5åõêuäuåuçÈ5çµåuêuå5åˆ5å5äµæuêuå5ç5çµèµê5æõêˆ5è5åõèuçµåˆˆˆµå5åõêuäuåuçÈ5ä5æuè5åH5é5èµæuçˆ5å5äµæuêuå5ç5çµèµê5æõêˆ5è5åõèuçµåˆŽÂˆÝ]\Ê^ÊNÂˆžHÂˆZY[]]œÚYÛ“Ý]ØØ[

NÂˆHØ]Ú
JHÂˆBˆ™]\›ŽÂˆBˆXØÛÝ[Ý]HHÝ]NÂˆÙ\ÜÚ[ÛˆH™^ÂˆYˆ
˜XÚÙYÙ\ÜÚ[Û•\Ù\ˆOOH™^\Ù\‹šY
HÂˆ˜XÚÙYÙ\ÜÚ[Û•\Ù\ˆH™^\Ù\‹šYÂˆXØÛÝ[\KœÙ\ÜÚ[ÛXÝ]š]JœÙ\ÜÚ[Û—ÜÝ\ŠK˜Ø]Ú


HOˆÂˆJNÂˆBˆÚÝÑÛØ˜[š[[™Ó[ÙJÝ]Kœ^[Y[[ÙJNÂˆ\ØYÙU˜XÚÚ[™ÈOH[È›ÚYˆ\ØYÙU˜XÚÚ[™Ë™\ÜÜÙJ
NÂˆ\ØYÙU˜XÚÚ[™ÈH[ÂˆYˆ
\Ý]Kš\ÔÝ\\\Ù\ŠH\ØYÙU˜XÚÚ[™ÈH[Ý[\ØYÙU[[Y]žJÈØÝ[Y[ÛÛ^ˆ

HOˆ
ÈYÙNˆÝ]KœÝ]\ÈOOHœ[™[™ÈˆØÝ[Y[œ]Y\žTÙ[XÝÜŠ™X[ÙÖÛÜ[—HÙ]KXXØÛÝ[\YÙWHŠHÈ˜XØÛÝ[ˆˆ]š\È™\Ý[˜][ÛœÈˆˆXˆOOH˜YÙ[ˆÈœ[›š[™ÈˆˆXˆJKÙ[™ˆ
]™[ÊHOˆXØÛÝ[\K\ØYÙQ]™[Ê]™[ÊHJNÂˆYˆ
Ý]Kš\ÔÝ\\\Ù\ˆ	‰ˆXYZ[“[ÙJ
JHÂˆÛÛœÝ\›H™]ÈT“
Ú[™ÝË›ØØ][Û‹š™YŠNÂˆ\›œÙX\˜Ú\˜[\ËœÙ]
›[ÙH‹˜YZ[ˆŠNÂˆÚ[™ÝËš\ÝÜžKœ™\XÙTÝ]J[ˆ‹\›
NÂˆBˆYˆ
YZ[“[ÙJ
JHÂˆYˆ
Ý]KœÝ]\ÈOOH˜XÝ]™Hˆ\Ý]Kš\ÔÝ\\\Ù\ŠHÂˆÚ\J
NÂˆÙÚ[Š
NÂˆÝ]\Êµç5åõêuäuåuçÈ5åµå5ä5æuçÈ5å5ê5êuä5êˆ5çµè5å5ç5é5èµæuçˆ5ä5é5êuê5ç5èµäuåuê5ç5æõè5æuèuêˆ5ç5éõåuåËˆŠNÂˆ™]\›ŽÂˆBˆYZ[’ÛYJ
NÂˆ™]\›ŽÂˆBˆYˆ
Ý]KœÝ]\ÈOOHœ[™[™ÈŠHÂˆš\H[ÂˆÙ[XÝYš\YH[Âˆ\Ý[˜][ÛœÌˆH×NÂˆ\ØÚ
ÊÎÂˆ›Ý]PÛX[\OH[È›ÚYˆ›Ý]PÛX[\

NÂˆ›Ý]PÛX[\H[Âˆ	
ˆÙY]ÜˆŠK˜ÛÜÙJ
NÂˆ	
ˆÙY]ÜˆŠKš[›™\’SHˆŽÂˆ	
ˆÝXœÈŠKš[›™\’SHˆŽÂˆ	
ˆØXØÛÝ[ŠKš[›™\’SHˆŽÂˆ
ØMH	
ˆÙ\Ý[˜][Û‹XÛÛ›ÛÈŠJHOH[È›ÚYˆØMœ™\XÙPÚ[™[Š
NÂˆØÝ[Y[˜›ÙK™]\Ù]œØÜ™Y[ˆH›ÙÚ[ˆŽÂˆ›Ý]PÛX[\H[Ý[Û˜›Ø\™[™ÊÈ›ÛÝˆ	
ˆÝšY]ÈŠKÝ]K\NˆXØÛÝ[\K™Yœ™\Úˆ

HOˆ\TÙ\ÜÚ[ÛŠ™^
KÚYÛ“Ý]ˆ

HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆZY[XØÛÝ[\KœÙ\ÜÚ[ÛXÝ]š]JœÙ\ÜÚ[Û—Ù[™ŠK˜Ø]Ú


HOˆÂˆJNÂˆZY[]]œÚYÛ“Ý]

NÂˆÚ\J
NÂˆÙÚ[Š
NÂˆJHJNÂˆÝ]\ÊµåõêuäuåuçÈ5åõäõêNˆ5æuêH5ç5å5êuç5æuçH5ä5æuçµåuêˆ5çµæuæuç5åuç5äuåõåuê5åõäuæuç5å5æõåuç5ç5è5æuèuæuåuçÈ5ç5ç5ä5êµêuç5åuçHŠNÂˆ™]\›ŽÂˆBˆXØÛÝ[

NÂˆYˆ
]š\
HÂˆ	
ˆÝšY]ÈŠK^ÛÛ[Hµæ5åuèµçÈ5çµå5èµè5çø )ˆŽÂˆžHÂˆZY[ØY

NÂˆHØ]Ú
JHÂˆÚÝÓØY\œ›ÜŠJNÂˆBˆBˆYˆ
[™[™ÑÜ›Ý\[š]H	‰ˆÝ]KœÝ]\ÈOOH˜XÝ]™Hˆ	‰ˆ\Ý]Kš\ÔÝ\\\Ù\ŠHÂˆÛÛœÝÚÙ[ˆH[™[™ÑÜ›Ý\[š]NÂˆ[™[™ÑÜ›Ý\[š]HH[Âˆ[š]PÛX[\HÜ[•š\[š]][ÛŠÈX[ÙÎˆ	
ˆÙY]ÜˆŠK\NˆÜ›Ý\\KÚÙ[‹ÛXØÙ\YˆÜ[”Ú\™Yš\šY]ÈJNÂˆBˆJNÂˆBˆ[˜Ý[ÛˆÚÝÑÛØ˜[š[[™Ó[ÙJ[ÙJHÂˆ˜\ˆØMØŽÂˆ
ØMHØÝ[Y[œ]Y\žTÙ[XÝÜŠ–Ù]KYÛØ˜[Xš[[™Ë[[ÙWHŠJHOH[È›ÚYˆØMœ™[[Ý™J
NÂˆÛÛœÝ›ÙHHØÝ[Y[˜Ü™X]Q[[Y[
™]ˆŠNÂˆ›ÙK™]\Ù]™ÛØ˜[š[[™Ó[ÙHHˆŽÂˆ›ÙKš[›™\’SHš[[™Ó[ÙSX\šÝ\
[ÙJNÂˆÛÛœÝXY\ˆHØÝ[Y[œ]Y\žTÙ[XÝÜŠˆÙ›Ø][™ËZXY\ˆŠNÂˆYˆ
XY\ŠHXY\‹˜™Y›Ü™J›ÙJNÂˆ[ÙH
ØˆHØÝ[Y[œ]Y\žTÙ[XÝÜŠ‹œÚ]KZXY\ˆŠJHOH[È›ÚYˆØ‹˜Y\Š›ÙJNÂˆBˆ[˜Ý[Ûˆ™Yœ™\ÚXØÛÝ[XØÙ\ÜÊ
HÂˆ™]\›ˆ×Ø\Þ[˜Ê\Ë[[˜Ý[ÛŠˆ

HÂˆYˆ
\Ù\ÜÚ[ÛŠH™]\›ŽÂˆÛÛœÝ™^HÙ\ÜÚ[Û‹ÚXÚÈH
ÊØXØÛÝ[ÚXÚÎÂˆžHÂˆÛÛœÝXØÙ\ÜÈHZY[]]˜Ý\ÝÛY\]]Ý]\Ê
NÂˆYˆ
ÚXÚÈOOHXØÛÝ[ÚXÚÊH™]\›ŽÂˆYˆ
XØÙ\ÜË˜XØÙ\ÜÈOOH˜[ÝÙYˆXXØÛÝ[Ý]JHÂˆZY[\TÙ\ÜÚ[ÛŠ™^
NÂˆ™]\›ŽÂˆBˆÛÛœÝÝ]HHZY[XØÛÝ[\KœÝ]J
NÂˆYˆ
ÚXÚÈOOHXØÛÝ[ÚXÚÈ
Ù\ÜÚ[ÛˆOH[È›ÚYˆÙ\ÜÚ[Û‹\Ù\‹šY
HOOH™^\Ù\‹šY
H™]\›ŽÂˆYˆ

Ý]HOH[È›ÚYˆÝ]KœÝ]\ÊHOOH
XØÛÝ[Ý]HOH[È›ÚYˆXØÛÝ[Ý]KœÝ]\ÊJHÂˆZY[\TÙ\ÜÚ[ÛŠ™^
NÂˆ™]\›ŽÂˆBˆÛÛœÝ›ÛPÚ[™ÙYHÝ]Kš\ÔÝ\\\Ù\ˆOOHXØÛÝ[Ý]Kš\ÔÝ\\\Ù\ŽÂˆXØÛÝ[Ý]HHÝ]NÂˆÚÝÑÛØ˜[š[[™Ó[ÙJÝ]Kœ^[Y[[ÙJNÂˆYˆ
›ÛPÚ[™ÙY	‰ˆÝ]KœÝ]\ÈOOH˜XÝ]™HŠHZY[\TÙ\ÜÚ[ÛŠ™^
NÂˆHØ]Ú
JHÂˆYˆ
ÚXÚÈOOHXØÛÝ[ÚXÚÊH™]\›ŽÂˆÚ\J
NÂˆÙÚ[Š
NÂˆÝ]\Êµç5ä5è5æuêµçÈ5ç5ä5çµêˆ5å5ê5êuä5åuêˆ5åõêuäuåuçËˆ5å5êµåõäuê5êuåuäKˆŠNÂˆBˆJNÂˆBˆÚ[™ÝËœÙ][\˜[


HOˆÂˆYˆ
Ù\ÜÚ[Ûˆ	‰ˆØÝ[Y[š\ÚXš[]TÝ]HOOHš\ÚX›HŠH™Yœ™\ÚXØÛÝ[XØÙ\ÜÊ
K˜Ø]Ú

JHOˆÝ]\ÊK›Y\ÜØYÙJJNÂˆKMYLÊNÂˆ˜\ˆØLÎÂˆ
ØLÈHÛY[Ë˜Ú[›™[
HOH[È›ÚYˆØLË˜Ø[
ÛY[Ë˜XØÛÝ[XXØÙ\ÜÈŠK›ÛŠœÜÝÜ™\×ØÚ[™Ù\È‹È]™[ˆ•TUH‹ØÚ[XNˆœX›XÈ‹X›Nˆ˜XØÛÝ[ØXØÙ\ÜÈˆK

HOˆ™Yœ™\ÚXØÛÝ[XØÙ\ÜÊ
K˜Ø]Ú

JHOˆÝ]\ÊK›Y\ÜØYÙJJJKœÝXœØÜšX™J
NÂˆ]]›ÛÚ[™ÙJ
™^]™[
HOˆÂˆYˆ
Ø[˜XÚÔ[™[™ÊHÂˆYˆ
]™[OOH”TÔÕÓÔ‘Ô‘PÓÕ‘T–HŠH™XÛÝ™\žT[™[™ÈHYNÂˆ™]\›ŽÂˆBˆYˆ
™]ÈT“
Ú[™ÝË›ØØ][Û‹š™YŠKœÙX\˜Ú\˜[\Ë™Ù]
šY]ÈŠHOOH\›\ÈŠH™]\›ŽÂˆ]]™\œÚ[ÛŠÊÎÂˆ\TÙ\ÜÚ[ÛŠ™^
K[Š

HOˆÂˆYˆ
]™[OOH”TÔÕÓÔ‘Ô‘PÓÕ‘T–Hˆ	‰ˆÙ\ÜÚ[ÛŠH\ÜÝÛÜ™Y]ÜŠ
NÂˆJK˜Ø]Ú

JHOˆÝ]\ÊK›Y\ÜØYÙJJNÂˆJNÂˆØÝ[Y[˜Y]™[\Ý[™\Š˜ÛXÚÈ‹
JHOˆÂˆÛÛœÝY[\ÈHË‹‹™ØÝ[Y[œ]Y\žTÙ[XÝÜ[
ˆÙ›Ø][™ËZXY\ˆ]Z[ÈŠWNÂˆÛÛœÝÝ[[X\žHHK\™Ù]˜ÛÜÙ\Ý
œÝ[[X\žHŠNÂˆ›Üˆ
ÛÛœÝY[HÙˆY[\ÊHYˆ
[Y[K˜ÛÛZ[œÊK\™Ù]
HÝ[[X\žH	‰ˆÝ[[X\žKœ\™[[[Y[OOHY[JHY[K›Ü[ˆH˜[ÙNÂˆJNÂˆØÝ[Y[˜Y]™[\Ý[™\ŠšÙ^YÝÛˆ‹
JHOˆÂˆ˜\ˆØMÂˆYˆ
KšÙ^HOOH‘\ØØ\HŠH›Üˆ
ÛÛœÝY[HÙˆØÝ[Y[œ]Y\žTÙ[XÝÜ[
ˆÙ›Ø][™ËZXY\ˆ]Z[ÖÛÜ[—HŠJHÂˆY[K›Ü[ˆH˜[ÙNÂˆ
ØMHY[Kœ]Y\žTÙ[XÝÜŠœÝ[[X\žHŠJHOH[È›ÚYˆØM™›ØÝ\Ê
NÂˆBˆJNÂˆØÝ[Y[˜Y]™[\Ý[™\Šš[œ]‹
]™[
HOˆÂˆYˆ
Y]™[\™Ù]˜ÛÜÙ\Ý
–Ù]KY\Ý[˜][Û‹\XÚÙ\‹YX[Ù×HŠJHšY]Ñ\ØÚ
ÊÎÂˆJNÂˆ	
ˆÙY]ÜˆŠK˜Y]™[\Ý[™\Š˜Ø[˜Ù[‹
JHOˆÂˆYˆ
\ÞJHKœ™]™[Y˜][

NÂˆJNÂˆØÝ[Y[˜Y]™[\Ý[™\Šš\ÚXš[]XÚ[™ÙH‹

HOˆÂˆYˆ
ØÝ[Y[š\ÚXš[]TÝ]HOOHš\ÚX›Hˆ	‰ˆÙ\ÜÚ[ÛŠH™Yœ™\ÚXØÛÝ[XØÙ\ÜÊ
K˜Ø]Ú

JHOˆÝ]\ÊK›Y\ÜØYÙJJNÂˆYˆ
ØÝ[Y[š\ÚXš[]TÝ]HOOHš\ÚX›Hˆ	‰ˆ\ÛXÞT™]šY]Ñ\H	‰ˆÙ\ÜÚ[Ûˆ	‰ˆX\ÞH	‰ˆXˆOOHœÙ][™ÜÈˆ	‰ˆI
ˆÙY]ÜˆŠK›Ü[ŠHØY

K˜Ø]Ú
ÚÝÓØY\œ›ÜŠNÂˆJNÂˆ˜\ˆX›XÕ\›\ÕšY]ÈH™]ÈT“
Ú[™ÝË›ØØ][Û‹š™YŠKœÙX\˜Ú\˜[\Ë™Ù]
šY]ÈŠHOOH\›\ÈŽÂˆYˆ
X›XÕ\›\ÕšY]ÊHÂˆ›Ý]PÛX[\H[Ý[\›\ÊÈ›ÛÝˆ	
ˆÝšY]ÈŠK\NˆXØÛÝ[\KYˆ™]ÈT“
Ú[™ÝË›ØØ][Û‹š™YŠKœÙX\˜Ú\˜[\Ë™Ù]
™\œÚ[ÛˆŠHJNÂˆH[ÙH]]˜ÛÛ\]SÐ]]Ø[˜XÚÊ
K[Š
™\Ý[
HOˆÂˆ™XÛÝ™\žT[™[™È
™XÛÝ™\žT[™[™ÈH™\Ý[œ™XÛÝ™\žHOOHYJNÂˆØ[˜XÚÔ[™[™ÈH˜[ÙNÂˆ™]\›ˆ]]œÙ\ÜÚ[ÛŠ
NÂˆJK[Š
™^
HOˆ×Ø\Þ[˜Ê[[[˜Ý[ÛŠˆ

HÂˆYˆ
]]™\œÚ[ÛˆOOH
HÂˆZY[\TÙ\ÜÚ[ÛŠ™^
NÂˆYˆ
™XÛÝ™\žT[™[™È	‰ˆÙ\ÜÚ[Ûˆ	‰ˆXØÛÝ[Ý]JH\ÜÝÛÜ™Y]ÜŠ
NÂˆ™XÛÝ™\žT[™[™ÈH˜[ÙNÂˆBˆJJK˜Ø]Ú

JHOˆÂˆØ[˜XÚÔ[™[™ÈH˜[ÙNÂˆYˆ
]]™\œÚ[ÛˆOOH
H™]\›ŽÂˆÚ\J
NÂˆÙÚ[Š
NÂˆÝ]\Êµäuäõæuéõêˆ5å5å5êµåõäuê5åuêˆ5è5æõêuç5åˆˆ
ÈK›Y\ÜØYÙJNÂˆJNÂˆÚ[™ÝËœÙ][\˜[


HOˆÂˆYˆ
Ù\ÜÚ[Ûˆ	‰ˆš\	‰ˆ\ÛXÞT™]šY]Ñ\H	‰ˆX\ÞH	‰ˆÈ˜›ÛÚÚ[™È‹\ÚÈ‹™^[œÙ\È—Kš[˜ÛY\ÊXŠH	‰ˆI
ˆÙY]ÜˆŠK›Ü[ˆ	‰ˆØÝ[Y[š\ÚXš[]TÝ]HOOHš\ÚX›HŠHØY

K˜Ø]Ú

JHOˆÝ]\Êµç5ä5è5æuêµçÈ5ç5ê5èµè5çÈ5èuæ5æ5åuèuæuçNˆˆ
ÈK›Y\ÜØYÙJJNÂˆKÙM
NÂŸJJ
NÂ‹ÊˆH[™YXÙ[œÙH[™›Ü›X][ÛŽ‚‚›XY›]Ù\ÝÛXY›]\Ü˜ËšœÎ‚ˆ

ˆ™\Ù\™Bˆ
ˆXY›]KŽKH”ÈXœ˜\žH›Üˆ[\˜XÝ]™HX\ËˆÎ‹ËÛXY›]œË˜ÛÛBˆ
ˆ
ÊHŒLLŒŒÈ›Y[Z\ˆYØY›ÛšÚ[‹
ÊHŒLLŒLHÛÝYXYBˆ
ŠBŠ‹Â