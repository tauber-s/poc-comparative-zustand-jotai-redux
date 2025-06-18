// zustand/middleware
// agrupa varias extensões
// - persist
// salva o estado no localStorage ou sessionStorage
import { persist } from 'zustand/middleware';

const positionStore = createStore()(
  persist(
    (set) => ({
      position: { x: 0, y: 0 },
      setPosition: (position) => set({ position }),
    }),
    { name: 'position-storage' },
  ),
);

// - immer
// permite mutações imutáveis mais fáceis
import { immer } from 'zustand/middleware/immer';

const personStore = createStore()(
  immer((set) => ({
    person: {
      firstName: 'Barbara',
      lastName: 'Hepworth',
      email: 'bhepworth@sculpture.com',
    },
    setPerson: (nextPerson) =>
      set((state) => {
        state.person =
          typeof nextPerson === 'function'
            ? nextPerson(state.person)
            : nextPerson;
      }),
  })),
);

// - devtools
// integra com o Redux DevTools sem precisar do Redux
import { devtools } from 'zustand/middleware';

const useJungleStore = create()(
  devtools((set) => ({
    bears: 0,
    addBear: () =>
      set((state) => ({ bears: state.bears + 1 }), undefined, 'jungle/addBear'),
    fishes: 0,
    addFish: () =>
      set(
        (state) => ({ fishes: state.fishes + 1 }),
        undefined,
        'jungle/addFish',
      ),
  })),
);

// subscribeWithSelector
// permite subscribe em dados especificos com base no state atual
import { subscribeWithSelector } from 'zustand/middleware';

const positionStore = createStore()(
  subscribeWithSelector((set) => ({
    position: { x: 0, y: 0 },
    setPosition: (position) => set({ position }),
  })),
);

// - redux
//  permite atualizar o store usando actions e reducers, como no Redux
import { redux } from 'zustand/middleware';

const personStoreReducer = (
  state,
  action,
) => {
  switch (action.type) {
    case 'person/setFirstName': {
      return { ...state, firstName: action.firstName };
    }
    case 'person/setLastName': {
      return { ...state, lastName: action.lastName };
    }
    case 'person/setEmail': {
      return { ...state, email: action.email };
    }
    default: {
      return state
    }
  };
};

const personStore = createStore()(
  redux(personStoreReducer, personStoreInitialState),
)
