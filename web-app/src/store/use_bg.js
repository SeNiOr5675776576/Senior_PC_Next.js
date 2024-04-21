import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useBg = create(
    persist(
        (set, get) => ({
            image: [],
            indexImage: 0,
            randomImage: () => {
                if (get().image.length - 1 < get().indexImage){
                    set({indexImage: 0})
                }
                else set({indexImage: get().indexImage + 0.5})
            },
            addImage: (data) => set({image: data})
        }),
        {
            name: 'background-storage',
            storage: createJSONStorage(() => localStorage),
        },
    )
)