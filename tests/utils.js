const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const toSnakeCase = (text = "") => {
  if (text == null) {
    return "";
  }

  return String(text)
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1_$2")
    .replace(/[\s-]+/g, "_")
    .replace(/[^a-zA-Z0-9_]+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "")
    .toLowerCase();
};

const addNumbers = (a, b) => {
  const isNumber = (value) => typeof value === "number" && Number.isFinite(value);

  if (!isNumber(a) || !isNumber(b)) {
    throw new Error("addNumbers expects two finite numbers");
  }

  return a + b;
};

module.exports = { sleep, toSnakeCase, addNumbers };
