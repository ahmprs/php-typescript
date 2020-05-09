class Cmp extends Markup {
	protected div_component = null;
	protected title = null;
	constructor(ownerElement = null) {
		super();
		this.div_component = this.createJq('div', ownerElement);
		this.title = this.createJq('h2', this.div_component);
		this.title.text('COMPONENT TITLE');
	}
}
