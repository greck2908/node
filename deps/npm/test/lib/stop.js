const t = require('tap')
const stop = require('../../lib/stop.js')
t.isa(stop, Function)
t.equal(stop.completion, require('../../lib/utils/completion/none.js'), 'empty completion')
t.equal(stop.usage, 'npm stop [-- <args>]')
