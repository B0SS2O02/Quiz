const EasyDocx = require('node-easy-docx')



const WordToText=(data)=>{
    let text = ''
    data.forEach(element => {
        if (!!element.items) {
            element.items.forEach((element1, index) => {
                if (element1.text && element1.text != '') {
                    text += element1.text
                    if (element.items.length - 1 == index) {
                        text += '\n'
                    }
                }
            });
        } else {
            if (element.text && element.text != '') {
                text +=  element.text+'\n'
            }
        }
    });
    return text
}

const TextToJson = (text = '') => {
    let test = {
        name: '',
        questions: []
    }
    text = text.split('\n')
    let qi = 0
    text.forEach(element => {
        let value = element.split(':')
        if (value.length > 1 && value[0] == "Ady") {
            test.name = value[1]
        } else if (value.length > 1 && value[0] == "Sorag") {
            test.questions.push({
                name: value[1]
            })
            qi = test.questions.length - 1
        } else if (value.length > 1 && value[0] == "Jogap") {
            test.questions[qi].answer = value[1]
        } else {
            if (!test.questions[qi].options) {
                test.questions[qi].options = []
            }
            if (value[0] != '') {
                test.questions[qi].options.push(value[0])
            }
        }
    });
    return test
}



module.exports=async(path)=>{
    const easyDocx = new EasyDocx({
        path: path
    })
    return TextToJson(WordToText(await easyDocx.parseDocx()))
}