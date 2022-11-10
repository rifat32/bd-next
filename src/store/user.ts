
import {  USER } from '@/lib/constants';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

interface UserState {
  user: any;

}
export const defaultUser: UserState = {
  user: null,
 
};
export type PaymentMethodName = 'CASH_ON_DELIVERY';

// Original atom.
export const userAtom = atom<UserState>(defaultUser);
export const clearUserAtom = atom(null, (_get, set, _data) => {
  return set(userAtom, defaultUser);
});
export const userInfoAtom = atom(
  (get) => {
    // let me = JSON.parse(localStorage.getItem("me") || "") 
    // return {me}
    get(userAtom).user
  },
  (get, set, data: any) => {
    const prev = get(userAtom);
    console.log("data.me",data.user)
   
      return set(userAtom, { ...prev, user: data.user });

  }
);

