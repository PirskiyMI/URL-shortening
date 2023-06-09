import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchShortLinks } from '../actionsCreators/linksActionCreator';

export interface IResponse {
   ok: boolean;
   result: IShortenLink;
}

export interface IShortenLink {
   code: string;
   short_link: string;
   full_short_link: string;
   short_link2: string;
   full_short_link2: string;
   share_link: string;
   full_share_link: string;
   original_link: string;
}

export interface ILinkSlice {
   links: IShortenLink[];
   isLoading: boolean;
   error: string | null;
}

const initialState: ILinkSlice = {
   links: [],
   isLoading: false,
   error: '',
};

const linkSlice = createSlice({
   name: 'link',
   initialState,
   reducers: {},
   extraReducers: {
      [fetchShortLinks.pending.type]: (state) => {
         state.isLoading = true;
      },
      [fetchShortLinks.fulfilled.type]: (state, action: PayloadAction<IResponse>) => {
         const { ok, result } = action.payload;

         if (ok) {
            state.isLoading = false;
            state.links.push(result);
         }
      },
      [fetchShortLinks.rejected.type]: (state, action: PayloadAction<string>) => {
         state.isLoading = false;
         state.error = action.payload;
      },
   },
});

export const {} = linkSlice.actions;
export default linkSlice.reducer;
