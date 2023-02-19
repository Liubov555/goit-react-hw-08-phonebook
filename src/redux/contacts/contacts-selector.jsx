
export const selectAllContacts = state => state.contacts.contactItems;

export const getContacts = store => store.contacts.contactItems;
export const getIsLoading = store => store.contacts.isLoading;
export const getError = store => store.contacts.error;
export const selectFilter = store => store.filter.value;
export const getFilter = store => store.filter.filter;