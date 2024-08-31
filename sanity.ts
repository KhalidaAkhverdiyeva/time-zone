import { createClient } from '@sanity/client';


const client = createClient({
  projectId: 'fitfvqwu', 
  dataset: 'watchdata', 
  apiVersion: '2023-08-30',
  useCdn: true, 
});

export default client;