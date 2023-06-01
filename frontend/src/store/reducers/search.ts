import { SET_VISIBLE } from "../actionTypes";

const initialState = {
  visible: false,
};

export const visible = (state: { search: { visible: boolean } }) =>
  state.search.visible;

export default function search(
  state = initialState,
  action: { type: string; visible: boolean }
) {
  switch (action.type) {
    case SET_VISIBLE:
      return { visible: action.visible };
    default:
      return state;
  }
}
