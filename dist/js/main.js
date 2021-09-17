const favInit = () => {
	const els = document.querySelectorAll('.card__fav')
	if (!els) return
	els.forEach(el => {
		el.addEventListener('click', () => {
			if (!el.classList.contains('card__fav_active')) {
				el.classList.add('card__fav_active')
			} else {
				el.classList.remove('card__fav_active')
			}
		})
	})
}

const counterInit = () => {
	const counters = document.querySelectorAll('.counter')
	if (!counters) return
	counters.forEach(counter => {
		const minus = counter.querySelector('.counter__button_minus')
		const plus = counter.querySelector('.counter__button_plus')
		const value = counter.querySelector('.counter__value span')
		if (!minus || !plus) return
		minus.addEventListener('click', () => {
			let val = parseInt(value.textContent)
			if (val <= 1) {
				counter.closest('.card__tools').classList.remove('card__tools_active')
			} else {
				val = val - 1
				value.textContent = val
			}
		})
		plus.addEventListener('click', () => {
			let val = parseInt(value.textContent)
			val = val + 1
			value.textContent = val
		})
	})
}

const cardToolsInit = () => {
	const tools = document.querySelectorAll('.card__tools')
	if (!tools) return
	tools.forEach(tool => {
		const button = tool.querySelector('.card__button')
		const counter = tool.querySelector('.card__counter')
		if (!button || !counter) return
		button.addEventListener('click', e => {
			e.preventDefault()
			if (!tool.classList.contains('card__tools_active')) {
				tool.classList.add('card__tools_active')
			} else {
				tool.classList.remove('card__tools_active')
			}
		})
	})
}

const init = () => {
	favInit()
	cardToolsInit()
	counterInit()
}
document.addEventListener('DOMContentLoaded', init)
