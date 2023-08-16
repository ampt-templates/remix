import {
  require_jsx_dev_runtime
} from "/_shared/chunk-IXUMJLDW.js";
import {
  createHotContext
} from "/_shared/chunk-K3KY7YJO.js";
import "/_shared/chunk-RN6QVOE2.js";
import "/_shared/chunk-I6SDG4JM.js";
import {
  __toESM
} from "/_shared/chunk-55TDMDIA.js";

// public/ampt.svg
var ampt_default = "/_assets/ampt-EZY7RSQX.svg";

// app/routes/_index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
}
var meta = () => {
  return [{
    title: "Ampt + Remix"
  }, {
    name: "description",
    content: "Welcome to Remix on Ampt!"
  }];
};
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "column", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "circle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { width: "150", height: "150", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("image", { href: ampt_default, x: "0", y: "0", width: "150", height: "150" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 34,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { children: "Welcome to Remix on Ampt!" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      marginTop: "25px"
    } }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Run ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "code", children: "ampt dev" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 43,
        columnNumber: 15
      }, this),
      " to start the development server"
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
      marginBottom: "10px"
    }, children: [
      "Edit this page by modifying",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "code", children: "app/routes/_index.tsx" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Deploy your changes by running ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "code", children: "build" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 52,
        columnNumber: 42
      }, this),
      " in the Ampt shell to see your changes at your sandbox url"
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "spacing" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Run",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "code", children: "ampt deploy" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 57,
        columnNumber: 14
      }, this),
      " to deploy to a stage environment"
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "spacing" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
      marginBottom: "5px"
    }, children: [
      "Learn more about Ampt by checking out our",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { rel: "noreferrer", href: "https://getampt.com/docs", target: "_blank", children: "docs" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Learn more about Remix by checking out their",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { rel: "noreferrer", href: "https://remix.run/docs/en/main", target: "_blank", children: "docs" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/routes/_index-YYXB76PA.js.map
