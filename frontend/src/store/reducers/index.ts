import { combineReducers } from "redux";
import shell from "./shell";
import card from "./card";
import openedModal from "./openedModal";
import search from "./search";

export default combineReducers({ shell, card, openedModal, search });
