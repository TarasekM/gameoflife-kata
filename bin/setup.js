#!/usr/bin/env node

const path = require("path");
const util = require("util");
const fs = require("fs");
const rimraf = require("rimraf");
const copydir = require("copy-dir");

const rootPath = process.cwd();
const kataDirName = process.argv.slice(2).length > 0 ? process.argv.slice(2)[0] : "gameoflife-kata";
const kataPath = path.join(rootPath, kataDirName);

const repositoryUrl = "https://gitlab.com/CodingDojoSilesia/gameoflife-kata";

const exec = util.promisify(require("child_process").exec);
async function runShellCmd(command)
{
    try {
        const { stdout, stderr } = await exec(command);
        //console.log(stdout);
        //console.log(stderr);
    } catch {
        (err) => {
            console.error(err);
        };
    }
}

async function setup()
{
    try {

        console.log(`Cloning Kata files from the repository ${repositoryUrl}`);
        await runShellCmd(`git clone --depth 1 --no-checkout ${repositoryUrl} ${kataPath}`);
        process.chdir(kataPath);
        await runShellCmd(`git checkout master -- kata-boilerplate/`);
        rimraf.sync(path.join(kataPath, ".git"));
        copydir.sync(path.join(kataPath, "kata-boilerplate"), kataPath);
        rimraf.sync(path.join(kataPath, "kata-boilerplate"));
  
        console.log(`Installing dependencies, please wait...`);
        await runShellCmd(`npm i`);
        console.log(`All dependencies are installed successfully!`);
        console.log();
        console.log(`First of all, go to the kata folder:`);
        console.log();
        console.log(`cd ${kataDirName}`);
        console.log();
        console.log(`Secondly, there are several commands you can use:`);
        console.log();
        console.log(`npm run kata`);
        console.log(`// ^-- show the kata description`);
        console.log();
        console.log(`npm run tribute`);
        console.log(`// ^-- show the kata tribute`);
        console.log();
        console.log(`npm test`);
        console.log(`// ^-- the MOST important command, you should use it very often`);
        console.log();
  
    } catch (error) {
        console.log(error);
    }
  }
  
  setup();

