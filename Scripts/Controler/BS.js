'use strict';
export const HTMLEncode = (text) => $('<div/>').text(text).html();
export const RegExpEncode = (text) => text.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
export function CreateAccordion(html) {
    return `<div class="accordion" id="EditorList">${html}</div>`;
}
export function CreateAccordionItem(text, id, body, expanded = true) {
    return `<div class="accordion-item">
				<h2 class="accordion-header" id="heading${id}">
					<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${id}">
						${text}
					</button>
				</h2>
				<div id="collapse${id}" class="accordion-collapse collapse ${expanded ? 'show' : ''}">
					<div class="accordion-body">
						${body}
					</div>
				</div>
			</div>`;
}
export function CreateListGroup(items) {
    return `<div class="list-group">
				${items}
			</div>`;
}
export function CreateListGroupItem(text, value, icon = 'fa fa-check') {
    return `<button type="button" class="list-group-item list-group-item-action" data-hc-index="${value}">
				<span class="btn-label"><i class="${icon}"></i></span>${text}
			</button>`;
}
function List(html) {
    return `<ul class="list-group list-group-numbered">${html}</ul>`;
}
function ListItem(html) {
    return `<li class="list-group-item">${html}</li>`;
}
export function CreateList(text, isEncode = false) {
    return List(text.map(t => ListItem(isEncode ? HTMLEncode(t) : t)).join(''));
}
export function CreateAlert(html, style, isCode = false) {
    return isCode ? `<div class="alert alert-${style}"><pre><code>${html}</code></pre></div>` :
        `<div class="alert alert-${style}">${html}</div>`;
}
//# sourceMappingURL=BS.js.map