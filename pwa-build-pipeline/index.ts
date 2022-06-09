import { readFileSync, writeFileSync } from 'fs';
import jsdom from 'jsdom';

/**
 * TODO:
 * Fonts
 * Color themes
 * "Traits" (how are these different from features?)
 * Book collection (bc) features
 * Books
 * Backgroud images?
 * Layouts?
 * Menu localizations?
 * Keys?
 */

const dom = new jsdom.JSDOM(readFileSync('./example.xml').toString());

const mainFeatures: any = {};
const mainFeatureTabs = dom.window.document.querySelector("features[type=main]")?.getElementsByTagName("e");
if(!mainFeatureTabs) throw new Error("Features tag not found in xml");
// const parsed = data.parseFromString(xmlInput.toString(), "text/xml");
for(const tag of mainFeatureTabs) {
    try {
        let value: any = tag.attributes.getNamedItem("value")!.value;
        if(!value.includes(":") && !isNaN(parseInt(value))) value = parseInt(value);
        else if (["true", "false"].includes(value)) value = value === "true" ? true : false;
        else {} // " " split array, string, enum or time
        mainFeatures[tag.attributes.getNamedItem("name")!.value] = value;
    } catch (e) {
        if(e instanceof ReferenceError) {
            console.error("The main features section did not have the expected attributes `name` and `value`");
        } else throw e;
    }
}
console.log(mainFeatures);
writeFileSync("./config.json",  JSON.stringify({ mainFeatures }));
