let a: number = 5

let b: string = 'Aibol'

let c: boolean = true

let d: string[] = ['Aibol', 'Erlan', 'Azamat']

d = d.map((item: string) => item.toUpperCase()) // AIBOL, ERLAN, AZAMAT

let e: any = 5
e = 'Arman'

function Test(a:string, b: string): string | number {
	return a + ' ' + b
}

Test('Miras', 'Kaidarov') // Miras Kaidarov

const Test2 = (a:number): number => {
	return a * 2
}

Test2(3) // 6