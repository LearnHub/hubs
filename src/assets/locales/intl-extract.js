const path = require("path");
const { extract } = require("@formatjs/cli-lib");
const glob = require("glob");
const promisify = require("util").promisify;
const asyncGlob = promisify(glob);
const fs = require("fs");
const asyncWriteFile = promisify(fs.writeFile);

async function main(argv) {
  const command = argv[2];
  const basePath = path.resolve(__dirname, "..", "..", "..");
  const files = await asyncGlob("../../../src/**/*.js", { cwd: __dirname, absolute: true });

  // Has a specific locale been requested?
  if (command) {
    console.log(`Extracting all messages...`)
    const extractedMessages = await extract(files, {
      extractSourceLocation: false,
      extractFromFormatMessageCall: true,
      removeDefaultMessage: false,
      format: {
        format: msgs => {
          for (const id in msgs) {
            msgs[id] = msgs[id].defaultMessage;
          }
          return msgs;
        }
      }
    });
    const enMessages = JSON.parse(extractedMessages);
    console.log(`Found ${Object.keys(enMessages).length} 'en' messages`)

    const localePath = path.join(__dirname, `${command}.json`); 
    if (command === "en") {
      // "en" is the default locale, so just write out the extracted messages
      await asyncWriteFile(localePath, extractedMessages);  
      console.log(`Wrote file to ${outPath}`);
    } else {      
      // Load the locale and identify missing translations
      console.log(`Reading locale messages for '${command}'...`)
      const localeFile = await fs.promises.readFile(localePath);
      const localeMessages = JSON.parse(localeFile);
      console.log(`Read ${Object.keys(localeMessages).length} '${command}' messages`)
      // Remove messages already translated
      for(let localeMessage in localeMessages) {        
        delete enMessages[localeMessage]
      }
      const missingTranslationCount = Object.keys(enMessages).length
      if(missingTranslationCount > 0) {
        console.warn(`${missingTranslationCount} 'en' messages have no translation`)
        const missingTranslationPath = path.join(__dirname, `${command}-missing.json`);
        await asyncWriteFile(missingTranslationPath, JSON.stringify(enMessages));
        console.log(`Missing translations written to ${missingTranslationPath}`)
      } else {
        console.info(`No missing translations`)
      }
    }
  } else {
    // Write out detailed information about all the translations
    const outPath = path.join(__dirname, "extracted-messages.json");
    const extractedMessages = await extract(files, {
      extractSourceLocation: true,
      extractFromFormatMessageCall: true,
      removeDefaultMessage: false,
      format: {
        format: msgs => {
          for (const id in msgs) {
            const msg = msgs[id];
            msg.file = path.relative(basePath, msg.file);
          }

          return msgs;
        }
      }
    });

    await asyncWriteFile(outPath, extractedMessages);

    console.log(`Wrote file to ${outPath}`);
  }
}

main(process.argv)
  .then(() => {
    process.exit(0);
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
