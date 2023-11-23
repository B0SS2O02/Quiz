const handlebars = require('handlebars')

let navbar = [
    {
        title: 'Tests',
        link: 'admin/test'
    }
]

handlebars.registerHelper('navlist', () => {
    let text = ''
    navbar.forEach((e) => {
        text += `<div onclick="link('${e.link}')" class="n-l-e">${e.title}</div>`
    })
    return new handlebars.SafeString(text)
})

handlebars.registerHelper('table', (list = []) => {
    let table = '<table class="table"><tbody class="tbody">'
    if (list.length) {
        table += '<tr class="tr">'
        Object.keys(list[0]).forEach((e) => {
            table += `<th class="th"><div class="tc">${e}</div></th>`
        })
        table += '</tr>'
    }
    list.forEach((elements, index) => {
        table += `<tr onclick="link('admin/test/${elements['Id']}')" class="tr">`
        Object.keys(elements).forEach((e) => {
            table += `<td class="td"><div class="tc">${elements[e]}</div></td>`
        })
        table += '</tr>'
    })
    table += '</tbody></table>'
    console.log(table)
    return new handlebars.SafeString(table)
})