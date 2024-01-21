/** @format */

export function createElement(
  type,
  className = "",
  id = "",
  text = "",
  attributes = {}
) {
  const el = document.createElement(type);
  if (className) el.className = className;
  if (id) el.id = id;
  if (text) el.textContent = text;
  Object.keys(attributes).forEach((key) =>
    el.setAttribute(key, attributes[key])
  );

  return el;
}
