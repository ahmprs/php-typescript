class CmpAdd extends Cmp {
	private txtX = null;
	private txtY = null;
	private btnAdd = null;
	private spnResult = null;
	private spnResultServerSide = null;

	constructor(ownerElement = null) {
		super(ownerElement);

		// TEXT BOX FOR FIRST NUMBER
		this.txtX = this.createJq('input', this.div_component);
		this.createJq('br', this.div_component);

		// TEXT BOX FOR SECOND NUMBER
		this.txtY = this.createJq('input', this.div_component);
		this.createJq('br', this.div_component);

		// BUTTON FOR RESULT CALCULATIONS
		this.btnAdd = this.createJq('button', this.div_component);
		this.btnAdd.text('ADD NUMBERS');

		// NEXT LINE
		this.createJq('br', this.div_component);

		// SPAN FOR RESULT
		this.spnResult = this.createJq('span', this.div_component);
		this.spnResult.text('RESULT');

		this.createJq('br', this.div_component);

		this.spnResultServerSide = this.createJq('span', this.div_component);
		this.spnResultServerSide.text('RESULT-SERVER-SIDE');

		// SET ATTRIBUTES
		this.txtX.attr('type', 'number');
		this.txtX.attr('placeholder', 'X = ?');
		this.txtX.attr('min', '0');
		this.txtX.attr('max', '100');
		this.txtX.val(0);

		this.txtY.attr('type', 'number');
		this.txtY.attr('placeholder', 'Y = ?');
		this.txtY.attr('min', '0');
		this.txtY.attr('max', '100');
		this.txtY.val(0);

		this.btnAdd.on('click', () => {
			let x = parseInt(this.txtX.val());
			let y = parseInt(this.txtY.val());
			let z = x + y;
			this.spnResult.text(z);

			// SERVER SIDE REQUEST GOES HERE.
			$.post('./api/add.php', { x, y }, (d, s) => {
				this.spnResultServerSide.text(d['result']);
			});
		});
	}
}
