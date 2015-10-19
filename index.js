module.exports = function(str, regex) {
  if (typeof str !== 'string' && str !== undefined && str !== null) {
    str = str.toString();
  }
  if (typeof str !== 'string' || regex === null) {
    return [];
  }
  const matches = str.match(regex);
  return matches || [];
}
