export const ADD_NEW_COMPANY = "companies";
export const FETCH_ALL_COMPANIES = "companies"
export const ADD_NEW_PARTNER = "partners";
export const FETCH_ALL_PARTNERS = "partners"
export const BLOCK_PARTNER = id => `partners/${id}/block`
export const UNBLOCK_PARTNER = id => `partners/${id}/unblock`
export const DELETE_PARTNER = id => `partners/${id}`
export const PARTNER_API_CALLS = id => `api-calls/${id}`