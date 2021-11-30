import * as BS from '../Controler/BS.js';
export class OOXml {
    constructor(ooXml) {
        this.GetTab = (tabName) => this.XmlDoc.getElementsByTagName('w:' + tabName);
        this.Body = () => this.GetTab('body');
        this.Paras = () => this.GetTab('p');
        this.Runs = () => this.GetTab('r');
        this.Texts = () => this.GetTab('t');
        this.Join = (newOOXml) => this.Body()[0].innerHTML += newOOXml.Body()[0].innerHTML;
        this.Replace = (oldText, newText) => {
            var numberOfLineBreaks = (oldText.match(/\n/g) || []).length;
            let xmlOldText = numberOfLineBreaks == 0 ? BS.RegExpEncode(BS.HTMLEncode(oldText)) :
                BS.RegExpEncode(BS.HTMLEncode(oldText)).replace(/\n(&nbsp;)*/gi, '[\\s\\S]+?');
            let xmlNewText = BS.HTMLEncode(newText);
            console.log(this.Body()[0].innerHTML);
            this.Body()[0].innerHTML = this.Body()[0].innerHTML.replace(new RegExp(xmlOldText, 'gi'), xmlNewText);
            console.log(xmlOldText, xmlNewText);
        };
        this.XML = () => this.XmlDoc.documentElement.outerHTML;
        this.Parser = new DOMParser();
        this.XmlDoc = this.Parser.parseFromString(ooXml, "text/xml");
    }
}
//# sourceMappingURL=OOXml.js.map