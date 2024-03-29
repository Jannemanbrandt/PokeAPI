// Error constants
const errors = {};

// Actions constants
const actions = {};

// Request headers;
const ALLOW_ORIGIN = "Access-Control-Allow-Origin";
const ALLOW_WILDCARD = "*";
const ALLOW_HEADERS = "Access-Control-Allow-Headers";
const REST_HEADERS_OPTIONS =
  "Authorization, " +
  "X-API-KEY, Origin, X-Requested-With, " +
  "Content-Type, Accept, " +
  "Access-Control-Allow-Request-Method";
const ALLOW_METHODS = "Access-Control-Allow-Methods";
const ALLOW = "Allow";
const REST_METHODS = "GET, POST, OPTIONS, PUT, DELETE";

export {
  errors,
  actions,
  ALLOW_ORIGIN,
  ALLOW_WILDCARD,
  ALLOW_HEADERS,
  REST_HEADERS_OPTIONS,
  ALLOW_METHODS,
  ALLOW,
  REST_METHODS,
};
