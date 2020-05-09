class MasterPage extends Markup {
	public title = null;

	constructor() {
		super();

		this.title = this.createJq('h1');
		this.title.text("Master page says: I'm feeling like I'm happy");
	}

	public static init() {
		new MasterPage();
	}
}
