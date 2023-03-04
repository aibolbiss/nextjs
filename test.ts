interface React {
	readonly id: string  // readonly - данное поле только для чтения, изменить мы не можем
	color?: string,      // ? - означает что данный параметр не обязательный 
	size: {
		width: number,
		height: number
	}
}

const aibol: React = {
	id: '1234',
	size: {
		width: 300,
		height: 200,
	}
}

const erlan: React = {
	id: 'a1b2c3',
	color: 'yellow',
	size: {
		width: 600,
		height: 300,
	}
}

// Наследование интерфейсов

interface Vue extends React {
	print: () => number
}

const azamat: Vue = {
	id: 'azamat777',
	size: {
		width: 1000,
		height: 500
	},
	print(): number {
		return this.size.width * this.size.height
	}
}