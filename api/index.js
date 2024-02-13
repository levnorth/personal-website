var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 51,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 101,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => AppWithProvider,
  links: () => links,
  loader: () => loader
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-U3SHS6DT.css";

// app/utils/session.server.ts
import { createCookieSessionStorage } from "@remix-run/node";
import { createThemeSessionResolver } from "remix-themes";
var sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__remix-themes",
    path: "/",
    httpOnly: !0,
    sameSites: "lax",
    secrets: ["secert"],
    secure: !1
  }
}), themeSessionResolver = createThemeSessionResolver(sessionStorage);

// app/root.tsx
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme as useTheme2
} from "remix-themes";

// app/components/Navbar.tsx
import { Disclosure } from "@headlessui/react";
import { Link, NavLink } from "@remix-run/react";
import { Theme, useTheme } from "remix-themes";
import { Fragment, jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var Navbar = () => {
  let [theme, setTheme] = useTheme();
  return /* @__PURE__ */ jsxDEV2(Disclosure, { as: "nav", children: ({ open }) => /* @__PURE__ */ jsxDEV2(Fragment, { children: [
    /* @__PURE__ */ jsxDEV2("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV2("div", { className: "flex justify-between h-16", children: [
      /* @__PURE__ */ jsxDEV2("div", { className: "flex justify-between w-full", children: [
        /* @__PURE__ */ jsxDEV2("div", { className: "flex items-center", children: /* @__PURE__ */ jsxDEV2(Link, { to: "/", children: /* @__PURE__ */ jsxDEV2("h1", { className: "text-2xl font-medium", children: [
          "Levi",
          /* @__PURE__ */ jsxDEV2("span", { className: "text-orange-500", children: "Blog" }, void 0, !1, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 18,
            columnNumber: 27
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 17,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 16,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 15,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV2("div", { className: "hidden sm:ml-6 sm:flex sm:space-x-8", children: [
          /* @__PURE__ */ jsxDEV2(
            NavLink,
            {
              prefetch: "intent",
              className: ({ isActive }) => isActive ? "border-orange-500  h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
              to: "/",
              children: "Home"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Navbar.tsx",
              lineNumber: 23,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ jsxDEV2(
            NavLink,
            {
              prefetch: "intent",
              className: ({ isActive }) => isActive ? "border-orange-500 dark:bg-gray-900 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
              to: "/blog",
              children: "Blog"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Navbar.tsx",
              lineNumber: 34,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ jsxDEV2(
            NavLink,
            {
              prefetch: "intent",
              className: ({ isActive }) => isActive ? "border-orange-500 dark:bg-gray-900 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
              to: "/projects",
              children: "Projects"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Navbar.tsx",
              lineNumber: 45,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ jsxDEV2(
            "button",
            {
              onClick: () => setTheme(
                (prev) => prev === Theme.DARK ? Theme.LIGHT : Theme.DARK
              ),
              children: theme == Theme.DARK ? /* @__PURE__ */ jsxDEV2(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: 1.5,
                  stroke: "currentColor",
                  className: "w-6 h-6",
                  children: /* @__PURE__ */ jsxDEV2(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Navbar.tsx",
                      lineNumber: 72,
                      columnNumber: 25
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Navbar.tsx",
                  lineNumber: 64,
                  columnNumber: 23
                },
                this
              ) : /* @__PURE__ */ jsxDEV2(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: 1.5,
                  stroke: "currentColor",
                  className: "w-6 h-6 text-gray-500",
                  children: /* @__PURE__ */ jsxDEV2(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Navbar.tsx",
                      lineNumber: 87,
                      columnNumber: 25
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Navbar.tsx",
                  lineNumber: 79,
                  columnNumber: 23
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/Navbar.tsx",
              lineNumber: 56,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 22,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 14,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV2("div", { className: "-mr-2 flex items-center sm:hidden", children: [
        /* @__PURE__ */ jsxDEV2(
          "button",
          {
            className: "mr-4",
            onClick: () => setTheme(
              (prev) => prev === Theme.DARK ? Theme.LIGHT : Theme.DARK
            ),
            children: theme == Theme.DARK ? /* @__PURE__ */ jsxDEV2(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                className: "w-6 h-6",
                children: /* @__PURE__ */ jsxDEV2(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Navbar.tsx",
                    lineNumber: 116,
                    columnNumber: 23
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/Navbar.tsx",
                lineNumber: 108,
                columnNumber: 21
              },
              this
            ) : /* @__PURE__ */ jsxDEV2(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                className: "w-6 h-6 text-gray-500",
                children: /* @__PURE__ */ jsxDEV2(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Navbar.tsx",
                    lineNumber: 131,
                    columnNumber: 23
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/Navbar.tsx",
                lineNumber: 123,
                columnNumber: 21
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 99,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ jsxDEV2(Disclosure.Button, { className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 dark:hover:bg-gray-800", children: open ? /* @__PURE__ */ jsxDEV2(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            className: "w-6 h-6",
            children: /* @__PURE__ */ jsxDEV2(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M6 18L18 6M6 6l12 12"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Navbar.tsx",
                lineNumber: 149,
                columnNumber: 23
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 141,
            columnNumber: 21
          },
          this
        ) : /* @__PURE__ */ jsxDEV2(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            className: "w-6 h-6",
            children: /* @__PURE__ */ jsxDEV2(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Navbar.tsx",
                lineNumber: 164,
                columnNumber: 23
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 156,
            columnNumber: 21
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 139,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 98,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 13,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 12,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV2(Disclosure.Panel, { className: "sm:hidden", children: /* @__PURE__ */ jsxDEV2("div", { className: "pt-2 pb-3 space-y-1", children: [
      /* @__PURE__ */ jsxDEV2(
        NavLink,
        {
          prefetch: "intent",
          className: ({ isActive }) => isActive ? "bg-teal-50 border-orange-500 text-orange-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-white dark:hover:bg-gray-700",
          to: "/",
          children: "Home"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 178,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2(
        NavLink,
        {
          prefetch: "intent",
          className: ({ isActive }) => isActive ? "bg-orange-50 border-orange-500 text-orange-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-white dark:hover:bg-gray-700",
          to: "/blog",
          children: "Blog"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 189,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2(
        NavLink,
        {
          prefetch: "intent",
          className: ({ isActive }) => isActive ? "bg-teal-50 border-orange-500 text-orange-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-white dark:hover:bg-gray-700",
          to: "/projects",
          children: "Projects"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 200,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 177,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 176,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}, Navbar_default = Navbar;

// app/components/Footer.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var Footer = () => /* @__PURE__ */ jsxDEV3("footer", { className: "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-white p-4 text-center absolute bottom-0 w-full", children: /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center justify-center h-10", children: /* @__PURE__ */ jsxDEV3("p", { children: "Copyright \xA9 2024 Levi Perry | All Rights Reserved." }, void 0, !1, {
  fileName: "app/components/Footer.tsx",
  lineNumber: 7,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/components/Footer.tsx",
  lineNumber: 6,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Footer.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this), Footer_default = Footer;

// app/root.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
async function loader({ request }) {
  let { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme()
  };
}
function AppWithProvider() {
  let { theme } = useLoaderData();
  return /* @__PURE__ */ jsxDEV4(ThemeProvider, { specifiedTheme: theme, themeAction: "/action/set-theme", children: /* @__PURE__ */ jsxDEV4(App, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
function App() {
  let { theme } = useLoaderData(), [themeX] = useTheme2();
  return /* @__PURE__ */ jsxDEV4("html", { lang: "en", "data-theme": themeX ?? "", children: [
    /* @__PURE__ */ jsxDEV4("head", { children: [
      /* @__PURE__ */ jsxDEV4("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(PreventFlashOnWrongTheme, { ssrTheme: Boolean(theme) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("body", { className: "bg-white text-black dark:bg-gray-900 dark:text-white h-full selection:bg-gray-50 dark:selection:bg-gray-800", children: /* @__PURE__ */ jsxDEV4(Layout, { children: [
      /* @__PURE__ */ jsxDEV4(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
function Layout({ children }) {
  return /* @__PURE__ */ jsxDEV4("div", { children: [
    /* @__PURE__ */ jsxDEV4(Navbar_default, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("main", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4(Footer_default, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
}

// app/routes/action.set-theme.ts
var action_set_theme_exports = {};
__export(action_set_theme_exports, {
  action: () => action
});
import { createThemeAction } from "remix-themes";
var action = createThemeAction(themeSessionResolver);

// app/routes/post.$slug.tsx
var post_slug_exports = {};
__export(post_slug_exports, {
  default: () => post_slug_default,
  links: () => links2,
  loader: () => loader2
});
import { RichText } from "@graphcms/rich-text-react-renderer";
import { json } from "@remix-run/node";
import { useLoaderData as useLoaderData2 } from "@remix-run/react";
import { gql } from "graphql-request";
import { useEffect } from "react";

// app/utils/hygraph.server.ts
import { GraphQLClient } from "graphql-request";
var hygraph = new GraphQLClient(process.env.HYGRAPH_API_KEY);

// app/routes/post.$slug.tsx
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";

// node_modules/prismjs/themes/prism-tomorrow.css
var prism_tomorrow_default = "/build/_assets/prism-tomorrow-2TMES3DT.css";

// node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css
var prism_line_numbers_default = "/build/_assets/prism-line-numbers-GYWLFJMN.css";

// app/routes/post.$slug.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var links2 = () => [
  { rel: "stylesheet", href: prism_tomorrow_default },
  { rel: "stylesheet", href: prism_line_numbers_default }
];
async function loader2({ params }) {
  let query = gql`
        query Posts {
          post(where: {slug: "${params.slug}"}) {
            id
            overview
            publishedAt
            slug
            title
            body {
                raw

            }
          }
        }
    `, post = await hygraph.request(query);
  return json({ post });
}
var PostSlug = () => {
  let { post } = useLoaderData2();
  return useEffect(() => {
    Prism.highlightAll();
  }, []), /* @__PURE__ */ jsxDEV5("div", { className: "xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700 lg:px-48", children: [
    /* @__PURE__ */ jsxDEV5("header", { className: "pt-6 xl:pb-6", children: /* @__PURE__ */ jsxDEV5("div", { className: "space-y-1 text-center", children: [
      /* @__PURE__ */ jsxDEV5("div", { className: "space-y-10", children: /* @__PURE__ */ jsxDEV5("div", { children: /* @__PURE__ */ jsxDEV5("p", { className: "text-base font-medium leading-6 text-orange-500", children: new Date(post.post.publishedAt).toISOString().split("T")[0] }, void 0, !1, {
        fileName: "app/routes/post.$slug.tsx",
        lineNumber: 60,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/post.$slug.tsx",
        lineNumber: 59,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/post.$slug.tsx",
        lineNumber: 58,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { children: /* @__PURE__ */ jsxDEV5("h1", { className: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14", children: post.post.title }, void 0, !1, {
        fileName: "app/routes/post.$slug.tsx",
        lineNumber: 66,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/post.$slug.tsx",
        lineNumber: 65,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/post.$slug.tsx",
      lineNumber: 57,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/post.$slug.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0", children: /* @__PURE__ */ jsxDEV5("div", { className: "divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0", children: /* @__PURE__ */ jsxDEV5("div", { className: "prose max-w-none pt-10 pb-8 dark:prose-invert", children: /* @__PURE__ */ jsxDEV5(
      RichText,
      {
        content: post.post.body.raw,
        renderers: {
          code_block: ({ children }) => /* @__PURE__ */ jsxDEV5("pre", { className: "line-numbers language-javascript", children: /* @__PURE__ */ jsxDEV5("code", { children }, void 0, !1, {
            fileName: "app/routes/post.$slug.tsx",
            lineNumber: 82,
            columnNumber: 41
          }, this) }, void 0, !1, {
            fileName: "app/routes/post.$slug.tsx",
            lineNumber: 81,
            columnNumber: 21
          }, this),
          img: ({ src, altText, height, width }) => /* @__PURE__ */ jsxDEV5(
            "img",
            {
              src,
              alt: altText,
              height,
              width,
              className: "rounded-lg"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/post.$slug.tsx",
              lineNumber: 88,
              columnNumber: 17
            },
            this
          ),
          a: ({ children, openInNewTab, href, rel, ...rest }) => /* @__PURE__ */ jsxDEV5(
            "a",
            {
              href,
              target: openInNewTab ? "_blank" : "_self",
              ...rest,
              className: "text-orange-500 hover:text-orange-600",
              children
            },
            void 0,
            !1,
            {
              fileName: "app/routes/post.$slug.tsx",
              lineNumber: 97,
              columnNumber: 17
            },
            this
          )
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/post.$slug.tsx",
        lineNumber: 76,
        columnNumber: 21
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/post.$slug.tsx",
      lineNumber: 75,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/post.$slug.tsx",
      lineNumber: 74,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/post.$slug.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/post.$slug.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}, post_slug_default = PostSlug;

// app/routes/projects.tsx
var projects_exports = {};
__export(projects_exports, {
  default: () => projects_default,
  loader: () => loader3
});
import { json as json2 } from "@remix-run/node";
import { useLoaderData as useLoaderData3 } from "@remix-run/react";
import { gql as gql2 } from "graphql-request";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
async function loader3({}) {
  let query = gql2`
    query MyQuery {
      projects {
        id
        link
        overview
        title
        titleImage {
          url
        }
        publishedAt
      }
    }
  `, projects = await hygraph.request(query);
  return json2({ projects });
}
var Projects = () => {
  let { projects } = useLoaderData3();
  return /* @__PURE__ */ jsxDEV6("div", { className: " divide-y divide-gray-200 dark:divide-gray-700", children: [
    /* @__PURE__ */ jsxDEV6("div", { className: "space-y-2 pt-6 pb-8 md:space-y-5", children: /* @__PURE__ */ jsxDEV6("h1", { className: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14", children: "All Projects" }, void 0, !1, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8", children: projects.projects.map((project) => /* @__PURE__ */ jsxDEV6("article", { className: "overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-800 dark:shadow-gray-700/25", children: [
      /* @__PURE__ */ jsxDEV6(
        "img",
        {
          src: project.titleImage.url,
          alt: "Image of Project",
          className: "h-56 w-full object-cover"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/projects.tsx",
          lineNumber: 46,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV6("div", { className: "p-4 sm:p-6", children: [
        /* @__PURE__ */ jsxDEV6("a", { href: project.link, children: /* @__PURE__ */ jsxDEV6("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: project.title }, void 0, !1, {
          fileName: "app/routes/projects.tsx",
          lineNumber: 53,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/projects.tsx",
          lineNumber: 52,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV6("p", { className: "mt-2 line-clamp-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400", children: project.overview }, void 0, !1, {
          fileName: "app/routes/projects.tsx",
          lineNumber: 58,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV6(
          "a",
          {
            href: project.link,
            className: "group mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-500",
            children: [
              "Learn More!",
              /* @__PURE__ */ jsxDEV6("span", { className: "block transition-all group-hover:ms-0.5", children: "\u2192" }, void 0, !1, {
                fileName: "app/routes/projects.tsx",
                lineNumber: 67,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/projects.tsx",
            lineNumber: 62,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/projects.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}, projects_default = Projects;

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => index_default
});

// public/me.jpeg
var me_default = "/build/_assets/me-EYYUHNCA.jpeg";

// app/routes/_index.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var IndexPage = () => /* @__PURE__ */ jsxDEV7("div", { className: "divide-y divide-gray-200 dark:divide-gray-700", children: [
  /* @__PURE__ */ jsxDEV7("div", { className: "space-y-2 pt-6 pb-8 md:space-x-5", children: /* @__PURE__ */ jsxDEV7("h1", { className: `text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl
        md:leading-14`, children: "Home" }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV7("div", { className: "items-center spacey-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0", children: [
    /* @__PURE__ */ jsxDEV7("div", { className: "flex flex-col items-center pt-8", children: [
      /* @__PURE__ */ jsxDEV7(
        "img",
        {
          src: me_default,
          alt: "Image of myself",
          className: "h-48 w-48 rounded-full object-cover object-top"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 16,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV7("h3", { className: "pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight", children: "Levi Perry" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 21,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV7("p", { className: "text-gray-500 dark:text-gray-400 text-center", children: "Hi, my name is Levi and I am an aspiring Full Stack Developer" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 24,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV7("div", { className: "flex space-x-5 pt-6", children: [
        /* @__PURE__ */ jsxDEV7("a", { href: "#", target: "_blank", children: /* @__PURE__ */ jsxDEV7(
          "svg",
          {
            viewBox: "0 0 1024 1024",
            fill: "currentColor",
            className: "w-8 h-8 text-orange-500 hover:text-orange-600",
            children: /* @__PURE__ */ jsxDEV7("path", { d: "M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 35,
              columnNumber: 7
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 30,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 29,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV7("a", { href: "#", target: "_blank", children: /* @__PURE__ */ jsxDEV7(
          "svg",
          {
            viewBox: "0 0 1024 1024",
            fill: "currentColor",
            className: "w-8 h-8 text-orange-500 hover:text-orange-600",
            children: /* @__PURE__ */ jsxDEV7("path", { d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 44,
              columnNumber: 7
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 39,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 38,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV7("a", { href: "#", target: "_blank", children: /* @__PURE__ */ jsxDEV7(
          "svg",
          {
            viewBox: "0 0 1024 1024",
            fill: "currentColor",
            className: "w-8 h-8 text-orange-500 hover:text-orange-600",
            children: /* @__PURE__ */ jsxDEV7("path", { d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 01194 256h648.8a7.2 7.2 0 014.4 12.9z" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 53,
              columnNumber: 7
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 48,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 47,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV7("a", { href: "#", target: "_blank", children: /* @__PURE__ */ jsxDEV7(
          "svg",
          {
            viewBox: "0 0 1024 1024",
            fill: "currentColor",
            className: "w-8 h-8 text-orange-500 hover:text-orange-600",
            children: /* @__PURE__ */ jsxDEV7("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 62,
              columnNumber: 7
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 57,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 56,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 28,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { className: "prose max-w-none prose-lg pt-8 pb-8 dark:prose-invert xl:col-span-2", children: [
      /* @__PURE__ */ jsxDEV7("p", { children: "Hey, my name is Levi, I am 34 years old and I am an aspiring full-stack developer based in the US" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 68,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV7("p", { children: "Even though I am new to  full-stack development, I am learning several frameworks including React, which has been very pleasant to work with. This allows me to create applications and render them in real-time!" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 70,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV7("p", { children: "Building applications and web apps is just the start of my journey. It is a passion that I have wanted to follow for a long time and my goal is to help others by creating memorable experiences for them, whether its for a personal project or commercial business." }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 74,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 67,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/_index.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this), index_default = IndexPage;

// app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => blog_default,
  loader: () => loader4
});
import { json as json3 } from "@remix-run/node";
import { Link as Link2, useLoaderData as useLoaderData4 } from "@remix-run/react";
import { gql as gql3 } from "graphql-request";
import { Fragment as Fragment2, jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
async function loader4({ request }) {
  let query = gql3`
      query Posts {
        posts {
          createdAt
          id
          overview
          slug
          title
          updatedAt
        }
      }
      `, posts = await hygraph.request(query);
  return json3({ posts });
}
var Blog = () => {
  let { posts } = useLoaderData4();
  return /* @__PURE__ */ jsxDEV8(Fragment2, { children: /* @__PURE__ */ jsxDEV8("div", { className: "divide-y divide-gray-200 dark:divide-gray-700", children: [
    /* @__PURE__ */ jsxDEV8("div", { className: "space-2 pt-6 pb-8 md:space-y-5", children: /* @__PURE__ */ jsxDEV8("h1", { className: `text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100
            sm:text-4xl sm:leading-10 md:text-6xl md:leading-14`, children: "All Blog Posts" }, void 0, !1, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV8("ul", { children: posts.posts.map((post) => /* @__PURE__ */ jsxDEV8("li", { className: "py-4", children: /* @__PURE__ */ jsxDEV8("article", { className: "space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0", children: [
      /* @__PURE__ */ jsxDEV8("div", { children: /* @__PURE__ */ jsxDEV8("p", { className: "text-base font-medium leading-6 text-orange-500", children: new Date(post.createdAt).toISOString().split("T")[0] }, void 0, !1, {
        fileName: "app/routes/blog.tsx",
        lineNumber: 49,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/blog.tsx",
        lineNumber: 48,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV8(
        Link2,
        {
          to: `/post/${post.slug}`,
          className: "space-y-3 xl:col-span-3",
          prefetch: "intent",
          children: [
            /* @__PURE__ */ jsxDEV8("div", { children: /* @__PURE__ */ jsxDEV8("h3", { className: "text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100", children: post.title }, void 0, !1, {
              fileName: "app/routes/blog.tsx",
              lineNumber: 57,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/blog.tsx",
              lineNumber: 56,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV8("div", { className: "prose max-w-none text-gray-500 dark:text-gray-400", children: post.overview }, void 0, !1, {
              fileName: "app/routes/blog.tsx",
              lineNumber: 61,
              columnNumber: 17
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/blog.tsx",
          lineNumber: 54,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 47,
      columnNumber: 14
    }, this) }, post.id, !1, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/blog.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}, blog_default = Blog;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-YLS6WUCJ.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-JVEU7WS5.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-IUXTP662.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-WA25POA3.js", imports: ["/build/_shared/chunk-NMZL6IDN.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-FFMSSNAS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/action.set-theme": { id: "routes/action.set-theme", parentId: "root", path: "action/set-theme", index: void 0, caseSensitive: void 0, module: "/build/routes/action.set-theme-JDBUG4AI.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blog-LJCIWXFD.js", imports: ["/build/_shared/chunk-NLMN34XR.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/post.$slug": { id: "routes/post.$slug", parentId: "root", path: "post/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/post.$slug-AJABOUS7.js", imports: ["/build/_shared/chunk-NLMN34XR.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/projects": { id: "routes/projects", parentId: "root", path: "projects", index: void 0, caseSensitive: void 0, module: "/build/routes/projects-6QA2I3WP.js", imports: ["/build/_shared/chunk-NLMN34XR.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "22f40f4a", hmr: { runtime: "/build/_shared/chunk-IUXTP662.js", timestamp: 1707790331514 }, url: "/build/manifest-22F40F4A.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/action.set-theme": {
    id: "routes/action.set-theme",
    parentId: "root",
    path: "action/set-theme",
    index: void 0,
    caseSensitive: void 0,
    module: action_set_theme_exports
  },
  "routes/post.$slug": {
    id: "routes/post.$slug",
    parentId: "root",
    path: "post/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: post_slug_exports
  },
  "routes/projects": {
    id: "routes/projects",
    parentId: "root",
    path: "projects",
    index: void 0,
    caseSensitive: void 0,
    module: projects_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
