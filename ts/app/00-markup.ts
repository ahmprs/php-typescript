class Markup {
	public dlr(e: HTMLElement) {
		return $(e);
	}

	public create(elementName: string, appendTo: HTMLElement = null) {
		let element = document.createElement(elementName);
		if (appendTo == null) document.body.appendChild(element);
		else $(appendTo).append(element);
		return element;
	}

	public createJq(elementName: string, appendTo: HTMLElement = null) {
		return $(this.create(elementName, appendTo));
	}
}
