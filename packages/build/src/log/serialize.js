const indentString = require('indent-string')
const { dump, JSON_SCHEMA } = require('js-yaml')

// Serialize to string
const serialize = function(arg) {
  return indent(stringify(arg)).trimRight()
}

const stringify = function(arg) {
  if (typeof arg !== 'object' || arg === null) {
    return String(arg)
  }

  return dump(arg, { schema: JSON_SCHEMA, noRefs: true, sortKeys: true, lineWidth: Infinity })
}

// Add indentation
const indent = function(arg) {
  return indentString(arg, INDENT_SIZE)
}

const INDENT_SIZE = 2
const SUBTEXT_PADDING = ' '.repeat(INDENT_SIZE)

module.exports = { serialize, indent, SUBTEXT_PADDING }
