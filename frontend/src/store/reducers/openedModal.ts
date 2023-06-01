import {
  APPEND_OPENED_MODAL,
  REMOVE_OPENED_MODAL,
  CLEAR_OPENED_MODALS,
} from "../actionTypes";

interface modalState {
  modals: {
    [key: string]: boolean;
  };
}
const initialState: modalState = {
  modals: {},
};

export const modals = (state: { openedModal: modalState }) =>
  state.openedModal.modals;

export default function openedModal(
  state = initialState,
  action: { type: string; data: { key: string } }
) {
  switch (action.type) {
    case REMOVE_OPENED_MODAL:
      delete state.modals[action.data.key];
      return { modals: { ...state.modals } };
    case APPEND_OPENED_MODAL:
      console.log({ ...state.modals, [action.data.key]: true });
      return { modals: { ...state.modals, [action.data.key]: true } };
    case CLEAR_OPENED_MODALS:
      return { modals: {} };
    default:
      return state;
  }
}
