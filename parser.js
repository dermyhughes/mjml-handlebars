const hb = require('handlebars');
const mjml2html = require('mjml');
const fs = require('fs');

let mjml = (fs.readFileSync(`${fileIn}.mjml`)).toString();
const fileIn = 'template'; // Put the name of your MJML template here (without the .mjml extension)

let data = {
    message: 'Hello world'
}

function compileTemplate(template, data) {
    let t = hb.compile(template);
    template = t(data);
    let output = mjml2html(template, { minify: true });
    fs.writeFile(`${fileIn}_parsed.html`, output.html, (err) => {
        if (err) {
            throw err;
        }
    })
};

compileTemplate(mjml, data);