// APP ID 3e075e0f-d302-44d6-9a74-35bce3f787e7
// API KEY  2boDSfxamGK6RybyJbZO2LLjf0iPMg1A

import axios from 'axios';

  const axiosInstance =  axios.create({
  baseURL: 'https://api.nytimes.com/svc/books/v3/lists/'
  });
export default axiosInstance; 