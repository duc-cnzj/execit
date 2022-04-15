import { SET_SYNC_CARD } from "../actionTypes";
const initialState = {
  reload: false,
};

export const selectSyncAt = (state:{card: {syncAt: string}}) => state.card.syncAt;

export default function card(
  state = initialState,
  action: { type: string; data?: { syncAt: string } }
) {
  switch (action.type) {
    case SET_SYNC_CARD:
      return { ...state, syncAt: action.data ? action.data.syncAt : "" };
    default:
      return state;
  }
}
