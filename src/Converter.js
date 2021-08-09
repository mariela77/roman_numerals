const glyphs = [
    { glyph: 'M', value: 1000},
    { glyph: 'CM', value: 900},
    { glyph: 'D', value: 500},
    { glyph: 'CD', value: 400},
    { glyph: 'C', value: 100},
    { glyph: 'XC', value: 90},
    { glyph: 'L', value: 50},
    { glyph: 'XL', value: 40},
    { glyph: 'X', value: 10},
    { glyph: 'IX', value: 9},
    { glyph: 'V', value: 5},
    { glyph: 'IV', value: 4},
    { glyph: 'I', value: 1}
]

const convert = (number) => {
    let resultString = ""

    while (number > 0) {
        for (let index = 0; index < glyphs.length; index++) {
            if (glyphs[index].value <= number) {
                resultString += glyphs[index].glyph
                number -= glyphs[index].value
                break
            }
        }
    }

    return resultString
}

module.exports = { convert }