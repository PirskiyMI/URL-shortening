import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchShortLinks = createAsyncThunk('links/fetchShortLinks', async (url: string) => {
   try {
      const response = await axios
         .get('https://api.shrtco.de/v2/shorten?url=' + url)
         .then((res) => res.data);
      return await response;
   } catch (error) {
      return error;
   }
});
