const fs = require('fs')

class view {
    part() {
        let v = {}
        const url = __dirname + '/components'
        fs.readdirSync(url).forEach((layout) => {
            v[layout.split('.')[0]] = {
                file: layout,
                get: fs.readFileSync(`${url}/${layout}`).toString()
            }
        })
        return v
    }
    scripts() {
        const path = __dirname + '\\scripts.js'
        if (fs.existsSync(path)) {
            return require(path)
        } else {
            return {}
        }

    }
    get() {
        let text = ''
        for (var i = 0; i < arguments.length; i++) {
            console.log(arguments[i])
            if (arguments[i] in this.part()) {
                text += this.part()[arguments[i]].get;
            } else {
                text += arguments[i];
            }

        }
        return text
    }
    // parse(text = '') {
    //     const parts = text.split(/{{|}}/);
    //     console.log(parts)
       
    // }
}


module.exports = new view()