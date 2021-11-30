export class JSCode {
    constructor(texts, IdetifyResultFn, evalResultFn, evalErrFn) {
        this.CodeRegex = /(?<=(\[\<))(?<value>[\s\S]{3,}?)(?=(\>\]))/gi;
        this.VarRegex = /(?<var>\w+)=(?<code>[\S\s]+)/gi;
        this.InitFunction = () => {
            const _global = (window);
            if (_global.randomInteger)
                return;
            _global.int = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
            _global.real = (min, max) => Math.random() * (max - min) + min;
            _global.round = (number, places) => (+(Math.round((number + "e+" + places)) + "e-" + places));
        };
        this.regexExecAll = (str, regex) => {
            const matches = [];
            do {
                var m = regex.exec(str);
                if (m) {
                    matches.push(m);
                }
            } while (m);
            return matches;
        };
        this.GetMatches = (texts) => this.GetRegexResult(texts, this.CodeRegex, true, m => m.groups['value']);
        this.GetVarList = (texts) => this.GetRegexResult(texts, this.VarRegex, false, m => m.groups['var']);
        this.GetAll = (texts) => this.GetRegexResult(texts, this.CodeRegex, true, m => m[0]);
        this.GetRegexResult = (texts, regex, isJoin, callbackfn) => {
            let result = [];
            if (isJoin) {
                const matches = this.regexExecAll(texts.join('\n'), regex);
                if (matches.length > 0)
                    result.push(...matches.map(callbackfn));
            }
            else
                texts.forEach(text => {
                    if (text) {
                        const matches = this.regexExecAll(text, regex);
                        if (matches.length > 0)
                            result.push(...matches.map(callbackfn));
                    }
                });
            return result;
        };
        this.ReplaceStrings = [];
        this.Result = [];
        this.CodeString = '';
        this.Vars = [];
        this.ReplaceStrings = this.GetAll(texts).map(s => `[<${s}>]`);
        let Codes = this.GetMatches(texts).map(c => c.replace(/‘|’/g, `'`));
        this.Vars = this.GetVarList(Codes);
        let CodeStrings = ['function(){', 'var ' + [...new Set(this.Vars)].join(', ')];
        CodeStrings.push(...Codes);
        CodeStrings.push(`return [${this.Vars.join(', ')}]`, '}');
        IdetifyResultFn(this.ReplaceStrings, CodeStrings);
        this.Result = [];
        this.InitFunction();
        this.CodeString = '(' + CodeStrings.join('\n') + '())';
        try {
            this.Result = eval(this.CodeString);
            let resultText = texts.join('\n');
            this.ReplaceStrings.forEach((code, i) => resultText = resultText.replace(code, this.Result[i]));
            evalResultFn(this.ResultStrings(), resultText);
        }
        catch (e) {
            evalErrFn(e.message);
        }
    }
    ResultStrings() { return this.Vars.map((v, i) => v + '=' + this.Result[i]); }
    NextValue() { this.Result = eval(this.CodeString); }
}
//# sourceMappingURL=Data.js.map