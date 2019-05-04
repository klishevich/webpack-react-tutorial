const fs = require("fs-extra");
const webpack = require("webpack");
const config = require("../config/webpack.config.prod");
const paths = require("../config/paths");

const compiler = webpack(config);

fs.emptyDirSync(paths.appBuild);
copyPublicFolder();
compiler.run((err, stats) => {
    if (err) {
        console.error(err.stack || err);
        if (err.details) {
            console.error(err.details);
        }
        process.exit(1);
    }

    process.stdout.write(`${stats.toString()}\n`);
});

function copyPublicFolder() {
    fs.copySync(paths.appPublic, paths.appBuild, {
        dereference: true,
        filter: file => file !== paths.appHtml,
    });
}
