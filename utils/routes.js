export const ADD_NEW_COMPANY = "companies";
export const MODIFY_COMPANY = id => `companies/${id}`
export const FETCH_ALL_COMPANIES = "companies"
export const ADD_NEW_PARTNER = "partners"
export const FETCH_ALL_PARTNERS = "partners"
export const BLOCK_PARTNER = id => `partners/${id}/block`
export const UNBLOCK_PARTNER = id => `partners/${id}/unblock`
export const DELETE_PARTNER = id => `partners/${id}`
export const PARTNER_API_CALLS = id => `api-calls/${id}`

export const GET_COMPANY_PROFILE = id => `company/${id}/get-profile`
export const COMPANY_PROFILE = id => `company/${id}/profile/create`
export const COMPANY_PROFILE_UPDATE = id => `/company/${id}/profile/update`

export const COMPANY_AFFILIATE_CREATE = id => `company/${id}/affiliate/create`
export const COMPANY_AFFILIATE_UPDATE = id => `company/${id}/affiliate/update`
export const COMPANY_AFFILIATE_GET = id => `company/${id}/affiliate`

export const BOARD_OF_DIR_CREATE = id => `company/${id}/boardOfDirector/create`
export const BOARD_OF_DIR_UPDATE = id => `company/${id}/boardOfDirectors/update`
export const BOARD_OF_DIR_GET = id => `company/${id}/boardOfDirectors`

export const MGT_TEAMS_CREATE = id => `company/${id}/management-teams/create`
export const MGT_TEAMS_UPDATE = id => `company/${id}/management-teams/update`
export const MGT_TEAMS_GET = id => `company/${id}/management-teams`

export const PRODUCT_CREATE = id => `company/${id}/products/create`
export const PRODUCT_UPDATE = id => `company/${id}/products/update`
export const PRODUCT_GET = id => `company/${id}/products`

export const RISK_CREATE = id => `company/${id}/risk-factor/create`
export const RISK_UPDATE = id => `company/${id}/risk-factor/update`
export const RISK_GET = id => `company/${id}/risk-factor`

export const SHAREHOLDER_CREATE = id => `company/${id}/share-holders/create`
export const SHAREHOLDER_UPDATE = id => `company/${id}/share-holders/update`
export const SHAREHOLDER_GET = id => `company/${id}/share-holders`

export const SUMMARY_CREATE = id => `company/${id}/summary/create`
export const SUMMARY_UPDATE = id => `company/${id}/summary/update`
export const SUMMARY_GET = id => `company/${id}/summary`