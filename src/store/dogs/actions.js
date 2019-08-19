export const REQUESTED_DOG = "REQUESTED_DOG";
export const REQUESTED_DOG_SUCCEEDED = "REQUESTED_DOG_SUCCEEDED";
export const REQUESTED_DOG_FAILED = "REQUESTED_DOG_FAILED";
export const FETCHED_DOG = "FETCHED_DOG";

export const requestDog = () => {
  return { type: REQUESTED_DOG };
};

export const requestDogSuccess = data => {
  return { type: REQUESTED_DOG_SUCCEEDED, url: data.message };
};

export const requestDogError = () => {
  return { type: REQUESTED_DOG_FAILED };
};

export const fetchDog = () => {
  return { type: FETCHED_DOG };
};
