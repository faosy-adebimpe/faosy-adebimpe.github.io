import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
// import { immer } from 'zustand/middleware/immer';
import { Store } from './types';
import { produce } from 'immer';

export const useStore = create<Store>()(
    devtools((set) => ({
        navMenu: {
            open: true,
            setOpen: () =>
                set(
                    produce((draft) => {
                        draft.navMenu.open = !draft.navMenu.open;
                    })
                ),
        },
        contactForm: {
            name: '',
            email: '',
            message: '',
            sending: false,
            update: (field, value) =>
                set(
                    produce((draft) => {
                        draft.contactForm[field] = value;
                    })
                ),
            send: () =>
                set(
                    produce((draft) => {
                        const { name, email, message } = draft.contactForm;
                        const formData = { name, email, message };
                        console.log(formData);
                        draft.contactForm.sending = true;
                        // draft.contactForm.sending = false;

                        // setTimeout(() => {
                        //     draft.contactForm.sending = false;
                        //     console.log('stop');
                        // }, 3000);
                    })
                ),
        },
    }))
);

// setDarkMode: () =>
//     set((state) => ({ ...state, darkMode: !state.darkMode })),
