import {
	SET_DEFAULT_FILTER_ATTS,
	RESET_DEFAULT_FILTER_ATTS
} from './actionTypes'

export function setDefaultFilterAtts(atts) {
	return {
		type: SET_DEFAULT_FILTER_ATTS,
		atts
	}
}

export function resetDefaultFilterAtts() {
	return {
		type: RESET_DEFAULT_FILTER_ATTS
	}
}