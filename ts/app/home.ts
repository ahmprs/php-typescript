class Home extends MasterPage {
	protected div_home = null;
	private cmp_add_one: CmpAdd = null;
	private cmp_add_two: CmpAdd = null;

	constructor() {
		super();
		this.div_home = this.createJq('div');
		this.div_home.text('This is home page');

		this.cmp_add_one = new CmpAdd(this.div_home);
		this.cmp_add_two = new CmpAdd(this.div_home);
	}

	public static init() {
		new Home();
	}
}
